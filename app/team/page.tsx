"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Users, Award, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";

const leadership = [
  {
    initials: "JH",
    name: "Jason Hutchinson",
    role: "Chief Investment Analyst & Portfolio Manager",
    bio: "Leads investment strategy and risk at Mira Labs, bringing eight years of experience managing $300M discretionary portfolios with a focus on quantitative strategies and digital asset risk controls.",
    highlights: [
      "Portfolio Manager, Sector Analysts (RIA, $300M AUM)",
      "Former Series 7/65 (reinstatement in progress), CAIA Charterholder",
      "Project finance leader across $100M–$5B transactions with Swiss fund partnerships",
    ],
  },
  {
    initials: "SD",
    name: "Sean Demosthenous",
    role: "Chief Business Development Officer",
    bio: "Drives institutional relationships and capital formation after 15 years in global credit derivatives, structured products, and cross-border trade finance.",
    highlights: [
      "Top-decile CDS broker at Tullett Prebon (TP ICAP) and BGC Partners",
      "Partner, Emira Trade Desk; former Lloyd's of London broker",
      "Built a network of 200+ family offices and HNWI allocators; scaled Zeebu's institutional reach",
    ],
  },
  {
    initials: "AA",
    name: "Amik Ahmad",
    role: "Chief Product Officer",
    bio: "Leads product and platform innovation, combining AI, Web3, and institutional UX expertise from Amazon, One Medical, Autonomys Labs, and multiple blockchain ventures.",
    highlights: [
      "Co-founded Amazon Blockchain Group; Red Dot Design Award recipient",
      "Launched L1 protocol (FDV $415M) and MPC wallet partnerships at Kresus Labs",
      "Director of Product at One Medical, helping guide the company toward profitability pre-IPO",
    ],
  },
  {
    initials: "ZR",
    name: "Zuhayr Reaz",
    role: "Chief Growth Officer",
    bio: "Responsible for strategic partnerships, ecosystem growth, and tokenomics; scaled Zeebu's TVL 3.6x and deployed capital across 200+ crypto projects.",
    highlights: [
      "Johnson Cornell MBA (Finance & Strategy); Duke University MEng (Financial Technology)",
      "Led partnership ecosystems at a $36B exchange; growth consultant for high-performing crypto projects",
      "Grew Zeebu TVL from $26M to $94M within 12 months",
    ],
  },
];

const advisors = [
  {
    name: "Regulatory Counsel",
    focus: "Swiss & Luxembourg compliance, change-of-control approvals, and CSSF compartment governance.",
  },
  {
    name: "Banking Partnerships",
    focus: "Tier-1 European banks and global custodians supporting onboarding, segregated accounts, and treasury.",
  },
  {
    name: "Technology & Security",
    focus: "Former exchange and cloud security leaders guiding infrastructure roadmaps and audits.",
  },
  {
    name: "Institutional Advisors",
    focus: "Family office and fund-of-fund executives advising on allocator onboarding and reporting standards.",
  },
];

const trackRecord = [
  { label: "CDS Contracts Brokered", value: "$10B+", icon: TrendingUp },
  { label: "Assets Under Management", value: "$300M", icon: Award },
  { label: "TVL Growth Delivered", value: "3.6x", icon: Globe2 },
  { label: "Collective Experience", value: "15+ years", icon: Users },
];

export default function TeamPage() {
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
              Leadership Team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Institutional pedigree across markets, product, and growth. Mira Labs combines portfolio
              management, capital markets, and technology expertise to deliver a regulated digital asset platform
              with day-one scale.
            </p>
          </motion.div>

          {/* Track Record Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {trackRecord.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <stat.icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-3xl font-light text-gray-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Core Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">
              Team overseeing investment strategy, regulatory operations, product development, and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {leadership.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-light text-gray-900">
                    {member.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-gray-600">{member.bio}</p>

                <ul className="mt-6 space-y-3">
                  {member.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Bench */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Advisory Bench</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced advisors support regulatory alignment, banking relationships, security, and allocator
              expectations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="font-semibold text-gray-900">{advisor.name}</h3>
                <p className="mt-3 text-sm text-gray-600">{advisor.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Connect with the Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Schedule a confidential briefing to review platform operations, track records, and partnership
            opportunities.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Request Briefing
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
