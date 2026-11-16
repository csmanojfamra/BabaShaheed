import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { pending, site } from "@/config/site";

export const metadata: Metadata = { title: "Refund and cancellation policy" };

export default function RefundPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Refund and cancellation policy" />
      <section className="section">
        <div className="container-site prose-legal max-w-3xl">
          <p>
            This policy applies to payments made to {site.name} through this website, our payment links or our payment
            gateway partner (Cashfree Payments).
          </p>

          <h2>Loan application</h2>
          <ul>
            <li>We do not charge any fee to apply for a loan.</li>
            <li>
              You may withdraw your loan application at any time before disbursement, free of charge, by informing your
              field officer or writing to {site.email}.
            </li>
            <li>
              If a processing charge disclosed in your sanction letter has been collected and the loan is then not
              disbursed, for any reason, the charge is refunded in full.
            </li>
          </ul>

          <h2>Cancelling a loan after disbursement</h2>
          <p>
            You may close your loan at any time by repaying the outstanding principal and interest accrued up to the
            date of repayment. No prepayment or foreclosure penalty is charged.
          </p>

          <h2>Loan instalments (EMIs)</h2>
          <ul>
            <li>
              An instalment, once credited to your loan account, reduces your outstanding loan and cannot be refunded.
            </li>
            <li>
              If you pay more than the amount due, the excess is, at your choice, either adjusted against your next
              instalments or refunded to you.
            </li>
            <li>
              If the same instalment is paid twice by mistake, the duplicate payment is refunded once it is verified.
            </li>
          </ul>

          <h2>Failed or pending transactions</h2>
          <p>
            If money is debited from your account but the payment fails or is not received by us, the amount is normally
            reversed to your account automatically by your bank or the payment gateway within 5–7 working days. If it is
            not, contact us with the transaction reference and we will follow it up.
          </p>

          <h2>Contributions</h2>
          <p>
            Voluntary contributions are applied to our charitable objects and are not refundable, except where an amount
            was paid in error and we are informed within 7 days. We do not currently hold registration under Section 12A
            or 80G of the Income-tax Act, 1961, so contributions are not eligible for a tax deduction.
          </p>

          <h2>How to request a refund</h2>
          <p>
            Write to {site.email}
            {site.phone ? ` or call ${site.phone}` : ""} with your name, loan account number (if any), the amount, date
            and transaction reference. We will acknowledge your request within 2 working days.
          </p>

          <h2>Refund timelines</h2>
          <p>
            Approved refunds are processed within 7 working days of approval and credited to the original payment
            method or bank account used for the payment. Your bank may take a few further days to show the credit.
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
