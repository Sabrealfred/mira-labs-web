import { LineChart, ShieldCheck, Waves } from "lucide-react";
import { fetchLandingContent, type LandingContent } from "@/lib/strapi";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";

const iconMap = {
  waves: Waves,
  "shield-check": ShieldCheck,
  "line-chart": LineChart,
} as const;

const fallbackLanding: LandingContent = {
  heroBadge: "Digital + Traditional Asset Management",
  heroTitle:
    "Regulated multi-asset management bridging digital markets and traditional finance.",
  heroSubtitle:
    "Mira Labs operates a Swiss FINMA-regulated platform with Luxembourg CSSF compartments, delivering liquidity, structured yield, and macro strategies to institutions across Europe, the Americas, and Asia.",
  primaryCtaLabel: "Explore Platform",
  primaryCtaHref: "/platform",
  secondaryCtaLabel: "View Strategies",
  secondaryCtaHref: "/strategies",
  metrics: [
    {
      value: "$72M",
      label: "Assets Under Management",
      detail: "Multi-jurisdictional digital + traditional mandates",
    },
    {
      value: "31",
      label: "Institutional Mandates",
      detail: "Family offices, funds, treasuries, and corporates",
    },
    {
      value: "4",
      label: "Regulated Jurisdictions",
      detail: "Switzerland, Luxembourg, United States, Singapore",
    },
    {
      value: "2",
      label: "Primary Licenses",
      detail: "FINMA Asset Manager • CSSF Umbrella Compartments",
    },
  ],
  capabilities: [
    {
      title: "Digital Liquidity & Market Neutral",
      summary:
        "Delta-neutral liquidity provision, basis capture, and cross-exchange inventory management.",
      detail:
        "Utilises FPGA-enabled execution, smart order routing, and pre-trade risk throttles to deliver low-volatility, institutional-grade returns.",
      icon: "waves",
    },
    {
      title: "Yield Engineering & Structured Access",
      summary:
        "Collateralised lending, stablecoin yield, and token-forward structures with bank-grade monitoring.",
      detail:
        "Integrates TradFi credit processes with on-chain transparency, offering duration-matched solutions for treasuries and funds.",
      icon: "shield-check",
    },
    {
      title: "Macro & Cross-Asset Strategies",
      summary:
        "Directional and relative-value mandates spanning digital assets, FX, and commodities.",
      detail:
        "Combines discretionary macro views with quantitative overlays, supported by global banking and custody partners.",
      icon: "line-chart",
    },
  ],
  lifecycle: [
    {
      heading: "Discovery & Structuring",
      points: [
        {
          text: "Mandate workshops covering objectives, liquidity, and drawdown tolerances.",
        },
        {
          text: "Custom structuring across SMA, segregated compartments, or fund vehicles.",
        },
        {
          text: "Regulatory review for Swiss FINMA and Luxembourg CSSF compliance.",
        },
      ],
    },
    {
      heading: "Execution & Monitoring",
      points: [
        {
          text: "24/7 trading desk with continuous market-making and risk surveillance.",
        },
        {
          text: "Automated reconciliations, margin controls, and treasury management.",
        },
        {
          text: "Allocator dashboards with T+0 transparency and metrics aligned to policy.",
        },
      ],
    },
    {
      heading: "Reporting & Governance",
      points: [
        { text: "Monthly and quarterly board-ready reporting with audit trails." },
        {
          text: "On-demand scenario analysis and stress testing against portfolio rules.",
        },
        {
          text: "Annual independent audits plus optional SOC 2-style attestations.",
        },
      ],
    },
  ],
  platformHighlights: [
    {
      title: "Regulatory & Governance",
      points: [
        {
          text: "FINMA-authorised Swiss asset manager with dedicated compliance and risk teams.",
        },
        {
          text: "Luxembourg CSSF umbrella providing 400+ pre-approved compartments for global allocators.",
        },
        {
          text: "Change-of-control supervision, AML/KYC oversight, and board-level governance across entities.",
        },
      ],
    },
    {
      title: "Banking & Custody Network",
      points: [
        {
          text: "Tier-1 European banking relationships with segregated operating and client accounts.",
        },
        {
          text: "Institutional custody incorporating MPC wallets, warm/cold storage, and insurance coverage.",
        },
        {
          text: "Integrated fiat on/off ramps, FX hedging, and treasury optimisation.",
        },
      ],
    },
    {
      title: "Execution Fabric",
      points: [
        {
          text: "FPGA-grade execution stack delivering sub-120ns latency and multi-venue connectivity.",
        },
        {
          text: "Risk throttles, real-time analytics, and cross-exchange surveillance tuned for institutional mandates.",
        },
        {
          text: "Trade lifecycle automation linking exchanges, OTC venues, and TradFi brokers.",
        },
      ],
    },
    {
      title: "Reporting & Analytics",
      points: [
        {
          text: "Allocator portal with performance, risk, and ESG overlays updated in near real time.",
        },
        {
          text: "Data warehouse combining on-chain telemetry with traditional financial data sources.",
        },
        {
          text: "Custom APIs and data-room integrations for LPs, auditors, and regulators.",
        },
      ],
    },
  ],
  clientSegments: [
    {
      segment: "Institutional Allocators",
      description:
        "Family offices, fund-of-funds, and wealth platforms seeking regulated exposure to digital and hybrid strategies.",
    },
    {
      segment: "Corporate Treasuries",
      description:
        "Public and private companies optimising treasury yield and liquidity with ring-fenced, policy-aligned mandates.",
    },
    {
      segment: "Token Issuers & Foundations",
      description:
        "Protocol treasuries requiring liquidity provisioning, reserve management, and market stability programs.",
    },
  ],
  researchHighlights: [
    {
      title: "Digital Liquidity Quarterly",
      type: "Market Update",
      summary:
        "Analysis of exchange depth, basis spreads, and venue selection across major digital asset markets.",
    },
    {
      title: "Yield Curve in Tokenised Credit",
      type: "Whitepaper",
      summary:
        "Framework for collateral quality, duration, and counterparty selection in tokenised money markets.",
    },
    {
      title: "Macro Regime Monitor",
      type: "Insight",
      summary:
        "Monthly cross-asset outlook connecting TradFi macro factors with digital asset volatility and flows.",
    },
  ],
  trustedPartners: [
    { name: "Helvetia Bank", tag: "Banking" },
    { name: "EuroClear Digital", tag: "Custody" },
    { name: "Summit Capital", tag: "Allocator" },
    { name: "Atlas Protocol", tag: "Token Treasury" },
    { name: "Northbridge Advisors", tag: "Advisory" },
  ],
  pressMentions: [
    {
      outlet: "Financial Ledger",
      headline: "Swiss-regulated Mira Labs bridges TradFi governance with digital market liquidity.",
      date: "Oct 2025",
    },
    {
      outlet: "Global Treasury Forum",
      headline: "Treasuries turn to Mira Labs for tokenised yield programmes with daily transparency.",
      date: "Jul 2025",
    },
    {
      outlet: "Digital Asset Insider",
      headline: "Mira Labs launches macro overlay service integrating FX, rates, and crypto exposures.",
      date: "May 2025",
    },
  ],
  offices: [
    { city: "New York, USA", note: "North American Institutional Coverage" },
    { city: "Luzern, Switzerland", note: "FINMA-Regulated Entity" },
    { city: "Luxembourg", note: "CSSF Umbrella Platform" },
    { city: "Singapore", note: "Asia-Pacific Partnerships Hub" },
  ],
};

const DEFAULT_ICON = "waves";

export default async function Home() {
  const landing = (await fetchLandingContent()) ?? fallbackLanding;

  const metrics = landing.metrics ?? [];
  const capabilities = landing.capabilities ?? [];
  const lifecycle = landing.lifecycle ?? [];
  const platformHighlights = landing.platformHighlights ?? [];
  const clientSegments = landing.clientSegments ?? [];
  const researchHighlights = landing.researchHighlights ?? [];
  const trustedPartners = landing.trustedPartners ?? [];
  const pressMentions = landing.pressMentions ?? [];
  const offices = landing.offices ?? [];

  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="relative overflow-hidden py-32">
        <AnimatedDotPattern className="opacity-40" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          {landing.heroBadge ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-200">
              {landing.heroBadge}
            </span>
          ) : null}
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            {landing.heroTitle ?? fallbackLanding.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl">
            {landing.heroSubtitle ?? fallbackLanding.heroSubtitle}
          </p>
          <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((metric, idx) => (
              <article key={metric.id ?? `${metric.label}-${idx}`} className="glass-border relative p-[1px]">
                <div className="relative h-full rounded-[1.35rem] bg-slate-950/75 p-5 text-left">
                  <p className="text-2xl font-light text-white sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-slate-300">{metric.label}</p>
                  <p className="mt-3 text-xs text-slate-400">{metric.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            {landing.primaryCtaLabel && landing.primaryCtaHref ? (
              <a
                href={landing.primaryCtaHref}
                className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-10 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-xl shadow-blue-900/50 transition hover:shadow-blue-800/60"
              >
                {landing.primaryCtaLabel}
              </a>
            ) : null}
            {landing.secondaryCtaLabel && landing.secondaryCtaHref ? (
              <a
                href={landing.secondaryCtaHref}
                className="rounded-full border border-white/25 px-10 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
              >
                {landing.secondaryCtaLabel}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Mandates & Capabilities</h2>
            <p className="mt-4 text-lg text-slate-200">
              Institutional strategies spanning market-neutral liquidity, structured yield, and cross-asset macro exposure.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((capability, idx) => {
              const iconKey = (capability.icon ?? DEFAULT_ICON) as keyof typeof iconMap;
              const Icon = iconMap[iconKey] ?? iconMap[DEFAULT_ICON as keyof typeof iconMap];
              return (
                <article
                  key={capability.id ?? `${capability.title}-${idx}`}
                  className="glass-border relative overflow-hidden p-[1px] transition hover:-translate-y-1 hover:shadow-[0_45px_95px_-50px_rgba(79,70,229,0.55)]"
                >
                  <div className="relative h-full rounded-[1.35rem] bg-slate-950/75 p-8 text-left">
                    <Icon className="h-10 w-10 text-sky-300" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-light text-white">{capability.title}</h3>
                    <p className="mt-4 text-sm text-slate-200">{capability.summary}</p>
                    <p className="mt-3 text-xs text-slate-400">{capability.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                  Trusted By
                </p>
                <h3 className="mt-3 text-2xl font-light text-white">
                  Banking partners, allocators, and token treasuries spanning Europe, the Americas, and Asia.
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200 sm:flex sm:flex-wrap sm:gap-6">
                {trustedPartners.map((partner, idx) => (
                  <div
                    key={partner.id ?? `${partner.name}-${idx}`}
                    className="rounded-xl border border-white/15 px-4 py-2 text-center text-slate-300"
                  >
                    {partner.name}
                    {partner.tag ? (
                      <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">
                        {partner.tag}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-light tracking-tight">Allocator Lifecycle</h2>
            <p className="mt-4 text-lg text-slate-200">
              Structured onboarding, execution, and governance delivering continuous transparency and control.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {lifecycle.map((stage, idx) => (
              <article key={stage.id ?? `${stage.heading}-${idx}`} className="glass-border relative p-[1px]">
                <div className="relative h-full rounded-[1.35rem] bg-slate-950/80 p-8">
                  <h3 className="text-lg font-light text-white">{stage.heading}</h3>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {(stage.points ?? []).map((point, pointIdx) => (
                      <li key={point.id ?? `${point.text}-${pointIdx}`} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-300/80" aria-hidden="true" />
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Institutional Platform</h2>
            <p className="mt-4 text-lg text-slate-200">
              Infrastructure, partnerships, and analytics designed for regulated cross-asset mandates.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {platformHighlights.map((highlight, idx) => (
              <article key={highlight.id ?? `${highlight.title}-${idx}`} className="glass-border relative overflow-hidden p-[1px]">
                <div className="relative h-full rounded-[1.35rem] bg-slate-950/75 p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-300">
                    {highlight.title}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {(highlight.points ?? []).map((point, pointIdx) => (
                      <li key={point.id ?? `${point.text}-${pointIdx}`} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-light tracking-tight">Who We Serve</h2>
            <p className="mt-4 text-lg text-slate-200">
              Tailored operating models for allocators, treasuries, and ecosystem partners.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {clientSegments.map((segment, idx) => (
              <article key={segment.id ?? `${segment.segment}-${idx}`} className="glass-border relative p-[1px]">
                <div className="relative h-full rounded-[1.35rem] bg-slate-950/75 p-8">
                  <h3 className="text-lg font-light text-white">{segment.segment}</h3>
                  <p className="mt-4 text-sm text-slate-200">{segment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-light tracking-tight">In the News</h2>
            <p className="mt-4 text-lg text-slate-200">
              Coverage from financial press and institutional forums highlighting Mira Labs’ platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pressMentions.map((mention, idx) => (
              <article key={mention.id ?? `${mention.outlet}-${idx}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">{mention.outlet}</p>
                <h3 className="mt-4 text-sm font-light text-white">{mention.headline}</h3>
                <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-slate-400">{mention.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-light tracking-tight">Research & Commentary</h2>
            <p className="mt-4 text-lg text-slate-200">
              Excerpts from the Mira Labs research desk and client communication streams.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {researchHighlights.map((item, idx) => (
              <article key={item.id ?? `${item.title}-${idx}`} className="glass-border relative overflow-hidden p-[1px] transition hover:-translate-y-1">
                <div className="relative h-full rounded-[1.35rem] bg-slate-950/80 p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-300">{item.type}</p>
                  <h3 className="mt-4 text-2xl font-light text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-200">{item.summary}</p>
                  <p className="mt-6 text-xs text-slate-400">Access available inside the client portal.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Engage With Mira Labs</h2>
            <p className="mt-4 text-lg text-slate-200">
              Coordinate a mandate review, access the client portal, or connect with our relationship team.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <article className="glass-border relative overflow-hidden p-[1px]">
              <div className="relative h-full rounded-[1.35rem] bg-slate-950/80 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                  Briefing Requests
                </h3>
                <p className="mt-4 text-sm text-slate-200">
                  Submit institutional credentials to receive mandate documentation, service-level agreements, and reporting samples.
                </p>
                <div className="mt-6 rounded-xl border border-dashed border-white/15 bg-white/5 p-4 text-xs text-slate-300 space-y-2">
                  <p>Include:</p>
                  <ul className="space-y-1">
                    <li>• Organisation, regulatory status, and AUM</li>
                    <li>• Mandate objectives and timeline</li>
                    <li>• Preferred structure (SMA, compartment, fund)</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-blue-900/40 transition hover:shadow-blue-800/50"
                  >
                    Contact Team
                  </a>
                </div>
              </div>
            </article>
            <article className="glass-border relative overflow-hidden p-[1px]">
              <div className="relative h-full rounded-[1.35rem] bg-slate-950/80 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                  Global Presence
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  {offices.map((office, idx) => (
                    <li key={office.id ?? `${office.city}-${idx}`}>
                      <p className="font-semibold text-white">{office.city}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-400">{office.note}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-slate-400">
                  Mira Labs operates through regulated entities in Switzerland and Luxembourg, with representative offices in New York and Singapore.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
