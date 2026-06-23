import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Education",
    links: [
      { label: "What We Do", href: "/#what-we-do" },
      { label: "1-to-1 Mentorship", href: "/memberships/#training" },
      { label: "Beginner Pathway", href: "/education/" },
      { label: "Advanced Pathway", href: "/education/" },
    ],
  },
  {
    title: "SQ Elite",
    links: [
      { label: "Join — £90/mo", href: "/memberships/" },
      { label: "What's Inside", href: "/memberships/" },
      { label: "CPA Free Access", href: "/memberships/" },
      { label: "IB Free Access", href: "/memberships/" },
      { label: "Discovery Call", href: "/booking/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Team", href: "/team/" },
      { label: "Revenue Transparency", href: "/transparency/" },
      { label: "FAQ", href: "/#faq" },
      { label: "support@sortinoquants.com", href: "mailto:support@sortinoquants.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-surface-slate">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* ── Top: Logo + Links ── */}
        <div className="grid gap-10 border-b border-border-muted pb-10 lg:grid-cols-[1.2fr_2fr]">
          {/* Left column */}
          <div>
            <Link className="inline-flex flex-col items-center select-none group" href="/" aria-label="Sortino Quants home">
              <Image
                src="/sortino.webp"
                alt="Sortino Quants"
                width={280}
                height={166}
                className="h-16 md:h-20 w-auto object-contain -ml-3"
              />
              <span className="text-[5px] sm:text-[6px] font-mono tracking-[0.04em] text-primary/90 uppercase mt-1 whitespace-nowrap">
                Position Yourself on the Efficient Frontier
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary">
              A financial markets research and education platform focused on quantitative analysis, risk-adjusted trading, and professional trader development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border-muted bg-surface-card px-4 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider transition-colors hover:border-primary/30 hover:text-primary"
                href="https://go.startrader.com/visit/?bta=38379&brand=startrader"
                rel="noopener noreferrer sponsored"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">handshake</span>
                CPA Partner Link
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border-muted bg-surface-card px-4 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider transition-colors hover:border-primary/30 hover:text-primary"
                href="https://strex.live/la-com/NIDz7Po8"
                rel="noopener noreferrer sponsored"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">swap_horiz</span>
                IB Partner Link
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border-muted bg-surface-card px-4 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider transition-colors hover:border-status-success/50 hover:text-status-success"
                href="https://chat.whatsapp.com/CzFYDFJnpu72F6N5IMux28"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
          {/* Right column — link groups */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <nav aria-label={`${column.title} footer links`} key={column.title}>
                <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="inline-flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-primary"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p className="mt-8 text-xs leading-6 text-text-secondary/80">
          <strong className="text-text-secondary">Disclaimer:</strong> All content is provided solely for educational and informational purposes. Sortino Quants Ltd does not provide investment advice, portfolio management, or regulated financial advisory services. Any views expressed are analyst opinions and should not be considered investment recommendations. Trading financial instruments involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Sortino Quants Ltd is registered in England and Wales.
        </p>

        {/* ── Legal links ── */}
        <nav aria-label="Legal links" className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs">
          <Link className="text-text-secondary underline underline-offset-4 hover:text-primary transition-colors" href="/privacy/">Privacy Policy</Link>
          <Link className="text-text-secondary underline underline-offset-4 hover:text-primary transition-colors" href="/terms/">Terms of Service</Link>
          <Link className="text-text-secondary underline underline-offset-4 hover:text-primary transition-colors" href="/disclaimer/">Disclaimer</Link>
          <Link className="text-text-secondary underline underline-offset-4 hover:text-primary transition-colors" href="/transparency/">Revenue Transparency</Link>
        </nav>

        {/* ── Copyright ── */}
        <p className="mt-6 text-xs leading-6 text-text-secondary/70">
          © 2026 Sortino Quants Ltd. All rights reserved. London, United Kingdom.{" "}
          <a className="hover:text-primary transition-colors" href="mailto:support@sortinoquants.com">support@sortinoquants.com</a>
        </p>
      </div>
    </footer>
  );
}
