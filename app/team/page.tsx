import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team | Mira Labs",
  description:
    "Meet the leadership team behind Mira Labs, spanning institutional trading, product, and growth.",
};

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
      "Partner, Emira Trade Desk; former Lloyd’s of London broker",
      "Built a network of 200+ family offices and HNWI allocators; scaled Zeebu’s institutional reach",
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
    bio: "Responsible for strategic partnerships, ecosystem growth, and tokenomics; scaled Zeebu’s TVL 3.6x and deployed capital across 200+ crypto projects.",
    highlights: [
      "Johnson Cornell MBA (Finance & Strategy); Duke University MEng (Financial Technology)",
      "Led partnership ecosystems at a $36B exchange; growth consultant for high-performing crypto projects",
      "Grew Zeebu TVL from $26M to $94M within 12 months",
    ],
  },
] as const;

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
] as const;

const trackRecord = [
  { label: "CDS Contracts Brokered", value: "$10B+" },
  { label: "Assets Under Management", value: "$300M" },
  { label: "TVL Growth Delivered", value: "3.6x" },
  { label: "Collective Experience", value: "15+ years" },
] as const;

export default function TeamPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            Team
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Institutional pedigree across markets, product, and growth.
          </h1>
          <p className="text-lg text-slate-200">
            Mira Labs combines portfolio management, capital markets, and technology expertise to deliver a
            regulated digital asset platform with day-one scale.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-300">
            <span className="rounded-full border border-white/20 px-3 py-1">FINMA</span>
            <span className="rounded-full border border-white/20 px-3 py-1">CSSF</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Institutional AUM</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Product Innovation</span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Leadership</h2>
            <p className="mt-4 text-base text-slate-300">
              Core team overseeing investment strategy, regulatory operations, product development, and
              growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {leadership.map((member) => (
              <article key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-light text-white">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white">{member.name}</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-200">{member.bio}</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {member.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Advisory Bench</h2>
            <p className="mt-4 text-base text-slate-300">
              Experienced advisors support regulatory alignment, banking relationships, security, and allocator
              expectations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  {advisor.name}
                </h3>
                <p className="mt-3 text-sm text-slate-200">{advisor.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Track Record</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {trackRecord.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-light text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            Connect with the leadership team.
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Schedule a confidential briefing to review platform operations, track records, and partnership
            opportunities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Request Briefing
            </Link>
            <Link
              href="/insights"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
