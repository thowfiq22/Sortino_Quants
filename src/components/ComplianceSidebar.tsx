"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Risk Disclaimer", href: "/disclaimer", icon: "shield" },
  { label: "Privacy Policy", href: "/privacy", icon: "lock" },
  { label: "Terms & Conditions", href: "/terms", icon: "gavel" },
  { label: "Risk Framework", href: "/disclaimer#risk-framework", icon: "query_stats" },
];

export default function ComplianceSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  const navigation = (mobile = false) => (
    <nav
      aria-label="Legal and compliance"
      className={mobile ? "flex min-w-max gap-2" : "flex flex-col"}
    >
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `flex min-h-11 items-center gap-2 rounded-sm border px-4 py-2 text-sm ${active ? "border-primary text-primary" : "border-border-muted text-text-secondary"}`
                : `flex min-h-11 items-center gap-3 border-l-2 px-4 py-3 transition-colors ${active ? "nav-item-active border-primary text-primary" : "border-transparent text-text-secondary hover:bg-surface-slate hover:text-text-primary"}`
            }
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <div className="col-span-full overflow-x-auto pb-2 lg:hidden">
        {navigation(true)}
      </div>
      <aside className="hidden lg:col-span-3 lg:block">
        <div className="sticky top-32 space-y-2">
          <div className="mb-6 border-l-2 border-border-muted pl-4 font-mono text-xs uppercase tracking-widest text-text-secondary">
            Compliance Directory
          </div>
          {navigation()}

          <div className="mt-12 rounded-sm border border-border-muted bg-surface-card p-6">
            <p className="mb-2 font-mono text-xs uppercase text-primary">Compliance Contact</p>
            <p className="mb-4 text-xs leading-relaxed text-text-secondary">
              Questions about these policies or your personal data?
            </p>
            <a className="flex min-h-11 items-center gap-2 break-all font-mono text-xs text-primary hover:underline" href="mailto:support@sortinoquants.com">
              support@sortinoquants.com
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

