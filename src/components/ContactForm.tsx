"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
          businessName: data.get("businessName") || "",
          email: data.get("email"),
          phone: data.get("phone") || "",
          stores: "1",
          message: `[${data.get("topic")}] ${data.get("message") || ""}`,
          source: "contact",
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Try again.");
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 text-center sm:p-8">
        <p className="text-base font-semibold text-emerald-900">Message sent</p>
        <p className="mt-2 text-sm text-emerald-800/80">
          We&apos;ll get back to you shortly. For faster replies, use WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-nova-blue hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-600">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 placeholder:text-slate-400 focus:border-nova-blue focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-600">Business</span>
          <input
            name="businessName"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 placeholder:text-slate-400 focus:border-nova-blue focus:ring-2"
            placeholder="Shop or company"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-slate-600">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 placeholder:text-slate-400 focus:border-nova-blue focus:ring-2"
            placeholder="you@business.com"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-600">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 placeholder:text-slate-400 focus:border-nova-blue focus:ring-2"
            placeholder="+256 …"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium text-slate-600">Topic</span>
        <select
          name="topic"
          required
          defaultValue="Sales"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 focus:border-nova-blue focus:ring-2"
        >
          <option value="Sales">Sales / pricing / demo</option>
          <option value="Support">Product help</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="block">
        <span className="text-xs font-medium text-slate-600">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-nova-900 outline-none ring-nova-blue/30 placeholder:text-slate-400 focus:border-nova-blue focus:ring-2"
          placeholder="How can we help?"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-nova-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)] transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}