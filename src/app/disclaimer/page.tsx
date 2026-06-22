import ComplianceSidebar from "@/components/ComplianceSidebar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Risk Disclaimer | Sortino Quants",
  description: "Important risk information about trading, educational content, hypothetical examples, and broker affiliate links.",
  path: "/disclaimer/",
});

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full bg-background pb-24 pt-16 efficient-frontier-bg md:pb-28 md:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <ComplianceSidebar />

          <article className="space-y-14 lg:col-span-9">
            <header className="border-b border-border-muted pb-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Important risk information</p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-primary">Risk Disclaimer</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
                Read this information before using educational material, joining a community, purchasing mentorship, or following a link to a third-party broker or payment provider.
              </p>
            </header>

            <section aria-labelledby="education-only">
              <h2 id="education-only" className="mb-6 font-display text-2xl font-bold text-primary">1. Education, Not Financial Advice</h2>
              <div className="flex items-start gap-4 rounded-sm border-l-4 border-primary bg-surface-slate p-6 md:p-8">
                <span className="material-symbols-outlined rounded-sm bg-primary/10 p-2 text-primary" aria-hidden="true">warning</span>
                <p className="text-sm leading-relaxed text-text-primary md:text-base">
                  Sortino Quants provides general educational and informational content. We do not provide personalised investment advice, manage funds, hold client money, execute trades, or guarantee that any approach is suitable for you.
                </p>
              </div>
            </section>

            <section aria-labelledby="trading-risk">
              <h2 id="trading-risk" className="mb-6 font-display text-2xl font-bold text-primary">2. Trading Risk</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Risk of loss</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Trading equities, currencies, commodities, digital assets, futures, options, contracts for difference, and other leveraged products can result in substantial losses, including loss of all capital committed and, for some products, more than the initial amount.
                  </p>
                </div>
                <div className="rounded-sm border border-border-muted bg-surface-card p-6">
                  <h3 className="mb-3 font-display text-base font-bold text-text-primary">Independent decisions</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    You are responsible for your own decisions, risk limits, tax position, broker selection, and compliance with local rules. Consider obtaining advice from an appropriately authorised professional where needed.
                  </p>
                </div>
              </div>
            </section>

            <section id="risk-framework" className="scroll-mt-32" aria-labelledby="examples">
              <h2 id="examples" className="mb-6 font-display text-2xl font-bold text-primary">3. Examples and Performance</h2>
              <div className="space-y-4 rounded-sm border border-border-muted bg-surface-slate p-6 text-sm leading-relaxed text-text-secondary md:p-8">
                <p>
                  Charts, scenarios, model portfolios, statistics, backtests, and risk-management examples are provided to explain concepts. They may be hypothetical, simplified, delayed, or based on historical information.
                </p>
                <p>
                  Past performance and simulated results are not reliable indicators of future performance. No educational example is a promise or forecast of profit, loss limitation, funded-account success, or any other outcome.
                </p>
              </div>
            </section>

            <section aria-labelledby="affiliate-disclosure">
              <h2 id="affiliate-disclosure" className="mb-6 font-display text-2xl font-bold text-primary">4. Broker Affiliate Disclosure</h2>
              <div className="rounded-sm border border-chart-blue/30 bg-chart-blue/5 p-6 md:p-8">
                <p className="text-sm leading-relaxed text-text-secondary">
                  Sortino Quants may receive compensation when a user follows an affiliate link and completes qualifying activity with a broker. This creates a commercial interest that should be considered when evaluating the link. Review the broker&apos;s own authorisation status, terms, fees, execution arrangements, eligibility requirements, and risk disclosures independently.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
