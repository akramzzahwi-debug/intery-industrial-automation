(function() {
  'use strict';

  const STORAGE_KEY = 'intery_cookie_consent';
  const LANG_KEY = 'intery-lang';
  const CONSENT_VERSION = '1.0';

  // Translations for all supported languages
  const i18n = {
    en: {
      title: 'We Value Your Privacy',
      message: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      customize: 'Customize',
      settingsTitle: 'Cookie Preferences',
      settingsIntro: 'Manage your cookie preferences below. You can enable or disable different types of cookies at any time.',
      necessary: 'Strictly Necessary',
      necessaryDesc: 'Essential for the website to function properly. Cannot be disabled.',
      analytics: 'Analytics',
      analyticsDesc: 'Help us understand how visitors interact with our site by collecting anonymous information.',
      marketing: 'Marketing',
      marketingDesc: 'Used to deliver relevant advertisements and track campaign performance.',
      save: 'Save Preferences',
      back: 'Back',
      always: 'Always Active',
      footerLink: 'Cookie Settings'
    },
    sl: {
      title: 'Cenimo vašo zasebnost',
      message: 'Uporabljamo piškotke za izboljšanje vaše izkušnje brskanja, analizo prometa in prilagajanje vsebine. S klikom na "Sprejmi vse" soglašate z uporabo piškotkov.',
      acceptAll: 'Sprejmi vse',
      rejectAll: 'Zavrni vse',
      customize: 'Prilagodi',
      settingsTitle: 'Nastavitve piškotkov',
      settingsIntro: 'Upravljajte svoje nastavitve piškotkov spodaj. Različne vrste piškotkov lahko kadar koli omogočite ali onemogočite.',
      necessary: 'Nujno potrebni',
      necessaryDesc: 'Bistveni za pravilno delovanje spletne strani. Ni jih mogoče onemogočiti.',
      analytics: 'Analitika',
      analyticsDesc: 'Pomaga nam razumeti, kako obiskovalci uporabljajo našo stran z zbiranjem anonimnih podatkov.',
      marketing: 'Trženje',
      marketingDesc: 'Uporablja se za prikazovanje ustreznih oglasov in sledenje uspešnosti kampanj.',
      save: 'Shrani nastavitve',
      back: 'Nazaj',
      always: 'Vedno aktivno',
      footerLink: 'Nastavitve piškotkov'
    },
    de: {
      title: 'Wir respektieren Ihre Privatsphäre',
      message: 'Wir verwenden Cookies, um Ihr Browser-Erlebnis zu verbessern, den Datenverkehr zu analysieren und Inhalte zu personalisieren. Mit "Alle akzeptieren" stimmen Sie unserer Verwendung von Cookies zu.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Alle ablehnen',
      customize: 'Anpassen',
      settingsTitle: 'Cookie-Einstellungen',
      settingsIntro: 'Verwalten Sie unten Ihre Cookie-Einstellungen. Sie können verschiedene Cookie-Arten jederzeit aktivieren oder deaktivieren.',
      necessary: 'Unbedingt erforderlich',
      necessaryDesc: 'Für die ordnungsgemäße Funktion der Website unerlässlich. Kann nicht deaktiviert werden.',
      analytics: 'Analyse',
      analyticsDesc: 'Hilft uns zu verstehen, wie Besucher mit unserer Seite interagieren, indem anonyme Informationen gesammelt werden.',
      marketing: 'Marketing',
      marketingDesc: 'Wird verwendet, um relevante Anzeigen zu liefern und die Kampagnenleistung zu verfolgen.',
      save: 'Einstellungen speichern',
      back: 'Zurück',
      always: 'Immer aktiv',
      footerLink: 'Cookie-Einstellungen'
    },
    pl: {
      title: 'Cenimy Twoją prywatność',
      message: 'Używamy plików cookie, aby ulepszyć Twoje doświadczenie przeglądania, analizować ruch na stronie i personalizować treści. Klikając "Akceptuj wszystkie", wyrażasz zgodę na nasze użycie plików cookie.',
      acceptAll: 'Akceptuj wszystkie',
      rejectAll: 'Odrzuć wszystkie',
      customize: 'Dostosuj',
      settingsTitle: 'Preferencje plików cookie',
      settingsIntro: 'Zarządzaj swoimi preferencjami plików cookie poniżej. Możesz w dowolnym momencie włączyć lub wyłączyć różne typy plików cookie.',
      necessary: 'Niezbędne',
      necessaryDesc: 'Niezbędne do prawidłowego funkcjonowania strony. Nie można ich wyłączyć.',
      analytics: 'Analityczne',
      analyticsDesc: 'Pomagają nam zrozumieć, jak odwiedzający wchodzą w interakcję z naszą stroną, zbierając anonimowe informacje.',
      marketing: 'Marketingowe',
      marketingDesc: 'Używane do dostarczania odpowiednich reklam i śledzenia skuteczności kampanii.',
      save: 'Zapisz preferencje',
      back: 'Wstecz',
      always: 'Zawsze aktywne',
      footerLink: 'Ustawienia plików cookie'
    },
    es: {
      title: 'Valoramos tu privacidad',
      message: 'Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar todo", consientes nuestro uso de cookies.',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar todo',
      customize: 'Personalizar',
      settingsTitle: 'Preferencias de cookies',
      settingsIntro: 'Gestiona tus preferencias de cookies a continuación. Puedes habilitar o deshabilitar diferentes tipos de cookies en cualquier momento.',
      necessary: 'Estrictamente necesarias',
      necessaryDesc: 'Esenciales para el correcto funcionamiento del sitio web. No se pueden deshabilitar.',
      analytics: 'Analíticas',
      analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio mediante la recopilación de información anónima.',
      marketing: 'Marketing',
      marketingDesc: 'Se utilizan para mostrar anuncios relevantes y rastrear el rendimiento de las campañas.',
      save: 'Guardar preferencias',
      back: 'Atrás',
      always: 'Siempre activas',
      footerLink: 'Configuración de cookies'
    },
    sk: {
      title: 'Vážime si vaše súkromie',
      message: 'Používame súbory cookie na zlepšenie vášho prehliadania, analýzu návštevnosti a personalizáciu obsahu. Kliknutím na "Prijať všetko" súhlasíte s naším používaním súborov cookie.',
      acceptAll: 'Prijať všetko',
      rejectAll: 'Odmietnuť všetko',
      customize: 'Prispôsobiť',
      settingsTitle: 'Nastavenia súborov cookie',
      settingsIntro: 'Spravujte svoje nastavenia súborov cookie nižšie. Rôzne typy súborov cookie môžete kedykoľvek povoliť alebo zakázať.',
      necessary: 'Nevyhnutne potrebné',
      necessaryDesc: 'Nevyhnutné pre správne fungovanie webovej stránky. Nemožno ich zakázať.',
      analytics: 'Analytické',
      analyticsDesc: 'Pomáhajú nám pochopiť, ako návštevníci interagujú s našou stránkou, zbieraním anonymných informácií.',
      marketing: 'Marketingové',
      marketingDesc: 'Používajú sa na doručovanie relevantných reklám a sledovanie výkonnosti kampaní.',
      save: 'Uložiť nastavenia',
      back: 'Späť',
      always: 'Vždy aktívne',
      footerLink: 'Nastavenia cookies'
    }
  };

  function getLang() {
    const stored = localStorage.getItem(LANG_KEY) || document.documentElement.lang || 'en';
    return i18n[stored] ? stored : 'en';
  }

  function t(key, lang) {
    lang = lang || getLang();
    return (i18n[lang] && i18n[lang][key]) || i18n.en[key];
  }

  function getConsent() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(prefs) {
    const data = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: prefs
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: data }));
  }

  function buildBannerHTML(lang) {
    return `
      <div class="cookie-consent-backdrop"></div>
      <div class="cookie-consent-panel" data-view="main">
        <div class="cookie-consent-view cookie-consent-main">
          <div class="cookie-consent-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
              <circle cx="8.5" cy="9" r="1" fill="currentColor"/>
              <circle cx="15" cy="11" r="1.2" fill="currentColor"/>
              <circle cx="10" cy="15" r="1" fill="currentColor"/>
              <circle cx="16" cy="15.5" r="0.8" fill="currentColor"/>
              <circle cx="7" cy="13" r="0.7" fill="currentColor"/>
            </svg>
          </div>
          <div class="cookie-consent-content">
            <h3 class="cookie-consent-title" id="cookieConsentTitle">${t('title', lang)}</h3>
            <p class="cookie-consent-message" id="cookieConsentMessage">${t('message', lang)}</p>
          </div>
          <div class="cookie-consent-actions">
            <button type="button" class="cookie-btn cookie-btn-ghost" data-action="customize">
              <span>${t('customize', lang)}</span>
            </button>
            <button type="button" class="cookie-btn cookie-btn-secondary" data-action="reject">
              <span>${t('rejectAll', lang)}</span>
            </button>
            <button type="button" class="cookie-btn cookie-btn-primary" data-action="accept">
              <span>${t('acceptAll', lang)}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          </div>
        </div>
        <div class="cookie-consent-view cookie-consent-settings">
          <div class="cookie-consent-settings-header">
            <h3 class="cookie-consent-title">${t('settingsTitle', lang)}</h3>
            <p class="cookie-consent-message">${t('settingsIntro', lang)}</p>
          </div>
          <div class="cookie-consent-categories">
            <div class="cookie-category">
              <div class="cookie-category-header">
                <div>
                  <h4>${t('necessary', lang)}</h4>
                  <p>${t('necessaryDesc', lang)}</p>
                </div>
                <span class="cookie-toggle-locked">${t('always', lang)}</span>
              </div>
            </div>
            <div class="cookie-category">
              <div class="cookie-category-header">
                <div>
                  <h4>${t('analytics', lang)}</h4>
                  <p>${t('analyticsDesc', lang)}</p>
                </div>
                <label class="cookie-toggle">
                  <input type="checkbox" data-pref="analytics">
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
            </div>
            <div class="cookie-category">
              <div class="cookie-category-header">
                <div>
                  <h4>${t('marketing', lang)}</h4>
                  <p>${t('marketingDesc', lang)}</p>
                </div>
                <label class="cookie-toggle">
                  <input type="checkbox" data-pref="marketing">
                  <span class="cookie-toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="cookie-consent-actions cookie-consent-actions-settings">
            <button type="button" class="cookie-btn cookie-btn-ghost" data-action="back">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              <span>${t('back', lang)}</span>
            </button>
            <button type="button" class="cookie-btn cookie-btn-primary" data-action="save">
              <span>${t('save', lang)}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.id = 'cookieConsent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookieConsentTitle');
    banner.setAttribute('aria-describedby', 'cookieConsentMessage');
    banner.innerHTML = buildBannerHTML(getLang());

    // Pre-fill toggles with existing prefs (if any)
    const existing = getConsent();
    if (existing && existing.preferences) {
      requestAnimationFrame(() => {
        banner.querySelectorAll('input[data-pref]').forEach(input => {
          input.checked = !!existing.preferences[input.dataset.pref];
        });
      });
    }
    return banner;
  }

  function showBanner() {
    let banner = document.getElementById('cookieConsent');
    if (banner) {
      banner.classList.add('show');
      return;
    }
    banner = createBanner();
    document.body.appendChild(banner);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => banner.classList.add('show'));
    });
    bindEvents(banner);
  }

  function hideBanner(banner) {
    banner.classList.remove('show');
    setTimeout(() => banner.remove(), 400);
  }

  function bindEvents(banner) {
    const panel = banner.querySelector('.cookie-consent-panel');

    banner.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;

        if (action === 'accept') {
          saveConsent({ necessary: true, analytics: true, marketing: true });
          hideBanner(banner);
        } else if (action === 'reject') {
          saveConsent({ necessary: true, analytics: false, marketing: false });
          hideBanner(banner);
        } else if (action === 'customize') {
          panel.setAttribute('data-view', 'settings');
        } else if (action === 'back') {
          panel.setAttribute('data-view', 'main');
        } else if (action === 'save') {
          const prefs = { necessary: true };
          banner.querySelectorAll('input[data-pref]').forEach(input => {
            prefs[input.dataset.pref] = input.checked;
          });
          saveConsent(prefs);
          hideBanner(banner);
        }
      });
    });
  }

  // Refresh banner content when language changes (live)
  function refreshBannerLanguage() {
    const banner = document.getElementById('cookieConsent');
    if (!banner) {
      // Update footer link too if exists
      updateFooterLinks();
      return;
    }
    const currentView = banner.querySelector('.cookie-consent-panel').getAttribute('data-view');
    const currentToggles = {};
    banner.querySelectorAll('input[data-pref]').forEach(input => {
      currentToggles[input.dataset.pref] = input.checked;
    });

    banner.innerHTML = buildBannerHTML(getLang());
    banner.querySelector('.cookie-consent-panel').setAttribute('data-view', currentView);
    banner.querySelectorAll('input[data-pref]').forEach(input => {
      input.checked = !!currentToggles[input.dataset.pref];
    });
    bindEvents(banner);
    updateFooterLinks();
  }

  function updateFooterLinks() {
    document.querySelectorAll('[data-cookie-settings-link]').forEach(el => {
      el.textContent = t('footerLink');
    });
  }

  // Public API
  window.InteryCookies = {
    show: showBanner,
    reset: () => {
      localStorage.removeItem(STORAGE_KEY);
      const existing = document.getElementById('cookieConsent');
      if (existing) existing.remove();
      showBanner();
    },
    getConsent: getConsent,
    refreshLanguage: refreshBannerLanguage
  };

  // Auto-detect language changes by polling localStorage (for cross-script integration)
  let lastLang = getLang();
  setInterval(() => {
    const current = getLang();
    if (current !== lastLang) {
      lastLang = current;
      refreshBannerLanguage();
    }
  }, 500);

  // Listen for click on language buttons (existing site language switcher)
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-option');
    if (langBtn) {
      // Defer slightly so the existing handler updates localStorage first
      setTimeout(refreshBannerLanguage, 50);
    }
    // Footer cookie settings link
    const cookieLink = e.target.closest('[data-cookie-settings-link]');
    if (cookieLink) {
      e.preventDefault();
      showBanner();
    }
  });

  function init() {
    updateFooterLinks();
    if (!getConsent()) {
      setTimeout(showBanner, 600);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
