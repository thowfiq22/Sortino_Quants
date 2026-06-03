import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-surface-slate border-t border-border-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-display text-xl font-bold text-primary">Sortino Quants</div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/disclaimer"
              className="font-mono text-xs text-text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Institutional Disclosure
            </Link>
            <Link
              href="/privacy"
              className="font-mono text-xs text-text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-mono text-xs text-text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Term of Service
            </Link>
            <Link
              href="/disclaimer#risk-framework"
              className="font-mono text-xs text-text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Risk Management Framework
            </Link>
          </div>
        </div>
        <p className="font-sans text-xs text-text-secondary max-w-4xl opacity-60 leading-relaxed text-justify mt-4">
          © {currentYear} Sortino Quants Institutional Research. All rights reserved. Risk Warning: Trading involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}

