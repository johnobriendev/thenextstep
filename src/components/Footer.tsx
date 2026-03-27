import Link from "next/link";
import { SITE, NAV_LINKS, CONTACT } from "@/lib/placeholder";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/TNS-logo.PNG"
              alt={SITE.name}
              width={48}
              height={48}
              className="rounded shrink-0"
            />
            <div>
              <p className="font-bold text-white leading-tight">The Next Step</p>
              <p className="text-sm text-pink-400">Basketball Training</p>
              <p className="mt-2 text-sm">{SITE.description}</p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Pages
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </p>
            <p className="text-sm">{CONTACT.location}</p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-1 block text-sm hover:text-blue-400 transition-colors"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 block text-sm hover:text-blue-400 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
