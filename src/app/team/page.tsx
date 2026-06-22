import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Certifications from "@/components/Certifications";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata = createPageMetadata({
  title: "Our Team | Sortino Quants",
  description: "Meet the Sortino Quants team and review the experience, qualifications, and focus areas presented by each mentor.",
  path: "/team/",
});

export default function Team() {
  const santhoshAchievements = [
    "Distinction Graduate at Postgraduate Level",
    "Postgraduate University Topper",
    "Bloomberg Trading Challenge Participant",
    "FTMO Passed Challenge",
    "FTMO Passed Verification",
    "CISI Fundamentals of Financial Services 2025",
  ];

  const santhoshSpecialisations = [
    "Index Futures",
    "Options Trading",
    "Intraday Trading",
    "Market Profile",
    "Auction Market Theory",
    "Volume Spread Analysis",
    "Risk Management",
  ];

  const sathishExpertise = [
    "Business Analysis",
    "Product Management",
    "IT Consulting",
    "Digital Transformation",
    "Enterprise Solutions",
    "Financial Technology",
  ];

  const sathishInterests = [
    "Artificial Intelligence",
    "Quantitative Analysis",
    "Banking Technology",
    "Data Analytics",
    "Product Strategy",
  ];

  const sathishMarkets = [
    "Stocks & Equities",
    "Forex & Macro Trends",
    "Gold & Commodities",
    "Cryptocurrency & Digital Assets",
    "Trading Psychology & Risk Management",
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-16 pb-24 md:pt-24 md:pb-28 efficient-frontier-bg">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-20 text-center lg:text-left">
        <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
          INSTITUTIONAL GRADE MENTORSHIP
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
          The Architects of <span className="text-primary italic">Alpha</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          Bridging the gap between academic theory and institutional trading execution. Our team combines quantitative rigor with decades of market experience.
        </p>
      </section>

      {/* 2. Sathish Kumar Profile (First) */}
      <section className="bg-surface-slate py-20 border-y border-border-muted mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div>
                <span className="font-mono text-xs text-primary uppercase tracking-widest mb-2 block">
                  FINTECH & STRATEGY
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                  Sathish Kumar
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8">
                  Sathish is a UK-based business and technology professional with an MBA in Finance and over 15 years of experience across business analysis, product management, IT consulting, digital transformation, and enterprise solution delivery. His corporate background spans banking, insurance, and fintech, where he has contributed to large-scale data systems and strategic integrations.
                </p>
              </div>

              {/* 3 Core Points from Stitch */}
              <div className="space-y-6 border-t border-border-muted/50 pt-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-base">history_edu</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-text-primary mb-1">MBA in Finance</h3>
                    <p className="text-xs text-text-secondary">Providing the macroeconomic foundation for our quantitative strategies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-base">calendar_month</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-text-primary mb-1">15+ Years Industry Experience</h3>
                    <p className="text-xs text-text-secondary">Extensive track record in navigating multiple market cycles and institutional shifts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-base">precision_manufacturing</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-text-primary mb-1">Business Technology Strategist</h3>
                    <p className="text-xs text-text-secondary">Driving the proprietary development of our analytical dashboard and terminal integration.</p>
                  </div>
                </div>
              </div>

              {/* Initiatives founded */}
              <div className="border-t border-border-muted/50 pt-6">
                <h3 className="font-display font-bold text-text-primary text-sm mb-4">
                  Founder of Digital Initiatives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-card border border-border-muted p-4 rounded-sm hover:border-primary/20 transition-colors">
                    <h4 className="font-display font-bold text-sm text-primary mb-1">
                      RemindWell
                    </h4>
                    <p className="text-[11px] text-text-secondary leading-normal">
                      Digital health and productivity app focused on medicine reminders and expiry tracking.
                    </p>
                  </div>
                  <div className="bg-surface-card border border-border-muted p-4 rounded-sm hover:border-primary/20 transition-colors">
                    <h4 className="font-display font-bold text-sm text-primary mb-1">
                      CloudSaha
                    </h4>
                    <p className="text-[11px] text-text-secondary leading-normal">
                      UK-based IT and consulting initiative for digital transformation and enterprise services.
                    </p>
                  </div>
                  <div className="bg-surface-card border border-border-muted p-4 rounded-sm hover:border-primary/20 transition-colors">
                    <h4 className="font-display font-bold text-sm text-primary mb-1">
                      Equity Era
                    </h4>
                    <p className="text-[11px] text-text-secondary leading-normal">
                      Educational trading and market insights platform for stocks, forex, gold, and crypto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Market focus & Professional Interest lists */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border-muted/50 pt-6">
                <div>
                  <h3 className="font-display font-bold text-text-primary text-xs mb-3 uppercase tracking-wider">
                    Expertise
                  </h3>
                  <ul className="space-y-2">
                    {sathishExpertise.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-xs mb-3 uppercase tracking-wider">
                    Focus
                  </h3>
                  <ul className="space-y-2">
                    {sathishInterests.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-xs mb-3 uppercase tracking-wider">
                    Markets
                  </h3>
                  <ul className="space-y-2">
                    {sathishMarkets.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 group">
              <div className="absolute inset-0 bg-primary opacity-5 rounded-lg -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden gold-rim">
                <Image
                  src="/sathish.webp"
                  alt="Sathish Kumar"
                  fill
                  className="object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Santhosh Asokan Profile (Second) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Portrait & Bio */}
          <div className="lg:col-span-5 relative group">
            {/* Rotated background card on hover */}
            <div className="absolute inset-0 bg-primary opacity-5 rounded-lg -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden gold-rim">
              <Image
                src="/santhosh.webp"
                alt="Santhosh Asokan"
                fill
                className="object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="terminal-header p-4">
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Santhosh Asokan
                </h2>
                <p className="font-mono text-xs text-primary uppercase tracking-widest mt-1">
                  Founder & Lead Trading Mentor
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-slate text-primary font-mono text-[9px] px-3 py-1 border border-border-muted uppercase tracking-wider">
                  MSc Finance
                </span>
                <span className="bg-surface-slate text-primary font-mono text-[9px] px-3 py-1 border border-border-muted uppercase tracking-wider">
                  FTMO Funded
                </span>
                <span className="bg-surface-slate text-primary font-mono text-[9px] px-3 py-1 border border-border-muted uppercase tracking-wider">
                  Bloomberg Certified
                </span>
              </div>
            </div>
          </div>

          {/* Specializations & Story */}
          <div className="lg:col-span-7 lg:pl-6 flex flex-col justify-center h-full space-y-8">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-2 block">
                LEAD INSTRUCTOR STORY
              </span>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Santhosh started his financial markets journey in 2013, driven by a deep curiosity to study market microstructure. Over the past decade, he has specialised in Index Futures and Options, combining quantitative risk models with intraday execution.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                His trading methodologies are grounded in probability, auction market theory, and volatility profiles rather than lagging retail indicators. Academically, he holds an MSc in Global Financial Trading in London, graduating with Distinction and achieving University Topper status at postgraduate level. At Sortino Quants, he provides serious retail participants with the educational frameworks needed to navigate modern derivatives markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Focus list */}
              <div className="bg-surface-card p-6 border border-border-muted rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-xl">analytics</span>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">Core Focus</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs text-text-secondary">Index Futures Specialist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs text-text-secondary">Advanced Derivatives Trading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs text-text-secondary">Risk-First Portfolio Theory</span>
                  </li>
                </ul>
              </div>

              {/* Description box */}
              <div className="bg-surface-card p-6 border border-border-muted rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-xl">monitoring</span>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">Quant Analytics</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Specializing in structural market imbalances and the application of Sortino Ratios to maximize risk-adjusted alpha in retail capital management.
                </p>
              </div>
            </div>

            {/* Sub-lists for credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border-muted/50 pt-6">
              <div>
                <h3 className="font-display font-bold text-text-primary text-xs mb-3 uppercase tracking-wider">
                  Postgraduate Achievements
                </h3>
                <ul className="space-y-2">
                  {santhoshAchievements.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-text-primary text-xs mb-3 uppercase tracking-wider">
                  Mentorship Specialisations
                </h3>
                <ul className="space-y-2">
                  {santhoshSpecialisations.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Credentials Showcase Slider (Directly below Santhosh) */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
          <h2 className="font-mono text-xs text-text-secondary uppercase tracking-widest flex items-center gap-3 select-none">
            Institutional Credentials
            <span className="h-[1px] flex-1 bg-border-muted" />
          </h2>
        </div>
        <Certifications />
      </section>

      {/* 5. Vision / Mission Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 text-center border-t border-border-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 bg-surface-slate border border-border-muted px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-primary">MISSION PROTOCOL</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary mb-8 leading-tight">
            Empowering a New Era of <br />
            <span className="text-primary italic">Sovereign Quants</span>
          </h2>

          <p className="text-text-secondary text-base md:text-lg mb-12 leading-relaxed">
            Our vision is to build more than just a training platform. We are cultivating an institutional-grade community where data-driven analysis replaces speculation. We provide the tools, the mentorship, and the ecosystem for serious traders to master the Efficient Frontier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-8 bg-surface-card border border-border-muted rounded-sm hover:border-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">school</span>
              <h3 className="font-display font-bold text-text-primary text-base mb-2">Education</h3>
              <p className="text-text-secondary text-xs leading-relaxed">Rigorous curricula based on institutional risk models.</p>
            </div>
            <div className="p-8 bg-surface-card border border-border-muted rounded-sm hover:border-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">hub</span>
              <h3 className="font-display font-bold text-text-primary text-base mb-2">Community</h3>
              <p className="text-text-secondary text-xs leading-relaxed">A collaborative environment for high-frequency insights.</p>
            </div>
            <div className="p-8 bg-surface-card border border-border-muted rounded-sm hover:border-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">data_exploration</span>
              <h3 className="font-display font-bold text-text-primary text-base mb-2">Intelligence</h3>
              <p className="text-text-secondary text-xs leading-relaxed">Proprietary tools for advanced market visualization.</p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateCTA />
    </div>
  );
}
