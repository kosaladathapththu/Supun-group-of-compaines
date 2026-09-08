"use strict";

const companies = [
  {
    slug: "supun-traders", name: "Supun Traders", legal: "Supun Traders & Distributors (Pvt) Ltd", tagline: "Where the Group Began", sector: "retail", sectorLabel: "Wholesale & Retail", established: "1978", initials: "ST", accent: "#ffae39",
    teaser: "The Group's original wholesale and retail business, trusted since 1978.",
    description: "Supun Traders is where it all started. Founded in 1978 by Mohamed Fareed, it began as a trading business importing and distributing household goods, and grew into the foundation the Group stands on today. In 1999, his son, current Chairman Mr. Kaleel, took on that legacy and built it into what is now the Supun Group of Companies. Today, Supun Traders remains a trusted wholesaler and retailer of imported and locally manufactured household goods, home appliances, and electronics.",
    features: ["Founded 1978, the original Supun business", "Strong, long-standing supplier relationships", "Island-wide wholesale distribution network", "Wide range of household goods, appliances & electronics"],
    phone: "0112 433 784", email: "", location: "2nd Cross Street, Colombo 11"
  },
  {
    slug: "supun-super-center", name: "Supun Super Center", legal: "Supun Super Centre (Pvt) Ltd", tagline: "Colombo's Retail Destination", sector: "retail", sectorLabel: "Retail", established: "2003", initials: "SSC", accent: "#8ebfd3",
    teaser: "Colombo's one-stop retail destination.",
    description: "Supun Super Center brings together a wide product range under one roof in the heart of Colombo. The company focuses on the right balance of price and quality for every customer. Its newest chapter is digital: Anythingatsupun.lk, the Group's online marketplace, lets customers anywhere in the world order or gift products to anywhere in Sri Lanka.",
    features: ["Wide product range", "Multi-brand retail", "Online ordering & gifting via Anythingatsupun.lk"],
    phone: "0112 504 920", email: "", location: "16 R.A. De Mel Mawatha, Colombo 00500", website: "https://anythingatsupun.lk"
  },
  {
    slug: "supun-arcade-residency", name: "Supun Arcade Residency", legal: "Supun Arcade Residency (Pvt) Ltd", tagline: "Luxury Serviced Living in Colombo", sector: "hospitality", sectorLabel: "Hospitality", established: "2010", initials: "SAR", accent: "#a9d7c5",
    teaser: "Luxury serviced apartments in central Colombo.",
    description: "Supun Arcade Residency offers fully furnished, air-conditioned suites in central Colombo, with panoramic ocean or city views. Guests enjoy a rooftop pool and premium hospitality throughout the property.",
    features: ["40 luxury suites across 8 floors", "Rooftop pool", "Panoramic ocean or city views", "Premium hospitality"],
    phone: "0112 055 040", email: "reservations@supunarcaderesidency.com", location: "56 Galle Road, Colombo 00600", website: "https://www.supunarcaderesidency.com",
    award: "Outstanding Hotel Partner Award · Booking.com"
  },
  {
    slug: "area-56", name: "Area 56", legal: "Area 56 (Pvt) Ltd", tagline: "Rooftop Dining in the Heart of the City", sector: "hospitality", sectorLabel: "Hospitality", established: "2010", initials: "56", accent: "#ff6259",
    teaser: "Rooftop dining atop Supun Arcade Residency.",
    description: "Area 56 is the rooftop restaurant atop Supun Arcade Residency, named for the property's own address at 56 Galle Road. It serves Asian and Western fusion cuisine with panoramic views over Colombo, open to both residency guests and outside diners.",
    features: ["Rooftop dining with panoramic Colombo views", "Asian & Western fusion cuisine", "Open to residency guests and the public"],
    phone: "0112 055 040", email: "", location: "56 Galle Road, Colombo 00600"
  },
  {
    slug: "supun-aerosoft", name: "Supun Aerosoft", legal: "Supun Aerosoft (Pvt) Ltd · YMAC Smart", tagline: "Sri Lanka's First PU Footwear Manufacturer", sector: "manufacturing", sectorLabel: "Manufacturing · Footwear", established: "2011", initials: "YM", accent: "#ff6259",
    teaser: "Sri Lanka's first PU footwear manufacturer.",
    description: "Supun Aerosoft was the first to bring PU (Polyurethane) manufacturing technology to Sri Lanka's footwear industry. Producing sandals and shoes for men, women, and children under the YMAC Smart brand, Aerosoft combines local craftsmanship with modern manufacturing in our own factories. In 2025, YMAC Smart became the only Sri Lankan footwear brand featured at the Canton Fair, marking a new chapter of international recognition for the brand.",
    features: ["Sri Lanka's first PU footwear manufacturer", "Sandals & shoes for men, women, and children", "Made in our own factories", "Only Sri Lankan brand featured at the 2025 Canton Fair"],
    phone: "011 2436390 / 077 0038414", email: "supunaerosoft318@gmail.com", location: "Kotahena, Colombo 13"
  },
  {
    slug: "aerostar", name: "Aero Star", legal: "Aerostar Home Appliances (Pvt) Ltd", tagline: "Precision Chrome Plating for Camy Appliances", sector: "manufacturing", sectorLabel: "Manufacturing", established: "2016", initials: "AS", accent: "#8ebfd3",
    teaser: "Chrome plating for Sri Lanka's Camy appliances.",
    description: "Aero Star's chrome-plating expertise, built to local and international standards, feeds directly into the Camy wall clocks, mixer grinders, and water filters found in homes across Sri Lanka. It's precision manufacturing most customers never see, but touch every day.",
    features: ["Chrome & chrome-plating manufacturing", "Manufactures Camy wall clocks, mixer grinders & water filters"],
    phone: "034 2262430", email: "aerostarhome@gmail.com", location: "",
    award: "Made in Sri Lanka National Certification · Ministry of Industries & NEDA"
  },
  {
    slug: "camy-smart", name: "Camy Smart", legal: "Camy Smart (Pvt) Ltd", tagline: "One of Sri Lanka's Largest Helmet Manufacturers", sector: "manufacturing", sectorLabel: "Manufacturing", established: "2017", initials: "CS", accent: "#ffae39",
    teaser: "One of Sri Lanka's largest SLS-certified helmet manufacturers.",
    description: "Every Camy Smart helmet leaving the factory is SLS certified, meeting Sri Lanka's official safety standard for motorcycle helmets. What started as a single factory is now one of the largest helmet manufacturers in the country, with a distribution network of more than 250 dealers reaching every corner of the island.",
    features: ["SLS Certified: Sri Lanka's official safety standard", "250+ island-wide distributors", "One of Sri Lanka's largest helmet manufacturers"],
    phone: "", email: "", location: "Horana, Sri Lanka",
    award: "Made in Sri Lanka National Certification · Ministry of Industries & NEDA"
  },
  {
    slug: "rodsons", name: "Rodsons", legal: "Rodsons (Pvt) Ltd", tagline: "The Plastic Moulding Behind Every Camy Product", sector: "manufacturing", sectorLabel: "Manufacturing", established: "2017", initials: "RO", accent: "#a9d7c5",
    teaser: "The plastic moulding behind every Camy product.",
    description: "Rodsons is the plastic moulding plant that makes the body parts the rest of the Camy manufacturing line depends on: the shells of Camy Smart helmets, the bodies of Camy wall clocks and mixer grinders, and components across the wider Camy product range.",
    features: ["Plastic injection moulding & in-house tooling", "Supplies body parts across the full Camy product range"],
    phone: "", email: "", location: ""
  },
  {
    slug: "new-camy-smart", name: "New Camy Smart", legal: "New Camy Smart (Pvt) Ltd", tagline: "Non-Stick Cookware, Korean Technology", sector: "manufacturing", sectorLabel: "Manufacturing", established: "2018", initials: "NC", accent: "#ff6259",
    teaser: "Non-stick cookware, built with Korean technology.",
    description: "New Camy Smart manufactures Sri Lanka's leading non-stick cookware, built on highly purified aluminum and finished with ceramic and non-stick coating technology developed in partnership with Korean manufacturing experts.",
    features: ["Non-stick & ceramic-coated cookware", "Korean technology collaboration", "Market-leading local cookware manufacturer"],
    phone: "011 2418724", email: "", location: ""
  },
  {
    slug: "fuji-industries", name: "Fuji Industries", legal: "Fuji Industries (Pvt) Ltd", tagline: "Camy Air Conditioners and Fans", sector: "manufacturing", sectorLabel: "Manufacturing", established: "2023", initials: "FI", accent: "#8ebfd3",
    teaser: "Camy air conditioners and fans, made in Sri Lanka.",
    description: "The Group's newest venture, Fuji Industries produces Camy air conditioners and Camy fans for residential and commercial customers, made in Sri Lanka.",
    features: ["Camy air conditioners, made in Sri Lanka", "Camy fans, made in Sri Lanka", "Residential & commercial cooling solutions"],
    phone: "", email: "", location: "",
    award: "VIP Award · 2024 TCL AC Global Partners Conference"
  },
  {
    slug: "camy-global", name: "Camy Global", legal: "Camy Global", tagline: "Distributing Camy Across Sri Lanka", sector: "retail", sectorLabel: "Distribution", established: "—", initials: "CG", accent: "#ffae39",
    teaser: "Getting Camy products to every corner of the island.",
    description: "Camy Global is the distribution engine that gets Camy products, from helmets and cookware to clocks, appliances, air conditioners, and fans, from the factory floor to retail shelves island-wide.",
    features: ["Island-wide distribution network", "Retail outlet & partner network", "Distributes the full range of Camy-branded products"],
    phone: "", email: "", location: ""
  }
];

const timeline = [
  ["1978", "Mohamed Fareed founds Supun Traders, trading household goods, appliances and electronics.", "THE BEGINNING"],
  ["1999", "Mr. M.F.M. Kaleel takes on the legacy and formally builds Supun Group of Companies.", "A NEW ERA"],
  ["2003", "Supun Super Center opens, expanding into modern multi-category retail.", "RETAIL"],
  ["2010", "Supun Arcade Residency opens with Area 56 rooftop dining, marking the Group's first step into hospitality.", "HOSPITALITY"],
  ["2011", "Supun Aerosoft is founded as Sri Lanka's first PU footwear manufacturer.", "MANUFACTURING"],
  ["2016", "Aero Star brings chrome plating and Camy-branded appliance manufacturing in-house.", "MANUFACTURING"],
  ["2017", "Camy Smart and Rodsons launch helmet manufacturing and the components that support it.", "MANUFACTURING"],
  ["2018", "New Camy Smart adds non-stick cookware manufacturing with Korean technology.", "MANUFACTURING"],
  ["2023", "Fuji Industries begins manufacturing Camy air conditioners and fans.", "COOLING"],
  ["Today", "Eleven companies across manufacturing, retail, distribution and hospitality, employing 300+ people.", "FORWARD"],
];

const leaders = [
  ["Rizna Kaleel", "Non-Executive Director", "RK", ""],
  ["Khalid Kaleel", "Director", "KK", "Oversees Fuji Industries"],
  ["Raiza Kaleel", "Director", "RA", "Oversees Camy brands and Group marketing"],
  ["Lasitha Samarasinghe", "Group Chief Financial Officer", "LS", "Oversees financial strategy, treasury, compliance and governance"],
  ["Mohamed Riaz Farouk", "Group Chief Executive Officer", "MR", "Oversees operations and performance across the Group's manufacturing companies"],
  ["Jeewantha Perera", "General Manager · Supun Arcade & Area 56", "JP", "Leads hotel operations, sales, business development and strategic projects"],
  ["Eranga Rodrigo", "Director · Rodsons", "ER", "Oversees Rodsons"],
];

const awards = [
  ["2024", "Silver Sponsor · eIndustry 2024 International Industry Expo", "Supun Group of Companies", "Industrial Development Board of Sri Lanka"],
  ["2024", "VIP Award · TCL AC Global Partners Conference", "Fuji Industries", "TCL"],
  ["—", "Outstanding Hotel Partner Award", "Supun Arcade Residency", "Booking.com"],
  ["—", "Made in Sri Lanka National Certification", "Camy Smart", "Ministry of Industries & NEDA"],
  ["—", "Made in Sri Lanka National Certification", "Aero Star", "Ministry of Industries & NEDA"],
];

const products = [
  ["Motorcycle Helmets", "Camy Smart", "SLS Certified"], ["Water Filters", "Aero Star", "Made in Sri Lanka"],
  ["Mixer Grinders", "Aero Star", "Made in Sri Lanka"], ["Non-Stick Cookware", "New Camy Smart", "Made in Sri Lanka"],
  ["Air Conditioners", "Fuji Industries", "Made in Sri Lanka"], ["Fans", "Fuji Industries", "Made in Sri Lanka"],
  ["TVs", "Fuji Industries", "Made in Sri Lanka"], ["Wall Clocks", "Aero Star", "Made in Sri Lanka"],
  ["Electric Kettles", "Group factories", "Made in Sri Lanka"], ["Gas Cookers", "Group factories", "Made in Sri Lanka"]
];

const news = [
  ["Recognition · 2024", "Supun Group supports eIndustry 2024 International Industry Expo", "The Group joined as a Silver Sponsor, supporting Sri Lankan industry and local manufacturing.", "linear-gradient(145deg,#183847,#d2674a)"],
  ["Fuji Industries · 2024", "Fuji Industries recognised at TCL AC Global Partners Conference", "The Group's newest manufacturing venture received a VIP Award from TCL.", "linear-gradient(145deg,#d5943c,#704137)"],
  ["Manufacturing · Certification", "Camy businesses earn Made in Sri Lanka certification", "Camy Smart and Aero Star have received national recognition for proudly local manufacturing.", "linear-gradient(145deg,#38615f,#9ccfbb)"],
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const phoneHref = (phone) => phone ? phone.split("/")[0].replace(/[^+\d]/g, "") : "";

function renderContent() {
  $("#home-companies").innerHTML = companies.map((c) => `
    <a class="preview-company reveal" href="#company/${c.slug}" style="--accent:${c.accent}">
      <span class="company-monogram">${c.initials}</span><h3>${c.name}</h3><p>${c.teaser}</p><span>↗</span>
    </a>`).join("");

  $("#company-directory").innerHTML = companies.map((c) => `
    <article class="company-card reveal" data-sector="${c.sector}" style="--accent:${c.accent}">
      <div class="company-card-top"><span>${c.sectorLabel}</span><b class="company-monogram">${c.initials}</b></div>
      <h2>${c.name}</h2><p>${c.teaser}</p><a class="card-link" href="#company/${c.slug}">View company <span>↗</span></a>
    </article>`).join("");

  $("#timeline").innerHTML = timeline.map((item) => `<div class="timeline-row reveal"><strong>${item[0]}</strong><p>${item[1]}</p><span>${item[2]}</span></div>`).join("");

  $("#leadership-grid").innerHTML = leaders.map((l) => `
    <article class="leader-card reveal"><div class="leader-photo" data-initials="${l[2]}"><span class="media-label">Portrait photography</span></div><div class="leader-info"><h3>${l[0]}</h3><span>${l[1]}</span>${l[3] ? `<p>${l[3]}</p>` : ""}</div></article>`).join("");

  $("#awards-list").innerHTML = awards.map((a) => `<article class="award-row reveal"><b>${a[0]}</b><h3>${a[1]}</h3><p>${a[2]}</p><span>${a[3]}</span></article>`).join("");

  const groups = [
    ["Manufacturing", "#ff6259", companies.filter(c => c.sector === "manufacturing")],
    ["Retail & Distribution", "#ffae39", companies.filter(c => c.sector === "retail")],
    ["Hospitality", "#8ebfd3", companies.filter(c => c.sector === "hospitality")],
    ["The Camy Brand", "#a9d7c5", companies.filter(c => ["camy-smart","new-camy-smart","camy-global"].includes(c.slug))]
  ];
  $("#structure-map").innerHTML = `<div class="structure-root"><span>Parent Group</span><strong>Supun Group of Companies</strong></div><div class="structure-columns">${groups.map(g => `<div class="structure-pillar" style="--accent:${g[1]}"><h3>${g[0]}</h3>${g[2].map(c => `<a href="#company/${c.slug}">${c.name}</a>`).join("")}</div>`).join("")}</div>`;

  const productColors = ["#ffae39", "#a9d7c5", "#8ebfd3", "#ff8b77", "#b4ccd7"];
  $("#product-grid").innerHTML = products.map((p, i) => `
    <article class="product-card reveal"><div class="product-card-media" style="--product-bg:${productColors[i % productColors.length]}"><span class="product-index">${String(i + 1).padStart(2,"0")}</span><div class="product-shape"></div></div><div class="product-info"><span class="made-by">Made by ${p[1]}</span><h3>${p[0]}</h3><p>${p[2]}</p><a href="https://anythingatsupun.lk" target="_blank" rel="noopener">Shop product <span>↗</span></a></div></article>`).join("");

  $("#news-grid").innerHTML = news.map(n => `<article class="news-card reveal"><div class="news-card-media" style="--news-bg:${n[3]}"></div><span>${n[0]}</span><h3>${n[1]}</h3><p>${n[2]}</p></article>`).join("");

  const groupContact = { name: "Supun Group (Head Office)", phone: "+94 112 055 026", email: "info@supungroup.lk", location: "Colombo" };
  $("#contact-directory").innerHTML = [groupContact, ...companies].map((c) => `<article class="contact-row ${(!c.phone && !c.email && !c.location) ? "empty" : ""}"><h3>${c.name}</h3>${c.phone ? `<a href="tel:${phoneHref(c.phone)}">${c.phone}</a>` : "<p>Details coming soon</p>"}${c.email ? `<a href="mailto:${c.email}">${c.email}</a>` : "<p>—</p>"}<p>${c.location || "—"}</p></article>`).join("");
}

function renderCompany(slug) {
  const company = companies.find(c => c.slug === slug) || companies[0];
  document.title = `${company.name} | Supun Group of Companies`;
  const phoneLink = phoneHref(company.phone);
  $("#company-detail").innerHTML = `
    <div class="company-detail-hero" style="--accent:${company.accent}">
      <a class="detail-back" href="#companies">← Back to all companies</a>
      <div class="detail-title reveal"><div class="eyebrow light"><span></span>${company.legal}</div><h1>${company.name}</h1><p>${company.tagline}</p></div>
      <div class="detail-facts reveal delay-1"><div><small>Industry</small><strong>${company.sectorLabel}</strong></div><div><small>Established</small><strong>${company.established}</strong></div></div>
    </div>
    <section class="section company-about"><div class="reveal"><div class="eyebrow"><span></span> About the company</div><p class="lead">${company.description}</p>${company.award ? `<p><strong>Recognition:</strong> ${company.award}</p>` : ""}</div><div class="reveal delay-1"><div class="eyebrow"><span></span> Key features</div><ul class="feature-list">${company.features.map(f => `<li>${f}</li>`).join("")}</ul></div></section>
    <section class="company-media-strip"><div class="media-placeholder reveal"><span>Company / people photography</span></div><div class="media-placeholder reveal delay-1"><span>Products / operations photography</span></div></section>
    <section class="company-contact-block"><div><div class="eyebrow dark"><span></span> Connect with ${company.name}</div><h2>Start a conversation.</h2></div><div class="detail-contact-links">${company.phone ? `<a href="tel:${phoneLink}">${company.phone} ↗</a>` : "<span>Phone details coming soon</span>"}${company.email ? `<a href="mailto:${company.email}">${company.email} ↗</a>` : ""}${company.website ? `<a href="${company.website}" target="_blank" rel="noopener">Visit website ↗</a>` : ""}<span>${company.location || "Location details coming soon"}</span></div></section>`;
}

let revealObserver;
function initReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: .08, rootMargin: "0px 0px -35px" });
  $$(".page.active .reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * .95) el.classList.add("visible");
    else revealObserver.observe(el);
  });
}

function animateCounters() {
  $$(".page.active [data-counter]").forEach(counter => {
    if (counter.dataset.done) return;
    const target = Number(counter.dataset.counter); const suffix = counter.dataset.suffix || "";
    const start = performance.now(); const duration = 1100;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = `${Math.round(target * (1 - Math.pow(1-progress,3)))}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick); else counter.dataset.done = "true";
    }
    requestAnimationFrame(tick);
  });
}

function route() {
  const raw = location.hash.slice(1) || "home";
  const [path, query] = raw.split("?");
  const parts = path.split("/");
  const pageName = parts[0] === "company" ? "company" : (["home","about","companies","camy","careers","news","contact"].includes(parts[0]) ? parts[0] : "home");
  if (pageName === "company") renderCompany(parts[1]);
  $$(".page").forEach(page => page.classList.toggle("active", page.dataset.page === pageName));
  document.body.classList.toggle("home-route", pageName === "home");
  $$(".main-nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${pageName}` || (pageName === "company" && a.getAttribute("href") === "#companies")));
  if (pageName !== "company") document.title = `${pageName === "home" ? "Supun Group of Companies" : pageName[0].toUpperCase() + pageName.slice(1)} | Supun Group of Companies`;
  closeMenu();
  window.scrollTo({top: 0, behavior: "auto"});
  if (pageName === "companies") {
    const sector = new URLSearchParams(query || "").get("sector") || "all";
    filterCompanies(sector);
  }
  setTimeout(() => {
    initReveals();
    animateCounters();
    if (pageName === "camy" && parts[1] === "products") $("#camy-products").scrollIntoView();
  }, 30);
}

function filterCompanies(filter) {
  const valid = ["all","manufacturing","retail","hospitality"].includes(filter) ? filter : "all";
  $$(".filter").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === valid));
  $$(".company-card").forEach(card => card.classList.toggle("hidden", valid !== "all" && card.dataset.sector !== valid));
}

function closeMenu() {
  $("#main-nav").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

renderContent();
$("#year").textContent = new Date().getFullYear();
$(".menu-toggle").addEventListener("click", () => {
  const open = !$("#main-nav").classList.contains("open");
  $("#main-nav").classList.toggle("open", open); $(".menu-toggle").setAttribute("aria-expanded", String(open)); document.body.classList.toggle("menu-open", open);
});
$$(".filter").forEach(btn => btn.addEventListener("click", () => filterCompanies(btn.dataset.filter)));
window.addEventListener("hashchange", route);
window.addEventListener("scroll", () => $("#site-header").classList.toggle("scrolled", window.scrollY > 35), { passive: true });
$("#catalogue-button").addEventListener("click", () => showToast("The Camy catalogue will be added when the final file is ready."));
$("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "—"}\nCompany: ${data.get("company") || "—"}\n\n${data.get("message")}`);
  $("#form-status").textContent = "Opening your email app to send this enquiry…";
  window.location.href = `mailto:info@supungroup.lk?subject=${subject}&body=${body}`;
});
route();
