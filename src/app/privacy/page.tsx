import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How NOVRR handles business and account data for the marketing site and product workspace.",
};

const sections = [
  {
    title: "What this covers",
    body: "This notice applies to novrrerp.com (the marketing site) and to leads you submit when you request a workspace or demo. The product application may publish a separate, more detailed policy for tenant data once you are onboarded.",
  },
  {
    title: "Data we collect on this site",
    body: "When you use Start free or contact flows we may collect name, business name, email, phone, number of stores, and a short message. Technical logs may include IP address, browser type, and pages visited for security and performance.",
  },
  {
    title: "How we use it",
    body: "We use lead data to respond to your request, set up a trial or demo, and communicate about NOVRR. We do not sell personal data. Aggregated, non-identifying analytics may help us improve the site.",
  },
  {
    title: "Product / workspace data",
    body: "Operational data you enter in NOVRR (sales, stock, staff, etc.) belongs to your business. Access is controlled by roles you assign. Backups and retention for product data follow the package and hosting arrangement confirmed at setup.",
  },
  {
    title: "Sharing",
    body: "We may share data with infrastructure providers that host the site or form pipeline, solely to operate the service. We may disclose information if required by Ugandan law or to protect rights and safety.",
  },
  {
    title: "Retention",
    body: "Lead records are kept as long as needed to fulfill your request and for reasonable business records. You can ask us to update or delete marketing-site contact data by writing to the address below.",
  },
  {
    title: "Security",
    body: "We use industry-standard measures appropriate to a SaaS marketing site and application. No method of transmission over the internet is fully secure; we work to reduce risk continuously.",
  },
  {
    title: "Contact",
    body: "Privacy questions: use the Start free form or the contact channel provided during onboarding. We will respond within a reasonable time.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nova-cyan">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-nova-900 sm:text-5xl">
            Privacy
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
            How NOVRR handles information from this site and your workspace
            request. Last updated for the public marketing site.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            This is a practical summary for operators — not a substitute for
            counsel on your specific obligations.
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
            href="/terms"
            className="inline-flex rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
          >
            Terms of service
          </Link>
        </div>
      </section>
    </div>
  );
}