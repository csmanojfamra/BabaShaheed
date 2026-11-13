import Link from "next/link";
import { programmes } from "@/config/programmes";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

const pillars = [
  {
    title: "Not for profit",
    body: "As a Section 8 company, every rupee of surplus goes back into our mission. Nothing is paid out as dividend.",
    tone: "bg-saffron-light text-saffron-dark",
  },
  {
    title: "Collateral-free",
    body: "Group-based lending means families can borrow on trust and peer support, without pledging land or gold.",
    tone: "bg-leaf-light text-leaf-dark",
  },
  {
    title: "Fully transparent",
    body: "All charges and the repayment schedule are explained in writing, in your language, before you sign.",
    tone: "bg-navy/10 text-navy",
  },
];

const steps = [
  { title: "Form or join a group", body: "Come together with neighbours you trust as a self-help or joint liability group." },
  { title: "Training & verification", body: "Attend a short orientation; our field officer visits and verifies your details." },
  { title: "Loan disbursed", body: "Approved loans are paid directly into each member's bank account." },
  { title: "Repay & grow", body: "Repay in small, fixed instalments and become eligible for a larger next cycle." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-leaf-light/80 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-saffron-light/80 blur-3xl" />
        <div className="container-site relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Not-for-profit microfinance · Section 8 company</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-6xl">
              Small loans.
              <br />
              <span className="text-saffron">Big futures.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Babashaheed Micro Federation helps women, small entrepreneurs and rural families access fair,
              collateral-free credit, and the know-how to use it well.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/#apply" className="btn-accent">Apply for a loan</Link>
              <Link href="/programmes/" className="btn-ghost">Explore programmes</Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
              {["No collateral", "No application fee", "Doorstep service"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-leaf" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-md">
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-saffron-light via-white to-leaf-light" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-mark.png"
              alt="Babashaheed Micro Federation emblem: a hand supporting a family, with a growing leaf"
              width={512}
              height={512}
              className="relative w-full"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Babashaheed</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Finance that puts people first</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card p-7">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.tone}`}>{p.title}</span>
                <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">What we offer</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Programmes built around livelihoods</h2>
            </div>
            <Link href="/programmes/" className="text-sm font-semibold text-navy hover:text-saffron-dark">
              View all programmes →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <Link
                key={p.slug}
                href={`/programmes/#${p.slug}`}
                className="card group p-7 transition hover:-translate-y-0.5 hover:border-saffron/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition group-hover:bg-saffron">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">From first meeting to first loan</h2>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="font-display text-5xl font-extrabold text-leaf/30">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Beware */}
      <section className="container-site pb-16">
        <div className="flex flex-col gap-3 rounded-2xl border border-saffron/30 bg-saffron-light/50 p-6 sm:flex-row sm:items-center sm:gap-6">
          <p className="shrink-0 font-display text-lg font-bold text-saffron-dark">Beware of fraud</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            We never ask for an advance fee, processing charge or OTP to sanction a loan, and our staff do not collect
            cash without issuing a receipt. Report any such request to us immediately.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
