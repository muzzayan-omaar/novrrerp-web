import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description:
    "NOVRR ERP modules — POS, multi-store inventory, quotes & sales, finance, payroll, and EFRIS-ready compliance. Built for Ugandan retail.",
};

const modules = [
  {
    id: "pos",
    href: "/product/pos",
    eyebrow: "Point of sale",
    title: "Built for the counter",
    body: "Barcode, serials, split payments, and offline-friendly sales when the line drops.",
    bullets: ["Offline-ready sale flow", "Serial & unit pickers", "Void / refund with approval"],
    image: "/snapshots/pos.png",
    tone: "dark" as const,
  },
  {
    id: "inventory",
    href: "/product/inventory",
    eyebrow: "Inventory",
    title: "Branches that stay in sync",
    body: "Multi-store stock, in-transit handshake, counts with approval, and multi-UOM.",
    bullets: ["Stock transfers", "Counts + approval", "Store switcher"],
    image: "/snapshots/inventory.png",
    tone: "light" as const,
  },
  {
    id: "sales",
    href: "/product/sales",
    eyebrow: "Quotes & sales",
    title: "From proforma to cash",
    body: "Quotes without touching stock, convert on commit, VAT, and fiscal data on the same path.",
    bullets: ["Proforma quotes", "18% VAT", "Customer credit limits"],
    image: "/snapshots/sales.png",
    tone: "light" as const,
  },
  {
    id: "finance",
    href: "/product/finance",
    eyebrow: "Finance & payroll",
    title: "Money and people in one ledger",
    body: "Expenses, suppliers, payroll tax engine, bank recon prep, and roles across stores.",
    bullets: ["Payroll + tax", "Bank recon prep", "Audit trails"],
    image: "/snapshots/finance.png",
    tone: "dark" as const,
  },
];

const pillars = [
  {
    title: "One system",
    body: "Counter, stock, pay, and compliance share a single source of truth.",
  },
  {
    title: "Multi-store native",
    body: "Transfers, branch roles, and an owner view — not a single shop stretched thin.",
  },
  {
    title: "Uganda-ready",
    body: "UGX-first, 18% VAT on the sales path, EFRIS-style fiscal when you need it.",
  },
];

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,211,238,0.12),rgba(37,99,235,0.06),transparent_65%)]"
        />

        {/* corner peeps */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-16 hidden w-[260px] rotate-[7deg] sm:block lg:right-8 lg:w-[300px]"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,27,51,0.2)]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="ml-1 text-[9px] text-slate-400">Sales</span>
            </div>
            <div className="relative h-32 bg-white lg:h-36">
              <img
                src="/snapshots/sales.png"
                alt=""
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-6 bottom-0 hidden w-[240px] -rotate-[6deg] sm:block lg:left-4 lg:w-[280px]"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,27,51,0.2)]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="ml-1 text-[9px] text-slate-400">POS</span>
            </div>
            <div className="relative h-28 bg-white lg:h-32">
              <img
                src="/snapshots/pos.png"
                alt=""
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-14 text-center sm:px-6 sm:pb-32 sm:pt-16 lg:px-8 lg:pt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
            Product
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Everything to run
            <span className="mt-1 block font-medium text-slate-400">
              the{" "}
              <span className="text-nova-gradient font-semibold">whole store</span>
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500">
            POS, multi-store inventory, sales, finance, payroll, and fiscal-ready
            flows — one system for Ugandan retail.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full bg-nova-gradient px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)] transition hover:brightness-110"
            >
              Start free
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`py-4 text-center sm:px-8 sm:py-2 sm:text-left ${
                i > 0 ? "sm:border-l sm:border-slate-200" : ""
              }`}
            >
              <h2 className="text-sm font-semibold text-nova-900">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:space-y-28 lg:py-24">
        {modules.map((m, i) => (
          <article
            key={m.id}
            id={m.id}
            className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-14 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 lg:max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                {m.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
                {m.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                {m.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={m.href}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-nova-blue transition hover:text-nova-blue-dark"
              >
                Explore {m.eyebrow.toLowerCase()}
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="w-full flex-1">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-[1.75rem] bg-nova-gradient opacity-[0.1] blur-2xl"
                />
                <div
                  className={`relative overflow-hidden rounded-2xl border shadow-[0_24px_48px_-16px_rgba(15,27,51,0.2)] ${
                    m.tone === "dark"
                      ? "border-white/10 bg-nova-950"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 border-b px-4 py-2.5 ${
                      m.tone === "dark"
                        ? "border-white/5"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        m.tone === "dark" ? "bg-white/15" : "bg-slate-300"
                      }`}
                    />
                    <span
                      className={`h-2 w-2 rounded-full ${
                        m.tone === "dark" ? "bg-white/15" : "bg-slate-300"
                      }`}
                    />
                    <span
                      className={`h-2 w-2 rounded-full ${
                        m.tone === "dark" ? "bg-white/15" : "bg-slate-300"
                      }`}
                    />
                    <span
                      className={`ml-2 text-[10px] font-medium tracking-wide ${
                        m.tone === "dark" ? "text-white/30" : "text-slate-400"
                      }`}
                    >
                      {m.eyebrow}
                    </span>
                  </div>
                  <div
                    className={`relative h-[220px] sm:h-[260px] lg:h-[300px] ${
                      m.tone === "dark" ? "bg-nova-950" : "bg-white"
                    }`}
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      className="h-full w-full object-contain object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* DARK CTA */}
      <section className="relative overflow-hidden bg-nova-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            See NOVRR on
            <span className="mt-1 block font-medium text-slate-400">
              your{" "}
              <span className="text-nova-gradient font-semibold">shop data</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Start free. Multi-store and fiscal-ready modules scale with you.
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
    </div>
  );
}