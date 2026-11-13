import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "How it works",
  description: "Eligibility, documents required and the step-by-step loan process at Babashaheed Micro Federation.",
};

const steps = [
  { title: "Enquiry", body: "Call us, send a WhatsApp message or fill in the enquiry form. A field officer will contact you." },
  { title: "Group formation", body: "Form a group with people from your area, or join an existing self-help or joint liability group." },
  { title: "Orientation", body: "Attend a short training on how the loan works, your rights, and responsible borrowing." },
  { title: "Verification", body: "Our officer visits your home or business, collects KYC documents and checks your existing loans." },
  { title: "Sanction & disclosure", body: "You receive a written sanction with the amount, all charges and the full repayment schedule." },
  { title: "Disbursement", body: "The loan is credited directly to your own bank account. We do not disburse in cash." },
  { title: "Repayment", body: "Repay in fixed instalments at group meetings or digitally. Every payment is receipted." },
];

const eligibility = [
  "Indian resident aged 18–60 years",
  "Member of, or willing to join, a self-help or joint liability group",
  "Engaged in, or planning, an income-generating activity",
  "Household income within the limits set for our programmes",
  "Not more than the permitted number of existing microfinance lenders",
];

const documents = [
  "Aadhaar card (with consent for e-KYC)",
  "Voter ID, PAN card or another officially valid document",
  "Bank passbook or cancelled cheque in the applicant's name",
  "Two recent passport-size photographs",
  "Proof of address, if different from Aadhaar",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A simple, transparent process"
        intro="We keep paperwork light and explain everything in person. Here is what to expect from your first enquiry to your final instalment."
      />

      <section className="section">
        <div className="container-site">
          <ol className="relative grid gap-6 border-l-2 border-dashed border-navy/15 pl-8 sm:pl-10">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-4 ring-cream sm:-left-[3.55rem]">
                  {i + 1}
                </span>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-1 max-w-2xl leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl font-extrabold">Who can apply</h2>
            <ul className="mt-5 space-y-3">
              {eligibility.map((e) => (
                <li key={e} className="flex gap-3 text-ink-soft">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-leaf" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-extrabold">Documents required</h2>
            <ul className="mt-5 space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex gap-3 text-ink-soft">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-saffron" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-muted">
              Final eligibility and documents may vary by programme. Your field officer will confirm.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
