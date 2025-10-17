import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform | Mira Labs",
  description:
    "Discover Mira Labs’ regulated infrastructure: FINMA authorization, CSSF compartments, Tier-1 banking, and institutional-grade technology.",
};

const pillars = [
  {
    heading: "Regulatory Stack",
    bullets: [
      "FINMA asset manager authorization (FinIA Art. 17) with established SRO membership for AML/KYC.",
      "Luxembourg CSSF umbrella structure enabling 400+ pre-approved compartments.",
      "Change-of-control process scoped with legal and banking partners to ensure seamless ownership transfer.",
      "Independent risk, compliance, and audit functions maintained within the Swiss entity.",
    ],
  },
  {
    heading: "Banking & Custody",
    bullets: [
      "Tier-1 European banking relationships with segregated operating and client accounts.",
      "Bank-grade custody and triparty arrangements ready for institutional mandates.",
      "Daily reconciliation, independent sign-off, and treasury oversight across currencies.",
      "Scenario hedging and liquidity buffers aligning with institutional risk policies.",
    ],
  },
  {
    heading: "Execution Technology",
    bullets: [
      "FPGA-enabled execution stack delivering sub-120ns latency for systematic strategies.",
      "Multi-venue connectivity with real-time analytics, exposure, and risk throttles.",
      "Scenario-tested strategies targeting 15–25% gross returns (non-guaranteed).",
      "Modular architecture to onboard external managers and strategy sleeves rapidly.",
    ],
  },
  {
    heading: "Compliance & Reporting",
    bullets: [
      "Automated AML/KYC, continuous transaction monitoring, and suspicious activity workflows.",
      "Daily NAV, exposure, and liquidity dashboards for allocators and regulators.",
      "Audit-ready documentation, periodic independent reviews, and oversight from third-party advisors.",
      "Standardized CSSF compartment templates for onboarding new strategies or external managers.",
    ],
  },
] as const;

const operatingModel = [
  {
    title: "Day-One Readiness",
    description:
      "Post-close, Mira Labs inherits a live FINMA/SRO license, staffed compliance team, and $72M (~CHF 60M) of institutional AUM.",
  },
  {
    title: "Luxembourg Integration",
    description:
      "Luxembourg CSSF compartments provide an umbrella vehicle to onboard external managers with streamlined regulatory approvals.",
  },
  {
    title: "Institutional Deployment",
    description:
      "Initial deployment allocates ~$7M toward high-frequency strategies while onboarding the $20–30M LOI pipeline across Year 1.",
  },
  {
    title: "Platform Expansion",
    description:
      "Year 2+ activates platform fees (0.25–0.75%), advisory retainers, and technology services for external managers and family offices.",
  },
] as const;

const roadmap = [
  {
    milestone: "Close Swiss Acquisition",
    timing: "Q1 2026",
    details:
      "Complete change-of-control approvals, transfer banking relationships, and integrate compliance reporting into Mira Labs dashboards.",
  },
  {
    milestone: "Stabilize Core AUM",
    timing: "Q2 2026",
    details:
      "Deploy capital across proprietary strategies, confirm audited track record, and activate LOI conversion workflows.",
  },
  {
    milestone: "Launch CSSF Compartments",
    timing: "Q3 2026",
    details:
      "Stand up first 2–3 pilot compartments for external managers (>$5M each) with standardized onboarding toolkit and service-level agreements.",
  },
  {
    milestone: "Platform Scale & Advisory",
    timing: "2027",
    details:
      "Expand to 5–7 external managers, add advisory retainers, and integrate data APIs for allocator portals and risk teams.",
  },
] as const;

export default function PlatformPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            Platform
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Institutional infrastructure operating on day one.
          </h1>
          <p className="text-lg text-slate-200">
            Mira Labs integrates a FINMA-authorized Swiss asset manager with a Luxembourg CSSF umbrella,
            delivering regulated access, Tier-1 banking, and execution technology without the traditional
            build-out lag.
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center">
            <span>Key pillars:</span>
            <ul className="flex flex-wrap gap-3">
              <li className="rounded-full border border-white/20 px-3 py-1">Regulatory Advantage</li>
              <li className="rounded-full border border-white/20 px-3 py-1">Institutional Banking</li>
              <li className="rounded-full border border-white/20 px-3 py-1">Execution Technology</li>
              <li className="rounded-full border border-white/20 px-3 py-1">Compliance Automation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Core Pillars</h2>
            <p className="mt-4 text-base text-slate-300">
              Each pillar reflects infrastructure already active within the acquisition scope, enabling Mira
              Labs to meet institutional due diligence from day one.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.heading} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  {pillar.heading}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{bullet}</span>
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
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Operating Model</h2>
            <p className="mt-4 text-base text-slate-300">
              Integrated workflow from post-close stabilization through platform expansion.
            </p>
          </div>
          <div className="space-y-6">
            {operatingModel.map((stage, index) => (
              <div
                key={stage.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                    Stage {index + 1}
                  </span>
                  <h3 className="text-xl font-light text-white">{stage.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-200">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Roadmap</h2>
            <p className="mt-4 text-base text-slate-300">
              Execution milestones coordinating Swiss and Luxembourg entities through 2027.
            </p>
          </div>
          <div className="space-y-8">
            {roadmap.map((item) => (
              <div key={item.milestone} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-light text-white">{item.milestone}</h3>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
                    {item.timing}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-200">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Ready to review the full platform?
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Request the technical due diligence pack, including control matrices, infrastructure diagrams,
            and regulatory documentation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Request Platform Dossier
            </Link>
            <Link
              href="/investment"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Investment Terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
