"use client";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function StartForm() {
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
          stores: data.get("stores") || "1",
          message: "Start free — workspace request",
          source: "start",
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
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-8 text-center">
        <p className="text-base font-semibold text-emerald-900">Request received</p>
        <p className="mt-2 text-sm text-emerald-700">
          We&apos;ll set up your workspace and reach you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-nova-blue hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-slate-700">
          Business name *
        </label>
        <input
          id="businessName"
          name="businessName"
          required
          autoComplete="organization"
          placeholder="Pearl Retail"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-nova-900 outline-none transition focus:border-nova-blue focus:bg-white focus:ring-2 focus:ring-nova-blue/15"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+256 7XX XXX XXX"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-nova-900 outline-none transition focus:border-nova-blue focus:bg-white focus:ring-2 focus:ring-nova-blue/15"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@shop.com"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-nova-900 outline-none transition focus:border-nova-blue focus:bg-white focus:ring-2 focus:ring-nova-blue/15"
        />
      </div>

      {/* optional name — kept light, not required */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Your name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Optional"
          className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-nova-900 outline-none transition focus:border-nova-blue focus:bg-white focus:ring-2 focus:ring-nova-blue/15"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-nova-gradient px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.5)] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Start free"}
        {status !== "loading" && (
          <span className="text-white/70 transition group-hover:translate-x-0.5 group-hover:text-white">
            →
          </span>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        By starting you agree to our{" "}
        <a href="/terms" className="underline-offset-2 hover:underline">
          Terms
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline-offset-2 hover:underline">
          Privacy
        </a>
        .
      </p>
    </form>
  );
}
