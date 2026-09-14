import { ArrowDown, ArrowRight, Award, Factory, Hotel, Lightbulb, ShoppingBag, Target, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import chairmanImage from "@/assets/Chairman.png";
import aboutHero from "@/assets/about-hero-v2.png";
import colomboImage from "../../colombo.jpg";
import anythingAtSupunLogo from "@/assets/anything-at-supun-logo.png";
import camyBrandLogo from "@/assets/camy-brand-logo.png";
import { awards, coreValues, journey, leadership } from "@/data/siteContent";
import { companies } from "@/data/companies";

const stats = [
  ["11", "Group companies"],
  ["300+", "Employees"],
  ["250+", "Distributors"],
];

const valueStyles = [
  "bg-[#10233f] text-white border-[#10233f] [&_p]:text-white/68",
  "bg-[#f1e7d7] text-[#10233f] border-[#dbc8aa] [&_p]:text-[#5f625f]",
  "bg-[#e8eef5] text-[#10233f] border-[#cbd7e5] [&_p]:text-[#5f6d7f]",
  "bg-[#edf2e8] text-[#10233f] border-[#d4dfca] [&_p]:text-[#626d62]",
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

    <section id="story" className="relative scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="border-b border-[#10233f]/10 pb-8"><p className="section-kicker">Our story</p></div>
        <div className="grid gap-10 py-10 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-14">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <aside className="border-l-4 border-[#10233f] pl-6 lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#65758a]">Established</p>
              <strong className="mt-3 block text-6xl font-semibold tracking-[-.06em] text-[#10233f]">1978</strong>
              <p className="mt-4 max-w-[220px] leading-7 text-[#65758a]">A Sri Lankan family business built through two generations of leadership.</p>
            </aside>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false}>
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em] sm:text-5xl">From trading goods to making them.</h2>
              <p className="mt-7 max-w-4xl text-xl leading-9 text-[#263b59]">Supun Group began when Mr. Mohamed Fareed founded Supun Traders in Colombo, supplying household goods to Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over and formalised the Group, beginning its transition from trading to manufacturing.</p>
              <div className="mt-8 grid gap-6 border-t border-[#10233f]/10 pt-8 leading-8 text-[#5d6d82] md:grid-cols-2"><p>Today, the Group operates across manufacturing, retail, distribution and hospitality. Under the Camy name, it manufactures helmets, cookware, air conditioners, fans and other products in Sri Lanka.</p><p>Supun Arcade Residency and Area 56 extend the Group into hospitality, while the wider business continues to grow around quality, local capability and long-term value.</p></div>
              <div className="mt-9 grid grid-cols-3 border-y border-[#10233f]/10 py-5">
                {stats.map(([value, label]) => <div key={label} className="border-r border-[#10233f]/10 px-4 first:pl-0 last:border-0"><strong className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{value}</strong><p className="mt-1 text-xs leading-snug text-[#667388]">{label}</p></div>)}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section id="chairman" className="scroll-mt-24 bg-[#f5f7fa] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-10"><p className="section-kicker">Chairman’s Message</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold normal-case leading-[1.04] tracking-[-.04em] text-[#10233f] sm:text-5xl">A message from our Chairman.</h2></div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-stretch">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#10233f]/10 bg-white shadow-[0_18px_45px_rgba(16,35,63,.08)]">
              <div className="flex min-h-[470px] items-end justify-center bg-[#e9edf2] px-5 pt-8"><img src={chairmanImage} alt="M.F.M. Kaleel, Chairman of Supun Group of Companies" className="max-h-[455px] w-full object-contain object-bottom grayscale-[8%]" /></div>
              <div className="border-t border-[#10233f]/10 bg-white px-7 py-5"><h3 className="text-2xl font-semibold normal-case">M.F.M. Kaleel</h3><p className="mt-1 text-sm font-medium text-[#65758a]">Chairman</p></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false}>
            <article className="h-full rounded-[1.5rem] border border-[#10233f]/10 bg-white p-7 sm:p-10 lg:p-12">
              <div className="relative max-w-4xl space-y-6 leading-relaxed text-[#62695f]">
                <p className="pr-10 text-xl font-medium leading-relaxed text-[#10233f]">Since the company was established in 1999, Supun Group of Companies has cultivated its status as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of “Innovation &amp; Creativity”, we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p>
                <div className="h-px w-20 bg-[#78be43]/55" />
                <p>The business environment has experienced radical changes due to the rapid advancement of technology and natural environmental distresses. This has helped businesses to identify new opportunities and also challenged them with greater pressures for change in their approach. As a result, businesses continually change their conventional approach to a more agile, lean and forward-thinking structure in the perpetually changing environment.</p>
                <p>We too are constantly challenged by these competitive forces, be it natural or man-made, facing them positively and proactively with our dedicated team is what we always strive for.</p>
                <p className="border-l-2 border-[#78be43]/55 pl-5 text-[#3f463d]">At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts to exceed their expectations. This has been the core of our success story and we strive to continue our journey in nurturing business goals through various new products and services in the future.</p>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section id="direction" className="relative scroll-mt-24 overflow-hidden bg-white py-16 md:py-24">
      <div className="container relative mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-12 max-w-3xl"><p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[#596255]"><span className="h-px w-9 bg-[#78be43]" /> Our direction</p><h2 className="mt-6 text-4xl font-semibold normal-case tracking-[-.04em] text-[#10233f] md:text-6xl">Purpose that moves us forward.</h2></div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <AnimatedSection animation="slide-right" duration={850} triggerOnce={false}>
            <article className="min-h-[360px] rounded-[1.25rem] border border-[#10233f]/10 bg-[#f7f8fa] p-8 text-[#20251f] sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10233f] text-white"><Lightbulb size={22} strokeWidth={1.5} /></div>
              <div className="mt-10"><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#65758a]">Our vision</p><h2 className="mt-4 max-w-xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em]">Innovate. Unleash and Excel.</h2><p className="mt-6 max-w-xl leading-relaxed text-[#697486]">To unleash the potential within us to transform the markets through innovation and exceed people’s expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans.</p></div>
            </article>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} duration={850} triggerOnce={false}>
            <article className="min-h-[360px] rounded-[1.25rem] bg-[#10233f] p-8 text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white"><Target size={22} strokeWidth={1.5} /></div>
              <div className="mt-10"><p className="text-xs font-semibold uppercase tracking-[.22em] text-white/50">Our mission</p><h2 className="mt-4 max-w-xl text-4xl font-semibold normal-case leading-[1.05] tracking-[-.04em]">Superior thinking. Sustainable value.</h2><p className="mt-6 max-w-xl leading-relaxed text-white/65">To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders.</p></div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Our journey</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Milestones since 1978.</h2></div><p className="max-w-sm leading-relaxed text-[#5d6d82]">One trading business became an interconnected Sri Lankan group, one purposeful step at a time.</p></div>
        </AnimatedSection>

        <div id="journey" className="relative scroll-mt-24 overflow-hidden rounded-[1.5rem] border border-[#10233f]/10 bg-white px-5 py-8 shadow-[0_16px_45px_rgba(16,35,63,.06)] sm:px-8 md:px-10 md:py-10">
          <div className="relative mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
            {journey.map(([year, text], index) => <AnimatedSection key={year} animation="fade" delay={(index % 2) * 50} duration={500} triggerOnce={false}>
              <article className={`h-full border-[#10233f]/10 px-2 py-6 md:px-7 ${index % 2 === 0 ? "md:border-r" : ""} ${index < journey.length - 2 ? "border-b" : ""}`}>
                <div className="flex items-baseline gap-4"><strong className="text-3xl font-semibold tracking-[-.05em] text-[#10233f]">{year}</strong><span className="h-px flex-1 bg-[#10233f]/10" /></div>
                <p className="mt-3 max-w-xl leading-relaxed text-[#596779]">{text}</p>
              </article>
            </AnimatedSection>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 text-center"><p className="section-kicker justify-center before:hidden">What guides us</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Values made visible.</h2></div></AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{coreValues.map((value, index) => <AnimatedSection key={value.title} animation="slide-up" delay={index * 70} duration={600} triggerOnce={false}><article className={`group flex h-full min-h-[285px] flex-col rounded-[1.25rem] border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(16,35,63,.09)] ${valueStyles[index % valueStyles.length]}`}><span className="h-1 w-12 rounded-full bg-current opacity-35" /><h3 className="mt-auto pt-12 text-2xl font-semibold normal-case">{value.title}</h3><p className="mt-4 leading-relaxed">{value.description}</p></article></AnimatedSection>)}</div>
      </div>
    </section>

    <section id="leadership" className="scroll-mt-24 bg-[#f5f7fa] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Leadership team</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Leading across the Group.</h2></div><Users className="hidden text-primary/20 md:block" size={72} strokeWidth={1} /></div></AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, index) => {
            return <AnimatedSection key={person.name} animation="slide-up" delay={(index % 3) * 70} duration={650} triggerOnce={false}>
              <article className="flex h-full min-h-[205px] flex-col rounded-[1.25rem] border border-[#10233f]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#10233f]/25 hover:shadow-[0_16px_40px_rgba(16,35,63,.08)]">
                <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#315f9f]">{person.title}</p>
                <h3 className="mt-4 text-2xl font-semibold normal-case tracking-[-.025em] text-[#10233f]">{person.name}</h3>
                {person.description && person.description !== "—" && <p className="mt-auto line-clamp-2 border-t border-[#10233f]/10 pt-4 text-sm leading-6 text-[#68778a]">{person.description}</p>}
              </article>
            </AnimatedSection>;
          })}
        </div>
      </div>
    </section>

    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <img src={colomboImage} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center grayscale" />
      <div className="absolute inset-0 -z-10 bg-[#f4f2ec]/[.93]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f4f2ec] via-transparent to-[#f4f2ec]/90" />
      <div className="container relative mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-14 text-center"><p className="section-kicker justify-center before:hidden">Group structure</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">One group. Connected businesses.</h2></div></AnimatedSection>
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-white/65 p-5 shadow-[0_30px_80px_rgba(36,43,39,.12)] backdrop-blur-md sm:p-8"><div className="rounded-2xl bg-[#10233f] p-6 text-center text-xl font-semibold text-white">Supun Group of Companies</div><div className="mx-auto h-10 w-px bg-[#10233f]/25" /><div className="grid gap-5 md:grid-cols-3">{groupSectors.map(({ title, icon: Icon, list }, index) => <AnimatedSection key={title} animation="slide-up" delay={index * 100} duration={800} triggerOnce={false}><article className="h-full rounded-[1.5rem] border border-[#10233f]/10 bg-[#faf9f5]/95 p-7"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e2ecd9] text-[#527f32]"><Icon size={20} /></span><h3 className="text-xl font-semibold normal-case">{title}</h3></div><ul className="mt-7 space-y-3 text-sm text-[#626d65]">{list.map((company) => <li key={company.id} className="border-t border-[#10233f]/10"><Link to={"/companies/" + company.id} className="group/link flex items-center justify-between gap-3 py-3 transition hover:text-[#10233f]"><span>{company.shortName}</span><ArrowRight size={15} className="shrink-0 text-[#78be43] transition-transform duration-300 group-hover/link:translate-x-1" /></Link></li>)}</ul></article></AnimatedSection>)}</div><a href="https://www.anythingatsupun.lk/" target="_blank" rel="noopener noreferrer" className="group mt-5 grid items-center gap-6 overflow-hidden rounded-[1.5rem] border border-black/15 bg-[#111111] p-6 text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#ef3340]/70 hover:shadow-[0_18px_45px_rgba(17,17,17,.18)] md:grid-cols-[minmax(250px,.8fr)_1.25fr_auto] md:p-7"><div className="flex items-center gap-3"><span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2"><img src={camyBrandLogo} alt="Camy brand" className="h-full w-full object-contain" /></span><span className="flex min-h-20 flex-1 items-center rounded-2xl bg-white px-4 py-3"><img src={anythingAtSupunLogo} alt="Anything at Supun" className="h-auto w-full object-contain" /></span></div><div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#ef3340]">Official Camy shopping destination</p><h3 className="mt-2 text-2xl font-semibold normal-case text-white">Explore the Camy Brand</h3><p className="mt-2 leading-relaxed text-white/60">Shop Camy appliances, cookware, cooling products and more through Anything at Supun.</p></div><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ef3340] text-white transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={19} /></span></a></div>
      </div>
    </section>

    <section className="bg-[#f3f0e9] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" duration={800} triggerOnce={false}><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">Recognition</p><h2 className="mt-5 text-4xl font-semibold normal-case tracking-[-.04em] md:text-6xl">Medals and awards.</h2><p className="mt-5 max-w-2xl leading-relaxed text-[#667069]">Honours earned across the Group—from national manufacturing certification to industry and hospitality recognition.</p></div><Link to="/companies" className="group inline-flex items-center gap-3 font-semibold text-[#10233f]">Explore our companies <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10233f] text-white transition group-hover:translate-x-1 group-hover:bg-[#78be43]"><ArrowRight size={17} /></span></Link></div></AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((item, index) => {
            const medal = ["from-[#f5d77b] via-[#c9962f] to-[#8e641b]", "from-[#e9edf0] via-[#aeb9c2] to-[#77838d]", "from-[#e6b28a] via-[#b7723c] to-[#7e4729]"][index % 3];
            return <AnimatedSection key={`${item.award}-${item.awardedTo}`} animation="slide-up" delay={(index % 3) * 70} duration={600} triggerOnce={false}>
              <article className="group relative flex h-full min-h-[370px] flex-col overflow-hidden rounded-[1.35rem] border border-[#10233f]/10 bg-white px-7 pb-7 pt-36 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,35,63,.09)] sm:px-8 sm:pb-8">
                <div className="absolute left-1/2 top-0 h-32 w-28 -translate-x-1/2" aria-hidden="true">
                  <span className="absolute left-[18px] top-0 h-[78px] w-9 bg-[#10233f] [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]" />
                  <span className="absolute right-[18px] top-0 h-[78px] w-9 bg-[#315f9f] [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]" />
                  <span className={`absolute bottom-0 left-1/2 flex h-[82px] w-[82px] -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br shadow-[0_8px_22px_rgba(38,41,45,.28)] ring-1 ring-black/10 ${medal}`}>
                    <span className="absolute inset-[7px] rounded-full border border-white/45" />
                    <Award size={34} strokeWidth={1.8} className="relative text-white drop-shadow" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col text-center">
                  <h3 className="text-xl font-semibold normal-case leading-snug text-[#10233f]">{item.award}</h3>
                  <div className="mt-auto border-t border-[#10233f]/10 pt-5"><p className="font-semibold text-[#315f9f]">{item.awardedTo}</p><p className="mt-1.5 text-sm text-[#6a746d]">{item.givenBy}</p></div>
                </div>
              </article>
            </AnimatedSection>;
          })}
        </div>
      </div>
    </section>
  </div>
);

export default About;
