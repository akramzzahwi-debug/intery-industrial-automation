# Branded i18n contact form emails

**Date:** 2026-04-30
**Project:** INTERY website (`intery-si.com`)
**Status:** Approved design — ready for implementation

## Goal

Two enhancements to the existing contact form pipeline:

1. **Auto-reply to the visitor** confirming we received their submission, in their site language, with a recap of what they sent.
2. **Redesigned client-facing inquiry email** (the one that lands in `info@intery-si.com`) with a clean, branded HTML template — replaces today's plain table.

Both emails share one branded visual template. Visitor auto-reply is translated into 6 languages (EN, SL, DE, PL, ES, SK). Client-facing email stays English (internal-facing, scannable).

## Architecture

No new third-party services. Same Vercel Edge function (`api/contact.js`), same Resend account, same DNS, same Squarespace setup. One new Vercel env var: `SITE_URL` (for logo image hosting — see Logo handling section).

Per submission, the function now sends **two** emails:

1. Client inquiry → `info@intery-si.com` (English, branded redesign of current plain table)
2. Visitor auto-reply → submitter's email (visitor's site language)

Order: client inquiry sent first. If the auto-reply fails (e.g. invalid submitter email syntax), client email still goes through and form returns success — auto-reply errors are logged via `console.error` but never surfaced to the visitor.

## Frontend changes

Both forms gain a hidden language input populated from the current site language state.

**Files affected:**
- `index.html` — add `<input type="hidden" name="language" id="contact-language">` inside the contact form
- `careers.html` — add same hidden input inside the application form
- `js/main.js` — populate `#contact-language` value just before the existing fetch call, reading from `document.documentElement.lang` (which is kept in sync with `localStorage.getItem('intery-lang')` by the existing i18n logic at `js/main.js:481`)
- `js/careers-i18n.js` — same population logic for the careers form

If the language hidden field is absent or contains a value not in the supported set (`en|sl|de|pl|es|sk`), the function defaults to English.

## Backend changes (`api/contact.js`)

Single file, refactored. Key additions:

- `T` translation dictionary keyed by language code → string key → translated value (~24 keys × 6 languages ≈ 144 strings total). Inline in the file.
- `t(lang, key, vars)` lookup helper with `{var}` interpolation and English fallback.
- `buildClientEmailHtml(type, fields, lang)` — renders the branded HTML for the inquiry email to `info@`. English UI, but includes a footer note showing the visitor's site language (e.g. "Submitted via intery-si.com — German version").
- `buildVisitorEmailHtml(type, fields, lang, position?)` — renders the branded HTML for the auto-reply, fully translated.
- `sendEmail(payload)` — small wrapper around the existing Resend POST so we can call it twice cleanly.
- After successful client email send, fire visitor auto-reply. Wrap in try/catch — failures logged, don't fail the request.

## Visual template (shared by both emails)

- 600px max width, centered, `#ffffff` background
- 4px brand-blue (`#2980B9`) accent bar at the top
- INTERY logo, ~140px wide, centered, top-padded ~32px
  - Source: `https://intery-si.com/img/email-logo.png`, hosted alongside the site
  - During implementation, create `img/email-logo.png` from the existing `img/logo-transparent.png` (currently 6.5MB), resized to ~600px wide and ≤80KB
  - Logo URL configurable via `SITE_URL` env var, defaulting to `https://intery-si.com`. For the demo period before custom domain flip, set `SITE_URL=https://intery-demo-from-az.vercel.app` in Vercel env vars
- Body: system sans-serif stack (`-apple-system, "Segoe UI", Roboto, sans-serif`), 16px, 1.55 line-height, `#1a1a1a` text
- Section headings (e.g. "Inquiry details:"): brand-blue, 14px uppercase semibold, ~1px letter-spacing
- Submission recap table: 2 columns (label / value), no borders, alternating row backgrounds (`#f8fafc` / `#ffffff`), 12px row padding, label column 200px width semibold
- Sign-off block: signoff line + team line, 16px, dark text, ~32px top margin
- Footer: 12px gray text, ~32px above content gap, with company info block + reason line:

```
INTERY d.o.o.
Rimska ulica 4, Slovenska Bistrica 2310, Slovenia
+386 40 519 789  ·  info@intery-si.com

[localized "you received this because..." line]
```

All styling inline (`style="..."`) on `<table>` and `<td>` elements — table-based layout for maximum email client compatibility (Outlook desktop, Gmail, Apple Mail, mobile clients). No external CSS, no `<style>` tags, no flexbox/grid.

## Translation strings (full table)

### Subjects

**Contact form auto-reply subject:**
| Lang | Subject |
|---|---|
| en | We've received your inquiry — INTERY |
| sl | Prejeli smo Vaše povpraševanje — INTERY |
| de | Wir haben Ihre Anfrage erhalten — INTERY |
| pl | Otrzymaliśmy Państwa zapytanie — INTERY |
| es | Hemos recibido su consulta — INTERY |
| sk | Prijali sme Váš dopyt — INTERY |

**Application auto-reply subject** (`{position}` interpolated):
| Lang | Subject |
|---|---|
| en | We've received your application for {position} — INTERY |
| sl | Prejeli smo Vašo prijavo za {position} — INTERY |
| de | Wir haben Ihre Bewerbung für {position} erhalten — INTERY |
| pl | Otrzymaliśmy Państwa aplikację na stanowisko {position} — INTERY |
| es | Hemos recibido su candidatura para {position} — INTERY |
| sk | Prijali sme Vašu prihlášku na pozíciu {position} — INTERY |

**Client inquiry subjects** (English only, internal):
- Contact: `New Contact Inquiry — {firstName} {lastName}`
- Application: `New Job Application — {firstName} {lastName} ({position})`

### Greetings (`{firstName}`, `{lastName}` interpolated)

| Lang | Greeting |
|---|---|
| en | Hello {firstName}, |
| sl | Pozdravljeni {firstName}, |
| de | Guten Tag {firstName} {lastName}, |
| pl | Dzień dobry {firstName}, |
| es | Estimado/a {firstName}, |
| sk | Dobrý deň {firstName}, |

### Body — contact form

| Lang | Body |
|---|---|
| en | Thank you for reaching out. We've received your inquiry and a member of our team will respond within 24 hours. |
| sl | Hvala, da ste nas kontaktirali. Vaše povpraševanje smo prejeli in član naše ekipe Vam bo odgovoril v roku 24 ur. |
| de | Vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Anfrage erhalten und ein Mitglied unseres Teams wird sich innerhalb von 24 Stunden bei Ihnen melden. |
| pl | Dziękujemy za kontakt. Otrzymaliśmy Państwa zapytanie i członek naszego zespołu odpowie w ciągu 24 godzin. |
| es | Gracias por ponerse en contacto. Hemos recibido su consulta y un miembro de nuestro equipo le responderá en un plazo de 24 horas. |
| sk | Ďakujeme, že ste nás kontaktovali. Váš dopyt sme prijali a člen nášho tímu Vám odpovie do 24 hodín. |

### Body — job application (`{position}` interpolated)

| Lang | Body |
|---|---|
| en | Thank you for your interest in joining INTERY. We've received your application for the position of **{position}** and our hiring team will review it and respond within one week. |
| sl | Hvala za Vaš interes za zaposlitev pri podjetju INTERY. Vašo prijavo za delovno mesto **{position}** smo prejeli in naša kadrovska ekipa jo bo pregledala in Vam odgovorila v roku enega tedna. |
| de | Vielen Dank für Ihr Interesse an einer Mitarbeit bei INTERY. Wir haben Ihre Bewerbung für die Position **{position}** erhalten. Unser HR-Team wird Ihre Unterlagen prüfen und sich innerhalb einer Woche bei Ihnen melden. |
| pl | Dziękujemy za zainteresowanie pracą w INTERY. Otrzymaliśmy Państwa aplikację na stanowisko **{position}**. Nasz zespół HR przeanalizuje zgłoszenie i odpowie w ciągu tygodnia. |
| es | Gracias por su interés en formar parte de INTERY. Hemos recibido su candidatura para el puesto de **{position}**. Nuestro equipo de selección revisará su solicitud y le responderá en un plazo de una semana. |
| sk | Ďakujeme za Váš záujem o prácu v spoločnosti INTERY. Prijali sme Vašu prihlášku na pozíciu **{position}**. Náš HR tím Vašu žiadosť posúdi a odpovie Vám do jedného týždňa. |

### Receipt heading

**Contact form** ("Inquiry details:"):
| Lang | Heading |
|---|---|
| en | Inquiry details |
| sl | Podrobnosti povpraševanja |
| de | Details Ihrer Anfrage |
| pl | Szczegóły zapytania |
| es | Detalles de la consulta |
| sk | Podrobnosti dopytu |

**Application** ("Application details:"):
| Lang | Heading |
|---|---|
| en | Application details |
| sl | Podrobnosti prijave |
| de | Details Ihrer Bewerbung |
| pl | Szczegóły aplikacji |
| es | Detalles de la candidatura |
| sk | Podrobnosti prihlášky |

### Sign-offs

| Lang | Sign-off | Team line |
|---|---|---|
| en | Best wishes, | The INTERY Team |
| sl | Lep pozdrav, | Ekipa INTERY |
| de | Mit freundlichen Grüßen, | Das INTERY Team |
| pl | Z wyrazami szacunku, | Zespół INTERY |
| es | Atentamente, | El equipo de INTERY |
| sk | S úctou, | Tím INTERY |

### Footer reason line

| Lang | Line |
|---|---|
| en | You received this email because you submitted a form on intery-si.com. |
| sl | To e-poštno sporočilo ste prejeli, ker ste oddali obrazec na intery-si.com. |
| de | Sie erhalten diese E-Mail, weil Sie ein Formular auf intery-si.com ausgefüllt haben. |
| pl | Otrzymali Państwo tę wiadomość, ponieważ wypełnili Państwo formularz na stronie intery-si.com. |
| es | Ha recibido este correo electrónico porque envió un formulario en intery-si.com. |
| sk | Tento e-mail ste dostali, pretože ste odoslali formulár na stránke intery-si.com. |

### CV-attached note (application auto-reply only, `{filename}` interpolated)

| Lang | Line |
|---|---|
| en | CV attached: {filename} |
| sl | Priložen življenjepis: {filename} |
| de | Lebenslauf beigefügt: {filename} |
| pl | Załączone CV: {filename} |
| es | CV adjunto: {filename} |
| sk | Priložený životopis: {filename} |

### Field labels

| en | sl | de | pl | es | sk |
|---|---|---|---|---|---|
| First Name | Ime | Vorname | Imię | Nombre | Meno |
| Last Name | Priimek | Nachname | Nazwisko | Apellido | Priezvisko |
| Company | Podjetje | Firma | Firma | Empresa | Spoločnosť |
| Email | E-pošta | E-Mail | E-mail | Correo electrónico | E-mail |
| Phone | Telefon | Telefon | Telefon | Teléfono | Telefón |
| Service Needed | Potrebna storitev | Gewünschte Leistung | Wymagana usługa | Servicio requerido | Požadovaná služba |
| Project Details | Podrobnosti projekta | Projektdetails | Szczegóły projektu | Detalles del proyecto | Podrobnosti projektu |
| Cover Message | Sporočilo | Anschreiben | Wiadomość | Mensaje | Sprievodný list |
| Position | Pozicija | Position | Stanowisko | Puesto | Pozícia |
| Years of Experience | Leta izkušenj | Berufserfahrung (Jahre) | Lata doświadczenia | Años de experiencia | Roky praxe |
| Country of Residence | Država prebivanja | Wohnsitzland | Kraj zamieszkania | País de residencia | Krajina pobytu |
| Certifications | Certifikati | Zertifikate | Certyfikaty | Certificaciones | Certifikáty |
| Languages | Jeziki | Sprachen | Języki | Idiomas | Jazyky |
| CV | Življenjepis | Lebenslauf | CV | Currículum | Životopis |

The visitor's actual message text (`Project Details` / `Cover Message` value) is shown verbatim — never translated.

## Email metadata

### Visitor auto-reply
- **From:** value of `FROM_EMAIL` env var (`INTERY Website <noreply@intery-si.com>`)
- **To:** submitter's email (validated for basic syntax before sending)
- **Reply-To:** `info@intery-si.com` — so if visitor replies to the auto-reply, it lands in the client's inbox
- **Subject:** translated, per language × form type (see table above)
- **Attachments:** none. CV is intentionally NOT re-attached to the visitor's auto-reply (they already have it on their machine; reduces email size and avoids spam-filter attachment scrutiny)

### Client inquiry email
- **From:** value of `FROM_EMAIL` env var
- **To:** `info@intery-si.com` (constant)
- **Reply-To:** submitter's email — clicking Reply in Gmail goes to the candidate
- **Subject:** English (see above)
- **Attachments:** for application form, the CV file is attached (existing behavior preserved, ≤4MB cap)

## Logo handling

- Add new file `img/email-logo.png` — created during implementation by resizing `img/logo-transparent.png` to 600px wide using `sips` (macOS native) or `imagemagick` if available
- Target ≤80KB; PNG with transparency preserved
- Reference in HTML as `<img src="${SITE_URL}/img/email-logo.png" alt="INTERY" width="140" style="...">`
- Add `SITE_URL` env var to Vercel:
  - For now (demo phase): `SITE_URL=https://intery-demo-from-az.vercel.app`
  - When custom domain flips: change to `https://intery-si.com` (or just remove the env var since the default is `https://intery-si.com`)

## Testing approach

After implementation:

1. Local sanity: invoke the function via `curl` POST with each `_type` and a test inbox we can read (akram.zzahwi@gmail.com for development testing).
2. Submit each form type × multiple language values via `curl`:
   - `_type=contact, language=en` → check inbox for English auto-reply
   - `_type=contact, language=sl` → check inbox for Slovenian auto-reply
   - `_type=contact, language=de` → German
   - `_type=contact, language=pl` → Polish
   - `_type=contact, language=es` → Spanish
   - `_type=contact, language=sk` → Slovak
   - Same 6 for `_type=application`, including a small test PDF attachment
   - Edge: omit `language` field → should default to English without erroring
   - Edge: set `language=xx` (unsupported) → defaults to English
   - Edge: invalid email syntax → client email still sends, auto-reply silently fails
3. Verify in Gmail (the user's primary test inbox) that:
   - Logo loads inline
   - Layout renders cleanly (no broken CSS, no horizontal scroll)
   - Brand-blue accent visible
   - Receipt table readable
   - Reply-To behavior: hitting Reply on auto-reply → addressed to `info@intery-si.com`; hitting Reply on client email → addressed to submitter
4. Quick render check in: Gmail web, Gmail mobile, Apple Mail (if available). Outlook is nice-to-have.

## What's explicitly out of scope

- ❌ Translating the client-facing inquiry email body (English only — internal)
- ❌ Translating the visitor's actual message content (shown verbatim in their language)
- ❌ Hero images, social media links, dark-mode-specific styles
- ❌ Custom font loading (system stack only — most reliable across email clients)
- ❌ A/B testing infrastructure or open-tracking pixels (Resend can do this but we explicitly disabled open tracking; click tracking remains default-on but unused)
- ❌ Newsletter / unsubscribe / list-management features (not relevant for transactional sends)
- ❌ DMARC tightening (was skipped during DNS setup; unrelated to this work)

## Failure modes & edge cases

- **Submitter email malformed (e.g. typo, missing `@`)**: Resend rejects the auto-reply send, function logs `console.error` with status, returns success to the visitor anyway because the client inquiry succeeded. Visitor sees success message on the page; the client receives the inquiry and can reach out manually.
- **Both emails fail (Resend outage / API key revoked)**: function returns 502 with generic error message, visitor sees error UI on the form, can retry.
- **Logo image fails to load** (CDN down, 404, etc.): email body is fully readable without the image — `alt="INTERY"` text shows, layout doesn't break.
- **Position field missing on application** (shouldn't happen due to existing validation): subject line falls back to gracefully omit position interpolation.
- **CV file present but >4MB**: existing rejection behavior preserved (returns 400 before email send attempts).

## Files changed during implementation

- `api/contact.js` — major refactor (~400 lines including translations)
- `index.html` — add 1 hidden input to contact form
- `careers.html` — add 1 hidden input to application form
- `js/main.js` — populate language hidden field on contact form
- `js/careers-i18n.js` — populate language hidden field on careers form
- `img/email-logo.png` — new, ~30-80KB resized logo
- `vercel.json` — no changes needed (env vars set via Vercel dashboard / CLI, not committed)

## Estimated implementation time

~30-45 minutes of coding + ~15-30 minutes of test-email iteration = ~1 hour total before the user reviews working emails in their inbox.
