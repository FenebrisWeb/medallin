"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/app/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

function GlobeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pt-4">
      <div className="mx-auto flex w-[90%] items-center justify-between gap-4 rounded-full bg-[#fdfaf2] px-4 py-2.5 shadow-sm dark:bg-zinc-900">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm"
        >
          <Image
            src="/logo.png"
            alt="Medallin"
            width={140}
            height={40}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/[.04] dark:text-zinc-200 dark:hover:bg-white/[.08]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/book-now"
            className="flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Book Now
            <ArrowUpRightIcon />
          </Link>
          <button
            type="button"
            aria-label="Change language"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] text-zinc-700 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-200 dark:hover:bg-white/[.08]"
          >
            <GlobeIcon />
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 lg:hidden dark:text-zinc-200"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 w-[90%] rounded-3xl bg-[#fdfaf2] px-4 pb-6 pt-2 shadow-sm lg:hidden dark:bg-zinc-900">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-black/[.08] pt-4 dark:border-white/[.145]">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/book-demo"
              className="flex items-center justify-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-zinc-950"
              onClick={() => setMobileOpen(false)}
            >
              Book demo
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
