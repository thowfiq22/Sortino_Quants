import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-surface-slate border-t border-border-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/SortinoQuants1.webp"
              alt="Sortino Quants"
              width={180}
              height={50}
              className="h-12 w-auto object-contain brightness-90 hover:brightness-100 transition-all"
            />
          </Link>
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
              Terms of Service
            </Link>
            <Link
              href="/disclaimer#risk-framework"
              className="font-mono text-xs text-text-secondary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Risk Management Framework
            </Link>
          </div>
        </div>
        <p className="font-sans text-xs text-text-secondary max-w-4xl opacity-80 leading-relaxed mt-4">
          © {currentYear} Sortino Quants. All rights reserved. Risk warning:
          trading involves significant risk of loss and is not suitable for all
          investors. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}

