export const config = { runtime: 'edge' };

const TO_EMAIL = 'info@intery-si.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'INTERY Website <onboarding@resend.dev>';
const MAX_CV_BYTES = 4 * 1024 * 1024;

export default async function handler(req) {
  if (req.method !== 'POST') {
    return json({ success: false, message: 'Method not allowed' }, 405);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ success: false, message: 'Email service is not configured.' }, 500);
  }

  let formData;
  try {
    formData = await req.formData();
  } catch {
    return json({ success: false, message: 'Invalid submission.' }, 400);
  }

  if (formData.get('_honey')) {
    return json({ success: true });
  }

  const type = (formData.get('_type') || 'contact').toString();
  const built = type === 'application'
    ? await buildApplication(formData)
    : buildContact(formData);

  if (built.error) return json({ success: false, message: built.error }, 400);

  const payload = {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: built.subject,
    html: built.html,
    reply_to: built.replyTo,
  };
  if (built.attachments?.length) payload.attachments = built.attachments;

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    console.error('Resend error', resp.status, detail);
    return json({ success: false, message: 'Could not send your message. Please try again.' }, 502);
  }

  return json({ success: true, message: 'Sent' });
}

function buildContact(fd) {
  const fields = {
    'First Name': str(fd.get('firstName')),
    'Last Name': str(fd.get('lastName')),
    'Company': str(fd.get('company')) || '—',
    'Email': str(fd.get('email')),
    'Service Needed': str(fd.get('service')) || '—',
    'Project Details': str(fd.get('message')),
  };
  if (!fields['First Name'] || !fields['Last Name'] || !fields['Email'] || !fields['Project Details']) {
    return { error: 'Please fill out all required fields.' };
  }
  return {
    subject: `New Contact Inquiry — ${fields['First Name']} ${fields['Last Name']}`,
    html: buildHtml('Contact Inquiry', fields),
    replyTo: fields['Email'],
  };
}

async function buildApplication(fd) {
  const fields = {
    'First Name': str(fd.get('firstName')),
    'Last Name': str(fd.get('lastName')),
    'Email': str(fd.get('email')),
    'Phone': str(fd.get('phone')),
    'Position': str(fd.get('position')),
    'Years of Experience': str(fd.get('experience')),
    'Country of Residence': str(fd.get('country')),
    'Certifications': str(fd.get('certifications')) || '—',
    'Languages': str(fd.get('languages')) || '—',
    'Cover Message': str(fd.get('message')) || '—',
  };
  const required = ['First Name', 'Last Name', 'Email', 'Phone', 'Position', 'Years of Experience', 'Country of Residence'];
  for (const k of required) {
    if (!fields[k]) return { error: 'Please fill out all required fields.' };
  }

  const attachments = [];
  const cv = fd.get('cv');
  if (cv && typeof cv === 'object' && 'arrayBuffer' in cv && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) {
      return { error: 'CV file must be under 4MB.' };
    }
    const buf = await cv.arrayBuffer();
    attachments.push({
      filename: cv.name || 'cv',
      content: arrayBufferToBase64(buf),
    });
  }

  return {
    subject: `New Job Application — ${fields['First Name']} ${fields['Last Name']} (${fields['Position']})`,
    html: buildHtml('Job Application', fields),
    replyTo: fields['Email'],
    attachments,
  };
}

function buildHtml(title, fields) {
  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;background:#f5f7fa;font-weight:600;border-bottom:1px solid #e5e7eb;width:200px;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(String(v ?? '—')).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:680px;margin:0 auto;padding:24px;color:#1a1a1a;background:#fff;">
    <div style="border-left:4px solid #1a6fa8;padding-left:16px;margin-bottom:24px;">
      <h2 style="margin:0;font-size:20px;color:#1a1a1a;">${escapeHtml(title)}</h2>
      <p style="margin:6px 0 0;color:#6b7280;font-size:13px;">Submitted via intery-si.com</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">${rows}</table>
    <p style="margin-top:24px;font-size:12px;color:#9ca3af;">Reply directly to this email to respond to the sender.</p>
  </body></html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function str(v) {
  if (v == null) return '';
  return String(v).trim();
}

function arrayBufferToBase64(buf) {
  const bytes = new Uint8Array(buf);
  const chunk = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
