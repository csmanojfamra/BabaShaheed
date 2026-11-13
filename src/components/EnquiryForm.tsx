"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { programmes } from "@/config/programmes";

const topics = [...programmes.map((p) => p.title), "Partnership / CSR", "Other"];

// The site is a static export, so the form hands the enquiry to WhatsApp
// (or email as a fallback) instead of posting to a server.
export default function EnquiryForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      `Enquiry for ${site.name}`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Village / Town: ${data.get("place")}`,
      `Interested in: ${data.get("topic")}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");

    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(text)}`;
    } else {
      setError("Online enquiries will be available soon. Please visit our office.");
    }
  }

  const field =
    "mt-1 w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-base outline-none transition focus:border-saffron focus:bg-white";

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Full name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Mobile number</label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="numeric"
            pattern="[0-9+\s]{10,14}"
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>
      <div>
        <label htmlFor="place" className="text-sm font-medium">Village / Town, District</label>
        <input id="place" name="place" required className={field} />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium">I&apos;m interested in</label>
        <select id="topic" name="topic" className={field}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message (optional)</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send enquiry
      </button>
      <p className="text-xs text-ink-muted">
        We never charge a fee to apply. We will use your details only to respond to this enquiry.
      </p>
      {error && <p className="text-sm text-saffron-dark" role="status">{error}</p>}
    </form>
  );
}
