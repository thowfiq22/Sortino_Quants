import type { ReactNode } from "react";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SQ Elite Membership & Private Training",
  description: "SQ Elite premium channels, access options, private mentorship pathways, and disclosed CPA and IB partner access.",
  path: "/memberships/",
});

/* ── Data ── */

const channels = [
  {
    icon: "school",
    title: "SQ Elite Education & Announcements",
    step: "Step 1 — Learn · Admins Only",
    label: "Admins Only",
    intro: "Curated content from the Sortino Quants team",
    benefits: ["Trading Psychology & Discipline", "Risk Management Principles & Frameworks", "Market Structure Education", "Macro & Economic Insights", "Weekly Market Outlooks", "Live Webinar Sessions", "Chart Breakdowns & Educational Case Studies", "Programme Announcements & Updates"],
    subheading: "What you'll learn inside SQ Elite",
    outcomes: ["How institutional markets behave", "How to read liquidity and order flow", "How to understand market structure in real time", "How to build a professional trading mindset"],
  },
  {
    icon: "analytics",
    title: "SQ Elite Trade Scenario Analysis",
    step: "Step 2 — Follow Opportunities · Admin / Analysts Only",
    label: "Admin / Analysts Only",
    intro: "Research-grade scenario analysis — not trade copying",
    description: "We analyse markets using a multi-dimensional framework so you understand why the market is moving, not just where. All insights are derived using: Price · Volume · Time · Sentiment + Geopolitical + Macroeconomic",
    benefits: ["VWAP + Standard Deviation Band Analysis", "Market Sentiment & Volatility Regimes", "Liquidity & Market Microstructure", "Order Flow & CVD Insights", "Buyer/Seller Interaction & Absorption", "Intraday Structure: Trend, Balance & Liquidation Days", "Rhythm Analysis: Imbalance vs Balance Behaviour", "Geopolitical & Macro Context Integration"],
    subheading: "Asset Classes",
    outcomes: ["Index Futures / ES Mini S&P 500", "Commodity / GC Gold Futures", "Energy / CL Oil Futures", "Forex Majors / EUR, USD, GBP, JPY", "Forex / CAD, Dollar Index"],
  },
  {
    icon: "forum",
    title: "SQ Elite Lounge",
    step: "Step 3 — Engage · Members Discussions & Chats",
    label: "Members Discussions & Chats",
    intro: "Open to all SQ Elite members",
    description: "A professional community space for members to grow together, ask questions, share insights, and connect with serious traders who share the same commitment to learning.",
    benefits: ["Real-Time Market Discussions", "Direct Q&A with Mentors & Analysts", "Share Learning Insights & Trade Reviews", "Connect with Fellow Serious Traders", "Community Accountability & Peer Support", "30% Off 1-to-1 Mentorship & Coaching Sessions"],
  },
];

const accessOptions = [
  { icon: "credit_card", title: "Direct Subscription", body: "Subscribe directly via the website on a monthly rolling basis. Cancel anytime, no long-term commitment required.", value: "£90 / month", cta: "Join Now", href: "https://buy.stripe.com/14A9AU4vz2oj9jhgHR8Vi00" },
  { icon: "handshake", title: "CPA Affiliate Partner Broker", body: "Open an account via our disclosed CPA partner broker link and complete verification through our Google Form to unlock full SQ Elite access.", value: "3 Months Free SQ Elite Access", cta: "Open CPA Account", href: "https://go.startrader.com/visit/?bta=38379&brand=startrader" },
  { icon: "person", title: "1-to-1 Mentorship Enrolment", body: "Enrol in any level of our Structured Training Programme — Beginner, Intermediate, or Advanced — and receive full SQ Elite Membership included.", value: "3 Months Free SQ Elite Access", cta: "View Programmes", href: "#training" },
  { icon: "swap_horiz", title: "IB Partner Broker Transfer", body: "Transfer your trading account under our Introducing Broker partner account and complete verification through our Google Form to activate access.", value: "1 Month Free SQ Elite Access", cta: "Transfer via IB", href: "https://strex.live/la-com/NIDz7Po8" },
];

const pathways = [
  {
    level: "Beginner Pathway", title: "Foundations", duration: "4 Sessions · 8 Hours total", rate: "£75/hour", price: "£600", member: "£420", total: "Total investment · 4 × 2hr sessions", href: "https://buy.stripe.com/4gM6oIbY1e7167577h8Vi01",
    badge: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    benefits: ["In-depth mentorship covering the complete beginner curriculum", "Q&A and discussion integrated into every session", "Full market structure, risk management & charting foundations", "Broker & platform setup guidance", "Full SQ Elite Membership access for 3 months included"],
  },
  {
    level: "Intermediate Pathway", title: "Progression", duration: "5 Sessions · 10 Hours total", rate: "£75/hour", price: "£750", member: "£525", total: "Total investment · 5 × 2hr sessions", href: "https://buy.stripe.com/fZu9AUbY14wr0ML0IT8Vi02",
    badge: "border-primary/30 text-primary bg-primary/5",
    benefits: ["In-depth mentorship covering the complete intermediate curriculum", "Q&A and structured discussion each session", "Advanced volatility profiles & auction market theory", "Risk allocation models & trading psychology audit", "Full SQ Elite Membership access for 3 months included"],
  },
  {
    level: "Advanced Pathway", title: "Mastery", duration: "3 Sessions · 6 Hours total", rate: "£75/hour", price: "£450", member: "£315", total: "Total investment · 3 × 2hr sessions", href: "https://buy.stripe.com/00w3cw4vz9QL2UT8bl8Vi03",
    badge: "border-rose-500/30 text-rose-400 bg-rose-500/5",
    benefits: ["In-depth mentorship covering the complete advanced curriculum", "Q&A and deep-dive discussions each session", "Microstructure, order flow & institutional liquidity", "Performance analysis & independent thinking development", "Full SQ Elite Membership access for 3 months included"],
  },
];

const partnerBenefits = ["Full access to all 3 SQ Elite premium channels", "Institutional trade scenario analysis on ES, Gold, Oil & Forex", "Weekly live mentorship & Q&A sessions", "Market microstructure & order flow education", "SQ Elite community lounge access", "30% discount on any 1-to-1 mentorship session"];

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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-text-secondary" key={item}>
          <span className="material-symbols-outlined text-primary text-sm mt-0.5 flex-shrink-0">check_circle</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Page ── */

export default function MembershipsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border-muted bg-background efficient-frontier-bg">
        <div className="efficient-frontier-curve animate-slow-pulse" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">Membership</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary md:text-5xl">SQ Elite Membership</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-text-secondary">
            Everything you need to develop institutional-grade thinking as a trader. Access premium research, live sessions, structured education, and a professional community — all under one elite membership.
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
            <div className="bg-surface-card border border-border-muted rounded-sm p-6 text-left">
              <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Sortino Quants Community</p>
              <p className="mt-3 text-2xl font-bold text-text-primary">Free Access</p>
              <p className="mt-2 text-sm text-text-secondary">Open community access</p>
            </div>
            <div className="bg-surface-card border-2 border-primary rounded-sm p-6 gold-rim gold-glow text-left">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">SQ Elite Membership</p>
              <p className="mt-3 font-mono text-4xl font-extrabold text-primary">£90<span className="text-base font-normal text-text-secondary">/month</span></p>
              <p className="mt-2 text-sm text-text-secondary">Premium · All 3 channels</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm italic leading-7 text-text-secondary">
            Not Signals. Not Hype. Not Shortcuts. Just Institutional-Grade Education, Transparent Research, and Structured Trader Development.
          </p>
          <p className="mt-2 text-sm font-bold text-primary">Sortino Quants Ltd – Position Yourself on the Efficient Frontier.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="btn-primary" href="https://buy.stripe.com/14A9AU4vz2oj9jhgHR8Vi00" rel="noopener noreferrer" target="_blank">Join SQ Elite - £90/mo</a>
            <Link className="btn-secondary" href="/booking/">Book a Discovery Call</Link>
          </div>
        </div>
      </section>

      {/* ── 3 Premium Channels ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="Premium Membership">SQ Elite — 3 Premium Channels</Heading>
          <div className="space-y-6">
            {channels.map((channel) => (
              <article className="bg-surface-card border border-border-muted rounded-sm overflow-hidden card-hover-effect" key={channel.title}>
                {/* Terminal header bar */}
                <div className="flex items-center gap-3 bg-surface-slate px-6 py-3 border-b border-border-muted">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">{channel.icon}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">{channel.step}</p>
                  </div>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-border-muted" />
                    <div className="w-2 h-2 rounded-full bg-border-muted" />
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-text-primary">{channel.title}</h3>
                      <span className="mt-3 inline-block font-mono text-xs font-bold bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-sm uppercase tracking-wider">{channel.label}</span>
                      <p className="mt-4 text-sm leading-7 text-text-secondary">{channel.intro}</p>
                      {channel.description ? <p className="mt-4 text-sm leading-7 text-text-secondary">{channel.description}</p> : null}
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-text-primary">Benefits</h4>
                        <CheckList items={channel.benefits} />
                      </div>
                      {channel.outcomes ? (
                        <div>
                          <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-text-primary">{channel.subheading}</h4>
                          <CheckList items={channel.outcomes} />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access Routes ── */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading eyebrow="4 Ways to Get Access">Choose Your Access Route</Heading>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {accessOptions.map((item, index) => (
              <article className="bg-surface-card border border-border-muted rounded-sm p-6 flex flex-col card-hover-effect" key={item.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">{item.body}</p>
                <div className="mt-5 bg-surface-slate border border-border-muted rounded-sm p-3">
                  <p className="text-sm font-bold text-primary text-center">{item.value}</p>
                </div>
                <a
                  className="btn-secondary mt-5 w-full text-center"
                  href={item.href}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-6 bg-surface-card border border-border-muted rounded-sm p-6">
            <p className="text-xs leading-6 text-text-secondary">
              <strong className="text-text-primary">Education-First Community.</strong> All content is for educational purposes only and should not be considered financial advice or investment recommendations. Trading involves significant risk. Members are solely responsible for their own trading decisions. SQ Elite does not provide signals, managed accounts, or guaranteed outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Private Training Pathways ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted" id="training">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="1-to-1 Educational Mentorship"
            intro="Personalised, in-depth mentorship tailored to your current level. Every session is structured around your learning goals — not product promotion. Choose the pathway that fits your stage."
          >
            Private Training Pathways
          </Heading>
          <div className="grid gap-6 lg:grid-cols-3">
            {pathways.map((path) => (
              <article className="bg-surface-card border border-border-muted rounded-sm overflow-hidden flex flex-col card-hover-effect" key={path.title}>
                {/* Terminal header */}
                <div className="terminal-header px-6 py-4">
                  <span className={`inline-block font-mono text-[10px] border px-3 py-1 rounded-full uppercase tracking-widest font-bold ${path.badge}`}>
                    {path.level}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-text-primary">{path.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{path.duration}</p>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  {/* Pricing block */}
                  <div className="bg-surface-slate border border-border-muted rounded-sm p-5 mb-6">
                    <p className="font-mono text-xs text-text-secondary uppercase tracking-wider">{path.rate}</p>
                    <div className="flex items-baseline gap-3 mt-2">
                      <p className="font-mono text-2xl font-bold text-text-secondary line-through">{path.price}</p>
                      <p className="font-mono text-3xl font-extrabold text-primary">{path.member}</p>
                    </div>
                    <p className="mt-2 text-sm font-bold text-primary">SQ Elite Member: {path.member} · 30% off</p>
                    <p className="mt-1 font-mono text-xs text-text-secondary">{path.total}</p>
                  </div>
                  <div className="flex-1">
                    <CheckList items={path.benefits} />
                  </div>
                  <a className="btn-primary mt-7 w-full text-center" href={path.href} rel="noopener noreferrer" target="_blank">
                    Enrol Now
                  </a>
                  <Link className="btn-secondary mt-3 w-full text-center" href="/booking/">
                    Book Discovery Call
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 bg-surface-card border border-border-muted rounded-sm p-7 text-center">
            <p className="text-sm leading-7 text-text-secondary">
              All pathways include a free Discovery Call before booking — so we can understand your goals and confirm the right pathway. SQ Elite Members receive 30% off all 1-to-1 session rates.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-5">
              <Link className="font-bold text-primary underline underline-offset-4 hover:text-primary-highlight transition-colors" href="/booking/">
                Book your free Discovery Call →
              </Link>
              <Link className="font-bold text-primary underline underline-offset-4 hover:text-primary-highlight transition-colors" href="/education/">
                View Course Content →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CPA & IB Partner Access ── */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            eyebrow="Transparent Partner Access"
            intro="When you open a trading account through our disclosed partner links, you receive genuine SQ Elite educational benefits — fully transparent, no hidden conditions. All relationships are openly disclosed as part of our revenue model."
          >
            CPA &amp; Introducing Broker Access
          </Heading>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* CPA Card */}
            <article className="bg-surface-card border border-border-muted rounded-sm overflow-hidden card-hover-effect">
              <div className="flex items-center gap-3 bg-surface-slate px-6 py-3 border-b border-border-muted">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-blue/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-chart-blue text-base">handshake</span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">CPA Affiliate Clients</p>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-text-primary">Accounts opened via our StarTrader CPA partner link</h3>
                <div className="mt-4 bg-surface-slate border border-primary/20 rounded-sm p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">card_giftcard</span>
                  <p className="text-xl font-bold text-text-primary">3 Months Free SQ Elite Membership</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Open an account through our CPA (Cost Per Acquisition) affiliate link with StarTrader and complete verification via our Google Form to receive complimentary SQ Elite access for 3 months. That includes:
                </p>
                <div className="mt-6">
                  <CheckList items={partnerBenefits} />
                </div>
                <a className="btn-primary mt-7 w-full text-center" href="https://go.startrader.com/visit/?bta=38379&brand=startrader" rel="noopener noreferrer sponsored" target="_blank">
                  Open CPA Account with StarTrader →
                </a>
                <p className="mt-5 text-xs leading-6 text-text-secondary/70">
                  <strong className="text-text-secondary">Disclosure:</strong> Sortino Quants Ltd receives a commission from StarTrader when an account is opened via this link. This is fully disclosed. Our educational content is independent of this commercial arrangement.
                </p>
              </div>
            </article>
            {/* IB Card */}
            <article className="bg-surface-card border border-border-muted rounded-sm overflow-hidden card-hover-effect">
              <div className="flex items-center gap-3 bg-surface-slate px-6 py-3 border-b border-border-muted">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-blue/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-chart-blue text-base">swap_horiz</span>
                </div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Introducing Broker (IB) Clients</p>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-text-primary">Accounts transferred via our IB partner arrangement</h3>
                <div className="mt-4 bg-surface-slate border border-primary/20 rounded-sm p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">card_giftcard</span>
                  <p className="text-xl font-bold text-text-primary">1 Month Free SQ Elite Membership</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Transfer your trading account under our Introducing Broker partner account and complete verification via our Google Form to receive 1 month complimentary SQ Elite access. Our IB clients benefit from structured educational support — not pressure to trade more:
                </p>
                <div className="mt-6">
                  <CheckList items={partnerBenefits} />
                </div>
                <a className="btn-primary mt-7 w-full text-center" href="https://strex.live/la-com/NIDz7Po8" rel="noopener noreferrer sponsored" target="_blank">
                  Transfer Account via IB Link →
                </a>
                <p className="mt-5 text-xs leading-6 text-text-secondary/70">
                  <strong className="text-text-secondary">Disclosure:</strong> Sortino Quants Ltd may receive rebates or commissions via this IB arrangement. We do not encourage unnecessary trading, volume chasing, or overleveraging. Education and client welfare always come first.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Member Verification ── */}
      <section className="py-20 bg-surface-slate efficient-frontier-bg">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Heading eyebrow="Member Verification">SQ Member Verification &amp; Onboarding</Heading>
          <p className="mx-auto max-w-2xl text-center leading-7 text-text-secondary mb-10">
            Already subscribed or enrolled? Complete the verification form below to activate your SQ Elite access and confirm your onboarding details.
          </p>
          <div className="rounded-sm overflow-hidden border border-border-muted" style={{ backgroundColor: '#121315' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSecd2uIut0rERuY8t729Rwk3HXcoA3rFMkumTP-a8cb-8oJ-A/viewform?embedded=true"
              width="100%"
              height="1200"
              className="w-full border-0"
              style={{ filter: 'invert(0.88) hue-rotate(180deg)', colorScheme: 'light' }}
              title="SQ Member Verification & Onboarding Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-5 text-center text-sm text-text-secondary">
            Having trouble viewing the form?{" "}
            <a
              className="font-bold text-primary underline underline-offset-4 hover:text-primary-highlight transition-colors"
              href="https://docs.google.com/forms/d/e/1FAIpQLSecd2uIut0rERuY8t729Rwk3HXcoA3rFMkumTP-a8cb-8oJ-A/viewform"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in a new tab →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
