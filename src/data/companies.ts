export interface Company {
  id: string;
  name: string;
  shortName: string;
  description: string;
  fullDescription: string;
  industry: string;
  established?: string;
  website?: string;
  features: string[];
}

export const companies: Company[] = [
  {
    id: "supun-traders",
    name: "Supun Traders & Distributors (Pvt) Ltd",
    shortName: "Supun Traders",
    description: "Pioneering retailer and wholesaler of household goods, home appliances, and electronics.",
    fullDescription: "SUPUN TRADERS is considered to be the birth of today's gigantic business brand 'SUPUN GROUP.' Established by the co-founders (late Mr. Mohomed and Mrs. Doole), it has been in operation for over two decades as a renowned retailer and wholesaler of imported and locally manufactured household goods, home appliances, and electronics.",
    industry: "Retail & Distribution",
    established: "1999",
    features: [
      "Wide range of household goods and appliances",
      "Over 20 years of industry experience",
      "Strong supplier relationships",
      "Island-wide distribution network"
    ]
  },
  {
    id: "aero-star",
    name: "Aero Star (Pvt) Ltd",
    shortName: "Aero Star",
    description: "Leading manufacturer of chrome and chrome-plated products for local and international markets.",
    fullDescription: "Aero Star is pioneering in manufacturing and supplying of chrome and chrome-plated products to the local and international markets. With state-of-the-art manufacturing facilities and stringent quality control measures, we deliver products that meet international standards.",
    industry: "Manufacturing",
    features: [
      "Advanced chrome plating technology",
      "Export-oriented production",
      "ISO quality standards",
      "Custom manufacturing capabilities"
    ]
  },
  {
    id: "supun-arcade",
    name: "Supun Arcade Residency (Pvt) Ltd",
    shortName: "Supun Arcade",
    description: "Luxury city apartment hotel in the heart of Colombo with modern amenities.",
    fullDescription: "SUPUN ARCADE RESIDENCY is a luxury city apartment hotel located in the heart of Colombo offering all modern luxury. Fully air-conditioned apartments provide a panoramic ocean view, or a dynamic city view to make the stay memorable. The 40-suite complex is equipped with all the amenities the discerning traveler is looking for today.",
    industry: "Hospitality",
    features: [
      "40 luxury suites",
      "Ocean and city views",
      "Prime Colombo location",
      "Modern amenities and services",
      "Fully air-conditioned"
    ]
  },
  {
    id: "camy-smart",
    name: "Camy Smart (Pvt) Ltd",
    shortName: "Camy Smart",
    description: "Sri Lanka's leading motorcycle helmet manufacturer with over 250 island-wide distributors.",
    fullDescription: "Specialized in manufacturing motorcycle riding helmets to meet local and international safety standards and comfort for the riders, utilizing the latest technology and manufacturing methodologies under strict quality control measures. CAMY SMART branded helmets have gained market acceptance year on year and today it is one of the largest riding helmet manufacturers in Sri Lanka with over 250 distributors island-wide.",
    industry: "Manufacturing",
    features: [
      "International safety standards",
      "250+ distributors island-wide",
      "Latest manufacturing technology",
      "Strict quality control",
      "Market leader in Sri Lanka"
    ]
  },
  {
    id: "new-camy-smart",
    name: "New Camy Smart (Pvt) Ltd",
    shortName: "New Camy Smart",
    description: "Premier manufacturer of non-stick cookware with Korean technology collaboration.",
    fullDescription: "The undisputed leader in the manufacturing of non-stick cookware locally, with the technology adaptation and supervision of Korea. It uses highly purified Aluminum as the base material of its non-stick cookware products, ensuring superior quality and durability.",
    industry: "Manufacturing",
    features: [
      "Korean technology transfer",
      "Highly purified aluminum base",
      "Non-stick coating expertise",
      "Market leader in Sri Lanka",
      "Export quality products"
    ]
  },
  {
    id: "supun-super-centre",
    name: "Supun Super Centre (Pvt) Ltd",
    shortName: "Supun Super Centre",
    description: "Modern retail center with online platform serving customers worldwide.",
    fullDescription: "Strategically located in the heart of Colombo with ample parking provides with an ultimate shopping experience to its customers from products ranging from household utilities to electronics and fragrances. The company focuses equally on developing the right balance in providing the best product to its customer, in terms of price and quality. The latest innovation to super center is the launch of our online platform www.anythingatsupun.lk, customers from anywhere around the world can order/gift our products to anywhere in Sri Lanka.",
    industry: "Retail",
    website: "www.anythingatsupun.lk",
    features: [
      "Prime Colombo location",
      "Wide product range",
      "Online shopping platform",
      "Worldwide ordering capability",
      "Ample parking facilities"
    ]
  },
  {
    id: "supun-aerosoft",
    name: "Supun Aerosoft (Pvt) Ltd",
    shortName: "Aerosoft",
    description: "Innovative PU (Polyurethane) product manufacturer serving top corporates and international brands.",
    fullDescription: "AEROSOFT is pioneering the manufacturing and supplying of products using PU (Polyurethane) for top corporates in Sri Lanka including international brands such as BATA. PU is closely associated with human wants, by bridging the gap between rubber and plastic on hardness. It also has excellent abrasion resistance and has outperformed ordinary rubber and plastic.",
    industry: "Manufacturing",
    features: [
      "Polyurethane expertise",
      "Partnership with BATA and other international brands",
      "Advanced material technology",
      "Superior abrasion resistance",
      "Custom PU solutions"
    ]
  },
  {
    id: "supun-super-mart",
    name: "Supun Super Mart (Pvt) Ltd",
    shortName: "Supun Super Mart",
    description: "Modern grocery retail chain with convenient online shopping facilities.",
    fullDescription: "This is one of Supun's latest novel retail ventures primarily located right below Supun Arcade residency with the hopes of extending its branches across the island. Supun supermart is yet another excellently planned production contributing to the outstanding success of the Supun group of companies. Taking on a completely different direction in the business, this super convenient, efficient and largely accessible one-stop grocery shopping experience features a wide range of all your grocery needs with popular online facilities.",
    industry: "Retail",
    features: [
      "Modern grocery retail",
      "Online shopping platform",
      "One-stop shopping experience",
      "Expansion plans island-wide",
      "Convenient location"
    ]
  },
  {
    id: "kewr-technologies",
    name: "Kewr Technologies (Pvt) Ltd",
    shortName: "Kewr Technologies",
    description: "Sri Lanka's first technology house for automobile and component research and design.",
    fullDescription: "Sri Lanka's 1st technology house, with direct emphasis on automobile and automobile component research and design as an independent Design House. KEWR Technologies is headed by world-class designers and manufacturing engineers with technology transfer programs with Siemens, CARBENCH and other internationally acclaimed institutions for design, prototyping, simulation and verification process to provide a concept to mass-produce automobiles as per client/market requirement with conformity to standards of the local and international regulators.",
    industry: "Technology & Design",
    website: "www.kewrtech.com",
    features: [
      "World-class design team",
      "Technology partnerships with Siemens & CARBENCH",
      "Complete design to production capability",
      "International standards compliance",
      "Advanced CAD and simulation tools"
    ]
  },
  {
    id: "ksk-industries",
    name: "KSK Industries (Pvt) Ltd",
    shortName: "KSK Industries",
    description: "Diversified manufacturer of automobile parts and bathroom accessories using advanced technologies.",
    fullDescription: "Specializes using Poly urethane/Plastic injection molding, Steel press, and Fiber glass technologies, in design and manufacture of Automobile seats, body parts/panels, lights and interior accessories, Bathroom accessories and fittings. With cutting-edge manufacturing capabilities and a commitment to quality, KSK Industries serves both automotive and construction industries.",
    industry: "Manufacturing",
    features: [
      "Multiple manufacturing technologies",
      "Automobile component expertise",
      "Bathroom accessories production",
      "Injection molding capabilities",
      "Steel press and fiberglass expertise"
    ]
  }
];
