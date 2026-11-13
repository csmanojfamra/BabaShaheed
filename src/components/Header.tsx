"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/config/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-mark-sm.png" alt="" width={44} height={44} className="h-11 w-11" />
          <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight text-navy">
            {site.shortName}
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.25em] text-ink-muted">
              Micro Federation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                isActive(item.href) ? "bg-navy text-white" : "text-ink-soft hover:bg-navy/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact/#apply" className="btn-accent hidden lg:inline-flex">
          Apply for a loan
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(item.href) ? "bg-navy/5 text-navy" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact/#apply" onClick={() => setOpen(false)} className="btn-accent mt-2">
              Apply for a loan
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
