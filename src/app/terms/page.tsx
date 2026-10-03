import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for NOVRR ERP.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-nova-900">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: October 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          By using the NOVRR ERP marketing website and product, you agree to these terms.
          The marketing site provides information and lead forms; the application is provided under
          your subscription or trial agreement.
        </p>
        <p>
          <strong>Acceptable use.</strong> You may not misuse the site or product, attempt unauthorized
          access, or use the service for unlawful activity.
        </p>
        <p>
          <strong>Service.</strong> Features, packages, and availability may change. Pricing for paid
          packages is confirmed when you subscribe or via sales.
        </p>
        <p className="text-slate-500">
          Replace this placeholder with your final legal text before public launch.
        </p>
      </div>
    </div>
  );
}
