import type { Metadata } from "next";
import { StartForm } from "@/components/StartForm";
import { StartIllustration } from "@/components/StartIllustration";

export const metadata: Metadata = {
  title: "Start free",
  description:
    "Start free with NOVRR ERP. One system for POS, multi-store inventory, sales, payroll, and EFRIS-ready compliance — built for Uganda.",
};

export default function StartPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(34,211,238,0.12),rgba(37,99,235,0.06),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
            Start free
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-nova-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Get NOVRR on
            <span className="mt-1 block font-medium text-slate-400">
              your{" "}
              <span className="text-nova-gradient font-semibold">shop data</span>
            </span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
            Tell us the shop. We spin up your workspace — POS, stock, sales,
            payroll, and fiscal-ready flows in one place.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "No card required to start",
              "Multi-store ready from day one",
              "UGX · 18% VAT · EFRIS-style fiscal",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden sm:block">
            <StartIllustration />
          </div>

          <p className="mt-8 text-xs text-slate-400 sm:mt-6">
            Already have an account?{" "}
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              className="font-medium text-nova-blue hover:text-nova-blue-dark"
            >
              Login →
            </a>
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-nova-gradient opacity-[0.1] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_48px_-16px_rgba(15,27,51,0.12)]">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
              <h2 className="text-base font-semibold text-nova-900">
                Create your workspace
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Three fields. We handle the rest.
              </p>
            </div>
            <div className="px-6 py-6 sm:px-8">
              <StartForm />
            </div>
          </div>

          <p className="relative mt-6 text-center text-xs text-slate-400">
            Prefer chat?{" "}
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-600 underline-offset-2 hover:text-nova-blue hover:underline"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-0 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-slate-200/80 bg-nova-950 shadow-[0_-12px_40px_-12px_rgba(15,27,51,0.25)]">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="ml-2 font-brand text-[10px] tracking-wider text-white/35">
              NOVRR <span className="text-nova-cyan/60">ERP</span>
            </span>
          </div>
          <div className="relative h-[160px] overflow-hidden sm:h-[200px]">
            <img
              src="/snapshots/pos.png"
              alt="NOVRR POS"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}