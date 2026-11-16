import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { pending, site } from "@/config/site";

export const metadata: Metadata = { title: "Shipping and delivery policy" };

export default function ShippingPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Shipping and delivery policy" />
      <section className="section">
        <div className="container-site prose-legal max-w-3xl">
          <p>
            {site.name} provides financial services only. We do not sell or ship any physical goods, so no shipping
            charges apply.
          </p>

          <h2>How our services are delivered</h2>
          <ul>
            <li>
              <strong>Loans</strong> are disbursed directly to the borrower&apos;s own bank account after sanction and
              signing of the loan agreement, normally within 7 working days of sanction.
            </li>
            <li>
              <strong>Payment receipts</strong> for amounts paid online are sent to your registered mobile number or
              email, normally immediately and in any case within 24 hours of the payment being credited.
            </li>
            <li>
              <strong>Loan documents</strong>, such as the sanction letter, loan agreement and repayment schedule, are
              handed over in person by our field officer or sent by email or WhatsApp.
            </li>
            <li>
              <strong>Financial literacy training</strong> is delivered in person at village and group meetings on the
              dates communicated to participants.
            </li>
          </ul>

          <h2>Service area</h2>
          <p>
            We currently serve Chomu and nearby areas of Jaipur district, Rajasthan. Please contact us to check whether
            we work in your area.
          </p>

          <h2>Delays</h2>
          <p>
            If you have not received a disbursement or receipt within the timelines above, please write to {site.email}{" "}
            with your details and we will resolve it promptly.
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
