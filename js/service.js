/* ═══════════════════════════════════════════════════
   INTERY d.o.o. — Service Page Script
   ═══════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* ── PAGE LOAD ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  gsap.to('body', { opacity: 1, duration: .5, ease: 'power1.out', delay: .1 });
});

/* ── NAVBAR SCROLL ───────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ── MOBILE MENU ─────────────────────────────────── */
const mobileToggle  = document.getElementById('mobileToggle');
const mobileMenu    = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileMenuOverlay');
const mobileClose   = document.getElementById('mobileMenuClose');

function openMenu() {
  mobileToggle?.classList.add('active');
  mobileMenu?.classList.add('active');
  mobileOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileToggle?.classList.remove('active');
  mobileMenu?.classList.remove('active');
  mobileOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

mobileToggle?.addEventListener('click', e => {
  e.stopPropagation();
  mobileMenu?.classList.contains('active') ? closeMenu() : openMenu();
});
mobileClose?.addEventListener('click', closeMenu);
mobileOverlay?.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 992) closeMenu(); });
document.querySelectorAll('.mobile-menu-link').forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

/* ── HERO ANIMATIONS ─────────────────────────────── */
if (document.querySelector('.sp-hero-content')) {
  gsap.from('.sp-back-link',     { opacity: 0, x: -20, duration: .6, delay: .2, ease: 'power3.out' });
  gsap.from('.sp-eyebrow',       { opacity: 0, y: 20,  duration: .7, delay: .3, ease: 'power3.out' });
  gsap.from('.sp-hero-title',    { opacity: 0, y: 60,  duration: .9, delay: .4, ease: 'power4.out' });
  gsap.from('.sp-hero-subtitle', { opacity: 0, y: 30,  duration: .7, delay: .6, ease: 'power3.out' });
  gsap.from('.sp-hero-ctas',     { opacity: 0, y: 20,  duration: .6, delay: .75, ease: 'power3.out' });
  gsap.from('.sp-hero-num',      { opacity: 0, x: 40,  duration: 1,  delay: .2, ease: 'power3.out' });
}

/* ── SCROLL REVEAL ───────────────────────────────── */
gsap.utils.toArray('.sp-reveal').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 50,
    duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
  });
});

gsap.utils.toArray('.sp-reveal-left').forEach(el => {
  gsap.from(el, {
    opacity: 0, x: -60,
    duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 80%', once: true }
  });
});

gsap.utils.toArray('.sp-reveal-right').forEach(el => {
  gsap.from(el, {
    opacity: 0, x: 60,
    duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 80%', once: true }
  });
});

gsap.utils.toArray('.sp-feature-item').forEach((item, i) => {
  gsap.from(item, {
    opacity: 0, y: 40, scale: .97,
    duration: .6, ease: 'power3.out',
    delay: (i % 3) * .1,
    scrollTrigger: { trigger: item, start: 'top 88%', once: true }
  });
});

/* ── FOOTER ──────────────────────────────────────── */
gsap.from('.footer-top > *', {
  opacity: 0, y: 40,
  stagger: .15, duration: .7, ease: 'power3.out',
  scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true }
});

/* ── HOVER MAGNETIC ON CTA ───────────────────────── */
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
