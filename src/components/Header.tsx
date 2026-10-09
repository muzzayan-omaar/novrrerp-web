"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── inline icons (no lucide dependency) ─── */
function IconBox({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "cyan" | "slate" | "emerald" | "amber" | "violet";
}) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-nova-blue ring-blue-100",
    cyan: "bg-cyan-50 text-cyan-600 ring-cyan-100",
    slate: "bg-slate-100 text-slate-600 ring-slate-200",
    emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
    violet: "bg-violet-50 text-violet-600 ring-violet-100",
  };
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

const svgProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Icons = {
  pos: (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h4M7 13h10" />
    </svg>
  ),
  inventory: (
    <svg {...svgProps}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.3 7 12 12l8.7-5M12 22V12" />
    </svg>
  ),
  sales: (
    <svg {...svgProps}>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  customers: (
    <svg {...svgProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  suppliers: (
    <svg {...svgProps}>
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9 5.5 3.5A1 1 0 0 1 6.4 3h11.2a1 1 0 0 1 .9.5L21 9" />
      <path d="M12 13v4M9 15h6" />
    </svg>
  ),
  stockCount: (
    <svg {...svgProps}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  expenses: (
    <svg {...svgProps}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
  payroll: (
    <svg {...svgProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  ),
  bank: (
    <svg {...svgProps}>
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  ),
  efris: (
    <svg {...svgProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  reports: (
    <svg {...svgProps}>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 2 5-6" />
    </svg>
  ),
  staff: (
    <svg {...svgProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  shop: (
    <svg {...svgProps}>
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
      <path d="M10 13h4" />
    </svg>
  ),
  branches: (
    <svg {...svgProps}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  franchise: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
    </svg>
  ),
  guide: (
    <svg {...svgProps}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  support: (
    <svg {...svgProps}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  chevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

type MenuKey = "product" | "solutions" | "resources" | null;

type MenuItem = {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  tone: "blue" | "cyan" | "slate" | "emerald" | "amber" | "violet";
};

type MenuColumn = {
  heading: string;
  items: MenuItem[];
};

const productColumns: MenuColumn[] = [
  {
    heading: "Sell",
    items: [
      { href: "/product/pos", label: "Point of Sale", desc: "Barcode, serials, offline sales", icon: Icons.pos, tone: "blue" },
      { href: "/product/sales", label: "Quotes & Sales", desc: "Proforma → cash with VAT", icon: Icons.sales, tone: "cyan" },
      { href: "/product/sales", label: "Customers", desc: "Credit limits & history", icon: Icons.customers, tone: "slate" },
    ],
  },
  {
    heading: "Stock",
    items: [
      { href: "/product/inventory", label: "Multi-store inventory", desc: "Transit, multi-UOM, serials", icon: Icons.inventory, tone: "emerald" },
      { href: "/product/inventory", label: "Stock counts", desc: "Counts with approval gate", icon: Icons.stockCount, tone: "amber" },
      { href: "/product/inventory", label: "Suppliers & POs", desc: "Orders & reliability", icon: Icons.suppliers, tone: "violet" },
    ],
  },
  {
    heading: "Money & people",
    items: [
      { href: "/product/finance", label: "Expenses & bank", desc: "CapEx/OpEx, reconciliation", icon: Icons.expenses, tone: "blue" },
      { href: "/product/finance", label: "Payroll", desc: "Staff pay & tax engine", icon: Icons.payroll, tone: "cyan" },
      { href: "/product/finance", label: "Staff & roles", desc: "Access across stores", icon: Icons.staff, tone: "slate" },
    ],
  },
  {
    heading: "Control",
    items: [
      { href: "/compliance", label: "EFRIS & compliance", desc: "Fiscal-ready receipts", icon: Icons.efris, tone: "emerald" },
      { href: "/product", label: "Reports", desc: "Sales, stock, ops analytics", icon: Icons.reports, tone: "amber" },
    ],
  },
];

const solutionColumns: MenuColumn[] = [
  {
    heading: "By business type",
    items: [
      { href: "/solutions#single", label: "Single shop", desc: "One counter, clear stock", icon: Icons.shop, tone: "blue" },
      { href: "/solutions#multi", label: "Multi-branch retail", desc: "Transfers & shared catalog", icon: Icons.branches, tone: "cyan" },
      { href: "/solutions#franchise", label: "Growing franchise", desc: "Packages & governance", icon: Icons.franchise, tone: "violet" },
    ],
  },
];

const resourceColumns: MenuColumn[] = [
  {
    heading: "Learn",
    items: [
      { href: "/compliance", label: "Uganda & EFRIS", desc: "Local compliance overview", icon: Icons.efris, tone: "emerald" },
      { href: "/product", label: "Product tour", desc: "See modules at a glance", icon: Icons.guide, tone: "blue" },
    ],
  },
  {
    heading: "Company",
    items: [
      { href: "/start", label: "Contact / demo", desc: "Talk to the team", icon: Icons.support, tone: "cyan" },
      { href: "/privacy", label: "Privacy", desc: "How we handle data", icon: Icons.guide, tone: "slate" },
      { href: "/terms", label: "Terms", desc: "Service terms", icon: Icons.guide, tone: "slate" },
    ],
  },
];

function MegaPanel({
  columns,
  onNavigate,
}: {
  columns: MenuColumn[];
  onNavigate: () => void;
}) {
  const colCount = columns.length;
  const gridClass =
    colCount >= 4
      ? "lg:grid-cols-4"
      : colCount === 3
        ? "lg:grid-cols-3"
        : colCount === 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1";

  return (
    <div className="w-full border-t border-slate-200 bg-white shadow-[0_24px_48px_-12px_rgba(15,27,51,0.12)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-2 py-8 sm:grid-cols-2 ${gridClass}`}>
          {columns.map((col) => (
            <div key={col.heading} className="min-w-0 px-2">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                {col.heading}
              </p>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <IconBox tone={item.tone}>{item.icon}</IconBox>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-nova-900 group-hover:text-nova-blue">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 py-3.5">
          <p className="text-xs text-slate-500">
            One system for sell · stock · pay · compliance
          </p>
          <Link
            href="/start"
            onClick={onNavigate}
            className="text-xs font-semibold text-nova-blue hover:text-nova-blue-dark"
          >
            Start free →
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavTrigger({
  label,
  active,
  onOpen,
}: {
  label: string;
  active: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-slate-100 text-nova-900"
          : "text-slate-700 hover:bg-slate-50 hover:text-nova-900"
      }`}
      aria-expanded={active}
    >
      {label}
      <span
        className={`text-slate-400 transition-transform duration-200 ${active ? "rotate-180 text-nova-blue" : ""}`}
      >
        {Icons.chevron}
      </span>
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  function openMenu(key: MenuKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 120);
  }

  function closeNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(null);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeNow();
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeNow();
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/favicon.png" alt="" className="h-8 w-auto" />
          <span className="font-brand text-[15px] leading-none text-nova-900 sm:text-base">
            NOVRR{" "}
            <span className="text-nova-blue">ERP</span>
          </span>
        </Link>

        {/* Desktop nav — triggers only; panel is full-width below */}
        <nav ref={navRef} className="hidden items-center gap-0.5 lg:flex">
          <NavTrigger
            label="Product"
            active={menu === "product"}
            onOpen={() => openMenu("product")}
          />
          <NavTrigger
            label="Solutions"
            active={menu === "solutions"}
            onOpen={() => openMenu("solutions")}
          />
          <Link
            href="/pricing"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-nova-900"
            onMouseEnter={scheduleClose}
          >
            Pricing
          </Link>
          <NavTrigger
            label="Resources"
            active={menu === "resources"}
            onOpen={() => openMenu("resources")}
          />
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL || "#"}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-nova-900"
          >
            Login
          </a>
          <Link
            href="/start"
            className="rounded-full bg-nova-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-nova-blue-dark"
          >
            Start free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-width mega menu (ClickUp-style edge-to-edge) */}
      {menu === "product" && (
        <div
          className="absolute left-0 right-0 top-full hidden lg:block"
          onMouseEnter={() => openMenu("product")}
        >
          <MegaPanel columns={productColumns} onNavigate={closeNow} />
        </div>
      )}
      {menu === "solutions" && (
        <div
          className="absolute left-0 right-0 top-full hidden lg:block"
          onMouseEnter={() => openMenu("solutions")}
        >
          <MegaPanel columns={solutionColumns} onNavigate={closeNow} />
        </div>
      )}

      {menu === "resources" && (
        <div
          className="absolute left-0 right-0 top-full hidden lg:block"
          onMouseEnter={() => openMenu("resources")}
        >
          <MegaPanel columns={resourceColumns} onNavigate={closeNow} />
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-6 px-4 py-5">
            {productColumns.map((col) => (
              <div key={col.heading}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {col.heading}
                </p>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-slate-50"
                      >
                        <IconBox tone={item.tone}>{item.icon}</IconBox>
                        <span>
                          <span className="block text-sm font-medium text-nova-900">{item.label}</span>
                          <span className="block text-xs text-slate-500">{item.desc}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Solutions
              </p>
              <ul className="space-y-1">
                {solutionColumns[0].items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-slate-50"
                    >
                      <IconBox tone={item.tone}>{item.icon}</IconBox>
                      <span className="text-sm font-medium text-nova-900">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-800"
            >
              Pricing
            </Link>

            <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                className="rounded-lg border border-slate-200 px-3 py-2.5 text-center text-sm font-medium"
              >
                Login
              </a>
              <Link
                href="/start"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-nova-blue px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
