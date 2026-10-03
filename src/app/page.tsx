import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";

const capabilities = [
  { id: "pos", title: "POS", desc: "Barcode, serials, split payments, offline-ready sales" },
  { id: "inventory", title: "Multi-store inventory", desc: "Stock transit, counts with approval, multi-UOM" },
  { id: "sales", title: "Quotes & sales", desc: "Proforma → sale, VAT, fiscal receipts" },
  { id: "compliance", title: "EFRIS-ready", desc: "Fiscal receipt IDs & QR-style verify links" },
  { id: "suppliers", title: "Suppliers & POs", desc: "Purchase orders and reliability scoring" },
  { id: "finance", title: "Expenses & bank", desc: "CapEx/OpEx, payments, bank reconciliation" },
  { id: "payroll", title: "Payroll", desc: "Staff, tax engine, work status & leave" },
  { id: "team", title: "Staff & roles", desc: "Multi-store access, approval workflows" },
  { id: "reports", title: "Reports", desc: "Sales, stock, and operational analytics" },
];

const painPoints = [
  {
    title: "Stock out of sync",
    body: "Branches sell the same SKU while another is already out. Transfers and counts stay in chat and spreadsheets.",
  },
  {
    title: "Fiscal & month-end friction",
    body: "Receipts, VAT, and EFRIS-style compliance fight with separate tools. Closing the books takes days.",
  },
  {
    title: "Scattered ops",
    body: "POS, payroll, suppliers, and expenses live in different places. Owners lose the single view they need.",
  },
];

const deepFeatures = [
  {
    id: "pos",
    title: "POS built for the counter",
    body: "Scan barcodes, pick serials or units, split payments, and keep selling when the line drops. Receipts and fiscal metadata stay with the sale.",
    bullets: ["Offline-friendly sale flow", "Serial & unit pickers", "Void / refund with approval"],
  },
  {
    id: "inventory",
    title: "Inventory that respects branches",
    body: "Multi-store stock, in-transit handshake, stock counts with an approval gate, and serialized transfers so every unit has a path.",
    bullets: ["Multi-UOM foundation", "Stock counts + approval", "Store switcher for staff"],
  },
  {
    id: "sales",
    title: "Quotes to cash, cleanly",
    body: "Create proforma quotes without touching stock, convert when the customer commits, apply VAT, and attach fiscal receipt data.",
    bullets: ["Proforma quotes", "18% VAT support", "Customer credit limits"],
  },
  {
    id: "finance",
    title: "Money and people in one ledger",
    body: "Expenses with CapEx/OpEx tags, supplier links, payroll tax engine, bank reconciliation prep, and role-based access across stores.",
    bullets: ["Payroll + tax engine", "Bank recon prep", "Audit-friendly trails"],
  },
];

const solutions = [
  {
    title: "Single shop",
    body: "One counter, clear stock, simple payroll. Replace the notebook and spreadsheet stack.",
    replaces: ["Paper sales book", "Excel stock", "Manual payslips"],
  },
  {
    title: "Multi-branch retail",
    body: "Shared catalog, branch stock, transfers, and one owner dashboard across locations.",
    replaces: ["Per-branch Excel", "WhatsApp stock checks", "Separate POS apps"],
  },
  {
    title: "Growing franchise",
    body: "Packages, max stores/users, platform-style control, and consistent ops as you scale.",
    replaces: ["Fragmented tools", "Ad-hoc reporting", "Manual onboarding"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — product peeps inside this band, not a block below */}
      <section className="relative overflow-hidden bg-white">
        {/* soft brand wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,211,238,0.14),rgba(37,99,235,0.07),transparent_70%)]"
        />

        {/* copy — no sub desc; tighter so product sits higher */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-[min(48vh,380px)] sm:px-6 sm:pt-16 sm:pb-[min(52vh,420px)] lg:px-8 lg:pt-20 lg:pb-[min(56vh,460px)]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-nova-950/[0.04] px-3.5 py-1.5 ring-1 ring-nova-blue/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nova-cyan opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-nova-cyan" />
              </span>
              <span className="text-[13px] font-medium tracking-wide text-nova-900/80">
                Built for Uganda
                <span className="mx-1.5 text-nova-900/25">·</span>
                <span className="text-nova-blue">multi-branch ready</span>
              </span>
            </div>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-nova-900 sm:mt-7 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              One system
              <span className="mt-1 block font-medium text-slate-400 sm:mt-2">
                to run{" "}
                <span className="text-nova-gradient font-semibold">every store</span>
              </span>
            </h1>

            <div className="mt-7 flex flex-col items-center sm:mt-8 mb-5">
              <Link
                href="/#start"
                className="group inline-flex items-center gap-2 rounded-full bg-nova-gradient px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition duration-200 hover:brightness-110 hover:shadow-[0_12px_28px_-6px_rgba(34,211,238,0.45)]"
              >
                Start free
                <span className="text-white/70 transition group-hover:translate-x-0.5 group-hover:text-white">
                  →
                </span>
              </Link>
              <p className="mt-3 text-[13px] text-slate-400">
                No card required
                <span className="mx-1.5 text-slate-300">·</span>
                Pricing on request
              </p>
            </div>
          </div>
        </div>

        {/* product UI pulled up into the hero band */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <div className="pointer-events-auto relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div
              className="absolute -inset-x-10 -top-10 bottom-0 bg-nova-gradient opacity-[0.12] blur-3xl"
              aria-hidden
            />
            <div className="relative h-[min(48vh,380px)] overflow-hidden rounded-t-2xl border border-b-0 border-slate-200/80 bg-nova-950 shadow-[0_-12px_48px_-8px_rgba(15,27,51,0.35)] sm:h-[min(52vh,420px)] lg:h-[min(56vh,460px)]">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-brand text-[10px] tracking-wider text-white/40">
                  NOVRR <span className="text-nova-cyan/70">ERP</span>
                </span>
              </div>
              {/* Media: /public/hero.png + /public/hero.mp4 (or hero.webm) */}
              <div className="relative h-[480px] w-full bg-nova-950">
                {/* Image always available as base / fallback */}
                <img
                  src="/hero.png"
                  alt="NOVRR ERP — POS and inventory"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                {/* Short loop on top when the file exists */}
                <video
                  className="absolute inset-0 z-[1] h-full w-full object-cover object-top"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero.png"
                  aria-label="NOVRR ERP product preview"
                >
                  <source src="/hero.webm" type="video/webm" />
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted by growing Ugandan businesses
          </span>
          <span className="text-sm text-slate-500">Your customer logos go here</span>
        </div>
      </section>

      {/* 3. PROBLEM */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-nova-900 sm:text-4xl">
              Spreadsheets and separate apps cost you stock and time
            </h2>
            <p className="mt-4 text-slate-600">
              When POS, stock, payroll, and compliance live in different places, context breaks — and so does control.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6"
              >
                <h3 className="text-lg font-semibold text-nova-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITY BENTO */}
      <section id="product" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-nova-900 sm:text-4xl">
              Everything your business needs — in NOVRR
            </h2>
            <p className="mt-4 text-slate-600">
              One platform: counter sales, multi-store stock, finance, payroll, and compliance.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-nova-blue/40 hover:shadow-md"
              >
                <h3 className="font-semibold text-nova-900 group-hover:text-nova-blue">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEEP PRODUCT SHOWCASE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {deepFeatures.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-nova-900 sm:text-3xl">
                  {f.title}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{f.body}</p>
                <ul className="mt-6 space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-nova-900 aspect-[4/3] flex items-center justify-center">
                  <p className="text-sm text-slate-400 px-6 text-center">
                    Screenshot / recording: {f.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOLUTIONS BY TYPE */}
      <section id="solutions" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-nova-900 sm:text-4xl">
              Built for how you actually operate
            </h2>
            <p className="mt-4 text-slate-600">
              Same product core — tuned to single shops, multi-branch retail, and franchises.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-nova-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600">{s.body}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Replaces
                  </p>
                  <ul className="mt-2 space-y-1">
                    {s.replaces.map((r) => (
                      <li key={r} className="text-sm text-slate-700 flex items-center gap-2">
                        <span className="text-emerald-500">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/#start"
                  className="mt-6 inline-flex text-sm font-semibold text-nova-blue hover:text-nova-blue-dark"
                >
                  Start free →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUTCOMES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-nova-900 sm:text-4xl">
              Run every store from one screen
            </h2>
            <p className="mt-4 text-slate-600">
              Outcomes you can measure once you&apos;re live. Numbers below are placeholders until your data is in.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Branches in sync", value: "Real-time" },
              { label: "Fiscal-ready sales", value: "EFRIS-style" },
              { label: "Month-end", value: "Faster close" },
              { label: "Stack replaced", value: "One system" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-2xl font-bold text-nova-blue">{m.value}</p>
                <p className="mt-1 text-sm text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF PLACEHOLDER */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Customer stories
          </p>
          <p className="mt-3 text-slate-600">
            Testimonials and logos will land here as early customers go live.
          </p>
        </div>
      </section>

      {/* 9. COMPLIANCE / TRUST */}
      <section id="compliance" className="bg-nova-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Uganda
            </h2>
            <p className="mt-4 text-slate-300">
              Local currency, VAT, fiscal-ready sales flows, and operational controls for real shops.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "EFRIS-style fiscal receipt support",
              "18% VAT on quotes & sales",
              "UGX-first operations",
              "Multi-store roles & approvals",
              "Audit trails",
              "Daily backup jobs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-nova-900/50 px-4 py-3 text-sm"
              >
                <span className="text-nova-cyan">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA + FORM */}
      <section id="start" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-nova-900 sm:text-4xl">
                Start free. See NOVRR on your own data.
              </h2>
              <p className="mt-4 text-slate-600">
                Tell us about your shops — we&apos;ll help you get set up. Package pricing is available on request.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-nova-cyan">→</span> POS, inventory, sales, finance, payroll</li>
                <li className="flex gap-2"><span className="text-nova-cyan">→</span> Multi-store ready from day one</li>
                <li className="flex gap-2"><span className="text-nova-cyan">→</span> Localized for Uganda</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <DemoForm source="homepage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
