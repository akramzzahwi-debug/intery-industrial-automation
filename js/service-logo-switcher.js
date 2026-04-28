// Service Logo Switcher - Dynamically updates navbar logo based on current service page
(function() {
  const SERVICE_LOGOS = {
    'robotic-line-installation': 'logo-robotic',
    'conveyor-lines-warehouses': 'logo-conveyor',
    'control-cabinet-wiring': 'logo-control',
    'battery-assembly-lines': 'logo-battery',
    'power-plant-installation': 'logo-power',
    'process-solutions': 'logo-planet',
    'fire-protection-systems': 'logo-fire',
    'photovoltaic-installation': 'logo-solar',
    'welding-workforce': 'logo-welding'
  };

  const SERVICE_INFO = {
    'robotic-line-installation': { name: 'Robotic Lines', color: '#0369A1' },
    'conveyor-lines-warehouses': { name: 'Conveyor Systems', color: '#0369A1' },
    'control-cabinet-wiring': { name: 'Control Wiring', color: '#0369A1' },
    'battery-assembly-lines': { name: 'Battery Assembly', color: '#0369A1' },
    'power-plant-installation': { name: 'Power Plants', color: '#0369A1' },
    'process-solutions': { name: 'Process Solutions', color: '#0369A1' },
    'fire-protection-systems': { name: 'Fire Protection', color: '#0369A1' },
    'photovoltaic-installation': { name: 'Photovoltaics', color: '#0369A1' },
    'welding-workforce': { name: 'Welding', color: '#0369A1' }
  };

  function getServiceFromPath() {
    const path = window.location.pathname;
    const match = path.match(/\/services\/([a-z\-]+)/);
    return match ? match[1] : null;
  }

  function updateNavbarLogo() {
    const service = getServiceFromPath();
    if (!service || !SERVICE_LOGOS[service]) return;

    const logoId = SERVICE_LOGOS[service];
    const navbarBrand = document.querySelector('.navbar-brand');
    const navbarLogo = document.querySelector('.navbar-logo-img');

    if (!navbarBrand || !navbarLogo) return;

    // Create SVG logo element from symbol
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'navbar-logo-svg');
    svg.setAttribute('width', '40');
    svg.setAttribute('height', '40');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/img/service-logos.svg#' + logoId);
    svg.appendChild(use);

    // Replace the image with SVG
    navbarLogo.parentNode.replaceChild(svg, navbarLogo);

    // Add service indicator
    const serviceInfo = SERVICE_INFO[service];
    const serviceIndicator = document.createElement('span');
    serviceIndicator.className = 'service-indicator';
    serviceIndicator.textContent = serviceInfo.name;
    serviceIndicator.style.fontSize = '12px';
    serviceIndicator.style.color = '#666';
    serviceIndicator.style.marginLeft = '8px';
    serviceIndicator.style.fontWeight = '500';
    navbarBrand.appendChild(serviceIndicator);

    // Update mobile menu logo as well
    const mobileMenuLogo = document.querySelector('.mobile-menu-brand .navbar-logo-img');
    if (mobileMenuLogo) {
      const mobileSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      mobileSvg.setAttribute('viewBox', '0 0 100 100');
      mobileSvg.setAttribute('class', 'navbar-logo-svg');
      mobileSvg.setAttribute('width', '32');
      mobileSvg.setAttribute('height', '32');
      mobileSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

      const mobileUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      mobileUse.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/img/service-logos.svg#' + logoId);
      mobileSvg.appendChild(mobileUse);

      mobileMenuLogo.parentNode.replaceChild(mobileSvg, mobileMenuLogo);
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbarLogo);
  } else {
    updateNavbarLogo();
  }

  // Watch for navigation changes (for SPA-style navigation if added later)
  window.addEventListener('hashchange', updateNavbarLogo);

  // Observe history changes
  const originalPushState = history.pushState;
  history.pushState = function(...args) {
    originalPushState.apply(this, args);
    updateNavbarLogo();
  };
})();
