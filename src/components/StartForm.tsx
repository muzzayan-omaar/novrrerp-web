"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const STEPS = [
  {
    key: "businessName" as const,
    label: "Business name",
    hint: "As it appears on the shop",
    placeholder: "Pearl Retail",
    inputMode: "text" as const,
    autoComplete: "organization",
    type: "text" as const,
    required: true,
  },
  {
    key: "phone" as const,
    label: "Phone",
    hint: "We'll use this to set up your workspace",
    placeholder: "+256 7XX XXX XXX",
    inputMode: "tel" as const,
    autoComplete: "tel",
    type: "tel" as const,
    required: true,
  },
  {
    key: "email" as const,
    label: "Work email",
    hint: "For login and workspace invites",
    placeholder: "you@shop.com",
    inputMode: "email" as const,
    autoComplete: "email",
    type: "email" as const,
    required: true,
  },
  {
    key: "name" as const,
    label: "Your name",
    hint: "You can change this anytime",
    placeholder: "Optional",
    inputMode: "text" as const,
    autoComplete: "name",
    type: "text" as const,
    required: false,
  },
];

type FieldKey = (typeof STEPS)[number]["key"];

function nameFromEmail(email: string): string {
  const local = email.split("@")[0]?.trim() ?? "";
  if (!local) return "";
  return local
    .replace(/[._+\-]+/g, " ")
    .replace(/\d+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function validate(key: FieldKey, value: string): string | null {
  const v = value.trim();
  switch (key) {
    case "businessName":
      if (v.length < 2) return "Enter your business name";
      return null;
    case "phone": {
      const digits = v.replace(/\D/g, "");
      if (digits.length < 9) return "Enter a valid phone number";
      return null;
    }
    case "email": {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email";
      return null;
    }
    case "name":
      return null;
    default:
      return null;
  }
}

export function StartForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<FieldKey, string>>({
    businessName: "",
    phone: "",
    email: "",
    name: "",
  });
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [nameEdited, setNameEdited] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const fieldError = touched ? validate(current.key, values[current.key]) : null;
  const canContinue = !validate(current.key, values[current.key]);

  useEffect(() => {
    inputRef.current?.focus();
    setTouched(false);
  }, [step]);

  useEffect(() => {
    if (current.key === "name" && !nameEdited && values.email) {
      const derived = nameFromEmail(values.email);
      if (derived) {
        setValues((prev) => ({ ...prev, name: derived }));
      }
    }
  }, [current.key, values.email, nameEdited]);

  const progress = useMemo(() => ((step + 1) / STEPS.length) * 100, [step]);

  function setField(key: FieldKey, value: string) {
    if (key === "name") setNameEdited(true);
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "email" && !nameEdited) {
        next.name = nameFromEmail(value);
      }
      return next;
    });
  }

  function goNext() {
    setTouched(true);
    if (!canContinue) return;
    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }
    void submit();
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function submit() {
    for (const s of STEPS) {
      if (s.required) {
        const err = validate(s.key, values[s.key]);
        if (err) {
          setStep(STEPS.findIndex((x) => x.key === s.key));
          setTouched(true);
          setErrorMsg(err);
          return;
        }
      }
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim() || nameFromEmail(values.email),
          businessName: values.businessName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          stores: "1",
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
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    goNext();
  }

  function resetAll() {
    setStatus("idle");
    setStep(0);
    setValues({ businessName: "", phone: "", email: "", name: "" });
    setNameEdited(false);
    setTouched(false);
    setErrorMsg("");
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-[11px] font-medium tracking-wide text-slate-400">
            <span>
              Step {step + 1} of {STEPS.length}
            </span>
            <span className="text-nova-blue">{current.label}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-nova-gradient transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="min-h-[7.5rem]">
          <label
            htmlFor={current.key}
            className="block text-sm font-semibold text-nova-900"
          >
            {current.label}
            {current.required && (
              <span className="ml-0.5 text-nova-blue">*</span>
            )}
          </label>
          <p className="mt-1 text-xs text-slate-400">{current.hint}</p>
          <input
            ref={inputRef}
            id={current.key}
            name={current.key}
            type={current.type}
            inputMode={current.inputMode}
            autoComplete={current.autoComplete}
            required={current.required}
            value={values[current.key]}
            onChange={(e) => setField(current.key, e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder={current.placeholder}
            className={`mt-3 w-full rounded-xl border bg-slate-50/60 px-4 py-3 text-[15px] text-nova-900 outline-none transition focus:bg-white focus:ring-2 ${
              fieldError
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-nova-blue focus:ring-nova-blue/15"
            }`}
          />
          {fieldError && (
            <p className="mt-2 text-xs font-medium text-red-500">{fieldError}</p>
          )}
        </div>

        <div className="flex items-center justify-center gap-1.5">
          {STEPS.map((_, i) => (
            <button
              key={STEPS[i].key}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              onClick={() => {
                if (i < step) setStep(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === step
                  ? "w-6 bg-nova-blue"
                  : i < step
                    ? "w-1.5 bg-nova-cyan/70"
                    : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={!canContinue}
            className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-nova-gradient px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_28px_-8px_rgba(37,99,235,0.45)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            {isLast ? "Start free" : "Continue"}
            <span
              className={`text-white/70 transition ${
                canContinue ? "group-hover:translate-x-0.5 group-hover:text-white" : ""
              }`}
            >
              →
            </span>
          </button>
        </div>

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

      {(status === "loading" || status === "success" || status === "error") && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="start-modal-title"
        >
          <div
            className="absolute inset-0 bg-nova-950/40 backdrop-blur-md"
            aria-hidden
          />
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white p-8 shadow-[0_32px_64px_-16px_rgba(15,27,51,0.35)]">
            {status === "loading" && (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-nova-950/[0.04] ring-1 ring-nova-blue/15">
                  <span className="h-6 w-6 animate-spin rounded-full border-2 border-nova-blue/20 border-t-nova-blue" />
                </div>
                <h3
                  id="start-modal-title"
                  className="mt-5 text-base font-semibold text-nova-900"
                >
                  Setting up your workspace
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Hang tight — this only takes a moment.
                </p>
              </div>
            )}

            {status === "success" && (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-nova-gradient shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  id="start-modal-title"
                  className="mt-5 text-base font-semibold text-nova-900"
                >
                  Request received
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  We&apos;ll set up{" "}
                  <span className="font-medium text-nova-900">
                    {values.businessName || "your shop"}
                  </span>{" "}
                  and reach you shortly.
                </p>
                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-6 w-full rounded-full bg-nova-gradient px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Done
                </button>
              </div>
            )}

            {status === "error" && (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-100">
                  <span className="text-lg font-bold text-red-500">!</span>
                </div>
                <h3
                  id="start-modal-title"
                  className="mt-5 text-base font-semibold text-nova-900"
                >
                  Something went wrong
                </h3>
                <p className="mt-2 text-sm text-slate-500">{errorMsg}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-nova-900 transition hover:bg-slate-50"
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}