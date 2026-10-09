import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EFRIS & Compliance",
  description:
    "NOVRR for Uganda: UGX-first ops, 18% VAT, EFRIS-style fiscal receipts, NSSF-aware payroll path, roles, audit trails.",
};

const withoutWith = {
  without: [
    "Fiscal receipts live in a separate tool from the till",
    "VAT is recalculated in spreadsheets at month-end",
    "UGX is an afterthought in a USD-first product",
    "Who approved a void is a guess, not a trail",
  ],
  with: [
    "Fiscal-ready path on the same sale that moved stock",
    "18% VAT on quotes and sales — not a side sheet",
    "UGX-first operations from the counter up",
    "Roles, approvals, and audit on sensitive moves",
  ],
};

const deepFeatures = [
  {
    eyebrow: "EFRIS-ready sales",
    title: "Fiscal data on the same ticket",
    body: "When a sale needs fiscal fields, they should not live in a second app. NOVRR keeps EFRIS-style receipt support on the path that already updated stock and cash.",
    bullets: [
      "Fiscal receipt IDs on the sales flow",
      "QR-style verify links where supported",
      "Same ticket the counter just closed",
    ],
    image: "/snapshots/sales.png",
    imageAlt: "NOVRR sales / fiscal path",
  },
  {
    eyebrow: "VAT & UGX",
    title: "18% on the operational path",
    body: "Uganda Revenue Authority expects VAT to match the books. NOVRR carries 18% VAT on quotes and sales in UGX — not a localization toggle after the fact.",
    bullets: [
      "UGX-first day-to-day operations",
      "18% VAT on quotes and sales",
      "Less reconstruction at month-end",
    ],
    image: "/snapshots/pos.png",
    imageAlt: "NOVRR POS with local currency",
  },
  {
    eyebrow: "Payroll & NSSF",
    title: "Staff pay that fits local practice",
    body: "NSSF and pay deductions belong next to the same people who run the till. The payroll path is built for Ugandan staff runs — not a foreign template you patch later.",
    bullets: [
      "Staff records and pay runs in one system",
      "Tax engine on the pay path",
      "Work status and leave beside roles",
    ],
    image: "/snapshots/finance.png",
    imageAlt: "NOVRR finance and payroll",
  },
];

const institutions = [
  {
    code: "URA",
    name: "Uganda Revenue Authority",
    focus: "EFRIS & VAT",
    body: "Fiscal-ready sales path and 18% VAT on the same tickets you already issue — so tax is not a second stack.",
  },
  {
    code: "NSSF",
    name: "National Social Security Fund",
    focus: "Staff contributions",
    body: "Payroll sits in NOVRR so contributions and pay runs can follow local practice without a disconnected spreadsheet.",
  },
  {
    code: "Ops",
    name: "Your internal controls",
    focus: "Roles & audit",
    body: "Multi-store roles, approval gates, and trails on voids and counts — governance the regulator cannot invent for you.",
  },
];

const checklist = [
  { title: "EFRIS-style fiscal receipts", body: "IDs and verify path on the sale" },
  { title: "18% VAT", body: "Quotes and sales, UGX-first" },
  { title: "NSSF-aware payroll path", body: "Staff pay next to the till" },
  { title: "Multi-store roles", body: "Who can void, count, approve" },
  { title: "Audit trails", body: "Who changed what, when" },
  { title: "Daily backups", body: "Operational data retained" },
];

const faqs = [
  {
    q: "Is NOVRR an official URA / EFRIS device?",
    a: "NOVRR is operational software with an EFRIS-style fiscal-ready sales path. Device certification and exact integration scope are confirmed during setup for your package and environment.",
  },
  {
    q: "Does NOVRR file NSSF returns for us?",
    a: "Payroll is designed for Ugandan staff pay runs, including contribution-aware paths. Filing and official submission processes stay with your process — NOVRR keeps the numbers next to the people and the till.",
  },
  {
    q: "Does every sale require a fiscal receipt?",
    a: "Fiscal data is on the path when you need it. Day-to-day POS still runs; compliance fields apply where your process requires them.",
  },
  {
    q: "How does multi-store affect compliance?",
    a: "Roles and approvals work across branches. Fiscal and VAT sit on the same system that already knows which store sold what.",
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO — unchanged structure */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_70%_50%_at_30%_-10%,rgba(34,211,238,0.12),rgba(37,99,235,0.05),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              EFRIS & compliance
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              Built for Uganda
              <span className="mt-1 block font-medium text-slate-400">
                not{" "}
                <span className="text-nova-gradient font-semibold">adapted later</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              UGX-first ops, 18% VAT, EFRIS-style fiscal when receipts need it,
              NSSF-aware payroll — next to the same stock and till that ran the day.
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
                Setup help included
                <span className="mx-1.5 text-slate-300">·</span>
                Localized for Uganda
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-nova-gradient opacity-[0.12] blur-3xl"
            />
            <ComplianceIllustration />
          </div>
        </div>
      </section>

      {/* 2. WITHOUT / WITH */}
      <section className="border-b border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            Compliance without a second stack
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-0 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
            <div className="border-b border-slate-200 bg-white p-6 sm:border-b-0 sm:border-r sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Without NOVRR
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
                With NOVRR
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

      {/* 3. DEEP + MOCKUPS */}
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

      {/* 4. UGANDA INSTITUTIONS */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                Uganda landscape
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
                Departments and duties
                <span className="mt-1 block font-medium text-slate-400">
                  the system has to respect
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                We do not replace URA or NSSF. We keep fiscal, VAT, and staff pay
                on the same operational trail so you are not inventing compliance
                in chat at month-end.
              </p>
              <div className="mt-8">
                <InstitutionsIllustration />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {institutions.map((inst) => (
                  <li key={inst.code} className="flex gap-5 py-6 sm:gap-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nova-950 font-mono text-[11px] font-semibold tracking-wide text-nova-cyan">
                      {inst.code}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <h3 className="text-[15px] font-semibold text-nova-900">
                          {inst.name}
                        </h3>
                        <span className="text-xs font-medium text-slate-400">
                          {inst.focus}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                        {inst.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILT IN — numbered with body */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Built in
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            What ships for
            <span className="mt-1 block font-medium text-slate-400">
              local operations
            </span>
          </h2>
        </div>
        <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {checklist.map((item, i) => (
            <li
              key={item.title}
              className="flex items-baseline gap-4 py-4 sm:gap-6 sm:py-5"
            >
              <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-slate-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-[15px] font-semibold text-nova-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 sm:mt-0 sm:max-w-xs sm:text-right">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. RELATED */}
      <section className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Same system
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
            Compliance rides the ops trail
          </h2>
          <div className="relative mt-12">
            <div
              aria-hidden
              className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-nova-cyan via-nova-blue to-slate-200 sm:left-1/2 sm:top-8 sm:bottom-auto sm:h-px sm:w-auto sm:inset-x-8 sm:bg-gradient-to-r"
            />
            <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {[
                { href: "/product/pos", label: "Point of sale", desc: "Where the ticket starts", step: "01" },
                { href: "/product/sales", label: "Quotes & sales", desc: "VAT on the deal path", step: "02" },
                { href: "/product/finance", label: "Finance & payroll", desc: "NSSF-aware pay path", step: "03" },
              ].map((r) => (
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
        </div>
      </section>

      {/* 7. DARK CTA */}
      <section className="relative overflow-hidden bg-nova-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Local ops on
            <span className="mt-1 block font-medium text-slate-400">
              one{" "}
              <span className="text-nova-gradient font-semibold">system</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
            Start free. Confirm EFRIS and payroll scope with us during setup.
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

      {/* 8. FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-nova-900">
          Compliance questions
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

function ComplianceIllustration() {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-md"
      aria-hidden
    >
      <defs>
        <linearGradient id="ci-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <path
        d="M210 36c0 0 88 28 88 100 0 72-88 120-88 120S122 208 122 136C122 64 210 36 210 36z"
        fill="#0F1B33"
        stroke="#1E2E4D"
        strokeWidth="2"
      />
      <path
        d="M210 56c0 0 64 20 64 80 0 56-64 96-64 96s-64-40-64-96c0-60 64-80 64-80z"
        fill="#16233F"
      />
      <path
        d="M178 140l22 22 44-48"
        stroke="url(#ci-g)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M268 88h72a8 8 0 0 1 8 8v140l-14-10-14 10-14-10-14 10-14-10-14 10V96a8 8 0 0 1 8-8z"
        fill="#F8FAFC"
        stroke="#E2E8F0"
      />
      <rect x="282" y="104" width="44" height="5" rx="1" fill="#CBD5E1" />
      <rect x="282" y="116" width="36" height="4" rx="1" fill="#E2E8F0" />
      <rect x="282" y="126" width="40" height="4" rx="1" fill="#E2E8F0" />
      <rect x="282" y="144" width="44" height="6" rx="1" fill="#22D3EE" opacity="0.4" />
      <rect x="282" y="160" width="28" height="4" rx="1" fill="#E2E8F0" />
      <rect x="48" y="200" width="72" height="36" rx="10" fill="#0F1B33" stroke="#1E2E4D" />
      <text x="84" y="223" textAnchor="middle" fill="#22D3EE" fontSize="12" fontFamily="system-ui" fontWeight="600">
        UGX
      </text>
      <rect x="48" y="248" width="72" height="28" rx="8" fill="#16233F" stroke="#334155" />
      <text x="84" y="267" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="system-ui">
        18% VAT
      </text>
    </svg>
  );
}

function InstitutionsIllustration() {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-sm"
      aria-hidden
    >
      <defs>
        <linearGradient id="ii-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      {/* base platform */}
      <rect x="24" y="160" width="312" height="12" rx="4" fill="#E2E8F0" />
      {/* URA block */}
      <rect x="36" y="72" width="88" height="88" rx="12" fill="#0F1B33" stroke="#1E2E4D" />
      <rect x="48" y="88" width="64" height="8" rx="2" fill="#22D3EE" opacity="0.7" />
      <rect x="48" y="104" width="48" height="4" rx="1" fill="#334155" />
      <rect x="48" y="114" width="56" height="4" rx="1" fill="#334155" />
      <text x="80" y="148" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="system-ui">
        URA
      </text>
      {/* connector */}
      <path d="M124 116h28" stroke="url(#ii-g)" strokeWidth="2" strokeLinecap="round" />
      {/* NOVRR hub */}
      <rect x="152" y="56" width="56" height="104" rx="12" fill="#0F1B33" stroke="#22D3EE" strokeOpacity="0.5" />
      <rect x="164" y="72" width="32" height="6" rx="2" fill="url(#ii-g)" />
      <rect x="164" y="88" width="32" height="4" rx="1" fill="#334155" />
      <rect x="164" y="98" width="24" height="4" rx="1" fill="#334155" />
      <rect x="164" y="120" width="32" height="20" rx="6" fill="#16233F" />
      <text x="180" y="148" textAnchor="middle" fill="#22D3EE" fontSize="9" fontFamily="system-ui" fontWeight="600">
        NOVRR
      </text>
      {/* connector */}
      <path d="M208 116h28" stroke="url(#ii-g)" strokeWidth="2" strokeLinecap="round" />
      {/* NSSF block */}
      <rect x="236" y="72" width="88" height="88" rx="12" fill="#0F1B33" stroke="#1E2E4D" />
      <rect x="248" y="88" width="64" height="8" rx="2" fill="#64748B" />
      <rect x="248" y="104" width="48" height="4" rx="1" fill="#334155" />
      <rect x="248" y="114" width="56" height="4" rx="1" fill="#334155" />
      <text x="280" y="148" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="system-ui">
        NSSF
      </text>
    </svg>
  );
}