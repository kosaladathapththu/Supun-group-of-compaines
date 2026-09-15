export type CompanySector = "Manufacturing" | "Retail & Distribution" | "Hospitality";

export interface Company {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  fullDescription: string;
  industry: CompanySector;
  established?: string;
  website?: string;
  features: string[];
  phone?: string;
  email?: string;
  location?: string;
  awards?: string[];
}

export const companies: Company[] = [
  {
    id: "supun-traders",
    name: "Supun Traders & Distributors (Pvt) Ltd",
    shortName: "Supun Traders",
    tagline: "Where the Group Began",
    description: "The Group's original wholesale and retail business, trusted since 1978.",
    fullDescription:
      "Supun Traders is where it all started. Founded in 1978 by Mohamed Fareed, it began as a trading business importing and distributing household goods, and grew into the foundation the Group stands on today. In 1999, his son, current Chairman Mr. Kaleel, took on that legacy and built it into what is now the Supun Group of Companies. Today, Supun Traders remains a trusted wholesaler and retailer of imported and locally manufactured household goods, home appliances, and electronics.",
    industry: "Retail & Distribution",
    established: "1978",
    features: [
      "Founded in 1978, the original Supun business",
      "Strong, long-standing supplier relationships",
      "Island-wide wholesale distribution network",
      "Wide range of household goods, appliances and electronics",
    ],
    phone: "0112 433 784",
    location: "2nd Cross Street, Colombo 11",
  },
  {
    id: "supun-super-center",
    name: "Supun Super Centre (Pvt) Ltd",
    shortName: "Supun Super Center",
    tagline: "Colombo's Retail Destination",
    description: "Colombo's one-stop retail destination.",
    fullDescription:
      "Supun Super Center brings together a wide product range under one roof in the heart of Colombo. The company focuses on the right balance of price and quality for every customer. Its newest chapter is digital: Anythingatsupun.lk, the Group's online marketplace, lets customers anywhere in the world order or gift products to anywhere in Sri Lanka.",
    industry: "Retail & Distribution",
    established: "2003",
    website: "https://www.anythingatsupun.lk/",
    features: [
      "Wide product range",
      "Multi-brand retail",
      "Online ordering and gifting via Anythingatsupun.lk",
    ],
    phone: "0112 504 920",
    location: "16 R.A. De Mel Mawatha, Colombo 00500",
  },
  {
    id: "supun-arcade-residency",
    name: "Supun Arcade Residency (Pvt) Ltd",
    shortName: "Supun Arcade Residency",
    tagline: "Luxury Serviced Living in Colombo",
    description: "Luxury serviced apartments in central Colombo.",
    fullDescription:
      "Supun Arcade Residency offers fully furnished, air-conditioned suites in central Colombo, with panoramic ocean or city views. Guests enjoy a rooftop pool and premium hospitality throughout the property.",
    industry: "Hospitality",
    established: "2010",
    website: "https://www.supunarcaderesidency.com/",
    features: ["40 luxury suites across 8 floors", "Rooftop pool", "Premium hospitality"],
    phone: "0112 055 040",
    email: "reservations@supunarcaderesidency.com",
    location: "56 Galle Road, Colombo 00600",
    awards: ["Outstanding Hotel Partner Award — Booking.com"],
  },
  {
    id: "area-56",
    name: "Area 56 (Pvt) Ltd",
    shortName: "Area 56",
    tagline: "Rooftop Dining in the Heart of the City",
    description: "Rooftop dining atop Supun Arcade Residency.",
    fullDescription:
      "Area 56 is the rooftop restaurant atop Supun Arcade Residency, named for the property's own address at 56 Galle Road. It serves Asian and Western fusion cuisine with panoramic views over Colombo, open to both residency guests and outside diners.",
    industry: "Hospitality",
    established: "2010",
    features: [
      "Rooftop dining with panoramic Colombo views",
      "Asian and Western fusion cuisine",
      "Open to residency guests and the public",
    ],
    phone: "0112 055 040",
    location: "56 Galle Road, Colombo 00600",
  },
  {
    id: "supun-aerosoft",
    name: "Supun Aerosoft (Pvt) Ltd",
    shortName: "Supun Aerosoft (YMAC Smart)",
    tagline: "Sri Lanka's First PU Footwear Manufacturer",
    description: "Sri Lanka's first PU footwear manufacturer.",
    fullDescription:
      "Supun Aerosoft was the first to bring PU (Polyurethane) manufacturing technology to Sri Lanka's footwear industry. Producing sandals and shoes for men, women, and children under the YMAC Smart brand, Aerosoft combines local craftsmanship with modern manufacturing in our own factories. In 2025, YMAC Smart became the only Sri Lankan footwear brand featured at the Canton Fair, marking a new chapter of international recognition for the brand.",
    industry: "Manufacturing",
    established: "2011",
    features: [
      "Sri Lanka's first PU footwear manufacturer",
      "Sandals and shoes for men, women, and children",
      "Made in our own factories",
      "Only Sri Lankan brand featured at the 2025 Canton Fair",
    ],
    phone: "011 2436390 / 077 0038414",
    email: "supunaerosoft318@gmail.com",
    location: "Kotahena, Colombo 13",
  },
  {
    id: "aerostar-home-appliances",
    name: "Aerostar Home Appliances (Pvt) Ltd",
    shortName: "Aero Star",
    tagline: "Precision Chrome Plating for Camy Appliances",
    description: "Chrome plating for Sri Lanka's Camy appliances.",
    fullDescription:
      "Aero Star's chrome-plating expertise, built to local and international standards, feeds directly into the Camy wall clocks, mixer grinders, and water filters found in homes across Sri Lanka. It's precision manufacturing most customers never see, but touch every day.",
    industry: "Manufacturing",
    established: "2016",
    features: [
      "Chrome and chrome-plating manufacturing",
      "Manufactures Camy wall clocks, mixer grinders and water filters",
    ],
    phone: "034 2262430",
    email: "aerostarhome@gmail.com",
    awards: ["Made in Sri Lanka National Certification — Ministry of Industries & NEDA"],
  },
  {
    id: "camy-smart",
    name: "Camy Smart (Pvt) Ltd",
    shortName: "Camy Smart",
    tagline: "One of Sri Lanka's Largest Helmet Manufacturers",
    description: "One of Sri Lanka's largest SLS-certified helmet manufacturers.",
    fullDescription:
      "Every Camy Smart helmet leaving the factory is SLS certified, meeting Sri Lanka's official safety standard for motorcycle helmets. What started as a single factory is now one of the largest helmet manufacturers in the country, with a distribution network of more than 250 dealers reaching every corner of the island.",
    industry: "Manufacturing",
    established: "2017",
    features: [
      "SLS Certified: Sri Lanka's official safety standard",
      "250+ island-wide distributors",
      "One of Sri Lanka's largest helmet manufacturers",
    ],
    location: "Horana, Sri Lanka",
    awards: ["Made in Sri Lanka National Certification — Ministry of Industries & NEDA"],
  },
  {
    id: "rodsons",
    name: "Rodsons (Pvt) Ltd",
    shortName: "Rodsons",
    tagline: "The Plastic Moulding Behind Every Camy Product",
    description: "The plastic moulding behind every Camy product.",
    fullDescription:
      "Rodsons is the plastic moulding plant that makes the body parts the rest of the Camy manufacturing line depends on: the shells of Camy Smart helmets, the bodies of Camy wall clocks and mixer grinders, and components across the wider Camy product range.",
    industry: "Manufacturing",
    established: "2017",
    features: [
      "Plastic injection moulding and in-house tooling",
      "Supplies body parts across the full Camy product range",
    ],
  },
  {
    id: "new-camy-smart",
    name: "New Camy Smart (Pvt) Ltd",
    shortName: "New Camy Smart",
    tagline: "Non-Stick Cookware, Korean Technology",
    description: "Non-stick cookware, built with Korean technology.",
    fullDescription:
      "New Camy Smart manufactures Sri Lanka's leading non-stick cookware, built on highly purified aluminum and finished with ceramic and non-stick coating technology developed in partnership with Korean manufacturing experts.",
    industry: "Manufacturing",
    established: "2018",
    features: [
      "Non-stick and ceramic-coated cookware",
      "Korean technology collaboration",
      "Market-leading local cookware manufacturer",
    ],
    phone: "011 2418724",
  },
  {
    id: "fuji-industries",
    name: "Fuji Industries (Pvt) Ltd",
    shortName: "Fuji Industries",
    tagline: "Camy Air Conditioners and Fans",
    description: "Camy air conditioners and fans, made in Sri Lanka.",
    fullDescription:
      "The Group's newest venture, Fuji Industries produces Camy air conditioners and Camy fans for residential and commercial customers, made in Sri Lanka.",
    industry: "Manufacturing",
    established: "2023",
    features: [
      "Camy air conditioners, made in Sri Lanka",
      "Camy fans, made in Sri Lanka",
      "Residential and commercial cooling solutions",
    ],
    awards: ["VIP Award, 2024 TCL AC Global Partners Conference — TCL"],
  },
  {
    id: "camy-global",
    name: "Camy Global",
    shortName: "Camy Global",
    tagline: "Distributing Camy Across Sri Lanka",
    description: "Getting Camy products to every corner of the island.",
    fullDescription:
      "Camy Global is the distribution engine that gets Camy products, from helmets and cookware to clocks, appliances, air conditioners, and fans, from the factory floor to retail shelves island-wide.",
    industry: "Retail & Distribution",
    features: [
      "Islandwide distribution network",
      "Retail outlet and partner network",
      "Distributes the full range of Camy-branded products",
    ],
  },
];

export const companyById = (id?: string) => companies.find((company) => company.id === id);
