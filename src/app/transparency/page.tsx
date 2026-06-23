import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Revenue Model & Platform Transparency",
  description: "Sortino Quants revenue model, commercial relationships, and third-party platform activity disclosures.",
  path: "/transparency/",
});

/* ── Data ── */

const revenueRows = [
  { icon: "school", stream: "Educational Training Revenue", detail: "Courses & Programs", how: "Revenue from structured education and training programs for traders at all levels", commitment: "Structured learning path. Practical, not just theory. Education is a process." },
  { icon: "workspace_premium", stream: "SQ Elite Membership Revenue", detail: "£90/month", how: "Premium access to all 3 SQ Elite channels, research, live sessions and community", commitment: "Focus on education. Deliver ongoing real value. No sales pressure." },
  { icon: "person", stream: "1-to-1 Personal Training Revenue", detail: "£75/hour", how: "Revenue from personalised educational sessions. SQ Elite members receive 30% off.", commitment: "Understand client level first. Practical and structured sessions. No misleading approach." },
  { icon: "handshake", stream: "Affiliate / CPA Commission Revenue", detail: "Fully Disclosed — StarTrader", how: "Commission earned when clients open accounts via our StarTrader CPA partner link", commitment: "Disclose all affiliations. Education before action. No promotion as priority." },
  { icon: "swap_horiz", stream: "Introducing Broker (IB) Revenue", detail: "Fully Disclosed", how: "Rebates or commissions based on trading activity through our IB partner structure", commitment: "No churn or volume pressure. Risk education before action. Review partner structure regularly." },
];

const pledges = [
  { icon: "visibility", title: "We will never mislead or hide revenue relationships.", body: "Every commercial arrangement is disclosed clearly and in advance." },
  { icon: "trending_up", title: "We will never encourage unnecessary trading.", body: "Our content is built to educate, not to generate trading activity." },
  { icon: "favorite", title: "We will never sacrifice trust for short-term income.", body: "Education, client welfare and long-term development always come first." },
];

/* ── Helpers ── */

function Heading({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-text-primary md:text-4xl">{children}</h2>
      {intro ? <p className="mt-5 text-base leading-8 text-text-secondary">{intro}</p> : null}
    </div>
  );
}

/* ── Page ── */

export default function TransparencyPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border-muted bg-background efficient-frontier-bg">
        <div className="efficient-frontier-curve animate-slow-pulse" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="material-symbols-outlined text-sm">verified</span>
            Transparency
          </div>
          <h1 className="font-display text-4xl font-extrabold text-text-primary md:text-5xl">
            Revenue &amp; Platform Disclosures
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-text-secondary">
            A clear record of how Sortino Quants Ltd earns revenue and how any external platform activity is kept separate from our financial markets education services.
          </p>
        </div>
      </section>

      {/* ── Third-Party Platform Disclosure ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Heading eyebrow="Third-Party Platform Activities">Transparency on External Platforms</Heading>
          <article className="bg-surface-card border border-border-muted rounded-sm overflow-hidden">
            <div className="flex items-center gap-3 bg-surface-slate px-6 py-3 border-b border-border-muted">
              <span className="material-symbols-outlined text-primary text-lg">info</span>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">Platform Disclosure</p>
            </div>
            <div className="p-7 md:p-10">
              <h3 className="font-display text-2xl font-bold text-text-primary">Third-Party Platform Disclosure</h3>
              <p className="mt-5 text-base leading-8 text-text-secondary">
                Sortino Quants Ltd team members may participate in third-party broker ecosystems, educational trading communities, or platform-based programmes. Any such activity is conducted through the respective platform&apos;s infrastructure and terms of service.
              </p>
              <p className="mt-4 text-base leading-8 text-text-secondary">
                Where applicable, compensation may be received under those platform arrangements. Details of such arrangements will be disclosed where relevant to our community and clients.
              </p>
              <div className="mt-7 border-l-4 border-primary bg-primary/5 rounded-r-sm p-6">
                <p className="font-bold leading-8 text-text-primary">
                  Sortino Quants&apos; educational services remain entirely separate from any third-party platform activity. We do not present any platform-based activity as a core revenue stream or business offering. Our primary business is financial markets education.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Revenue Model ── */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="Full Transparency"
            intro="We believe trust begins with clarity. Here is exactly how Sortino Quants Ltd earns revenue — openly, with no hidden relationships."
          >
            Our Revenue Model
          </Heading>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-sm border border-border-muted">
            <table className="w-full border-collapse text-left">
              <thead className="bg-surface-card">
                <tr>
                  <th className="p-5 font-mono text-xs uppercase tracking-wider text-primary">Revenue Stream</th>
                  <th className="p-5 font-mono text-xs uppercase tracking-wider text-primary">How It Works</th>
                  <th className="p-5 font-mono text-xs uppercase tracking-wider text-primary">Our Commitment</th>
                </tr>
              </thead>
              <tbody>
                {revenueRows.map((row) => (
                  <tr className="border-t border-border-muted align-top hover:bg-surface-card/50 transition-colors" key={row.stream}>
                    <th className="p-5 text-sm font-bold text-text-primary">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">{row.icon}</span>
                        <div>
                          {row.stream}
                          <span className="mt-2 block text-xs font-normal text-primary">{row.detail}</span>
                        </div>
                      </div>
                    </th>
                    <td className="p-5 text-sm leading-7 text-text-secondary">{row.how}</td>
                    <td className="p-5 text-sm leading-7 text-text-secondary">{row.commitment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {revenueRows.map((row) => (
              <article className="bg-surface-card border border-border-muted rounded-sm p-5" key={row.stream}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">{row.icon}</span>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-text-primary">{row.stream}</p>
                    <p className="text-xs text-primary">{row.detail}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-1">How It Works</p>
                    <p className="text-sm leading-7 text-text-secondary">{row.how}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-1">Our Commitment</p>
                    <p className="text-sm leading-7 text-text-secondary">{row.commitment}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pledge cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pledges.map((pledge) => (
              <article className="bg-surface-card border border-border-muted rounded-sm p-7 border-t-2 border-t-primary card-hover-effect" key={pledge.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-xl">{pledge.icon}</span>
                </div>
                <h3 className="font-display text-base font-bold leading-6 text-text-primary">{pledge.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{pledge.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
