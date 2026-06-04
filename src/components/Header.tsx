"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Analysis", href: "/" },
    { name: "Our Quants", href: "/team" },
    { name: "Memberships", href: "/memberships" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-muted h-20 md:h-24">
      <div className="flex justify-between items-center h-full px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/sortino.png"
              alt="Sortino Quants"
              width={180}
              height={50}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
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
            href="/memberships"
            className="hidden md:inline-flex bg-primary text-background px-6 py-2.5 rounded-sm font-display font-bold text-xs hover:scale-95 transition-all uppercase tracking-widest"
          >
            Explore Memberships
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
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
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 md:top-24 left-0 w-full bg-surface-slate/95 backdrop-blur-lg border-b border-border-muted z-40 py-6 px-6 flex flex-col gap-6 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xs font-mono uppercase tracking-widest block py-2 ${
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
            href="/memberships"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary text-background py-3.5 rounded-sm font-display font-bold text-xs uppercase tracking-widest mt-2 hover:bg-primary/90 transition-colors"
          >
            Explore Memberships
          </Link>
        </div>
      )}
    </nav>
  );
}

