import Link from "next/link";

/** ClickUp-style bento: large center tiles + smaller ring — custom, not equal cards */

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
        <div key={r.n} className="flex items-center justify-between border-t border-slate-100 py-1.5 text-[11px]">
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

const large = [
  {
    id: "pos",
    title: "Point of Sale",
    desc: "Barcode, serials, split pay, offline-ready.",
    href: "/#pos",
    preview: <MiniPos />,
    dark: true,
  },
  {
    id: "inventory",
    title: "Multi-store inventory",
    desc: "Transit, counts, multi-UOM, serials.",
    href: "/#inventory",
    preview: <MiniInventory />,
    dark: false,
  },
  {
    id: "sales",
    title: "Quotes & sales",
    desc: "Proforma → cash with VAT & fiscal.",
    href: "/#sales",
    preview: <MiniSales />,
    dark: false,
  },
  {
    id: "finance",
    title: "Money & people",
    desc: "Expenses, payroll, bank recon.",
    href: "/#finance",
    preview: <MiniFinance />,
    dark: false,
  },
] as const;

const ring = [
  { id: "compliance", title: "EFRIS-ready", desc: "Fiscal receipts & VAT" },
  { id: "suppliers", title: "Suppliers & POs", desc: "Orders & reliability" },
  { id: "payroll", title: "Payroll", desc: "Tax engine & leave" },
  { id: "team", title: "Staff & roles", desc: "Multi-store access" },
  { id: "reports", title: "Reports", desc: "Sales & stock analytics" },
  { id: "inventory", title: "Stock counts", desc: "Approval-gated counts" },
] as const;

export function CapabilityBento() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Desktop bento: side columns + 2×2 center */}
      <div className="hidden gap-3 lg:grid lg:grid-cols-[1fr_1.35fr_1.35fr_1fr]">
        {/* Left ring */}
        <div className="flex flex-col gap-3">
          {ring.slice(0, 3).map((item) => (
            <Link
              key={item.title}
              href={`/#${item.id}`}
              className="group flex flex-1 flex-col justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-5 transition hover:border-nova-blue/30 hover:shadow-[0_12px_32px_-12px_rgba(15,27,51,0.12)]"
            >
              <span className="text-sm font-semibold text-nova-900 group-hover:text-nova-blue">
                {item.title}
              </span>
              <span className="mt-1 text-xs text-slate-500">{item.desc}</span>
            </Link>
          ))}
        </div>

        {/* Center 2×2 large tiles */}
        <div className="col-span-2 grid grid-cols-2 gap-3">
          {large.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border p-5 transition ${
                item.dark
                  ? "border-nova-800 bg-nova-950 text-white hover:border-nova-cyan/40"
                  : "border-slate-200/80 bg-white hover:border-nova-blue/30 hover:shadow-[0_16px_40px_-16px_rgba(15,27,51,0.14)]"
              }`}
            >
              <span
                className={`text-base font-semibold ${
                  item.dark ? "text-white" : "text-nova-900 group-hover:text-nova-blue"
                }`}
              >
                {item.title}
              </span>
              <p className={`mt-1 text-xs leading-relaxed ${item.dark ? "text-slate-400" : "text-slate-500"}`}>
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

        {/* Right ring */}
        <div className="flex flex-col gap-3">
          {ring.slice(3).map((item) => (
            <Link
              key={item.title}
              href={`/#${item.id}`}
              className="group flex flex-1 flex-col justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-5 transition hover:border-nova-blue/30 hover:shadow-[0_12px_32px_-12px_rgba(15,27,51,0.12)]"
            >
              <span className="text-sm font-semibold text-nova-900 group-hover:text-nova-blue">
                {item.title}
              </span>
              <span className="mt-1 text-xs text-slate-500">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: stacked featured then compact list */}
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {large.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group overflow-hidden rounded-2xl border p-5 ${
              item.dark ? "border-nova-800 bg-nova-950 text-white sm:col-span-2" : "border-slate-200 bg-white"
            }`}
          >
            <span className={`text-base font-semibold ${item.dark ? "text-white" : "text-nova-900"}`}>
              {item.title}
            </span>
            <p className={`mt-1 text-xs ${item.dark ? "text-slate-400" : "text-slate-500"}`}>{item.desc}</p>
            {item.preview}
          </Link>
        ))}
        {ring.map((item) => (
          <Link
            key={item.title}
            href={`/#${item.id}`}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
          >
            <span className="text-sm font-semibold text-nova-900">{item.title}</span>
            <span className="mt-0.5 block text-xs text-slate-500">{item.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
