"use client";

import { Building2, Globe2, TrendingUp, ArrowRight } from "lucide-react";
import { DotMatrixLogo, AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { motion } from "framer-motion";

const metrics = [
  { value: '$72M', label: 'Assets Under Management' },
  { value: '31', label: 'Institutional Mandates' },
  { value: '4', label: 'Regulated Jurisdictions' },
  { value: '50%+', label: 'EBITDA Margins' },
] as const;

const capabilities = [
  {
    title: 'Digital Liquidity',
    summary: 'Delta-neutral liquidity provision and cross-exchange inventory management with institutional-grade execution.',
  },
  {
    title: 'Structured Yield',
    summary: 'Collateralized lending and token-forward structures integrating TradFi credit processes with on-chain transparency.',
  },
  {
    title: 'Macro Strategies',
    summary: 'Cross-asset mandates combining discretionary views with quantitative overlays and global banking partnerships.',
  },
] as const;

const platformHighlights = [
  {
    title: 'Regulatory Foundation',
    icon: Building2,
    description: 'FINMA-authorized Swiss asset manager with Luxembourg CSSF umbrella providing institutional-grade compliance.',
  },
  {
    title: 'Global Infrastructure',
    icon: Globe2,
    description: 'Tier-1 banking relationships, institutional custody, and integrated operations across four jurisdictions.',
  },
  {
    title: 'Execution Excellence',
    icon: TrendingUp,
    description: 'FPGA-grade execution stack with sub-120ns latency and comprehensive risk management systems.',
  },
] as const;

const trustedPartners = [
  'Helvetia Bank',
  'EuroClear Digital',
  'Summit Capital',
  'Atlas Protocol',
  'Northbridge Advisors',
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        {/* Animated Dot Pattern Background */}
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Large Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <DotMatrixLogo size="lg" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Omni-Scale Asset Management and Financial Engineering
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
            >
              Swiss FINMA-regulated platform delivering institutional-grade liquidity, structured yield,
              and cross-asset strategies through regulated infrastructure across Europe, Americas, and Asia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="/platform"
                className="group inline-flex items-center gap-2 rounded-md bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Schedule Review
              </a>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-light text-gray-900">{metric.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
              Investment Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Institutional strategies spanning market-neutral liquidity, structured yield, and cross-asset exposure.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{capability.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Infrastructure */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
              Institutional Platform
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Infrastructure and partnerships designed for regulated cross-asset mandates.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {platformHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <item.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Trusted By
            </p>
            <h3 className="mt-2 text-2xl font-light text-gray-900">
              Leading institutions across global markets
            </h3>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-6">
            {trustedPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Ready to engage with Mira Labs?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Coordinate a mandate review, access documentation, or connect with our relationship team.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Contact Team
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/platform"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            New York • Luzern • Luxembourg • Singapore
          </p>
        </div>
      </section>
    </main>
  );
}
