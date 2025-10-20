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
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-gray-700">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="Full name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-gray-700">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="institution@domain.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="organization"
            className="text-xs font-semibold uppercase tracking-wide text-gray-700"
          >
            Organization*
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="Institution / Fund / Company"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="role" className="text-xs font-semibold uppercase tracking-wide text-gray-700">
            Role / Title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="Managing Partner, CIO, Head of BD..."
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="jurisdiction"
            className="text-xs font-semibold uppercase tracking-wide text-gray-700"
          >
            Jurisdiction
          </label>
          <input
            id="jurisdiction"
            name="jurisdiction"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="United States, Switzerland, Singapore..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="aum" className="text-xs font-semibold uppercase tracking-wide text-gray-700">
            AUM Bracket
          </label>
          <select
            id="aum"
            name="aum"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            defaultValue=""
          >
            <option value="" disabled className="text-gray-400">
              Select range
            </option>
            <option value="under-50">Under $50M</option>
            <option value="50-150">$50M – $150M</option>
            <option value="150-500">$150M – $500M</option>
            <option value="500+">$500M+</option>
          </select>
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-wide text-gray-700">
          Areas of Interest
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {interests.map((interest) => {
            const checked = selectedInterests.includes(interest.value);
            return (
              <label
                key={interest.value}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition ${
                  checked
                    ? "border-gray-900 bg-gray-100 text-gray-900"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                }`}
              >
                <input
                  type="checkbox"
                  value={interest.value}
                  checked={checked}
                  onChange={() => toggleInterest(interest.value)}
                  className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span>{interest.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-gray-700">
          Notes / Objectives
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          placeholder="Share allocation objectives, timelines, or specific diligence requests."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-gray-600">
        <input
          type="checkbox"
          name="compliance"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
        />
        <span>
          I confirm that I act on behalf of a qualified or professional investor and consent to receive
          information about Mira Labs' offerings in accordance with applicable regulations.
        </span>
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {state.status === "loading" ? "Submitting..." : "Submit Request"}
        </button>
        {state.status === "success" ? (
          <p className="text-xs text-green-700">
            Submission received. Our team will reach out within two business days.
          </p>
        ) : null}
        {state.status === "error" ? (
          <p className="text-xs text-red-700" role="alert">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
