import Link from "next/link";

const product = [
  { href: "/product/pos", label: "Point of Sale" },
  { href: "/product/inventory", label: "Multi-store inventory" },
  { href: "/product/sales", label: "Quotes & sales" },
  { href: "/product/finance", label: "Expenses & bank" },
  { href: "/product/finance", label: "Payroll" },
  { href: "/compliance", label: "EFRIS & VAT" },
  { href: "/product/inventory", label: "Suppliers & POs" },
  { href: "/product", label: "Reports" },
  { href: "/product/finance", label: "Staff & roles" },
];

const solutions = [
  { href: "/solutions#single", label: "Single shop" },
  { href: "/solutions#multi", label: "Multi-branch retail" },
  { href: "/solutions#franchise", label: "Growing franchise" },
  { href: "/solutions", label: "Compare setups" },
];

const resources = [
  { href: "/product", label: "Product overview" },
  { href: "/pricing", label: "Pricing" },
  { href: "/start", label: "Get started" },
  { href: "/compliance", label: "Built for Uganda" },
];

const company = [
  { href: "/start", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-nova-950 text-slate-400">
      {/* soft ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(34,211,238,0.08),transparent)]"
      />

      {/* top strip */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400">
            One system for{" "}
            <span className="text-slate-200">sell · stock · pay · compliance</span>
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 self-start rounded-full bg-nova-gradient px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:self-auto"
          >
            Start free
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:gap-10">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/favicon.png" alt="" className="h-8 w-auto" />
              <span className="font-brand text-[15px] leading-none text-white sm:text-base">
                NOVRR <span className="text-nova-blue">ERP</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Localized ERP for Ugandan shops and multi-branch retail. Run the
              counter, the stockroom, and the books from one place.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <dt className="text-slate-500">Currency</dt>
                <dd className="mt-0.5 font-medium text-slate-200">UGX-first</dd>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <dt className="text-slate-500">Tax</dt>
                <dd className="mt-0.5 font-medium text-slate-200">18% VAT</dd>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <dt className="text-slate-500">Fiscal</dt>
                <dd className="mt-0.5 font-medium text-slate-200">EFRIS-ready</dd>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <dt className="text-slate-500">Scale</dt>
                <dd className="mt-0.5 font-medium text-slate-200">Multi-store</dd>
              </div>
            </dl>
          </div>

          {/* product */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {product.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-nova-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* solutions */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-nova-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* resources */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-nova-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-nova-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                App
              </p>
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                className="mt-3 inline-flex text-sm text-slate-400 transition hover:text-nova-cyan"
              >
                Login →
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NOVRR ERP. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Systems operational
            </span>
            <span className="text-slate-700">·</span>
            <span>Built for Uganda</span>
            <span className="text-slate-700">·</span>
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}