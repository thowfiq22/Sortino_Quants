import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Education & Coaching Pathways | Sortino Quants",
  description: "Structured one-to-one coaching pathways covering beginner, intermediate, and advanced trading education.",
  path: "/education/",
});

export default function Education() {
  const syllabus = [
    {
      level: "Beginner Pathway",
      title: "Foundations of Financial Markets",
      tagline: "Pathway 01 — 4 Sessions (8 Hours)",
      cost: "£600 (Members: £420)",
      description: "A comprehensive introduction designed to establish disciplined analysis habits, proper platform operation, and structural market terminology.",
      topics: [
        {
          num: "01",
          name: "Evolution of Money",
          details: "Tracing the development of currency, central banking, and the historical mechanics of exchange value.",
        },
        {
          num: "02",
          name: "Risk-Return Relation",
          details: "Understanding statistical expectation, downside variance, and why capital preservation precedes raw return.",
        },
        {
          num: "03",
          name: "Accounting Basics (A = L + E)",
          details: "Deconstructing corporate balance sheets, assets, liabilities, and equity structures for macro context.",
        },
        {
          num: "04",
          name: "How Stock Markets Work",
          details: "Exchange architecture, clearing houses, matching engines, and order listing lifecycles.",
        },
        {
          num: "05",
          name: "Tools & Analysis Basics",
          details: "Working with trading terminals, layout configurations, data feeds, and fundamental charting tools.",
        },
        {
          num: "06",
          name: "\"ABCDE\" Setup",
          details: "Sortino Quants' proprietary five-point checklist for identifying structural setups and invalidations.",
        },
      ],
      badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
      stripeUrl: "https://buy.stripe.com/4gM6oIbY1e7167577h8Vi01",
    },
    {
      level: "Intermediate Pathway",
      title: "Market Microstructure & Dynamics",
      tagline: "Pathway 02 — 5 Sessions (10 Hours)",
      cost: "£750 (Members: £525)",
      description: "Bridging the gap between basic retail charting and professional order routing, liquidity mapping, and volatility profiles.",
      topics: [
        {
          num: "07",
          name: "Order Types & Mechanics",
          details: "Limit orders, market orders, stop limits, iceberg structures, and order book matching plumbing.",
        },
        {
          num: "08",
          name: "Asset Classes & Instruments",
          details: "Deep dive into index futures, commodities, spot currencies, and sovereign debt markets.",
        },
        {
          num: "09",
          name: "Hedging & Arbitrage",
          details: "How institutions offset portfolio delta and exploit cross-exchange basis pricing.",
        },
        {
          num: "10",
          name: "Derivatives (Futures & Options)",
          details: "Leverage dynamics, forward contract pricing, premium decay, and option volatility parameters.",
        },
        {
          num: "11",
          name: "Volume Profile / Market Profile",
          details: "Auction Market Theory, Value Area High/Low, Point of Control (POC), and single print distributions.",
        },
      ],
      badgeColor: "border-primary/30 text-primary bg-primary/5",
      stripeUrl: "https://buy.stripe.com/fZu9AUbY14wr0ML0IT8Vi02",
    },
    {
      level: "Advanced Pathway",
      title: "Institutional Flow & Risk Allocation",
      tagline: "Pathway 03 — 3 Sessions (6 Hours)",
      cost: "£450 (Members: £315)",
      description: "Elite execution modeled after proprietary trading desks, specializing in execution plumbing, absorption, and prop passing.",
      topics: [
        {
          num: "12",
          name: "VWAP & Imbalance Rhythms",
          details: "Standard deviation bands, volume-weighted average price targeting, and tracking structural trend days.",
        },
        {
          num: "13",
          name: "Order Flow Mastery",
          details: "Reading the tape, cumulative volume delta (CVD) divergence, and tracking large block absorption.",
        },
        {
          num: "14",
          name: "Position Sizing & Risk Management",
          details: "Kelly Criterion modeling, Monte Carlo downside metrics, and preparing for institutional prop audits.",
        },
      ],
      badgeColor: "border-rose-500/30 text-rose-400 bg-rose-500/5",
      stripeUrl: "https://buy.stripe.com/00w3cw4vz9QL2UT8bl8Vi03",
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border-muted bg-background">
        <div className="efficient-frontier-curve animate-slow-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary mb-5">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            Curriculum Specification
          </div>
          <h1 className="font-display text-4xl font-extrabold text-text-primary md:text-5xl">
            1-to-1 Structured Mentorship Curriculum
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-text-secondary leading-relaxed">
            Position yourself on the efficient frontier. Explore the 14 core syllabus modules covered inside our private mentorship programs, built for sustainable trader development.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full pt-16 pb-24 md:pt-20 md:pb-28">

        {/* Pathways Stack */}
        <div className="space-y-20">
          {syllabus.map((section) => (
            <div
              key={section.level}
              className="border-b border-border-muted/50 pb-20 last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left side: Pathway description */}
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <span
                    className={`inline-block font-mono text-[10px] border px-3 py-1.5 mb-4 rounded-full uppercase tracking-widest font-bold ${section.badgeColor}`}
                  >
                    {section.level}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                    {section.title}
                  </h2>
                  <p className="font-mono text-xs text-primary mb-6">{section.tagline}</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div className="bg-surface-slate border border-border-muted p-4 rounded-sm mb-8">
                    <span className="font-mono text-xs text-text-secondary uppercase block mb-1">
                      PATHWAY INVESTMENT
                    </span>
                    <span className="font-display text-base font-bold text-primary block">
                      {section.cost}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={section.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center bg-primary text-background px-6 py-3 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/5"
                    >
                      Enroll Now
                    </a>
                    <Link
                      href="/booking/"
                      className="inline-flex justify-center border border-primary/30 text-primary px-6 py-3 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-primary/5"
                    >
                      Book Discovery Call
                    </Link>
                  </div>
                </div>

                {/* Right side: Topic Cards grid */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.topics.map((topic) => (
                    <div
                      key={topic.num}
                      className="bg-surface-card border border-border-muted p-6 rounded-sm hover:border-primary/30 transition-colors duration-300 card-hover-effect group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-display text-2xl font-extrabold text-primary/80 group-hover:text-primary transition-colors">
                          {topic.num}
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                      </div>
                      <h3 className="font-display font-bold text-text-primary text-base mb-2">
                        {topic.name}
                      </h3>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        {topic.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
