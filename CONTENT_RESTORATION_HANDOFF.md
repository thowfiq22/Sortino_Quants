# Sortino Quants Content Restoration and UI Review Handoff

Date: 2026-06-22
Workspace: `F:\Sortino Quants`
Backup commit pushed before this work: `910c8b6` on `main`
Current content/UI changes: **uncommitted and unpushed**

## 1. Client instruction — binding scope

The authoritative client content file is:

`F:\Sortino Quants\source\sortino-quants-share.html`

The client requires:

- Use the exact supplied content and factual details for every corresponding section.
- Do not rewrite, shorten, paraphrase, reinterpret, or invent replacement copy.
- The source HTML is a content source only. Do not copy its single-page styling, navigation, or layout.
- The production website remains multi-page.
- New sections or design improvements are allowed only if they do not contradict or replace client content.
- The separately supplied **Our Quants** content is already correct. Do not change that page.
- Existing page names were accepted: Home, Education, Our Quants, Memberships, Contact.
- The shared CTA should say **Book Discovery Call**, not **Book a Session**.
- A separate **Transparency** page is appropriate for the client’s revenue and third-party platform disclosure content.

## 2. Protected pages

Do not rewrite these pages during the content-restoration pass:

- `src/app/team/page.tsx` — Our Quants page. Separately supplied and approved content.
- `src/app/education/page.tsx` — Existing curriculum page was not part of the latest content rewrite.

Git currently shows no diff in either file.

Visual screenshots also show these pages retain the strongest existing design:

- Our Quants: rich layout, portraits, credential cards, clear section rhythm, better visual storytelling.
- Education: strong pathway/card composition, clear hierarchy, good use of accent color, more premium appearance.

## 3. Changes already made in the interrupted content pass

### Home — `src/app/page.tsx`

Replaced prior rewritten/fabricated copy with client-source content for:

- Financial Markets Education & Research hero
- “Learn to Think Like an Institutional Trader.” heading
- Client description and educational disclaimer
- Focus Markets and Education Tiers details
- Five Educational Pillars
- Education-First / What We Do introduction
- Six What We Do items
- Three How It Works steps
- Seven client FAQs
- Three client testimonials: Daniel M., Sara K., James R.
- Efficient Frontier CTA copy
- Support email updated to `support@sortinoquants.com`

Existing visual additions retained:

- Efficient Frontier chart
- Callback form section

Removed from Home:

- Rewritten three-row revenue summary; complete client revenue content was moved to Transparency.
- Fabricated testimonial names/copy.
- Floating affiliate banner with wording that conflicted with the client’s education-first disclosure language.

### Memberships — `src/app/memberships/page.tsx`

Restored client-source content for:

- SQ Elite Community / SQ Elite Membership tiers
- £90/month pricing and positioning statement
- All three premium channels
- Complete Education & Announcements benefits
- Complete Trade Scenario Analysis framework and asset classes
- Complete SQ Elite Lounge benefits
- Four access routes
- Education-first disclaimer
- Foundations, Progression, and Mastery private training pathways
- Exact session counts, hours, £75/hour prices, total prices, and member prices
- 30% member discount statement
- Complete CPA StarTrader access section and disclosure
- Complete IB access section and disclosure
- Member verification/onboarding link retained as a non-conflicting operational addition

Removed:

- Added standalone £150 “Development Session” cards because they conflicted with the client’s supplied pathway pricing/30% member discount structure.
- Generic affiliate component in favor of the client’s complete CPA/IB content.

Existing operational URLs retained:

- Stripe membership checkout
- Three Stripe pathway checkout links
- StarTrader CPA affiliate URL
- IB transfer URL
- Google member verification form

These URLs still need human live testing.

### Transparency — new `src/app/transparency/page.tsx`

Added a new multi-page route containing the client’s:

- Third-Party Platform Activities disclosure
- Transparency on External Platforms section
- Separation statement for educational services vs platform activity
- Full five-row Revenue Model
- Three transparency pledges

The page title/intro framing around the supplied sections is an implementation addition and should be reviewed for non-conflict.

### Footer — `src/components/Footer.tsx`

Restored/added the client-supplied footer content:

- Exact missing company description:
  “A financial markets research and education platform focused on quantitative analysis, risk-adjusted trading, and professional trader development.”
- Education, SQ Elite, and Company link groups
- CPA Partner Link, IB Partner Link, WhatsApp
- Full educational/financial disclaimer
- Privacy, Terms, Disclaimer, Revenue Transparency links
- Exact company/location/support copyright line

### Header — `src/components/Header.tsx`

- Added Transparency navigation item.
- Changed desktop and mobile CTA from “Book a Session” to “Book Discovery Call”.
- Existing responsive menu behavior was retained.

### Email consistency

Replaced obsolete `sortinoquants@gmail.com` and `compliance@sortinoquants.com` display/contact links with the client footer email `support@sortinoquants.com` in:

- `src/components/ContactForm.tsx`
- `src/components/ComplianceSidebar.tsx`
- `src/app/contact/page.tsx`
- `src/app/booking/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

This is a factual/contact normalization and should still be confirmed by the client.

### Sitemap

- Added `/transparency/` to `public/sitemap.xml`.

## 4. Current modified/untracked files

- `public/sitemap.xml`
- `src/app/booking/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/memberships/page.tsx`
- `src/app/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- `src/components/ComplianceSidebar.tsx`
- `src/components/ContactForm.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/app/transparency/page.tsx` (new/untracked)

## 5. Important incomplete work

The previous run was interrupted before validation. Therefore:

- No final string-for-string source-content comparison has been completed.
- `npm run lint` has not been run after these changes.
- TypeScript validation has not been run after these changes.
- `npm run build` has not been run after these changes.
- Responsive 320px, 375px, 480px, 768px checks have not been completed.
- Payment, affiliate, IB, Google Form, email, and WhatsApp links have not been live-tested.
- Current changes have not been committed or pushed.

Treat the current branch as an implementation draft, not deployment-ready.

## 6. Visual regression assessment from the supplied full-page screenshots

The content-restoration pass preserved copy but did not preserve the site’s previous premium visual quality on the rewritten pages. The user correctly identified that several pages now look like documents rather than designed product/marketing pages.

### Home — major visual regression

Priority: **High**

Observed issues:

- Hero content occupies the top while a large empty vertical area remains below it.
- Supporting cards and content blocks visually collapse into the black background.
- Six What We Do items appear as plain text columns rather than premium cards.
- How It Works appears flat and lacks connecting structure or visual progression.
- Body and metadata text are too small at full-page scale.
- Excess use of thin white/gray horizontal rules creates a report/document appearance.
- Testimonials are dense and lack strong card separation, quote styling, avatars, or visual emphasis.
- CTA buttons are small and weak relative to the section heading.
- Footer is visually heavy, dense, and text-small.
- Section spacing alternates between excessive empty space and overly compressed content.

Required direction:

- Keep every client sentence unchanged.
- Restore card surfaces, restrained gold borders, depth, iconography, and deliberate spacing.
- Use the existing Our Quants/Education visual language as the design benchmark.
- Increase body readability and section hierarchy without shortening content.
- Rebuild testimonial cards and the three-step process visually.
- Reduce unused hero height and align hero columns vertically.

### Education — visually retained / reference page

Priority: **Low**

Observed state:

- Existing pathway architecture, card treatment, accent badges, buttons, and section rhythm remain good.
- Shared header/footer changed, but core page was not rewritten.
- Use this page as one of the design references for other pages.

Potential shared issues:

- New footer is taller and denser than the original footer.
- Header now has an additional Transparency item and may become cramped near desktop/tablet breakpoint widths.

### Our Quants — visually retained / protected reference page

Priority: **Low**

Observed state:

- Core page remains visually strong and was not edited.
- Portrait-led sections, credentials, cards, and partnership area create good hierarchy.
- Use this page as the primary benchmark for premium density and visual storytelling.

Do not alter its approved content while redesigning other pages.

### Memberships — severe visual regression

Priority: **Critical**

Observed issues:

- The page is now extremely dense and text-heavy.
- Premium channel sections no longer read as distinct cards/modules.
- Most content visually sits directly on the page background.
- Typography is too small for the amount of information.
- CTAs look like text links rather than strong conversion actions.
- Channel benefits, access routes, pathways, CPA, and IB sections have weak visual differentiation.
- Information hierarchy is flattened; headings, labels, descriptions, and lists compete at similar visual weight.
- Long rows create scanning fatigue and a policy/document appearance.
- The three training pathways need stronger card containers, pricing blocks, and feature grouping.
- CPA and IB disclosures need distinct, transparent partner cards without becoming promotional.
- The desktop screenshot suggests likely severe mobile stacking/length problems, which remain untested.

Required direction:

- Redesign this page completely while keeping exact copy and all prices/details.
- Bring back premium cards, icons, channel identity, pricing hierarchy, highlighted access-route cards, and clear CTA buttons.
- Use progressive disclosure where safe (accordions/tabs only if all text remains accessible and SEO-visible).
- Separate commercial disclosure text visually from primary education benefits.

### Transparency — functional but document-like

Priority: **High**

Observed issues:

- Large blank hero area with little supporting visual structure.
- Disclosure section reads like a legal document, with weak visual hierarchy.
- Revenue table dominates the page and will probably overflow or become unreadable on mobile.
- Nearly monochrome presentation; gold accent is underused.
- Pledge content is plain text instead of distinct trust cards.
- Borders are bright and utilitarian rather than premium.
- No visual cues connect disclosure, revenue streams, and commitments.

Required direction:

- Preserve exact disclosure/revenue wording.
- Convert desktop table to a polished table and mobile stacked revenue cards.
- Add icons/numbering and differentiated surfaces.
- Use trust/pledge cards and better section backgrounds.
- Reduce hero whitespace and create a clearer transparency narrative.

### Contact — visually retained / generally good

Priority: **Low**

Observed state:

- Core contact layout remains strong: clear two-column composition, strong callback form card, visible channels, good spacing.
- Only contact email content and shared header/footer were changed.
- This page should not receive a broad redesign.

Shared issue:

- New footer is substantially taller and denser than the page’s original visual balance.

### Shared Header

Priority: **Medium**

Issues to verify:

- Transparency adds another item; desktop navigation may crowd before the current `xl` breakpoint.
- Navigation text is small and widely tracked, reducing readability.
- Test 768px–1200px widths and mobile drawer touch targets.
- Keep the accepted page names and “Book Discovery Call” label.

### Shared Footer

Priority: **High**

Observed issues:

- Exact client content is now present, but presentation is too dense.
- Legal disclaimer and copyright text are very small.
- Footer consumes substantial page height.
- Link groups need clearer hierarchy and more consistent spacing.
- CPA/IB/WhatsApp actions currently lack a unified button treatment.
- Full content must remain; redesign through layout, type scale, grouping, and responsive collapse rather than deleting text.

## 7. Recommended next-agent workflow

1. Do not rewrite content. Lock `source/sortino-quants-share.html` as authoritative.
2. Run a section-by-section, string-level comparison between source and current Home, Memberships, Transparency, and Footer.
3. Report any additions separately; confirm they do not contradict client content.
4. Fix compile/lint issues before visual work.
5. Redesign Home, Memberships, Transparency, and Footer using Education/Our Quants/Contact as visual references.
6. Do not modify `src/app/team/page.tsx` content.
7. Do not broadly redesign Contact; preserve its current visual quality.
8. Validate desktop and mobile at 320, 375, 480, 768, 1024, 1280, and 1440 widths.
9. Check body text, legal copy, navigation, and all controls against WCAG contrast and 44px touch targets.
10. Run lint, TypeScript, production build, and exact-content verification.
11. Present screenshots and diff for user approval before committing/pushing this draft.

## 8. Deployment status

Not deployment-ready in its current state because:

- visual regressions remain on key conversion pages;
- post-change build/lint checks are incomplete;
- exact-content verification is incomplete;
- responsive testing is incomplete;
- external payment/form/partner links require live testing;
- UK legal/compliance text still requires qualified human review.
