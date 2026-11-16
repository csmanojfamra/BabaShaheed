import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { pending, site } from "@/config/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" />
      <section className="section">
        <div className="container-site prose-legal max-w-3xl">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), CIN {site.cin}, respects your privacy. This policy explains how we collect,
            use and protect personal information, in line with the Digital Personal Data Protection Act, 2023 and other
            applicable law.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Details you share through our enquiry form: name, mobile number, location and message.</li>
            <li>KYC and household information collected by our field officers when you apply for a loan, with your consent.</li>
            <li>Loan and repayment records maintained as required by law.</li>
            <li>
              Transaction details of payments made online, such as amount, date, transaction reference and payment
              status, received from our payment gateway partner.
            </li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and assess your loan application.</li>
            <li>To administer loans, issue receipts and communicate with you.</li>
            <li>To meet legal, regulatory and audit requirements.</li>
          </ul>
          <h2>Online payments</h2>
          <p>
            Online payments are processed by our payment gateway partner, Cashfree Payments, on its secure platform.
            Your card details, UPI PIN, net-banking password and similar credentials are entered directly with the
            gateway and are never seen or stored by us. The gateway&apos;s own privacy policy applies to the information
            you give it.
          </p>
          <h2>Security</h2>
          <p>
            We protect your information with reasonable physical, technical and administrative safeguards, and allow
            access only to staff who need it for their work.
          </p>
          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We share it only with credit information companies, banks, our
            payment gateway partner and other service providers where necessary to provide our services, or when required by law.
          </p>
          <h2>Website</h2>
          <p>
            This website does not use advertising or tracking cookies. When you submit the enquiry form, your message is
            sent through WhatsApp or email, and those services&apos; own privacy policies apply.
          </p>
          <h2>Your rights</h2>
          <p>
            You may ask to access, correct or delete your personal information, or withdraw consent, by writing to{" "}
            {site.email || pending}. Some records must be retained for the period required by law.
          </p>
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
