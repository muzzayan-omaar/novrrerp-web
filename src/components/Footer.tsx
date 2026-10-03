import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-nova-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/favicon.png"
                alt=""
                className="h-8 w-auto"
              />
              <span className="font-brand text-[15px] leading-none text-white sm:text-base">
                NOVRR{" "}
                <span className="text-nova-blue">ERP</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Localized ERP for Ugandan shops and multi-branch retail. Sell, stock, pay staff, stay EFRIS-ready.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/#pos" className="hover:text-nova-cyan">POS</Link></li>
              <li><Link href="/#inventory" className="hover:text-nova-cyan">Inventory</Link></li>
              <li><Link href="/#sales" className="hover:text-nova-cyan">Sales & Quotes</Link></li>
              <li><Link href="/#finance" className="hover:text-nova-cyan">Finance & Payroll</Link></li>
              <li><Link href="/pricing" className="hover:text-nova-cyan">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/#solutions" className="hover:text-nova-cyan">Single shop</Link></li>
              <li><Link href="/#solutions" className="hover:text-nova-cyan">Multi-branch</Link></li>
              <li><Link href="/#solutions" className="hover:text-nova-cyan">Franchise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-nova-cyan">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-nova-cyan">Terms</Link></li>
              <li><Link href="/#start" className="hover:text-nova-cyan">Contact / Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOVRR ERP. Built for Uganda.</p>
          <p>EFRIS-ready · Multi-store · UGX</p>
        </div>
      </div>
    </footer>
  );
}
