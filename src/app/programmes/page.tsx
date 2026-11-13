import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import { programmes } from "@/config/programmes";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Self-help group loans, joint liability group loans, micro-enterprise, agri-livelihood and household loans, plus free financial literacy training.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Credit and support for every stage of a livelihood"
        intro="Our loans are small, collateral-free and designed around how our borrowers actually earn. Loan amounts, tenure and all charges are explained in writing before sanction."
      />

      <section className="section">
        <div className="container-site grid gap-6">
          {programmes.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="card scroll-mt-24 grid gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr_1fr] md:items-start"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${
                  i % 3 === 0 ? "bg-navy" : i % 3 === 1 ? "bg-saffron" : "bg-leaf"
                }`}
              >
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.summary}</p>
              </div>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="container-site mt-8 text-sm text-ink-muted">
          Not sure which programme fits?{" "}
          <Link href="/contact/#apply" className="font-semibold text-navy underline underline-offset-4">
            Send us an enquiry
          </Link>{" "}
          and a field officer will guide you.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
