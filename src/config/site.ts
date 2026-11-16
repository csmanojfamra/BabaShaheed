// Central place for all company details. Fields marked TODO still need
// confirmed values from the company before the site goes live.

export const site = {
  name: "Babashaheedmicro Federation",
  shortName: "Babashaheed",
  tagline: "Small loans. Big futures.",
  url: "https://www.babashaheedmicrofederation.org", // TODO: confirm domain

  legalForm: "Section 8 (not-for-profit) company under the Companies Act, 2013",
  cin: "U88900RJ2026NPL117052",
  incorporated: "12 August 2026",
  roc: "RoC Jaipur",
  pan: "", // TODO (optional)
  category: "Private company limited by guarantee",
  registrations: [] as { label: string; value: string }[], // none held yet (no 12A / 80G)

  phone: "", // TODO: e.g. +91 98xxxxxxxx
  whatsapp: "", // TODO: digits only with country code, e.g. 9198xxxxxxxx
  email: "bsmicrofederation@gmail.com",
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

export const pending = "To be updated";
