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
    eyebrow: "Point of sale",
    title: "Built for the counter",
    body: "Scan barcodes, pick serials or units, split payments, and keep selling when the line drops.",
    bullets: ["Offline-friendly sale flow", "Serial & unit pickers", "Void / refund with approval"],
    // public/snapshots/ — image shows first; short loop plays on top when present
    image: "/snapshots/pos.png",
    video: "/snapshots/pos.mp4", // optional: pos.webm also supported in the player
    imageAlt: "NOVRR POS sale screen",
  },
  {
    id: "inventory",
    eyebrow: "Inventory",
    title: "Branches that stay in sync",
    body: "Multi-store stock, in-transit handshake, stock counts with approval, and serialized transfers.",
    bullets: ["Multi-UOM foundation", "Stock counts + approval", "Store switcher for staff"],
    image: "/snapshots/inventory.png",
    video: "/snapshots/inventory.mp4",
    imageAlt: "NOVRR multi-store inventory",
  },
  {
    id: "sales",
    eyebrow: "Quotes & sales",
    title: "From proforma to cash",
    body: "Create quotes without touching stock, convert when the customer commits, apply VAT, attach fiscal data.",
    bullets: ["Proforma quotes", "18% VAT support", "Customer credit limits"],
    image: "/snapshots/sales.png",
    video: "/snapshots/sales.mp4",
    imageAlt: "NOVRR quotes and sales",
  },
  {
    id: "finance",
    eyebrow: "Finance & payroll",
    title: "Money and people in one ledger",
    body: "Expenses, supplier links, payroll tax engine, bank recon prep, and roles across stores.",
    bullets: ["Payroll + tax engine", "Bank recon prep", "Audit-friendly trails"],
    image: "/snapshots/finance.png",
    video: "/snapshots/finance.mp4",
    imageAlt: "NOVRR finance and payroll",
  },
];

const solutions = [
  {
    id: "solution-single",
    index: "01",
    title: "Single shop",
    tagline: "One counter. Full control.",
    body: "POS, stock, and simple payroll without the notebook-and-spreadsheet stack.",
    replaces: ["Paper sales book", "Excel stock", "Manual payslips"],
    focus: ["POS + receipts", "Live stock", "Day-end clarity"],
    href: "/#pos",
    tone: "default",
  },
  {
    id: "solution-multi",
    index: "02",
    title: "Multi-branch retail",
    tagline: "Every branch. One picture.",
    body: "Shared catalog, transfers, and an owner view across locations — stock stops living in chat.",
    replaces: ["Per-branch Excel", "WhatsApp stock checks", "Separate POS apps"],
    focus: ["Store transfers", "Branch roles", "Owner dashboard"],
    href: "/#inventory",
    tone: "featured",
  },
  {
    id: "solution-franchise",
    index: "03",
    title: "Growing franchise",
    tagline: "Scale without the chaos.",
    body: "Packages, store limits, and consistent ops as you add locations and teams.",
    replaces: ["Fragmented tools", "Ad-hoc reporting", "Manual onboarding"],
    focus: ["Package limits", "Governance", "Repeatable rollout"],
    href: "/#finance",
    tone: "default",
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

      {/* 5. DEEP PRODUCT — dark band, partial UI snapshots (ClickUp energy) */}
      <section className="relative overflow-hidden bg-nova-950 text-white">
        {/* ambient brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-nova-blue/20 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-nova-cyan/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              Product in depth
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              See how NOVRR
              <span className="mt-1 block font-medium text-slate-400">
                actually runs a store
              </span>
            </h2>
          </div>

          <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
            {deepFeatures.map((f, i) => (
              <div
                key={f.id}
                id={f.id}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-14 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* copy */}
                <div className="flex-1 lg:max-w-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                    {f.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                    {f.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* partial snapshot — not a full flat image dump */}
                <div className="w-full flex-1">
                  <div className="relative">
                    {/* glow behind frame */}
                    <div
                      className="absolute -inset-4 rounded-[2rem] bg-nova-gradient opacity-20 blur-2xl"
                      aria-hidden
                    />
                    {/* window chrome */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-nova-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                        <span className="ml-2 text-[10px] font-medium tracking-wide text-white/30">
                          {f.eyebrow}
                        </span>
                      </div>
                      {/*
                        Image first (always). Short product video loops on top when the file exists.
                        public/snapshots/
                          pos.png + pos.mp4 (optional pos.webm)
                          inventory.png + inventory.mp4
                          sales.png + sales.mp4
                          finance.png + finance.mp4
                        Keep the important UI in the TOP of the frame — height is clipped (peep).
                      */}
                      <div className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[320px]">
                        <img
                          src={f.image}
                          alt={f.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                        <video
                          className="absolute inset-0 z-[1] h-full w-full object-cover object-top"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={f.image}
                          aria-label={f.imageAlt}
                        >
                          <source src={f.video.replace(".mp4", ".webm")} type="video/webm" />
                          <source src={f.video} type="video/mp4" />
                        </video>
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-nova-900 to-transparent"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS — editorial rows, not equal cards */}
      <section id="solutions" className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
              Who it&apos;s for
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl lg:text-[2.75rem]">
              Built for how you
              <span className="mt-1 block font-medium text-slate-400">
                actually <span className="text-nova-gradient font-semibold">operate</span>
              </span>
            </h2>
            <p className="mt-4 text-slate-500">
              Same NOVRR core — tuned to one shop, many branches, or a growing network.
            </p>
          </div>

          <div className="mt-14 space-y-4 sm:mt-16">
            {solutions.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className={`group relative overflow-hidden rounded-3xl border transition ${
                  s.tone === "featured"
                    ? "border-nova-800/80 bg-nova-950 text-white shadow-[0_24px_48px_-16px_rgba(15,27,51,0.35)]"
                    : "border-slate-200/90 bg-slate-50/50 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-10">
                  {/* index + topology cue */}
                  <div className="flex items-start gap-5 lg:block lg:min-w-[7rem]">
                    <span
                      className={`font-brand text-3xl tracking-wider sm:text-4xl ${
                        s.tone === "featured" ? "text-white/25" : "text-slate-200"
                      }`}
                    >
                      {s.index}
                    </span>
                    {/* simple store topology marks */}
                    <div className="mt-0 flex items-center gap-1.5 lg:mt-4" aria-hidden>
                      {s.index === "01" && (
                        <span className={`h-3 w-3 rounded-sm ${s.tone === "featured" ? "bg-nova-cyan" : "bg-nova-blue"}`} />
                      )}
                      {s.index === "02" && (
                        <>
                          <span className="h-3 w-3 rounded-sm bg-nova-cyan" />
                          <span className="h-px w-3 bg-nova-cyan/50" />
                          <span className="h-3 w-3 rounded-sm bg-nova-cyan" />
                          <span className="h-px w-3 bg-nova-cyan/50" />
                          <span className="h-3 w-3 rounded-sm bg-nova-cyan" />
                        </>
                      )}
                      {s.index === "03" && (
                        <span className="grid grid-cols-3 gap-1">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <span
                              key={i}
                              className={`h-2 w-2 rounded-[2px] ${
                                s.tone === "featured" ? "bg-nova-cyan/80" : "bg-nova-blue/70"
                              }`}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* main copy */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3
                        className={`text-xl font-semibold tracking-tight sm:text-2xl ${
                          s.tone === "featured" ? "text-white" : "text-nova-900"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`text-sm ${
                          s.tone === "featured" ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        {s.tagline}
                      </span>
                    </div>
                    <p
                      className={`mt-3 max-w-xl text-sm leading-relaxed sm:text-[15px] ${
                        s.tone === "featured" ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {s.body}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.focus.map((f) => (
                        <span
                          key={f}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            s.tone === "featured"
                              ? "bg-white/10 text-slate-200 ring-1 ring-white/10"
                              : "bg-white text-slate-600 ring-1 ring-slate-200"
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          s.tone === "featured" ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        Replaces
                      </p>
                      <p
                        className={`mt-1.5 text-xs sm:text-sm ${
                          s.tone === "featured" ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {s.replaces.join(" · ")}
                      </p>
                    </div>
                  </div>

                  {/* learn more */}
                  <div className="lg:text-right">
                    <Link
                      href={s.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                        s.tone === "featured"
                          ? "text-nova-cyan hover:text-white"
                          : "text-nova-blue hover:text-nova-blue-dark"
                      }`}
                    >
                      Learn more
                      <span className="transition group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUTCOMES — big statement + open metrics (no stock cards) */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/80 py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(37,99,235,0.06),transparent_50%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
                Outcomes
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Run every store
                <span className="mt-1 block font-medium text-slate-400">
                  from{" "}
                  <span className="text-nova-gradient font-semibold">one screen</span>
                </span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
                Less tab-switching. Fewer stock surprises. A clearer path from sale to
                month-end — built for how Ugandan shops already work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-12">
              {[
                {
                  value: "1",
                  unit: "system",
                  label: "Instead of POS + Excel + chat + payroll apps",
                },
                {
                  value: "N",
                  unit: "branches",
                  label: "Stock and roles stay aligned across locations",
                },
                {
                  value: "18%",
                  unit: "VAT",
                  label: "Quotes and sales with local tax baked in",
                },
                {
                  value: "EFRIS",
                  unit: "ready",
                  label: "Fiscal-style receipt flow when you need it",
                },
              ].map((m) => (
                <div key={m.label} className="border-l border-slate-200 pl-5">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl">
                      {m.value}
                    </span>
                    <span className="text-sm font-medium text-nova-blue">{m.unit}</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
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
