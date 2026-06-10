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
* **Trigger**: Client request (June 10, 2026) to strip out performance/account promotion and pivot to a pure financial education platform.
* **Client Resource Provided**: `sortino-quants-website.html` (raw single-page text content).
* **Reconstruction Scope (Agreed Multi-Page Structure)**:

### 1. Page Modifications:
* **Home Page (`/`)**: Modify text/sections to align with provided HTML (6 educational pillars, Revenue Model transparency table, third-party platform disclosures, FAQs). Add a floating STARTRADER CPA referral link button.
* **Memberships Page (`/memberships`)**: Rebuild pricing structure. Sell single **SQ Membership at £48/month**. Display 3 coaching pathways:
  * **Foundations** (Beginner - 4 sessions, £600)
  * **Progression** (Intermediate - 5 sessions, £750)
  * **Mastery** (Advanced - 3 sessions, £450)
  * Update coaching discount for SQ Members to **30% Off** (instead of 50%).
* **Our Quants Page (`/team`)**: Keep CrescentSoft's original custom layout (portraits + certifications slider) completely unchanged.
* **Contact Page (`/contact`)**: Keep form active, connecting to client's Google Sheet.

### 2. New Out-of-Scope Deliverables:
* **Booking Page (`/booking`)**: Create a new page to embed Zoho/HubSpot Meetings.
* **Course Page (`/education`)**: Create a new page explaining course syllabus and training.

---

## 4. Pending Client Verifications (Do Not Update Code Until Confirmed)
1. **Calendar Booking Link**: Await Zoho/HubSpot calendar URL or HTML embed script.
2. **Course Page Details**: Await custom lesson/syllabus text (or default to educational pillars).
3. **Budget & Timeline**: Await approval on the additional cost proposal for Phase 2.
