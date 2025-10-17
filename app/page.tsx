export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
            MIRA LABS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            Swiss-Regulated Digital Asset Management Platform
          </p>
          <p className="text-lg sm:text-xl text-slate-400 mb-8">
            Institutional-Grade Infrastructure for Digital Asset Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all font-light">
              Learn More
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white rounded transition-all font-light">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 text-center">
            About Mira Labs
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Mira Labs is building the next generation of digital asset management infrastructure,
                combining Swiss regulatory compliance with cutting-edge technology.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We provide institutional investors with secure, compliant access to digital asset
                opportunities through our Swiss-regulated platform.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Why Mira Labs?</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Swiss regulatory framework and FINMA oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Institutional-grade security and infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Experienced team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Multi-jurisdictional presence (NY, Luzern, Luxembourg, Singapore)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Asset Management</h3>
              <p className="text-slate-700">
                Professional digital asset management with Swiss regulatory compliance and
                institutional-grade security.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Trading Platform</h3>
              <p className="text-slate-700">
                Advanced algorithmic trading strategies with real-time execution and
                comprehensive risk management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Custody Solutions</h3>
              <p className="text-slate-700">
                Secure digital asset custody with multi-signature wallets and
                institutional-grade security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">$2-5M</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Pre-Seed Raise</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">4</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Global Offices</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">Swiss</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Regulated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light mb-2">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Market Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-slate-700 mb-12 text-lg">
            Interested in learning more about Mira Labs? Contact us for investment opportunities
            or partnership inquiries.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Locations</h3>
              <div className="space-y-2 text-slate-700">
                <p>New York, USA</p>
                <p>Luzern, Switzerland</p>
                <p>Luxembourg</p>
                <p>Singapore</p>
              </div>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Investment Inquiries</h3>
              <p className="text-slate-700 mb-4">
                For institutional investment opportunities and partnership discussions
              </p>
              <a href="mailto:invest@miralabs.io" className="text-blue-600 hover:text-blue-700 font-medium">
                invest@miralabs.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">MIRA LABS</h3>
              <p className="text-slate-400 text-sm">
                Swiss-Regulated Digital Asset Management Platform
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-slate-400">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-slate-300 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Team</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Investors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-slate-400">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-300 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2025 Mira Labs. All rights reserved.</p>
            <p className="mt-2">New York • Luzern • Luxembourg • Singapore</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
