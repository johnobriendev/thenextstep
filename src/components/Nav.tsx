"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/placeholder";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/TNS-logo.PNG"
            alt={SITE.name}
            width={56}
            height={56}
            className="rounded"
          />
          <span className="hidden text-sm font-bold leading-tight text-white sm:block">
            The Next Step<br />
            <span className="font-normal text-pink-400">Basketball Training</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  pathname === link.href ? "text-blue-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* TNS label — mobile only, between logo and hamburger */}
        <span className="text-3xl tracking-wider text-white md:hidden" style={{ fontFamily: "var(--font-bebas-neue)" }}>
          TNS
        </span>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-slate-700 bg-slate-900 px-6 pb-6 md:hidden">
          <ul className="flex flex-col pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-4 text-lg font-medium text-slate-300 hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
