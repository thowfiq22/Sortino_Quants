import { createPageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";

export const metadata = createPageMetadata({
  title: "Contact Us | Sortino Quants",
  description: "Contact Sortino Quants about memberships, education programmes, onboarding, and trading mentorship.",
  path: "/contact/",
});

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen efficient-frontier-bg">
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden border-b border-border-muted">
        <div className="efficient-frontier-curve animate-slow-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary mb-5">
            <span className="material-symbols-outlined text-sm">mail</span>
            Contact Institutional Desk
          </div>
          <h1 className="font-display text-4xl font-extrabold text-text-primary md:text-5xl">
            Connect with our Quantitative Research Team.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-text-secondary leading-8">
            Contact our team about trading education, memberships, mentorship pathways, onboarding, or partnership enquiries.
          </p>
        </div>
      </div>

      {/* ── Content Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="space-y-10">
            {/* Direct Channels */}
            <section>
              <h2 className="font-mono text-xs text-primary mb-6 uppercase tracking-[0.18em] font-bold">
                Direct Channels
              </h2>
              <div className="space-y-5">
                {/* Email */}
                <a href="mailto:support@sortinoquants.com" className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-secondary tracking-wider uppercase">Email Inquiries</p>
                    <p className="font-mono text-sm text-text-primary font-bold mt-1 group-hover:text-primary transition-colors">support@sortinoquants.com</p>
                  </div>
                </a>
                {/* WhatsApp */}
                <a href="https://chat.whatsapp.com/CzFYDFJnpu72F6N5IMux28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">chat</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-secondary tracking-wider uppercase">WhatsApp</p>
                    <p className="font-mono text-sm text-text-primary font-bold mt-1 group-hover:text-primary transition-colors">+44-7442-515-815</p>
                  </div>
                </a>
              </div>
            </section>

            {/* Social Channels */}
            <section>
              <h2 className="font-mono text-xs text-primary mb-6 uppercase tracking-[0.18em] font-bold">
                Social Channels
              </h2>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-card border border-border-muted hover:border-chart-blue hover:bg-chart-blue/10 text-text-secondary hover:text-chart-blue transition-all duration-300"
                  href="https://www.linkedin.com/in/sortinoquantsltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-card border border-border-muted hover:border-status-error hover:bg-status-error/10 text-text-secondary hover:text-status-error transition-all duration-300"
                  href="https://www.youtube.com/@SortinoQuants"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163c-.272-1.022-1.028-1.828-2.023-2.102-1.777-.478-8.975-.478-8.975-.478s-7.198 0-8.975.478c-.995.274-1.75 1.08-2.023 2.102-.48 1.83-.48 5.656-.48 5.656s0 3.827.48 5.656c.272 1.022 1.028 1.828 2.023 2.102 1.777.478 8.975.478 8.975.478s7.198 0 8.975-.478c.995-.274 1.75-1.08 2.023-2.102.48-1.83.48-5.656.48-5.656s0-3.827-.48-5.656zm-14.12 9.47v-6.937l6.63 3.472-6.63 3.465z"/>
                  </svg>
                </a>
              </div>
            </section>

            {/* Location */}
            <div className="bg-surface-card border border-border-muted rounded-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(244,195,103,0.12),transparent_65%)]" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-secondary tracking-wider uppercase">Registered Office</p>
                  <p className="font-display text-base font-bold text-text-primary mt-1">London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
