import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Pricing",
  description: "NOVRR ERP packages for single shops, multi-branch retail, and franchises. Contact us for pricing.",
};

export default function PricingPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-nova-900 sm:text-5xl">
            Simple packages for every stage of growth
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Scale with packages that match your stores and team. Exact pricing — talk to us.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {[
            {
              name: "Starter",
              blurb: "Single shop getting off paper and spreadsheets.",
              features: ["POS & sales", "Inventory", "Basic reports", "Staff roles"],
              cta: "Start free",
              href: "/#start",
              highlight: false,
            },
            {
              name: "Growth",
              blurb: "Multi-branch retail with transfers and tighter control.",
              features: [
                "Everything in Starter",
                "Multi-store inventory",
                "Quotes & credit",
                "Payroll & expenses",
              ],
              cta: "Contact for pricing",
              href: "/#pricing-form",
              highlight: true,
            },
            {
              name: "Scale",
              blurb: "Franchise or larger networks — packages & governance.",
              features: [
                "Everything in Growth",
                "Higher store / user limits",
                "Platform-style admin",
                "Priority onboarding",
              ],
              cta: "Contact for pricing",
              href: "/#pricing-form",
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                tier.highlight
                  ? "border-nova-blue bg-nova-950 text-white shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-nova-blue px-2.5 py-0.5 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <h2 className={`text-xl font-semibold ${tier.highlight ? "text-white" : "text-nova-900"}`}>
                {tier.name}
              </h2>
              <p className={`mt-2 text-sm ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                {tier.blurb}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      tier.highlight ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    <span className={tier.highlight ? "text-nova-cyan" : "text-emerald-500"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-white text-nova-900 hover:bg-slate-100"
                    : "bg-nova-blue text-white hover:bg-nova-blue-dark"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
          Feature limits (stores, users, bundles) map to your live NOVRR packages. We&apos;ll align the right tier on a short call.
        </p>
      </section>

      <section id="pricing-form" className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-nova-900">Contact for pricing</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Tell us store count and needs — we&apos;ll send clear package options.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <DemoForm source="pricing" />
          </div>
        </div>
      </section>
    </div>
  );
}
