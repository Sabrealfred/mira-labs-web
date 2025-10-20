"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const researchArticles = [
  {
    id: 1,
    title: "Algorithmic Stablecoins: Evolution of Stability Mechanisms",
    category: "Stablecoins",
    date: "December 2024",
    excerpt: "Analysis of next-generation algorithmic stablecoin designs, including dual-token models, algorithmic market operations (AMOs), and collateral-backed hybrid approaches driving institutional adoption.",
    readTime: "12 min read",
  },
  {
    id: 2,
    title: "Central Bank Digital Currencies and Private Stablecoin Coexistence",
    category: "Regulatory",
    date: "November 2024",
    excerpt: "Examining the regulatory frameworks emerging globally for CBDCs and their impact on private stablecoin issuers. Focus on interoperability standards and cross-border payment infrastructure.",
    readTime: "15 min read",
  },
  {
    id: 3,
    title: "Real-World Asset Tokenization: Bridging TradFi and DeFi",
    category: "Crypto Fintech",
    date: "November 2024",
    excerpt: "Deep dive into RWA tokenization platforms, examining legal structures, custody solutions, and yield optimization strategies for institutional treasuries seeking on-chain exposure.",
    readTime: "18 min read",
  },
  {
    id: 4,
    title: "Yield-Bearing Stablecoins: Institutional Demand and Risk Assessment",
    category: "Stablecoins",
    date: "October 2024",
    excerpt: "Comprehensive analysis of yield-bearing stablecoin mechanisms, including reserve management, counterparty risk, and regulatory compliance for institutional allocators.",
    readTime: "14 min read",
  },
  {
    id: 5,
    title: "Cross-Chain Liquidity Networks: The Future of Institutional DeFi",
    category: "Infrastructure",
    date: "October 2024",
    excerpt: "Technical assessment of cross-chain messaging protocols, atomic swap mechanisms, and multi-chain liquidity aggregation enabling institutional-grade execution.",
    readTime: "16 min read",
  },
  {
    id: 6,
    title: "Stablecoin Reserves Transparency: Best Practices for Institutional Trust",
    category: "Stablecoins",
    date: "September 2024",
    excerpt: "Evaluation of attestation frameworks, real-time proof-of-reserves, and third-party audit standards establishing institutional confidence in stablecoin backing.",
    readTime: "11 min read",
  },
  {
    id: 7,
    title: "Privacy-Preserving Settlement Layers for Institutional Transactions",
    category: "Crypto Fintech",
    date: "September 2024",
    excerpt: "Analysis of zero-knowledge proof implementations, confidential transactions, and privacy protocols meeting regulatory requirements while enabling institutional settlement.",
    readTime: "13 min read",
  },
  {
    id: 8,
    title: "Automated Market Makers: Evolution Toward Institutional-Grade Liquidity",
    category: "DeFi Infrastructure",
    date: "August 2024",
    excerpt: "Survey of concentrated liquidity models, dynamic fee structures, and just-in-time liquidity provision transforming AMM efficiency for professional market makers.",
    readTime: "17 min read",
  },
  {
    id: 9,
    title: "Tokenized Treasury Products: Yield Optimization for Corporate Treasuries",
    category: "Crypto Fintech",
    date: "August 2024",
    excerpt: "Examination of on-chain money market funds, tokenized T-bills, and corporate bond protocols offering institutional treasuries enhanced yield and liquidity management.",
    readTime: "14 min read",
  },
  {
    id: 10,
    title: "Institutional Custody Solutions: MPC, HSM, and Multi-Sig Evolution",
    category: "Infrastructure",
    date: "July 2024",
    excerpt: "Technical review of institutional custody architectures, comparing multi-party computation, hardware security modules, and smart contract-based multi-signature approaches.",
    readTime: "19 min read",
  },
];

export default function ResearchPage() {
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
              Research & Commentary
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              In-depth analysis of stablecoin technologies, crypto fintech infrastructure, and institutional
              digital asset strategies from the Mira Labs research desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Metrics */}
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl font-light text-gray-900">$140B+</p>
              <p className="mt-2 text-sm text-gray-600">Total Stablecoin Market Cap</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-light text-gray-900">850%</p>
              <p className="mt-2 text-sm text-gray-600">RWA Growth YoY</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-3xl font-light text-gray-900">$12T</p>
              <p className="mt-2 text-sm text-gray-600">Projected Tokenized Assets by 2030</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Articles Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{article.excerpt}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <Link
                    href={`/research/${article.id}`}
                    className="group/link flex items-center gap-1 text-sm font-medium text-gray-900 transition hover:text-gray-700"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Subscribe to Research Updates
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Receive monthly insights on digital asset markets, stablecoin developments, and institutional
            infrastructure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="institutional.email@firm.com"
              className="w-full max-w-md rounded-md border border-gray-600 bg-gray-800 px-6 py-3 text-sm text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:w-auto"
            />
            <button className="flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
              Subscribe
              <TrendingUp className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Exclusive content for qualified institutional investors
          </p>
        </div>
      </section>
    </main>
  );
}
