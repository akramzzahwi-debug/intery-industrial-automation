/* ═══════════════════════════════════════════════════
   INTERY d.o.o. — GSAP Animations + Interactions
   ═══════════════════════════════════════════════════ */

/* ── I18N ────────────────────────────────────────── */
const translations = {
  en: {
    'nav.home':'Home','nav.services':'Services','nav.about':'About',
    'nav.references':'References','nav.contact':'Contact',
    'nav.quote':'Get a Quote','nav.mobile_quote':'Get a Quote',
    'hero.eyebrow':'Slovenia · Europe · Industrial Excellence',
    'hero.title1':'YOUR AUTOMATION',
    'hero.title2':'DONE <em>RIGHT.</em>',
    'hero.subtitle':'Electrical and mechanical installation for robotic lines, conveyor systems, and battery assembly — serving automotive, energy, and industrial sectors across Europe.',
    'hero.btn_services':'View Services','hero.btn_quote':'Request a Quote',
    'stats.specialists':'Certified Specialists','stats.projects':'Completed Projects',
    'stats.clients':'Clients Worldwide','stats.categories':'Service Categories',
    'services.tag':'What We Do',
    'services.title':'Find the Right Solution<br>for Your Operation',
    'services.subtitle':'From robotic lines to solar installations — technically advanced, safe, and efficient solutions built for real-world industrial environments.',
    's01.title':'Robotic Line Installation','s01.desc':'Expert electrical setup for robotic welding and assembly stations in automotive manufacturing.',
    's02.title':'Conveyor Lines & Warehouses','s02.desc':'Seamless electrical installation for conveyor lines and warehouse intralogistics systems.',
    's03.title':'Control Cabinet Wiring','s03.desc':'Custom wiring solutions for industrial control cabinets with full documentation and testing.',
    's04.title':'Battery Assembly Lines','s04.desc':'Comprehensive electrical and mechanical installation for EV battery assembly infrastructure.',
    's05.title':'Power Plant Installation','s05.desc':'Specialized high-voltage electrical installation for power generation and distribution facilities.',
    's06.title':'Photovoltaic Installation','s06.desc':'Industrial-scale solar panel installation for sustainable energy and reduced operational costs.',
    's07.title':'Fire Protection Systems','s07.desc':'Expert installation of industrial fire detection and suppression systems for full safety compliance.',
    's08.title':'Process Solutions','s08.desc':'Comprehensive process engineering for petrochemical and industrial operational efficiency.',
    's09.title':'Welding Workforce','s09.desc':'Reliable, certified welders supplied for industrial and manufacturing projects across Europe.',
    'service.inquire':'Inquire',
    'about.tag':'Why Choose Us',
    'about.title':'Why Partner<br>With <em>INTERY?</em>',
    'about.desc':'We combine 70+ certified specialists with a customer-centric approach — ensuring timely delivery, operational reliability, and long-term performance on every project.',
    'about.btn':'Start a Project',
    'about.cert1':'VDE Certified','about.cert2':'On-Time Delivery','about.cert3':'70+ Experts',
    'usp01.title':'Expertise & Certified Personnel','usp01.desc':'70+ VDE-certified specialists with deep knowledge across robotic, conveyor, battery, and energy installation types.',
    'usp02.title':'Fast & Quality Production','usp02.desc':'Strict adherence to deadlines without compromising safety. Your production schedule is our first priority.',
    'usp03.title':'Industry-Proven Reliability','usp03.desc':'Trusted by 18+ clients worldwide including leaders in automotive, energy, and petrochemical industries.',
    'usp04.title':'Full Documentation & Testing','usp04.desc':'VDE measurements, E/A testing, and detailed project documentation delivered with every installation.',
    'usp05.title':'European-Wide Operations','usp05.desc':'Fully mobile specialist teams that deploy across Europe to meet your project location requirements.',
    'ref.tag':'Proven Track Record','ref.title':"Projects We've Delivered",
    'ref.subtitle':'Named references from clients who trust INTERY with their most critical production installations.',
    'r01.title':'Robotic Line Electrical Installation','r01.desc':'Full electrical installation of robotic welding and assembly stations for a major automotive production line upgrade.',
    'r02.title':'Conveyor & Intralogistics System','r02.desc':'Electrical wiring and commissioning for a complete conveyor and warehouse intralogistics installation project.',
    'r03.title':'Battery Assembly Line Installation','r03.desc':'Comprehensive electrical and mechanical installation of EV battery assembly line infrastructure for energy sector client.',
    'r04.title':'Control Cabinet Wiring Solutions','r04.desc':'Custom control cabinet design, wiring, and documentation for a multi-station automated production environment.',
    'r05.title':'Power Plant Electrical Installation','r05.desc':'High-voltage electrical installation with VDE measurements and complete technical documentation for power generation client.',
    'r.cta.title':'Be Our Next Success Story','r.cta.desc':"Tell us about your installation project and we'll put our best team on it.",'r.cta.btn':'Start a Conversation',
    'process.tag':'How We Work',
    'process.title':'Three Steps to Your<br><em>Installation Done Right</em>',
    'p01.title':'Send an Inquiry','p01.desc':"Describe your project scope, timeline, and location. We'll respond within 24 hours with initial questions.",
    'p02.title':'We Prepare a Quotation','p02.desc':'Our technical team reviews your requirements and delivers a detailed, transparent price quotation.',
    'p03.title':'Our Experts Handle It','p03.desc':'Certified specialists arrive on-site and deliver precision installation with full documentation and testing.',
    'clients.label':'Industry Leaders Who Trust Us',
    'contact.tag':'Get in Touch',
    'contact.title':"Let's Discuss<br>Your <em>Project.</em>",
    'contact.desc':"We're here to assist you with your next industrial installation project. Reach out and we'll respond within 24 hours.",
    'contact.phone':'Phone','contact.email_label':'Email','contact.address':'Address','contact.hours':'Hours',
    'contact.hours_val':'Monday – Friday, 07:00 – 15:00',
    'form.first_name':'First Name *','form.last_name':'Last Name *','form.company':'Company',
    'form.email':'Email Address *','form.service':'Service Needed','form.message':'Project Details *',
    'form.send':'Send Message','form.sending':'Sending…','form.sent':'Message Sent ✓',
    'form.ph.first_name':'John','form.ph.last_name':'Smith','form.ph.company':'Your company name',
    'form.ph.email':'john@company.com','form.ph.message':'Describe your project scope, location, and timeline…',
    'opt.placeholder':'Select a service…','opt.1':'Robotic Line Installation','opt.2':'Conveyor Lines & Warehouses',
    'opt.3':'Control Cabinet Wiring','opt.4':'Battery Assembly Lines','opt.5':'Power Plant Installation',
    'opt.6':'Photovoltaic Installation','opt.7':'Fire Protection Systems','opt.8':'Process Solutions',
    'opt.9':'Welding Workforce','opt.10':'Other',
    'footer.desc':'Trusted electrical and mechanical installation experts for industrial automation across Europe. Rimska ulica 4, Slovenska Bistrica, Slovenia.',
    'footer.services_h':'Services','footer.company_h':'Company','footer.contact_h':'Contact',
    'footer.fs1':'Robotic Line Installation','footer.fs2':'Conveyor Systems','footer.fs3':'Control Cabinet Wiring',
    'footer.fs4':'Battery Assembly Lines','footer.fs5':'Power Plant Installation',
    'footer.fs6':'Photovoltaic Installation','footer.fs7':'Fire Protection Systems','footer.fs8':'Welding Workforce',
    'footer.home':'Home','footer.about':'About Us','footer.references':'References','footer.contact':'Contact',
    'footer.copyright':'© 2025 INTERY d.o.o. All rights reserved. Registered in Slovenia.',
    'footer.hours':'Mon–Fri 07:00–15:00 ·',
  },
  sl: {
    'nav.home':'Domov','nav.services':'Storitve','nav.about':'O nas',
    'nav.references':'Reference','nav.contact':'Kontakt',
    'nav.quote':'Zahtevajte ponudbo','nav.mobile_quote':'Zahtevajte ponudbo',
    'hero.eyebrow':'Slovenija · Evropa · Industrijska odličnost',
    'hero.title1':'VAŠA AVTOMATIZACIJA',
    'hero.title2':'OPRAVLJENA <em>PRAV.</em>',
    'hero.subtitle':'Električne in mehanske inštalacije za robotske linije, transportne sisteme in sestavo baterij – za avtomobilski, energetski in industrijski sektor po vsej Evropi.',
    'hero.btn_services':'Oglejte si storitve','hero.btn_quote':'Zahtevajte ponudbo',
    'stats.specialists':'Certificiranih strokovnjakov','stats.projects':'Dokončanih projektov',
    'stats.clients':'Strank po svetu','stats.categories':'Kategorij storitev',
    'services.tag':'Kaj delamo',
    'services.title':'Poiščite pravo rešitev<br>za vaše podjetje',
    'services.subtitle':'Od robotskih linij do solarnih inštalacij – tehnično napredne, varne in učinkovite rešitve za realna industrijska okolja.',
    's01.title':'Inštalacija robotskih linij','s01.desc':'Strokovna električna montaža za robotske varilne in montažne postaje v avtomobilski industriji.',
    's02.title':'Transportne linije in skladišča','s02.desc':'Nemotena električna inštalacija za transportne linije in intralogistične sisteme v skladiščih.',
    's03.title':'Kabeliranje razdelilnih omar','s03.desc':'Kabeliranje industrijskih razdelilnih omar po meri z dokumentacijo in testiranjem.',
    's04.title':'Linije za sestavo baterij','s04.desc':'Celovita električna in mehanska inštalacija za infrastrukturo sestave baterij EV.',
    's05.title':'Inštalacija elektrarn','s05.desc':'Specialistične visoko-napetostne inštalacije za objekte za proizvodnjo in distribucijo električne energije.',
    's06.title':'Fotovoltaična inštalacija','s06.desc':'Inštalacija solarnih panelov v industrijskem obsegu za trajnostno energijo in zmanjšanje stroškov.',
    's07.title':'Sistemi požarne zaščite','s07.desc':'Strokovna inštalacija industrijskih sistemov za zaznavanje in gašenje požara.',
    's08.title':'Procesne rešitve','s08.desc':'Celovito procesno inženirstvo za petrokemično in industrijsko učinkovitost.',
    's09.title':'Varilci','s09.desc':'Zanesljivi, certificirani varilci za industrijske in proizvodne projekte po vsej Evropi.',
    'service.inquire':'Povpraševanje',
    'about.tag':'Zakaj mi?',
    'about.title':'Zakaj sodelovati<br>z <em>INTERY?</em>',
    'about.desc':'Združujemo 70+ certificiranih strokovnjakov s pristopom, osredotočenim na stranke – zagotavljamo pravočasno izvedbo, operativno zanesljivost in dolgoročno uspešnost pri vsakem projektu.',
    'about.btn':'Začnite projekt',
    'about.cert1':'VDE certificirani','about.cert2':'Pravočasna dostava','about.cert3':'70+ strokovnjakov',
    'usp01.title':'Strokovno znanje in certificirano osebje','usp01.desc':'70+ VDE-certificiranih strokovnjakov z globokim znanjem na področju robotike, transportnih sistemov, baterij in energetskih inštalacij.',
    'usp02.title':'Hitra in kakovostna izvedba','usp02.desc':'Strogo spoštovanje rokov brez kompromisov pri varnosti. Vaš produkcijski urnik je naša prva prioriteta.',
    'usp03.title':'Zanesljivost, preizkušena v industriji','usp03.desc':'Zaupanje 18+ strank po svetu, vključno z vodilnimi v avtomobilski, energetski in petrokemični industriji.',
    'usp04.title':'Popolna dokumentacija in testiranje','usp04.desc':'VDE meritve, E/A testiranje in podrobna projektna dokumentacija pri vsaki inštalaciji.',
    'usp05.title':'Delovanje po vsej Evropi','usp05.desc':'Popolnoma mobilne ekipe strokovnjakov, ki se napotijo po vsej Evropi glede na zahteve vašega projekta.',
    'ref.tag':'Dokazana izkušenost','ref.title':'Projekti, ki smo jih izvedli',
    'ref.subtitle':'Poimensko navedene reference strank, ki zaupajo podjetju INTERY z njihovimi najpomembnejšimi produkcijskimi inštalacijami.',
    'r01.title':'Električna inštalacija robotske linije','r01.desc':'Popolna električna inštalacija robotskih varilnih in montažnih postaj za nadgradnjo avtomobilske produkcijske linije.',
    'r02.title':'Transportni in intralogistični sistem','r02.desc':'Električno kabliranje in zagon popolne inštalacije transportnega in skladiščnega intralogističnega sistema.',
    'r03.title':'Linija za sestavo baterij','r03.desc':'Celovita električna in mehanska inštalacija infrastrukture za sestavo baterij EV za stranko iz energetskega sektorja.',
    'r04.title':'Rešitve kabeliranja razdelilnih omar','r04.desc':'Kabeliranje, dokumentiranje in testiranje za večpostajno avtomatizirano produkcijsko okolje po meri.',
    'r05.title':'Električna inštalacija elektrarne','r05.desc':'Visoko-napetostna električna inštalacija z VDE meritvami in popolno tehnično dokumentacijo.',
    'r.cta.title':'Postanite naša naslednja uspešna zgodba','r.cta.desc':'Povejte nam o svojem inštalacijskem projektu in mi bomo nanj postavili našo najboljšo ekipo.','r.cta.btn':'Začnite pogovor',
    'process.tag':'Kako delamo',
    'process.title':'Trije koraki do vaše<br><em>inštalacije, opravljene prav</em>',
    'p01.title':'Pošljite povpraševanje','p01.desc':'Opišite obseg projekta, časovnico in lokacijo. Odgovorili bomo v 24 urah z uvodnimi vprašanji.',
    'p02.title':'Pripravimo ponudbo','p02.desc':'Naša tehnična ekipa pregleda vaše zahteve in pripravi podrobno, pregledno cenovno ponudbo.',
    'p03.title':'Naši strokovnjaki poskrbijo za vse','p03.desc':'Certificirani strokovnjaki pridejo na lokacijo in izvedejo natančno inštalacijo s popolno dokumentacijo in testiranjem.',
    'clients.label':'Industrijski vodje, ki nam zaupajo',
    'contact.tag':'Stopite v stik',
    'contact.title':'Pogovorimo se o<br>vašem <em>projektu.</em>',
    'contact.desc':'Z veseljem vam pomagamo pri naslednjem industrijskem inštalacijskem projektu. Stopite v stik in odgovorili bomo v 24 urah.',
    'contact.phone':'Telefon','contact.email_label':'E-pošta','contact.address':'Naslov','contact.hours':'Delovni čas',
    'contact.hours_val':'Ponedeljek – Petek, 07:00 – 15:00',
    'form.first_name':'Ime *','form.last_name':'Priimek *','form.company':'Podjetje',
    'form.email':'E-poštni naslov *','form.service':'Potrebna storitev','form.message':'Podrobnosti projekta *',
    'form.send':'Pošlji sporočilo','form.sending':'Pošiljanje…','form.sent':'Sporočilo poslano ✓',
    'form.ph.first_name':'Janez','form.ph.last_name':'Novak','form.ph.company':'Ime vašega podjetja',
    'form.ph.email':'janez@podjetje.si','form.ph.message':'Opišite obseg projekta, lokacijo in časovnico…',
    'opt.placeholder':'Izberite storitev…','opt.1':'Inštalacija robotskih linij','opt.2':'Transportne linije in skladišča',
    'opt.3':'Kabeliranje razdelilnih omar','opt.4':'Linije za sestavo baterij','opt.5':'Inštalacija elektrarn',
    'opt.6':'Fotovoltaična inštalacija','opt.7':'Sistemi požarne zaščite','opt.8':'Procesne rešitve',
    'opt.9':'Varilci','opt.10':'Drugo',
    'footer.desc':'Zaupanja vredni strokovnjaki za električne in mehanske inštalacije za industrijsko avtomatizacijo po vsej Evropi. Rimska ulica 4, Slovenska Bistrica, Slovenija.',
    'footer.services_h':'Storitve','footer.company_h':'Podjetje','footer.contact_h':'Kontakt',
    'footer.fs1':'Inštalacija robotskih linij','footer.fs2':'Transportni sistemi','footer.fs3':'Kabeliranje razdelilnih omar',
    'footer.fs4':'Linije za sestavo baterij','footer.fs5':'Inštalacija elektrarn',
    'footer.fs6':'Fotovoltaična inštalacija','footer.fs7':'Sistemi požarne zaščite','footer.fs8':'Varilci',
    'footer.home':'Domov','footer.about':'O nas','footer.references':'Reference','footer.contact':'Kontakt',
    'footer.copyright':'© 2025 INTERY d.o.o. Vse pravice pridržane. Registrirano v Sloveniji.',
    'footer.hours':'Pon–Pet 07:00–15:00 ·',
  },
  de: {
    'nav.home':'Startseite','nav.services':'Leistungen','nav.about':'Über uns',
    'nav.references':'Referenzen','nav.contact':'Kontakt',
    'nav.quote':'Angebot einholen','nav.mobile_quote':'Angebot einholen',
    'hero.eyebrow':'Slowenien · Europa · Industrielle Exzellenz',
    'hero.title1':'IHRE AUTOMATION',
    'hero.title2':'RICHTIG <em>GEMACHT.</em>',
    'hero.subtitle':'Elektrische und mechanische Installation für Roboterlinien, Fördersysteme und Batteriemontage – für die Automobil-, Energie- und Industriebranche in ganz Europa.',
    'hero.btn_services':'Leistungen ansehen','hero.btn_quote':'Angebot anfordern',
    'stats.specialists':'Zertifizierte Fachleute','stats.projects':'Abgeschlossene Projekte',
    'stats.clients':'Kunden weltweit','stats.categories':'Leistungskategorien',
    'services.tag':'Was wir tun',
    'services.title':'Die richtige Lösung<br>für Ihren Betrieb',
    'services.subtitle':'Von Roboterlinien bis zu Solaranlagen – technisch fortschrittliche, sichere und effiziente Lösungen für reale industrielle Umgebungen.',
    's01.title':'Roboterlinien-Installation','s01.desc':'Fachgerechte elektrische Einrichtung von Roboterschweißstationen und Montagestationen in der Automobilfertigung.',
    's02.title':'Förderlinien & Lagerhäuser','s02.desc':'Nahtlose elektrische Installation für Förderlinien und Intralogistiksysteme in Lagerhäusern.',
    's03.title':'Schaltschrankverkabelung','s03.desc':'Maßgeschneiderte Verkabelungslösungen für Schaltschränke mit vollständiger Dokumentation und Tests.',
    's04.title':'Batteriemontageanlagen','s04.desc':'Umfassende elektrische und mechanische Installation für EV-Batteriemontageanlagen.',
    's05.title':'Kraftwerksinstallation','s05.desc':'Spezialisierte Hochspannungsinstallation für Stromerzeugungs- und Verteilanlagen.',
    's06.title':'Photovoltaik-Installation','s06.desc':'Solaranlageinstallation in industriellem Maßstab für nachhaltige Energie und reduzierte Betriebskosten.',
    's07.title':'Brandschutzanlagen','s07.desc':'Fachgerechte Installation industrieller Brandmelde- und Löschanlagen für vollständige Sicherheitskonformität.',
    's08.title':'Prozesslösungen','s08.desc':'Umfassendes Prozessengineering für petrochemische und industrielle Betriebseffizienz.',
    's09.title':'Schweißer-Personal','s09.desc':'Zuverlässige, zertifizierte Schweißer für Industrie- und Fertigungsprojekte in ganz Europa.',
    'service.inquire':'Anfragen',
    'about.tag':'Warum wir?',
    'about.title':'Warum Partner<br>von <em>INTERY?</em>',
    'about.desc':'Wir kombinieren 70+ zertifizierte Fachleute mit einem kundenorientierten Ansatz – für pünktliche Lieferung, Betriebszuverlässigkeit und langfristige Leistung bei jedem Projekt.',
    'about.btn':'Projekt starten',
    'about.cert1':'VDE-zertifiziert','about.cert2':'Pünktliche Lieferung','about.cert3':'70+ Experten',
    'usp01.title':'Expertise & zertifiziertes Personal','usp01.desc':'70+ VDE-zertifizierte Fachleute mit fundiertem Wissen in Robotik, Förder-, Batterie- und Energieanlagen.',
    'usp02.title':'Schnelle & qualitative Produktion','usp02.desc':'Strikte Termineinhaltung ohne Kompromisse bei der Sicherheit. Ihr Produktionsplan hat für uns höchste Priorität.',
    'usp03.title':'Bewährte Branchenzuverlässigkeit','usp03.desc':'Vertrauen von 18+ Kunden weltweit, darunter führende Unternehmen der Automobil-, Energie- und Petrochemiebranche.',
    'usp04.title':'Vollständige Dokumentation & Tests','usp04.desc':'VDE-Messungen, E/A-Tests und detaillierte Projektdokumentation bei jeder Installation.',
    'usp05.title':'Europaweite Einsätze','usp05.desc':'Vollständig mobile Spezialteams, die in ganz Europa eingesetzt werden, um Ihre Projektanforderungen zu erfüllen.',
    'ref.tag':'Bewährte Erfolgsbilanz','ref.title':'Von uns realisierte Projekte',
    'ref.subtitle':'Namentlich genannte Referenzen von Kunden, die INTERY mit ihren kritischsten Produktionsanlagen vertrauen.',
    'r01.title':'Elektrische Installation der Roboterlinie','r01.desc':'Vollständige elektrische Installation von Roboterschweißstationen für eine große Automobilproduktionslinie.',
    'r02.title':'Förder- & Intralogistiksystem','r02.desc':'Elektrische Verkabelung und Inbetriebnahme einer kompletten Förder- und Lagerintralogistikinstallation.',
    'r03.title':'Batteriemontagelinie','r03.desc':'Umfassende elektrische und mechanische Installation von EV-Batteriemontagelinien für Energiesektor-Kunden.',
    'r04.title':'Schaltschrankverkabelungslösungen','r04.desc':'Maßgeschneidertes Design, Verkabelung und Dokumentation für eine vollautomatisierte Produktionsumgebung.',
    'r05.title':'Elektrische Kraftwerksinstallation','r05.desc':'Hochspannungsinstallation mit VDE-Messungen und vollständiger technischer Dokumentation.',
    'r.cta.title':'Unsere nächste Erfolgsgeschichte','r.cta.desc':'Erzählen Sie uns von Ihrem Installationsprojekt und wir setzen unser bestes Team darauf an.','r.cta.btn':'Gespräch beginnen',
    'process.tag':'Wie wir arbeiten',
    'process.title':'Drei Schritte zu Ihrer<br><em>perfekten Installation</em>',
    'p01.title':'Anfrage senden','p01.desc':'Beschreiben Sie Umfang, Zeitplan und Standort Ihres Projekts. Wir antworten innerhalb von 24 Stunden.',
    'p02.title':'Wir erstellen ein Angebot','p02.desc':'Unser technisches Team prüft Ihre Anforderungen und liefert ein detailliertes, transparentes Angebot.',
    'p03.title':'Unsere Experten übernehmen','p03.desc':'Zertifizierte Fachleute kommen vor Ort und liefern präzise Installation mit vollständiger Dokumentation und Tests.',
    'clients.label':'Branchenführer, die uns vertrauen',
    'contact.tag':'Kontakt aufnehmen',
    'contact.title':'Lassen Sie uns Ihr<br><em>Projekt besprechen.</em>',
    'contact.desc':'Wir helfen Ihnen gerne bei Ihrem nächsten Industrieinstallationsprojekt. Kontaktieren Sie uns und wir antworten innerhalb von 24 Stunden.',
    'contact.phone':'Telefon','contact.email_label':'E-Mail','contact.address':'Adresse','contact.hours':'Öffnungszeiten',
    'contact.hours_val':'Montag – Freitag, 07:00 – 15:00 Uhr',
    'form.first_name':'Vorname *','form.last_name':'Nachname *','form.company':'Unternehmen',
    'form.email':'E-Mail-Adresse *','form.service':'Benötigte Leistung','form.message':'Projektdetails *',
    'form.send':'Nachricht senden','form.sending':'Senden…','form.sent':'Nachricht gesendet ✓',
    'form.ph.first_name':'Hans','form.ph.last_name':'Müller','form.ph.company':'Ihr Unternehmensname',
    'form.ph.email':'hans@unternehmen.de','form.ph.message':'Beschreiben Sie Ihren Projektumfang, Standort und Zeitplan…',
    'opt.placeholder':'Leistung auswählen…','opt.1':'Roboterlinien-Installation','opt.2':'Förderlinien & Lagerhäuser',
    'opt.3':'Schaltschrankverkabelung','opt.4':'Batteriemontageanlagen','opt.5':'Kraftwerksinstallation',
    'opt.6':'Photovoltaik-Installation','opt.7':'Brandschutzanlagen','opt.8':'Prozesslösungen',
    'opt.9':'Schweißer-Personal','opt.10':'Sonstiges',
    'footer.desc':'Vertrauenswürdige Experten für elektrische und mechanische Installationen für Industrieautomatisierung in ganz Europa. Rimska ulica 4, Slovenska Bistrica, Slowenien.',
    'footer.services_h':'Leistungen','footer.company_h':'Unternehmen','footer.contact_h':'Kontakt',
    'footer.fs1':'Roboterlinien-Installation','footer.fs2':'Fördersysteme','footer.fs3':'Schaltschrankverkabelung',
    'footer.fs4':'Batteriemontageanlagen','footer.fs5':'Kraftwerksinstallation',
    'footer.fs6':'Photovoltaik-Installation','footer.fs7':'Brandschutzanlagen','footer.fs8':'Schweißer-Personal',
    'footer.home':'Startseite','footer.about':'Über uns','footer.references':'Referenzen','footer.contact':'Kontakt',
    'footer.copyright':'© 2025 INTERY d.o.o. Alle Rechte vorbehalten. Eingetragen in Slowenien.',
    'footer.hours':'Mo–Fr 07:00–15:00 ·',
  }
};

let currentLang = localStorage.getItem('intery-lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('intery-lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

applyTranslations(currentLang);

gsap.registerPlugin(ScrollTrigger);

/* ── SMOOTH SCROLL ───────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── MOBILE MENU ─────────────────────────────────── */
const mobileToggle  = document.getElementById('mobileToggle');
const mobileMenu    = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileMenuOverlay');
const mobileClose   = document.getElementById('mobileMenuClose');
const mobileLinks   = document.querySelectorAll('.mobile-menu-link');
const desktopLinks  = document.querySelectorAll('.nav-link');

function openMenu() {
  mobileToggle.classList.add('active');
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', e => {
  e.stopPropagation();
  mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
});
mobileClose.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 992) closeMenu(); });

function setActiveLink(href) {
  desktopLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === href); });
  mobileLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === href); });
}

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
    setActiveLink(link.getAttribute('href'));
  });
});
desktopLinks.forEach(link => {
  link.addEventListener('click', () => setActiveLink(link.getAttribute('href')));
});

/* ── NAVBAR SCROLL EFFECT ────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HERO ANIMATIONS ─────────────────────────────── */
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTL
  .to('#heroEyebrow', { opacity: 1, y: 0, duration: .8, delay: .2 })
  .to('#titleLine1',  { y: 0, opacity: 1, duration: .9, ease: 'power4.out' }, '-=.4')
  .to('#titleLine2',  { y: 0, opacity: 1, duration: .9, ease: 'power4.out' }, '-=.65')
  .to('#heroSubtitle',{ opacity: 1, y: 0, duration: .7 }, '-=.5')
  .to('#heroCtas',    { opacity: 1, y: 0, duration: .6 }, '-=.4')
  .to('#heroBottom',  { opacity: 1, y: 0, duration: .7 }, '-=.3');

gsap.set('#heroEyebrow', { opacity: 0, y: 20 });
gsap.set(['#titleLine1','#titleLine2'], { y: '110%', opacity: 0 });
gsap.set('#heroSubtitle', { opacity: 0, y: 30 });
gsap.set('#heroCtas',     { opacity: 0, y: 20 });
gsap.set('#heroBottom',   { opacity: 0, y: 20 });

/* Subtle hero parallax */
gsap.to('.hero-bg-img', {
  yPercent: 18,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});

/* ── SECTION HEADER REVEAL ───────────────────────── */
gsap.utils.toArray('.section-header').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 50,
    duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 82%', once: true }
  });
});

/* ── SERVICE CARDS ───────────────────────────────── */
gsap.utils.toArray('.service-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0, y: 60,
    duration: .7, ease: 'power3.out',
    delay: (i % 3) * .1,
    scrollTrigger: { trigger: card, start: 'top 88%', once: true }
  });
});

/* ── ABOUT SPLIT ─────────────────────────────────── */
gsap.from('.about-left', {
  opacity: 0, x: -60,
  duration: .9, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-section', start: 'top 72%', once: true }
});
gsap.from('.about-right', {
  opacity: 0, x: 60,
  duration: .9, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-section', start: 'top 72%', once: true }
});

gsap.utils.toArray('.usp-item').forEach((item, i) => {
  gsap.from(item, {
    opacity: 0, x: 40,
    duration: .6, ease: 'power3.out',
    delay: i * .1,
    scrollTrigger: { trigger: '.about-right', start: 'top 78%', once: true }
  });
});

/* ── CERT BADGES ─────────────────────────────────── */
gsap.utils.toArray('.cert-badge').forEach((badge, i) => {
  gsap.from(badge, {
    opacity: 0, scale: .8, y: 20,
    duration: .5, ease: 'back.out(1.7)',
    delay: .4 + i * .12,
    scrollTrigger: { trigger: '.about-section', start: 'top 72%', once: true }
  });
});

/* ── STATS COUNTERS ──────────────────────────────── */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.dataset.target;
  const duration = 1.8;

  ScrollTrigger.create({
    trigger: '.stats-section',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        innerText: target,
        duration,
        ease: 'power2.out',
        snap: { innerText: 1 },
        onUpdate() { counter.textContent = Math.round(+counter.innerText); }
      });
    }
  });
});

gsap.from('.stats-grid .stat-item', {
  opacity: 0, y: 40,
  duration: .7, stagger: .15,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true }
});

/* ── REFERENCE CARDS ─────────────────────────────── */
gsap.utils.toArray('.reference-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0, y: 50, scale: .97,
    duration: .7, ease: 'power3.out',
    delay: (i % 3) * .1,
    scrollTrigger: { trigger: card, start: 'top 88%', once: true }
  });
});

/* ── PROCESS STEPS ───────────────────────────────── */
gsap.utils.toArray('.process-step').forEach((step, i) => {
  gsap.from(step, {
    opacity: 0, y: 50,
    duration: .8, ease: 'power3.out',
    delay: i * .18,
    scrollTrigger: { trigger: '.process-steps', start: 'top 78%', once: true }
  });
});

/* ── CONTACT SPLIT ───────────────────────────────── */
gsap.from('.contact-info', {
  opacity: 0, x: -50,
  duration: .9, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-section', start: 'top 72%', once: true }
});
gsap.from('.contact-form-wrapper', {
  opacity: 0, x: 50,
  duration: .9, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-section', start: 'top 72%', once: true }
});

/* ── FOOTER ──────────────────────────────────────── */
gsap.from('.footer-top > *', {
  opacity: 0, y: 40,
  stagger: .15, duration: .7, ease: 'power3.out',
  scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true }
});

/* ── ACTIVE NAV SECTION TRACKING ─────────────────── */
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink('#' + entry.target.id);
    }
  });
}, { threshold: .3, rootMargin: '-80px 0px -40% 0px' });

sections.forEach(s => observer.observe(s));

/* ── HOVER MAGNETIC EFFECT ON CTA BUTTONS ────────── */
document.querySelectorAll('.btn-primary, .cta-button').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    gsap.to(btn, { x: x * .15, y: y * .15, duration: .3, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: .4, ease: 'elastic.out(1,.5)' });
  });
});

/* ── CONTACT FORM SUBMIT ─────────────────────────── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = `<span>${translations[currentLang]['form.sending']}</span>`;
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = `<span>${translations[currentLang]['form.sent']}</span>`;
      btn.style.background = '#1a6fa8';
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    }, 1200);
  });
}

/* ── PAGE LOAD FADE IN ───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  gsap.to('body', { opacity: 1, duration: .5, ease: 'power1.out', delay: .1 });
});
