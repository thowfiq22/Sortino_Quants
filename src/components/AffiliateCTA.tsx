export default function AffiliateCTA() {
  return (
    <section className="overflow-hidden border-b border-border-muted bg-background py-16 md:py-20" aria-labelledby="partner-heading">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="rounded-sm border border-border-muted bg-gradient-to-r from-surface-slate to-background p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-chart-blue">
                Broker affiliate disclosure
              </p>
              <h2 id="partner-heading" className="mb-4 font-display text-2xl font-bold leading-tight text-text-primary md:text-3xl">
                STARTRADER Partner Information
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary md:text-base">
                If you independently choose to open an account through our link, Sortino Quants may receive a commission. We do not recommend a broker or provide financial advice. Review the broker&apos;s own terms, fees, eligibility rules, and risk disclosures before proceeding.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="https://go.startrader.com/visit/?bta=38379&brand=startrader"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-sm bg-chart-blue px-8 py-3.5 text-center font-display text-xs font-bold uppercase tracking-widest text-background transition-all hover:brightness-110 active:scale-95"
                >
                  View Broker Offer
                </a>
                <a
                  href="https://strex.live/la-com/NIDz7Po8"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-sm border border-chart-blue/50 px-8 py-3.5 text-center font-display text-xs font-bold uppercase tracking-widest text-chart-blue transition-colors hover:bg-chart-blue/5"
                >
                  Partner Information
                </a>
              </div>
            </div>

            <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-full border-4 border-border-muted bg-surface-slate text-center md:h-56 md:w-56" aria-hidden="true">
              <div>
                <span className="material-symbols-outlined mb-3 block text-5xl text-chart-blue">handshake</span>
                <span className="font-display text-lg font-bold text-text-primary">STARTRADER</span>
                <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-text-secondary">Affiliate partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
