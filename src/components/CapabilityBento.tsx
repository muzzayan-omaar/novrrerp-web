import Link from "next/link";

/** ClickUp-style bento: large center tiles + smaller ring — soft visual peeks, not plain white */

function MiniPos() {
  return (
    <div className="mt-4 overflow-hidden rounded-lg bg-nova-950 p-3 shadow-inner">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-medium text-white/50">Sale #1842</span>
        <span className="rounded bg-nova-cyan/20 px-1.5 py-0.5 text-[9px] font-semibold text-nova-cyan">
          LIVE
        </span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] text-white/80">
          <span>Item × 2</span>
          <span>UGX 24,000</span>
        </div>
        <div className="flex justify-between text-[11px] text-white/80">
          <span>Serial unit</span>
          <span>UGX 180,000</span>
        </div>
        <div className="mt-2 flex gap-1">
          <div className="h-6 flex-1 rounded bg-nova-blue/80" />
          <div className="h-6 w-10 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function MiniInventory() {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-3">
      <div className="mb-2 flex gap-1">
        {["Store A", "Store B", "Transit"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
              i === 0 ? "bg-nova-blue text-white" : "bg-white text-slate-500 ring-1 ring-slate-200"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      {[
        { n: "SKU-104", q: "142", ok: true },
        { n: "SKU-220", q: "0", ok: false },
        { n: "SKU-088", q: "18", ok: true },
      ].map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between border-t border-slate-100 py-1.5 text-[11px]"
        >
          <span className="text-slate-600">{r.n}</span>
          <span className={r.ok ? "font-semibold text-emerald-600" : "font-semibold text-red-500"}>
            {r.q}
          </span>
        </div>
      ))}
    </div>
  );
}

function MiniSales() {
  return (
    <div className="mt-4 space-y-1.5">
      {["Quote → Sale", "VAT 18%", "Fiscal ID"].map((l, i) => (
        <div
          key={l}
          className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-600"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              i === 0 ? "bg-nova-cyan" : i === 1 ? "bg-nova-blue" : "bg-emerald-500"
            }`}
          />
          {l}
        </div>
      ))}
    </div>
  );
}

function MiniFinance() {
  return (
    <div className="mt-4 flex gap-2">
      {["Payroll", "Expenses", "Bank"].map((l) => (
        <div
          key={l}
          className="flex-1 rounded-lg bg-gradient-to-b from-slate-50 to-slate-100/80 px-2 py-3 text-center"
        >
          <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-nova-gradient" />
          <span className="text-[10px] font-medium text-slate-600">{l}</span>
        </div>
      ))}
    </div>
  );
}

function PeekEfris() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <rect x="8" y="6" width="100" height="78" rx="6" fill="#0F1B33" />
      <rect x="16" y="14" width="48" height="5" rx="1" fill="#22D3EE" />
      <rect x="16" y="24" width="72" height="3" rx="1" fill="#334155" />
      <rect x="16" y="32" width="60" height="3" rx="1" fill="#334155" />
      <rect x="16" y="44" width="84" height="20" rx="3" fill="#16233F" />
      <rect x="22" y="50" width="36" height="3" rx="1" fill="#64748B" />
      <rect x="22" y="56" width="28" height="3" rx="1" fill="#475569" />
      <rect x="70" y="48" width="22" height="12" rx="2" fill="#22D3EE" opacity="0.5" />
    </svg>
  );
}

function PeekSuppliers() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <rect x="10" y="10" width="96" height="14" rx="3" fill="#E2E8F0" />
      <rect x="16" y="14" width="40" height="4" rx="1" fill="#64748B" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(10, ${30 + i * 18})`}>
          <rect width="96" height="14" rx="3" fill="#F1F5F9" />
          <rect x="6" y="4" width="28" height="4" rx="1" fill="#94A3B8" />
          <rect x="70" y="3" width="20" height="6" rx="2" fill="#2563EB" opacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

function PeekPayroll() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <rect x="14" y="8" width="88" height="72" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
      <circle cx="36" cy="28" r="10" fill="#CBD5E1" />
      <rect x="52" y="22" width="36" height="4" rx="1" fill="#94A3B8" />
      <rect x="52" y="30" width="24" height="3" rx="1" fill="#CBD5E1" />
      <rect x="22" y="48" width="72" height="4" rx="1" fill="#E2E8F0" />
      <rect x="22" y="58" width="56" height="4" rx="1" fill="#E2E8F0" />
      <rect x="22" y="68" width="40" height="6" rx="2" fill="#22D3EE" opacity="0.45" />
    </svg>
  );
}

function PeekTeam() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <circle cx="40" cy="28" r="12" fill="#CBD5E1" />
      <circle cx="72" cy="28" r="12" fill="#94A3B8" />
      <circle cx="56" cy="48" r="12" fill="#64748B" />
      <rect x="20" y="68" width="80" height="8" rx="4" fill="#E2E8F0" />
      <rect x="32" y="70" width="24" height="4" rx="2" fill="#2563EB" opacity="0.4" />
    </svg>
  );
}

function PeekReports() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <rect x="12" y="12" width="96" height="66" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={22 + i * 16}
          y={62 - (18 + i * 7)}
          width="10"
          height={18 + i * 7}
          rx="2"
          fill={i === 4 ? "#22D3EE" : "#2563EB"}
          opacity={0.35 + i * 0.08}
        />
      ))}
    </svg>
  );
}

function PeekCounts() {
  return (
    <svg
      viewBox="0 0 120 90"
      className="pointer-events-none absolute -bottom-2 -right-1 h-[5.25rem] w-[7rem] opacity-[0.38]"
      aria-hidden
    >
      <rect x="10" y="10" width="100" height="70" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(18, ${20 + i * 14})`}>
          <rect width="12" height="12" rx="2" fill="#E2E8F0" />
          <path
            d="M3 6l2.5 2.5L9 4"
            stroke={i < 2 ? "#10B981" : "#CBD5E1"}
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="20" y="3" width="52" height="4" rx="1" fill="#CBD5E1" />
        </g>
      ))}
    </svg>
  );
}

const peeks: Record<string, () => React.ReactNode> = {
  compliance: PeekEfris,
  suppliers: PeekSuppliers,
  payroll: PeekPayroll,
  team: PeekTeam,
  reports: PeekReports,
  inventory: PeekCounts,
};

const large = [
  {
    id: "pos",
    title: "Point of Sale",
    desc: "Barcode, serials, split pay, offline-ready.",
    href: "/product/pos",
    preview: <MiniPos />,
    dark: true,
    hoverBorder: "hover:border-cyan-300/50",
    hoverText: "group-hover:text-cyan-200",
  },
  {
    id: "inventory",
    title: "Multi-store inventory",
    desc: "Transit, counts, multi-UOM, serials.",
    href: "/product/inventory",
    preview: <MiniInventory />,
    dark: false,
    hoverBorder: "hover:border-emerald-400/50",
    hoverText: "group-hover:text-emerald-700",
  },
  {
    id: "sales",
    title: "Quotes & sales",
    desc: "Proforma → cash with VAT & fiscal.",
    href: "/product/sales",
    preview: <MiniSales />,
    dark: false,
    hoverBorder: "hover:border-amber-400/55",
    hoverText: "group-hover:text-amber-700",
  },
  {
    id: "finance",
    title: "Money & people",
    desc: "Expenses, payroll, bank recon.",
    href: "/product/finance",
    preview: <MiniFinance />,
    dark: false,
    hoverBorder: "hover:border-violet-400/50",
    hoverText: "group-hover:text-violet-700",
  },
] as const;

const ring = [
  {
    id: "compliance",
    title: "EFRIS-ready",
    desc: "Fiscal receipts & VAT",
    href: "/compliance",
    hoverBorder: "hover:border-emerald-400/55",
    hoverText: "group-hover:text-emerald-700",
  },
  {
    id: "suppliers",
    title: "Suppliers & POs",
    desc: "Orders & reliability",
    href: "/product/inventory",
    hoverBorder: "hover:border-orange-400/55",
    hoverText: "group-hover:text-orange-700",
  },
  {
    id: "payroll",
    title: "Payroll",
    desc: "Tax engine & leave",
    href: "/product/finance",
    hoverBorder: "hover:border-cyan-400/55",
    hoverText: "group-hover:text-cyan-700",
  },
  {
    id: "team",
    title: "Staff & roles",
    desc: "Multi-store access",
    href: "/product/finance",
    hoverBorder: "hover:border-violet-400/55",
    hoverText: "group-hover:text-violet-700",
  },
  {
    id: "reports",
    title: "Reports",
    desc: "Sales & stock analytics",
    href: "/product",
    hoverBorder: "hover:border-sky-400/55",
    hoverText: "group-hover:text-sky-700",
  },
  {
    id: "inventory",
    title: "Stock counts",
    desc: "Approval-gated counts",
    href: "/product/inventory",
    hoverBorder: "hover:border-teal-400/55",
    hoverText: "group-hover:text-teal-700",
  },
] as const;

function RingTile({ item }: { item: (typeof ring)[number] }) {
  const Peek = peeks[item.id];
  return (
    <Link
      href={item.href}
      className={`group relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-4 py-5 transition hover:shadow-[0_12px_32px_-12px_rgba(15,27,51,0.12)] ${item.hoverBorder}`}
    >
      {Peek ? <Peek /> : null}
      <span className={`relative text-sm font-semibold text-nova-900 ${item.hoverText}`}>
        {item.title}
      </span>
      <span className="relative mt-1 text-xs text-slate-500">{item.desc}</span>
    </Link>
  );
}

export function CapabilityBento() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="hidden gap-3 lg:grid lg:grid-cols-[1fr_1.35fr_1.35fr_1fr]">
        <div className="flex flex-col gap-3">
          {ring.slice(0, 3).map((item) => (
            <RingTile key={item.title} item={item} />
          ))}
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-3">
          {large.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border p-5 transition ${
                item.dark
                  ? `border-nova-800 bg-nova-950 text-white ${item.hoverBorder}`
                  : `border-slate-200/80 bg-white hover:shadow-[0_16px_40px_-16px_rgba(15,27,51,0.14)] ${item.hoverBorder}`
              }`}
            >
              <span
                className={`text-base font-semibold ${
                  item.dark ? `text-white ${item.hoverText}` : `text-nova-900 ${item.hoverText}`
                }`}
              >
                {item.title}
              </span>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  item.dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.desc}
              </p>
              {item.preview}
              {item.dark && (
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-nova-gradient opacity-20 blur-2xl"
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {ring.slice(3).map((item) => (
            <RingTile key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {large.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group overflow-hidden rounded-2xl border p-5 transition ${
              item.dark
                ? `border-nova-800 bg-nova-950 text-white sm:col-span-2 ${item.hoverBorder}`
                : `border-slate-200 bg-white ${item.hoverBorder}`
            }`}
          >
            <span
              className={`text-base font-semibold ${
                item.dark ? `text-white ${item.hoverText}` : `text-nova-900 ${item.hoverText}`
              }`}
            >
              {item.title}
            </span>
            <p className={`mt-1 text-xs ${item.dark ? "text-slate-400" : "text-slate-500"}`}>
              {item.desc}
            </p>
            {item.preview}
          </Link>
        ))}
        {ring.map((item) => (
          <RingTile key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}