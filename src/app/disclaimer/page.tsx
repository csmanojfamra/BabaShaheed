import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Disclaimer" />
      <section className="section">
        <div className="container-site prose-legal max-w-3xl">
          <p>
            {site.name} is a not-for-profit company incorporated under Section 8 of the Companies Act, 2013. The
            information on this website is for general awareness only and does not constitute an offer of credit.
          </p>
          <h2>No public deposits</h2>
          <p>
            We do not accept deposits from the public. Any person or message claiming to collect deposits, savings or
            investments on our behalf is not authorised by us.
          </p>
          <h2>Loan terms</h2>
          <p>
            All loans are subject to eligibility, verification and approval. Loan amounts, tenure, interest rate and
            charges are communicated in writing before sanction and may differ from any general description on this
            website.
          </p>
          <h2>No agents or advance fees</h2>
          <p>
            We do not appoint agents who charge fees for arranging loans, and we never ask for any advance payment, OTP
            or bank PIN. Please report any such request to us.
          </p>
          <h2>External links</h2>
          <p>We are not responsible for the content of external websites linked from this site.</p>
        </div>
      </section>
    </>
  );
}
