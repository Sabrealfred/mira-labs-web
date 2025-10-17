import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategies | Mira Labs",
  description:
    "Discover Mira Labs’ regulated strategies across digital liquidity, structured yield, and macro credit markets.",
};

const strategyGroups = [
  {
    title: "Digital Liquidity",
    description:
      "Market-neutral programs providing continuous liquidity and inventory balancing across centralised and decentralised venues.",
    strategies: [
      {
        name: "Global Market Neutral",
        metrics: ["Target Volatility: 4–6%", "VaR < 2% daily", "Sharpe 2.0+ since 2021"],
        detail:
          "FPGA-enabled execution with dynamic basis capture, funding arbitrage, and cross-venue inventory management.",
      },
      {
        name: "Stablecoin Liquidity Sleeve",
        metrics: ["Utilisation: 85–95%", "Daily liquidity", "Tier-1 stablecoin pairs"],
        detail:
          "Supports protocol treasuries and exchanges with tight spreads and automated risk throttles for high-throughput stablecoin rails.",
      },
    ],
  },
  {
    title: "Yield Engineering",
    description:
      "Structured solutions blending TradFi credit rigour with tokenised collateral, built for corporate and institutional treasuries.",
    strategies: [
      {
        name: "Tokenised Funding Programme",
        metrics: ["Tenors: 30–180 days", "Collateral coverage 110%+", "Enhanced monitoring"],
        detail:
          "Secured lending across vetted counterparties with margin calls, programmatic reconciliations, and bank-level documentation.",
      },
      {
        name: "Structured Yield Notes",
        metrics: ["Currency: USD / CHF / EUR", "Optional FX hedging", "Custom risk tranches"],
        detail:
          "Combines digital asset basis, TradFi swaps, and credit overlays to match treasury mandates with defined downside protection.",
      },
    ],
  },
  {
    title: "Macro & Cross-Asset",
    description:
      "Directional and relative-value strategies aligning digital beta with macro catalysts in FX, rates, and commodities.",
    strategies: [
      {
        name: "Cross-Asset Macro Overlay",
        metrics: ["Gross exposure: 1–2x", "Drawdown cap: 8%", "Monthly liquidity"],
        detail:
          "Discretionary macro portfolio overlaying digital assets with FX, rates, and commodity positioning for diversified outcomes.",
      },
      {
        name: "Event-Driven Credit",
        metrics: ["Tenors: 6–18 months", "Blend of on/off-chain collateral", "Audited reporting"],
        detail:
          "Finances growth-stage digital infrastructure with structured notes, combining on-chain telemetry with traditional credit analysis.",
      },
    ],
  },
] as const;

const riskControls = [
  {
    title: "Mandate Architecture",
    points: [
      "Segregated accounts via Swiss Asset Manager or Luxembourg CSSF compartments.",
      "Custom investment policy statements with board sign-off and regulator visibility.",
      "Dual signatory model, independent compliance, and automated mandate breach alerts.",
    ],
  },
  {
    title: "Execution Discipline",
    points: [
      "Pre-trade risk checks, margin engines, and kill-switch automation across venues.",
      "Round-the-clock trading desk with redundant infrastructure and disaster recovery.",
      "SOC-style logging with immutable audit trails for all order and treasury events.",
    ],
  },
  {
    title: "Reporting & Transparency",
    points: [
      "Allocator portal providing T+0 positions, performance, and exposure detail.",
      "Quarterly board packs with independent risk commentary and scenario testing.",
      "Optional third-party verification (Big 4 audit, chain analytics) per mandate.",
    ],
  },
] as const;

const serviceLayers = [
  {
    header: "Portfolio Construction",
    description:
      "Collaborative mandate design with governance committees, designing fee structures, liquidity terms, and hedging overlays appropriate to allocator policy.",
  },
  {
    header: "Treasury & Operations",
    description:
      "Full-service operations including fiat rails, multi-currency treasury, collateral management, and tax-ready documentation.",
  },
  {
    header: "Technology & Data",
    description:
      "APIs, data-room integrations, and allocator portals delivering custom analytics while satisfying compliance and regulatory visibility.",
  },
] as const;

export default function StrategiesPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Strategies
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Regulated access to digital and traditional liquidity, yield, and macro programmes.
          </h1>
          <p className="text-lg text-slate-200">
            Mira Labs operates discretionary and rules-based mandates across digital markets and TradFi credit, powered by
            regulated infrastructure and global banking partnerships.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Strategy Catalogue</h2>
            <p className="mt-4 text-base text-slate-300">
              Fully-operational programmes with dedicated portfolio and risk teams, configurable to segregated accounts or multi-client compartments.
            </p>
          </div>
          <div className="space-y-10">
            {strategyGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-light text-white">{group.title}</h3>
                  <p className="text-sm text-slate-300 sm:max-w-xl">{group.description}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {group.strategies.map((strategy) => (
                    <article
                      key={strategy.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1"
                    >
                      <div className="flex flex-col gap-3">
                        <h4 className="text-lg font-light text-white">{strategy.name}</h4>
                        <ul className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-300">
                          {strategy.metrics.map((metric) => (
                            <li key={metric} className="rounded-full border border-white/15 px-3 py-1">
                              {metric}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-slate-200">{strategy.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Risk & Governance Stack</h2>
            <p className="mt-4 text-base text-slate-300">
              Mandates operate under institutional controls aligned with FINMA and CSSF standards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {riskControls.map((control) => (
              <article key={control.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{control.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {control.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{point}</span>
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
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Service Layers</h2>
            <p className="mt-4 text-base text-slate-300">
              Beyond portfolio management, Mira Labs provides full-stack operational support tailored to allocator requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceLayers.map((layer) => (
              <article key={layer.header} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">{layer.header}</h3>
                <p className="mt-3 text-sm text-slate-200">{layer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
