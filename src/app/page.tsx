"use client";

import Link from "next/link";
import Image from "next/image";
import FrontierChart from "@/components/FrontierChart";
import ContactForm from "@/components/ContactForm";
import AffiliateCTA from "@/components/AffiliateCTA";

export default function Home() {
  const trustPillars = [
    {
      title: "Verified Alpha",
      desc: "Audit-ready track records backed by third-party institutional reporting.",
      icon: "verified",
    },
    {
      title: "Risk First",
      desc: "Optimizing for Sortino Ratios over raw return to ensure capital preservation.",
      icon: "analytics",
    },
    {
      title: "Quant Stack",
      desc: "Proprietary Python-based toolsets for Monte Carlo simulations.",
      icon: "terminal",
    },
    {
      title: "Mentor Access",
      desc: "Direct 1-on-1 calls with analysts from top-tier wealth firms.",
      icon: "school",
    },
    {
      title: "Zero Hype",
      desc: "No generic indicators. No gambling. Only math-driven probability models.",
      icon: "security",
    },
  ];

  const philosophyPillars = [
    {
      title: "Microstructure Mastery",
      desc: "Understand the plumbing of the markets—how orders are filled and where liquidity hides.",
      icon: "layers",
    },
    {
      title: "Statistical Edge",
      desc: "Learn to quantify your probability of success before ever putting capital at risk.",
      icon: "calculate",
    },
  ];

  const faqs = [
    {
      q: "What makes the Sortino method different from other retail courses?",
      a: "Unlike retail courses that focus on lagging indicators, we focus on Market Microstructure and Risk Management Frameworks. We optimize for the Sortino Ratio—which focuses on downside volatility—ensuring that your growth is both sustainable and professional.",
    },
    {
      q: "Do I need a background in mathematics or finance?",
      a: "While helpful, it is not mandatory. Our curriculum is designed to take you from foundational concepts to advanced quantitative modeling. However, a disciplined mindset and a willingness to engage with data are requirements.",
    },
    {
      q: "Is there a performance guarantee?",
      a: "In the institutional world, \"guarantees\" are a red flag. We provide you with the same frameworks used by top firms, but execution and performance are dependent on individual discipline and market conditions. Trading involves significant risk.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border-muted py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none filter brightness-[0.4]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8wJ1KGfUn-I0HsidKaqC6JRtUpFA1RE0bnXpUgi5III4ZIsbDI-TIR8yNceYoFpaKvPzZBS1DYHq1qUmJdC2LdbC3EOGlMDdu8nqazsyKwbr3QTMbg8Hlc2GrBVzPu4twkTQPQjMpht2NAuVRhJMfKECk3ninAwfPINLcYyM5SLb1z44fNcv3guJa5EffsHb9HxGRIeGUKmAa7J_5ewPvBFsAOSh6TLwB2D5d2TaSSjK9aNR7IYr63b_5qJM-BCalhGgBaglpg"
            alt="Trading Terminal Background"
            fill
            priority
            unoptimized
            className="object-cover grayscale"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-mono text-xs text-primary border border-primary/30 px-3 py-1 mb-6 rounded-full bg-primary/5 uppercase tracking-widest">
              Institutional Research
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
              Position Yourself on the{" "}
              <span className="text-primary italic">Efficient Frontier.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed">
              Elite trading education built for institutional quants and high-net-worth investors. We bridge the gap between complex mathematical theory and actionable market alpha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/memberships"
                className="bg-primary text-background text-center px-8 py-4 rounded-sm font-display font-bold text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/10 whitespace-nowrap"
              >
                Apply for Admission
              </Link>
              <Link
                href="/team"
                className="border border-primary/50 text-primary text-center px-8 py-4 rounded-sm font-display font-bold text-base hover:bg-primary/5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                View Performance Data
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </Link>
            </div>
          </div>

          {/* Dynamic Frontier Graph Component */}
          <div className="w-full">
            <FrontierChart />
          </div>
        </div>
      </section>

      {/* 2. The Sortino Standard / Trust Pillars */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              The Sortino Standard
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Institutional Foundations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-card border border-border-muted p-6 group hover:border-primary/50 transition-colors rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                    {pillar.icon}
                  </span>
                  <h3 className="font-display text-base font-bold text-text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Educational Philosophy */}
      <section className="py-20 bg-surface-slate relative overflow-hidden border-b border-border-muted">
        <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full border-x border-white/10 mx-auto max-w-7xl">
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
            <div className="border-r border-white/10" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-video lg:aspect-square max-h-[500px] border border-border-muted rounded-sm overflow-hidden bg-background flex items-center justify-center p-4">
              <Image
                src="/SortinoQuants.png"
                alt="Sortino Quants Methodology"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="mt-8 bg-surface-card p-6 border border-primary/20 rounded-sm">
              <span className="font-mono text-xs text-primary">
                ALGO_METRIC: Sortino_Target &gt; 2.4
              </span>
              <p className="text-text-secondary text-sm mt-2 italic font-sans leading-relaxed">
                &quot;We don&apos;t teach you how to trade; we teach you how to build a firm.&quot;
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              The Methodology
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mt-4 mb-6 leading-tight">
              Quant-Driven Discipline. <br />
              Institutional Rigor.
            </h2>
            <p className="text-text-secondary text-base mb-8 leading-relaxed">
              Our curriculum is modeled after private wealth management training programs. We skip the &quot;retail indicators&quot; and focus on market microstructure, liquidation clusters, and volatility arbitrage.
            </p>
            <ul className="space-y-6">
              {philosophyPillars.map((philosophy) => (
                <li key={philosophy.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    {philosophy.icon}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base">
                      {philosophy.title}
                    </h4>
                    <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                      {philosophy.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us / Bento Grid */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              The Differentiator
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Why Sortino Quants?
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Box 1 (Direct Bloomberg Connectivity) */}
            <div className="col-span-12 md:col-span-8 bg-surface-card border border-border-muted p-8 rounded-sm flex flex-col justify-between hover:border-primary/40 transition-colors duration-300">
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                  Direct Bloomberg Connectivity
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
                  Get access to professional-grade data feeds and research terminals usually reserved for hedge fund managers.
                </p>
              </div>
              <div className="mt-12 flex items-baseline gap-4 w-1/3">
                <div className="h-1 bg-primary w-1/3 rounded-full" />
                <div className="h-1 bg-border-muted w-2/3 rounded-full" />
              </div>
            </div>

            {/* Box 2 (92% efficiency) */}
            <div className="col-span-12 md:col-span-4 bg-primary text-background p-8 rounded-sm flex flex-col justify-center items-center text-center">
              <span className="font-display text-6xl font-extrabold mb-2">92%</span>
              <p className="font-mono text-xs uppercase tracking-widest font-bold">
                Risk-Adjusted Efficiency
              </p>
            </div>

            {/* Box 3 (Global Alumni Network) */}
            <div className="col-span-12 md:col-span-4 bg-surface-slate border border-border-muted p-8 rounded-sm hover:border-primary/40 transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                hub
              </span>
              <h3 className="font-display text-base font-bold text-text-primary mb-2">
                Global Alumni Network
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Connect with analysts from London, Singapore, and NYC.
              </p>
            </div>

            {/* Box 4 (Proprietary Indicators) */}
            <div className="col-span-12 md:col-span-8 bg-surface-card border border-border-muted p-8 rounded-sm flex gap-6 items-center hover:border-primary/40 transition-colors duration-300">
              <div className="hidden lg:flex w-20 h-20 bg-background border border-border-muted rounded-full items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">
                  monitoring
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">
                  Proprietary Indicators
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Tools built on the Sortino volatility model, designed to find stability in chaotic market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Free Community Banner */}
      <section className="py-16 bg-background border-b border-border-muted relative overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="bg-surface-slate border border-primary/20 rounded-sm p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8 gold-rim">
            <div className="max-w-2xl text-center md:text-left">
              <span className="font-mono text-[9px] text-primary uppercase tracking-widest block mb-3 border border-primary/30 px-3 py-1 rounded-full bg-primary/5 w-fit mx-auto md:mx-0">
                Free Group Access
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
                Intraday Trading & Scalping Free Community
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-0">
                Join our active community group to access free intraday trading setups, real-time scalping insights, and discussions with like-minded traders. Accelerate your execution with zero cost.
              </p>
            </div>
            <a
              href="https://wa.me/447442515815"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-background text-center px-8 py-4 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shadow-xl shadow-primary/10"
            >
              Join Free Community Group
            </a>
          </div>
        </div>
      </section>

      {/* 5. Founder Preview / Executive Leadership */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                Executive Leadership
              </span>
              <h2 className="font-display text-3xl font-extrabold text-text-primary mt-4 mb-6">
                Expertise from the Trading Floor
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10">
                Meet the architects of the Sortino Curriculum. With combined decades of experience in institutional wealth and quantitative research, they lead by execution, not theory.
              </p>
              <Link
                href="/team"
                className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-display font-bold text-xs hover:bg-primary/5 transition-all uppercase tracking-widest"
              >
                Meet Our Analysts
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Santhosh Card */}
              <div className="group relative overflow-hidden rounded-sm border border-border-muted">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src="/santhosh.jpg"
                    alt="Santhosh Asokan"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background to-transparent pt-10">
                  <p className="font-display font-bold text-sm text-text-primary">
                    Santhosh Asokan
                  </p>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-widest">
                    Founder & Lead Mentor
                  </p>
                </div>
              </div>

              {/* Sathish Card */}
              <div className="group relative overflow-hidden rounded-sm border border-border-muted translate-y-8">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src="/sathish.jpeg"
                    alt="Sathish Kumar"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background to-transparent pt-10">
                  <p className="font-display font-bold text-sm text-text-primary">
                    Sathish Kumar
                  </p>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-widest">
                    Tech Strategist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Memberships Preview / Trading Groups */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              Tiered Intelligence
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Trading Groups & Memberships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gold Trading Group */}
            <div className="bg-surface-card border border-border-muted p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/50 transition-colors duration-300 card-hover-effect relative group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    trending_up
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    Active Analysis
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Gold Trading Group
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-primary">
                    £10
                  </span>
                  <span className="text-text-secondary text-xs font-sans">
                    / month
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Systematic approaches to commodity markets focusing on gold price action and macroeconomic correlation.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Daily Momentum Reports
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Live Trading Room Access
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Institutional Risk Models
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Join Group
              </Link>
            </div>

            {/* Crypto Trading Group */}
            <div className="bg-surface-card border border-border-muted p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/50 transition-colors duration-300 card-hover-effect relative group">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    currency_bitcoin
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                    Digital Assets
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Crypto Trading Group
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-primary">
                    £10
                  </span>
                  <span className="text-text-secondary text-xs font-sans">
                    / month
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Quantitative frameworks for navigating the high-volatility landscape of Bitcoin and leading altcoin structures.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    On-chain Data Synthesis
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Volatility Skew Analysis
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    DeFi Yield Strategy Guides
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Join Group
              </Link>
            </div>

            {/* Premium Stock Group */}
            <div className="bg-[#11151B] border-2 border-primary p-8 flex flex-col justify-between h-full rounded-sm relative gold-glow hover:border-primary/80 transition-colors duration-300 card-hover-effect group overflow-hidden shadow-[0_0_40px_rgba(244,195,103,0.1)]">
              <div className="absolute top-6 right-[-34px] w-[140px] bg-primary text-background py-1 text-center rotate-45 font-mono text-[9px] uppercase tracking-widest font-bold shadow-sm">
                Most Popular
              </div>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-125">
                    diamond
                  </span>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                    Institutional Alpha
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Premium Stock Group
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-primary">
                    £30
                  </span>
                  <span className="text-text-secondary text-xs font-sans">
                    / month
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  The flagship tier for dedicated traders seeking the highest level of equity research and proprietary indicators.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-primary font-semibold">
                    <span className="material-symbols-outlined text-primary text-base">
                      verified
                    </span>
                    Alpha Signal Alerts
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-primary font-semibold">
                    <span className="material-symbols-outlined text-primary text-base">
                      verified
                    </span>
                    Quarterly One-on-Ones
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-primary font-semibold">
                    <span className="material-symbols-outlined text-primary text-base">
                      verified
                    </span>
                    Proprietary Terminal Tools
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full block text-center bg-primary text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all hover:brightness-110 active:scale-95"
              >
                Join Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 1-2-1 Mentorship Tiers Section */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              Private Accelerator
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              1-2-1 Private Mentorship Sessions
            </h2>
            <p className="font-sans text-sm md:text-base text-text-secondary mt-4 leading-relaxed">
              Accelerate your trading journey with direct, single-trader mentorship sessions. We offer specialized pathways tailored to your current level of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Beginner Pathway
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-xs mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Rigorous foundational instruction designed to build structured habits, correct charting procedures, and disciplined execution.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Foundational Market Physics
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Broker & Platform Setups
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Core Risk Management Rules
                  </li>
                </ul>
              </div>
              <Link
                href="#callback"
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
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Intermediate Pathway
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-xs mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Bridge the gap between basic retail setups and professional risk allocation models, price profiles, and trading checklists.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Advanced Volatility Profiles
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Auction Market Theory Basics
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Trading Psychology Audits
                  </li>
                </ul>
              </div>
              <Link
                href="#callback"
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
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Advanced Pathway
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-mono text-xl font-bold text-primary uppercase tracking-wider">
                    Custom Mandate
                  </span>
                </div>
                <p className="text-text-secondary text-xs mb-8 font-sans border-l-2 border-primary/20 pl-4 italic leading-relaxed">
                  Elite derivatives execution modeled on proprietary trading firms, focused on microstructure plumbing and passed challenges.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Microstructure & Orderflow Plumbing
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    Institutional Liquidity Clusters
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    FTMO Prop Challenge Preparation
                  </li>
                </ul>
              </div>
              <Link
                href="#callback"
                className="w-full block text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-background py-4 font-bold font-mono text-xs uppercase tracking-widest rounded-sm transition-all active:scale-95"
              >
                Book Advanced Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STARTRADER CTA Affiliate */}
      <AffiliateCTA />

      {/* 8. FAQ Accordion */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              Information Desk
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-background border border-border-muted rounded-sm overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-card transition-colors select-none">
                  <span className="font-display text-sm md:text-base font-semibold text-text-primary">
                    {faq.q}
                  </span>
                  <span className="text-primary transform group-open:rotate-180 transition-transform material-symbols-outlined text-xl">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-xs md:text-sm text-text-secondary leading-relaxed border-t border-border-muted/20 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA / Callback Request Form */}
      <section id="callback" className="py-20 bg-background">
        <div className="max-w-xl mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
