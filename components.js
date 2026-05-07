/**
 * Cerenium Technologies — components.js
 * Injects shared Nav and Footer into every page.
 * Also handles: sticky nav, mobile dropdown menu, scroll animations.
 */

// ─── NAVIGATION HTML ────────────────────────────────────────────────────────
const NAV_HTML = `
<header id="site-header" class="site-header">
  <div class="container nav-inner">

    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="Cerenium Technologies Home">
      <img src="assets/images/Cerenium_Tech_White_transparent.png" alt="Cerenium Technologies" />
    </a>

    <!-- Desktop Nav -->
    <nav aria-label="Primary navigation">
      <ul class="nav-links" role="list">
        <li><a href="index.html" class="nav-link">Home</a></li>

        <!-- Services Dropdown -->
        <li class="nav-dropdown-wrapper">
          <button class="nav-link nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Services
          </button>
          <ul class="nav-dropdown" role="menu">
            <li role="menuitem"><a href="services.html#ams">Application Managed Services</a></li>
            <li role="menuitem"><a href="services.html#support">Support Services</a></li>
            <li role="menuitem"><a href="services.html#financial">Financial Process</a></li>
            <li role="menuitem"><a href="services.html#integration">Integration &amp; Interoperability</a></li>
            <li role="menuitem"><a href="services.html#analytics">Reporting &amp; Analytics</a></li>
            <li role="menuitem"><a href="services.html#change">Change Management</a></li>
            <li role="menuitem"><a href="services.html#lifecycle">EHR Lifecycle Management</a></li>
            <li role="menuitem"><a href="services.html#technical">Technical Services</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="insights.html" class="nav-link">Insights</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <!-- CTA -->
    <a href="contact.html" class="btn btn-primary nav-cta">Request a Consultation</a>

    <!-- Mobile Toggle -->
    <button class="mobile-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
    <ul role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="insights.html">Insights</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="contact.html" class="btn btn-primary" style="display:inline-block;margin-top:1rem;">Request a Consultation</a></li>
    </ul>
  </div>
</header>
`;

// ─── FOOTER HTML ─────────────────────────────────────────────────────────────
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container footer-grid">

    <div class="footer-brand">
      <a href="index.html">
        <img src="assets/images/Cerenium_Tech_White_transparent.png" alt="Cerenium Technologies" class="footer-logo" />
      </a>
      <p class="footer-tagline">Healthcare Complexity. Solved.</p>
      <p class="footer-desc">
        A U.S.-based specialized Oracle Health system integrator serving midmarket
        health systems — from go-live to high performance.
      </p>
      <img src="assets/images/Oracle_Gold.png" alt="Oracle Gold Partner" class="oracle-badge" />
    </div>

    <div class="footer-links-group">
      <h3 class="footer-heading">Services</h3>
      <ul role="list">
        <li><a href="services.html#ams">Application Managed Services</a></li>
        <li><a href="services.html#support">Support Services</a></li>
        <li><a href="services.html#financial">Financial Process</a></li>
        <li><a href="services.html#integration">Integration &amp; Interoperability</a></li>
        <li><a href="services.html#analytics">Reporting &amp; Analytics</a></li>
        <li><a href="services.html#change">Change Management</a></li>
        <li><a href="services.html#lifecycle">EHR Lifecycle Management</a></li>
        <li><a href="services.html#technical">Technical Services</a></li>
      </ul>
    </div>

    <div class="footer-links-group">
      <h3 class="footer-heading">Company</h3>
      <ul role="list">
        <li><a href="about.html">About Us</a></li>
        <li><a href="insights.html">Insights</a></li>
      </ul>

      <h3 class="footer-heading" style="margin-top:2rem;">Contact</h3>
      <ul role="list">
        <li><a href="mailto:info@cereniumtech.com">info@cereniumtech.com</a></li>
        <li><a href="tel:+10000000000">(XXX) XXX-XXXX</a></li>
     </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>&copy; <span id="footer-year"></span> Cerenium Technologies, LLC. All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> &middot;
        <a href="#">Terms of Use</a>
      </p>
    </div>
  </div>
</footer>
`;

// ─── INJECT COMPONENTS ───────────────────────────────────────────────────────
function injectComponents() {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Dynamic year
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Highlight active nav link
  highlightActiveNav();

  // Init interactions after injection
  initStickyNav();
  initMobileMenu();
  initDropdownNav();
  initScrollAnimations();
}

// ─── ACTIVE NAV HIGHLIGHT ────────────────────────────────────────────────────
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0] === path) {
      link.classList.add('active');
    }
  });
}

// ─── STICKY NAV ──────────────────────────────────────────────────────────────
function initStickyNav() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggle.classList.toggle('is-open', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.setAttribute('aria-label', 'Open menu');
      menu.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
      toggle.classList.remove('is-open');
    }
  });
}

// ─── DESKTOP DROPDOWN ────────────────────────────────────────────────────────
function initDropdownNav() {
  document.querySelectorAll('.nav-dropdown-wrapper').forEach(wrapper => {
    const trigger  = wrapper.querySelector('.nav-dropdown-trigger');
    const dropdown = wrapper.querySelector('.nav-dropdown');
    if (!trigger || !dropdown) return;

    // Toggle on click
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', false);
    });

    // Keyboard: close on Escape
    wrapper.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', false);
        trigger.focus();
      }
    });
  });
}

// ─── SCROLL REVEAL ANIMATIONS ────────────────────────────────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', injectComponents);
