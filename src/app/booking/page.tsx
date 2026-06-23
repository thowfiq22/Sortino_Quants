import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Book a Discovery Call | Sortino Quants",
  description: "Contact Sortino Quants to arrange a discovery call about education, membership, and mentorship pathways.",
  path: "/booking/",
});
export default function Booking() {
  return (
    <div className="w-full bg-background min-h-screen pt-16 pb-24 md:pt-24 md:pb-28 relative overflow-hidden flex flex-col items-center">
      {/* Background radial glow */}
      <div className="efficient-frontier-curve animate-slow-pulse" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-4">
            Discovery Call Enquiries
          </span>
          <h1 className="font-display text-4xl font-extrabold text-text-primary mb-6">
            Book a Discovery Call
          </h1>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Schedule a brief 1-to-1 introductory call with our quantitative research desk. We will discuss your trading background, review the training pathways, and determine the correct starting point.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="w-full max-w-4xl bg-surface-card border border-border-muted rounded-sm overflow-hidden gold-rim flex flex-col">
          <div className="bg-surface-slate border-b border-border-muted px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                Interactive Schedule Terminal
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
              <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
              <span className="w-2.5 h-2.5 bg-border-muted rounded-full" />
            </div>
          </div>

          <div className="flex-1 bg-surface-card flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
            <span className="material-symbols-outlined text-primary text-6xl mb-6">
              calendar_month
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Booking Calendar Coming Soon
            </h2>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed max-w-lg mb-10">
              Our online booking system is being set up. In the meantime, please reach out directly to schedule your discovery call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@sortinoquants.com"
                className="bg-primary text-background text-center px-8 py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                Email Us
              </a>
              <a
                href="https://chat.whatsapp.com/CzFYDFJnpu72F6N5IMux28"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary/50 text-primary text-center px-8 py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Info Disclaimer */}
        <div className="mt-8 bg-surface-slate border border-border-muted/50 p-6 max-w-2xl text-center rounded-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary/60 text-lg">info</span>
          <p className="text-text-secondary font-sans text-xs leading-relaxed opacity-80">
            Having trouble booking? You can also email us directly at{" "}
            <a href="mailto:support@sortinoquants.com" className="text-primary hover:underline">
              support@sortinoquants.com
            </a>{" "}
            or message our{" "}
            <a
              href="https://chat.whatsapp.com/CzFYDFJnpu72F6N5IMux28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WhatsApp terminal
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}


