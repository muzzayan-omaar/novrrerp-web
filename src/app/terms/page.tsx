import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for using the NOVRR marketing site and requesting a product workspace or demo.",
};

const sections = [
  {
    title: "Acceptance",
    body: "By using novrrerp.com or submitting a Start free / demo request, you agree to these terms. If you are acting for a business, you confirm you are authorized to bind that business.",
  },
  {
    title: "The service",
    body: "NOVRR is operational software for retail and multi-store businesses (POS, inventory, sales, finance, payroll, and related modules). The marketing site describes the product; exact features, limits, and fiscal scope are confirmed in your package during setup.",
  },
  {
    title: "Accounts and access",
    body: "You are responsible for credentials issued to your workspace and for activity under those accounts. Keep access limited to people who should operate your stores. Notify us promptly of unauthorized use you become aware of.",
  },
  {
    title: "Acceptable use",
    body: "You may not misuse the site or product to break applicable law, interfere with other customers, probe systems without authorization, or reverse-engineer the service except where law allows. Fiscal and tax obligations remain yours.",
  },
  {
    title: "EFRIS, tax, and compliance",
    body: "NOVRR provides operational tools with an EFRIS-style fiscal-ready path and local tax fields where enabled. Official device certification, filings with URA or NSSF, and legal compliance remain your responsibility. Scope is confirmed at onboarding.",
  },
  {
    title: "Fees and packages",
    body: "Starter, Growth, and Scale packages and pricing are described on the pricing page and finalized when you purchase or upgrade. Free trials, if offered, may convert or expire as stated at signup.",
  },
  {
    title: "Data and privacy",
    body: "Our Privacy notice explains marketing-site and lead data. Product tenant data is governed by your workspace agreement and applicable law. You retain ownership of your business records.",
  },
  {
    title: "Availability and changes",
    body: "We aim for reliable service but do not guarantee uninterrupted access. We may update the product and these terms; material changes will be communicated through the site or account channels when practical.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by Ugandan law, NOVRR and its operators are not liable for indirect, incidental, or consequential damages arising from use of the site or product. Direct liability is limited to fees paid for the service in the period giving rise to the claim, where applicable.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of Uganda. Disputes will be handled in competent courts in Uganda unless we agree otherwise in writing.",
  },
  {
    title: "Contact",
    body: "Questions about these terms: use the Start free form or the channel provided during onboarding.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl">
            Terms of service
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
            Terms for the NOVRR marketing site and for requesting or using a
            product workspace.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Practical operator language. Your signed order or workspace
            agreement may add package-specific terms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {sections.map((s, i) => (
            <div key={s.title} className="py-8">
              <h2 className="flex items-baseline gap-3 text-lg font-semibold text-nova-900">
                <span className="font-mono text-[11px] tabular-nums text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="inline-flex rounded-full bg-nova-gradient px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Start free
          </Link>
          <Link
            href="/privacy"
            className="inline-flex rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
          >
            Privacy
          </Link>
        </div>
      </section>
    </div>
  );
}