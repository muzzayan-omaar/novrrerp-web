"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function DemoForm({ source = "homepage" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          businessName: data.get("businessName"),
          email: data.get("email"),
          phone: data.get("phone"),
          stores: data.get("stores"),
          message: data.get("message"),
          source,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-lg font-semibold text-emerald-800">Request received</p>
        <p className="mt-2 text-sm text-emerald-700">
          We&apos;ll get back to you shortly. You can also start free once your account is ready.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-nova-blue hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
            placeholder="Jane Nakato"
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-slate-700">
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
            placeholder="Nakato Traders Ltd"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
            placeholder="you@business.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
            placeholder="+256 7XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="stores" className="block text-sm font-medium text-slate-700">
          Number of stores / branches
        </label>
        <input
          id="stores"
          name="stores"
          type="number"
          min={1}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
          placeholder="1"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-nova-blue focus:ring-2 focus:ring-nova-blue/20"
          placeholder="Tell us about your setup..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-nova-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-nova-blue-dark disabled:opacity-60 transition-colors"
      >
        {status === "loading" ? "Sending…" : "Book a demo / Start free"}
      </button>
      <p className="text-center text-xs text-slate-500">
        We&apos;ll help you get started. Contact us for package pricing.
      </p>
    </form>
  );
}
