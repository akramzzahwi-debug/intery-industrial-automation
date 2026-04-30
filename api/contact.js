export const config = { runtime: 'edge' };

const TO_EMAIL = 'info@intery-si.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'INTERY Website <onboarding@resend.dev>';
const SITE_URL = process.env.SITE_URL || 'https://intery-si.com';
const MAX_CV_BYTES = 4 * 1024 * 1024;
const SUPPORTED_LANGS = ['en', 'sl', 'de', 'pl', 'es', 'sk'];

const BRAND = {
  blue: '#2980B9',
  text: '#1a1a1a',
  muted: '#6b7280',
  light: '#9ca3af',
  rowAlt: '#f8fafc',
  border: '#e5e7eb',
};

const COMPANY = {
  name: 'INTERY d.o.o.',
  address: 'Rimska ulica 4, Slovenska Bistrica 2310, Slovenia',
  phone: '+386 40 519 789',
  email: 'info@intery-si.com',
};

const LANG_NAMES = {
  en: 'English', sl: 'Slovenian', de: 'German', pl: 'Polish', es: 'Spanish', sk: 'Slovak',
};

const T = {
  en: {
    'subject.contact': "We've received your inquiry — INTERY",
    'subject.application': "We've received your application for {position} — INTERY",
    'greeting': 'Hello {firstName},',
    'body.contact': "Thank you for reaching out. We've received your inquiry and a member of our team will respond within 24 hours.",
    'body.application': "Thank you for your interest in joining INTERY. We've received your application for the position of <strong>{position}</strong> and our hiring team will review it and respond within one week.",
    'receipt.contact': 'Inquiry details',
    'receipt.application': 'Application details',
    'signoff': 'Best wishes,',
    'team': 'The INTERY Team',
    'footer.reason': 'You received this email because you submitted a form on intery-si.com.',
    'cv.attached': 'CV attached: {filename}',
    'field.firstName': 'First Name',
    'field.lastName': 'Last Name',
    'field.company': 'Company',
    'field.email': 'Email',
    'field.phone': 'Phone',
    'field.service': 'Service Needed',
    'field.message.contact': 'Project Details',
    'field.message.application': 'Cover Message',
    'field.position': 'Position',
    'field.experience': 'Years of Experience',
    'field.country': 'Country of Residence',
    'field.certifications': 'Certifications',
    'field.languages': 'Languages',
    'field.cv': 'CV',
  },
  sl: {
    'subject.contact': 'Prejeli smo Vaše povpraševanje — INTERY',
    'subject.application': 'Prejeli smo Vašo prijavo za {position} — INTERY',
    'greeting': 'Pozdravljeni {firstName},',
    'body.contact': 'Hvala, da ste nas kontaktirali. Vaše povpraševanje smo prejeli in član naše ekipe Vam bo odgovoril v roku 24 ur.',
    'body.application': 'Hvala za Vaš interes za zaposlitev pri podjetju INTERY. Vašo prijavo za delovno mesto <strong>{position}</strong> smo prejeli in naša kadrovska ekipa jo bo pregledala in Vam odgovorila v roku enega tedna.',
    'receipt.contact': 'Podrobnosti povpraševanja',
    'receipt.application': 'Podrobnosti prijave',
    'signoff': 'Lep pozdrav,',
    'team': 'Ekipa INTERY',
    'footer.reason': 'To e-poštno sporočilo ste prejeli, ker ste oddali obrazec na intery-si.com.',
    'cv.attached': 'Priložen življenjepis: {filename}',
    'field.firstName': 'Ime',
    'field.lastName': 'Priimek',
    'field.company': 'Podjetje',
    'field.email': 'E-pošta',
    'field.phone': 'Telefon',
    'field.service': 'Potrebna storitev',
    'field.message.contact': 'Podrobnosti projekta',
    'field.message.application': 'Sporočilo',
    'field.position': 'Pozicija',
    'field.experience': 'Leta izkušenj',
    'field.country': 'Država prebivanja',
    'field.certifications': 'Certifikati',
    'field.languages': 'Jeziki',
    'field.cv': 'Življenjepis',
  },
  de: {
    'subject.contact': 'Wir haben Ihre Anfrage erhalten — INTERY',
    'subject.application': 'Wir haben Ihre Bewerbung für {position} erhalten — INTERY',
    'greeting': 'Guten Tag {firstName} {lastName},',
    'body.contact': 'Vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Anfrage erhalten und ein Mitglied unseres Teams wird sich innerhalb von 24 Stunden bei Ihnen melden.',
    'body.application': 'Vielen Dank für Ihr Interesse an einer Mitarbeit bei INTERY. Wir haben Ihre Bewerbung für die Position <strong>{position}</strong> erhalten. Unser HR-Team wird Ihre Unterlagen prüfen und sich innerhalb einer Woche bei Ihnen melden.',
    'receipt.contact': 'Details Ihrer Anfrage',
    'receipt.application': 'Details Ihrer Bewerbung',
    'signoff': 'Mit freundlichen Grüßen,',
    'team': 'Das INTERY Team',
    'footer.reason': 'Sie erhalten diese E-Mail, weil Sie ein Formular auf intery-si.com ausgefüllt haben.',
    'cv.attached': 'Lebenslauf beigefügt: {filename}',
    'field.firstName': 'Vorname',
    'field.lastName': 'Nachname',
    'field.company': 'Firma',
    'field.email': 'E-Mail',
    'field.phone': 'Telefon',
    'field.service': 'Gewünschte Leistung',
    'field.message.contact': 'Projektdetails',
    'field.message.application': 'Anschreiben',
    'field.position': 'Position',
    'field.experience': 'Berufserfahrung (Jahre)',
    'field.country': 'Wohnsitzland',
    'field.certifications': 'Zertifikate',
    'field.languages': 'Sprachen',
    'field.cv': 'Lebenslauf',
  },
  pl: {
    'subject.contact': 'Otrzymaliśmy Państwa zapytanie — INTERY',
    'subject.application': 'Otrzymaliśmy Państwa aplikację na stanowisko {position} — INTERY',
    'greeting': 'Dzień dobry {firstName},',
    'body.contact': 'Dziękujemy za kontakt. Otrzymaliśmy Państwa zapytanie i członek naszego zespołu odpowie w ciągu 24 godzin.',
    'body.application': 'Dziękujemy za zainteresowanie pracą w INTERY. Otrzymaliśmy Państwa aplikację na stanowisko <strong>{position}</strong>. Nasz zespół HR przeanalizuje zgłoszenie i odpowie w ciągu tygodnia.',
    'receipt.contact': 'Szczegóły zapytania',
    'receipt.application': 'Szczegóły aplikacji',
    'signoff': 'Z wyrazami szacunku,',
    'team': 'Zespół INTERY',
    'footer.reason': 'Otrzymali Państwo tę wiadomość, ponieważ wypełnili Państwo formularz na stronie intery-si.com.',
    'cv.attached': 'Załączone CV: {filename}',
    'field.firstName': 'Imię',
    'field.lastName': 'Nazwisko',
    'field.company': 'Firma',
    'field.email': 'E-mail',
    'field.phone': 'Telefon',
    'field.service': 'Wymagana usługa',
    'field.message.contact': 'Szczegóły projektu',
    'field.message.application': 'Wiadomość',
    'field.position': 'Stanowisko',
    'field.experience': 'Lata doświadczenia',
    'field.country': 'Kraj zamieszkania',
    'field.certifications': 'Certyfikaty',
    'field.languages': 'Języki',
    'field.cv': 'CV',
  },
  es: {
    'subject.contact': 'Hemos recibido su consulta — INTERY',
    'subject.application': 'Hemos recibido su candidatura para {position} — INTERY',
    'greeting': 'Estimado/a {firstName},',
    'body.contact': 'Gracias por ponerse en contacto. Hemos recibido su consulta y un miembro de nuestro equipo le responderá en un plazo de 24 horas.',
    'body.application': 'Gracias por su interés en formar parte de INTERY. Hemos recibido su candidatura para el puesto de <strong>{position}</strong>. Nuestro equipo de selección revisará su solicitud y le responderá en un plazo de una semana.',
    'receipt.contact': 'Detalles de la consulta',
    'receipt.application': 'Detalles de la candidatura',
    'signoff': 'Atentamente,',
    'team': 'El equipo de INTERY',
    'footer.reason': 'Ha recibido este correo electrónico porque envió un formulario en intery-si.com.',
    'cv.attached': 'CV adjunto: {filename}',
    'field.firstName': 'Nombre',
    'field.lastName': 'Apellido',
    'field.company': 'Empresa',
    'field.email': 'Correo electrónico',
    'field.phone': 'Teléfono',
    'field.service': 'Servicio requerido',
    'field.message.contact': 'Detalles del proyecto',
    'field.message.application': 'Mensaje',
    'field.position': 'Puesto',
    'field.experience': 'Años de experiencia',
    'field.country': 'País de residencia',
    'field.certifications': 'Certificaciones',
    'field.languages': 'Idiomas',
    'field.cv': 'Currículum',
  },
  sk: {
    'subject.contact': 'Prijali sme Váš dopyt — INTERY',
    'subject.application': 'Prijali sme Vašu prihlášku na pozíciu {position} — INTERY',
    'greeting': 'Dobrý deň {firstName},',
    'body.contact': 'Ďakujeme, že ste nás kontaktovali. Váš dopyt sme prijali a člen nášho tímu Vám odpovie do 24 hodín.',
    'body.application': 'Ďakujeme za Váš záujem o prácu v spoločnosti INTERY. Prijali sme Vašu prihlášku na pozíciu <strong>{position}</strong>. Náš HR tím Vašu žiadosť posúdi a odpovie Vám do jedného týždňa.',
    'receipt.contact': 'Podrobnosti dopytu',
    'receipt.application': 'Podrobnosti prihlášky',
    'signoff': 'S úctou,',
    'team': 'Tím INTERY',
    'footer.reason': 'Tento e-mail ste dostali, pretože ste odoslali formulár na stránke intery-si.com.',
    'cv.attached': 'Priložený životopis: {filename}',
    'field.firstName': 'Meno',
    'field.lastName': 'Priezvisko',
    'field.company': 'Spoločnosť',
    'field.email': 'E-mail',
    'field.phone': 'Telefón',
    'field.service': 'Požadovaná služba',
    'field.message.contact': 'Podrobnosti projektu',
    'field.message.application': 'Sprievodný list',
    'field.position': 'Pozícia',
    'field.experience': 'Roky praxe',
    'field.country': 'Krajina pobytu',
    'field.certifications': 'Certifikáty',
    'field.languages': 'Jazyky',
    'field.cv': 'Životopis',
  },
};

function t(lang, key, vars) {
  const dict = T[lang] || T.en;
  let s = dict[key] || T.en[key] || key;
  if (vars) for (const k in vars) s = s.replaceAll(`{${k}}`, vars[k]);
  return s;
}

function pickLang(raw) {
  const v = (raw || '').toString().toLowerCase().trim();
  return SUPPORTED_LANGS.includes(v) ? v : 'en';
}

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

  if (formData.get('_honey')) return json({ success: true });

  const type = (formData.get('_type') || 'contact').toString();
  const lang = pickLang(formData.get('language'));

  const built = type === 'application'
    ? await buildApplication(formData, lang)
    : buildContact(formData, lang);

  if (built.error) return json({ success: false, message: built.error }, 400);

  const clientPayload = {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: built.clientSubject,
    html: built.clientHtml,
  };
  if (isLikelyEmail(built.replyTo)) clientPayload.reply_to = built.replyTo;
  if (built.attachments?.length) clientPayload.attachments = built.attachments;

  const clientResp = await sendEmail(apiKey, clientPayload);
  if (!clientResp.ok) {
    const detail = await clientResp.text();
    console.error('Resend error (client email)', clientResp.status, detail);
    return json({ success: false, message: 'Could not send your message. Please try again.' }, 502);
  }

  if (built.replyTo && isLikelyEmail(built.replyTo)) {
    const visitorPayload = {
      from: FROM_EMAIL,
      to: [built.replyTo],
      subject: built.visitorSubject,
      html: built.visitorHtml,
      reply_to: TO_EMAIL,
    };
    try {
      const r = await sendEmail(apiKey, visitorPayload);
      if (!r.ok) {
        const detail = await r.text();
        console.error('Resend error (visitor auto-reply)', r.status, detail);
      }
    } catch (e) {
      console.error('Visitor auto-reply threw', e);
    }
  }

  return json({ success: true, message: 'Sent' });
}

function buildContact(fd, lang) {
  const fields = {
    firstName: str(fd.get('firstName')),
    lastName: str(fd.get('lastName')),
    company: str(fd.get('company')),
    email: str(fd.get('email')),
    service: str(fd.get('service')),
    message: str(fd.get('message')),
  };
  if (!fields.firstName || !fields.lastName || !fields.email || !fields.message) {
    return { error: 'Please fill out all required fields.' };
  }

  const visitorRows = [
    [t(lang, 'field.firstName'), fields.firstName],
    [t(lang, 'field.lastName'), fields.lastName],
    [t(lang, 'field.company'), fields.company || '—'],
    [t(lang, 'field.email'), fields.email],
    [t(lang, 'field.service'), fields.service || '—'],
    [t(lang, 'field.message.contact'), fields.message],
  ];

  const clientRows = [
    ['First Name', fields.firstName],
    ['Last Name', fields.lastName],
    ['Company', fields.company || '—'],
    ['Email', fields.email],
    ['Service Needed', fields.service || '—'],
    ['Project Details', fields.message],
  ];

  return {
    clientSubject: `New Contact Inquiry — ${fields.firstName} ${fields.lastName}`,
    clientHtml: renderEmail({
      title: 'New Contact Inquiry',
      intro: `New inquiry submitted via the website (${LANG_NAMES[lang]} version).`,
      receiptHeading: 'Inquiry details',
      rows: clientRows,
      sign: 'Reply to this email to respond directly to the visitor.',
    }),
    visitorSubject: t(lang, 'subject.contact'),
    visitorHtml: renderEmail({
      greeting: t(lang, 'greeting', fields),
      bodyHtml: t(lang, 'body.contact'),
      receiptHeading: t(lang, 'receipt.contact'),
      rows: visitorRows,
      signoff: t(lang, 'signoff'),
      team: t(lang, 'team'),
      footerReason: t(lang, 'footer.reason'),
    }),
    replyTo: fields.email,
  };
}

async function buildApplication(fd, lang) {
  const fields = {
    firstName: str(fd.get('firstName')),
    lastName: str(fd.get('lastName')),
    email: str(fd.get('email')),
    phone: str(fd.get('phone')),
    position: str(fd.get('position')),
    experience: str(fd.get('experience')),
    country: str(fd.get('country')),
    certifications: str(fd.get('certifications')),
    languages: str(fd.get('languages')),
    message: str(fd.get('message')),
  };
  const required = ['firstName', 'lastName', 'email', 'phone', 'position', 'experience', 'country'];
  for (const k of required) if (!fields[k]) return { error: 'Please fill out all required fields.' };

  const attachments = [];
  let cvFilename = null;
  const cv = fd.get('cv');
  if (cv && typeof cv === 'object' && 'arrayBuffer' in cv && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) return { error: 'CV file must be under 4MB.' };
    const buf = await cv.arrayBuffer();
    cvFilename = cv.name || 'cv';
    attachments.push({ filename: cvFilename, content: arrayBufferToBase64(buf) });
  }

  const visitorRows = [
    [t(lang, 'field.firstName'), fields.firstName],
    [t(lang, 'field.lastName'), fields.lastName],
    [t(lang, 'field.email'), fields.email],
    [t(lang, 'field.phone'), fields.phone],
    [t(lang, 'field.position'), fields.position],
    [t(lang, 'field.experience'), fields.experience],
    [t(lang, 'field.country'), fields.country],
    [t(lang, 'field.certifications'), fields.certifications || '—'],
    [t(lang, 'field.languages'), fields.languages || '—'],
    [t(lang, 'field.message.application'), fields.message || '—'],
  ];
  if (cvFilename) visitorRows.push([t(lang, 'field.cv'), cvFilename]);

  const clientRows = [
    ['First Name', fields.firstName],
    ['Last Name', fields.lastName],
    ['Email', fields.email],
    ['Phone', fields.phone],
    ['Position', fields.position],
    ['Years of Experience', fields.experience],
    ['Country of Residence', fields.country],
    ['Certifications', fields.certifications || '—'],
    ['Languages', fields.languages || '—'],
    ['Cover Message', fields.message || '—'],
  ];
  if (cvFilename) clientRows.push(['CV', `Attached: ${cvFilename}`]);

  return {
    clientSubject: `New Job Application — ${fields.firstName} ${fields.lastName} (${fields.position})`,
    clientHtml: renderEmail({
      title: 'New Job Application',
      intro: `New application submitted via the website (${LANG_NAMES[lang]} version).`,
      receiptHeading: 'Application details',
      rows: clientRows,
      sign: 'Reply to this email to respond directly to the candidate.',
    }),
    visitorSubject: t(lang, 'subject.application', { position: fields.position }),
    visitorHtml: renderEmail({
      greeting: t(lang, 'greeting', fields),
      bodyHtml: t(lang, 'body.application', { position: escapeHtml(fields.position) }),
      receiptHeading: t(lang, 'receipt.application'),
      rows: visitorRows,
      signoff: t(lang, 'signoff'),
      team: t(lang, 'team'),
      footerReason: t(lang, 'footer.reason'),
    }),
    replyTo: fields.email,
    attachments,
  };
}

function renderEmail({ title, greeting, bodyHtml, intro, receiptHeading, rows, signoff, team, sign, footerReason }) {
  const rowsHtml = rows.map(([label, value], i) => `
    <tr>
      <td style="padding:12px 16px;background:${i % 2 === 0 ? BRAND.rowAlt : '#ffffff'};font-weight:600;font-size:14px;color:${BRAND.text};vertical-align:top;width:200px;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;background:${i % 2 === 0 ? BRAND.rowAlt : '#ffffff'};font-size:14px;color:${BRAND.text};vertical-align:top;">${escapeHtml(String(value ?? '—')).replace(/\n/g, '<br>')}</td>
    </tr>`).join('');

  const titleBlock = title ? `<h1 style="margin:0 0 8px;font-size:22px;line-height:1.3;color:${BRAND.text};font-weight:700;">${escapeHtml(title)}</h1>` : '';
  const introBlock = intro ? `<p style="margin:0 0 24px;font-size:14px;line-height:1.55;color:${BRAND.muted};">${escapeHtml(intro)}</p>` : '';
  const greetingBlock = greeting ? `<p style="margin:0 0 16px;font-size:16px;line-height:1.55;color:${BRAND.text};">${escapeHtml(greeting)}</p>` : '';
  const bodyBlock = bodyHtml ? `<p style="margin:0 0 24px;font-size:16px;line-height:1.55;color:${BRAND.text};">${bodyHtml}</p>` : '';

  const headingBlock = receiptHeading
    ? `<p style="margin:32px 0 12px;font-size:13px;line-height:1.4;color:${BRAND.blue};font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">${escapeHtml(receiptHeading)}</p>`
    : '';

  const tableBlock = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.border};border-radius:6px;overflow:hidden;">${rowsHtml}</table>`;

  const signoffBlock = (signoff || team)
    ? `<div style="margin:32px 0 0;font-size:16px;line-height:1.55;color:${BRAND.text};">
        ${signoff ? `<div>${escapeHtml(signoff)}</div>` : ''}
        ${team ? `<div style="font-weight:600;">${escapeHtml(team)}</div>` : ''}
      </div>`
    : '';

  const signNote = sign
    ? `<p style="margin:32px 0 0;font-size:13px;line-height:1.55;color:${BRAND.muted};font-style:italic;">${escapeHtml(sign)}</p>`
    : '';

  const reasonBlock = footerReason
    ? `<p style="margin:16px 0 0;font-size:12px;line-height:1.5;color:${BRAND.light};">${escapeHtml(footerReason)}</p>`
    : '';

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f4f6f8;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
        <tr><td style="height:4px;background:${BRAND.blue};line-height:4px;font-size:0;">&nbsp;</td></tr>
        <tr><td align="center" style="padding:32px 32px 16px;">
          <img src="${SITE_URL}/img/email-logo.png" alt="INTERY" width="140" style="display:block;border:0;outline:none;text-decoration:none;height:auto;max-width:140px;">
        </td></tr>
        <tr><td style="padding:8px 32px 32px;">
          ${titleBlock}
          ${introBlock}
          ${greetingBlock}
          ${bodyBlock}
          ${headingBlock}
          ${tableBlock}
          ${signoffBlock}
          ${signNote}
        </td></tr>
        <tr><td style="padding:24px 32px 32px;border-top:1px solid ${BRAND.border};background:#fafbfc;">
          <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.muted};">
            <strong style="color:${BRAND.text};">${COMPANY.name}</strong><br>
            ${COMPANY.address}<br>
            <a href="tel:${COMPANY.phone.replace(/\s/g, '')}" style="color:${BRAND.muted};text-decoration:none;">${COMPANY.phone}</a>
            &nbsp;·&nbsp;
            <a href="mailto:${COMPANY.email}" style="color:${BRAND.muted};text-decoration:none;">${COMPANY.email}</a>
          </p>
          ${reasonBlock}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

async function sendEmail(apiKey, payload) {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

function isLikelyEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
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
