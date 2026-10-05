import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inventory — Multi-store stock",
  description:
    "NOVRR multi-store inventory: stock transfers, counts with approval, multi-UOM, serials, and suppliers. Built for Ugandan retail branches.",
};

const withoutWith = {
  without: [
    "Each branch runs its own spreadsheet or WhatsApp thread",
    "Transfers happen in chat — stock never matches reality",
    "Counts are optional, late, or never approved",
    "Owners discover stockouts after the customer does",
  ],
  with: [
    "One catalog, many stores — quantities stay per branch",
    "In-transit handshake so stock is never double-counted",
    "Counts require approval before the ledger moves",
    "Real-time view across branches from a single switcher",
  ],
};

const deepFeatures = [
  {
    eyebrow: "Multi-store",
    title: "Branches that stay in sync",
    body: "Sell from Kampala while Mukono still has units. NOVRR tracks quantity per store — not one pile pretending to be many.",
    bullets: [
      "Per-store quantities on a shared catalog",
      "Store switcher for staff and owners",
      "Transfer instead of re-keying stock",
    ],
    image: "/snapshots/inventory.png",
    imageAlt: "NOVRR multi-store inventory",
  },
  {
    eyebrow: "Transit & counts",
    title: "Stock that moves with a trail",
    body: "Transfers leave a clear in-transit state. Counts are not a casual edit — they go through approval so the books stay honest.",
    bullets: [
      "Stock transit with send / receive handshake",
      "Physical counts with approval gate",
      "Audit on who adjusted what",
    ],
    image: "/snapshots/inventory.png",
    imageAlt: "NOVRR stock transit and counts",
  },
  {
    eyebrow: "Units & serials",
    title: "Sell the unit the customer buys",
    body: "Pieces, packs, cartons — multi-UOM without parallel SKUs. Serialized items are picked at the counter, not patched in after.",
    bullets: [
      "Multi-UOM on the same product",
      "Serial tracking through sale and transfer",
      "Suppliers and POs when you restock",
    ],
    image: "/snapshots/pos.png",
    imageAlt: "NOVRR units and serials at sale",
  },
];

const capabilities = [
  { title: "Shared catalog", body: "One product master; quantities live per store." },
  { title: "Stock transfers", body: "Move units between branches with in-transit state." },
  { title: "Count + approve", body: "Physical counts do not rewrite stock until approved." },
  { title: "Multi-UOM", body: "Sell and receive in the unit that matches the shelf." },
  { title: "Serials", body: "Track serialized stock from receive to sale." },
  { title: "Suppliers & POs", body: "Purchase orders and reliability when you restock." },
];

const related = [
  { href: "/product/pos", label: "Point of sale", desc: "Every sale pulls from live stock", step: "01" },
  { href: "/product/sales", label: "Quotes & sales", desc: "Quotes hold; sales commit stock", step: "02" },
  { href: "/product/finance", label: "Finance & payroll", desc: "Cost and pay after the move", step: "03" },
];

const faqs = [
  {
    q: "Can each branch see only its own stock?",
    a: "Yes. Quantities are per store. Staff work in the store they are assigned to; owners can switch and see the network.",
  },
  {
    q: "What happens during a transfer?",
    a: "Stock leaves the source and sits in transit until the destination receives it — so it is never available in two places at once.",
  },
  {
    q: "Do stock counts change numbers immediately?",
    a: "No. Counts go through an approval gate so a miscount does not silently rewrite the ledger.",
  },
  {
    q: "Is inventory separate from POS?",
    a: "No. A completed sale adjusts the same stock the inventory module shows. One system, one truth.",
  },
];

export default function InventoryProductPage() {
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
              NOVRR Inventory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              Stock that matches
              <span className="mt-1 block font-medium text-slate-400">
                every{" "}
                <span className="text-nova-gradient font-semibold">branch</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Multi-store quantities, transfers with a trail, counts that need
              approval, multi-UOM and serials — so the shelf and the system
              stop arguing.
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
                  NOVRR <span className="text-nova-blue/70">Inventory</span>
                </span>
              </div>
              <div className="relative bg-white">
                <img
                  src="/snapshots/inventory.png"
                  alt="NOVRR multi-store inventory"
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
            A better way to hold stock
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-0 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
            <div className="border-b border-slate-200 bg-white p-6 sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Without NOVRR Inventory
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
                With NOVRR Inventory
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

      {/* 4. CAPABILITIES */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
              In the stock room
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
              What multi-store stock
              <span className="mt-1 block font-medium text-slate-400">
                actually needs
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Transfers, counts, and units — not a flat list that pretends every
              branch is one warehouse.
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

      {/* 5. RELATED */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Same system
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            Inventory feeds the trail
            <span className="mt-1 block font-medium text-slate-400">
              counter and books follow
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
            See stock the way
            <span className="mt-1 block font-medium text-slate-400">
              your{" "}
              <span className="text-nova-gradient font-semibold">branches</span> do
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Start free. Multi-store inventory scales when you open the next shop.
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
          Inventory questions
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