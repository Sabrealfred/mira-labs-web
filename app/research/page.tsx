import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Mira Labs",
  description:
    "Access Mira Labs research covering liquidity, macro, and on-chain market dynamics for institutional clients.",
};

const publications = [
  {
    title: "Digital Asset Liquidity Quarterly",
    category: "Market Intelligence",
    summary:
      "Depth analysis, funding rates, and cross-venue liquidity metrics benchmarking Tier-1 exchanges and OTC counterparts.",
    access: "Distributed to clients; excerpts available on request.",
  },
  {
    title: "Tokenised Credit Yield Curve",
    category: "Whitepaper",
    summary:
      "Framework for evaluating tokenised credit risk, collateral quality, and tenor structuring aligned with TradFi standards.",
    access: "Full edition inside the client portal; executive summary public.",
  },
  {
    title: "Macro Regime Monitor",
    category: "Monthly Insight",
    summary:
      "Cross-asset outlook linking rate moves, FX flows, and commodity positioning with digital asset volatility regimes.",
    access: "Available to allocators and treasury clients via secure mailing list.",
  },
  {
    title: "Stablecoin Reserve Transparency Index",
    category: "Data Study",
    summary:
      "Comparative review of reserve disclosures, attestation frequency, and redemption mechanics across major stablecoins.",
    access: "Open access; updated biannually.",
  },
] as const;

const dataServices = [
  {
    title: "Allocator Portal",
    detail: "Secure dashboard offering T+0 exposure, performance, and attribution analytics with exportable datasets.",
  },
  {
    title: "API & Data Room",
    detail: "Programmatic access to pricing, liquidity, and risk metrics plus curated documents for diligence teams.",
  },
  {
    title: "Advisory Notes",
    detail: "Bespoke briefings tailored to board updates, regulatory submissions, and internal investment committees.",
  },
] as const;

const upcoming = [
  {
    quarter: "Q1 2026",
    headline: "Integration of on-chain order book telemetry into allocator portal analytics.",
  },
  {
    quarter: "Q2 2026",
    headline: "Launch of TradFi x Digital cross-asset stress testing tool with scenario libraries.",
  },
  {
    quarter: "H2 2026",
    headline: "Publication of annual institutional adoption report with partner contributors.",
  },
] as const;

export default function ResearchPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Research
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Institutional research connecting digital markets with traditional macro drivers.
          </h1>
          <p className="text-lg text-slate-200">
            Mira Labs’ research desk publishes liquidity intelligence, macro insights, and structural analysis to inform allocators, treasuries, and ecosystem partners.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Featured Publications</h2>
            <p className="mt-4 text-base text-slate-300">
              Selected reports from the Mira Labs research catalogue. Full access provided via the client portal.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {publications.map((publication) => (
              <article
                key={publication.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                  {publication.category}
                </p>
                <h3 className="mt-4 text-2xl font-light text-white">{publication.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{publication.summary}</p>
                <p className="mt-6 text-xs text-slate-400">{publication.access}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Data & Intelligence Services</h2>
            <p className="mt-4 text-base text-slate-300">
              Research is delivered through technology layers built for continuous transparency and collaboration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dataServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Roadmap</h2>
            <p className="mt-4 text-base text-slate-300">
              Upcoming releases and enhancements from the research and data teams.
            </p>
          </div>
          <div className="space-y-6">
            {upcoming.map((item) => (
              <div key={item.quarter} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
                    {item.quarter}
                  </span>
                  <p className="text-sm text-slate-200 sm:max-w-2xl">{item.headline}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            For access to the full research library or to schedule a briefing, contact research@miralabs.com or reach out through the client portal.
          </p>
        </div>
      </section>
    </div>
  );
}
