# Sortino Quants Website

Static Next.js website for Sortino Quants education, membership, booking, onboarding, and legal-information pages.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form configuration

The callback form requires a deployed Google Apps Script endpoint. Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec
```

The form intentionally shows an error and direct email/WhatsApp fallback when this value is absent or the endpoint does not confirm success. Follow [GOOGLE_SHEET_SETUP.md](./GOOGLE_SHEET_SETUP.md), then test a real submission before deployment.

## Production build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

`npm run build` creates a static export in `out/`. `npm start` serves that generated export locally. Deploy the contents of `out/` to the static host; do not configure the host to run `next start`.

## Pre-deployment checks

- Configure and test `NEXT_PUBLIC_GOOGLE_SHEETS_URL`.
- Confirm every Stripe checkout price and product description.
- Replace the booking-coming-soon panel when a working calendar URL is available.
- Confirm the Google onboarding form permissions and notification workflow.
- Review legal and privacy text with an appropriately qualified UK adviser before launch.
- Verify broker affiliate wording and destination URLs with the partner.
