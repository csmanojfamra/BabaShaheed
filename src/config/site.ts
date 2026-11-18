// Central place for all company details. Fields marked TODO still need
// confirmed values from the company before the site goes live.

export const site = {
  name: "Babashaheedmicro Federation",
  shortName: "Babashaheed",
  tagline: "Small loans. Big futures.",
  url: "https://www.babashaheedmicro.in",

  legalForm: "Section 8 (not-for-profit) company under the Companies Act, 2013",
  cin: "U88900RJ2026NPL117052",
  incorporated: "12 August 2026",
  roc: "RoC Jaipur",
  pan: "", // TODO (optional)
  category: "Private company limited by guarantee",
  registrations: [] as { label: string; value: string }[], // none held yet (no 12A / 80G)

  phone: "+91 75685 31416",
  whatsapp: "917568531416",
  email: "hello@babashaheedmicro.in",
  address: "Morija Road, By-pass Puliya ke paas, Chomu, Jaipur, Rajasthan 303702",
  hours: "Monday – Saturday, 10:00 AM – 5:30 PM", // TODO: confirm

  grievanceOfficer: { name: "", phone: "", email: "" }, // TODO

  directors: [
    { name: "Indra Kumar Sharma", role: "Director", din: "11887950" },
    { name: "Tinku Sharma", role: "Director", din: "11887951" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/programmes/", label: "Programmes" },
  { href: "/how-it-works/", label: "How it works" },
  { href: "/fair-practices/", label: "Fair practices" },
  { href: "/contact/", label: "Contact" },
];

export const legal = [
  { href: "/terms/", label: "Terms and conditions" },
  { href: "/privacy/", label: "Privacy policy" },
  { href: "/refund-cancellation/", label: "Refund and cancellation" },
  { href: "/shipping-delivery/", label: "Shipping and delivery" },
  { href: "/disclaimer/", label: "Disclaimer" },
];

export const pending = "To be updated";
