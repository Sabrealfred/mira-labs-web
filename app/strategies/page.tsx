"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { TrendingUp, Shield, Layers, BarChart3, Lock, Eye } from "lucide-react";

const strategyGroups = [
  {
    icon: TrendingUp,
    title: "Digital Liquidity",
    description:
      "Market-neutral programs providing continuous liquidity and inventory balancing across centralized and decentralized venues.",
    strategies: [
      {
        name: "Global Market Neutral",
        metrics: ["Target Volatility: 4–6%", "VaR < 2% daily", "Sharpe 2.0+ since 2021"],
        detail:
          "FPGA-enabled execution with dynamic basis capture, funding arbitrage, and cross-venue inventory management across 40+ exchanges.",
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
    icon: Layers,
    title: "Yield Engineering",
    description:
      "Structured solutions blending TradFi credit rigor with tokenized collateral, built for corporate and institutional treasuries.",
    strategies: [
      {
        name: "Tokenized Funding Program",
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
    icon: BarChart3,
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
];

const riskControls = [
  {
    icon: Shield,
    title: "Mandate Architecture",
    points: [
      "Segregated accounts via Swiss Asset Manager or Luxembourg CSSF compartments",
      "Custom investment policy statements with board sign-off and regulator visibility",
      "Dual signatory model, independent compliance, and automated mandate breach alerts",
    ],
  },
  {
    icon: Lock,
    title: "Execution Discipline",
    points: [
      "Pre-trade risk checks, margin engines, and kill-switch automation across venues",
      "Round-the-clock trading desk with redundant infrastructure and disaster recovery",
      "SOC-style logging with immutable audit trails for all order and treasury events",
    ],
  },
  {
    icon: Eye,
    title: "Reporting & Transparency",
    points: [
      "Allocator portal providing T+0 positions, performance, and exposure detail",
      "Quarterly board packs with independent risk commentary and scenario testing",
      "Optional third-party verification (Big 4 audit, chain analytics) per mandate",
    ],
  },
];

const performanceMetrics = [
  { value: "2.1", label: "Average Sharpe Ratio" },
  { value: "<2%", label: "Daily VaR" },
  { value: "85%+", label: "Capital Efficiency" },
  { value: "99.97%", label: "Uptime SLA" },
];

export default function StrategiesPage() {
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
              Investment Strategies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Regulated access to digital and traditional liquidity, yield, and macro programs powered
              by institutional infrastructure and global banking partnerships.
            </p>
          </motion.div>

          {/* Performance Metrics */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-light text-gray-900">{metric.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Catalogue */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Strategy Catalogue</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fully-operational programs with dedicated portfolio and risk teams, configurable to segregated
              accounts or multi-client compartments.
            </p>
          </div>

          <div className="space-y-16">
            {strategyGroups.map((group, groupIndex) => (
              <div key={group.title} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-full bg-gray-100 p-3">
                    <group.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900">{group.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{group.description}</p>
                  </div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                  {group.strategies.map((strategy, strategyIndex) => (
                    <motion.article
                      key={strategy.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: strategyIndex * 0.1 }}
                      className="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
                    >
                      <h4 className="text-xl font-semibold text-gray-900">{strategy.name}</h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {strategy.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <p className="mt-6 text-sm leading-relaxed text-gray-600">{strategy.detail}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Governance Stack */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Risk & Governance Stack</h2>
            <p className="mt-4 text-lg text-gray-600">
              Mandates operate under institutional controls aligned with FINMA and CSSF standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {riskControls.map((control, index) => (
              <motion.article
                key={control.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2">
                    <control.icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{control.title}</h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {control.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Explore Mandate Structures
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Schedule a strategy review to discuss allocation options, risk parameters, and bespoke mandate design.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Schedule Strategy Review
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Institutional mandates available to qualified investors
          </p>
        </div>
      </section>
    </main>
  );
}
