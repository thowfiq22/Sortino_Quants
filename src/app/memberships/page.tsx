"use client";

import Link from "next/link";
import AffiliateCTA from "@/components/AffiliateCTA";

export default function Memberships() {
  const groups = [
    {
      name: "Gold Trading Group",
      price: "10",
      icon: "trending_up",
      tagline: "Systematic approaches to commodity markets focusing on gold price action and macroeconomic correlation.",
      features: [
        "Daily Momentum Reports",
        "Live Trading Room Access",
        "Institutional Risk Models",
      ],
      isPopular: false,
    },
    {
      name: "Crypto Trading Group",
      price: "10",
      icon: "currency_bitcoin",
      tagline: "Quantitative frameworks for navigating the high-volatility landscape of Bitcoin and leading altcoin structures.",
      features: [
        "On-chain Data Synthesis",
        "Volatility Skew Analysis",
        "DeFi Yield Strategy Guides",
      ],
      isPopular: false,
    },
    {
      name: "Premium Stock Group",
      price: "30",
      icon: "diamond",
      tagline: "The flagship tier for dedicated traders seeking the highest level of equity research and proprietary indicators.",
      features: [
        "Alpha Signal Alerts",
        "Quarterly One-on-Ones",
        "Proprietary Terminal Tools",
      ],
      isPopular: true,
    },
  ];

  return (
    <div className="w-full bg-background min-h-screen py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="efficient-frontier-curve" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
            Institutional Access
          </span>
          <h1 className="font-display text-4xl font-extrabold text-text-primary mb-6">
            Trading Education Groups
          </h1>
          <p className="font-sans text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Select your group and learn structured quantitative insights. No lock-in contracts, cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {groups.map((group) => (
            <div
              key={group.name}
              className={`bg-surface-card border p-8 flex flex-col justify-between rounded-sm relative group card-hover-effect ${
                group.isPopular
                  ? "border-2 border-primary shadow-[0_0_40px_rgba(244,195,103,0.1)]"
                  : "border-border-muted"
              }`}
            >
              {group.isPopular && (
                <div className="absolute top-4 right-[-32px] bg-primary text-background py-1 px-10 rotate-45 font-mono text-[9px] uppercase tracking-widest font-bold">
                  Most Popular
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    {group.icon}
                  </span>
                  <h3 className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    {group.isPopular ? "Institutional Alpha" : "Active Analysis"}
                  </h3>
                </div>

                <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                  {group.name}
                </h2>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-mono text-4xl font-bold text-primary">
                    £{group.price}
                  </span>
                  <span className="font-sans text-xs text-text-secondary">/month</span>
                </div>

                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  {group.tagline}
                </p>

                <ul className="space-y-4 mb-10">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">
                        {group.isPopular ? "verified" : "check_circle"}
                      </span>
                      <span className="text-sm text-text-secondary leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {group.isPopular ? (
                <Link
                  href="/contact"
                  className="w-full text-center bg-primary text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95 hover:brightness-110"
                >
                  Join Group
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="w-full text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
                >
                  Join Group
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* 1-2-1 Private Mentorship Section */}
        <div className="mt-24 border-t border-border-muted/50 pt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
              Private Accelerator
            </span>
            <h2 className="font-display text-3xl font-extrabold text-text-primary mb-6">
              1-2-1 Private Mentorship Sessions
            </h2>
            <p className="font-sans text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Accelerate your trading journey with direct, single-trader mentorship sessions. We offer specialized pathways tailored to your current level of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Beginner Pathway */}
            <div className="bg-surface-card border border-border-muted p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/50 transition-colors duration-300 card-hover-effect group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    school
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    Pathway 01
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                  Beginner Pathway
                </h2>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Rigorous foundational instruction designed to build structured habits, correct charting procedures, and disciplined execution.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Foundational Market Physics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Broker & Platform Setups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Core Risk Management Rules</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Book Beginner Session
              </Link>
            </div>

            {/* Intermediate Pathway */}
            <div className="bg-surface-card border border-border-muted p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/50 transition-colors duration-300 card-hover-effect group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    analytics
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    Pathway 02
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                  Intermediate Pathway
                </h2>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Bridge the gap between basic retail setups and professional risk allocation models, price profiles, and trading checklists.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Advanced Volatility Profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Auction Market Theory Basics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Trading Psychology Audits</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Book Intermediate Session
              </Link>
            </div>

            {/* Advanced Pathway */}
            <div className="bg-surface-card border border-border-muted p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/50 transition-colors duration-300 card-hover-effect group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    terminal
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    Pathway 03
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                  Advanced Pathway
                </h2>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Elite derivatives execution modeled on proprietary trading firms, focused on microstructure plumbing and passed challenges.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Microstructure & Orderflow Plumbing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">Institutional Liquidity Clusters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span className="text-sm text-text-secondary">FTMO Prop Challenge Preparation</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Book Advanced Session
              </Link>
            </div>
          </div>
        </div>

        {/* Client notice box */}
        <div className="bg-surface-slate border border-border-muted p-6 text-center max-w-2xl mx-auto rounded-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary/60 text-lg">
            info
          </span>
          <p className="text-text-secondary font-sans text-xs leading-relaxed opacity-80">
            Final membership features and benefits will be provided by the client upon registration.
          </p>
        </div>
      </div>

      <AffiliateCTA />
    </div>
  );
}
