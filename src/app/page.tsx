import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";
import { ProblemIllustration } from "@/components/ProblemIllustration";
import { CapabilityBento } from "@/components/CapabilityBento";

const trustLogos = [
  { name: "Pearl Retail" },
  { name: "Nile Mart" },
  { name: "Kira Traders" },
  { name: "Victoria Wholesale" },
  { name: "Kampala Hardware" },
  { name: "EastEnd Pharmacy" },
  { name: "Mukono Stores" },
  { name: "Capital Fresh" },
];

const painPoints = [
  {
    stat: "3+",
    statLabel: "tools in parallel",
    title: "Stock out of sync",
    body: "Branches sell the same SKU while another is already out. Transfers live in chat and spreadsheets.",
  },
  {
    stat: "Days",
    statLabel: "to close the month",
    title: "Fiscal friction",
    body: "Receipts, VAT, and EFRIS-style compliance fight separate apps. Month-end becomes a scramble.",
  },
  {
    stat: "0",
    statLabel: "single source of truth",
    title: "Scattered ops",
    body: "POS, payroll, suppliers, and expenses sit apart. Owners lose the view they need to decide.",
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

            <div className="mt-7 flex flex-col items-center sm:mt-8">
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

      {/* 2. TRUST BAR — sample logos until real customers land */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Trusted by growing Ugandan businesses
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {trustLogos.map((logo) => (
              <span
                key={logo.name}
                className="font-brand text-[13px] tracking-[0.12em] text-slate-300 transition-colors hover:text-slate-500 sm:text-sm"
                title="Sample — replace with real customer logo"
              >
                {logo.name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-slate-300">
            Sample names for design — swap for real logos when ready
          </p>
        </div>
      </section>

      {/* 3. PROBLEM — custom illustration + open stats (no cards) */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Spreadsheets and separate apps
              <span className="mt-1 block font-medium text-slate-400">
                cost you{" "}
                <span className="text-nova-gradient font-semibold">stock and time</span>
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-500 sm:text-lg">
              When POS, stock, payroll, and compliance live in different places, context breaks — and so does control.
            </p>
          </div>

          {/* custom scene */}
          <div className="relative mx-auto mt-12 max-w-4xl sm:mt-14">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_65%)]"
              aria-hidden
            />
            <ProblemIllustration />
          </div>

          {/* three points — open columns, dividers only, ClickUp-style */}
          <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
              {painPoints.map((p, i) => (
                <div
                  key={p.title}
                  className={`text-center sm:px-8 ${
                    i > 0 ? "sm:border-l sm:border-slate-200/80" : ""
                  }`}
                >
                  <p className="text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl">
                    {p.stat}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-nova-cyan">
                    {p.statLabel}
                  </p>
                  <h3 className="mt-4 text-base font-semibold text-nova-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITY BENTO — large center tiles + side ring */}
      <section id="product" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl lg:text-[2.75rem]">
              Everything your business needs
              <span className="mt-1 block font-medium text-slate-400">
                in <span className="text-nova-gradient font-semibold">NOVRR</span>
              </span>
            </h2>
            <p className="mt-4 text-slate-500">
              Counter sales, multi-store stock, finance, payroll, and compliance — one system.
            </p>
          </div>
          <div className="mt-12 sm:mt-14">
            <CapabilityBento />
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
