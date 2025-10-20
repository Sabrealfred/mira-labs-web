import { LineChart, ShieldCheck, Waves, Building2, Globe2, TrendingUp } from "lucide-react";

const metrics = [
  { value: '$72M', label: 'Assets Under Management', detail: 'Multi-jurisdictional digital + traditional mandates' },
  { value: '31', label: 'Institutional Mandates', detail: 'Family offices, funds, treasuries, and corporates' },
  { value: '4', label: 'Regulated Jurisdictions', detail: 'Switzerland, Luxembourg, United States, Singapore' },
  { value: '2', label: 'Primary Licenses', detail: 'FINMA Asset Manager • CSSF Umbrella Compartments' },
] as const;

const capabilities = [
  {
    title: 'Digital Liquidity & Market Neutral',
    summary: 'Delta-neutral liquidity provision, basis capture, and cross-exchange inventory management.',
    detail: 'Utilizes FPGA-enabled execution, smart order routing, and pre-trade risk throttles to deliver low-volatility, institutional-grade returns.',
    icon: Waves,
  },
  {
    title: 'Yield Engineering & Structured Access',
    summary: 'Collateralized lending, stablecoin yield, and token-forward structures with bank-grade monitoring.',
    detail: 'Integrates TradFi credit processes with on-chain transparency, offering duration-matched solutions for treasuries and funds.',
    icon: ShieldCheck,
  },
  {
    title: 'Macro & Cross-Asset Strategies',
    summary: 'Directional and relative-value mandates spanning digital assets, FX, and commodities.',
    detail: 'Combines discretionary macro views with quantitative overlays, supported by global banking and custody partners.',
    icon: LineChart,
  },
] as const;

const platformHighlights = [
  {
    title: 'Regulatory Foundation',
    icon: Building2,
    description: 'FINMA-authorized Swiss asset manager with Luxembourg CSSF umbrella providing 400+ pre-approved compartments for global allocators.',
  },
  {
    title: 'Global Infrastructure',
    icon: Globe2,
    description: 'Tier-1 European banking, institutional custody with MPC wallets, and integrated fiat on/off ramps across four jurisdictions.',
  },
  {
    title: 'Institutional Execution',
    icon: TrendingUp,
    description: 'FPGA-grade execution stack with sub-120ns latency, real-time risk analytics, and multi-venue connectivity.',
  },
] as const;

const trustedPartners = [
  { name: 'Helvetia Bank', tag: 'Banking' },
  { name: 'EuroClear Digital', tag: 'Custody' },
  { name: 'Summit Capital', tag: 'Allocator' },
  { name: 'Atlas Protocol', tag: 'Token Treasury' },
  { name: 'Northbridge Advisors', tag: 'Advisory' },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Dynamic & Futuristic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-24 lg:py-32">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-96 w-96 animate-pulse-glow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-3xl" />
          <div className="absolute right-0 top-1/4 h-80 w-80 animate-float rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-25 blur-3xl" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-pulse-glow rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-3xl" style={{ animationDelay: '2s' }} />
        </div>

        {/* Diagonal Light Beam */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-white/5 to-transparent" style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Animated Badge */}
            <div className="group mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300"></span>
              </span>
              <span>Digital + Traditional Asset Management</span>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Regulated multi-asset management for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  institutional allocators
                </span>
                <span className="absolute -inset-1 -z-10 blur-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              Mira Labs operates a Swiss FINMA-regulated platform with Luxembourg CSSF compartments, delivering
              liquidity, structured yield, and macro strategies to institutions globally.
            </p>

            {/* CTA Buttons with Enhanced Interactivity */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/platform"
                className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-2xl shadow-white/20 transition hover:shadow-white/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Platform
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 transition group-hover:opacity-100" />
              </a>
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-lg border-2 border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Enhanced Metrics Grid */}
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="shimmer absolute inset-0" />
                </div>

                <p className="text-3xl font-bold text-white lg:text-4xl">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">{metric.label}</p>
                <p className="mt-3 text-xs leading-relaxed text-blue-100">{metric.detail}</p>

                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-br from-cyan-400/20 to-transparent" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Investment Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Institutional strategies spanning market-neutral liquidity, structured yield, and cross-asset macro exposure.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="professional-card p-8">
                <capability.icon className="h-12 w-12 text-blue-600" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{capability.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{capability.summary}</p>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">{capability.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Infrastructure */}
      <section className="accent-section py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Institutional Platform
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Infrastructure and partnerships designed for regulated cross-asset mandates.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
            {platformHighlights.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-8 shadow-sm">
                <item.icon className="h-10 w-10 text-blue-600" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-10 lg:p-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Trusted By
                </p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900 lg:text-3xl">
                  Banking partners, allocators, and token treasuries across Europe, the Americas, and Asia
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {trustedPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-center"
                  >
                    <p className="text-sm font-medium text-gray-900">{partner.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">{partner.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 px-10 py-16 shadow-2xl lg:px-20">
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to engage with Mira Labs?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Coordinate a mandate review, access documentation, or connect with our relationship team.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition hover:bg-gray-50"
                >
                  Contact Team
                </a>
                <a
                  href="/platform"
                  className="rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-8 text-xs text-blue-200">
                New York • Luzern • Luxembourg • Singapore
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
