"use client";

import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen py-32 efficient-frontier-bg">
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
            Direct access for institutional partners, professional traders, and qualified investors seeking risk-managed capital strategies.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h3 className="font-mono text-xs text-text-secondary mb-8 pb-2 border-b border-border-muted inline-block tracking-widest uppercase">
                DIRECT CHANNELS
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-slate border border-border-muted rounded-sm group-hover:border-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-text-secondary mb-1 tracking-wider">EMAIL INQUIRIES</p>
                    <p className="font-mono text-base text-text-primary font-medium">desk@sortinoquants.com</p>
                  </div>
                </div>
                {/* WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-slate border border-border-muted rounded-sm group-hover:border-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-xl">chat_bubble</span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-text-secondary mb-1 tracking-wider">WHATSAPP TERMINAL</p>
                    <p className="font-mono text-base text-text-primary font-medium">+44 20 7946 0123</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Network & Data links */}
            <section>
              <h3 className="font-mono text-xs text-text-secondary mb-8 pb-2 border-b border-border-muted inline-block tracking-widest uppercase">
                NETWORK & DATA
              </h3>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 flex items-center justify-center border border-border-muted hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    account_balance
                  </span>
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-border-muted hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    monitoring
                  </span>
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-border-muted hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    terminal
                  </span>
                </a>
              </div>
            </section>

            {/* Location Map Accent Overlay */}
            <div className="relative w-full h-48 bg-surface-slate border border-border-muted rounded-sm overflow-hidden group hover:border-primary/30 transition-colors duration-300">
              <div className="absolute inset-0 opacity-15 grayscale filter bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2 animate-bounce">
                    location_on
                  </span>
                  <p className="font-mono text-xs font-semibold text-text-primary tracking-wider uppercase">
                    London • Hong Kong • New York
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
