import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "NOVRR for single shops, multi-branch retail, and growing franchises. One system — packages that match how you operate in Uganda.",
};

const solutions = [
  {
    id: "single",
    step: "01",
    eyebrow: "Single shop",
    title: "One counter, clear stock",
    body: "You do not need enterprise theatre. You need the till, the shelf, and the books to agree — every day.",
    points: [
      "POS with barcode, serials, and split pay",
      "Inventory that matches the shelf",
      "Quotes, VAT, basic reports",
      "Roles without multi-branch overhead",
    ],
    fit: "Starter",
    accent: "from-nova-cyan/20 to-transparent",
  },
  {
    id: "multi",
    step: "02",
    eyebrow: "Multi-branch",
    title: "Branches that stay in sync",
    body: "The problem is not more features. It is stock moving between shops while chat pretends to be a warehouse.",
    points: [
      "Per-store quantities, shared catalog",
      "Transfers with in-transit handshake",
      "Counts with approval across shops",
      "Owner view without flying branch to branch",
    ],
    fit: "Growth",
    accent: "from-nova-blue/20 to-transparent",
  },
  {
    id: "franchise",
    step: "03",
    eyebrow: "Franchise",
    title: "Packages and governance",
    body: "Repeatable rollout and control that scales with the network — not a single-shop tool stretched until it breaks.",
    points: [
      "Platform admin and package limits",
      "Higher store and user ceilings",
      "Priority onboarding for new outlets",
      "Same modules, governed as a network",
    ],
    fit: "Scale",
    accent: "from-violet-500/15 to-transparent",
  },
];

function BranchNetworkIllustration() {
  return (
    <svg
      viewBox="0 0 520 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-lg"
      aria-hidden
    >
      <defs>
        <linearGradient id="bn-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <path d="M110 140 C180 140, 200 80, 260 80" stroke="url(#bn-g)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M110 140 C180 140, 200 200, 260 200" stroke="url(#bn-g)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M320 80 C380 80, 400 100, 440 100" stroke="url(#bn-g)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M320 200 C380 200, 400 180, 440 180" stroke="url(#bn-g)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M320 140 C360 140, 400 140, 440 140" stroke="url(#bn-g)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <g transform="translate(40, 100)">
        <rect width="70" height="80" rx="10" fill="#0F1B33" stroke="#1E2E4D" />
        <rect x="12" y="14" width="46" height="28" rx="4" fill="#16233F" />
        <rect x="16" y="18" width="20" height="4" rx="1" fill="#22D3EE" opacity="0.7" />
        <rect x="16" y="26" width="30" height="3" rx="1" fill="#334155" />
        <rect x="18" y="52" width="16" height="20" rx="2" fill="#1E2E4D" />
        <rect x="38" y="56" width="20" height="4" rx="1" fill="#334155" />
        <text x="35" y="98" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="system-ui">Single</text>
      </g>
      <g transform="translate(245, 45)">
        <rect width="58" height="58" rx="8" fill="#0F1B33" stroke="#22D3EE" strokeOpacity="0.4" />
        <rect x="10" y="12" width="38" height="20" rx="3" fill="#16233F" />
        <rect x="14" y="16" width="16" height="3" rx="1" fill="#22D3EE" opacity="0.6" />
        <rect x="14" y="38" width="12" height="12" rx="2" fill="#1E2E4D" />
      </g>
      <g transform="translate(245, 165)">
        <rect width="58" height="58" rx="8" fill="#0F1B33" stroke="#1E2E4D" />
        <rect x="10" y="12" width="38" height="20" rx="3" fill="#16233F" />
        <rect x="14" y="16" width="16" height="3" rx="1" fill="#64748B" />
        <rect x="14" y="38" width="12" height="12" rx="2" fill="#1E2E4D" />
      </g>
      <text x="274" y="250" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="system-ui">Multi-branch</text>
      <g transform="translate(420, 70)">
        <circle cx="20" cy="20" r="18" fill="#0F1B33" stroke="#22D3EE" strokeOpacity="0.5" />
        <circle cx="20" cy="20" r="6" fill="url(#bn-g)" />
      </g>
      <g transform="translate(420, 130)">
        <circle cx="20" cy="20" r="18" fill="#0F1B33" stroke="#1E2E4D" />
        <circle cx="20" cy="20" r="5" fill="#334155" />
      </g>
      <g transform="translate(420, 190)">
        <circle cx="20" cy="20" r="18" fill="#0F1B33" stroke="#1E2E4D" />
        <circle cx="20" cy="20" r="5" fill="#334155" />
      </g>
      <text x="440" y="250" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="system-ui">Network</text>
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* HERO + BranchNetworkIllustration */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_70%_50%_at_40%_-10%,rgba(34,211,238,0.12),rgba(37,99,235,0.05),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              Solutions
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              Same system.
              <span className="mt-1 block font-medium text-slate-400">
                Different{" "}
                <span className="text-nova-gradient font-semibold">scale</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Single shop, multi-branch, or franchise — NOVRR does not change
              product when you grow. Package and limits do.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full bg-nova-gradient px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)] transition hover:brightness-110"
              >
                Start free
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-nova-blue hover:text-nova-blue-dark"
              >
                See packages →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-nova-gradient opacity-[0.08] blur-2xl"
            />
            <BranchNetworkIllustration />
          </div>
        </div>
      </section>

      {/* THREE SCALES — full-width editorial bands */}
      <section className="border-b border-slate-200">
        {solutions.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className={`relative border-b border-slate-100 last:border-b-0 ${
              i % 2 === 1 ? "bg-slate-50/70" : "bg-white"
            }`}
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${s.accent}`}
            />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
              <div className="lg:col-span-4">
                <span className="font-mono text-[11px] tabular-nums text-slate-300">
                  {s.step}
                </span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                  {s.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                  {s.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/start"
                    className="inline-flex rounded-full bg-nova-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-nova-900"
                  >
                    Start free
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm font-semibold text-nova-blue hover:text-nova-blue-dark"
                  >
                    {s.fit} package →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid gap-0 sm:grid-cols-2">
                  {s.points.map((p, pi) => (
                    <li
                      key={p}
                      className={`flex gap-3 border-slate-200 py-4 pr-4 ${
                        pi < 2 ? "sm:border-b" : ""
                      } ${pi % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"}`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                      <span className="text-sm leading-relaxed text-slate-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* DARK GROWTH PATH */}
      <section className="bg-nova-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              Growth path
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Expand without
              <span className="mt-1 block font-medium text-slate-400">
                rebuilding the system
              </span>
            </h2>
          </div>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-nova-cyan via-nova-blue to-slate-700 sm:left-0 sm:right-0 sm:top-5 sm:bottom-auto sm:h-px sm:w-auto sm:bg-gradient-to-r"
            />
            <ol className="grid gap-10 sm:grid-cols-3 sm:gap-6">
              {[
                { n: "01", title: "Open on one shop", body: "Starter — POS, stock, basic ops. No card required." },
                { n: "02", title: "Add branches", body: "Growth — transfers, multi-store roles, payroll, fiscal flows." },
                { n: "03", title: "Govern the network", body: "Scale — higher limits, package control, priority rollout." },
              ].map((step) => (
                <li key={step.n} className="relative pl-10 sm:pl-0 sm:pt-12">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-nova-950 text-[11px] font-semibold text-nova-cyan ring-2 ring-nova-cyan/40 sm:left-0 sm:top-0">
                    {step.n}
                  </span>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full bg-nova-gradient px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Start free
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Compare packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}