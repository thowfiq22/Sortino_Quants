import ComplianceSidebar from "@/components/ComplianceSidebar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service | Sortino Quants",
  description: "Terms covering Sortino Quants memberships, educational services, payments, cancellation, and acceptable use.",
  path: "/terms/",
});

export default function Terms() {
  return (
    <div className="min-h-screen w-full bg-background pb-24 pt-16 efficient-frontier-bg md:pb-28 md:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <ComplianceSidebar />

          <article className="space-y-14 lg:col-span-9">
            <header className="border-b border-border-muted pb-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Service terms</p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-primary">Terms of Service</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
                These terms apply to this website, SQ Elite membership, and educational or mentorship services purchased from Sortino Quants. Checkout-specific terms and statutory consumer rights also apply.
              </p>
            </header>

            <section aria-labelledby="services">
              <h2 id="services" className="mb-6 font-display text-2xl font-bold text-primary">1. Educational Services</h2>
              <div className="rounded-sm border border-border-muted bg-surface-card p-6 md:p-8">
                <p className="text-sm leading-relaxed text-text-secondary">
                  Sortino Quants provides educational content, community access, research commentary, and mentorship. Content is general and educational. It is not personalised financial advice, investment management, brokerage, or a promise of trading results.
                </p>
              </div>
            </section>

            <section aria-labelledby="billing">
              <h2 id="billing" className="mb-6 font-display text-2xl font-bold text-primary">2. Pricing, Payment, and Access</h2>
              <div className="space-y-6 rounded-sm border border-border-muted bg-surface-slate p-6 md:p-8">
                <div>
                  <h3 className="mb-2 font-display text-base font-bold text-text-primary">Prices and payment</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Current prices are displayed on the relevant page and confirmed on the Stripe-hosted checkout page. Currency conversion, payment verification, and card processing are handled by the payment provider.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-base font-bold text-text-primary">Membership renewal</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Monthly membership renews at the displayed interval until cancelled. To request cancellation, use any cancellation facility supplied by the payment provider or email support@sortinoquants.com before the next renewal date.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-base font-bold text-text-primary">Access</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Access may require payment verification and completion of onboarding. Account or community access must not be shared, resold, or used to redistribute paid material.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="cancellation">
              <h2 id="cancellation" className="mb-6 font-display text-2xl font-bold text-primary">3. Cancellation and Refunds</h2>
              <div className="rounded-sm border border-primary/30 bg-primary/5 p-6 md:p-8">
                <p className="text-sm leading-relaxed text-text-secondary">
                  Nothing in these terms removes rights that cannot legally be excluded. Cancellation or refund eligibility depends on the product, whether digital access or scheduled services have started with your agreement, and applicable consumer law. Contact <a className="text-primary underline" href="mailto:support@sortinoquants.com">support@sortinoquants.com</a> promptly if you need to cancel or believe a service was not supplied as described.
                </p>
              </div>
            </section>

            <section aria-labelledby="conduct">
              <h2 id="conduct" className="mb-6 font-display text-2xl font-bold text-primary">4. Acceptable Use and Intellectual Property</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Acceptable use</h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-text-secondary">
                    <li>Do not share paid access or private community material.</li>
                    <li>Do not harass participants or misuse contact information.</li>
                    <li>Do not scrape, copy, or republish protected content without permission.</li>
                  </ul>
                </div>
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Ownership</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Course materials, site content, graphics, and original research remain the property of their respective owners. Purchasing access gives you a personal, limited right to use the supplied materials; it does not transfer ownership.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="terms-contact" className="border-t border-border-muted pt-12">
              <h2 id="terms-contact" className="mb-4 font-display text-2xl font-bold text-primary">5. Contact</h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                Questions about these terms can be sent to <a className="text-primary underline" href="mailto:support@sortinoquants.com">support@sortinoquants.com</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

