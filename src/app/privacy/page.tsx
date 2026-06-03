"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Privacy() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "nav-item-active py-3 px-4 transition-all flex items-center gap-3"
      : "py-3 px-4 transition-all border-l-2 border-transparent hover:bg-surface-slate group flex items-center gap-3";
  };

  const getIconClass = (path: string) => {
    return pathname === path ? "text-primary text-sm" : "text-text-secondary text-sm group-hover:text-primary";
  };

  const getTextClass = (path: string) => {
    return pathname === path ? "font-sans text-sm font-medium text-primary" : "font-sans text-sm text-text-secondary group-hover:text-text-primary";
  };

  return (
    <div className="w-full bg-background min-h-screen py-32 efficient-frontier-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Side Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              <div className="font-mono text-xs text-text-secondary uppercase mb-6 tracking-widest border-l-2 border-border-muted pl-4">
                Compliance Directory
              </div>
              <nav className="flex flex-col">
                <Link className={getLinkClass("/disclaimer")} href="/disclaimer">
                  <span className={`material-symbols-outlined ${getIconClass("/disclaimer")}`}>shield</span>
                  <span className={getTextClass("/disclaimer")}>Risk Disclaimer</span>
                </Link>
                <Link className={getLinkClass("/privacy")} href="/privacy">
                  <span className={`material-symbols-outlined ${getIconClass("/privacy")}`}>lock</span>
                  <span className={getTextClass("/privacy")}>Privacy Policy</span>
                </Link>
                <Link className={getLinkClass("/terms")} href="/terms">
                  <span className={`material-symbols-outlined ${getIconClass("/terms")}`}>gavel</span>
                  <span className={getTextClass("/terms")}>Terms & Conditions</span>
                </Link>
                <Link className={getLinkClass("/disclaimer#risk-framework")} href="/disclaimer#risk-framework">
                  <span className={`material-symbols-outlined text-text-secondary text-sm`}>query_stats</span>
                  <span className={`font-sans text-sm text-text-secondary hover:text-text-primary`}>Risk Framework</span>
                </Link>
              </nav>

              <div className="mt-12 p-6 bg-surface-card border border-border-muted rounded-sm">
                <div className="font-mono text-xs text-primary mb-2 uppercase">Institutional Helpdesk</div>
                <p className="text-text-secondary text-xs mb-4 leading-relaxed">
                  Questions regarding our legal framework or compliance standards?
                </p>
                <a className="text-primary font-mono text-xs hover:underline flex items-center gap-2" href="mailto:compliance@sortinoquants.com">
                  compliance@sortinoquants.com
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <div className="lg:col-span-9 space-y-16">
            <header className="mb-12 border-b border-border-muted pb-8">
              <div className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                Data Sovereignty & Encryption
              </div>
              <h1 className="font-display text-4xl font-extrabold text-primary leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-6 text-base text-text-secondary max-w-2xl leading-relaxed">
                Your data is treated with the same precision as our quantitative models. We adhere to GDPR and CCPA standards to ensure absolute privacy for our institutional and retail clients.
              </p>
            </header>

            {/* 1. Privacy Disclosures */}
            <section className="scroll-mt-32" id="privacy">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-8 w-1 bg-primary" />
                <h2 className="font-display text-2xl font-bold text-primary">01. Data Governance</h2>
              </div>
              <div className="bg-surface-slate border border-border-muted p-8 space-y-8 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-background border border-border-muted rounded-sm">
                    <span className="material-symbols-outlined text-primary mb-3 text-2xl block">database</span>
                    <h4 className="font-mono text-xs text-primary mb-2 uppercase">Storage</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Encrypted cold-storage for all user PII (Personally Identifiable Information).
                    </p>
                  </div>
                  <div className="p-6 bg-background border border-border-muted rounded-sm">
                    <span className="material-symbols-outlined text-primary mb-3 text-2xl block">share_off</span>
                    <h4 className="font-mono text-xs text-primary mb-2 uppercase">Non-Disclosure</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      We never sell, rent, or lease our email lists or user telemetry to third parties.
                    </p>
                  </div>
                  <div className="p-6 bg-background border border-border-muted rounded-sm">
                    <span className="material-symbols-outlined text-primary mb-3 text-2xl block">mark_email_read</span>
                    <h4 className="font-mono text-xs text-primary mb-2 uppercase">Communication</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Strict opt-in protocol for all research alerts and curriculum updates.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border-muted/50">
                  <h4 className="font-mono text-xs text-text-primary uppercase tracking-wider">Telemetry & Cookies</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    We utilize essential cookies to maintain session integrity within the Sortino dashboard and terminal. Analytical telemetry is anonymized and used solely to improve our algorithm&apos;s computational efficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* Institutional Affirmation */}
            <section className="border-t border-border-muted pt-16">
              <div className="text-center space-y-6 max-w-xl mx-auto">
                <span className="material-symbols-outlined text-primary text-4xl block">verified_user</span>
                <h3 className="font-display text-xl font-bold text-text-primary">Institutional Affirmation</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  By continuing to use the Sortino Quants platform, you acknowledge that you have read, understood, and agreed to the privacy protocols defined above.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="px-4 py-2 bg-surface-slate border border-border-muted rounded-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-status-success text-xs">check_circle</span>
                    <span className="font-mono text-[10px] text-text-primary">SEC COMPLIANCE READY</span>
                  </div>
                  <div className="px-4 py-2 bg-surface-slate border border-border-muted rounded-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-status-success text-xs">check_circle</span>
                    <span className="font-mono text-[10px] text-text-primary">GDPR COMPLIANT</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
