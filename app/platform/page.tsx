"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Shield, Building2, Network, Lock, Gauge, Globe2, CheckCircle } from "lucide-react";

const platformFeatures = [
  {
    icon: Shield,
    title: "FINMA-Authorized Asset Manager",
    description: "Swiss Article 17 FINMA license for institutional asset management with full regulatory supervision and European passporting rights.",
    benefits: [
      "Direct regulatory oversight by Swiss Financial Market Supervisory Authority",
      "Institutional-grade compliance framework with automated AML/KYC workflows",
      "Board-level governance structure with independent risk and audit committees",
    ],
  },
  {
    icon: Building2,
    title: "Luxembourg CSSF Umbrella Fund",
    description: "Pre-approved compartment structure enabling rapid deployment of bespoke mandates with full regulatory coverage.",
    benefits: [
      "400+ compartment capacity for segregated institutional portfolios",
      "UCITS-compatible framework supporting cross-border distribution",
      "Optimized tax treatment for international institutional investors",
    ],
  },
  {
    icon: Network,
    title: "Tier-1 Banking Network",
    description: "Segregated banking relationships with top-tier European institutions providing multi-currency operations and custody services.",
    benefits: [
      "Multi-bank structure ensuring operational resilience and redundancy",
      "Real-time treasury management with automated reconciliation",
      "Integrated FX hedging and cross-border payment rails",
    ],
  },
  {
    icon: Lock,
    title: "Institutional Custody Infrastructure",
    description: "Multi-layered custody architecture combining MPC technology, hardware security modules, and institutional-grade insurance.",
    benefits: [
      "Multi-party computation wallets eliminating single points of failure",
      "Hot/warm/cold storage tiering optimized for liquidity and security",
      "Comprehensive insurance coverage through leading digital asset insurers",
    ],
  },
  {
    icon: Gauge,
    title: "FPGA-Grade Execution Stack",
    description: "Sub-120 nanosecond latency execution infrastructure with smart order routing and pre-trade risk controls.",
    benefits: [
      "Multi-venue connectivity across 40+ centralized and decentralized exchanges",
      "Real-time risk throttles preventing breaches of mandate parameters",
      "Automated best-execution analytics and trade cost analysis",
    ],
  },
  {
    icon: Globe2,
    title: "Global Operating Footprint",
    description: "Presence across four jurisdictions enabling 24/7 trading operations and localized institutional support.",
    benefits: [
      "New York: North American institutional coverage and partnerships",
      "Luzern: FINMA-regulated entity headquarters and Swiss operations",
      "Luxembourg: CSSF platform operations and European investor servicing",
      "Singapore: Asia-Pacific trading desk and regional partnerships",
    ],
  },
];

const technicalStack = [
  {
    category: "Regulatory & Compliance",
    items: [
      "FINMA Article 17 Asset Manager License",
      "Luxembourg CSSF Umbrella Fund Authorization",
      "Swiss SRO Membership (VQF)",
      "Automated AML/KYC & Transaction Monitoring",
      "Real-Time Regulatory Reporting",
    ],
  },
  {
    category: "Banking & Treasury",
    items: [
      "Multi-Bank Segregated Account Structure",
      "Real-Time Cash Management & Reconciliation",
      "Integrated FX Hedging & Currency Management",
      "Automated NAV Calculation & Fund Accounting",
      "Bank-Grade Payment Infrastructure",
    ],
  },
  {
    category: "Custody & Security",
    items: [
      "MPC-Based Institutional Wallet Architecture",
      "Hardware Security Module (HSM) Integration",
      "Multi-Signature Authorization Workflows",
      "Hot/Warm/Cold Storage Tiering",
      "Comprehensive Insurance Coverage",
    ],
  },
  {
    category: "Execution & Trading",
    items: [
      "FPGA-Accelerated Execution Engine (sub-120ns)",
      "Smart Order Routing Across 40+ Venues",
      "Pre-Trade Risk Controls & Mandate Enforcement",
      "Real-Time Position & Exposure Monitoring",
      "Automated Trade Cost Analysis (TCA)",
    ],
  },
];

export default function PlatformPage() {
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
              Institutional Platform
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Regulated infrastructure, institutional-grade execution, and comprehensive custody solutions
              enabling professional digital asset management across global markets.
            </p>
          </motion.div>

          {/* Key Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "18-36", label: "Month Regulatory Moat" },
              { value: "400+", label: "CSSF Compartments" },
              { value: "40+", label: "Venue Connectivity" },
              { value: "<120ns", label: "Execution Latency" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-light text-gray-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Platform Components</h2>
            <p className="mt-4 text-lg text-gray-600">
              End-to-end infrastructure for institutional digital asset operations
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <feature.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{feature.description}</p>

                    <ul className="mt-6 space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Technical Stack</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive technology and compliance infrastructure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technicalStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="font-semibold text-gray-900">{stack.category}</h3>
                <ul className="mt-6 space-y-3">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Schedule a Platform Demonstration
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Explore our institutional infrastructure and discuss bespoke mandate structures with our team.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Request Technical Review
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Platform access restricted to qualified institutional investors
          </p>
        </div>
      </section>
    </main>
  );
}
