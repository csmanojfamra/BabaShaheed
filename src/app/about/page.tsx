import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { pending, site } from "@/config/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Babashaheedmicro Federation, a not-for-profit Section 8 company working for the financial inclusion of low-income households.",
};

const values = [
  { title: "Dignity", body: "We treat every borrower as a partner, never as a number. Courteous conduct is non-negotiable." },
  { title: "Transparency", body: "Every charge is disclosed in writing up front, in a language the borrower understands." },
  { title: "Responsibility", body: "We lend only what a household can comfortably repay, and check existing debt before we do." },
  { title: "Community", body: "Groups, not paperwork, are our strength. Peer support builds both repayment and confidence." },
];

export default function AboutPage() {
  const facts = [
    { label: "Legal form", value: site.legalForm },
    { label: "Category", value: site.category },
    { label: "Corporate Identity Number (CIN)", value: site.cin || pending },
    { label: "Date of incorporation", value: site.incorporated || pending },
    { label: "Registrar of Companies", value: site.roc || pending },
    ...site.registrations.map((r) => ({ label: r.label, value: r.value })),
    { label: "Registered office", value: site.address || pending },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A federation built on trust, for families who deserve a fair chance"
        intro="Babashaheedmicro Federation is a not-for-profit company registered under Section 8 of the Companies Act, 2013. We exist to make small, fair and responsible credit available to people that mainstream banking often leaves out."
      />

      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="card p-8">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              To promote financial inclusion and sustainable livelihoods among women, small entrepreneurs, farmers and
              rural households, through microcredit, savings habits and financial education.
            </p>
          </div>
          <div className="card p-8">
            <p className="eyebrow text-leaf-dark">Our vision</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Self-reliant communities where every family can access fair credit, plan its finances with confidence and
              build a secure future.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Why Section 8</p>
            <h2 className="mt-3 text-3xl font-extrabold">Purpose over profit, by law</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              A Section 8 company is licensed by the Central Government to pursue charitable objects. Its income and
              surplus must be applied only to those objects. No dividend can be paid to members. For our borrowers,
              this means pricing is set to cover costs and sustain the programme, not to maximise returns.
            </p>
          </div>
          <dl className="card divide-y divide-navy/10">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr]">
                <dt className="text-sm font-medium text-ink-muted">{f.label}</dt>
                <dd className="text-sm font-semibold text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Our values</p>
          <h2 className="mt-3 text-3xl font-extrabold">What guides our work</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card border-t-4 border-t-leaf p-6">
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {site.directors.length > 0 && (
        <section className="section bg-white">
          <div className="container-site">
            <p className="eyebrow">Governance</p>
            <h2 className="mt-3 text-3xl font-extrabold">Board of Directors</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.directors.map((d) => (
                <div key={d.din} className="card p-6">
                  <p className="text-lg font-bold text-navy">{d.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{d.role}</p>
                  <p className="mt-3 text-xs text-ink-muted">DIN: {d.din}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
