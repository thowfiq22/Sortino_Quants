import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import FrontierChart from "@/components/FrontierChart";
import ContactForm from "@/components/ContactForm";
import CPAFloatingBanner from "@/components/CPAFloatingBanner";

export const metadata = createPageMetadata({
  title: "Sortino Quants | Institutional Trading Education",
  description: "Premium trading education platform focused on quantitative analysis, disciplined risk management, and market structure.",
  path: "/",
});

export default function Home() {
  const educationalPillars = [
    {
      title: "Market Research",
      desc: "Structured analysis covering volume distribution, CVD tracking, and institutional auction theory models.",
      icon: "query_stats",
    },
    {
      title: "Structured Training",
      desc: "systematic 1-to-1 mentorship pathways built for beginner, intermediate, and advanced execution stages.",
      icon: "school",
    },
    {
      title: "Analyst Perspectives",
      desc: "Direct access to real-time market scenario reviews and institutional risk-reward frameworks.",
      icon: "analytics",
    },
    {
      title: "Trade Journaling",
      desc: "Developing professional journalling habits, statistical expectations, and psychological consistency.",
      icon: "edit_note",
    },
    {
      title: "Global Community",
      desc: "Engage with serious, like-minded traders under our verified SQ Elite Lounge channels.",
      icon: "forum",
    },
    {
      title: "Risk Management",
      desc: "Prioritizing downside volatility limits, position sizing parameters, and equity curve stability.",
      icon: "security",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Book a Discovery Call",
      desc: "Schedule a free 1-to-1 introductory call with our analyst desk. We will evaluate your trading experience and verify the correct curriculum starting point.",
    },
    {
      num: "02",
      title: "Enroll in a Pathway",
      desc: "Begin your structured private mentorship (Beginner Foundations, Intermediate Progression, or Advanced Mastery). Full SQ Elite Membership is included.",
    },
    {
      num: "03",
      title: "Develop Your Edge",
      desc: "Apply institutional risk-allocation frameworks, execute detailed checklists, and build the statistical edge needed for long-term consistency.",
    },
  ];

  const testimonials = [
    {
      stars: 5,
      text: "I came in completely new to trading. The Beginner Pathway was structured perfectly — no overwhelming jargon, just a proper framework for understanding the markets. The free Discovery Call before I enrolled made me feel confident before committing a penny.",
      author: "Oliver H.",
      role: "Beginner Pathway · Manchester, UK",
    },
    {
      stars: 5,
      text: "The shift from retail indicators to volume profile and auction theory was exactly what I needed. The intermediate mentorship teaches you to read structural imbalances and absorption in real-time. Highly recommended for anyone stuck in retail traps.",
      author: "Marcus K.",
      role: "Intermediate Pathway · London, UK",
    },
    {
      stars: 5,
      text: "Extremely professional setup. No signals, no hype, just pure quantitative execution models. The advanced tape reading and order flow sessions completely reshaped my risk parameters. Having SQ Elite access included is a major benefit.",
      author: "Elena R.",
      role: "Advanced Pathway · Frankfurt, DE",
    },
  ];

  const faqs = [
    {
      q: "What makes Sortino Quants different from other trading education sites?",
      a: "We are an education-first platform. We do not sell signals, managed accounts, or indicator packages. Our entire curriculum is modeled after institutional training structures, focusing on volume profile, auction theory, order flow plumbing, and robust downside risk management.",
    },
    {
      q: "Do I need prior finance or mathematics experience?",
      a: "No. Our pathways are built systematically. The Beginner Foundations course starts from raw market mechanics and basic chart structures, while our Intermediate and Advanced courses scale up to institutional order routing and portfolio risk modeling.",
    },
    {
      q: "How does the CPA StarTrader integration work?",
      a: "To help serious traders access high-quality education, we partner with verified brokers. By opening and funding an account via our disclosed CPA affiliate link, you receive 3 months of complimentary access to our full SQ Elite premium channels.",
    },
    {
      q: "What is your refund policy?",
      a: "Cancellation and refund rights depend on the product, when digital access or scheduled services begin, and applicable consumer law. Your statutory rights are not affected. Contact us promptly if you need to cancel or believe a service was not supplied as described.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border-muted py-24">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, rgba(244,195,103,0.03) 0%, transparent 60%) pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex font-mono text-xs text-primary border border-primary/30 px-3 py-1 mb-6 rounded-full bg-primary/5 uppercase tracking-widest font-bold">
              ◆ Financial Markets Education & Research
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
              Learn to Think Like an <br />
              <span className="text-primary italic">Institutional Trader.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed">
              Educational trading platform focused on market knowledge, market microstructure, quantitative thinking, disciplined execution, and trading community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/memberships"
                className="bg-primary text-background text-center px-8 py-4 rounded-sm font-display font-bold text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/10 whitespace-nowrap uppercase tracking-wider"
              >
                Explore Memberships
              </Link>
              <Link
                href="/education"
                className="border border-primary/50 text-primary text-center px-8 py-4 rounded-sm font-display font-bold text-base hover:bg-primary/5 transition-all flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-wider"
              >
                Our Syllabus
                <span className="material-symbols-outlined text-sm">menu_book</span>
              </Link>
            </div>
          </div>

          {/* Dynamic Frontier Graph Component */}
          <div className="w-full">
            <FrontierChart />
          </div>
        </div>
      </section>

      {/* 2. What We Do / Pillars */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Education-First Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-card border border-border-muted p-8 group hover:border-primary/50 transition-colors rounded-sm flex flex-col justify-between card-hover-effect"
              >
                <div>
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block transition-transform duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works Timeline */}
      <section className="py-20 bg-surface-slate border-b border-border-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Execution Process
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative mt-12">
            {/* Horizontal Line Accent on Large Screens */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border-muted z-0" />

            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-surface-card border border-border-muted p-8 rounded-sm hover:border-primary/30 transition-colors duration-300 relative z-10 flex flex-col items-center text-center group card-hover-effect"
              >
                <div className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center font-mono text-xs text-primary font-bold mb-6 transition-transform duration-300 group-hover:scale-110">
                  {st.num}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-3">
                  {st.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, index) => (
              <div
                key={index}
                className="bg-surface-card border border-border-muted p-8 rounded-sm hover:border-primary/30 transition-colors duration-300 flex flex-col justify-between card-hover-effect group"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testi.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary text-sm">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-display text-4xl text-primary/20 block mb-2 leading-none font-serif">
                    “
                  </span>
                  <p className="text-text-secondary text-sm italic leading-relaxed mb-6">
                    {testi.text}
                  </p>
                </div>
                <div className="border-t border-border-muted/50 pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-display text-xs text-primary font-bold">
                    {testi.author[0]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-sm">
                      {testi.author}
                    </h3>
                    <span className="font-mono text-xs text-text-secondary">
                      {testi.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Revenue Model / Transparency */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Transparency Pledge
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Our Revenue Model
            </h2>
          </div>

          <div className="w-full bg-surface-card border border-border-muted rounded-sm overflow-hidden gold-rim">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-border-muted bg-surface-slate text-text-secondary font-mono text-[10px] uppercase tracking-wider">
                    <th className="px-6 py-4">Revenue Stream</th>
                    <th className="px-6 py-4">How It Works</th>
                    <th className="px-6 py-4">Our Commitment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-muted/50 text-text-secondary">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-text-primary">
                      Membership Subscriptions
                    </td>
                    <td className="px-6 py-5">
                      Members pay a monthly subscription fee for access to premium channels, outlooks, and trade scenario analysis.
                    </td>
                    <td className="px-6 py-5 text-primary">
                      Zero upselling. We do not promote signals or offer managed accounts.
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-text-primary">
                      1-to-1 Mentorship Programmes
                    </td>
                    <td className="px-6 py-5">
                      Structured curriculum-based training across Beginner, Intermediate, and Advanced paths.
                    </td>
                    <td className="px-6 py-5 text-primary">
                      No profit-sharing on trading capital. We sell structured education only.
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-5 font-bold text-text-primary">
                      CPA Affiliate Broker Referral
                    </td>
                    <td className="px-6 py-5">
                      We receive a CPA commission from our partner broker when a user registers and funds an account.
                    </td>
                    <td className="px-6 py-5 text-primary">
                      Full disclosure. We offer members 3 months free access to lower their direct education cost.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third Party Disclosures */}
          <div className="mt-8 p-6 bg-surface-card border border-border-muted rounded-sm flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong>Regulatory Notice:</strong> Sortino Quants Ltd is an educational organization. We are not regulated by the FCA or any other financial authority. We do not hold client capital, execute trades on client behalf, or offer advice. All broker affiliate schemes are fully disclosed under our transparency framework.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">
              Information Desk
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mt-2">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-border-muted bg-surface-card rounded-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors pr-4">
                    {faq.q}
                  </h3>
                  <span className="material-symbols-outlined text-primary text-lg transition-transform duration-300 group-open:rotate-45">
                    add
                  </span>
                </summary>
                <div className="px-6 pb-6 border-t border-border-muted/30 pt-4">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Callback/Contact Section */}
      <section id="callback" className="py-20 bg-surface-slate">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4 block">
                ANALYSIS DESK
              </span>
              <h2 className="font-display text-3xl font-extrabold text-text-primary mb-6">
                Request a Callback.
              </h2>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                If you have questions about private pathways, SQ Elite access, booking, or onboarding, submit your details and our team will get in touch.
              </p>
              <div className="bg-background border border-border-muted p-4 rounded-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <div>
                  <span className="font-mono text-[9px] text-text-secondary uppercase block">
                    Direct Email
                  </span>
                  <span className="font-mono text-xs text-text-primary">
                    sortinoquants@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating CPA Referral Banner */}
      <CPAFloatingBanner />
    </div>
  );
}
