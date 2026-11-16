import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { pending, site } from "@/config/site";

export const metadata: Metadata = { title: "Terms and conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms and conditions" />
      <section className="section">
        <div className="container-site prose-legal max-w-3xl">
          <p>
            These terms govern your use of this website and any payment you make through it. The website is owned and
            operated by {site.name} (CIN {site.cin}), a {site.legalForm}, with its registered office at {site.address}.
            By using this website or making a payment, you agree to these terms.
          </p>

          <h2>About our services</h2>
          <p>
            We provide microfinance and related services to low-income households: small loans to individuals and to
            self-help and joint liability groups, and financial literacy training. Loans are offered only after
            eligibility checks, verification and approval. Information on this website is not an offer of credit.
          </p>

          <h2>Eligibility</h2>
          <p>
            You must be at least 18 years old and able to enter into a binding contract under Indian law to apply for a
            loan or make a payment on this website.
          </p>

          <h2>Loan terms</h2>
          <ul>
            <li>
              The loan amount, tenure, rate of interest, all charges and the repayment schedule are set out in the
              sanction letter and loan agreement given to each borrower. If there is any conflict, the loan agreement
              prevails over this website.
            </li>
            <li>Interest is calculated on a reducing-balance basis. No charge is levied that is not disclosed in writing.</li>
            <li>Borrowers may prepay a loan in part or in full at any time without a prepayment penalty.</li>
            <li>We do not accept deposits from the public.</li>
          </ul>

          <h2>Online payments</h2>
          <ul>
            <li>
              This website may be used to pay loan instalments (EMIs), charges stated in your loan agreement, or other
              amounts we have asked you to pay in writing.
            </li>
            <li>
              Payments are processed by our payment gateway partner (Cashfree Payments). We do not store your card,
              UPI PIN, net-banking password or other payment credentials.
            </li>
            <li>
              Please enter your loan account number, name and mobile number correctly. We are not responsible for
              delays caused by incorrect details, but will help you trace and correct any such payment.
            </li>
            <li>
              A payment is treated as received when the amount is credited to our bank account. A receipt is sent to
              your registered mobile number or email.
            </li>
            <li>
              Any refund, reversal or cancellation is handled under our{" "}
              <Link href="/refund-cancellation/">Refund and cancellation policy</Link>.
            </li>
          </ul>

          <h2>Your responsibilities</h2>
          <ul>
            <li>Provide true, complete and current information in any enquiry, application or payment.</li>
            <li>Do not use this website for any unlawful purpose or attempt to interfere with its working.</li>
            <li>
              Never share an OTP, PIN or password with anyone, including people claiming to represent us. Our staff will
              never ask for them.
            </li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            The name, logo and content of this website belong to {site.name}. They may not be copied or used without our
            written permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We take reasonable care to keep this website accurate and available, but do not guarantee it will be free
            of errors or interruptions. To the extent permitted by law, we are not liable for any indirect loss arising
            from use of the website. Nothing in these terms limits your rights under the loan agreement or applicable
            law.
          </p>

          <h2>Privacy</h2>
          <p>
            Our use of your personal information is described in our <Link href="/privacy/">Privacy policy</Link>.
          </p>

          <h2>Grievances</h2>
          <p>
            Complaints can be raised under our{" "}
            <Link href="/fair-practices/#grievance">grievance redressal process</Link> or by writing to {site.email}.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India. Courts at Jaipur, Rajasthan have exclusive jurisdiction over
            any dispute arising from them.
          </p>

          <h2>Changes</h2>
          <p>We may update these terms from time to time. The version on this page is the one in force.</p>

          <h2>Contact</h2>
          <p>
            {site.name}, {site.address}. Email: {site.email}. Phone: {site.phone || pending}.
          </p>
          <p className="mt-8 text-sm text-ink-muted">Last updated: November 2026</p>
        </div>
      </section>
    </>
  );
}
