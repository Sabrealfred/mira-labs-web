export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-xs text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-3">
        <p>
          © {new Date().getFullYear()} Mira Labs AG. All rights reserved.
        </p>
        <p>
          Information provided is intended solely for qualified or professional investors. Nothing herein
          constitutes an offer to sell or a solicitation of an offer to buy any securities. Offers will be
          made only through definitive documentation and subject to eligibility requirements.
        </p>
        <p className="text-slate-500">
          New York • Luzern • Luxembourg • Singapore
        </p>
      </div>
    </footer>
  );
}
