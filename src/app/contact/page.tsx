import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the NOVRR team — WhatsApp, sales, or product help. Built for Ugandan retail operators.",
};

function whatsappHref() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  const msg =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Hi NOVRR — I have a question about the ERP.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}

export default function ContactPage() {
  const wa = whatsappHref();

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_70%_50%_at_30%_-10%,rgba(34,211,238,0.12),rgba(37,99,235,0.05),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
              Talk to the team
              <span className="mt-1 block font-medium text-slate-400">
                not a{" "}
                <span className="text-nova-gradient font-semibold">ticket queue</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
              Sales, onboarding, or product questions — pick WhatsApp for speed,
              or send a short message. Ready to run stores?{" "}
              <Link href="/start" className="font-semibold text-nova-blue hover:underline">
                Start free
              </Link>
              .
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-nova-gradient opacity-[0.1] blur-3xl"
            />
            <ContactIllustration />
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
              Channels
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
              Pick how you want to reach us
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#128C7E]">
                <WhatsAppGlyph className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-nova-900">WhatsApp</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Fastest for Uganda. Ask about packages, multi-branch, or a quick
                walkthrough — same line as the site float.
              </p>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
                >
                  Open WhatsApp
                  <span aria-hidden>→</span>
                </a>
              ) : (
                <p className="mt-6 text-xs text-slate-400">
                  Set NEXT_PUBLIC_WHATSAPP_NUMBER to enable
                </p>
              )}
            </div>

            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-nova-blue ring-1 ring-blue-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-nova-900">Sales & packages</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Pricing, Growth/Scale fit, multi-branch rollout. Prefer a structured
                start? Use the workspace request flow.
              </p>
              <Link
                href="/start"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-nova-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-nova-900"
              >
                Start free
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-nova-900">Product help</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Already on NOVRR? Message us with your business name and what
                broke — form below or WhatsApp with “product help”.
              </p>
              <a
                href="#message"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
              >
                Write a message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="message" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
              Message
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-nova-900 sm:text-3xl">
              Send a short note
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              We route sales and support from the same inbox. For the full
              workspace setup flow, use{" "}
              <Link href="/start" className="font-semibold text-nova-blue hover:underline">
                Start free
              </Link>
              .
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              {[
                "Business hours replies on WhatsApp first",
                "Package and EFRIS scope confirmed at setup",
                "Existing customers: include business name",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* SELF-SERVE */}
      <section className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-nova-cyan">
            Self-serve
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/pricing" className="font-semibold text-nova-900 hover:text-nova-blue">
              Pricing →
            </Link>
            <Link href="/product" className="font-semibold text-nova-900 hover:text-nova-blue">
              Product overview →
            </Link>
            <Link href="/compliance" className="font-semibold text-nova-900 hover:text-nova-blue">
              EFRIS & compliance →
            </Link>
            <Link href="/solutions" className="font-semibold text-nova-900 hover:text-nova-blue">
              Solutions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 440 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-md"
      aria-hidden
    >
      <defs>
        <linearGradient id="ct-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>

      <ellipse cx="220" cy="268" rx="140" ry="14" fill="#E2E8F0" opacity="0.7" />

      <rect x="48" y="48" width="200" height="180" rx="16" fill="#0F1B33" stroke="#1E2E4D" />
      <rect x="60" y="62" width="100" height="8" rx="2" fill="#22D3EE" opacity="0.55" />
      <rect x="60" y="80" width="160" height="36" rx="10" fill="#16233F" />
      <rect x="72" y="90" width="90" height="5" rx="1" fill="#334155" />
      <rect x="72" y="100" width="120" height="5" rx="1" fill="#334155" />
      <rect x="88" y="128" width="148" height="36" rx="10" fill="#1E2E4D" />
      <rect x="100" y="138" width="100" height="5" rx="1" fill="#64748B" />
      <rect x="100" y="148" width="70" height="5" rx="1" fill="#475569" />
      <rect x="60" y="176" width="120" height="28" rx="10" fill="url(#ct-g)" opacity="0.9" />
      <rect x="72" y="186" width="70" height="5" rx="1" fill="#F8FAFC" opacity="0.85" />

      <rect x="280" y="72" width="100" height="168" rx="18" fill="#0F1B33" stroke="#25D366" strokeOpacity="0.45" strokeWidth="2" />
      <rect x="292" y="92" width="76" height="100" rx="8" fill="#16233F" />
      <circle cx="330" cy="120" r="18" fill="#25D366" opacity="0.9" />
      <path
        d="M324 120c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6"
        stroke="#0F1B33"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="304" y="150" width="52" height="5" rx="1" fill="#334155" />
      <rect x="304" y="160" width="40" height="5" rx="1" fill="#334155" />
      <rect x="308" y="210" width="44" height="12" rx="6" fill="#1E2E4D" />

      <path
        d="M248 140c20-10 28-10 32-10"
        stroke="url(#ct-g)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="248" cy="140" r="4" fill="#22D3EE" />
    </svg>
  );
}