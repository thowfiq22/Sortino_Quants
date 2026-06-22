# Project Memory: Sortino Quants Website Development

This file serves as the permanent context record for Sortino Quants website development. It ensures continuity, documents changes in scope, and prevents loss of context during checkpoints.

---

## 1. Project Metadata & Stakeholders
* **Project Name**: Sortino Quants Website
* **Domain**: `sortinoquants.com`
* **Developer**: Thowfiq
* **Client Contacts**:
  * **London Sathish Kumar** (Tech Coordinator / Client Partner)
  * **London Santhosh UK** (Founder / Lead Trading Mentor / Content Owner)

---

## 2. Phase 1: Initial Launch (Completed June 4, 2026)
* **Initial Agreement**: 8k budget for a simple, 3-page website (Home, Memberships, Our Quants).
* **Initial Goal**: Promotional site focusing on broker partnerships, track records, and lead collection.
* **Key Implementations**:
  * **Static Build**: Built using Next.js static HTML export (`output: 'export'`) inside `/out`.
  * **Image Optimization**: All content images converted to WebP (lossless for PNG logos, Quality 90 lossy for JPEG portraits/certificates) reducing weight by >50%.
  * **Lead Capture**: Forms integrated to POST directly to a Google Apps Script Web App saving to a Google Sheet and triggering email alerts to `sortinoquants@gmail.com`. Setup steps documented in `GOOGLE_SHEET_SETUP.md`.
  * **Hosting / 404 Route Fix**: Deployed to LiteSpeed/cPanel. Configured `.htaccess` to handle extensionless route redirects (resolving direct-load 404 errors):
    ```apache
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME}.html -f
    RewriteRule ^(.*)$ $1.html [L]
    ```

---

## 3. Phase 2: Reconstruction (Transition to Education-First)
* **Trigger:** Client request (June 10, 2026) to strip out performance/account promotion and pivot to a pure financial education platform.
* **Client Resource Provided:** `sortino-quants-share.html` (raw single-page text content and embedded Base64 logo).
* **Reconstruction Scope (Confirmed Multi-Page Structure)**:
  * **Home Page (`/`)**: Refactored to focus strictly on institutional trading education. Includes the 6 pillars, "How It Works" timeline, "Testimonials", and "Revenue Model" transparency tables.
  * **Memberships Page (`/memberships`)**: Rebuilt to feature the single **SQ Elite Membership at £90/month**. 1-to-1 mentorship pathways display active member pricing (30% discount): Beginner (£600/£420), Intermediate (£750/£525), Advanced (£450/£315).
  * **Our Quants Page (`/team`)**: Kept unchanged (CrescentSoft's optimized portraits + certificates slider layout preserved).
  * **Education Page (`/education`)**: New page featuring the detailed **Option B 14-topic syllabus** grid across three levels.
  * **Booking Page (`/booking`)**: New page hosting the Zoho Bookings calendar widget (using placeholder initially).
  * **Contact Page (`/contact`)**: Form data capture remains active, POSTing leads to the Google Sheets backend.

---

## 4. Phase 2.1: Stripe Payment Integration (June 22, 2026)
* **Trigger:** Client provided 6 Stripe Checkout payment links for all products.
* **Stripe Payment Links (Client-provided, buy.stripe.com):**
  * SQ Elite Monthly Membership (£90/mo): `14A9AU4vz2oj9jhgHR8Vi00`
  * Beginner Pathway — Foundation (SQ Members): `4gM6oIbY1e7167577h8Vi01`
  * Intermediate Pathway — Progression (SQ Members): `fZu9AUbY14wr0ML0IT8Vi02`
  * Advanced Pathway — Mastery (SQ Members): `00w3cw4vz9QL2UT8bl8Vi03`
  * Private 1-to-1 Session (SQ Members): `4gMdRagehgf9dzxajt8Vi04`
  * Private 1-to-1 Session (Standard): `eVq8wQ7HL7IDgLJ77h8Vi05`
* **Changes Implemented:**
  * **Memberships Page:** "Join SQ Elite" now links to Stripe checkout (new tab). All coaching pathway cards have dual CTAs: "Enroll Now" → Stripe + "Book Discovery Call" → `/booking`. New "Private 1-to-1 Trading Development Session" section added with Member/Standard pricing cards.
  * **Education Page:** Each pathway has dual CTAs: "Enroll Now" → Stripe + "Book Discovery Call" → `/booking`.
  * **Google Form Onboarding:** SQ Member Verification & Onboarding Form embedded on memberships page. URL: `https://docs.google.com/forms/d/e/1FAIpQLSecd2uIut0rERuY8t729Rwk3HXcoA3rFMkumTP-a8cb-8oJ-A/viewform?embedded=true`

---

## 5. Confirmed Status & Next Steps
1. **Syllabus:** Client confirmed **Option B (Detailed Syllabus)** is selected.
2. **Pricing:** SQ Elite Membership price is locked at **£90/month**.
3. **Structure:** Confirmed **multi-page layout** will be preserved.
4. **Logo:** The Base64 logo embedded in the HTML file is the final version; extracted and optimized to WebP.
5. **Print Fix:** Print CSS background issue fixed in `scope_change_specification.html`.
6. **Payments:** All Stripe checkout links integrated. All CTAs open Stripe in new tab.
7. **Onboarding:** Google Form for SQ Member Verification embedded on memberships page.
