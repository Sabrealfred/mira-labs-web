"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { ContactForm } from "@/components/contact-form";
import { Clock, Shield, Mail } from "lucide-react";

const responseGuidelines = [
  {
    icon: Clock,
    title: "Review Timeline",
    detail: "We typically respond within two business days with next steps or requests for additional information.",
  },
  {
    icon: Shield,
    title: "Eligibility",
    detail: "Access is reserved for qualified or professional investors, strategic partners, and advisors subject to NDA.",
  },
  {
    icon: Mail,
    title: "Security",
    detail: "Submissions route to an encrypted inbox and internal CRM. Sensitive documents are shared via secure data room.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Provide mandate objectives and credentials to align with our client coverage team, arrange platform
              reviews, or schedule ongoing reporting access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900">Secure Intake Form</h2>
              <p className="mt-3 text-sm text-gray-600">
                Complete the form and our client coverage team will coordinate next steps. Submissions are
                reviewed manually to align with regulatory requirements and service-level expectations.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">Guidance</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Sharing detailed context accelerates review: target allocation size, timing, regulatory
                  considerations, and any required stakeholders for diligence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">Response Expectations</h3>
                <ul className="mt-6 space-y-4">
                  {responseGuidelines.map((item, index) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-gray-100 p-2">
                        <item.icon className="h-4 w-4 text-gray-900" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="font-semibold text-gray-900">Alternate Contact</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Prefer direct email? Reach us at{" "}
                  <a
                    href="mailto:investors@miralabs.com"
                    className="font-semibold text-gray-900 underline hover:text-gray-700"
                  >
                    investors@miralabs.com
                  </a>{" "}
                  with your institution details.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Data submitted via this form or email will be processed in accordance with Mira Labs' privacy
                  guidelines and applicable regulations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Already in Diligence?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            If you have a data room invitation, use the secure portal link provided in your onboarding email. For
            access issues, contact investor relations.
          </p>
        </div>
      </section>
    </main>
  );
}
