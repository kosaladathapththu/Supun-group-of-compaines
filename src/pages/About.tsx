import { ArrowDown, ArrowRight, Award, Factory, Hotel, Lightbulb, ShoppingBag, Target, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import chairmanImage from "@/assets/Chairman.png";
import aboutHero from "@/assets/about-hero-v2.png";
import groupLogo from "@/assets/supun-group-of-companies-logo.png";
import { awards, coreValues, journey, leadership } from "@/data/siteContent";
import { companies } from "@/data/companies";

const stats = [
  ["11", "Group companies"],
  ["300+", "Employees"],
  ["250+", "Distributors"],
];

const groupSectors = [
  { title: "Manufacturing", icon: Factory, list: companies.filter((company) => company.industry === "Manufacturing") },
  { title: "Retail & Distribution", icon: ShoppingBag, list: companies.filter((company) => company.industry === "Retail & Distribution") },
  { title: "Hospitality", icon: Hotel, list: companies.filter((company) => company.industry === "Hospitality") },
];

const About = () => (
  <div className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#10233f]">
    <Seo
      title="About Supun Group of Companies | Our Story Since 1978"
      description="Discover the story, leadership, vision, journey and values of Supun Group of Companies, a Sri Lankan family-run group with roots dating to 1978."
      keywords="Supun Group history, Mohamed Fareed, M.F.M. Kaleel, Sri Lanka manufacturing group, Supun Group leadership"
    />

    <section className="about-hero relative isolate flex items-end overflow-hidden bg-[#071426] text-white">
      <img src={aboutHero} alt="Sri Lankan professionals at a modern manufacturing facility" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,15,31,.98)_0%,rgba(5,22,45,.88)_36%,rgba(5,22,45,.30)_72%,rgba(5,22,45,.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071426] to-transparent" />
      <div className="container relative z-10 mx-auto px-4 pb-12 pt-40 md:pb-16">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-blue-200"><span className="h-px w-10 bg-[#78be43] shadow-[0_0_12px_rgba(120,190,67,.55)]" /> About Supun Group</p>
          <h1 className="about-hero-title font-semibold normal-case">Rooted in Sri Lanka.<br /><span className="text-white/65">Built across generations.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">From a Colombo trading business to a connected group spanning manufacturing, retail, distribution and hospitality.</p>
        </div>
        <a href="#story" className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-white/65 transition hover:text-white"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25"><ArrowDown size={17} /></span> Discover our story</a>
      </div>
    </section>

    <section id="story" className="relative bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <aside className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] bg-[#f1f0eb] p-7 sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#10233f]/[.06]" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#78be43]/15" />
              <p className="section-kicker relative">Our story</p>
              <div className="relative my-auto flex justify-center py-12"><img src={groupLogo} alt="Supun Group of Companies" className="w-64 drop-shadow-[0_18px_25px_rgba(16,35,63,.12)] sm:w-72" /></div>
              <div className="relative flex items-end justify-between gap-5 border-t border-[#10233f]/10 pt-7"><div><strong className="text-6xl font-semibold tracking-[-.06em]">1978</strong><p className="mt-2 text-xs font-semibold uppercase tracking-[.16em] text-[#667388]">Where our story began</p></div><span className="mb-2 h-2.5 w-2.5 rounded-full bg-[#78be43] shadow-[0_0_16px_rgba(120,190,67,.6)]" /></div>
            </aside>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false}>
            <div className="flex h-full flex-col rounded-[2rem] border border-[#10233f]/10 p-7 sm:p-10 lg:p-12">
              <h2 className="max-w-3xl text-4xl font-semibold normal-case leading-[1.04] tracking-[-.045em] sm:text-5xl md:text-6xl">From trading goods to <span className="relative whitespace-nowrap">making them.<i className="absolute -bottom-1 left-0 h-1 w-16 rounded-full bg-[#78be43]/60" /></span></h2>
              <p className="mt-8 text-xl leading-relaxed text-[#10233f] md:text-2xl">A family run business since 1978, Supun Group of Companies began when Mr. Mohamed Fareed founded Supun Traders in Colombo, trading household goods for Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over and formalized the Group, setting it on a new course: from trading goods to manufacturing them.</p>
              <div className="mt-8 grid gap-6 border-t border-[#10233f]/10 pt-8 text-base leading-relaxed text-[#5d6d82] md:grid-cols-2"><p>Through structured growth, the Group is now involved in manufacturing, retail, distribution, and hospitality, each held to the same standard of quality and Sri Lankan craftsmanship. Under the Camy name, Supun manufactures SLS-certified motorcycle helmets, non-stick cookware, air conditioners, and fans entirely in its own factories.</p><p>Supun Arcade Residency extends the Group into hospitality with luxury serviced apartments in central Colombo, alongside Area 56, its rooftop dining venue.</p></div>
              <p className="mt-7 border-l-2 border-[#78be43]/60 pl-5 text-sm leading-relaxed text-[#667388]">With an eye on the future and a continued focus on Sri Lankan manufacturing, the Group credits its growth to two generations of family leadership and a shared commitment to quality, innovation, and Sri Lankan pride.</p>

              <div className="mt-auto grid grid-cols-3 gap-3 pt-10">
                {stats.map(([value, label]) => <div key={label} className="rounded-2xl bg-[#f4f3ef] p-4 sm:p-5"><strong className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{value}</strong><p className="mt-2 text-xs leading-snug text-[#667388]">{label}</p></div>)}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="bg-[#f1f0eb] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-12"><p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-primary"><span className="h-px w-9 bg-[#78be43]" /> Chairman’s Message</p><h2 className="mt-6 max-w-5xl text-4xl font-semibold normal-case leading-[1.02] tracking-[-.045em] text-[#10233f] sm:text-5xl md:text-6xl">The Personality Behind the Success Story of Supun Group of Companies</h2></div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-stretch">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-t-[12rem] rounded-b-[2rem] bg-[#dfe3d8]">
              <div className="absolute inset-x-10 top-16 aspect-square rounded-full border border-[#78be43]/20" />
              <div className="absolute inset-x-16 top-24 aspect-square rounded-full bg-[#cbd5c3]/55" />
              <img src={chairmanImage} alt="M.F.M. Kaleel, Chairman of Supun Group of Companies" className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-full object-contain object-bottom grayscale-[12%]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#20251f]/90 p-5 text-white backdrop-blur-md"><div className="flex items-center justify-between"><div><h3 className="text-2xl font-semibold normal-case">M.F.M. Kaleel</h3><p className="mt-1 text-sm text-white/55">Chairman</p></div><span className="h-2.5 w-2.5 rounded-full bg-[#78be43] shadow-[0_0_14px_rgba(120,190,67,.7)]" /></div></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false}>
            <article className="relative h-full overflow-hidden rounded-[2rem] bg-[#fbfaf6] p-7 shadow-[0_22px_60px_rgba(42,45,39,.08)] sm:p-10 lg:p-12">
              <span className="absolute right-10 top-5 text-[9rem] font-serif leading-none text-[#78be43]/10">“</span>
              <div className="relative max-w-4xl space-y-6 leading-relaxed text-[#62695f]">
                <p className="pr-10 text-xl font-medium leading-relaxed text-[#10233f]">Since the company was established in 1999, Supun Group of Companies has cultivated its status as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of “Innovation &amp; Creativity”, we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p>
                <div className="h-px w-20 bg-[#78be43]/55" />
                <p>Guided by our corporate creed of “Innovation &amp; Creativity”, we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p>
                <p>The business environment has experienced radical changes due to the rapid advancement of technology and natural environmental distresses. This has helped businesses to identify new opportunities and also challenged them with greater pressures for change in their approach. As a result, businesses continually change their conventional approach to a more agile, lean and forward-thinking structure in the perpetually changing environment.</p>
                <p>We too are constantly challenged by these competitive forces, be it natural or man-made, facing them positively and proactively with our dedicated team is what we always strive for.</p>
                <p className="border-l-2 border-[#78be43]/55 pl-5 text-[#3f463d]">At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts to exceed their expectations. This has been the core of our success story and we strive to continue our journey in nurturing business goals through various new products and services in the future.</p>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#e9e6dd] py-20 md:py-28">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#78be43]/10" />
      <div className="container relative mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-12 max-w-3xl"><p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[#596255]"><span className="h-px w-9 bg-[#78be43]" /> Our direction</p><h2 className="mt-6 text-4xl font-semibold normal-case tracking-[-.04em] text-[#20251f] md:text-6xl">Purpose that moves us forward.</h2></div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <article className="relative min-h-[430px] overflow-hidden rounded-[2.25rem] bg-[#faf9f5] p-8 text-[#20251f] shadow-[0_22px_60px_rgba(42,45,39,.10)] sm:p-11">
              <span className="absolute -right-8 -top-16 text-[11rem] font-semibold leading-none text-[#20251f]/[.025]">01</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfead6] text-[#527f32]"><Lightbulb size={25} strokeWidth={1.5} /></div>
              <div className="mt-20"><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#657060]">Our vision</p><h2 className="mt-5 max-w-xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em] md:text-5xl">Innovate. Unleash and Excel.</h2><p className="mt-7 max-w-xl leading-relaxed text-[#697064]">To unleash the potential within us to transform the markets through innovation and exceed people’s expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans.</p></div>
            </article>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false} className="lg:mt-16">
            <article className="relative min-h-[430px] overflow-hidden rounded-[2.25rem] bg-[#20251f] p-8 text-white shadow-[0_24px_65px_rgba(32,37,31,.18)] sm:p-11">
              <span className="absolute -right-8 -top-16 text-[11rem] font-semibold leading-none text-white/[.025]">02</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#78be43]/30 bg-[#78be43]/10 text-[#91ca67]"><Target size={25} strokeWidth={1.5} /></div>
              <div className="mt-20"><p className="text-xs font-semibold uppercase tracking-[.22em] text-white/45">Our mission</p><h2 className="mt-5 max-w-xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em] md:text-5xl">Superior thinking. Sustainable value.</h2><p className="mt-7 max-w-xl leading-relaxed text-white/58">To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders.</p></div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="bg-[#f7f7f4] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Our journey</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Milestones since 1978.</h2></div><p className="max-w-sm leading-relaxed text-[#5d6d82]">One trading business became an interconnected Sri Lankan group, one purposeful step at a time.</p></div>
        </AnimatedSection>

        <div id="journey" className="journey-map relative overflow-hidden rounded-[2.5rem] bg-[#071426] px-5 py-10 text-white shadow-[0_35px_90px_rgba(7,20,38,.22)] sm:px-8 md:px-12 md:py-16">
          <div className="absolute left-1/2 top-0 h-full w-[32rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(35,107,201,.18),transparent_68%)]" />
          <div className="journey-spine absolute bottom-16 left-1/2 top-16 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-300/10 via-blue-400/70 to-blue-300/10 md:block" />

          <div className="relative space-y-5 md:space-y-7">
            {Array.from({ length: Math.ceil(journey.length / 2) }, (_, rowIndex) => journey.slice(rowIndex * 2, rowIndex * 2 + 2)).map((pair, rowIndex) => (
              <div key={pair[0][0]} className="journey-row relative grid gap-4 md:grid-cols-[1fr_5rem_1fr] md:items-stretch md:gap-6">
                {pair.map(([year, text], itemIndex) => (
                  <AnimatedSection key={year} animation={itemIndex === 0 ? "slide-right" : "slide-left"} delay={itemIndex * 100} duration={800} triggerOnce={false} className={itemIndex === 1 ? "md:col-start-3" : ""}>
                    <article className="journey-card group relative h-full overflow-hidden rounded-[1.5rem] border border-blue-200/10 bg-white/[.055] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[.085] sm:p-7">
                      <span className="absolute -right-4 -top-8 text-[7rem] font-semibold leading-none tracking-[-.08em] text-white/[.025]">{String(rowIndex * 2 + itemIndex + 1).padStart(2, "0")}</span>
                      <div className="relative flex items-center justify-between gap-4"><strong className="text-3xl font-semibold tracking-[-.04em] text-blue-300 md:text-4xl">{year}</strong><span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/20 text-[10px] font-semibold text-blue-200">{String(rowIndex * 2 + itemIndex + 1).padStart(2, "0")}</span></div>
                      <p className="relative mt-5 leading-relaxed text-white/62">{text}</p>
                    </article>
                  </AnimatedSection>
                ))}
                <div className="journey-node pointer-events-none absolute left-1/2 hidden h-full -translate-x-1/2 items-center justify-center md:flex">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/35 bg-[#0d2a51] shadow-[0_0_0_8px_rgba(50,126,220,.08),0_0_30px_rgba(71,145,235,.25)]"><span className="h-2.5 w-2.5 rounded-full bg-[#78be43] shadow-[0_0_14px_#78be43]" /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-7 text-[10px] font-semibold uppercase tracking-[.2em] text-blue-200/55"><span>Colombo · 1978</span><span>Growing forward</span><span>Today · Sri Lanka</span></div>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 text-center"><p className="section-kicker justify-center before:hidden">What guides us</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Values made visible.</h2></div></AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{coreValues.map((value, index) => <AnimatedSection key={value.title} animation="slide-up" delay={index * 90} duration={750} triggerOnce={false}><article className="group h-full rounded-[1.5rem] border border-[#10233f]/10 bg-[#f6f9fc] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#78be43]/40 hover:shadow-[0_18px_45px_rgba(16,35,63,.09)]"><span className="flex items-center gap-2 text-xs font-semibold tracking-[.18em] text-primary/45"><i className="h-1.5 w-1.5 rounded-full bg-[#78be43] opacity-40 transition group-hover:opacity-100" />0{index + 1}</span><h3 className="mt-10 text-2xl font-semibold normal-case">{value.title}</h3><p className="mt-4 leading-relaxed text-[#667388]">{value.description}</p></article></AnimatedSection>)}</div>
      </div>
    </section>

    <section className="bg-[#f1f0eb] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Leadership team</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Leading across the Group.</h2></div><Users className="hidden text-primary/20 md:block" size={72} strokeWidth={1} /></div></AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{leadership.map((person, index) => <AnimatedSection key={person.name} animation="slide-up" delay={(index % 3) * 90} duration={750} triggerOnce={false}><article className="h-full rounded-[1.5rem] bg-white p-7 shadow-[0_14px_38px_rgba(16,35,63,.07)]"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Users size={20} /></div><h3 className="mt-8 text-2xl font-semibold normal-case">{person.name}</h3><p className="mt-2 font-semibold text-primary">{person.title}</p>{person.description && <p className="mt-4 leading-relaxed text-[#667388]">{person.description}</p>}</article></AnimatedSection>)}</div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 text-center"><p className="section-kicker justify-center before:hidden">Group structure</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">One group. Connected businesses.</h2></div></AnimatedSection>
        <div className="mx-auto max-w-6xl"><div className="rounded-2xl bg-[#071426] p-6 text-center text-xl font-semibold text-white">Supun Group of Companies</div><div className="mx-auto h-10 w-px bg-primary/25" /><div className="grid gap-5 md:grid-cols-3">{groupSectors.map(({ title, icon: Icon, list }, index) => <AnimatedSection key={title} animation="slide-up" delay={index * 100} duration={800} triggerOnce={false}><article className="h-full rounded-[1.5rem] border border-primary/10 bg-white p-7"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon size={20} /></span><h3 className="text-xl font-semibold normal-case">{title}</h3></div><ul className="mt-7 space-y-3 text-sm text-[#667388]">{list.map((company) => <li key={company.id} className="border-t border-[#10233f]/10 pt-3">{company.shortName}</li>)}</ul></article></AnimatedSection>)}</div><div className="mt-5 flex items-start gap-4 rounded-[1.5rem] bg-primary p-7 text-white"><Truck className="mt-1 shrink-0 text-blue-200" /><div><h3 className="text-xl font-semibold normal-case">The Camy Brand</h3><p className="mt-2 text-white/65">Connecting the Group’s manufacturing companies with island-wide distribution and retail.</p></div></div></div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Recognition</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Standards that earn trust.</h2><p className="mt-5 max-w-2xl leading-relaxed text-[#667388]">Recognition earned across the Group, from national manufacturing certification to industry and hospitality awards.</p></div><Link to="/companies" className="inline-flex items-center gap-3 font-semibold text-primary">Explore our companies <ArrowRight size={18} /></Link></div></AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2">{awards.map((item, index) => <AnimatedSection key={`${item.award}-${item.awardedTo}`} animation="slide-up" delay={(index % 2) * 90} duration={750} triggerOnce={false}><article className="group flex h-full gap-5 rounded-[1.5rem] border border-[#10233f]/10 p-7 transition hover:border-[#78be43]/35"><Award className="mt-1 shrink-0 text-primary transition group-hover:text-[#5b9d2c]" /><div><h3 className="text-lg font-semibold normal-case">{item.award}</h3><p className="mt-3 font-semibold text-primary">{item.awardedTo}</p><p className="mt-1 text-sm text-[#667388]">{item.givenBy}</p></div></article></AnimatedSection>)}</div>
      </div>
    </section>
  </div>
);

export default About;
