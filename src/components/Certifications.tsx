"use client";

import { useState } from "react";
import Image from "next/image";

interface Credential {
  id: string;
  name: string;
  image: string;
  description: string;
}

export default function Certifications() {
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);

  const credentials: Credential[] = [
    {
      id: "cisi",
      name: "CISI Fundamentals of Financial Services",
      image: "/achievements%20and%20Certifications/CISI%20Fundamenta%20of%20Financial%20Services%202025.webp",
      description: "Chartered Institute for Securities & Investment - 2025 Professional Credentials.",
    },
    {
      id: "bloomberg-bmc",
      name: "Bloomberg Market Concepts (BMC)",
      image: "/achievements%20and%20Certifications/Bloomberg%20Market%20Concepts%20BMC%20Certification%202024.webp",
      description: "Earning certification in Bloomberg Market Concepts covering core terminal analytics.",
    },
    {
      id: "bloomberg-challenge",
      name: "Bloomberg Trading Challenge",
      image: "/achievements%20and%20Certifications/Bloomber%20Trading%20Challenge%20Participation%202025.webp",
      description: "Active participant in the institutional Bloomberg global portfolio trading challenge.",
    },
    {
      id: "ftmo-challenge",
      name: "FTMO Challenge Passed",
      image: "/achievements%20and%20Certifications/FTMO%20Passed%20Challenge.webp",
      description: "Successfully evaluated under professional prop firm risk management targets.",
    },
    {
      id: "ftmo-verification",
      name: "FTMO Verification Passed",
      image: "/achievements%20and%20Certifications/FTMO%20Passed%20Verification.webp",
      description: "Completed and passed the rigorous institutional trading verification phase.",
    },
    {
      id: "financial-analyst",
      name: "Financial Analyst Experience",
      image: "/achievements%20and%20Certifications/Financial%20Analyst%20Experience%20Certification%202025.webp",
      description: "Verified professional financial analyst experience certificate for 2025.",
    },
    {
      id: "nism-currency",
      name: "NISM Currency Derivatives Certification",
      image: "/achievements%20and%20Certifications/NISM%20Series%20I%20Currency%20Derivatives%20Certification%202023.webp",
      description: "National Institute of Securities Markets - Series I Currency Derivatives certified.",
    },
    {
      id: "nism-equity",
      name: "NISM Equity Derivatives Certification",
      image: "/achievements%20and%20Certifications/NISM%20Series%20VIII%20Equity%20Derivatives%20Certification%202021.webp",
      description: "National Institute of Securities Markets - Series VIII Equity Derivatives certified.",
    },
  ];

  return (
    <div className="w-full bg-surface-slate py-12 border-y border-border-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
        <h4 className="font-mono text-xs text-primary uppercase tracking-widest">
          Verified Credentials
        </h4>
      </div>

      {/* Scrolling Belt Container */}
      <div className="relative w-full flex items-center">
        {/* Left Blur Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-slate to-transparent z-10 pointer-events-none" />

        {/* Scrolling Inner */}
        <div className="flex overflow-hidden w-full select-none">
          <div className="flex animate-scroll gap-6">
            {/* Duplicated list to achieve continuous infinite marquee loop */}
            {[...credentials, ...credentials, ...credentials].map((cred, idx) => (
              <div
                key={`${cred.id}-${idx}`}
                onClick={() => setSelectedCred(cred)}
                className="w-72 flex-shrink-0 bg-surface-card border border-border-muted p-6 rounded-sm cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative w-full h-44 bg-background border border-border-muted rounded-sm mb-4 overflow-hidden group">
                  <Image
                    src={cred.image}
                    alt={cred.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-background/90 text-primary border border-primary/20 text-xs px-3 py-1.5 rounded-sm font-mono tracking-widest uppercase">
                      Enlarge View
                    </span>
                  </div>
                </div>
                <h5 className="font-display text-sm font-semibold text-text-primary mb-1">
                  {cred.name}
                </h5>
                <p className="text-xs text-text-secondary line-clamp-1">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Blur Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-slate to-transparent z-10 pointer-events-none" />
      </div>

      {/* Lightbox Modal */}
      {selectedCred && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4">
          {/* Close button overlay */}
          <button
            onClick={() => setSelectedCred(null)}
            className="absolute top-6 right-6 text-text-primary hover:text-primary transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Expanded Card Panel */}
          <div className="bg-surface-card border border-border-muted p-6 md:p-8 rounded-sm max-w-2xl w-full flex flex-col items-center gold-glow">
            <div className="relative w-full aspect-[4/3] bg-background border border-border-muted rounded-sm mb-6 overflow-hidden">
              <Image
                src={selectedCred.image}
                alt={selectedCred.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary text-center mb-2">
              {selectedCred.name}
            </h3>
            <p className="text-sm text-text-secondary text-center leading-relaxed">
              {selectedCred.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
