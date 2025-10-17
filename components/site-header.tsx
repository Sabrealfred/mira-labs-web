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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900 transition hover:text-blue-600"
          onClick={closeMenu}
        >
          Mira Labs
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </nav>
      </div>
      {menuOpen ? (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
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
