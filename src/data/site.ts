// Single source of truth for site-wide structured data.
// Edit nav links, footer links, and contact details here.

export const site = {
  name: "ConcertIM",
  legalName: "ConcertIM Limited",
  // Used for the mailto contact link and the footer.
  email: "hello@concertim.com",
  tagline: "HPC & AI services, on your terms",
  description:
    "ConcertIM delivers HPC & AI services as a subscription. You decide how much we run and how much you run.",
  url: "https://concertim.com",
  registeredOffice: ["4 Murdock Road", "Bicester", "Oxfordshire", "OX26 4PP"],
  companyNumber: "10095215 (England and Wales)",
} as const;

export const nav = [
  { label: "Offerings", href: "/offerings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  site: [
    { label: "Offerings", href: "/offerings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
} as const;

export type Nav = (typeof nav)[number];