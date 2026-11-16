import Link from "next/link";
import { legal, nav, pending, site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/75">
      <div className="h-1 bg-gradient-to-r from-saffron via-white/40 to-leaf" />
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-mark-sm.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full bg-white p-1" />
            <p className="font-display text-lg font-extrabold uppercase tracking-tight text-white">{site.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            A {site.legalForm}, providing responsible microfinance and financial literacy to low-income
            households. Any surplus is used only to further our objects and is never distributed as dividend.
          </p>
          <dl className="mt-5 grid gap-1 text-sm">
            <div className="flex gap-2">
              <dt className="text-white/50">CIN:</dt>
              <dd>{site.cin || pending}</dd>
            </div>
            {site.registrations.map((r) => (
              <div key={r.label} className="flex gap-2">
                <dt className="text-white/50">{r.label}:</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Policies</p>
          <ul className="mt-4 space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Reach us</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.address || `Address: ${pending}`}</li>
            <li>{site.phone ? <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a> : `Phone: ${pending}`}</li>
            <li>{site.email ? <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a> : `Email: ${pending}`}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/fair-practices/#grievance" className="hover:text-white">Grievance redressal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
