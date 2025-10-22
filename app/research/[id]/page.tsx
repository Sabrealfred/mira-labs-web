"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

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

export default function ResearchArticlePage() {
  const params = useParams();
  const article = researchArticles.find((a) => a.id === Number(params.id));

  if (!article) {
    return (
      <main className="min-h-screen bg-[#fafafa] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900">Article Not Found</h1>
          <p className="mt-4 text-gray-600">The requested research article could not be found.</p>
          <Link href="/research" className="mt-6 inline-flex items-center gap-2 text-gray-900 hover:text-gray-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>

            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">{article.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Article Content Placeholder */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              This is a detailed research article exploring {article.title.toLowerCase()}.
              The full content is available to institutional clients and registered users.
            </p>

            <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-light text-gray-900">Full Article Access</h3>
              <p className="mt-3 text-sm text-gray-600">
                Request institutional access to view complete research reports and analysis.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Request Access
              </Link>
            </div>

            <p className="leading-relaxed">
              For questions about this research or to discuss institutional access,
              please contact our research desk through the client portal or via our institutional contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900">Related Research</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {researchArticles
              .filter((a) => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/research/${relatedArticle.id}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md"
                >
                  <span className="text-xs font-medium text-gray-600">{relatedArticle.category}</span>
                  <h3 className="mt-2 text-lg font-light text-gray-900 group-hover:text-gray-700">
                    {relatedArticle.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{relatedArticle.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Access Full Research Library
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Institutional clients receive comprehensive research reports and regular market commentary.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
