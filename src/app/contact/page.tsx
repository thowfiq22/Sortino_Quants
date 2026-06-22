import { createPageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";

export const metadata = createPageMetadata({
  title: "Contact Us | Sortino Quants",
  description: "Contact Sortino Quants about memberships, education programmes, onboarding, and trading mentorship.",
  path: "/contact/",
});

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen pt-16 pb-24 md:pt-24 md:pb-28 efficient-frontier-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        {/* Page Header */}
        <header className="mb-16 max-w-2xl">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4 block">
            CONTACT INSTITUTIONAL DESK
          </span>
          <h1 className="font-display text-4xl font-extrabold text-text-primary mb-6">
            Connect with our Quantitative Research Team.
          </h1>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Contact our team about trading education, memberships, mentorship pathways, onboarding, or partnership enquiries.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h2 className="font-mono text-xs text-text-secondary mb-8 pb-2 border-b border-border-muted inline-block tracking-widest uppercase">
                DIRECT CHANNELS
              </h2>
              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:sortinoquants@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-slate border border-border-muted rounded-sm group-hover:border-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-text-secondary mb-1 tracking-wider">EMAIL INQUIRIES</p>
                    <p className="font-mono text-base text-text-primary font-medium hover:text-primary transition-colors">sortinoquants@gmail.com</p>
                  </div>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/447442515815" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-slate border border-border-muted rounded-sm group-hover:border-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">chat_bubble</span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-text-secondary mb-1 tracking-wider">WHATSAPP TERMINAL</p>
                    <p className="font-mono text-base text-text-primary font-medium hover:text-primary transition-colors">+44-7442-515-815</p>
                  </div>
                </a>
              </div>
            </section>

            {/* Network & Data links */}
            <section>
              <h2 className="font-mono text-xs text-text-secondary mb-8 pb-2 border-b border-border-muted inline-block tracking-widest uppercase">
                SOCIAL CHANNELS
              </h2>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  className="w-11 h-11 flex items-center justify-center border border-border-muted hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
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
                  className="w-11 h-11 flex items-center justify-center border border-border-muted hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
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

            {/* Location Map Accent Overlay */}
            <div className="relative w-full h-48 bg-surface-slate border border-border-muted rounded-sm overflow-hidden group hover:border-primary/30 transition-colors duration-300">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(244,195,103,0.12),transparent_65%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2 animate-bounce">
                    location_on
                  </span>
                  <p className="font-mono text-xs font-semibold text-text-primary tracking-wider uppercase">
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Callback Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
