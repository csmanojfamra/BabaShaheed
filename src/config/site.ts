// Central place for all company details. Fields marked TODO still need
// confirmed values from the company before the site goes live.

export const site = {
  name: "Babashaheed Micro Federation",
  shortName: "Babashaheed",
  tagline: "Small loans. Big futures.",
  url: "https://www.babashaheedmicrofederation.org", // TODO: confirm domain

  legalForm: "Section 8 (not-for-profit) company under the Companies Act, 2013",
  cin: "", // TODO
  incorporated: "", // TODO: e.g. 12 March 2024
  roc: "", // TODO: e.g. RoC Delhi
  pan: "", // TODO (optional)
  registrations: [] as { label: string; value: string }[], // TODO: 12A / 80G / NGO Darpan if held

  phone: "", // TODO: e.g. +91 98xxxxxxxx
  whatsapp: "", // TODO: digits only with country code, e.g. 9198xxxxxxxx
  email: "", // TODO
  address: "", // TODO: registered office address
  hours: "Monday – Saturday, 10:00 AM – 5:30 PM", // TODO: confirm

  grievanceOfficer: { name: "", phone: "", email: "" }, // TODO

  directors: [] as { name: string; role: string; din: string }[], // TODO
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
