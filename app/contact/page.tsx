import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Mira Labs",
  description:
    "Submit institutional credentials to coordinate mandate onboarding, platform access, or strategic collaboration with Mira Labs.",
};

const responseGuidelines = [
  {
    title: "Review Timeline",
    detail: "We typically respond within two business days with next steps or requests for additional information.",
  },
  {
    title: "Eligibility",
    detail: "Access is reserved for qualified or professional investors, strategic partners, and advisors subject to NDA.",
  },
  {
    title: "Security",
    detail: "Submissions route to an encrypted inbox and internal CRM. Sensitive documents are shared via secure data room.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            Contact
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Request an institutional briefing.
          </h1>
          <p className="text-lg text-slate-200">
            Provide mandate objectives and credentials to align with our client coverage team, arrange platform reviews,
            or schedule ongoing reporting access.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
              <h2 className="text-xl font-light text-white">Secure Intake Form</h2>
              <p className="mt-3 text-sm text-slate-200">
                Complete the form and our client coverage team will coordinate next steps. Submissions are reviewed
                manually to align with regulatory requirements and service-level expectations.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Guidance
                </h3>
                <p className="mt-3 text-sm text-slate-200">
                  Sharing detailed context accelerates review: target allocation size, timing, regulatory
                  considerations, and any required stakeholders for diligence.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Response Expectations
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-200">
                  {responseGuidelines.map((item) => (
                    <li key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Alternate Contact
                </h3>
                <p className="mt-2">
                  Prefer direct email? Reach us at{" "}
                  <a
                    href="mailto:investors@miralabs.com"
                    className="font-semibold text-blue-300 hover:underline"
                  >
                    investors@miralabs.com
                  </a>{" "}
                  with your institution details.
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  Data submitted via this form or email will be processed in accordance with Mira Labs’
                  privacy guidelines and applicable regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            Already in diligence?
          </h2>
          <p className="mt-4 text-base text-slate-200">
            If you have a data room invitation, use the secure portal link provided in your onboarding email.
            For access issues, contact investor relations.
          </p>
        </div>
      </section>
    </div>
  );
}
