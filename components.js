/**
 * Cerenium Technologies — components.js
 * Injects shared Nav and Footer into every page.
 * Also handles: sticky nav, mobile dropdown menu, scroll animations,
 * GDPR cookie consent banner, and GA4 Consent Mode v2.
 */

// ─── GA4 MEASUREMENT ID ──────────────────────────────────────────────────────
// Replace with your real ID when available: e.g. 'G-XXXXXXXXXX'
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// ─── NAVIGATION HTML ────────────────────────────────────────────────────────
const NAV_HTML = `
<a href="#main-content" class="skip-link">Skip to main content</a>
<header id="site-header" class="site-header">
  <div class="container nav-inner">

    <!-- Logo -->
    <a href="/index.html" class="nav-logo" aria-label="Cerenium Technologies Home">
      <img src="/assets/images/Cerenium_Tech_White_transparent.png" alt="Cerenium Technologies" width="180" height="90" />
    </a>

    <!-- Desktop Nav -->
    <nav aria-label="Primary navigation">
      <ul class="nav-links" role="list">
        <li><a href="/index.html" class="nav-link">Home</a></li>

        <!-- Services Dropdown -->
        <li class="nav-dropdown-wrapper">
          <button class="nav-link nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
            Services
          </button>
          <ul class="nav-dropdown" role="menu">
            <li role="menuitem"><a href="/services.html#ams">Application Managed Services</a></li>
            <li role="menuitem"><a href="/services.html#support">Support Services</a></li>
            <li role="menuitem"><a href="/services.html#financial">Financial Process</a></li>
            <li role="menuitem"><a href="/services.html#integration">Integration &amp; Interoperability</a></li>
            <li role="menuitem"><a href="/services.html#analytics">Reporting &amp; Analytics</a></li>
            <li role="menuitem"><a href="/services.html#change">Change Management</a></li>
            <li role="menuitem"><a href="/services.html#lifecycle">EHR Lifecycle Management</a></li>
            <li role="menuitem"><a href="/services.html#technical">Technical Services</a></li>
          </ul>
        </li>

        <li><a href="/about.html" class="nav-link">About</a></li>
        <li><a href="/insights.html" class="nav-link">Insights</a></li>
        <li><a href="/contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <!-- CTA -->
    <a href="/contact.html" class="btn btn-primary nav-cta">Request a Consultation</a>

    <!-- Mobile Toggle -->
    <button class="mobile-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
    <ul role="list">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/services.html">Services</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/insights.html">Insights</a></li>
      <li><a href="/contact.html">Contact</a></li>
      <li><a href="/contact.html" class="btn btn-primary" style="display:inline-block;margin-top:1rem;">Request a Consultation</a></li>
    </ul>
  </div>
</header>
`;

// ─── FOOTER HTML ─────────────────────────────────────────────────────────────
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container footer-grid">

    <div class="footer-brand">
      <a href="/index.html">
        <img src="/assets/images/Cerenium_Tech_White_transparent.png" alt="Cerenium Technologies" class="footer-logo" width="180" height="90" />
      </a>
      <p class="footer-tagline">Healthcare Complexity. Solved.</p>
      <p class="footer-desc">
        A U.S.-based specialized Oracle Health system integrator serving midmarket
        health systems — from go-live to high performance.
      </p>
      <img src="/assets/images/Oracle_Gold.png" alt="Oracle Gold Partner" class="oracle-badge" />
    </div>

    <div class="footer-links-group">
      <h3 class="footer-heading">Services</h3>
      <ul role="list">
        <li><a href="/services.html#ams">Application Managed Services</a></li>
        <li><a href="/services.html#support">Support Services</a></li>
        <li><a href="/services.html#financial">Financial Process</a></li>
        <li><a href="/services.html#integration">Integration &amp; Interoperability</a></li>
        <li><a href="/services.html#analytics">Reporting &amp; Analytics</a></li>
        <li><a href="/services.html#change">Change Management</a></li>
        <li><a href="/services.html#lifecycle">EHR Lifecycle Management</a></li>
        <li><a href="/services.html#technical">Technical Services</a></li>
      </ul>
    </div>

    <div class="footer-links-group">
      <h3 class="footer-heading">Company</h3>
      <ul role="list">
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/insights.html">Insights</a></li>
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
        <a href="/privacy-policy.html">Privacy Policy</a> &middot;
        <a href="/terms-of-use.html">Terms of Use</a> &middot;
        <a href="/cookie-policy.html">Cookie Policy</a> &middot;
        <button class="footer-cookie-link" id="manage-cookies-btn" aria-label="Manage cookie preferences">Manage Cookies</button>
      </p>
    </div>
  </div>
</footer>
`;

// ─── COOKIE CONSENT BANNER HTML ──────────────────────────────────────────────
const COOKIE_BANNER_HTML = `
<div id="cookie-banner" class="cookie-banner" role="dialog" aria-modal="false" aria-label="Cookie consent" aria-live="polite">
  <div class="cookie-banner-inner">
    <div class="cookie-banner-text">
      <p class="cookie-banner-title">We use cookies</p>
      <p class="cookie-banner-body">
        We use analytics cookies (Google Analytics) to understand how visitors use this site,
        which helps us improve our content and services. You can accept or decline non-essential
        cookies below. Essential site functionality does not require cookies.
        <a href="/cookie-policy.html" class="cookie-policy-link">Learn more</a>
      </p>
    </div>
    <div class="cookie-banner-actions">
      <button id="cookie-decline" class="cookie-btn cookie-btn-decline" aria-label="Decline non-essential cookies">
        Decline
      </button>
      <button id="cookie-accept" class="cookie-btn cookie-btn-accept" aria-label="Accept all cookies">
        Accept All
      </button>
    </div>
  </div>
</div>
`;

// ─── COOKIE CONSENT STYLES ───────────────────────────────────────────────────
const COOKIE_STYLES = `
<style id="cookie-consent-styles">

  /* ── Banner ── */
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #111D33;
    border-top: 3px solid #B8963E;
    padding: 1.25rem 1.5rem;
    box-shadow: 0 -4px 24px rgba(0,0,0,0.35);
    transform: translateY(100%);
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .cookie-banner.cookie-banner--visible {
    transform: translateY(0);
  }

  .cookie-banner-inner {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .cookie-banner-text {
    flex: 1;
    min-width: 0;
  }

  .cookie-banner-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 0.35rem 0;
    letter-spacing: 0.02em;
  }

  .cookie-banner-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    color: #A8B4C8;
    margin: 0;
    line-height: 1.55;
  }

  .cookie-policy-link {
    color: #D4AF6A;
    text-decoration: underline;
    text-underline-offset: 2px;
    margin-left: 0.3em;
    white-space: nowrap;
  }

  .cookie-policy-link:hover {
    color: #F5EDD8;
  }

  .cookie-banner-actions {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .cookie-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.6rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }

  .cookie-btn-decline {
    background: transparent;
    color: #A8B4C8;
    border-color: #3A4A6A;
  }

  .cookie-btn-decline:hover,
  .cookie-btn-decline:focus-visible {
    background: #1B2A4A;
    color: #FFFFFF;
    border-color: #B8963E;
    outline: none;
  }

  .cookie-btn-accept {
    background: #B8963E;
    color: #1B2A4A;
    border-color: #B8963E;
  }

  .cookie-btn-accept:hover,
  .cookie-btn-accept:focus-visible {
    background: #D4AF6A;
    border-color: #D4AF6A;
    outline: none;
  }

  .cookie-btn:focus-visible {
    outline: 2px solid #B8963E;
    outline-offset: 2px;
  }

  /* ── Footer manage cookies button ── */
  .footer-cookie-link {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    font: inherit;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .footer-cookie-link:hover {
    color: #D4AF6A;
  }

  /* ── Mobile ── */
  @media (max-width: 640px) {
    .cookie-banner-inner {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .cookie-banner-actions {
      width: 100%;
    }

    .cookie-btn {
      flex: 1;
      text-align: center;
    }
  }

</style>
`;

// ─── GA4 CONSENT MODE v2 ─────────────────────────────────────────────────────

/**
 * Initialises Google Consent Mode v2 with default DENIED state.
 * Must run before any GA4 tag loads so Google respects the signal.
 * Called unconditionally on every page load.
 */
function initConsentMode() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Set all consent types to denied by default
  gtag('consent', 'default', {
    ad_storage:              'denied',
    ad_user_data:            'denied',
    ad_personalization:      'denied',
    analytics_storage:       'denied',
    functionality_storage:   'denied',
    personalization_storage: 'denied',
    security_storage:        'granted',   // Always granted — required for basic security
    wait_for_update:         500          // ms to wait before GA fires; allows consent to update first
  });

  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);
}

/**
 * Loads the GA4 script tag into the document.
 * Only called after the user has granted consent.
 */
function loadGA4() {
  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  if (document.getElementById('ga4-script')) return; // Already loaded

  const script = document.createElement('script');
  script.id    = 'ga4-script';
  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });
  };
}

/**
 * Updates Consent Mode signals and (if granted) loads GA4.
 * @param {boolean} granted - true = user accepted, false = user declined
 */
function applyConsentDecision(granted) {
  const state = granted ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    ad_storage:              'denied',   // We don't run ads — always denied
    ad_user_data:            'denied',
    ad_personalization:      'denied',
    analytics_storage:       state,
    functionality_storage:   state,
    personalization_storage: 'denied',
    security_storage:        'granted'
  });

  if (granted) loadGA4();
}

// ─── COOKIE CONSENT LOGIC ────────────────────────────────────────────────────

const CONSENT_KEY  = 'cerenium_cookie_consent'; // localStorage key
const CONSENT_YES  = 'granted';
const CONSENT_NO   = 'declined';

/**
 * Returns the stored consent value, or null if not yet set.
 */
function getStoredConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null; // localStorage blocked (private browsing edge cases)
  }
}

/**
 * Saves the consent decision to localStorage.
 */
function storeConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) { /* silent fail */ }
}

/**
 * Dismisses the banner with a slide-out animation, then removes it from the DOM.
 */
function dismissBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.remove('cookie-banner--visible');
  banner.addEventListener('transitionend', () => banner.remove(), { once: true });
}

/**
 * Shows the consent banner (slide up from bottom).
 * Wires up Accept / Decline button handlers.
 */
function showConsentBanner() {
  // Inject styles into <head> if not already present
  if (!document.getElementById('cookie-consent-styles')) {
    document.head.insertAdjacentHTML('beforeend', COOKIE_STYLES);
  }

  // Inject banner into <body>
  document.body.insertAdjacentHTML('beforeend', COOKIE_BANNER_HTML);

  // Trigger slide-in on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.classList.add('cookie-banner--visible');
    });
  });

  // Accept button
  document.getElementById('cookie-accept').addEventListener('click', () => {
    storeConsent(CONSENT_YES);
    applyConsentDecision(true);
    dismissBanner();
  });

  // Decline button
  document.getElementById('cookie-decline').addEventListener('click', () => {
    storeConsent(CONSENT_NO);
    applyConsentDecision(false);
    dismissBanner();
  });
}

/**
 * Re-opens the consent banner so the visitor can change their preference.
 * Triggered by the "Manage Cookies" link in the footer.
 */
function reopenConsentBanner() {
  // Clear stored preference so the banner treats this as a fresh decision
  try { localStorage.removeItem(CONSENT_KEY); } catch (e) { /* silent */ }

  // If banner already exists in DOM just make it visible again
  const existing = document.getElementById('cookie-banner');
  if (existing) {
    existing.classList.add('cookie-banner--visible');
    return;
  }

  showConsentBanner();
}

/**
 * Main consent initialisation. Runs on every page load:
 * 1. Sets Consent Mode defaults to denied (before any GA4 fires)
 * 2. Checks for a stored decision
 *    - If found: apply it silently (load GA4 if granted)
 *    - If not found: show the banner
 */
function initCookieConsent() {
  initConsentMode();

  const stored = getStoredConsent();

  if (stored === CONSENT_YES) {
    applyConsentDecision(true);
  } else if (stored === CONSENT_NO) {
    applyConsentDecision(false);
  } else {
    // No decision yet — show the banner
    showConsentBanner();
  }
}

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

  // Wire up "Manage Cookies" footer button (injected as part of footer)
  const manageBtn = document.getElementById('manage-cookies-btn');
  if (manageBtn) manageBtn.addEventListener('click', reopenConsentBanner);
}

// ─── ACTIVE NAV HIGHLIGHT ────────────────────────────────────────────────────
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0].replace('/', '') === path) {
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
// Cookie consent runs first — before DOMContentLoaded — so Consent Mode
// defaults are set before any analytics tag has a chance to fire.
initCookieConsent();

document.addEventListener('DOMContentLoaded', injectComponents);
