"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Shield, Lock, Eye, FileText, Users, AlertTriangle } from "lucide-react";

const governancePillars = [
  {
    icon: Shield,
    title: "Regulatory Oversight",
    items: [
      "FINMA-licensed Swiss asset manager adhering to FinIA and FinSA standards with SRO membership",
      "Luxembourg CSSF umbrella with sub-funds operated under UCITS-like governance and compartmental segregation",
      "US and APAC representative offices following local AML/CTF frameworks and cross-border distribution rules",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risk & Compliance",
    items: [
      "Independent Chief Risk Officer and compliance team reporting to the board and audit committee",
      "Real-time risk dashboards with automated mandate breach alerts and escalation procedures",
      "Annual audits covering financial statements, AML/CTF, cybersecurity, and operational resilience",
    ],
  },
  {
    icon: Lock,
    title: "Operational Resilience",
    items: [
      "24/7 trading operations with redundant data centres and disaster recovery tested quarterly",
      "Segregated permissions, hardware security modules, and multi-party approval flows for all transfers",
      "Third-party vendor due diligence covering custody, exchange venues, and SaaS providers",
    ],
  },
];

const committees = [
  {
    icon: Users,
    name: "Board of Directors",
    responsibilities: [
      "Approves strategic direction, annual budgets, and risk appetite statements",
      "Receives quarterly reporting from Risk, Compliance, and Operations leads",
      "Includes independent directors with TradFi, legal, and cybersecurity expertise",
    ],
  },
  {
    icon: Eye,
    name: "Investment & Risk Committee",
    responsibilities: [
      "Monthly evaluation of strategy performance, limits, and hedging effectiveness",
      "Reviews new strategy onboarding, counterparty exposures, and scenario testing",
      "Chaired by the CIO with participation from CRO, Head of Trading, and external advisor",
    ],
  },
  {
    icon: FileText,
    name: "Compliance & Audit Committee",
    responsibilities: [
      "Supervises AML/KYC processes, regulatory filings, and policy updates",
      "Coordinates annual audits and independent control reviews",
      "Maintains regulatory contact with FINMA, CSSF, and other local authorities",
    ],
  },
];

const disclosures = [
  {
    heading: "Policies & Documentation",
    list: [
      "Investment Policy Statements & IPS addenda per mandate",
      "AML/KYC Program and Travel Rule compliance",
      "Business Continuity & Disaster Recovery plans",
      "Code of Ethics, personal dealing, and insider trading policies",
      "Cybersecurity framework and incident response playbooks",
    ],
  },
  {
    heading: "Reporting Cadence",
    list: [
      "Daily internal risk reports with VaR, exposure, and liquidity metrics",
      "Weekly allocator updates for SMAs and compartment investors",
      "Monthly board packs and Committee minutes",
      "Quarterly regulator touchpoints and filings",
      "Annual audited financial statements and control attestations",
    ],
  },
];

export default function GovernancePage() {
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
              Governance Framework
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Institutional governance aligned with FINMA and CSSF expectations. Operating with independent
              oversight, real-time risk controls, and multi-jurisdictional compliance to safeguard client
              mandates across digital and traditional markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Governance Pillars</h2>
            <p className="mt-4 text-lg text-gray-600">
              Foundational elements ensuring mandates are executed within tightly controlled risk and operational
              frameworks.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {governancePillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-100 p-3">
                    <pillar.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Committees & Oversight */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Committees & Oversight</h2>
            <p className="mt-4 text-lg text-gray-600">
              Dedicated committees provide layered supervision across investment, compliance, and operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {committees.map((committee, index) => (
              <motion.article
                key={committee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2">
                    <committee.icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{committee.name}</h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {committee.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosures & Reporting */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Disclosures & Reporting</h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparency packs, policy documentation, and reporting cadences available to clients and
              regulators.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {disclosures.map((group, index) => (
              <motion.article
                key={group.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{group.heading}</h3>

                <ul className="mt-6 space-y-4">
                  {group.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center text-sm text-gray-500"
          >
            Access to full governance dossiers, policy documentation, and regulator communications is provided
            through the client portal or upon request to Compliance.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Request Governance Documentation
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Access detailed compliance frameworks, audit reports, and policy documentation through our secure
            portal.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Contact Compliance
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
