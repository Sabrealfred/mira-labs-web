import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance | Mira Labs",
  description:
    "Review Mira Labs’ regulatory framework, risk oversight, and governance committees operating across Switzerland and Luxembourg.",
};

const governancePillars = [
  {
    title: "Regulatory Oversight",
    items: [
      "FINMA-licensed Swiss asset manager adhering to FinIA and FinSA standards with SRO membership.",
      "Luxembourg CSSF umbrella with sub-funds operated under UCITS-like governance and compartmental segregation.",
      "US and APAC representative offices following local AML/CTF frameworks and cross-border distribution rules.",
    ],
  },
  {
    title: "Risk & Compliance",
    items: [
      "Independent Chief Risk Officer and compliance team reporting to the board and audit committee.",
      "Real-time risk dashboards with automated mandate breach alerts and escalation procedures.",
      "Annual audits covering financial statements, AML/CTF, cybersecurity, and operational resilience.",
    ],
  },
  {
    title: "Operational Resilience",
    items: [
      "24/7 trading operations with redundant data centres and disaster recovery tested quarterly.",
      "Segregated permissions, hardware security modules, and multi-party approval flows for all transfers.",
      "Third-party vendor due diligence covering custody, exchange venues, and SaaS providers.",
    ],
  },
] as const;

const committees = [
  {
    name: "Board of Directors",
    responsibilities: [
      "Approves strategic direction, annual budgets, and risk appetite statements.",
      "Receives quarterly reporting from Risk, Compliance, and Operations leads.",
      "Includes independent directors with TradFi, legal, and cybersecurity expertise.",
    ],
  },
  {
    name: "Investment & Risk Committee",
    responsibilities: [
      "Monthly evaluation of strategy performance, limits, and hedging effectiveness.",
      "Reviews new strategy onboarding, counterparty exposures, and scenario testing.",
      "Chaired by the CIO with participation from CRO, Head of Trading, and external advisor.",
    ],
  },
  {
    name: "Compliance & Audit Committee",
    responsibilities: [
      "Supervises AML/KYC processes, regulatory filings, and policy updates.",
      "Coordinates annual audits and independent control reviews.",
      "Maintains regulatory contact with FINMA, CSSF, and other local authorities.",
    ],
  },
] as const;

const disclosures = [
  {
    heading: "Policies & Documentation",
    list: [
      "Investment Policy Statements & IPS addenda per mandate",
      "AML/KYC Programme and Travel Rule compliance",
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
] as const;

export default function GovernancePage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Governance
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Institutional governance aligned with FINMA and CSSF expectations.
          </h1>
          <p className="text-lg text-slate-200">
            Mira Labs operates with independent oversight, real-time risk controls, and multi-jurisdictional compliance to safeguard client mandates across digital and traditional markets.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Governance Pillars</h2>
            <p className="mt-4 text-base text-slate-300">
              Foundational elements ensuring mandates are executed within tightly controlled risk and operational frameworks.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {governancePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{pillar.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Committees & Oversight</h2>
            <p className="mt-4 text-base text-slate-300">
              Dedicated committees provide layered supervision across investment, compliance, and operations.
            </p>
          </div>
          <div className="space-y-6">
            {committees.map((committee) => (
              <article key={committee.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-light text-white">{committee.name}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {committee.responsibilities.map((resp) => (
                    <li key={resp} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-300/80" aria-hidden="true" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Disclosures & Reporting</h2>
            <p className="mt-4 text-base text-slate-300">
              Transparency packs, policy documentation, and reporting cadences available to clients and regulators.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {disclosures.map((group) => (
              <article key={group.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{group.heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {group.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            Access to full governance dossiers, policy documentation, and regulator communications is provided through the client portal or upon request to Compliance.
          </p>
        </div>
      </section>
    </div>
  );
}
