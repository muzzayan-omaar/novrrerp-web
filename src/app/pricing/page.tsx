import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "NOVRR ERP packages for single shops, multi-branch retail, and franchises. Start free. Contact for package pricing.",
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Single shop",
    priceLabel: "Start free",
    priceNote: "No card required",
    cta: "Start free",
    href: "/start",
    tone: "default" as const,
    popular: false,
    includes: "Key features",
    features: [
      "POS & receipts",
      "Inventory (single store)",
      "Quotes & sales",
      "Basic reports",
      "Staff roles",
      "UGX · 18% VAT",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Multi-branch",
    priceLabel: "Contact for pricing",
    priceNote: "Matched to your stores",
    cta: "Contact for pricing",
    href: "/start",
    tone: "featured" as const,
    popular: true,
    includes: "Everything in Starter, plus",
    features: [
      "Multi-store inventory",
      "Stock transfers & counts",
      "Quotes, credit & customers",
      "Payroll & expenses",
      "Bank recon prep",
      "EFRIS-style fiscal flows",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Franchise / network",
    priceLabel: "Contact for pricing",
    priceNote: "Custom package limits",
    cta: "Contact for pricing",
    href: "/start",
    tone: "default" as const,
    popular: false,
    includes: "Everything in Growth, plus",
    features: [
      "Higher store & user limits",
      "Platform-style admin",
      "Package governance",
      "Priority onboarding",
      "Dedicated setup help",
      "Repeatable rollout",
    ],
  },
];

const matrixSections = [
  {
    title: "Core operations",
    rows: [
      { label: "POS (barcode, serials, split pay)", starter: true, growth: true, scale: true },
      { label: "Offline-friendly sales", starter: true, growth: true, scale: true },
      { label: "Quotes → sale", starter: true, growth: true, scale: true },
      { label: "18% VAT on quotes & sales", starter: true, growth: true, scale: true },
      { label: "Multi-store inventory", starter: false, growth: true, scale: true },
      { label: "Stock transit & counts", starter: false, growth: true, scale: true },
      { label: "Multi-UOM", starter: "Basic", growth: true, scale: true },
    ],
  },
  {
    title: "Money & people",
    rows: [
      { label: "Expenses (CapEx / OpEx)", starter: false, growth: true, scale: true },
      { label: "Payroll & tax engine", starter: false, growth: true, scale: true },
      { label: "Bank reconciliation prep", starter: false, growth: true, scale: true },
      { label: "Suppliers & purchase orders", starter: "Basic", growth: true, scale: true },
    ],
  },
  {
    title: "Compliance & control",
    rows: [
      { label: "EFRIS-style fiscal receipts", starter: "Ready", growth: true, scale: true },
      { label: "Roles & approval gates", starter: "Basic", growth: true, scale: true },
      { label: "Audit trails", starter: true, growth: true, scale: true },
      { label: "Daily backups", starter: true, growth: true, scale: true },
      { label: "Platform admin / package limits", starter: false, growth: false, scale: true },
      { label: "Priority onboarding", starter: false, growth: false, scale: true },
    ],
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-nova-cyan/15 text-nova-cyan">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return <span className="text-slate-300">—</span>;
  }
  return <span className="text-xs font-medium text-slate-500">{value}</span>;
}

const faqs = [
  {
    q: "Is Starter really free?",
    a: "You can start free with no card. We help you stand up the workspace; package pricing for Growth and Scale is on request.",
  },
  {
    q: "How is pricing decided?",
    a: "By stores, users, and modules you need — not a one-size public rate card. Growth and Scale are scoped with you.",
  },
  {
    q: "Can we add branches later?",
    a: "Yes. Starter is single-shop focused; Growth unlocks multi-store inventory, transfers, and branch roles as you expand.",
  },
  {
    q: "Is NOVRR ready for Uganda tax and fiscal needs?",
    a: "Yes — UGX-first ops, 18% VAT on the sales path, and EFRIS-style fiscal receipt support when you need it.",
  },
];

/** Scale / packages illustration for the dark band */
function PricingIllustration() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-sm"
      aria-hidden
    >
      <defs>
        <linearGradient id="pi-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <rect x="48" y="48" width="120" height="140" rx="14" fill="#16233F" stroke="#1E2E4D" />
      <rect x="60" y="64" width="56" height="8" rx="2" fill="#334155" />
      <rect x="60" y="84" width="40" height="6" rx="2" fill="#22D3EE" opacity="0.5" />
      <rect x="60" y="100" width="80" height="4" rx="1" fill="#1E2E4D" />
      <rect x="60" y="112" width="70" height="4" rx="1" fill="#1E2E4D" />
      <rect x="60" y="124" width="60" height="4" rx="1" fill="#1E2E4D" />
      <rect x="60" y="160" width="72" height="16" rx="8" fill="url(#pi-g)" opacity="0.85" />

      <rect x="150" y="32" width="130" height="156" rx="14" fill="#0F1B33" stroke="#22D3EE" strokeOpacity="0.35" />
      <rect x="164" y="48" width="64" height="9" rx="2" fill="#E2E8F0" opacity="0.9" />
      <rect x="236" y="48" width="28" height="10" rx="5" fill="#22D3EE" opacity="0.3" />
      <rect x="164" y="72" width="48" height="7" rx="2" fill="#22D3EE" opacity="0.7" />
      <rect x="164" y="92" width="90" height="4" rx="1" fill="#334155" />
      <rect x="164" y="104" width="80" height="4" rx="1" fill="#334155" />
      <rect x="164" y="116" width="70" height="4" rx="1" fill="#334155" />
      <rect x="164" y="128" width="85" height="4" rx="1" fill="#334155" />
      <rect x="164" y="156" width="80" height="18" rx="9" fill="white" />

      <rect x="258" y="56" width="120" height="140" rx="14" fill="#16233F" stroke="#1E2E4D" />
      <rect x="270" y="72" width="56" height="8" rx="2" fill="#334155" />
      <rect x="270" y="92" width="40" height="6" rx="2" fill="#64748B" />
      <rect x="270" y="108" width="80" height="4" rx="1" fill="#1E2E4D" />
      <rect x="270" y="120" width="70" height="4" rx="1" fill="#1E2E4D" />
      <rect x="270" y="168" width="72" height="16" rx="8" fill="#1E2E4D" />

      <path d="M100 28 C160 8, 260 8, 320 36" stroke="url(#pi-g)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <circle cx="320" cy="36" r="4" fill="#22D3EE" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO — copy center, UI peeps corners */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_70%_80%_at_50%_-20%,rgba(34,211,238,0.12),rgba(37,99,235,0.06),transparent_60%)]"
        />

        {/* top-right UI peep */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-8 hidden w-[280px] rotate-[8deg] sm:block lg:-right-2 lg:top-12 lg:w-[340px]"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,27,51,0.25)] ring-1 ring-black/5">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="ml-1 text-[9px] text-slate-400">Inventory</span>
            </div>
            <div className="relative h-36 bg-white lg:h-44">
              <img
                src="/snapshots/inventory.png"
                alt=""
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>
        </div>

        {/* bottom-left UI peep */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-8 -left-8 hidden w-[260px] -rotate-[7deg] sm:block lg:-bottom-10 lg:-left-2 lg:w-[320px]"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,27,51,0.25)] ring-1 ring-black/5">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="ml-1 text-[9px] text-slate-400">POS</span>
            </div>
            <div className="relative h-32 bg-white lg:h-40">
              <img
                src="/snapshots/pos.png"
                alt=""
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-14 text-center sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-600 ring-1 ring-slate-200/80">
            <span className="text-emerald-500">✓</span>
            Setup help included · Localized for Uganda
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Packages that match
            <span className="mt-1 block font-medium text-slate-400">
              how you{" "}
              <span className="text-nova-gradient font-semibold">actually operate</span>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-slate-500">
            Start free on a single shop. Scale to multi-branch and franchise when
            you&apos;re ready — pricing on request for Growth and Scale.
          </p>
        </div>
      </section>

      {/* 2. PLAN COLUMNS — pull slightly over hero peeps */}
      <section className="relative z-10 mx-auto -mt-4 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_-20px_rgba(15,27,51,0.12)]">
          <div className="grid lg:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`flex flex-col border-slate-200 ${
                  i < plans.length - 1 ? "lg:border-r" : ""
                } ${plan.tone === "featured" ? "bg-nova-950 text-white" : "bg-white"}`}
              >
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <h2
                      className={`text-xl font-semibold tracking-tight ${
                        plan.tone === "featured" ? "text-white" : "text-nova-900"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    {plan.popular && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-nova-cyan ring-1 ring-white/15">
                        Popular
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-1 text-sm ${
                      plan.tone === "featured" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <p
                    className={`mt-6 text-2xl font-semibold tracking-tight sm:text-3xl ${
                      plan.tone === "featured" ? "text-white" : "text-nova-900"
                    }`}
                  >
                    {plan.priceLabel}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      plan.tone === "featured" ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {plan.priceNote}
                  </p>

                  <Link
                    href={plan.href}
                    className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      plan.tone === "featured"
                        ? "bg-white text-nova-950 hover:bg-slate-100"
                        : plan.id === "starter"
                          ? "bg-nova-950 text-white hover:bg-nova-900"
                          : "bg-slate-100 text-nova-900 hover:bg-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <p
                    className={`mt-8 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      plan.tone === "featured" ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {plan.includes}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${
                          plan.tone === "featured" ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            plan.tone === "featured" ? "bg-nova-cyan" : "bg-nova-blue"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE MATRIX */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            Complete feature list
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            What ships in each package — mapped to real NOVRR modules.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 pr-4 font-medium text-slate-400">Feature</th>
                <th className="px-3 py-3 text-center font-semibold text-nova-900">Starter</th>
                <th className="px-3 py-3 text-center font-semibold text-nova-900">Growth</th>
                <th className="px-3 py-3 text-center font-semibold text-nova-900">Scale</th>
              </tr>
            </thead>
            <tbody>
              {matrixSections.map((section) => (
                <Fragment key={section.title}>
                  <tr>
                    <td
                      colSpan={4}
                      className="bg-slate-50 px-0 py-2.5 pt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100">
                      <td className="py-3 pr-4 text-slate-600">{row.label}</td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.starter} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.growth} />
                      </td>
                      <td className="px-3 py-3 text-center">
                        <Cell value={row.scale} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. DARK BAND + illustration */}
      <section className="relative overflow-hidden bg-nova-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(34,211,238,0.12),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
                Built in, not bolted on
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Why operators pick NOVRR
                <span className="mt-1 block font-medium text-slate-400">
                  over a stack of tools
                </span>
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "One system",
                    body: "POS, stock, payroll, and compliance share the same ledger — not four apps and a spreadsheet.",
                  },
                  {
                    title: "Uganda-ready",
                    body: "UGX-first, 18% VAT on the sales path, EFRIS-style fiscal when receipts need it.",
                  },
                  {
                    title: "Multi-store native",
                    body: "Transfers, counts, and roles designed for branches — not a single-shop tool stretched thin.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/start"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-nova-gradient px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(34,211,238,0.4)] transition hover:brightness-110"
              >
                Start free
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl bg-nova-gradient opacity-10 blur-2xl"
              />
              <PricingIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
          Questions, answered
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

      {/* 6. FINAL STRIP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <div>
            <p className="text-base font-semibold text-nova-900">
              Ready when your shop is
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Start free. Talk to us for Growth or Scale packaging.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/start"
              className="rounded-full bg-nova-gradient px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Start free
            </Link>
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}