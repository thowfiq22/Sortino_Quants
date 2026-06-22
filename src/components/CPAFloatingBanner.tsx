"use client";

import { useEffect, useState } from "react";

export default function CPAFloatingBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const scrollPercent = (window.scrollY / scrollableHeight) * 100;
      if (scrollPercent > 60) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Broker affiliate offer"
      className="animate-fade-in fixed bottom-4 left-4 right-4 z-40 rounded-sm border border-primary/30 bg-surface-slate p-4 shadow-2xl gold-rim md:bottom-6 md:left-auto md:right-6 md:w-96 md:p-6"
    >
      <div className="relative">
        <button
          type="button"
          onClick={dismiss}
          className="absolute -right-2 -top-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-text-secondary transition-colors hover:text-primary"
          aria-label="Close broker affiliate offer"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">close</span>
        </button>

        <div className="flex flex-col gap-4 pr-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              STARTRADER affiliate disclosure
            </span>
          </div>

          <h2 className="font-display text-base font-bold leading-tight text-text-primary">
            Three Months of SQ Elite Access
          </h2>

          <p className="font-sans text-xs leading-relaxed text-text-secondary">
            Eligible users who independently open and fund an account through our affiliate link may receive three months of SQ Elite access. Sortino Quants may receive a commission. Broker terms and eligibility apply.
          </p>

          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://go.startrader.com/visit/?bta=38379&brand=startrader"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex min-h-11 flex-1 items-center justify-center rounded-sm bg-primary px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-widest text-background transition-all hover:brightness-110 active:scale-95"
            >
              View Broker Offer
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-11 rounded-sm border border-border-muted px-4 py-3 font-display text-xs font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-primary"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
