import Image from "next/image";

export default function AffiliateCTA() {
  return (
    <section className="py-20 bg-background border-b border-border-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="bg-gradient-to-r from-surface-slate to-background border border-border-muted rounded-sm p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                Official Partnership: <span className="text-primary">STARTRADER</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                Execute your Sortino strategies with institutional liquidity. Our members receive exclusive rebate structures and priority execution through our STARTRADER affiliation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="https://www.startrader.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-background text-center px-8 py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                >
                  Open Trading Account
                </a>
                <a
                  href="https://www.startrader.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary/50 text-primary text-center px-8 py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all whitespace-nowrap"
                >
                  View Rebate Tiers
                </a>
              </div>
            </div>

            <div className="relative w-64 h-64 border-4 border-border-muted rounded-full overflow-hidden bg-surface-slate flex items-center justify-center flex-shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOVd-U8mnlU1_ZNAM2LottwHOSIfxl4QzZPKfrnI4XSkmqCaNe8PswStfyc_NIMapIO_T7WC-aYsFC5tZ_BtYKz2_XTCmugf3zHmNggPBg74K_3MHV5eLWF_xS1Vz1mes_6TJWjfHjAuOwVDo1jYF4sU04RToE9clPEyjj3tlFtzWVP3AfTT-m7BWUSXmDsZaUkuGOQ64WeudzPEsNoRXCwRs8bU0MHW4l4lFWUGJNbw9gn6OdsVSrU_7CXOOGP0A20K7CF4xUQQ"
                alt="STARTRADER Partner Display"
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
