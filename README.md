# BEEKEY TRADERS — B2B Footwear Distributor Website

Responsive, professional single-page B2B website built for **BEEKEY TRADERS**, an authorized footwear distributor for **Walkaroo** and **VKC** across Karnataka.

---

## 📁 Project Structure

```text
BEEKEY-TRADERS/
├── index.html        # Semantic HTML5 single-page structure
├── css/
│   └── style.css     # Responsive styles with Navy Blue & Amber Gold theme
├── js/
│   └── script.js     # Interactive catalog alert, mobile menu, and B2B form handling
└── README.md         # Documentation & running instructions
```

---

## 🎨 Design & Theme Specifications

- **Target Audience:** Footwear retail shop owners & B2B trade partners.
- **Brand Identity:** Trustworthy, reliable, and professional distributor.
- **Color Palette:**
  - **Navy Blue (Primary):** `#0a1728`, `#0f2137`, `#1e3e62`
  - **Amber / Gold (Accent & CTA):** `#d97706`, `#b45309`, `#fbbf24`
  - **Backgrounds:** Clean white (`#ffffff`) and crisp slate/neutral gray (`#f8fafc`, `#f1f5f9`)
- **Typography:** Modern sans-serif via Google Fonts (`Inter` & `Plus Jakarta Sans`).

---

## 🚀 Website Sections

1. **Top Announcement Bar & Header (Section A)**:
   - Support hotline, email, and statewide distribution badge (`Distributor across Karnataka`).
   - Brand Logo: **BEEKEY TRADERS**.
   - Navigation links: `Home`, `Brands`, `Catalog`, `Network`, `Our App`, `Retailer Inquiry`.
   - Call to Action: `Partner With Us` (smooth-scrolls to registration form).
   - Mobile-responsive hamburger navigation.

2. **Hero Area (Section B)**:
   - Headline: *"Karnataka's Trusted Distributor for Walkaroo & VKC."*
   - Sub-headline: *"Supplying high-quality footwear to retail shops across all districts with guaranteed fast delivery, ready stock, and competitive dealer pricing."*
   - Primary CTA: `Register Your Shop` (smooth-scrolls to form).
   - Secondary CTA: `Download Latest Catalogs` (triggers JavaScript alert *"Catalog downloading..."* and toast notification).
   - Quick Trust Metrics: 31/31 Districts Covered, 50,000+ Pairs in Warehouse, 24-Hr Fast Dispatch.

3. **Brands Showcase (Section C)**:
   - Clean two-column responsive layout with official Walkaroo & VKC brand logos.
   - **Walkaroo:** PU footwear, sports shoes, casuals & sandals.
   - **VKC:** VKC Pride and VKC Stile collections, durable daily slippers.

4. **Official Footwear Catalog Section (`#catalog`)**:
   - Master 88-Page VKC Pride 2024 Collection Catalog showcase.
   - 6 product divisions with real articles: VKC Pride Gents, VKC Junior School Shoes, VKC Stile Lifestyle, VKC Lite Soft EVA, iPride Sports, and eezy Office Wear.
   - One-click full PDF download (`VKC-Catalog-2024.pdf`, 9.8 MB) and WhatsApp catalog ordering.

5. **Our Network / Why Choose Us (Section D)**:
   - **Ready Stock:** Massive inventory preventing stockouts; 50,000+ pairs in ready warehouse.
   - **Statewide Reach:** Fast logistics across all 31 Karnataka districts via leading transport agencies.
   - **Genuine Supply:** 100% authentic products direct from manufacturers with GST billing.
   - Interactive district cloud covering all Karnataka districts.

6. **B2B Retailer Registration Form (Section E)**:
   - Professional inquiry form with:
     - Shop Name (`text`, required)
     - Owner Name (`text`, required)
     - Phone / WhatsApp Number (`tel`, 10-digit validation)
     - City / District (Dropdown with all Karnataka districts + Other)
     - GST Number (`text`, optional format-assisted)
     - Brands of Interest (`Walkaroo`, `VKC`, `Both`)
   - Submit Button: *"Request Retailer Account"*.
   - Interactive validation, button loading state, and success confirmation modal with reference ID and WhatsApp quick link.

7. **Download Our App Section (`#app`)**:
   - Official B2B mobile ordering app: **'bit link B.K agencies walkaroo'**.
   - Standard official **"Get it on Google Play"** badge linking to Google Play Store in a new tab (`target="_blank"`).
   - Features: Real-time stock, carton orders, LR shipment tracking, and distributor rates.

8. **Footer (Section F)**:
   - Contact Info: 85/1, MR Ln, near Balaji Complex, Manavarthipet, Manivartapete, Sultanpete, Bengaluru, Karnataka 560053 | +91 7022261123 | +91 9844610555 (WhatsApp) | beekeyagencies@gmail.com
   - Quick navigation links & direct PDF catalog download.
   - Copyright: *© 2026 BEEKEY TRADERS. All rights reserved.*

---

## 💻 How to Run Locally

You can view the website directly in any web browser:

1. **Direct File Open:** Double-click `index.html` in your file explorer.
2. **Local Web Server (Python):**
   ```bash
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your web browser.
