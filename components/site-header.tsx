"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
  title: string;
  href: string;
};

const links: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Platform", href: "/platform" },
  { title: "Strategies", href: "/strategies" },
  { title: "Governance", href: "/governance" },
  { title: "Team", href: "/team" },
  { title: "Research", href: "/research" },
  { title: "Contact", href: "/contact" },
];

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:text-white"
          onClick={closeMenu}
        >
          Mira Labs
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium tracking-wide text-slate-100 md:hidden"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide transition ${
                  active ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/40 transition hover:shadow-blue-800/50"
          >
            Start a Review
          </Link>
        </nav>
      </div>
      {menuOpen ? (
        <nav className="border-t border-white/10 bg-slate-950 md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-3 py-2 text-sm font-light transition ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
