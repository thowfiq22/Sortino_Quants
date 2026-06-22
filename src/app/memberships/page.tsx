import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata = createPageMetadata({
  title: "SQ Elite Membership & Pricing | Sortino Quants",
  description: "Explore SQ Elite membership, private mentorship, educational channels, pricing, and onboarding options.",
  path: "/memberships/",
});

export default function Memberships() {
  const channels = [
    {
      name: "SQ Elite Education & Announcements",
      role: "Admins Only",
      step: "Step 1 — Learn",
      desc: "Curated content covering trading psychology, risk management principles, market structure education, macroeconomic insights, and weekly outlooks.",
      icon: "menu_book",
    },
    {
      name: "SQ Elite Trade Scenario Analysis",
      role: "Admin & Analysts Only",
      step: "Step 2 — Follow Opportunities",
      desc: "Research-grade market scenario analysis focusing on volume profile, auction theory, VWAP deviations, and order flow metrics (no trade signals or hype).",
      icon: "query_stats",
    },
    {
      name: "SQ Elite Lounge",
      role: "Open to Members",
      step: "Step 3 — Engage",
      desc: "A professional space for real-time market discussions, peer accountability, trade scenario reviews, and direct communication with mentors.",
      icon: "forum",
    },
  ];

  const accessOptions = [
    {
      title: "① Direct Subscription",
      detail: "Subscribe directly on a monthly rolling basis. Cancel anytime, no long-term contracts.",
      price: "£90 / month",
      linkText: "Subscribe Now",
      linkHref: "https://buy.stripe.com/14A9AU4vz2oj9jhgHR8Vi00",
      highlight: true,
    },
    {
      title: "② CPA Partner Broker",
      detail: "Open an account via our verified CPA link and complete our Google Form verification.",
      price: "🎁 3 Months Free Access",
      linkText: "Open CPA Account",
      linkHref: "https://go.startrader.com/visit/?bta=38379&brand=startrader",
      highlight: true,
    },
    {
      title: "③ 1-to-1 Mentorship",
      detail: "Enroll in any level of our private coaching pathways and receive complimentary access.",
      price: "🎁 3 Months Free Access",
      linkText: "View Pathways",
      linkHref: "#sessions",
      highlight: true,
    },
    {
      title: "④ IB Partner Broker",
      detail: "Transfer your account under our Introduce Broker partner account and verify your details.",
      price: "🎁 1 Month Free Access",
      linkText: "Transfer Account",
      linkHref: "https://strex.live/la-com/NIDz7Po8",
      highlight: true,
    },
  ];

  const coachingPathways = [
    {
      badge: "Beginner Pathway",
      name: "Foundations",
      duration: "4 Sessions (8 Hours)",
      rate: "£75 / hour",
      cost: "£600",
      memberCost: "£420",
      stripeUrl: "https://buy.stripe.com/4gM6oIbY1e7167577h8Vi01",
      desc: "Rigorous foundational instruction covering market physics, charting, broker setup, and core risk rules.",
      features: [
        "Foundational Market Physics",
        "Broker & Platform Setups",
        "Core Risk Management Rules",
        "3 Months Free SQ Elite Access",
      ],
    },
    {
      badge: "Intermediate Pathway",
      name: "Progression",
      duration: "5 Sessions (10 Hours)",
      rate: "£75 / hour",
      cost: "£750",
      memberCost: "£525",
      stripeUrl: "https://buy.stripe.com/fZu9AUbY14wr0ML0IT8Vi02",
      desc: "Bridge the gap using professional risk allocation models, price profiles, and trading checklists.",
      features: [
        "Advanced Volatility Profiles",
        "Auction Market Theory Basics",
        "Trading Psychology Audits",
        "3 Months Free SQ Elite Access",
      ],
    },
    {
      badge: "Advanced Pathway",
      name: "Mastery",
      duration: "3 Sessions (6 Hours)",
      rate: "£75 / hour",
      cost: "£450",
      memberCost: "£315",
      stripeUrl: "https://buy.stripe.com/00w3cw4vz9QL2UT8bl8Vi03",
      desc: "Elite execution modeled after proprietary trading desks, focusing on microstructure and tape reading.",
      features: [
        "Order Flow & Tape Reading",
        "Institutional Liquidity Clusters",
        "Prop Desk Challenge Preparation",
        "3 Months Free SQ Elite Access",
      ],
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-16 pb-24 md:pt-24 md:pb-28 relative overflow-hidden">
      {/* Background curve */}
      <div className="efficient-frontier-curve animate-slow-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-4">
            Tiered Intelligence
          </span>
          <h1 className="font-display text-4xl font-extrabold text-text-primary mb-6">
            SQ Elite Membership
          </h1>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Everything you need to develop institutional-grade thinking as a trader. Access premium research, live sessions, structured education, and a professional community under one elite membership.
          </p>
        </div>

        {/* Pricing Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-4 bg-surface-card border border-border-muted p-8 rounded-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider block mb-2">
                Unified Premium Tier
              </span>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                SQ Elite Access
              </h2>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-mono text-5xl font-bold text-primary">£90</span>
                <span className="font-sans text-xs text-text-secondary">/month</span>
              </div>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 border-l-2 border-primary/20 pl-4 italic">
                Not Signals. Not Hype. Not Shortcuts. Just Institutional-Grade Education, Transparent Research, and Structured Trader Development.
              </p>
            </div>
            <a
              href="https://buy.stripe.com/14A9AU4vz2oj9jhgHR8Vi00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-primary text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95 hover:brightness-110 shadow-lg shadow-primary/10"
            >
              Subscribe Now — £90/mo
            </a>
            <Link
              href="/booking"
              className="w-full text-center border border-primary/30 text-primary py-3 font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all hover:bg-primary/5 mt-3 block"
            >
              Book a Discovery Call
            </Link>
          </div>

          <div className="lg:col-span-8 bg-surface-slate border border-border-muted p-8 rounded-sm flex flex-col justify-between">
            <span className="font-mono text-[9px] text-primary uppercase tracking-widest block mb-6">
              Included Premium Channels
            </span>
            <div className="flex flex-col gap-6">
              {channels.map((ch) => (
                <div
                  key={ch.name}
                  className="flex items-start gap-4 p-4 bg-surface-card border border-border-muted/50 rounded-sm hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-background border border-border-muted rounded-sm text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">{ch.icon}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-text-primary text-sm">
                        {ch.name}
                      </h3>
                      <span className="font-mono text-[8px] bg-background border border-border-muted px-2 py-0.5 rounded-sm text-text-secondary uppercase tracking-widest">
                        {ch.role}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-primary block mb-2">{ch.step}</span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ways to Get Access Grid */}
        <div className="mb-24">
          <h3 className="font-mono text-xs text-text-primary uppercase tracking-widest mb-8 pb-3 border-b border-border-muted/50">
            🔑 Ways to Get Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-surface-card border border-border-muted p-6 rounded-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300 card-hover-effect"
              >
                <div>
                  <h4 className="font-display font-bold text-text-primary text-sm mb-3">
                    {opt.title}
                  </h4>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {opt.detail}
                  </p>
                </div>
                <div>
                  <span className="font-display text-sm font-bold text-primary block mb-4">
                    {opt.price}
                  </span>
                  {opt.highlight ? (
                    <a
                      href={opt.linkHref}
                      target={opt.linkHref.startsWith("http") ? "_blank" : "_self"}
                      rel={opt.linkHref.startsWith("http") ? "noopener noreferrer" : ""}
                      className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-2.5 font-bold font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all"
                    >
                      {opt.linkText}
                    </a>
                  ) : (
                    <Link
                      href={opt.linkHref}
                      className="w-full block text-center bg-primary text-background py-2.5 font-bold font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all hover:brightness-110"
                    >
                      {opt.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 1-to-1 Mentorship Section */}
        <div id="sessions" className="border-t border-border-muted/30 pt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              Private Accelerator
            </span>
            <h2 className="font-display text-3xl font-extrabold text-text-primary mb-6">
              1-to-1 Private Mentorship Sessions
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Accelerate your trading journey with direct, single-trader mentorship sessions. The pathway prices below include a 30% reduction for active SQ Elite members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingPathways.map((path) => (
              <div
                key={path.name}
                className="bg-surface-card border border-border-muted p-8 rounded-sm flex flex-col justify-between hover:border-primary/50 transition-all duration-300 card-hover-effect group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">school</span>
                    <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">
                      {path.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                    {path.name}
                  </h3>
                  <span className="font-mono text-[10px] text-text-secondary block mb-6">
                    {path.duration} · {path.rate}
                  </span>

                  <div className="bg-surface-slate border border-border-muted/50 p-4 rounded-sm mb-6">
                    <span className="font-mono text-[9px] text-text-secondary uppercase block mb-1">
                      Path Price
                    </span>
                    <span className="font-display text-xl font-bold text-text-primary block line-through opacity-50 mb-1">
                      {path.cost}
                    </span>
                    <span className="font-mono text-[9px] text-primary uppercase block mb-1">
                      Active Member Price (30% Off)
                    </span>
                    <span className="font-display text-2xl font-bold text-primary block">
                      {path.memberCost}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {path.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {path.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-primary text-base">
                          check_circle
                        </span>
                        <span className="font-sans text-sm text-text-secondary">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={path.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-primary text-background py-3 rounded-sm font-bold font-mono text-[10px] uppercase tracking-widest transition-all active:scale-95 hover:brightness-110 shadow-md shadow-primary/5"
                  >
                    Enroll Now
                  </a>
                  <Link
                    href="/booking"
                    className="w-full text-center bg-transparent border border-primary/30 text-primary py-3 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-primary/5"
                  >
                    Book Discovery Call
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private 1-to-1 Development Sessions */}
        <div className="border-t border-border-muted/30 pt-20 mt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              Flexible Sessions
            </span>
            <h2 className="font-display text-3xl font-extrabold text-text-primary mb-6">
              Private 1-to-1 Trading Development Session
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Not ready for a full pathway? Book individual private sessions at your own pace. Each session is a focused, 2-hour deep-dive tailored to your current trading challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SQ Elite Member Rate */}
            <div className="bg-surface-card border border-primary/30 p-8 rounded-sm flex flex-col justify-between card-hover-effect group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-background font-mono text-[9px] px-4 py-1.5 uppercase tracking-widest font-bold">
                Member Booking
              </div>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">
                    SQ Elite Members
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  Development Session
                </h3>
                <span className="font-mono text-[10px] text-text-secondary block mb-6">
                  1 Session · 2 Hours · £75/hour
                </span>

                <div className="bg-surface-slate border border-border-muted/50 p-4 rounded-sm mb-6">
                  <span className="font-mono text-[9px] text-text-secondary uppercase block mb-1">
                    Session Price
                  </span>
                  <span className="font-display text-2xl font-bold text-primary block">
                    £150
                  </span>
                  <span className="font-mono text-[9px] text-primary/70 block mt-1">
                    Member checkout
                  </span>
                </div>

                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                  Booking option for active SQ Elite subscribers. The session can focus on order flow, risk management, market structure, or strategy refinement.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">Fully personalised agenda</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">Any topic or skill level</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">No pathway commitment required</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://buy.stripe.com/4gMdRagehgf9dzxajt8Vi04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-background py-3 rounded-sm font-bold font-mono text-[10px] uppercase tracking-widest transition-all active:scale-95 hover:brightness-110 shadow-md shadow-primary/5"
                >
                  Book &amp; Pay — £150
                </a>
                <Link
                  href="/booking"
                  className="w-full text-center bg-transparent border border-primary/30 text-primary py-3 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-primary/5"
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>

            {/* Standard Rate */}
            <div className="bg-surface-card border border-border-muted p-8 rounded-sm flex flex-col justify-between card-hover-effect group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-xl">school</span>
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">
                    Standard / Non-Member
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  Development Session
                </h3>
                <span className="font-mono text-[10px] text-text-secondary block mb-6">
                  1 Session · 2 Hours
                </span>

                <div className="bg-surface-slate border border-border-muted/50 p-4 rounded-sm mb-6">
                  <span className="font-mono text-[9px] text-text-secondary uppercase block mb-1">
                    Session Price
                  </span>
                  <span className="font-display text-2xl font-bold text-text-primary block">
                    £150
                  </span>
                  <span className="font-mono text-[9px] text-text-secondary block mt-1">
                    Standard rate
                  </span>
                </div>

                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                  Open to everyone — no membership required. A focused private session covering any area of trading education, market mechanics, or performance review.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">Fully personalised agenda</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">Any topic or skill level</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    <span className="font-sans text-sm text-text-secondary">No membership needed</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://buy.stripe.com/eVq8wQ7HL7IDgLJ77h8Vi05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary text-background py-3 rounded-sm font-bold font-mono text-[10px] uppercase tracking-widest transition-all active:scale-95 hover:brightness-110 shadow-md shadow-primary/5"
                >
                  Book &amp; Pay — £150
                </a>
                <Link
                  href="/booking"
                  className="w-full text-center bg-transparent border border-primary/30 text-primary py-3 rounded-sm font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-primary/5"
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SQ Member Verification & Onboarding Form */}
        <div className="border-t border-border-muted/30 pt-20 mt-20">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              Member Verification
            </span>
            <h2 className="font-display text-3xl font-extrabold text-text-primary mb-6">
              SQ Member Verification &amp; Onboarding
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Already subscribed or enrolled? Complete the verification form below to activate your SQ Elite access and confirm your onboarding details.
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto bg-surface-card border border-border-muted rounded-sm overflow-hidden gold-rim">
            <div className="bg-surface-slate border-b border-border-muted px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                  Verification Terminal
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
                <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
                <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
              </div>
            </div>
            <div className="flex flex-col items-center px-6 py-16 text-center md:py-20">
              <span className="material-symbols-outlined mb-5 text-5xl text-primary" aria-hidden="true">assignment_turned_in</span>
              <h3 className="mb-3 font-display text-2xl font-bold text-text-primary">Complete Member Verification</h3>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-text-secondary">
                Use the secure onboarding form after payment so the team can verify your purchase and activate the correct membership access.
              </p>
              <a
                className="flex min-h-11 items-center justify-center rounded-sm bg-primary px-8 py-3 font-display text-xs font-bold uppercase tracking-widest text-background transition-all hover:brightness-110 active:scale-95"
                href="https://docs.google.com/forms/d/e/1FAIpQLSecd2uIut0rERuY8t729Rwk3HXcoA3rFMkumTP-a8cb-8oJ-A/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Onboarding Form
              </a>
              <p className="mt-4 text-xs text-text-secondary">The form opens on Google Forms in a new tab.</p>
            </div>
          </div>
        </div>
      </div>

      <AffiliateCTA />
    </div>
  );
}
