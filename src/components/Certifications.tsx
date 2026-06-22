"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Credential {
  id: string;
  name: string;
  image: string;
  description: string;
}

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
    description: "Certification in Bloomberg Market Concepts covering core terminal analytics.",
  },
  {
    id: "bloomberg-challenge",
    name: "Bloomberg Trading Challenge",
    image: "/achievements%20and%20Certifications/Bloomber%20Trading%20Challenge%20Participation%202025.webp",
    description: "Participation in the Bloomberg global portfolio trading challenge.",
  },
  {
    id: "ftmo-challenge",
    name: "FTMO Challenge Passed",
    image: "/achievements%20and%20Certifications/FTMO%20Passed%20Challenge.webp",
    description: "Successfully completed the FTMO Challenge evaluation phase.",
  },
  {
    id: "ftmo-verification",
    name: "FTMO Verification Passed",
    image: "/achievements%20and%20Certifications/FTMO%20Passed%20Verification.webp",
    description: "Successfully completed the FTMO Verification evaluation phase.",
  },
  {
    id: "financial-analyst",
    name: "Financial Analyst Experience",
    image: "/achievements%20and%20Certifications/Financial%20Analyst%20Experience%20Certification%202025.webp",
    description: "Financial analyst experience certificate for 2025.",
  },
  {
    id: "nism-currency",
    name: "NISM Currency Derivatives Certification",
    image: "/achievements%20and%20Certifications/NISM%20Series%20I%20Currency%20Derivatives%20Certification%202023.webp",
    description: "National Institute of Securities Markets Series I Currency Derivatives certification.",
  },
  {
    id: "nism-equity",
    name: "NISM Equity Derivatives Certification",
    image: "/achievements%20and%20Certifications/NISM%20Series%20VIII%20Equity%20Derivatives%20Certification%202021.webp",
    description: "National Institute of Securities Markets Series VIII Equity Derivatives certification.",
  },
];

export default function Certifications() {
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    setSelectedCred(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!selectedCred) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCred]);

  const credentialContent = (credential: Credential) => (
    <>
      <div className="relative mb-4 h-44 w-full overflow-hidden rounded-sm border border-border-muted bg-white p-2">
        <Image
          src={credential.image}
          alt={credential.name}
          fill
          sizes="(max-width: 768px) 85vw, 300px"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <h4 className="mb-1 font-display text-sm font-semibold text-text-primary">
        {credential.name}
      </h4>
      <p className="line-clamp-2 text-xs leading-relaxed text-text-secondary">
        {credential.description}
      </p>
    </>
  );

  return (
    <div className="w-full overflow-hidden border-y border-border-muted bg-surface-slate py-12">
      <div className="mx-auto mb-6 max-w-7xl px-4 md:px-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Verified Credentials
        </h3>
      </div>

      <div className="relative flex w-full items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-slate to-transparent md:w-24" />
        <div className="flex w-full overflow-hidden">
          <div className="animate-scroll flex gap-6 pr-6">
            <div className="flex gap-6">
              {credentials.map((credential) => (
                <button
                  key={credential.id}
                  type="button"
                  ref={(element) => {
                    if (element && triggerRef.current?.dataset.credentialId === credential.id) {
                      triggerRef.current = element;
                    }
                  }}
                  data-credential-id={credential.id}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedCred(credential);
                  }}
                  aria-haspopup="dialog"
                  className="group w-72 flex-shrink-0 cursor-pointer rounded-sm border border-border-muted bg-surface-card p-6 text-left transition-colors duration-300 hover:border-primary/50"
                >
                  {credentialContent(credential)}
                </button>
              ))}
            </div>
            <div className="flex gap-6" aria-hidden="true">
              {credentials.map((credential) => (
                <div
                  key={`${credential.id}-clone`}
                  className="group w-72 flex-shrink-0 rounded-sm border border-border-muted bg-surface-card p-6 text-left"
                >
                  {credentialContent(credential)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-slate to-transparent md:w-24" />
      </div>

      {selectedCred && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="credential-dialog-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeLightbox();
          }}
        >
          <div className="relative w-full max-w-2xl rounded-sm border border-border-muted bg-surface-card p-6 gold-glow md:p-8">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-background/90 text-text-primary transition-colors hover:text-primary"
              aria-label="Close credential preview"
            >
              <span className="material-symbols-outlined" aria-hidden="true">close</span>
            </button>
            <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-muted bg-white p-3">
              <Image
                src={selectedCred.image}
                alt={selectedCred.name}
                fill
                className="object-contain p-3"
                priority
              />
            </div>
            <h3 id="credential-dialog-title" className="mb-2 text-center font-display text-xl font-bold text-text-primary">
              {selectedCred.name}
            </h3>
            <p className="text-center text-sm leading-relaxed text-text-secondary">
              {selectedCred.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
