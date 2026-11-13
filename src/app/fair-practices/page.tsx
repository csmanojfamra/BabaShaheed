import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { pending, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Fair practices & grievance redressal",
  description:
    "Our fair practices commitments on pricing, disclosure, recovery conduct and data, and how to raise a grievance with Babashaheed Micro Federation.",
};

const commitments = [
  {
    title: "Clear pricing",
    body: "Interest is charged on a reducing-balance basis. The rate, every fee and the total cost of the loan are stated in writing before sanction. No charge is levied that is not disclosed.",
  },
  {
    title: "Your language",
    body: "Loan terms are explained orally and in writing in a language you understand. You receive a copy of the loan agreement and the repayment schedule.",
  },
  {
    title: "Responsible lending",
    body: "We assess household income and existing debt before lending, so that repayments stay within what the family can comfortably afford.",
  },
  {
    title: "No prepayment penalty",
    body: "You may repay your loan early, in part or in full, without any prepayment penalty.",
  },
  {
    title: "Respectful recovery",
    body: "Our staff will never use abusive language, threats or harassment, will not visit at unreasonable hours, and will not contact your family or neighbours to shame you.",
  },
  {
    title: "Data privacy",
    body: "Your personal and KYC information is used only for your loan and is never sold or shared except as required by law or with your consent.",
  },
];

export default function FairPracticesPage() {
  const g = site.grievanceOfficer;
  return (
    <>
      <PageHeader
        eyebrow="Fair practices"
        title="Our promise to every borrower"
        intro="As a not-for-profit lender, we hold ourselves to the highest standards of fairness and transparency. These commitments apply to every programme we run."
      />

      <section className="section">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <div key={c.title} className="card p-7">
              <span className="font-display text-sm font-bold text-saffron">0{i + 1}</span>
              <h2 className="mt-2 text-lg font-bold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="grievance" className="section scroll-mt-20 bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Grievance redressal</p>
            <h2 className="mt-3 text-3xl font-extrabold">Have a complaint? We want to hear it.</h2>
            <ol className="mt-6 space-y-5">
              <li>
                <p className="font-semibold text-navy">Level 1: Branch / field officer</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Raise your concern with your field officer or at our office, in person, by phone or in writing. We aim
                  to resolve it within 7 working days.
                </p>
              </li>
              <li>
                <p className="font-semibold text-navy">Level 2: Grievance Redressal Officer</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  If you are not satisfied, write to our Grievance Redressal Officer. You will receive an acknowledgement
                  and a written response within 15 working days.
                </p>
              </li>
              <li>
                <p className="font-semibold text-navy">Level 3: Board of Directors</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Unresolved complaints may be escalated in writing to the Board at our registered office.
                </p>
              </li>
            </ol>
          </div>
          <div className="card self-start border-t-4 border-t-saffron p-8">
            <p className="eyebrow">Grievance Redressal Officer</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-ink-muted">Name</dt>
                <dd className="font-semibold text-navy">{g.name || pending}</dd>
              </div>
              <div>
                <dt className="text-ink-muted">Phone</dt>
                <dd className="font-semibold text-navy">{g.phone || site.phone || pending}</dd>
              </div>
              <div>
                <dt className="text-ink-muted">Email</dt>
                <dd className="font-semibold text-navy">{g.email || site.email || pending}</dd>
              </div>
              <div>
                <dt className="text-ink-muted">Address</dt>
                <dd className="font-semibold text-navy">{site.address || pending}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
