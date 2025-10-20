"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg shadow-blue-900/5 backdrop-blur-md"
          : "border-b border-gray-100 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group relative text-lg font-bold tracking-tight text-gray-900 transition"
          onClick={closeMenu}
        >
          <span className="relative z-10">Mira Labs</span>
          <span className="absolute -inset-2 -z-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 blur transition group-hover:opacity-10" />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="group relative overflow-hidden rounded-lg border border-gray-300 p-2.5 text-gray-700 transition hover:border-blue-600 md:hidden"
          aria-expanded={menuOpen}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition group-hover:opacity-10" />
          <span className="relative z-10">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <span className="relative z-10">{link.title}</span>
                <span
                  className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 to-cyan-50 transition-transform ${
                    active
                      ? "translate-y-0"
                      : "-translate-y-full group-hover:translate-y-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="group relative ml-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition group-hover:opacity-100" />
          </Link>
        </nav>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => {
              const active = isActive(pathname, link.href);
              return (
                <li
                  key={link.href}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`group relative block overflow-hidden rounded-lg px-4 py-3 text-sm font-medium transition ${
                      active ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    <span className="relative z-10">{link.title}</span>
                    <span
                      className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 to-cyan-50 transition-transform ${
                        active
                          ? "translate-x-0"
                          : "-translate-x-full group-hover:translate-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
