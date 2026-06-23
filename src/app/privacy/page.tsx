import ComplianceSidebar from "@/components/ComplianceSidebar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Sortino Quants",
  description: "How Sortino Quants collects, uses, stores, and shares personal data submitted through this website.",
  path: "/privacy/",
});

export default function Privacy() {
  return (
    <div className="min-h-screen w-full bg-background pb-24 pt-16 efficient-frontier-bg md:pb-28 md:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <ComplianceSidebar />

          <article className="space-y-14 lg:col-span-9">
            <header className="border-b border-border-muted pb-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Personal data and privacy</p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-primary">Privacy Policy</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
                This policy explains what information Sortino Quants collects through this website, why it is used, and the choices available to you. It should be read before submitting a callback or onboarding form.
              </p>
            </header>

            <section aria-labelledby="data-collected">
              <h2 id="data-collected" className="mb-6 font-display text-2xl font-bold text-primary">1. Information We Collect</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Contact enquiries</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    When you request a callback, we may collect your name, email address, telephone number, area of interest, message, and confirmation that you accepted the linked notices.
                  </p>
                </div>
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Membership onboarding</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    The embedded Google Form may collect the details requested in that form so we can verify a purchase, activate access, and communicate about onboarding.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="data-use">
              <h2 id="data-use" className="mb-6 font-display text-2xl font-bold text-primary">2. How Information Is Used</h2>
              <div className="rounded-sm border border-border-muted bg-surface-slate p-6 md:p-8">
                <ul className="space-y-3 text-sm leading-relaxed text-text-secondary">
                  <li>To respond to enquiries and arrange requested discovery calls.</li>
                  <li>To provide purchased education, membership access, and customer support.</li>
                  <li>To maintain transaction and communication records where reasonably necessary.</li>
                  <li>To comply with applicable legal obligations and resolve disputes.</li>
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                  Depending on the interaction, processing may be necessary to take steps at your request before a contract, perform a contract, comply with law, or pursue the legitimate interest of responding to a business enquiry. Marketing communications should only be sent where the required permission exists.
                </p>
              </div>
            </section>

            <section aria-labelledby="providers">
              <h2 id="providers" className="mb-6 font-display text-2xl font-bold text-primary">3. Service Providers and Storage</h2>
              <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  Contact submissions may be processed through Google Apps Script, Google Sheets, and email. Membership onboarding uses Google Forms. Payments are handled on Stripe-hosted checkout pages; Sortino Quants does not receive your full card details from this website.
                </p>
                <p>
                  Those providers process information under their own terms and privacy notices and may process data outside the United Kingdom. Information is retained only for as long as reasonably required to respond, provide the service, maintain necessary records, and meet legal obligations.
                </p>
                <p>
                  This site does not currently include a first-party analytics platform. Embedded forms, external fonts, payment pages, social links, and affiliate destinations may set or use cookies when you interact with those third-party services.
                </p>
              </div>
            </section>

            <section aria-labelledby="rights" className="border-t border-border-muted pt-12">
              <h2 id="rights" className="mb-6 font-display text-2xl font-bold text-primary">4. Your Choices and Contact</h2>
              <div className="rounded-sm border border-primary/30 bg-primary/5 p-6 md:p-8">
                <p className="text-sm leading-relaxed text-text-secondary">
                  You may ask for access, correction, deletion, restriction, or a copy of personal information, or object to certain processing where applicable. Contact <a className="text-primary underline" href="mailto:support@sortinoquants.com">support@sortinoquants.com</a>. You may also raise a concern with the <a className="text-primary underline" href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">UK Information Commissioner&apos;s Office</a>.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

