export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium text-gray-900">
            © {new Date().getFullYear()} Mira Labs AG. All rights reserved.
          </p>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-gray-500">
            Information provided is intended solely for qualified or professional investors. Nothing herein
            constitutes an offer to sell or a solicitation of an offer to buy any securities. Offers will be
            made only through definitive documentation and subject to eligibility requirements.
          </p>
          <p className="text-xs font-medium tracking-wider text-gray-400">
            NEW YORK • LUZERN • LUXEMBOURG • SINGAPORE
          </p>
        </div>
      </div>
    </footer>
  );
}
