import { ArrowRight, Award, Eye, Flag, Gem, Lightbulb, Target, Trophy, UserRound, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import chairmanImage from "@/assets/Chairman.png";
import lasithaImage from "@/assets/lasitha-samarasinghe.png";
import riazImage from "@/assets/mohamed-riaz-farouk.png";
import heroCorporate from "@/assets/hero-corporate.jpg";
import aboutHeroSriLanka from "@/assets/about-hero-sri-lanka-v3.png";
import retailStore from "@/assets/retail-store.jpg";
import manufacturingImage from "@/assets/sector-manufacturing-v2.jpg";
import hospitalityImage from "@/assets/sector-hospitality-v2.jpg";
import sriLankaMap from "@/assets/sri-lanka-watercolor-map.png";
import { awards, coreValues, journey, leadership } from "@/data/siteContent";
import { getCompanyLogo } from "@/data/companyLogos";

const stats = [["11", "Group companies"], ["300+", "Employees"], ["250+", "Distributors"]];
const valueIcons = [Gem, Users, Lightbulb, Flag];
const Label = ({ children }: { children: React.ReactNode }) => <p className="text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">{children}</p>;
const Rule = () => <div className="mt-4 h-0.5 w-12 bg-[#d79a22]" />;

// Keep the timeline tied to the same logo assets used across the company pages.
const journeyCompanyLogos: Record<string, { id: string; name: string }[]> = {
  "1978": [{ id: "supun-traders", name: "Supun Traders" }],
  "1999": [{ id: "group", name: "Supun Group of Companies" }],
  "2003": [{ id: "supun-super-center", name: "Supun Super Center" }],
  "2010": [
    { id: "supun-arcade-residency", name: "Supun Arcade Residency" },
    { id: "area-56", name: "Area 56" },
  ],
  "2011": [{ id: "supun-aerosoft", name: "Supun Aerosoft" }],
  "2016": [{ id: "aerostar-home-appliances", name: "Aero Star" }],
  "2017": [
    { id: "camy-smart", name: "Camy Smart" },
    { id: "rodsons", name: "Rodsons" },
  ],
  "2018": [{ id: "new-camy-smart", name: "New Camy Smart" }],
  "2023": [{ id: "fuji-industries", name: "Fuji Industries" }],
};

const journeyLogoSource = (id: string) =>
  id === "group" ? "/supun-group-of-companies-logo.png" : getCompanyLogo(id);

const About = () => (
  <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-[#102746]">
    <Seo title="About Supun Group of Companies | Our Story Since 1978" description="Discover the story, leadership, vision, journey and values of Supun Group of Companies, a Sri Lankan family-run group with roots dating to 1978." keywords="Supun Group history, Mohamed Fareed, M.F.M. Kaleel, Sri Lanka manufacturing group, Supun Group leadership" />

    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#102746] md:min-h-[690px]">
      <img src={aboutHeroSriLanka} alt="Colombo skyline and a modern Sri Lankan business campus at sunrise" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426]/90 via-[#071426]/45 to-transparent" />
      <div className="container mx-auto flex min-h-[620px] items-center px-4 pb-16 pt-36 md:min-h-[690px] md:pt-40">
        <AnimatedSection animation="fade" duration={550} triggerOnce={false}><div className="max-w-2xl text-white"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#efbd55]">Our story continues</p><h1 className="mt-5 text-5xl font-semibold normal-case leading-[1.03] tracking-[-.045em] sm:text-6xl md:text-7xl">Built in Sri Lanka.<br />For a brighter tomorrow.</h1><p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">Two generations. Multiple industries. One unwavering commitment to quality, innovation and Sri Lankan pride.</p><div className="mt-7 h-0.5 w-16 bg-[#e2a630]" /></div></AnimatedSection>
      </div>
      <div className="absolute bottom-8 right-6 hidden border-l border-white/50 pl-5 text-[10px] font-bold uppercase leading-6 tracking-[.2em] text-white md:block">People<br />Products<br />Possibilities</div>
    </section>

    <section id="story" className="scroll-mt-24 bg-white py-14 md:py-20"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <AnimatedSection animation="fade" duration={500} triggerOnce={false}><Label>Our story</Label><h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] md:text-5xl">From trading goods to making them.</h2><Rule /><div className="mt-6 space-y-4 text-sm leading-7 text-[#53647a] md:text-base"><p>A family-run business since 1978, Supun Group of Companies began when Mr. Mohamed Fareed founded Supun Traders in Colombo, trading household appliances and electronics for Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over the business and formalized it as the Supun Group of Companies, setting the Group on a new course: from trading goods to manufacturing them.</p><p>Through structured growth, the Group is now involved in manufacturing, retail, distribution, and hospitality, each held to the same standard of quality and Sri Lankan craftsmanship. Under the Camy name, Supun manufactures SLS-certified motorcycle helmets, non-stick cookware, air conditioners, and fans entirely in its own factories, reaching homes across the island through Supun Super Center and a network of 250+ distributors.</p><p>Supun Arcade Residency extends the Group into hospitality with luxury serviced apartments in central Colombo, alongside Area 56, its rooftop dining venue.</p><p>With an eye on the future and a continued focus on Sri Lankan manufacturing, the Group credits its growth to two generations of family leadership and a shared commitment to quality, innovation, and Sri Lankan pride, in everything it builds.</p></div><div className="mt-7 grid grid-cols-3 gap-3">{stats.map(([value, label]) => <div key={label} className="border-l-2 border-[#d79a22] pl-3"><strong className="text-2xl font-semibold md:text-3xl">{value}</strong><p className="mt-1 text-[10px] uppercase tracking-wide text-[#6a788a]">{label}</p></div>)}</div></AnimatedSection>
      <AnimatedSection animation="fade" duration={550} triggerOnce={false}><div className="relative mx-auto min-h-[500px] max-w-2xl"><img src={sriLankaMap} alt="" aria-hidden="true" className="absolute -right-[3%] -top-[3%] h-[106%] w-[48%] object-contain opacity-45 mix-blend-multiply" /><img src={retailStore} alt="The Group's retail beginnings" className="absolute left-0 top-5 z-10 h-[285px] w-[67%] -rotate-2 border-[8px] border-white object-cover shadow-xl grayscale" /><img src={heroCorporate} alt="Supun Group today" className="absolute bottom-4 left-[27%] z-20 h-[235px] w-[62%] rotate-3 border-[8px] border-white object-cover shadow-xl" /><div className="absolute right-[2%] top-[25%] z-30 w-[34%] text-center text-[10px] font-bold uppercase leading-5 tracking-[.14em] text-[#75561f]">Local Roots.<br />Lasting Impact.
</div></div></AnimatedSection>
    </div></section>

    <section id="chairman" className="scroll-mt-24 bg-white"><div className="container mx-auto grid lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
      <AnimatedSection animation="fade" duration={500} triggerOnce={false}><div className="flex h-full flex-col items-center justify-center bg-white px-6 py-12 text-center lg:px-10"><img src={chairmanImage} alt="M.F.M. Kaleel, Chairman" className="max-h-[500px] w-full max-w-[430px] object-contain object-center" /><div className="mt-5 w-full max-w-[430px] border-t border-[#102746]/10 pt-5"><p className="text-xl font-medium leading-snug text-[#102746]">“Innovation and creativity for a better tomorrow.”</p><p className="mt-4 text-sm font-semibold">M.F.M. Kaleel</p><p className="text-xs text-[#6b7889]">Chairman</p></div></div></AnimatedSection>
      <AnimatedSection animation="fade" duration={550} triggerOnce={false}><article className="flex h-full flex-col justify-center bg-white p-7 sm:p-10 lg:p-14"><Label>Chairman’s message</Label><h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em]">The personality behind our success story.</h2><Rule /><div className="mt-7 space-y-4 text-sm leading-7 text-[#53647a]"><p>Since the company was established in 1999, Supun Group of Companies has cultivated its status as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of “Innovation &amp; Creativity”, we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p><p>The business environment has experienced radical changes due to the rapid advancement of technology and natural environmental distresses. This has helped businesses to identify new opportunities and also challenged them with greater pressures for change in their approach. As a result, businesses continually change their conventional approach to a more agile, lean and forward-thinking structure in the perpetually changing environment.</p><p>We too are constantly challenged by these competitive forces, be it natural or man-made, facing them positively and proactively with our dedicated team is what we always strive for.</p><p>At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts to exceed their expectations. This has been the core of our success story and we strive to continue our journey in nurturing business goals through various new products and services in the future.</p></div><p className="mt-7 border-t border-[#102746]/10 pt-5 font-semibold">M.F.M. Kaleel <span className="ml-2 text-sm font-normal text-[#6b7889]">Chairman</span></p></article></AnimatedSection>
    </div></section>

    <section id="leadership" className="scroll-mt-24 bg-white py-14 md:py-20"><div className="container mx-auto px-4"><Label>Leadership team</Label><h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em]">Leading with experience.</h2><Rule /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">{leadership.map((person, index) => <AnimatedSection key={person.name} animation="fade" delay={(index % 4) * 40} duration={450} triggerOnce={false} className={index < 3 ? "lg:col-span-4" : "lg:col-span-3"}><article className="flex h-full flex-col overflow-hidden border border-[#102746]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(16,39,70,.08)]">{person.name === "Lasitha Samarasinghe" ? <img src={lasithaImage} alt="Lasitha Samarasinghe" className="aspect-[4/3] w-full bg-[#e9edf2] object-cover object-top" /> : person.name === "Mohamed Riaz Farouk" ? <img src={riazImage} alt="Mohamed Riaz Farouk" className="aspect-[4/3] w-full bg-[#e9edf2] object-cover object-top" /> : <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-[#e9edf2] text-[#8b98a8]"><span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#102746]/10 bg-white/70"><UserRound size={38} strokeWidth={1.25} /></span><span className="mt-3 text-[9px] font-bold uppercase tracking-[.16em]">Portrait placeholder</span></div>}<div className="flex flex-1 flex-col p-5"><h3 className="text-lg font-semibold normal-case leading-tight">{person.name}</h3><p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[.08em] text-[#947027]">{person.title}</p>{person.description && person.description !== "—" && <p className="mt-4 border-t border-[#102746]/10 pt-4 text-xs leading-5 text-[#68778a]">{person.description}</p>}</div></article></AnimatedSection>)}</div></div></section>

    <section id="direction" className="w-full scroll-mt-24 bg-white"><div className="grid w-full lg:grid-cols-[1.35fr_.65fr]"><div className="grid gap-px bg-[#d9d7d1] sm:grid-cols-2"><article className="bg-white px-6 py-10 sm:px-10 lg:px-16 xl:px-20"><Eye className="text-[#d79a22]" size={34} strokeWidth={1.6} /><Label>Vision</Label><h2 className="mt-3 text-2xl font-semibold normal-case">Innovate. Unleash and Excel.</h2><p className="mt-4 text-sm leading-6 text-[#637186]">To unleash the potential within us to transform the markets through innovation and exceed people’s expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans.</p></article><article className="bg-white px-6 py-10 sm:px-10 lg:px-12 xl:px-16"><Target className="text-[#d79a22]" size={34} strokeWidth={1.6} /><Label>Mission</Label><h2 className="mt-3 text-2xl font-semibold normal-case">Superior thinking. Sustainable value.</h2><p className="mt-4 text-sm leading-6 text-[#637186]">To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders.</p></article></div><div className="relative min-h-[360px]"><img src={manufacturingImage} alt="Sustainable local manufacturing" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#102746]/90 to-[#102746]/10" /><p className="absolute bottom-8 left-8 max-w-[230px] text-2xl font-medium leading-snug text-white">Sustainable solutions for generations.</p></div></div></section>

    <section id="journey" className="scroll-mt-24 bg-white py-14 md:py-16">
      <div className="container mx-auto px-4">
        <Label>Our journey</Label>
        <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em]">Progress through the years.</h2>
        <Rule />
        <p className="mt-3 hidden text-xs text-[#788496] lg:block">Move over a year to read its story.</p>
        <div className="relative mt-9 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 lg:gap-0 lg:before:absolute lg:before:left-2 lg:before:right-2 lg:before:top-[63px] lg:before:h-px lg:before:bg-[#d79a22]">
          {journey.map(([year, description], index) => {
            const logos = journeyCompanyLogos[year] ?? [];

            return (
              <article key={year} tabIndex={0} aria-label={`${year}: ${description}`} className="group relative min-w-0 pr-3 outline-none focus-visible:ring-2 focus-visible:ring-[#315f9f]">
                <div className="flex h-14 items-center gap-1 pb-2">
                  {logos.map(({ id, name }) => (
                    <span key={id} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#102746]/10 bg-white p-1 shadow-sm transition-transform group-hover:-translate-y-1 group-focus:-translate-y-1">
                      <img src={journeyLogoSource(id)} alt={name} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </span>
                  ))}
                </div>
                <span className="relative z-10 block h-[15px] w-[15px] rounded-full border-[4px] border-white bg-[#d79a22] shadow-[0_0_0_1px_rgba(215,154,34,.25)] transition group-hover:scale-125 group-focus:scale-125" />
                <strong className="mt-3 block text-base font-semibold tracking-[-.02em] text-[#102746]">{year}</strong>
                <p className="mt-1.5 text-[10px] leading-4 text-[#637186]">{description}</p>
                <div className={`pointer-events-none absolute bottom-[calc(100%+12px)] z-40 hidden w-72 rounded-xl border border-[#102746]/10 bg-white p-5 text-left shadow-[0_18px_45px_rgba(16,39,70,.16)] lg:group-hover:block lg:group-focus:block ${index === 0 ? "left-0" : index === journey.length - 1 ? "right-0" : "left-1/2 -translate-x-1/2"}`}>
                  <div className="flex items-center gap-3">
                    {logos.map(({ id, name }) => (
                      <span key={id} className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#102746]/10 bg-white p-1.5">
                        <img src={journeyLogoSource(id)} alt={name} className="max-h-full max-w-full object-contain" />
                      </span>
                    ))}
                    <div><span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a87417]">Milestone</span><strong className="mt-1 block text-xl text-[#102746]">{year}</strong></div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#53647a]">{description}</p>
                  <span className={`absolute -bottom-2 h-4 w-4 rotate-45 border-b border-r border-[#102746]/10 bg-white ${index === 0 ? "left-2" : index === journey.length - 1 ? "right-2" : "left-1/2 -translate-x-1/2"}`} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-[#f5f4f0] py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><Label>Core values</Label><h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] md:text-5xl">What guides us.</h2></div><p className="max-w-md text-sm leading-6 text-[#637186] md:text-right">The principles behind how we build, serve and grow across the Group.</p></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => { const Icon = valueIcons[index % valueIcons.length]; return <article key={value.title} className="group rounded-2xl border border-[#102746]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#315f9f]/30 hover:shadow-[0_14px_30px_rgba(16,39,70,.08)]"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef3f9] text-[#315f9f]"><Icon size={21} strokeWidth={1.7} /></span><span className="text-[10px] font-bold tracking-[.18em] text-[#102746]/20">0{index + 1}</span></div><h3 className="mt-6 text-xl font-semibold normal-case">{value.title}</h3><p className="mt-3 text-sm leading-6 text-[#657286]">{value.description}</p><div className="mt-6 h-0.5 w-8 bg-[#d79a22] transition-all duration-300 group-hover:w-14" /></article>; })}
        </div>
      </div>
    </section>

    <section id="awards" className="scroll-mt-24 bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><Label>Awards &amp; recognition</Label><h2 className="mt-3 max-w-2xl text-4xl font-semibold normal-case leading-tight tracking-[-.04em] md:text-5xl">Recognition earned across the Group.</h2></div><p className="max-w-md text-sm leading-6 text-[#637186] md:text-right">Independent recognition of our local manufacturing, trusted partnerships and industry standards.</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((item) => { const isCertification = item.award.toLowerCase().includes("made in sri lanka"); const isSilver = item.award.toLowerCase().includes("silver"); const Icon = isSilver ? Award : Trophy; return <article key={`${item.award}-${item.awardedTo}`} className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,39,70,.09)] ${isCertification ? "border-[#d79a22]/35 bg-[#fffaf0]" : "border-[#102746]/10 bg-[#f7f9fc]"}`}><span className={`absolute inset-x-0 top-0 h-1 ${isCertification ? "bg-[#d79a22]" : isSilver ? "bg-slate-400" : "bg-[#315f9f]"}`} />{isCertification ? <img src="/made-in-sri-lanka-logo.png" alt="Made in Sri Lanka logo" className="h-16 w-14 object-contain" /> : <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${isSilver ? "bg-slate-200 text-slate-600" : "bg-[#e5eef9] text-[#315f9f]"}`}><Icon size={24} strokeWidth={1.8} /></span>}<h3 className="mt-5 text-base font-semibold normal-case leading-snug text-[#102746]">{item.award}</h3><p className="mt-3 text-xs leading-5 text-[#728093]">{item.givenBy}</p><p className="mt-auto border-t border-[#102746]/10 pt-4 text-sm font-semibold leading-5 text-[#315f9f]">{item.awardedTo}</p></article>; })}
        </div>
      </div>
    </section>

    <section className="bg-white px-4 pb-14 pt-4 md:pb-20 md:pt-8"><div className="container relative isolate mx-auto overflow-hidden rounded-[2rem] py-20 text-white shadow-[0_24px_60px_rgba(16,39,70,.16)] md:py-24"><img src={hospitalityImage} alt="Sri Lanka at sunset" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-[#102746]/78" /><div className="flex flex-col items-start justify-between gap-7 px-7 sm:px-10 md:flex-row md:items-center lg:px-14"><h2 className="max-w-2xl text-4xl font-semibold normal-case leading-tight tracking-[-.04em] md:text-5xl">Building a stronger Sri Lanka, together.</h2><Link to="/companies" className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#efbd55] px-7 py-3 font-semibold text-[#071b2d] transition duration-300 hover:bg-white">Explore our businesses <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071b2d] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#78be43]"><ArrowRight size={17} /></span></Link></div></div></section>
  </div>
);

export default About;
