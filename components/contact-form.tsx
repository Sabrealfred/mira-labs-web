"use client";

import { useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

const interests = [
  { label: "Capital allocation", value: "allocation" },
  { label: "Strategic partnership", value: "partnership" },
  { label: "Platform access", value: "platform" },
  { label: "Advisory engagement", value: "advisory" },
] as const;

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      organization: formData.get("organization")?.toString().trim(),
      role: formData.get("role")?.toString().trim(),
      jurisdiction: formData.get("jurisdiction")?.toString().trim(),
      aum: formData.get("aum")?.toString().trim(),
      interests: selectedInterests,
      message: formData.get("message")?.toString().trim(),
      complianceConfirmation: formData.get("compliance") === "on",
    };

    if (!payload.name || !payload.email || !payload.organization) {
      setState({ status: "error", message: "Name, email, and organization are required." });
      return;
    }

    if (!payload.complianceConfirmation) {
      setState({ status: "error", message: "Please confirm you are a qualified or professional investor." });
      return;
    }

    try {
      setState({ status: "loading" });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to submit form. Please try again.");
      }

      setState({ status: "success" });
      form.reset();
      setSelectedInterests([]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error occurred.";
      setState({ status: "error", message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
            placeholder="Full name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
            placeholder="institution@domain.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="organization"
            className="text-xs font-semibold uppercase tracking-widest text-slate-300"
          >
            Organization*
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
            placeholder="Institution / Fund / Company"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="role" className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Role / Title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
            placeholder="Managing Partner, CIO, Head of BD..."
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="jurisdiction"
            className="text-xs font-semibold uppercase tracking-widest text-slate-300"
          >
            Jurisdiction
          </label>
          <input
            id="jurisdiction"
            name="jurisdiction"
            type="text"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
            placeholder="United States, Switzerland, Singapore..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="aum" className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            AUM Bracket
          </label>
          <select
            id="aum"
            name="aum"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled className="bg-slate-900 text-slate-500">
              Select range
            </option>
            <option value="under-50" className="bg-slate-900 text-white">
              Under $50M
            </option>
            <option value="50-150" className="bg-slate-900 text-white">
              $50M – $150M
            </option>
            <option value="150-500" className="bg-slate-900 text-white">
              $150M – $500M
            </option>
            <option value="500+" className="bg-slate-900 text-white">
              $500M+
            </option>
          </select>
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-widest text-slate-300">
          Areas of Interest
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {interests.map((interest) => {
            const checked = selectedInterests.includes(interest.value);
            return (
              <label
                key={interest.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                  checked
                    ? "border-blue-400 bg-blue-500/10 text-white"
                    : "border-white/15 bg-white/5 text-slate-200 hover:border-blue-300/50"
                }`}
              >
                <input
                  type="checkbox"
                  value={interest.value}
                  checked={checked}
                  onChange={() => toggleInterest(interest.value)}
                  className="h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-400"
                />
                <span>{interest.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-300">
          Notes / Objectives
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
          placeholder="Share allocation objectives, timelines, or specific diligence requests."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-slate-300">
        <input
          type="checkbox"
          name="compliance"
          className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-blue-600 focus:ring-blue-400"
        />
        <span>
          I confirm that I act on behalf of a qualified or professional investor and consent to receive
          information about Mira Labs’ offerings in accordance with applicable regulations.
        </span>
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-900/60"
        >
          {state.status === "loading" ? "Submitting..." : "Submit Request"}
        </button>
        {state.status === "success" ? (
          <p className="text-xs text-emerald-300">
            Submission received. Our team will reach out within two business days.
          </p>
        ) : null}
        {state.status === "error" ? (
          <p className="text-xs text-rose-300" role="alert">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
