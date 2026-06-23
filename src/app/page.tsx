import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FrontierChart from "@/components/FrontierChart";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Financial Markets Education & Research",
  description:
    "Structured, data-driven trading education built around quantitative analysis, disciplined risk management, and real market understanding.",
  path: "/",
});

const whatWeDo = [
  { icon: "analytics", title: "Market Research & Analysis", body: "Institutional-grade scenario analysis on ES Mini S&P 500, GC Gold, CL Oil, and major Forex pairs — shared for learning so you understand the reasoning, not just the conclusion." },
  { icon: "school", title: "Structured Trading Courses", body: "Beginner, Intermediate and Advanced pathways covering market microstructure, risk frameworks, order flow, trading psychology and quantitative thinking." },
  { icon: "psychology", title: "Analyst Perspectives", body: "Educational commentary with full context — explaining logic, risk considerations, and decision-making processes using Price, Volume, Time, Sentiment & Macro frameworks." },
  { icon: "edit_note", title: "Daily Trade Journalling", body: "Learn how professionals document and review their decisions. We model daily journalling and decision-making processes that build long-term consistency." },
  { icon: "groups", title: "Community & Mentorship", body: "An active professional community supported by live weekly sessions, Q&A, and direct access to lead mentors for structured guidance across all levels." },
  { icon: "security", title: "Risk Management Education", body: "We teach risk-adjusted thinking using the Sortino Ratio framework — because protecting downside is the foundation of sustainable trading performance." },
];

const steps = [
  { icon: "route", title: "Choose Your Path", body: "Start free in the Sortino Quants Community, join SQ Elite directly at £90/month, or unlock complimentary access via a CPA or IB partner broker. Every path begins with clarity — no pressure, no lock-in." },
  { icon: "insights", title: "Learn & Analyse", body: "Access institutional-grade trade scenario analysis on ES, Gold, Oil & Forex, structured education courses, weekly live sessions, and an active professional community — all built on quantitative, risk-adjusted thinking." },
  { icon: "trending_up", title: "Grow as a Trader", body: "Deepen your edge with personalised 1-to-1 mentorship across Beginner, Intermediate and Advanced pathways. Apply disciplined frameworks, review your decisions, and build the psychological consistency that separates sustainable traders from the rest." },
];

const testimonials = [
  { quote: "The way Santhosh explains market microstructure and order flow completely changed how I read price action. The SQ Elite scenario analysis is genuinely institutional-level — I've never encountered educational content this thorough anywhere else in the retail space.", name: "Daniel M.", role: "Intermediate Pathway · London, UK", badge: "SQ Elite Member" },
  { quote: "I came in completely new to trading. The Beginner Pathway was structured perfectly — no overwhelming jargon, just a proper framework for understanding the markets. The free Discovery Call before I enrolled made me feel confident before committing a penny.", name: "Sara K.", role: "Beginner Pathway · Manchester, UK", badge: "SQ Elite Member" },
  { quote: "The transparency here is unlike anything else in this space. They publish their full revenue model openly, disclose every affiliate relationship, and never once pushed me towards opening a broker account. Genuine education — nothing hidden, nothing sold under the table.", name: "James R.", role: "SQ Elite Member · Bristol, UK", badge: "CPA Partner Access" },
];

const faqs = [
  { q: "Do you provide financial advice or manage money?", a: "No. Sortino Quants Ltd is a financial markets education and research platform. We do not provide investment advice, portfolio management, or any regulated financial advisory services. All content — including analyst perspectives, scenario analysis, and market commentary — is provided solely for educational and informational purposes." },
  { q: "What is the difference between SQ Elite Membership and 1-to-1 sessions?", a: "SQ Elite Membership (£90/month) gives you access to all 3 premium channels: SQ Elite Education & Announcements, SQ Elite Trade Scenario Analysis, and the SQ Elite Lounge. The 1-to-1 sessions are private, structured mentorships tailored to your level — Beginner (4 sessions / £600), Intermediate (5 sessions / £750), or Advanced (3 sessions / £450). SQ Elite Members receive 30% off all 1-to-1 session rates." },
  { q: "How can I get free SQ Elite Membership access?", a: "There are three ways to receive complimentary access: (1) Open a trading account via our CPA StarTrader affiliate link and complete our Google Form verification — receive 3 months free. (2) Enrol in any 1-to-1 Mentorship Programme (Beginner, Intermediate, or Advanced) — receive 3 months free. (3) Transfer your trading account via our IB partner link and complete verification — receive 1 month free." },
  { q: "Do I need a maths or finance background to join?", a: "Not at all. Our Beginner pathway starts from the foundations — market structure, risk thinking, platform setup — and builds systematically. A disciplined mindset and a genuine commitment to learning are the only requirements." },
  { q: "Are your affiliate and broker relationships disclosed?", a: "Yes — always. We maintain full transparency over all commercial relationships, including our CPA affiliate arrangement with StarTrader and our Introducing Broker (IB) partnership. These are documented in our Revenue Model & Transparency section. Our educational content is never influenced by these commercial arrangements." },
  { q: "What does a Discovery Call involve?", a: "A Discovery Call is a short, free conversation with one of our mentors before you book a 1-to-1 pathway. It helps us understand your current trading background, learning goals, and which pathway is the right fit. There is no obligation to purchase and no sales pressure — it is purely educational guidance." },
  { q: "Can I cancel my SQ Elite Membership at any time?", a: "Yes. SQ Elite Membership is a monthly rolling subscription with no long-term commitment. You can cancel at any time without penalty." },
];

function SectionHeading({ eyebrow, children, intro }: { eyebrow: string; children: ReactNode; intro?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold text-text-primary md:text-4xl">
        {children}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-text-secondary">{intro}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ── Hero with bottom border ── */}
      <section className="relative overflow-hidden bg-background efficient-frontier-bg border-b border-border-muted">
        <div className="efficient-frontier-curve animate-slow-pulse" />

        {/* Top: Heading + Chart */}
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-20 lg:pb-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Financial Markets Education &amp; Research
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-text-primary sm:text-5xl lg:text-6xl">
              Learn to Think Like an{" "}
              <span className="italic text-primary" style={{textShadow: '0 0 40px rgba(244,195,103,0.15)'}}>Institutional Trader.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
              Sortino Quants Ltd delivers structured, data-driven trading education built around quantitative analysis, disciplined risk management, and real market understanding. We educate traders - we do not manage funds or provide financial advice.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link className="btn-primary text-sm px-8 py-4 shadow-xl shadow-primary/10 w-full sm:w-auto" href="/memberships/">
                Join SQ Elite - £90/mo
              </Link>
              <Link className="btn-secondary text-sm px-8 py-4 w-full sm:w-auto" href="/booking/">
                Book a Discovery Call
              </Link>
            </div>

            {/* Inline Stats Row */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border-muted/30 pt-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">candlestick_chart</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Focus Markets</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-primary mt-0.5">6+</p>
                  <p className="text-[11px] leading-snug text-text-secondary/70 mt-1">ES Futures, Gold, Oil, EUR, GBP, JPY &amp; More</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">school</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Education Tiers</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-primary mt-0.5">3 Levels</p>
                  <p className="text-[11px] leading-snug text-text-secondary/70 mt-1">Beginner · Intermediate · Advanced Pathways</p>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-[11px] leading-5 text-text-secondary/50">
              Disclaimer: All content is for educational purposes only. Sortino Quants Ltd does not provide investment advice, portfolio management, or regulated financial advisory services.
            </p>
          </div>
          <div>
            <FrontierChart />
          </div>
        </div>
      </section>

      {/* ── Educational Pillars Strip ── */}
      <section className="py-16 lg:py-20 bg-background border-b border-border-muted relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary mb-10">
            Our Educational Pillars
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: "query_stats", title: "Quantitative Analysis & Thinking" },
              { icon: "balance", title: "Risk-Adjusted Decision Making" },
              { icon: "swap_vert", title: "Market Microstructure & Order Flow" },
              { icon: "psychology", title: "Trading Psychology & Discipline" },
              { icon: "lab_research", title: "Institutional-Grade Research" },
            ].map((pillar) => (
              <div 
                className="flex items-center gap-4 rounded-sm border border-border-muted/50 bg-surface-card/30 p-4 sm:flex-col sm:items-center sm:text-center sm:bg-transparent sm:border-0 sm:p-0 group transition-all" 
                key={pillar.title}
              >
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 group-hover:bg-primary/10 transition-colors flex-shrink-0 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">{pillar.icon}</span>
                </div>
                <p className="text-sm font-bold text-text-primary leading-snug">{pillar.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted" id="what-we-do">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            intro="We are a financial markets research and education platform. Everything we do is designed to build smarter, more disciplined traders through structured learning — not signals, not hype, not shortcuts."
          >
            Education-First. Always.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => (
              <article className="bg-surface-card border border-border-muted rounded-sm p-7 card-hover-effect" key={item.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple Process"
            intro="From your first login to thinking like an institutional trader — three clear steps to structured development."
          >
            How It Works
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article className="relative bg-surface-card border border-border-muted rounded-sm p-8 card-hover-effect" key={step.title}>
                {/* Connecting line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-3 w-6 border-t-2 border-dashed border-primary/30 z-10" />
                )}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-xl">{step.icon}</span>
                </div>
                <p className="font-mono text-xs text-primary/70 uppercase tracking-wider mb-2">Step {index + 1}</p>
                <h3 className="font-display text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted" id="faq">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Common Questions">
            Frequently Asked Questions
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
                <details 
                  className="group bg-surface-card border border-border-muted border-l-2 border-l-transparent open:border-l-primary open:border-primary/30 open:shadow-lg open:shadow-primary/5 rounded-sm overflow-hidden transition-all duration-300 hover:border-primary/30" 
                  key={faq.q}
                >
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-bold text-text-primary hover:text-primary transition-colors select-none">
                    <span className="pr-4">{faq.q}</span>
                    <span aria-hidden="true" className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-base text-primary transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-transparent">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-border-muted/50 px-6 py-5 bg-background/30">
                    <p className="text-sm leading-7 text-text-secondary">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
                <details 
                  className="group bg-surface-card border border-border-muted border-l-2 border-l-transparent open:border-l-primary open:border-primary/30 open:shadow-lg open:shadow-primary/5 rounded-sm overflow-hidden transition-all duration-300 hover:border-primary/30" 
                  key={faq.q}
                >
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-bold text-text-primary hover:text-primary transition-colors select-none">
                    <span className="pr-4">{faq.q}</span>
                    <span aria-hidden="true" className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-base text-primary transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-transparent">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-border-muted/50 px-6 py-5 bg-background/30">
                    <p className="text-sm leading-7 text-text-secondary">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-background border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="What Our Members Say">
            Client Feedback
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article className="bg-surface-card border border-border-muted border-l-2 border-l-primary/40 rounded-sm p-8 flex h-full flex-col card-hover-effect" key={item.name}>
                <div className="flex items-center justify-between mb-5">
                  <div aria-label="5 out of 5 stars" className="text-primary text-lg tracking-wider">★★★★★</div>
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                    {item.badge}
                  </span>
                </div>
                <div className="relative flex-1">
                  <span className="absolute -top-3 -left-1 font-display text-6xl text-primary/20 leading-none select-none" aria-hidden="true">&ldquo;</span>
                  <blockquote className="pl-5 text-base italic leading-8 text-text-secondary">
                    {item.quote}
                  </blockquote>
                </div>
                <div className="mt-6 border-t border-border-muted pt-5">
                  <p className="font-display text-base font-bold text-text-primary">{item.name}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Executive Leadership Preview ── */}
      <section className="py-20 bg-surface-slate border-b border-border-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">Executive Leadership</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary md:text-4xl">Expertise from the Trading Floor</h2>
              <p className="mt-5 text-base leading-8 text-text-secondary">
                Meet the architects of the Sortino Curriculum. With combined decades of experience in institutional wealth and quantitative research, they lead by execution, not theory.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all"
                href="/team/"
              >
                Meet Our Analysts
                <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-sm border border-border-muted">
                <Image
                  src="/santhosh.webp"
                  alt="Santhosh Asokan — Founder & Lead Trading Mentor"
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="font-display text-sm sm:text-base font-bold text-text-primary">Santhosh Asokan</p>
                  <p className="font-mono text-[8px] sm:text-[10px] text-primary uppercase tracking-widest">Founder & Lead Mentor</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-sm border border-border-muted lg:translate-y-8">
                <Image
                  src="/sathish.webp"
                  alt="Sathish Kumar — Tech Strategist"
                  width={400}
                  height={530}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="font-display text-sm sm:text-base font-bold text-text-primary">Sathish Kumar</p>
                  <p className="font-mono text-[8px] sm:text-[10px] text-primary uppercase tracking-widest">Tech Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden border-b border-border-muted bg-surface-slate py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Position Yourself on the Efficient Frontier
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary md:text-4xl">
            Ready to Position Yourself<br />on the Efficient Frontier?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary">
            Start with SQ Elite Membership, book a free Discovery Call, or reach out directly — we&apos;ll find the right pathway for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="btn-primary" href="/memberships/">
              Join SQ Elite - £90/mo
            </Link>
            <Link className="btn-secondary" href="/booking/">
              Book Discovery Call
            </Link>
            <Link className="btn-secondary" href="/contact/">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Callback Form ── */}
      <section className="py-20 bg-background efficient-frontier-bg">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Analysis Desk
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary">
              Let&apos;s Connect.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-text-secondary">
              If you have questions about our private pathways, SQ Elite access, or the Zoho schedule integrations, submit your details and our team will get in touch.
            </p>
            <div className="mt-8 space-y-4">
              <a
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                href="mailto:support@sortinoquants.com"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                </div>
                <span className="font-bold">support@sortinoquants.com</span>
              </a>
              <a
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                href="https://chat.whatsapp.com/CzFYDFJnpu72F6N5IMux28"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">chat</span>
                </div>
                <span className="font-bold">+44-7442-515-815</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
