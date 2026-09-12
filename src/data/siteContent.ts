import type { CompanySector } from "./companies";

export const siteStats = [
  { value: "46+", label: "Years of Excellence" },
  { value: "11", label: "Subsidiary Companies" },
  { value: "300+", label: "Employees" },
  { value: "250+", label: "Island-Wide Distributors" },
];

export const sectorHighlights: Array<{
  title: string;
  sector: CompanySector | "The Camy Brand";
  description: string;
}> = [
  {
    title: "Manufacturing",
    sector: "Manufacturing",
    description:
      "Building Sri Lanka's own consumer durables, from SLS-certified motorcycle helmets to the country's first PU footwear, entirely in our own factories.",
  },
  {
    title: "Retail & Distribution",
    sector: "Retail & Distribution",
    description:
      "Connecting Sri Lankan households to trusted products, from Supun Traders' wholesale roots to Supun Super Center's retail network across the island.",
  },
  {
    title: "Hospitality & Dining",
    sector: "Hospitality",
    description:
      "Delivering luxury serviced living and first-class rooftop dining in central Colombo, at Supun Arcade Residency and Area 56.",
  },
  {
    title: "The Camy Brand",
    sector: "The Camy Brand",
    description:
      "Manufacturing Sri Lanka's own consumer durables brand, from motorcycle helmets to home appliances, all designed and built in-house.",
  },
];

export const leadership = [
  { name: "Rizna Kaleel", title: "Non-Executive Director", description: "—" },
  { name: "Khalid Kaleel", title: "Director", description: "Oversees Fuji Industries" },
  { name: "Raiza Kaleel", title: "Director", description: "Oversees Camy brands and Group marketing" },
  {
    name: "Lasitha Samarasinghe",
    title: "Group Chief Financial Officer",
    description: "Oversees financial strategy, treasury, compliance, and financial governance across all Supun Group companies",
  },
  {
    name: "Mohamed Riaz Farouk",
    title: "Group Chief Executive Officer",
    description: "Oversees overall operations and performance across Rodsons, Aero Star, Camy Smart, and New Camy Smart",
  },
  {
    name: "Jeewantha Perera",
    title: "General Manager, Supun Arcade Residency & Area 56",
    description: "Hospitality executive with expertise in hotel operations, sales & marketing, business development, and strategic project management",
  },
  { name: "Eranga Rodrigo", title: "Director, Rodsons", description: "Oversees Rodsons" },
];

export const journey = [
  ["1978", "Mohamed Fareed founds Supun Traders, trading household goods, appliances and electronics"],
  ["1999", "Mr. Kaleel takes on the legacy and formally builds Supun Group of Companies"],
  ["2003", "Supun Super Center opens, expanding into modern multi-category retail"],
  ["2010", "Supun Arcade Residency opens, the Group's first step into hospitality, with Area 56 rooftop dining"],
  ["2011", "Supun Aerosoft founded, Sri Lanka's first PU footwear manufacturer"],
  ["2016", "Aero Star founded, bringing chrome plating and Camy-branded appliance manufacturing in-house"],
  ["2017", "Camy Smart and Rodsons founded, helmet manufacturing and the components that support it"],
  ["2018", "New Camy Smart founded, adding non-stick cookware manufacturing"],
  ["2023", "Fuji Industries founded, the Group's newest venture, manufacturing air conditioners and fans"],
  ["Today", "11 companies across manufacturing, retail, distribution, and hospitality, employing 300+ people"],
] as const;

export const coreValues = [
  { title: "Quality Excellence", description: "A consistent standard across every company, product, and service." },
  { title: "People First", description: "Building businesses that serve customers, employees, partners, and communities." },
  { title: "Innovation", description: "Using technology, new ideas, and manufacturing capability to keep moving forward." },
  {
    title: "Sri Lankan Pride",
    description: "Manufacturing locally, meeting international standards, and reinvesting in Sri Lankan industry and jobs.",
  },
];

export const awards = [
  { award: "Silver Sponsor, eIndustry 2024 International Industry Expo", awardedTo: "Supun Group of Companies", givenBy: "Industrial Development Board of Sri Lanka" },
  { award: "VIP Award, 2024 TCL AC Global Partners Conference", awardedTo: "Fuji Industries", givenBy: "TCL" },
  { award: "Outstanding Hotel Partner Award", awardedTo: "Supun Arcade Residency", givenBy: "Booking.com" },
  { award: "\"Made in Sri Lanka\" National Certification", awardedTo: "Camy Smart", givenBy: "Ministry of Industries & NEDA" },
  { award: "\"Made in Sri Lanka\" National Certification", awardedTo: "Aero Star (Aerostar Home Appliances)", givenBy: "Ministry of Industries & NEDA" },
];

export const camyProducts = [
  { name: "Motorcycle Helmets", madeBy: "Camy Smart", note: "SLS Certified" },
  { name: "Water Filters", madeBy: "Aero Star", note: "Made in Sri Lanka" },
  { name: "Mixer Grinders", madeBy: "Aero Star", note: "Made in Sri Lanka" },
  { name: "Non-Stick Cookware", madeBy: "New Camy Smart", note: "Made in Sri Lanka" },
  { name: "Air Conditioners", madeBy: "Fuji Industries", note: "Made in Sri Lanka" },
  { name: "Fans", madeBy: "Fuji Industries", note: "Made in Sri Lanka" },
  { name: "TVs", madeBy: "Fuji Industries", note: "Made in Sri Lanka" },
  { name: "Wall Clocks", madeBy: "Aero Star", note: "Made in Sri Lanka" },
  { name: "Electric Kettles", madeBy: "Group factories", note: "Made in Sri Lanka" },
  { name: "Gas Cookers", madeBy: "Group factories", note: "Made in Sri Lanka" },
];
