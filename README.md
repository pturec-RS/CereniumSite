# Cerenium Technologies — Website Project
## Site Map & Folder Structure

```
cerenium/
│
├── index.html              ← Homepage (Hero, Value Props, Services Grid, Why Cerenium, CTA, Insights Teaser)
├── about.html              ← Company Profile (Mission, Stats, Approach, Oracle Partnership, Midmarket Focus)
├── services.html           ← Full Service Overview (8 modular service sections, AEO-optimized H2s)
├── contact.html            ← Lead Generation (Formspree form, FAQ, Contact Info)
├── insights.html           ← Blog/Insights stub (6 article stubs ready for content)
│
├── global.css              ← Shared brand styles, nav, footer, typography, utilities
├── index.css               ← Homepage-specific styles
├── about.css               ← About + page-hero pattern (reused by other pages)
├── services.css            ← Service module layout & tab bar
├── contact.css             ← Form styles, info panel, FAQ
├── insights.css            ← Insights/blog stub styles
│
├── components.js           ← Nav + Footer injection, sticky nav, mobile menu, dropdowns, scroll animations
│
└── assets/
    └── images/
        ├── Cerenium_Tech.png    ← Main logo (place here)
        └── Oracle_Gold.png     ← Oracle Gold Partner badge (place here)
```

---

## Quick Start (VS Code Live Server)

1. Place your logo files in `/assets/images/` as named above
2. Open the `cerenium/` folder in VS Code
3. Right-click `index.html` → **Open with Live Server**
4. All pages should load with shared nav/footer automatically

---

## Formspree Setup (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — name it "Cerenium Consultation Request"
3. Copy your Form ID (looks like: `xabcdefg`)
4. Open `contact.html` and replace `YOUR_FORMSPREE_FORM_ID` in the form action:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
   ```
5. When you're ready to use your own mail server, replace the entire `action` attribute
   with your server endpoint — no other changes needed.

---

## Color Palette Reference

| Token           | Hex       | Usage                          |
|-----------------|-----------|-------------------------------|
| `--navy`        | `#1B2A4A` | Primary brand, headings, nav  |
| `--navy-dark`   | `#111D33` | Footer, dark sections         |
| `--gold`        | `#B8963E` | Accents, CTAs, eyebrows       |
| `--gold-light`  | `#D4AF6A` | Hover states, italic hero text|
| `--gold-pale`   | `#F5EDD8` | Light gold backgrounds, tags  |
| `--off-white`   | `#F7F8FA` | Alternating section bg        |

---

## Adding New Service Pages (Expansion Guide)

Each service in `services.html` follows this modular template:

```html
<section id="[slug]" class="service-module [alt-bg?]" aria-labelledby="[slug]-heading">
  <div class="container service-module-grid [reverse?]">

    <!-- Copy Block -->
    <div class="service-module-copy reveal">
      <span class="eyebrow">## / Service Name</span>
      <h2 id="[slug]-heading">AEO Question: How does Cerenium...</h2>
      <div class="gold-rule left"></div>
      <p class="service-answer">2-sentence direct answer for AI engines.</p>

      <h3>What's included</h3>
      <ul class="service-detail-list">
        <li>Bullet point deliverable</li>
      </ul>

      <h3>Products covered</h3>
      <div class="product-tags">
        <span>Product Name</span>
      </div>

      <a href="contact.html" class="btn btn-primary">CTA Text</a>
    </div>

    <!-- Visual Block -->
    <div class="service-module-visual reveal reveal-delay-1">
      <img src="[unsplash-url]" alt="descriptive alt text" loading="lazy" />
      <div class="service-module-callout">
        <div class="callout-icon">[SVG icon]</div>
        <div>
          <strong>Tagline</strong>
          <p>Short callout description.</p>
        </div>
      </div>
    </div>

  </div>
</section>
```

Alternate sections by adding `alt-bg` class and `reverse` to the grid.
Add every new service to both the nav dropdown in `components.js` AND the tab bar in `services.html`.

---

## SEO/AEO Strategy Summary

- **JSON-LD Schema**: Organization + ProfessionalService on index.html; ItemList on services.html
- **AEO H2 Structure**: Every service section opens with a direct question ("How does Cerenium...")
  followed by a 2-sentence answer block with `.service-answer` class — optimized for AI scraping
- **Semantic HTML**: Strict `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Meta**: Unique title + description per page, canonical URLs, Open Graph tags
- **Oracle Health Keywords**: Millennium, PowerChart, PowerNote, FirstNet, Revenue Cycle, SurgiNet,
  PharmNet, CommunityWorks, HealtheIntent, FHIR, HL7 — distributed across all pages
- **Accessibility**: ARIA labels, keyboard nav, live regions on form errors, skip links ready to add

---

## Production Deployment Checklist

- [ ] Replace all `(XXX) XXX-XXXX` with real phone number
- [ ] Replace all `info@cereniumtech.com` placeholder references  
- [ ] Set up Formspree form ID in `contact.html`
- [ ] Add Google Analytics or similar tag
- [ ] Submit sitemap.xml to Google Search Console (generate with a tool like xml-sitemaps.com)
- [ ] Verify canonical URLs match live domain
- [ ] Compress logo images (TinyPNG) for performance
- [ ] Add favicon files (favicon.ico, apple-touch-icon.png)
- [ ] Test all pages on mobile (BrowserStack or real devices)
- [ ] Run Lighthouse audit — target 90+ on all metrics
