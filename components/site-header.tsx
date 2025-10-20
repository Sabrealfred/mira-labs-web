"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { DotMatrixLogo } from "./dot-matrix-logo";

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
          ? "border-b border-gray-200 bg-white/98 shadow-sm backdrop-blur-sm"
          : "border-b border-gray-100 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition"
          onClick={closeMenu}
        >
          <DotMatrixLogo size="sm" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">MIRA LABS</span>
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          <Link
            href="/login"
            className="ml-2 rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-gray-100 text-gray-900"
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
      </div>
    </header>
  );
}
