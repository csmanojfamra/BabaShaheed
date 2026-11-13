import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import { pending, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & apply",
  description: "Contact Babashaheed Micro Federation or send a loan enquiry. A field officer will get in touch.",
};

export default function ContactPage() {
  const rows = [
    { icon: "pin" as const, label: "Registered office", value: site.address || pending },
    {
      icon: "phone" as const,
      label: "Phone",
      value: site.phone || pending,
      href: site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : undefined,
    },
    {
      icon: "whatsapp" as const,
      label: "WhatsApp",
      value: site.whatsapp ? `+${site.whatsapp}` : pending,
      href: site.whatsapp ? `https://wa.me/${site.whatsapp}` : undefined,
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: site.email || pending,
      href: site.email ? `mailto:${site.email}` : undefined,
    },
    { icon: "clock" as const, label: "Office hours", value: site.hours },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        intro="Whether you want to apply for a loan, start a group in your village or partner with us, we would love to hear from you."
      />

      <section id="apply" className="section scroll-mt-16">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold">Get in touch</h2>
            <ul className="mt-6 space-y-5">
              {rows.map((r) => (
                <li key={r.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-ink-muted">{r.label}</p>
                    {r.href ? (
                      <a href={r.href} className="font-semibold text-navy hover:text-saffron-dark">
                        {r.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-navy">{r.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">Send an enquiry</h2>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
