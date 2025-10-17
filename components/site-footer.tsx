export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-gray-900">
            © {new Date().getFullYear()} Mira Labs AG. All rights reserved.
          </p>
          <p className="text-xs leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Information provided is intended solely for qualified or professional investors. Nothing herein
            constitutes an offer to sell or a solicitation of an offer to buy any securities. Offers will be
            made only through definitive documentation and subject to eligibility requirements.
          </p>
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            New York • Luzern • Luxembourg • Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
