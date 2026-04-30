/* ═══════════════════════════════════════════════════
   INTERY d.o.o. — GSAP Animations + Interactions
   ═══════════════════════════════════════════════════ */

/* ── I18N ────────────────────────────────────────── */
const translations = {
  en: {
    'nav.home':'Home','nav.services':'Services','nav.about':'About',
    'nav.references':'References','nav.careers':'Careers','nav.contact':'Contact',
    'nav.quote':'Get a Quote','nav.mobile_quote':'Get a Quote',
    'hero.eyebrow':'Europe & North America · Industrial Excellence',
    'hero.title1':'YOUR AUTOMATION',
    'hero.title2':'DONE <em>RIGHT.</em>',
    'hero.subtitle':'Electrical and mechanical installation for robotic lines, conveyor systems, and battery assembly — serving automotive, energy, and industrial sectors across Europe and North America.',
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
    'service.learn':'Learn More',
    'services.show_more':'Show more services','services.show_less':'Show less',
    'about.tag':'Your Expert Partner',
    'about.title':'Leading Electrical<br><em>Installations</em>',
    'about.desc':'INTERY d.o.o. is a trusted provider of high-quality electrical and mechanical installation services for the automotive, energy, and industrial sectors. With a strong team of over 70 certified specialists, we deliver technically advanced, safe, and efficient solutions that support modern production environments and large-scale industrial operations.',
    'about.desc2':'Our expertise spans robotic-line installations, conveyor and intralogistics systems, battery-assembly lines, high-voltage power systems, control-cabinet wiring, fire-protection systems, and photovoltaic installations — all executed with strict adherence to industry regulations, supported by VDE measurements, E/A testing, and proven quality-assurance processes.',
    'about.btn':'Start a Project',
    'about.cert1':'VDE Certified','about.cert2':'On-Time Delivery','about.cert3':'70+ Experts',
    'usp01.title':'Expertise & Certified Personnel','usp01.desc':'70+ VDE-certified specialists with deep knowledge across robotic, conveyor, battery, and energy installation types.',
    'usp02.title':'Fast & Quality Production','usp02.desc':'Strict adherence to deadlines without compromising safety. Your production schedule is our first priority.',
    'usp03.title':'Industry-Proven Reliability','usp03.desc':'Trusted by 50+ clients worldwide including leaders in automotive, energy, and petrochemical industries.',
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
    'ref.view_all':'View Full Reference List','ref.view_all_note':'Browse 400+ delivered projects across 15 years and 13 countries',
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
    'footer.slogan':'Engineered for excellence.','footer.desc':'Trusted electrical and mechanical installation experts for industrial automation across Europe, North America, and Canada.',
    'footer.services_h':'Services','footer.company_h':'Company','footer.contact_h':'Contact',
    'footer.fs1':'Robotic Line Installation','footer.fs2':'Conveyor Systems','footer.fs3':'Control Cabinet Wiring',
    'footer.fs4':'Battery Assembly Lines','footer.fs5':'Power Plant Installation',
    'footer.fs6':'Photovoltaic Installation','footer.fs7':'Fire Protection Systems','footer.fs8':'Welding Workforce',
    'footer.home':'Home','footer.about':'About Us','footer.references':'References','footer.contact':'Contact',
    'footer.copyright':'© 2022 INTERY d.o.o. All rights reserved. Registered in Slovenia.',
    'footer.hours':'Mon–Fri 07:00–15:00 ·',
  },
  sl: {
    'nav.home':'Domov','nav.services':'Storitve','nav.about':'O nas',
    'nav.references':'Reference','nav.careers':'Kariera','nav.contact':'Kontakt',
    'nav.quote':'Zahtevajte ponudbo','nav.mobile_quote':'Zahtevajte ponudbo',
    'hero.eyebrow':'Evropa & Severna Amerika · Industrijska odličnost',
    'hero.title1':'VAŠA AVTOMATIZACIJA',
    'hero.title2':'OPRAVLJENA <em>PRAV.</em>',
    'hero.subtitle':'Električne in mehanske inštalacije za robotske linije, transportne sisteme in sestavo baterij – za avtomobilski, energetski in industrijski sektor po vsej Evropi in Severni Ameriki.',
    'hero.btn_services':'Oglejte si storitve','hero.btn_quote':'Zahtevajte ponudbo',
    'stats.specialists':'Certificiranih strokovnjakov','stats.projects':'Dokončanih projektov',
    'stats.clients':'Strank po svetu','stats.categories':'Kategorij storitev',
    'services.tag':'Kaj delamo',
    'services.title':'Poiščite pravo rešitev<br>za vaše podjetje',
    'services.subtitle':'Od robotskih linij do solarnih inštalacij – tehnično napredne, varne in učinkovite rešitve za realna industrijska okolja.',
    's01.title':'Inštalacija robotskih linij','s01.desc':'Strokovna električna montaža za robotske varilne in montažne postaje v avtomobilski industriji.',
    's02.title':'Transportne linije in skladišča','s02.desc':'Nemotena električna inštalacija za transportne linije in intralogistične sisteme v skladiščih.',
    's03.title':'Ožičenje stikalnih omar','s03.desc':'Ožičenje industrijskih stikalnih omar po meri z dokumentacijo in testiranjem.',
    's04.title':'Linije za sestavo baterij','s04.desc':'Celovita električna in mehanska inštalacija za infrastrukturo sestave baterij EV.',
    's05.title':'Inštalacija elektrarn','s05.desc':'Specialistične visoko-napetostne inštalacije za objekte za proizvodnjo in distribucijo električne energije.',
    's06.title':'Fotovoltaična inštalacija','s06.desc':'Inštalacija solarnih panelov v industrijskem obsegu za trajnostno energijo in zmanjšanje stroškov.',
    's07.title':'Sistemi požarne zaščite','s07.desc':'Strokovna inštalacija industrijskih sistemov za zaznavanje in gašenje požara.',
    's08.title':'Procesne rešitve','s08.desc':'Celovito procesno inženirstvo za petrokemično in industrijsko učinkovitost.',
    's09.title':'Varilci','s09.desc':'Zanesljivi, certificirani varilci za industrijske in proizvodne projekte po vsej Evropi.',
    'service.inquire':'Povpraševanje',
    'service.learn':'Več informacij',
    'services.show_more':'Prikaži več storitev','services.show_less':'Prikaži manj',
    'about.tag':'Zakaj mi?',
    'about.title':'Zakaj sodelovati<br>z <em>INTERY?</em>',
    'about.desc':'Združujemo 70+ certificiranih strokovnjakov s pristopom, osredotočenim na stranke – zagotavljamo pravočasno izvedbo, operativno zanesljivost in dolgoročno uspešnost pri vsakem projektu.',
    'about.btn':'Začnite projekt',
    'about.cert1':'VDE certificirani','about.cert2':'Pravočasna dostava','about.cert3':'70+ strokovnjakov',
    'usp01.title':'Strokovno znanje in certificirano osebje','usp01.desc':'70+ VDE-certificiranih strokovnjakov z globokim znanjem na področju robotike, transportnih sistemov, baterij in energetskih inštalacij.',
    'usp02.title':'Hitra in kakovostna izvedba','usp02.desc':'Strogo spoštovanje rokov brez kompromisov pri varnosti. Vaš produkcijski urnik je naša prva prioriteta.',
    'usp03.title':'Zanesljivost, preizkušena v industriji','usp03.desc':'Zaupanje 50+ strank po svetu, vključno z vodilnimi v avtomobilski, energetski in petrokemični industriji.',
    'usp04.title':'Popolna dokumentacija in testiranje','usp04.desc':'VDE meritve, E/A testiranje in podrobna projektna dokumentacija pri vsaki inštalaciji.',
    'usp05.title':'Delovanje po vsej Evropi','usp05.desc':'Popolnoma mobilne ekipe strokovnjakov, ki se napotijo po vsej Evropi glede na zahteve vašega projekta.',
    'ref.tag':'Dokazana izkušenost','ref.title':'Projekti, ki smo jih izvedli',
    'ref.subtitle':'Poimensko navedene reference strank, ki zaupajo podjetju INTERY z njihovimi najpomembnejšimi produkcijskimi inštalacijami.',
    'r01.title':'Električna inštalacija robotske linije','r01.desc':'Popolna električna inštalacija robotskih varilnih in montažnih postaj za nadgradnjo avtomobilske produkcijske linije.',
    'r02.title':'Transportni in intralogistični sistem','r02.desc':'Električno kabliranje in zagon popolne inštalacije transportnega in skladiščnega intralogističnega sistema.',
    'r03.title':'Linija za sestavo baterij','r03.desc':'Celovita električna in mehanska inštalacija infrastrukture za sestavo baterij EV za stranko iz energetskega sektorja.',
    'r04.title':'Rešitve ožičenja stikalnih omar','r04.desc':'Ožičenje, dokumentiranje in testiranje za večpostajno avtomatizirano produkcijsko okolje po meri.',
    'r05.title':'Električna inštalacija elektrarne','r05.desc':'Visoko-napetostna električna inštalacija z VDE meritvami in popolno tehnično dokumentacijo.',
    'r.cta.title':'Postanite naša naslednja uspešna zgodba','r.cta.desc':'Povejte nam o svojem inštalacijskem projektu in mi bomo nanj postavili našo najboljšo ekipo.','r.cta.btn':'Začnite pogovor',
    'ref.view_all':'Oglejte si celoten seznam referenc','ref.view_all_note':'Prebrskajte več kot 400 izvedenih projektov v 15 letih in 13 državah',
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
    'opt.3':'Ožičenje stikalnih omar','opt.4':'Linije za sestavo baterij','opt.5':'Inštalacija elektrarn',
    'opt.6':'Fotovoltaična inštalacija','opt.7':'Sistemi požarne zaščite','opt.8':'Procesne rešitve',
    'opt.9':'Varilci','opt.10':'Drugo',
    'footer.slogan':'Zasnovano za odličnost.','footer.desc':'Zaupanja vredni strokovnjaki za električne in mehanske inštalacije za industrijsko avtomatizacijo po vsej Evropi, Severni Ameriki in Kanadi.',
    'footer.services_h':'Storitve','footer.company_h':'Podjetje','footer.contact_h':'Kontakt',
    'footer.fs1':'Inštalacija robotskih linij','footer.fs2':'Transportni sistemi','footer.fs3':'Ožičenje stikalnih omar',
    'footer.fs4':'Linije za sestavo baterij','footer.fs5':'Inštalacija elektrarn',
    'footer.fs6':'Fotovoltaična inštalacija','footer.fs7':'Sistemi požarne zaščite','footer.fs8':'Varilci',
    'footer.home':'Domov','footer.about':'O nas','footer.references':'Reference','footer.contact':'Kontakt',
    'footer.copyright':'© 2022 INTERY d.o.o. Vse pravice pridržane. Registrirano v Sloveniji.',
    'footer.hours':'Pon–Pet 07:00–15:00 ·',
  },
  de: {
    'nav.home':'Startseite','nav.services':'Leistungen','nav.about':'Über uns',
    'nav.references':'Referenzen','nav.careers':'Karriere','nav.contact':'Kontakt',
    'nav.quote':'Angebot einholen','nav.mobile_quote':'Angebot einholen',
    'hero.eyebrow':'Europa & Nordamerika · Industrielle Exzellenz',
    'hero.title1':'IHRE AUTOMATION',
    'hero.title2':'RICHTIG <em>GEMACHT.</em>',
    'hero.subtitle':'Elektrische und mechanische Installation für Roboterlinien, Fördersysteme und Batteriemontage – für die Automobil-, Energie- und Industriebranche in ganz Europa und Nordamerika.',
    'hero.btn_services':'Leistungen ansehen','hero.btn_quote':'Angebot anfordern',
    'stats.specialists':'Zertifizierte Fachleute','stats.projects':'Abgeschlossene Projekte',
    'stats.clients':'Kunden weltweit','stats.categories':'Leistungskategorien',
    'services.tag':'Was wir tun',
    'services.title':'Die richtige Lösung<br>für Ihren Betrieb',
    'services.subtitle':'Von Roboterlinien bis zu Solaranlagen – technisch fortschrittliche, sichere und effiziente Lösungen für reale industrielle Umgebungen.',
    's01.title':'Roboterlinien-Installation','s01.desc':'Fachgerechte elektrische Einrichtung von Roboterschweißstationen und Montagestationen in der Automobilfertigung.',
    's02.title':'Förderlinien & Lagerhäuser','s02.desc':'Nahtlose elektrische Installation für Förderlinien und Intralogistiksysteme in Lagerhäusern.',
    's03.title':'Schaltschrankverdrahtung','s03.desc':'Maßgeschneiderte Verdrahtungslösungen für Schaltschränke mit vollständiger Dokumentation und Tests.',
    's04.title':'Batteriemontageanlagen','s04.desc':'Umfassende elektrische und mechanische Installation für EV-Batteriemontageanlagen.',
    's05.title':'Kraftwerksinstallation','s05.desc':'Spezialisierte Hochspannungsinstallation für Stromerzeugungs- und Verteilanlagen.',
    's06.title':'Photovoltaik-Installation','s06.desc':'Solaranlageinstallation in industriellem Maßstab für nachhaltige Energie und reduzierte Betriebskosten.',
    's07.title':'Brandschutzanlagen','s07.desc':'Fachgerechte Installation industrieller Brandmelde- und Löschanlagen für vollständige Sicherheitskonformität.',
    's08.title':'Prozesslösungen','s08.desc':'Umfassendes Prozessengineering für petrochemische und industrielle Betriebseffizienz.',
    's09.title':'Schweißer-Personal','s09.desc':'Zuverlässige, zertifizierte Schweißer für Industrie- und Fertigungsprojekte in ganz Europa.',
    'service.inquire':'Anfragen',
    'service.learn':'Mehr erfahren',
    'services.show_more':'Weitere Leistungen anzeigen','services.show_less':'Weniger anzeigen',
    'about.tag':'Warum wir?',
    'about.title':'Warum Partner<br>von <em>INTERY?</em>',
    'about.desc':'Wir kombinieren 70+ zertifizierte Fachleute mit einem kundenorientierten Ansatz – für pünktliche Lieferung, Betriebszuverlässigkeit und langfristige Leistung bei jedem Projekt.',
    'about.btn':'Projekt starten',
    'about.cert1':'VDE-zertifiziert','about.cert2':'Pünktliche Lieferung','about.cert3':'70+ Experten',
    'usp01.title':'Expertise & zertifiziertes Personal','usp01.desc':'70+ VDE-zertifizierte Fachleute mit fundiertem Wissen in Robotik, Förder-, Batterie- und Energieanlagen.',
    'usp02.title':'Schnelle & qualitative Produktion','usp02.desc':'Strikte Termineinhaltung ohne Kompromisse bei der Sicherheit. Ihr Produktionsplan hat für uns höchste Priorität.',
    'usp03.title':'Bewährte Branchenzuverlässigkeit','usp03.desc':'Vertrauen von 50+ Kunden weltweit, darunter führende Unternehmen der Automobil-, Energie- und Petrochemiebranche.',
    'usp04.title':'Vollständige Dokumentation & Tests','usp04.desc':'VDE-Messungen, E/A-Tests und detaillierte Projektdokumentation bei jeder Installation.',
    'usp05.title':'Europaweite Einsätze','usp05.desc':'Vollständig mobile Spezialteams, die in ganz Europa eingesetzt werden, um Ihre Projektanforderungen zu erfüllen.',
    'ref.tag':'Bewährte Erfolgsbilanz','ref.title':'Von uns realisierte Projekte',
    'ref.subtitle':'Namentlich genannte Referenzen von Kunden, die INTERY mit ihren kritischsten Produktionsanlagen vertrauen.',
    'r01.title':'Elektrische Installation der Roboterlinie','r01.desc':'Vollständige elektrische Installation von Roboterschweißstationen für eine große Automobilproduktionslinie.',
    'r02.title':'Förder- & Intralogistiksystem','r02.desc':'Elektrische Verkabelung und Inbetriebnahme einer kompletten Förder- und Lagerintralogistikinstallation.',
    'r03.title':'Batteriemontagelinie','r03.desc':'Umfassende elektrische und mechanische Installation von EV-Batteriemontagelinien für Energiesektor-Kunden.',
    'r04.title':'Schaltschrankverdrahtungslösungen','r04.desc':'Maßgeschneidertes Design, Verdrahtung und Dokumentation für eine vollautomatisierte Produktionsumgebung.',
    'r05.title':'Elektrische Kraftwerksinstallation','r05.desc':'Hochspannungsinstallation mit VDE-Messungen und vollständiger technischer Dokumentation.',
    'r.cta.title':'Unsere nächste Erfolgsgeschichte','r.cta.desc':'Erzählen Sie uns von Ihrem Installationsprojekt und wir setzen unser bestes Team darauf an.','r.cta.btn':'Gespräch beginnen',
    'ref.view_all':'Vollständige Referenzliste ansehen','ref.view_all_note':'Über 400 realisierte Projekte aus 15 Jahren und 13 Ländern',
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
    'opt.3':'Schaltschrankverdrahtung','opt.4':'Batteriemontageanlagen','opt.5':'Kraftwerksinstallation',
    'opt.6':'Photovoltaik-Installation','opt.7':'Brandschutzanlagen','opt.8':'Prozesslösungen',
    'opt.9':'Schweißer-Personal','opt.10':'Sonstiges',
    'footer.slogan':'Entwickelt für Exzellenz.','footer.desc':'Vertrauenswürdige Experten für elektrische und mechanische Installationen für Industrieautomatisierung in ganz Europa, Nordamerika und Kanada.',
    'footer.services_h':'Leistungen','footer.company_h':'Unternehmen','footer.contact_h':'Kontakt',
    'footer.fs1':'Roboterlinien-Installation','footer.fs2':'Fördersysteme','footer.fs3':'Schaltschrankverdrahtung',
    'footer.fs4':'Batteriemontageanlagen','footer.fs5':'Kraftwerksinstallation',
    'footer.fs6':'Photovoltaik-Installation','footer.fs7':'Brandschutzanlagen','footer.fs8':'Schweißer-Personal',
    'footer.home':'Startseite','footer.about':'Über uns','footer.references':'Referenzen','footer.contact':'Kontakt',
    'footer.copyright':'© 2022 INTERY d.o.o. Alle Rechte vorbehalten. Eingetragen in Slowenien.',
    'footer.hours':'Mo–Fr 07:00–15:00 ·',
  },
  pl: {
    'nav.home':'Strona główna','nav.services':'Usługi','nav.about':'O nas',
    'nav.references':'Referencje','nav.careers':'Kariera','nav.contact':'Kontakt',
    'nav.quote':'Zapytaj o wycenę','nav.mobile_quote':'Zapytaj o wycenę',
    'hero.eyebrow':'Europa & Ameryka Północna · Doskonałość przemysłowa',
    'hero.title1':'TWOJA AUTOMATYZACJA',
    'hero.title2':'WYKONANA <em>PERFEKCYJNIE.</em>',
    'hero.subtitle':'Instalacje elektryczne i mechaniczne dla linii robotycznych, systemów transportowych i montażu baterii – dla sektorów motoryzacyjnego, energetycznego i przemysłowego w Europie i Ameryce Północnej.',
    'hero.btn_services':'Zobacz usługi','hero.btn_quote':'Zapytaj o wycenę',
    'stats.specialists':'Certyfikowanych specjalistów','stats.projects':'Zrealizowanych projektów',
    'stats.clients':'Klientów na świecie','stats.categories':'Kategorii usług',
    'services.tag':'Co robimy',
    'services.title':'Znajdź właściwe rozwiązanie<br>dla swojego zakładu',
    'services.subtitle':'Od linii robotycznych po instalacje solarne – technicznie zaawansowane, bezpieczne i wydajne rozwiązania dla rzeczywistych środowisk przemysłowych.',
    's01.title':'Instalacja linii robotycznych','s01.desc':'Profesjonalna instalacja elektryczna dla spawalniczych i montażowych stacji robotycznych w przemyśle motoryzacyjnym.',
    's02.title':'Linie transportowe i magazyny','s02.desc':'Kompleksowa instalacja elektryczna dla linii transportowych i systemów intralogistycznych w magazynach.',
    's03.title':'Okablowanie szaf sterowniczych','s03.desc':'Indywidualne rozwiązania okablowania szaf sterowniczych z pełną dokumentacją i testami.',
    's04.title':'Linie montażu baterii','s04.desc':'Kompleksowa instalacja elektryczna i mechaniczna dla infrastruktury montażu baterii EV.',
    's05.title':'Instalacja elektrowni','s05.desc':'Specjalistyczna instalacja wysokiego napięcia dla obiektów produkcji i dystrybucji energii.',
    's06.title':'Instalacja fotowoltaiczna','s06.desc':'Przemysłowa instalacja paneli słonecznych dla zrównoważonej energii i obniżonych kosztów operacyjnych.',
    's07.title':'Systemy ochrony przeciwpożarowej','s07.desc':'Profesjonalna instalacja przemysłowych systemów detekcji i tłumienia pożarów.',
    's08.title':'Rozwiązania procesowe','s08.desc':'Kompleksowa inżynieria procesowa dla wydajności operacyjnej przemysłu petrochemicznego.',
    's09.title':'Pracownicy spawalnicy','s09.desc':'Niezawodni, certyfikowani spawacze dla projektów przemysłowych i produkcyjnych w całej Europie.',
    'service.inquire':'Zapytaj',
    'service.learn':'Dowiedz się więcej',
    'services.show_more':'Pokaż więcej usług','services.show_less':'Pokaż mniej',
    'about.tag':'Dlaczego my?',
    'about.title':'Wiodące instalacje<br><em>elektryczne</em>',
    'about.desc':'INTERY d.o.o. to zaufany dostawca wysokiej jakości usług instalacji elektrycznych i mechanicznych dla sektorów motoryzacyjnego, energetycznego i przemysłowego. Dysponując zespołem ponad 70 certyfikowanych specjalistów, dostarczamy technicznie zaawansowane, bezpieczne i wydajne rozwiązania wspierające nowoczesne środowiska produkcyjne i wielkoskalowe operacje przemysłowe.',
    'about.desc2':'Nasze doświadczenie obejmuje instalacje linii robotycznych, systemy transportowe i intralogistyczne, linie montażu baterii, wysokonapięciowe systemy energetyczne, okablowanie szaf sterowniczych, systemy ochrony przeciwpożarowej i instalacje fotowoltaiczne – wszystkie realizowane zgodnie z przepisami branżowymi, z pomiarami VDE, testami E/A i sprawdzonymi procesami zapewnienia jakości.',
    'about.btn':'Rozpocznij projekt',
    'about.cert1':'Certyfikat VDE','about.cert2':'Terminowa realizacja','about.cert3':'70+ ekspertów',
    'usp01.title':'Wiedza i certyfikowany personel','usp01.desc':'70+ certyfikowanych specjalistów VDE z głęboką wiedzą w zakresie instalacji robotycznych, transportowych, bateryjnych i energetycznych.',
    'usp02.title':'Szybka i jakościowa realizacja','usp02.desc':'Ścisłe przestrzeganie terminów bez kompromisów w kwestii bezpieczeństwa. Twój harmonogram produkcji to nasz priorytet.',
    'usp03.title':'Niezawodność sprawdzona w branży','usp03.desc':'Zaufanie ponad 50 klientów na całym świecie, w tym liderów w branży motoryzacyjnej, energetycznej i petrochemicznej.',
    'usp04.title':'Pełna dokumentacja i testy','usp04.desc':'Pomiary VDE, testy E/A i szczegółowa dokumentacja projektowa dostarczone przy każdej instalacji.',
    'usp05.title':'Działalność ogólnoeuropejska','usp05.desc':'W pełni mobilne zespoły specjalistów rozmieszczane w całej Europie zgodnie z wymaganiami lokalizacji projektu.',
    'ref.tag':'Udokumentowane osiągnięcia','ref.title':'Projekty, które zrealizowaliśmy',
    'ref.subtitle':'Imienne referencje od klientów, którzy powierzają INTERY swoje najbardziej krytyczne instalacje produkcyjne.',
    'r01.title':'Elektryczna instalacja linii robotycznej','r01.desc':'Kompleksowa instalacja elektryczna robotycznych stacji spawalniczych i montażowych dla modernizacji linii produkcyjnej w motoryzacji.',
    'r02.title':'System transportowy i intralogistyczny','r02.desc':'Okablowanie elektryczne i uruchomienie kompletnej instalacji linii transportowej i magazynowej.',
    'r03.title':'Instalacja linii montażu baterii','r03.desc':'Kompleksowa instalacja elektryczna i mechaniczna infrastruktury linii montażu baterii EV dla klienta z sektora energetycznego.',
    'r04.title':'Rozwiązania okablowania szaf sterowniczych','r04.desc':'Indywidualny projekt, okablowanie i dokumentacja dla wielostanowiskowego zautomatyzowanego środowiska produkcyjnego.',
    'r05.title':'Elektryczna instalacja elektrowni','r05.desc':'Instalacja wysokiego napięcia z pomiarami VDE i pełną dokumentacją techniczną dla klienta z sektora energetycznego.',
    'r.cta.title':'Zostań naszą kolejną historią sukcesu','r.cta.desc':'Opowiedz nam o swoim projekcie instalacyjnym, a my przydzielimy do niego nasz najlepszy zespół.','r.cta.btn':'Rozpocznij rozmowę',
    'ref.view_all':'Zobacz pełną listę referencji','ref.view_all_note':'Ponad 400 zrealizowanych projektów w 15 lat i w 13 krajach',
    'process.tag':'Jak pracujemy',
    'process.title':'Trzy kroki do Twojej<br><em>idealnej instalacji</em>',
    'p01.title':'Wyślij zapytanie','p01.desc':'Opisz zakres projektu, harmonogram i lokalizację. Odpowiemy w ciągu 24 godzin z wstępnymi pytaniami.',
    'p02.title':'Przygotowujemy wycenę','p02.desc':'Nasz zespół techniczny przegląda Twoje wymagania i dostarcza szczegółową, przejrzystą wycenę.',
    'p03.title':'Nasi eksperci zajmują się resztą','p03.desc':'Certyfikowani specjaliści przyjeżdżają na miejsce i realizują precyzyjną instalację z pełną dokumentacją i testami.',
    'clients.label':'Liderzy branży, którzy nam ufają',
    'contact.tag':'Skontaktuj się',
    'contact.title':'Omówmy<br>Twój <em>projekt.</em>',
    'contact.desc':'Jesteśmy tutaj, aby pomóc Ci przy następnym projekcie instalacji przemysłowej. Skontaktuj się z nami, a odpowiemy w ciągu 24 godzin.',
    'contact.phone':'Telefon','contact.email_label':'E-mail','contact.address':'Adres','contact.hours':'Godziny pracy',
    'contact.hours_val':'Poniedziałek – Piątek, 07:00 – 15:00',
    'form.first_name':'Imię *','form.last_name':'Nazwisko *','form.company':'Firma',
    'form.email':'Adres e-mail *','form.service':'Potrzebna usługa','form.message':'Szczegóły projektu *',
    'form.send':'Wyślij wiadomość','form.sending':'Wysyłanie…','form.sent':'Wiadomość wysłana ✓',
    'form.ph.first_name':'Jan','form.ph.last_name':'Kowalski','form.ph.company':'Nazwa Twojej firmy',
    'form.ph.email':'jan@firma.pl','form.ph.message':'Opisz zakres projektu, lokalizację i harmonogram…',
    'opt.placeholder':'Wybierz usługę…','opt.1':'Instalacja linii robotycznych','opt.2':'Linie transportowe i magazyny',
    'opt.3':'Okablowanie szaf sterowniczych','opt.4':'Linie montażu baterii','opt.5':'Instalacja elektrowni',
    'opt.6':'Instalacja fotowoltaiczna','opt.7':'Systemy ochrony przeciwpożarowej','opt.8':'Rozwiązania procesowe',
    'opt.9':'Pracownicy spawalnicy','opt.10':'Inne',
    'footer.slogan':'Zaprojektowane z myślą o doskonałości.','footer.desc':'Zaufani eksperci w zakresie elektrycznych i mechanicznych instalacji dla automatyzacji przemysłowej w całej Europie, Ameryce Północnej i Kanadzie.',
    'footer.services_h':'Usługi','footer.company_h':'Firma','footer.contact_h':'Kontakt',
    'footer.fs1':'Instalacja linii robotycznych','footer.fs2':'Systemy transportowe','footer.fs3':'Okablowanie szaf sterowniczych',
    'footer.fs4':'Linie montażu baterii','footer.fs5':'Instalacja elektrowni',
    'footer.fs6':'Instalacja fotowoltaiczna','footer.fs7':'Systemy ochrony przeciwpożarowej','footer.fs8':'Pracownicy spawalnicy',
    'footer.home':'Strona główna','footer.about':'O nas','footer.references':'Referencje','footer.contact':'Kontakt',
    'footer.copyright':'© 2022 INTERY d.o.o. Wszelkie prawa zastrzeżone. Zarejestrowana w Słowenii.',
    'footer.hours':'Pon–Pt 07:00–15:00 ·',
  },
  es: {
    'nav.home':'Inicio','nav.services':'Servicios','nav.about':'Sobre nosotros',
    'nav.references':'Referencias','nav.careers':'Empleo','nav.contact':'Contacto',
    'nav.quote':'Solicitar presupuesto','nav.mobile_quote':'Solicitar presupuesto',
    'hero.eyebrow':'Europa y Norteamérica · Excelencia industrial',
    'hero.title1':'TU AUTOMATIZACIÓN',
    'hero.title2':'HECHA <em>BIEN.</em>',
    'hero.subtitle':'Instalación eléctrica y mecánica para líneas robóticas, sistemas de transporte y ensamblaje de baterías – para los sectores automotriz, energético e industrial en Europa y Norteamérica.',
    'hero.btn_services':'Ver servicios','hero.btn_quote':'Solicitar presupuesto',
    'stats.specialists':'Especialistas certificados','stats.projects':'Proyectos completados',
    'stats.clients':'Clientes en todo el mundo','stats.categories':'Categorías de servicio',
    'services.tag':'Lo que hacemos',
    'services.title':'Encuentra la solución adecuada<br>para tu operación',
    'services.subtitle':'Desde líneas robóticas hasta instalaciones solares – soluciones técnicamente avanzadas, seguras y eficientes para entornos industriales reales.',
    's01.title':'Instalación de líneas robóticas','s01.desc':'Instalación eléctrica experta para estaciones de soldadura y ensamblaje robótico en fabricación automotriz.',
    's02.title':'Líneas de transporte y almacenes','s02.desc':'Instalación eléctrica sin interrupciones para líneas de transporte y sistemas de intralogística en almacenes.',
    's03.title':'Cableado de armarios de control','s03.desc':'Soluciones de cableado personalizadas para armarios de control industriales con documentación y pruebas completas.',
    's04.title':'Líneas de ensamblaje de baterías','s04.desc':'Instalación eléctrica y mecánica integral para infraestructura de ensamblaje de baterías EV.',
    's05.title':'Instalación de plantas de energía','s05.desc':'Instalación eléctrica de alta tensión especializada para instalaciones de generación y distribución de energía.',
    's06.title':'Instalación fotovoltaica','s06.desc':'Instalación de paneles solares a escala industrial para energía sostenible y costos operativos reducidos.',
    's07.title':'Sistemas de protección contra incendios','s07.desc':'Instalación experta de sistemas industriales de detección y supresión de incendios para total cumplimiento de seguridad.',
    's08.title':'Soluciones de proceso','s08.desc':'Ingeniería de procesos integral para eficiencia operativa petroquímica e industrial.',
    's09.title':'Personal de soldadura','s09.desc':'Soldadores certificados y fiables para proyectos industriales y de fabricación en toda Europa.',
    'service.inquire':'Consultar',
    'service.learn':'Saber más',
    'services.show_more':'Ver más servicios','services.show_less':'Ver menos',
    'about.tag':'Tu socio experto',
    'about.title':'Instalaciones eléctricas<br><em>líderes</em>',
    'about.desc':'INTERY d.o.o. es un proveedor de confianza de servicios de instalación eléctrica y mecánica de alta calidad para los sectores automotriz, energético e industrial. Con un sólido equipo de más de 70 especialistas certificados, ofrecemos soluciones técnicamente avanzadas, seguras y eficientes que apoyan los entornos de producción modernos y las operaciones industriales a gran escala.',
    'about.desc2':'Nuestra experiencia abarca instalaciones de líneas robóticas, sistemas de transporte e intralogística, líneas de ensamblaje de baterías, sistemas eléctricos de alta tensión, cableado de armarios de control, sistemas de protección contra incendios e instalaciones fotovoltaicas – todo ejecutado con estricta adhesión a las normativas del sector, respaldado por mediciones VDE, pruebas E/A y procesos de garantía de calidad probados.',
    'about.btn':'Iniciar un proyecto',
    'about.cert1':'Certificado VDE','about.cert2':'Entrega puntual','about.cert3':'70+ expertos',
    'usp01.title':'Experiencia y personal certificado','usp01.desc':'70+ especialistas certificados VDE con profundo conocimiento en instalaciones robóticas, de transporte, de baterías y de energía.',
    'usp02.title':'Producción rápida y de calidad','usp02.desc':'Estricto cumplimiento de plazos sin comprometer la seguridad. Tu calendario de producción es nuestra primera prioridad.',
    'usp03.title':'Fiabilidad probada en la industria','usp03.desc':'De confianza para más de 50 clientes en todo el mundo, incluidos líderes de los sectores automotriz, energético y petroquímico.',
    'usp04.title':'Documentación y pruebas completas','usp04.desc':'Mediciones VDE, pruebas E/A y documentación detallada del proyecto entregadas con cada instalación.',
    'usp05.title':'Operaciones en toda Europa','usp05.desc':'Equipos de especialistas totalmente móviles que se despliegan por toda Europa para cumplir con los requisitos de ubicación de tu proyecto.',
    'ref.tag':'Historial probado','ref.title':'Proyectos que hemos entregado',
    'ref.subtitle':'Referencias nominales de clientes que confían a INTERY sus instalaciones de producción más críticas.',
    'r01.title':'Instalación eléctrica de línea robótica','r01.desc':'Instalación eléctrica completa de estaciones de soldadura y ensamblaje robótico para una gran actualización de línea de producción automotriz.',
    'r02.title':'Sistema de transporte e intralogística','r02.desc':'Cableado eléctrico y puesta en marcha para una instalación completa de transporte e intralogística de almacén.',
    'r03.title':'Instalación de línea de ensamblaje de baterías','r03.desc':'Instalación eléctrica y mecánica integral de infraestructura de línea de ensamblaje de baterías EV para cliente del sector energético.',
    'r04.title':'Soluciones de cableado de armarios de control','r04.desc':'Diseño personalizado, cableado y documentación de armarios de control para un entorno de producción automatizado de múltiples estaciones.',
    'r05.title':'Instalación eléctrica de planta de energía','r05.desc':'Instalación eléctrica de alta tensión con mediciones VDE y documentación técnica completa para cliente del sector energético.',
    'r.cta.title':'Sé nuestra próxima historia de éxito','r.cta.desc':'Cuéntanos sobre tu proyecto de instalación y pondremos a nuestro mejor equipo en ello.','r.cta.btn':'Iniciar una conversación',
    'ref.view_all':'Ver lista completa de referencias','ref.view_all_note':'Explora más de 400 proyectos entregados en 15 años y 13 países',
    'process.tag':'Cómo trabajamos',
    'process.title':'Tres pasos para tu<br><em>instalación perfecta</em>',
    'p01.title':'Envía una consulta','p01.desc':'Describe el alcance, el cronograma y la ubicación de tu proyecto. Responderemos dentro de 24 horas con preguntas iniciales.',
    'p02.title':'Preparamos un presupuesto','p02.desc':'Nuestro equipo técnico revisa tus requisitos y entrega un presupuesto detallado y transparente.',
    'p03.title':'Nuestros expertos se encargan','p03.desc':'Especialistas certificados llegan al sitio y entregan una instalación de precisión con documentación y pruebas completas.',
    'clients.label':'Líderes del sector que confían en nosotros',
    'contact.tag':'Ponte en contacto',
    'contact.title':'Hablemos de<br>tu <em>proyecto.</em>',
    'contact.desc':'Estamos aquí para ayudarte con tu próximo proyecto de instalación industrial. Contáctanos y responderemos dentro de 24 horas.',
    'contact.phone':'Teléfono','contact.email_label':'Correo electrónico','contact.address':'Dirección','contact.hours':'Horario',
    'contact.hours_val':'Lunes – Viernes, 07:00 – 15:00',
    'form.first_name':'Nombre *','form.last_name':'Apellido *','form.company':'Empresa',
    'form.email':'Dirección de correo electrónico *','form.service':'Servicio necesario','form.message':'Detalles del proyecto *',
    'form.send':'Enviar mensaje','form.sending':'Enviando…','form.sent':'Mensaje enviado ✓',
    'form.ph.first_name':'Carlos','form.ph.last_name':'García','form.ph.company':'Nombre de tu empresa',
    'form.ph.email':'carlos@empresa.es','form.ph.message':'Describe el alcance, la ubicación y el cronograma de tu proyecto…',
    'opt.placeholder':'Selecciona un servicio…','opt.1':'Instalación de líneas robóticas','opt.2':'Líneas de transporte y almacenes',
    'opt.3':'Cableado de armarios de control','opt.4':'Líneas de ensamblaje de baterías','opt.5':'Instalación de plantas de energía',
    'opt.6':'Instalación fotovoltaica','opt.7':'Sistemas de protección contra incendios','opt.8':'Soluciones de proceso',
    'opt.9':'Personal de soldadura','opt.10':'Otro',
    'footer.slogan':'Diseñado para la excelencia.','footer.desc':'Expertos de confianza en instalación eléctrica y mecánica para automatización industrial en toda Europa, América del Norte y Canadá.',
    'footer.services_h':'Servicios','footer.company_h':'Empresa','footer.contact_h':'Contacto',
    'footer.fs1':'Instalación de líneas robóticas','footer.fs2':'Sistemas de transporte','footer.fs3':'Cableado de armarios de control',
    'footer.fs4':'Líneas de ensamblaje de baterías','footer.fs5':'Instalación de plantas de energía',
    'footer.fs6':'Instalación fotovoltaica','footer.fs7':'Sistemas de protección contra incendios','footer.fs8':'Personal de soldadura',
    'footer.home':'Inicio','footer.about':'Sobre nosotros','footer.references':'Referencias','footer.contact':'Contacto',
    'footer.copyright':'© 2022 INTERY d.o.o. Todos los derechos reservados. Registrada en Eslovenia.',
    'footer.hours':'Lun–Vie 07:00–15:00 ·',
  },
  sk: {
    'nav.home':'Domov','nav.services':'Služby','nav.about':'O nás',
    'nav.references':'Referencie','nav.careers':'Kariéra','nav.contact':'Kontakt',
    'nav.quote':'Získať cenovú ponuku','nav.mobile_quote':'Získať cenovú ponuku',
    'hero.eyebrow':'Európa & Severná Amerika · Priemyselná excelencia',
    'hero.title1':'VAŠA AUTOMATIZÁCIA',
    'hero.title2':'VYKONANÁ <em>SPRÁVNE.</em>',
    'hero.subtitle':'Elektrické a mechanické inštalácie pre robotické linky, dopravníkové systémy a montáž batérií – pre automobilový, energetický a priemyselný sektor v Európe a Severnej Amerike.',
    'hero.btn_services':'Zobraziť služby','hero.btn_quote':'Požiadať o cenovú ponuku',
    'stats.specialists':'Certifikovaných špecialistov','stats.projects':'Dokončených projektov',
    'stats.clients':'Klientov po celom svete','stats.categories':'Kategórií služieb',
    'services.tag':'Čo robíme',
    'services.title':'Nájdite správne riešenie<br>pre váš podnik',
    'services.subtitle':'Od robotických liniek po solárne inštalácie – technicky pokročilé, bezpečné a efektívne riešenia pre reálne priemyselné prostredia.',
    's01.title':'Inštalácia robotických liniek','s01.desc':'Odborná elektrická montáž pre robotické zváracie a montážne stanice v automobilovom priemysle.',
    's02.title':'Dopravníkové linky a sklady','s02.desc':'Bezproblémová elektrická inštalácia pre dopravníkové linky a systémy intralogistiky v skladoch.',
    's03.title':'Kabeláž rozvádzačov','s03.desc':'Individuálne riešenia kabeláže priemyselných rozvádzačov s kompletnou dokumentáciou a testovaním.',
    's04.title':'Linky na montáž batérií','s04.desc':'Komplexná elektrická a mechanická inštalácia pre infraštruktúru montáže batérií EV.',
    's05.title':'Inštalácia elektrární','s05.desc':'Špecializovaná vysokonapäťová inštalácia pre zariadenia na výrobu a distribúciu elektriny.',
    's06.title':'Fotovoltaická inštalácia','s06.desc':'Priemyselná inštalácia solárnych panelov pre udržateľnú energiu a znížené prevádzkové náklady.',
    's07.title':'Systémy požiarnej ochrany','s07.desc':'Odborná inštalácia priemyselných systémov detekcie a hasenia požiarov.',
    's08.title':'Procesné riešenia','s08.desc':'Komplexná procesná inžinieria pre petrochemickú a priemyselnú prevádzkovú efektivitu.',
    's09.title':'Zvárači','s09.desc':'Spoľahliví, certifikovaní zvárači pre priemyselné a výrobné projekty v celej Európe.',
    'service.inquire':'Dopytovať sa',
    'service.learn':'Dozvedieť sa viac',
    'services.show_more':'Zobraziť viac služieb','services.show_less':'Zobraziť menej',
    'about.tag':'Váš odborný partner',
    'about.title':'Vedúce elektrické<br><em>inštalácie</em>',
    'about.desc':'INTERY d.o.o. je dôveryhodným poskytovateľom vysokokvalitných elektrických a mechanických inštalačných služieb pre automobilový, energetický a priemyselný sektor. S silným tímom viac ako 70 certifikovaných špecialistov poskytujeme technicky pokročilé, bezpečné a efektívne riešenia, ktoré podporujú moderné výrobné prostredia a veľkokapacitné priemyselné operácie.',
    'about.desc2':'Naše odborné znalosti zahŕňajú inštalácie robotických liniek, dopravníkové a intralogistické systémy, linky na montáž batérií, vysokonapäťové energetické systémy, kabeláž rozvádzačov, systémy požiarnej ochrany a fotovoltaické inštalácie – všetko realizované v súlade s priemyselnými predpismi, podporené meraniami VDE, testovaním E/A a overenými procesmi zabezpečenia kvality.',
    'about.btn':'Spustiť projekt',
    'about.cert1':'VDE certifikovaný','about.cert2':'Včasné dodanie','about.cert3':'70+ odborníkov',
    'usp01.title':'Odbornosť a certifikovaný personál','usp01.desc':'70+ VDE certifikovaných špecialistov s hlbokými znalosťami v oblasti robotických, dopravníkových, batériových a energetických inštalácií.',
    'usp02.title':'Rýchla a kvalitná realizácia','usp02.desc':'Prísne dodržiavanie termínov bez kompromisov v oblasti bezpečnosti. Váš výrobný harmonogram je našou prvou prioritou.',
    'usp03.title':'Spoľahlivosť overená v priemysle','usp03.desc':'Dôvera viac ako 50 klientov po celom svete vrátane lídrov v automobilovom, energetickom a petrochemickom priemysle.',
    'usp04.title':'Kompletná dokumentácia a testovanie','usp04.desc':'Merania VDE, testovanie E/A a podrobná projektová dokumentácia dodaná pri každej inštalácii.',
    'usp05.title':'Prevádzka v celej Európe','usp05.desc':'Plne mobilné tímy špecialistov nasadzované v celej Európe podľa požiadaviek miesta vášho projektu.',
    'ref.tag':'Overená história úspechov','ref.title':'Projekty, ktoré sme realizovali',
    'ref.subtitle':'Menovito uvádzané referencie od klientov, ktorí INTERY zverujú svoje najkritickejšie výrobné inštalácie.',
    'r01.title':'Elektrická inštalácia robotickej linky','r01.desc':'Kompletná elektrická inštalácia robotických zváracích a montážnych staníc pre modernizáciu veľkej automobilovej výrobnej linky.',
    'r02.title':'Dopravníkový a intralogistický systém','r02.desc':'Elektrická kabeláž a uvedenie do prevádzky kompletnej inštalácie dopravníkovej a skladovej intralogistiky.',
    'r03.title':'Inštalácia linky na montáž batérií','r03.desc':'Komplexná elektrická a mechanická inštalácia infraštruktúry linky na montáž batérií EV pre klienta z energetického sektora.',
    'r04.title':'Riešenia kabeláže rozvádzačov','r04.desc':'Návrh na mieru, kabeláž a dokumentácia pre viacstaničné automatizované výrobné prostredie.',
    'r05.title':'Elektrická inštalácia elektrárne','r05.desc':'Vysokonapäťová elektrická inštalácia s meraniami VDE a kompletnou technickou dokumentáciou.',
    'r.cta.title':'Buďte naším ďalším úspechom','r.cta.desc':'Povedzte nám o svojom inštalačnom projekte a my naň nasadíme náš najlepší tím.','r.cta.btn':'Začať konverzáciu',
    'ref.view_all':'Zobraziť úplný zoznam referencií','ref.view_all_note':'Prezrite si vyše 400 realizovaných projektov za 15 rokov v 13 krajinách',
    'process.tag':'Ako pracujeme',
    'process.title':'Tri kroky k vašej<br><em>správne vykonanej inštalácii</em>',
    'p01.title':'Odoslať dopyt','p01.desc':'Opíšte rozsah projektu, časový plán a miesto. Odpovieme do 24 hodín s úvodnými otázkami.',
    'p02.title':'Pripravíme cenovú ponuku','p02.desc':'Náš technický tím preskúma vaše požiadavky a doručí podrobnú, transparentnú cenovú ponuku.',
    'p03.title':'Naši odborníci sa postarajú o všetko','p03.desc':'Certifikovaní špecialisti prídu na miesto a realizujú presnú inštaláciu s kompletnou dokumentáciou a testovaním.',
    'clients.label':'Lídri priemyslu, ktorí nám dôverujú',
    'contact.tag':'Kontaktujte nás',
    'contact.title':'Porozprávajme sa o<br>vašom <em>projekte.</em>',
    'contact.desc':'Sme tu, aby sme vám pomohli s vaším ďalším priemyselným inštalačným projektom. Kontaktujte nás a odpovieme do 24 hodín.',
    'contact.phone':'Telefón','contact.email_label':'E-mail','contact.address':'Adresa','contact.hours':'Hodiny',
    'contact.hours_val':'Pondelok – Piatok, 07:00 – 15:00',
    'form.first_name':'Meno *','form.last_name':'Priezvisko *','form.company':'Spoločnosť',
    'form.email':'E-mailová adresa *','form.service':'Potrebná služba','form.message':'Detaily projektu *',
    'form.send':'Odoslať správu','form.sending':'Odosielanie…','form.sent':'Správa odoslaná ✓',
    'form.ph.first_name':'Ján','form.ph.last_name':'Novák','form.ph.company':'Názov vašej spoločnosti',
    'form.ph.email':'jan@spolocnost.sk','form.ph.message':'Opíšte rozsah projektu, miesto a časový plán…',
    'opt.placeholder':'Vyberte službu…','opt.1':'Inštalácia robotických liniek','opt.2':'Dopravníkové linky a sklady',
    'opt.3':'Kabeláž rozvádzačov','opt.4':'Linky na montáž batérií','opt.5':'Inštalácia elektrární',
    'opt.6':'Fotovoltaická inštalácia','opt.7':'Systémy požiarnej ochrany','opt.8':'Procesné riešenia',
    'opt.9':'Zvárači','opt.10':'Iné',
    'footer.slogan':'Navrhnuté pre dokonalosť.','footer.desc':'Dôveryhodní odborníci na elektrické a mechanické inštalácie pre priemyselnú automatizáciu v celej Európe, Severnej Amerike a Kanade.',
    'footer.services_h':'Služby','footer.company_h':'Spoločnosť','footer.contact_h':'Kontakt',
    'footer.fs1':'Inštalácia robotických liniek','footer.fs2':'Dopravníkové systémy','footer.fs3':'Kabeláž rozvádzačov',
    'footer.fs4':'Linky na montáž batérií','footer.fs5':'Inštalácia elektrární',
    'footer.fs6':'Fotovoltaická inštalácia','footer.fs7':'Systémy požiarnej ochrany','footer.fs8':'Zvárači',
    'footer.home':'Domov','footer.about':'O nás','footer.references':'Referencie','footer.contact':'Kontakt',
    'footer.copyright':'© 2022 INTERY d.o.o. Všetky práva vyhradené. Registrovaná v Slovinsku.',
    'footer.hours':'Po–Pi 07:00–15:00 ·',
  }
};

let currentLang = localStorage.getItem('intery-lang') || 'en';

const langNames = {
  en: 'English', sl: 'Slovenščina', de: 'Deutsch',
  pl: 'Polski', es: 'Español', sk: 'Slovenčina'
};

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
  document.querySelectorAll('.lang-dropdown-label').forEach(el => {
    el.innerHTML = `<span class="lang-dropdown-name">${langNames[lang]}</span><span class="lang-dropdown-code">${lang.toUpperCase()}</span>`;
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('intery-lang', lang);
  currentLang = lang;
}

function positionFixedDropdown(btn, menu) {
  const rect = btn.getBoundingClientRect();
  menu.style.top = `${rect.bottom + 8}px`;
  menu.style.right = `${window.innerWidth - rect.right}px`;
  menu.style.left = 'auto';
}

function setupLangDropdown(btnId, menuId, useFixed) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;
  if (useFixed) document.body.appendChild(menu);
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('open');
    document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.lang-dropdown-btn').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
    if (!isOpen) {
      if (useFixed) positionFixedDropdown(btn, menu);
      menu.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
  if (useFixed) {
    const reposition = () => {
      if (menu.classList.contains('open')) positionFixedDropdown(btn, menu);
    };
    window.addEventListener('scroll', reposition, { passive: true });
    window.addEventListener('resize', reposition);
  }
}

setupLangDropdown('langDropdownBtn', 'langDropdownMenu', true);
setupLangDropdown('mobileLangDropdownBtn', 'mobileLangDropdownMenu', false);

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    applyTranslations(btn.dataset.lang);
    document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.lang-dropdown-btn').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.lang-dropdown-btn').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
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
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMenu();
    document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.lang-dropdown-btn').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  }
});
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

/* ── SERVICES MOBILE TOGGLE ──────────────────────── */
const servicesToggle = document.getElementById('services-toggle');
const servicesGrid   = document.getElementById('services-grid');
if (servicesToggle && servicesGrid) {
  servicesToggle.addEventListener('click', () => {
    const expanded = servicesGrid.classList.toggle('is-expanded');
    servicesToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    const labelEl = servicesToggle.querySelector('.services-toggle-label');
    const key = expanded ? 'services.show_less' : 'services.show_more';
    labelEl.dataset.i18n = key;
    const t = translations[currentLang];
    if (t && t[key]) labelEl.textContent = t[key];
    if (expanded) {
      servicesGrid.querySelectorAll('.service-card-extra').forEach(card => {
        gsap.set(card, { clearProps: 'opacity,transform' });
      });
    }
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
}

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
  const status = document.getElementById('contactFormStatus');
  const t = (k, fb) => (translations[currentLang] && translations[currentLang][k]) || fb;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;

    const langInput = document.getElementById('contact-language');
    if (langInput) langInput.value = document.documentElement.lang || currentLang || 'en';

    if (status) { status.className = 'form-status'; status.textContent = ''; }
    btn.innerHTML = `<span>${t('form.sending', 'Sending…')}</span>`;
    btn.disabled = true;

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        btn.innerHTML = `<span>${t('form.sent', 'Message Sent ✓')}</span>`;
        btn.style.background = '#1a6fa8';
        if (status) { status.className = 'form-status success'; status.textContent = t('form.sent', 'Message Sent ✓'); }
        form.reset();
      } else {
        throw new Error(data.message || 'send_failed');
      }
    } catch (err) {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      if (status) { status.className = 'form-status error'; status.textContent = '⚠ ' + (err.message === 'send_failed' ? t('form.error', 'Could not send. Please try again.') : err.message); }
      return;
    }

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.disabled = false;
      if (status) { status.className = 'form-status'; status.textContent = ''; }
    }, 3500);
  });
}

/* ── SEAMLESS MARQUEE CAROUSEL ──────────────────── */
function initMarquee() {
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeWrapper = document.querySelector('.marquee-wrapper');
  if (!marqueeTrack || !marqueeWrapper) return;

  const images = marqueeTrack.querySelectorAll('img');
  let loadedCount = 0;

  const startAnimation = () => {
    const items = marqueeTrack.querySelectorAll('.client-logo, .client-dot');
    const itemCount = items.length;
    if (itemCount === 0) return;

    // Calculate width of one set (14 logos + 14 dots)
    const oneSetCount = 28;
    let oneSetWidth = 0;

    items.forEach((el, i) => {
      if (i < oneSetCount) {
        oneSetWidth += el.offsetWidth;
      }
    });

    const speedPixelsPerSec = 50;
    const duration = Math.max(oneSetWidth / speedPixelsPerSec, 10);

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marqueeTrack, {
      x: -oneSetWidth,
      duration: duration,
      ease: 'none',
      force3D: true
    }, 0);

    marqueeWrapper.addEventListener('mouseenter', () => tl.pause());
    marqueeWrapper.addEventListener('mouseleave', () => tl.play());
  };

  if (images.length === 0) {
    setTimeout(startAnimation, 100);
  } else {
    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) startAnimation();
        });
        img.addEventListener('error', () => {
          loadedCount++;
          if (loadedCount === images.length) startAnimation();
        });
      }
    });

    if (loadedCount === images.length) startAnimation();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  gsap.to('body', { opacity: 1, duration: .5, ease: 'power1.out', delay: .1 });
  setTimeout(initMarquee, 300);
});

window.addEventListener('load', initMarquee);
