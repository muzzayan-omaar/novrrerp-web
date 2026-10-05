import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quotes & Sales",
  description:
    "NOVRR quotes and sales: proforma without touching stock, convert on commit, 18% VAT, customer credit. Built for Ugandan retail.",
};

const withoutWith = {
  without: [
    "Quotes live in Word or WhatsApp — stock is guessed",
    "VAT is calculated in a separate sheet",
    "Credit customers are remembered, not enforced",
    "Closing a quote means retyping the whole sale",
  ],
  with: [
    "Proforma holds intent without moving inventory",
    "Convert quote → sale in one action when they pay",
    "18% VAT on the same path as the ticket",
    "Customer credit limits gate what can be committed",
  ],
};

const deepFeatures = [
  {
    eyebrow: "Quotes",
    title: "Promise without moving stock",
    body: "Issue a proforma so the customer sees the number — stock stays put until they commit. No phantom allocations.",
    bullets: [
      "Proforma quotes separate from sales",
      "Line items with VAT ready",
      "Convert when the deal is real",
    ],
    image: "/snapshots/sales.png",
    imageAlt: "NOVRR quotes screen",
  },
  {
    eyebrow: "Sales path",
    title: "From proforma to cash",
    body: "When they buy, the quote becomes a sale: stock commits, VAT applies, receipt data is ready — one continuous flow.",
    bullets: [
      "One-click quote → sale",
      "18% VAT on quotes and sales",
      "Fiscal-ready receipt path",
    ],
    image: "/snapshots/sales.png",
    imageAlt: "NOVRR sales flow",
  },
  {
    eyebrow: "Customers",
    title: "Credit with a limit, not a hope",
    body: "Know who buys on account and how far. Limits sit on the customer so the counter does not invent policy mid-sale.",
    bullets: [
      "Customer profiles and history",
      "Credit limits on account sales",
      "Same customers across branches",
    ],
    image: "/snapshots/pos.png",
    imageAlt: "NOVRR customers at the counter",
  },
];

const capabilities = [
  { title: "Proforma quotes", body: "Price without touching inventory." },
  { title: "Quote → sale", body: "Convert when payment or commit happens." },
  { title: "18% VAT", body: "Built into the sales path, not a side sheet." },
  { title: "Credit limits", body: "Gate account sales by customer policy." },
  { title: "Customer history", body: "See prior tickets before the next deal." },
  { title: "Fiscal path", body: "Receipt data ready when compliance needs it." },
];

const related = [
  { href: "/product/pos", label: "Point of sale", desc: "Counter sales on the same ledger", step: "01" },
  { href: "/product/inventory", label: "Inventory", desc: "Stock commits only on real sales", step: "02" },
  { href: "/product/finance", label: "Finance & payroll", desc: "Money after the deal closes", step: "03" },
];

const faqs = [
  {
    q: "Does a quote reserve stock?",
    a: "No. Proforma is intent only. Inventory moves when you convert to a sale — so shelves stay honest while you negotiate.",
  },
  {
    q: "Is VAT automatic?",
    a: "Yes. 18% VAT sits on the quotes and sales path so you are not recalculating in a spreadsheet at month-end.",
  },
  {
    q: "Can we sell on credit?",
    a: "Yes, within customer credit limits. The limit is enforced on the sale, not remembered after the fact.",
  },
  {
    q: "How does this relate to POS?",
    a: "POS is the counter flow. Quotes & sales cover proforma, conversion, VAT, and customers — same system, same stock.",
  },
];

export default function SalesProductPage() {
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
              NOVRR Quotes & Sales
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              From proforma
              <span className="mt-1 block font-medium text-slate-400">
                to{" "}
                <span className="text-nova-gradient font-semibold">cash</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Quote without moving stock. Convert when they commit. VAT, credit
              limits, and customers on the same path as the till.
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
                  NOVRR <span className="text-nova-blue/70">Sales</span>
                </span>
              </div>
              <div className="relative bg-white">
                <img
                  src="/snapshots/sales.png"
                  alt="NOVRR quotes and sales"
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
            A better way to close a deal
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-0 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
            <div className="border-b border-slate-200 bg-white p-6 sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Without NOVRR Sales
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
                With NOVRR Sales
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

      {/* 4. CAPABILITIES — numbered list */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
              On the deal path
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
              What closing a sale
              <span className="mt-1 block font-medium text-slate-400">
                actually needs
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Proforma, convert, VAT, and credit — not an invoice pad that lives
              outside stock.
            </p>
          </div>
          <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {capabilities.map((c, i) => (
              <li
                key={c.title}
                className="flex items-baseline gap-4 py-4 sm:gap-6 sm:py-5"
              >
                <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-[15px] font-semibold text-nova-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 sm:mt-0 sm:max-w-md sm:text-right">
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. RELATED — spine */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Same system
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            Sales sits on the trail
            <span className="mt-1 block font-medium text-slate-400">
              counter, stock, and books share it
            </span>
          </h2>
        </div>
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-nova-cyan via-nova-blue to-slate-200 sm:left-1/2 sm:top-8 sm:bottom-auto sm:h-px sm:w-auto sm:inset-x-8 sm:bg-gradient-to-r"
          />
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {related.map((r) => (
              <li key={r.href} className="relative pl-12 sm:pl-0 sm:pt-12 sm:text-center">
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
            Quote and close
            <span className="mt-1 block font-medium text-slate-400">
              on{" "}
              <span className="text-nova-gradient font-semibold">one path</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Start free. See proforma → sale on your catalog.
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
          Sales questions
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