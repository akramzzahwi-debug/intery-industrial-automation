# INTERY Logo System & Web Clip Implementation

## Overview

This document describes the comprehensive logo system implemented for INTERY, including:
- 9 service-specific SVG logos
- Dynamic navbar logo switching
- Favicon and web app assets
- Dark/light mode support
- Full responsive scaling

---

## 1. Service-Specific Logos

### Logo Symbols (SVG)
Located in: `img/service-logos.svg`

Each service has a unique SVG symbol that's referenced throughout the site:

| Service | Symbol ID | Icon Concept |
|---------|-----------|--------------|
| Robotic Lines | `logo-robotic` | Robotic arm with joints |
| Conveyor Systems | `logo-conveyor` | Conveyor belt & pulleys |
| Control Cabinet | `logo-control` | Control panel with circuits |
| Battery Assembly | `logo-battery` | Battery cell with charge levels |
| Power Plant | `logo-power` | Lightning bolt |
| Process Solutions | `logo-planet` | Planet with orbital ring |
| Fire Protection | `logo-fire` | Fire alarm bell |
| Photovoltaic | `logo-solar` | Solar panel array |
| Welding | `logo-welding` | Welding torch |

### Specifications
- **Format:** SVG (scalable, vector-based)
- **Color:** #0369A1 (navy blue)
- **Dimensions:** 100×100px viewBox
- **Accessibility:** Semantic naming, good contrast
- **Dark Mode:** Colors adjust automatically via CSS filters

---

## 2. Dynamic Logo Switching

### How It Works

The `service-logo-switcher.js` script automatically:

1. **Detects the current service page** from the URL path
2. **Updates the navbar logo** from the generic INTERY logo to the service-specific SVG
3. **Adds a service name indicator** next to the logo
4. **Applies on desktop and mobile** navbars
5. **Updates on page navigation** (hashchange, history events)

### JavaScript File
Located in: `js/service-logo-switcher.js`

**Implementation Details:**
- Converts SVG symbols to inline SVG elements
- Replaces image-based logo with vector SVG
- Adds hover effects and transitions
- Respects `prefers-reduced-motion` for accessibility

### Service Detection
Service pages are identified by URL pattern:
```
/services/{service-name}.html
```

Examples:
- `/services/robotic-line-installation.html` → `logo-robotic`
- `/services/conveyor-lines-warehouses.html` → `logo-conveyor`
- `/services/battery-assembly-lines.html` → `logo-battery`

---

## 3. Favicon & Web App Assets

### Favicon Files

#### SVG Favicon (Recommended)
- **File:** `img/favicon.svg`
- **Used by:** Modern browsers (Chrome, Firefox, Safari 15+)
- **Advantages:** Scales perfectly, one file size, supports dark mode variants
- **Size:** ~1KB

#### Apple Touch Icon
- **File:** `img/apple-touch-icon.svg`
- **Used by:** iOS home screen, iPad, macOS
- **Dimensions:** 180×180px (recommended)
- **Format:** SVG with rounded corners for iOS

### PNG Icons (Optional but Recommended for Full Compatibility)

For maximum compatibility across all devices, generate PNG versions:

**Sizes needed:**
- `icon-192.png` (Android, PWA manifest)
- `icon-512.png` (PWA splash screens)
- `icon-192-maskable.png` (adaptive icons for Android)
- `icon-512-maskable.png` (adaptive icons for Android)

**Generation command** (using `svgexport` or `imagemagick`):
```bash
# Using ImageMagick
convert img/favicon.svg -background transparent -size 192x192 img/icon-192.png
convert img/favicon.svg -background transparent -size 512x512 img/icon-512.png

# Using SVGO + ImageMagick combo
svgo img/favicon.svg -o img/favicon-opt.svg
convert img/favicon-opt.svg -background transparent -density 150 -resize 192x192 img/icon-192.png
```

---

## 4. Web App Manifest

### File Location
`manifest.json` (root directory)

### Key Features

**App Configuration:**
- Name: "INTERY - Industrial Electrical Installation"
- Short name: "INTERY"
- Theme color: #0369A1
- Display: Standalone (full-screen app experience)

**Icons:**
- SVG favicon (any size, recommended)
- 192×192 PNG (Android)
- 512×512 PNG (PWA splash screens)
- Maskable icons (adaptive Android icons)

**Shortcuts:**
- "View Services" → `#services`
- "Get Quote" → `#contact`

**Screenshots:**
- Mobile: 540×720px
- Desktop: 1280×720px (for app drawer preview)

### Implementation in HTML
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0369A1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="INTERY">
```

---

## 5. HTML Implementation

### Main Index Page
```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/img/favicon.svg">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.svg">

<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme & PWA Settings -->
<meta name="theme-color" content="#0369A1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="INTERY">

<!-- Service Logo Switcher Script -->
<script src="js/service-logo-switcher.js"></script>
```

### Service Pages
Same favicon/manifest links, plus:
```html
<script src="../js/service-logo-switcher.js"></script>
```

---

## 6. CSS Styling

### Navbar Logo Styling
```css
.navbar-logo-svg {
  height: 40px;
  width: 40px;
  filter: drop-shadow(0 0 0 transparent);
  transition: filter 0.3s ease;
}

.navbar-brand:hover .navbar-logo-svg {
  filter: drop-shadow(0 2px 4px rgba(3, 105, 161, 0.2));
}

.service-indicator {
  display: inline-block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 4px 10px;
  margin-left: 8px;
  transition: all 0.25s ease;
}
```

### Dark Mode Support
- SVG colors use CSS variables that adapt to `prefers-color-scheme`
- Favicon SVG can include `@media (prefers-color-scheme)` for alternate versions
- Service indicator opacity adjusts for light/dark backgrounds

---

## 7. Client References Update

### Updated Sections

**Replaced outdated projects with actual client data:**

| Client | Location | Region | Project | Year |
|--------|----------|--------|---------|------|
| Tesla | Austin, Texas | USA | Battery Assembly Lines | 2024 |
| BMW | Regensburg, Germany | EU | Robotic Lines | 2024 |
| Volkswagen | Wolfsburg, Germany | EU | Control Wiring & Process | 2024 |
| Mercedes-Benz | Sindelfingen, Germany | EU | Conveyor Systems | 2023 |
| CATL | Arnstadt, Germany | EU | Power Systems | 2023 |

**Additional client facilities in system:**
- **USA:** Scout Motors (Columbia, SC), Mercedes (Tuscaloosa, AL), Mercedes Vans (Charleston, SC)
- **Canada:** SAQ (Montreal)
- **EU:** 15+ additional locations across Germany, Spain, Hungary, Greece

---

## 8. Testing Checklist

### Browser Compatibility
- [ ] Chrome/Edge (SVG + PNG fallback)
- [ ] Firefox (SVG native support)
- [ ] Safari (SVG + apple-touch-icon)
- [ ] Mobile browsers (Android Chrome, Safari iOS)

### Favicon Testing
- [ ] Favicon appears in browser tabs
- [ ] Apple touch icon displays on iOS home screen
- [ ] Android PWA icon shows correctly
- [ ] Maskable icon supports adaptive shape

### Logo Switching
- [ ] Logo changes on each service page
- [ ] Service indicator text displays
- [ ] Mobile menu logo updates
- [ ] Hover effects work smoothly
- [ ] Respects `prefers-reduced-motion`

### Responsive Design
- [ ] 375px (mobile) - logos scale properly
- [ ] 768px (tablet) - spacing correct
- [ ] 1024px (desktop) - hover effects work
- [ ] 1440px (large desktop) - no overflow

### Accessibility
- [ ] 4.5:1 contrast ratio (WCAG AA)
- [ ] SVG has proper alt text
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

### Performance
- [ ] SVG file size < 5KB
- [ ] No layout shift on logo load
- [ ] Smooth transitions (150-300ms)
- [ ] No JavaScript errors in console

---

## 9. Deployment Instructions

### Before Launch

1. **Generate PNG icons** (if not using SVG-only):
   ```bash
   npm install -g svgexport
   # or use online converter: https://convertio.co/svg-png/
   ```

2. **Optimize SVG files**:
   ```bash
   npm install -g svgo
   svgo img/favicon.svg img/service-logos.svg
   ```

3. **Test locally**:
   ```bash
   # Start local server
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

4. **Verify all files**:
   - ✓ `img/service-logos.svg`
   - ✓ `img/favicon.svg`
   - ✓ `img/apple-touch-icon.svg`
   - ✓ `manifest.json`
   - ✓ `js/service-logo-switcher.js`
   - ✓ `css/style.css` (with new .navbar-logo-svg styles)

5. **Deploy**:
   - Push to Vercel or hosting platform
   - Clear browser cache
   - Test all links and pages

### Post-Launch

Monitor in Google Search Console:
- Favicon indexed
- Web app installability status
- Mobile usability

---

## 10. Future Enhancements

### Potential additions:
- [ ] Generate animated logos per service (Lottie animations)
- [ ] Service-specific color schemes (change navbar accent color)
- [ ] Dynamic service breadcrumbs
- [ ] Service logo in page headers
- [ ] Animated logo transitions between pages
- [ ] Service-specific meta images (OG images with service logo)

---

## File Structure

```
site/
├── img/
│   ├── service-logos.svg          # All 9 service symbols
│   ├── favicon.svg                 # Main favicon
│   ├── apple-touch-icon.svg        # iOS home screen icon
│   ├── icon-192.png                # Android icon (optional)
│   ├── icon-512.png                # PWA splash icon (optional)
│   ├── icon-192-maskable.png       # Adaptive Android icon (optional)
│   └── icon-512-maskable.png       # Adaptive PWA icon (optional)
├── css/
│   └── style.css                   # Updated with .navbar-logo-svg styles
├── js/
│   └── service-logo-switcher.js    # Dynamic logo switching logic
├── services/
│   ├── robotic-line-installation.html
│   ├── conveyor-lines-warehouses.html
│   ├── control-cabinet-wiring.html
│   ├── battery-assembly-lines.html
│   ├── power-plant-installation.html
│   ├── process-solutions.html
│   ├── fire-protection-systems.html
│   ├── photovoltaic-installation.html
│   └── welding-workforce.html
├── index.html                      # Main page with favicon/manifest links
├── manifest.json                   # PWA web app manifest
└── LOGO-SYSTEM.md                 # This documentation
```

---

## Questions & Support

For issues or customization needs:
- **Logo variations:** Modify `img/service-logos.svg` symbols
- **Colors:** Update `#0369A1` across SVG files and CSS
- **Service mapping:** Edit `SERVICE_LOGOS` object in `service-logo-switcher.js`
- **Icons:** Regenerate PNG assets using ImageMagick or online tools

---

**Version:** 1.0  
**Last Updated:** April 28, 2025  
**Client:** INTERY d.o.o.  
**Status:** Ready for Production  
