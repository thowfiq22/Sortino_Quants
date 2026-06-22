"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Our Quants", href: "/team" },
    { name: "Memberships", href: "/memberships" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-muted h-20 md:h-24">
      <nav aria-label="Primary navigation" className="flex justify-between items-center h-full px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/SortinoQuants1.webp"
              alt="Sortino Quants"
              width={180}
              height={50}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Action Button & Menu Toggle */}
        <div className="flex gap-6 items-center">
          <Link
            href="/booking"
            className="hidden xl:inline-flex min-h-11 items-center bg-primary text-background px-6 py-2.5 rounded-sm font-display font-bold text-xs hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest"
          >
            Book a Session
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="xl:hidden min-h-11 min-w-11 inline-flex items-center justify-center text-text-primary hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden absolute top-20 md:top-24 left-0 w-full bg-surface-slate/98 backdrop-blur-lg border-b border-border-muted z-40 py-6 px-6 flex flex-col gap-3 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`min-h-11 flex items-center text-xs font-mono uppercase tracking-widest py-2 ${
                pathname === link.href
                  ? "text-primary border-l-2 border-primary pl-3"
                  : "text-text-secondary pl-3"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile Action Button */}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="w-full min-h-11 flex items-center justify-center text-center bg-primary text-background py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest mt-2 hover:bg-primary/90 transition-colors"
          >
            Book a Session
          </Link>
        </nav>
      )}
    </header>
  );
}

