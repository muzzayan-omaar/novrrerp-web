import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POS — Point of sale",
  description:
    "NOVRR POS: barcode and serial sales, split payments, offline-friendly counters, voids with approval. Built for Ugandan retail shops.",
};

const withoutWith = {
  without: [
    "Sales live in a notebook or a separate POS app",
    "Stock updates later — if someone remembers",
    "Refunds and voids happen without a trail",
    "Line goes down and the counter stops",
  ],
  with: [
    "Every sale hits stock and the ledger in the same flow",
    "Barcode, serial, or unit — picked at the counter",
    "Voids and refunds gated by role and approval",
    "Offline-friendly sale path when the network drops",
  ],
};

const deepFeatures = [
  {
    eyebrow: "Counter flow",
    title: "Sell the way the queue moves",
    body: "Scan or search, pick serials or units, split the payment, print or share the receipt — without leaving the sale screen.",
    bullets: [
      "Barcode-first sale path",
      "Serial and multi-UOM pickers",
      "Split payments in one ticket",
    ],
    image: "/snapshots/pos.png",
    imageAlt: "NOVRR POS sale screen",
  },
  {
    eyebrow: "Resilience",
    title: "Keep selling when the line drops",
    body: "Counters do not wait for perfect connectivity. The sale flow is built to keep moving and reconcile when the network returns.",
    bullets: [
      "Offline-friendly sale flow",
      "Idempotent tickets so retries do not double-post",
      "Clear recovery when you are back online",
    ],
    image: "/snapshots/pos.png",
    imageAlt: "NOVRR POS offline-ready flow",
  },
  {
    eyebrow: "Control",
    title: "Voids and refunds with a gate",
    body: "Mistakes happen at the counter. NOVRR does not pretend they do not — it requires the right role so stock and cash stay honest.",
    bullets: [
      "Void / refund with approval",
      "Role-based access at the till",
      "Audit trail on who changed what",
    ],
    image: "/snapshots/sales.png",
    imageAlt: "NOVRR sales and control",
  },
];

const capabilities = [
  { title: "Barcode scan", body: "Fast line items without typing every SKU." },
  { title: "Serial pickers", body: "Track serialized units through the sale." },
  { title: "Multi-UOM", body: "Sell in the unit the customer actually buys." },
  { title: "Split pay", body: "Cash, mobile money, card — one ticket." },
  { title: "Receipts", body: "Fiscal-ready path when the sale needs it." },
  { title: "Store context", body: "Staff sell from the store they are assigned to." },
];

const related = [
  {
    href: "/product/inventory",
    label: "Inventory",
    desc: "Stock that moves with every sale",
    step: "01",
  },
  {
    href: "/product/sales",
    label: "Quotes & sales",
    desc: "Proforma to cash on one path",
    step: "02",
  },
  {
    href: "/product/finance",
    label: "Finance & payroll",
    desc: "Money after the till closes",
    step: "03",
  },
];

const faqs = [
  {
    q: "Does POS work without internet?",
    a: "The sale flow is offline-friendly so the counter can keep moving when connectivity is poor, then reconcile when the network returns.",
  },
  {
    q: "Can we track serial numbers at sale?",
    a: "Yes. Serial and unit pickers sit in the sale path so serialized stock is chosen at the counter, not patched in later.",
  },
  {
    q: "How are voids handled?",
    a: "Voids and refunds require the right role and approval so cash and stock stay aligned — with a trail of who did it.",
  },
  {
    q: "Is this separate from inventory?",
    a: "No. A completed sale updates stock in the same system. You do not re-key the day into Excel.",
  },
];

/** Counter flow illustration — POS page only */
function PosFlowIllustration() {
  return (
    <svg
      viewBox="0 0 380 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-sm"
      aria-hidden
    >
      <defs>
        <linearGradient id="pos-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <rect x="24" y="200" width="332" height="16" rx="4" fill="#E2E8F0" />
      <rect x="40" y="216" width="300" height="8" rx="2" fill="#CBD5E1" />
      <rect x="56" y="72" width="140" height="128" rx="12" fill="#0F1B33" stroke="#1E2E4D" />
      <rect x="68" y="86" width="116" height="72" rx="6" fill="#16233F" />
      <rect x="76" y="96" width="48" height="6" rx="2" fill="#22D3EE" opacity="0.7" />
      <rect x="76" y="110" width="90" height="4" rx="1" fill="#334155" />
      <rect x="76" y="120" width="70" height="4" rx="1" fill="#334155" />
      <rect x="76" y="130" width="80" height="4" rx="1" fill="#334155" />
      <rect x="68" y="168" width="52" height="20" rx="6" fill="url(#pos-g)" />
      <rect x="128" y="172" width="40" height="12" rx="4" fill="#1E2E4D" />
      <path
        d="M210 88h48a6 6 0 0 1 6 6v100l-12-8-12 8-12-8-12 8-12-8-12 8V94a6 6 0 0 1 6-6z"
        fill="#F8FAFC"
        stroke="#E2E8F0"
      />
      <rect x="222" y="100" width="36" height="4" rx="1" fill="#CBD5E1" />
      <rect x="222" y="110" width="28" height="3" rx="1" fill="#E2E8F0" />
      <rect x="222" y="118" width="32" height="3" rx="1" fill="#E2E8F0" />
      <rect x="222" y="126" width="24" height="3" rx="1" fill="#E2E8F0" />
      <rect x="222" y="140" width="36" height="5" rx="1" fill="#22D3EE" opacity="0.35" />
      <path
        d="M280 60c20 20 28 48 24 78"
        stroke="url(#pos-g)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <circle cx="304" cy="138" r="5" fill="#22D3EE" />
      <rect x="292" y="40" width="36" height="28" rx="4" fill="#16233F" stroke="#334155" />
      <rect x="298" y="46" width="24" height="16" rx="2" fill="#22D3EE" opacity="0.25" />
    </svg>
  );
}

export default function PosProductPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_70%_50%_at_30%_-10%,rgba(34,211,238,0.12),rgba(37,99,235,0.05),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              NOVRR POS
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              Sell at the counter
              <span className="mt-1 block font-medium text-slate-400">
                without losing{" "}
                <span className="text-nova-gradient font-semibold">the stock</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Scan, pick serials, split the payment, and keep the queue moving —
              even when the network is imperfect. Every sale hits the same ledger
              as inventory and receipts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full bg-nova-gradient px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.5)] transition hover:brightness-110"
              >
                Start free
                <span aria-hidden>→</span>
              </Link>
              <p className="text-[13px] text-slate-400">
                No card required
                <span className="mx-1.5 text-slate-300">·</span>
                Setup help included
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-nova-gradient opacity-[0.12] blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_32px_64px_-20px_rgba(15,27,51,0.28)]">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="ml-2 font-brand text-[10px] tracking-wider text-slate-400">
                  NOVRR <span className="text-nova-blue/70">POS</span>
                </span>
              </div>
              <div className="relative bg-white">
                <img
                  src="/snapshots/pos.png"
                  alt="NOVRR POS — counter sale screen"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WITHOUT / WITH */}
      <section className="border-b border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            A better way to take a sale
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-0 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
            <div className="border-b border-slate-200 bg-white p-6 sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Without NOVRR POS
              </p>
              <ul className="mt-5 space-y-3">
                {withoutWith.without.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-500">
                    <span className="mt-1.5 text-slate-300">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-nova-950 p-6 text-white sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-nova-cyan">
                With NOVRR POS
              </p>
              <ul className="mt-5 space-y-3">
                {withoutWith.with.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-300">
                    <span className="mt-1.5 text-nova-cyan">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP FEATURES */}
      <section className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:space-y-32 lg:py-24">
        {deepFeatures.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-14 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 lg:max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                {f.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
                {f.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">{f.body}</p>
              <ul className="mt-6 space-y-2.5">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex-1">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-[1.75rem] bg-nova-gradient opacity-[0.1] blur-2xl"
                />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-16px_rgba(15,27,51,0.18)]">
                  <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="ml-2 text-[10px] text-slate-400">{f.eyebrow}</span>
                  </div>
                  <div className="relative bg-white">
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. CAPABILITIES — numbered list + illustration (not cards) */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                At the till
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
                What the counter
                <span className="mt-1 block font-medium text-slate-400">
                  actually needs
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Not a feature checklist for a brochure — the moves staff make
                when the queue is real.
              </p>
              <div className="mt-8">
                <PosFlowIllustration />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {capabilities.map((c, i) => (
                  <li
                    key={c.title}
                    className="flex items-baseline gap-4 py-4 sm:gap-6 sm:py-5"
                  >
                    <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                      <h3 className="text-[15px] font-semibold text-nova-900">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 sm:mt-0 sm:max-w-xs sm:text-right">
                        {c.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED — spine (not cards) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Same system
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            POS starts the trail
            <span className="mt-1 block font-medium text-slate-400">
              everything else follows
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            A ticket is not an island. Stock, quotes, and finance read the same
            events the counter just wrote.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-nova-cyan via-nova-blue to-slate-200 sm:left-1/2 sm:top-8 sm:bottom-auto sm:h-px sm:w-auto sm:inset-x-8 sm:bg-gradient-to-r"
          />
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {related.map((r) => (
              <li
                key={r.href}
                className="relative pl-12 sm:pl-0 sm:pt-12 sm:text-center"
              >
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-nova-blue ring-2 ring-nova-cyan/40 sm:left-1/2 sm:top-0 sm:-translate-x-1/2">
                  {r.step}
                </span>
                <Link href={r.href} className="group block">
                  <p className="text-base font-semibold text-nova-900 group-hover:text-nova-blue">
                    {r.label}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-500">{r.desc}</p>
                  <span className="mt-3 inline-flex text-xs font-semibold text-nova-blue opacity-80 group-hover:opacity-100">
                    Open module →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12 text-sm text-slate-400">
          <Link href="/product" className="font-medium text-nova-blue hover:underline">
            All product modules
          </Link>
        </p>
      </section>

      {/* 6. DARK CTA */}
      <section className="relative overflow-hidden bg-nova-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Put NOVRR on
            <span className="mt-1 block font-medium text-slate-400">
              your{" "}
              <span className="text-nova-gradient font-semibold">counter</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Start free. See the POS flow on your catalog and stores.
          </p>
          <Link
            href="/start"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-nova-gradient px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(34,211,238,0.45)] transition hover:brightness-110"
          >
            Start free
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-nova-900">
          POS questions
        </h2>
        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-semibold text-nova-900">
                {item.q}
                <span className="text-slate-300 transition group-open:rotate-45 group-open:text-nova-blue">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}