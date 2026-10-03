import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NOVRR ERP marketing site and product.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-nova-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: October 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          This page covers how NOVRR ERP handles information submitted on the marketing site
          (for example demo and pricing requests) and points to product practices for the application itself.
        </p>
        <p>
          <strong>Marketing form data.</strong> When you submit a demo or contact form, we collect
          the details you provide (name, email, phone, business name, store count, message) to respond
          to your request. Data is stored securely and used only for sales and onboarding communication.
        </p>
        <p>
          <strong>Product data.</strong> Customer operational data inside the NOVRR application is governed
          by your agreement with us and is processed to provide the service (sales, inventory, payroll, etc.).
        </p>
        <p>
          <strong>Contact.</strong> For privacy requests related to marketing leads or the product,
          use the contact options on this site or your account support channel.
        </p>
        <p className="text-slate-500">
          Replace this placeholder with your final legal text before public launch.
        </p>
      </div>
    </div>
  );
}
