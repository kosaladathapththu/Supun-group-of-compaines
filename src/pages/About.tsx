import { Link } from "react-router-dom";
import { ArrowRight, Award, Factory, Hotel, Lightbulb, ShoppingBag, Target } from "lucide-react";
import Seo from "@/components/Seo";
import chairmanImage from "@/assets/Chairman.png";
import aboutHero from "@/assets/about-hero-v2.png";
import groupLogo from "@/assets/supun-group-of-companies-logo.png";
import { awards, coreValues, journey, leadership } from "@/data/siteContent";
import { companies } from "@/data/companies";

const stats = [
  ["1978", "Our story began"],
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
  <div className="min-h-screen bg-white text-[#10233f]">
    <Seo
      title="About Supun Group of Companies | Our Story Since 1978"
      description="Discover the story, leadership, vision, journey and values of Supun Group of Companies, a Sri Lankan family-run group with roots dating to 1978."
      keywords="Supun Group history, Mohamed Fareed, M.F.M. Kaleel, Sri Lanka manufacturing group, Supun Group leadership"
    />

    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#081a33] text-white">
      <img src={aboutHero} alt="Supun Group of Companies" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,25,49,.97)_0%,rgba(10,35,67,.90)_48%,rgba(8,29,56,.60)_100%)]" />
      <div className="container mx-auto flex min-h-[560px] items-end px-4 pb-16 pt-36">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/70"><span className="h-px w-9 bg-[#78be43]" /> About Supun Group</p>
          <h1 className="mt-6 text-5xl font-semibold normal-case leading-[.98] tracking-[-.045em] sm:text-6xl md:text-7xl">Rooted in Sri Lanka.<br /><span className="text-white/72">Built across generations.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">From a Colombo trading business to a connected group spanning manufacturing, retail, distribution and hospitality.</p>
        </div>
      </div>
    </section>

    <section id="story" className="scroll-mt-28 border-b border-[#10233f]/10 py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Our story</p>
            <h2 className="mt-4 text-4xl font-semibold normal-case leading-tight tracking-[-.035em] md:text-5xl">From trading goods to making them.</h2>
            <img src={groupLogo} alt="Supun Group of Companies" className="mt-8 w-52" />
          </div>
          <div className="space-y-5 text-base leading-8 text-[#5f6f84]">
            <p className="text-xl leading-9 text-[#10233f]">A family run business since 1978, Supun Group of Companies began when Mr. Mohamed Fareed founded Supun Traders in Colombo, trading household goods for Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over and formalized the Group, setting it on a new course: from trading goods to manufacturing them.</p>
            <p>Through structured growth, the Group is now involved in manufacturing, retail, distribution, and hospitality, each held to the same standard of quality and Sri Lankan craftsmanship. Under the Camy name, Supun manufactures SLS-certified motorcycle helmets, non-stick cookware, air conditioners, and fans entirely in its own factories.</p>
            <p>Supun Arcade Residency extends the Group into hospitality with luxury serviced apartments in central Colombo, alongside Area 56, its rooftop dining venue.</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 border-y border-[#10233f]/10 md:grid-cols-4">
          {stats.map(([value, label]) => <div key={label} className="border-[#10233f]/10 px-3 py-6 md:border-r md:last:border-r-0 md:px-6"><strong className="text-3xl font-semibold tracking-[-.04em] md:text-4xl">{value}</strong><p className="mt-1 text-sm text-[#65758a]">{label}</p></div>)}
        </div>
      </div>
    </section>

    <section id="chairman" className="scroll-mt-28 bg-[#f7f9fc] py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Chairman’s Message</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">A message from our Chairman.</h2></div>
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
          <div>
            <div className="border border-[#10233f]/10 bg-white px-4 pt-4"><img src={chairmanImage} alt="M.F.M. Kaleel, Chairman of Supun Group of Companies" className="mx-auto h-auto max-h-[470px] w-full object-contain object-bottom" /></div>
            <div className="pt-5"><h3 className="text-2xl font-semibold normal-case">M.F.M. Kaleel</h3><p className="mt-1 text-sm text-[#65758a]">Chairman, Supun Group of Companies</p></div>
          </div>
          <article className="space-y-5 border-l-2 border-[#315f9f] pl-6 text-base leading-8 text-[#5f6f84] md:pl-8">
            <p className="text-xl leading-9 text-[#10233f]">Since the company was established in 1999, Supun Group of Companies has cultivated its status as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of “Innovation &amp; Creativity”, we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p>
            <p>The business environment has experienced radical changes due to the rapid advancement of technology and natural environmental distresses. This has helped businesses to identify new opportunities and also challenged them with greater pressures for change in their approach. As a result, businesses continually change their conventional approach to a more agile, lean and forward-thinking structure in the perpetually changing environment.</p>
            <p>We too are constantly challenged by these competitive forces, be it natural or man-made, facing them positively and proactively with our dedicated team is what we always strive for.</p>
            <p>At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts to exceed their expectations. This has been the core of our success story and we strive to continue our journey in nurturing business goals through various new products and services in the future.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="direction" className="scroll-mt-28 bg-white py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Vision & Mission</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Clear direction. Long-term thinking.</h2></div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="border border-[#10233f]/10 bg-[#f7f9fc] p-7 md:p-9"><Lightbulb className="text-[#315f9f]" size={25} /><p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-[#65758a]">Our vision</p><h3 className="mt-3 text-3xl font-semibold normal-case">Innovate. Unleash and Excel.</h3><p className="mt-5 leading-7 text-[#65758a]">To unleash the potential within us to transform the markets through innovation and exceed people’s expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans.</p></article>
          <article className="border border-[#10233f]/10 bg-[#10233f] p-7 text-white md:p-9"><Target className="text-[#78be43]" size={25} /><p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-white/52">Our mission</p><h3 className="mt-3 text-3xl font-semibold normal-case">Superior thinking. Sustainable value.</h3><p className="mt-5 leading-7 text-white/68">To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders.</p></article>
        </div>
      </div>
    </section>

    <section id="journey" className="scroll-mt-28 border-y border-[#10233f]/10 bg-[#f7f9fc] py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Our journey</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Milestones, kept simple.</h2></div>
        <div className="border-t border-[#10233f]/12">
          {journey.map(([year, text]) => <div key={year} className="grid gap-3 border-b border-[#10233f]/10 py-5 md:grid-cols-[130px_1fr] md:gap-8 md:py-6"><strong className="text-xl font-semibold text-[#315f9f] md:text-2xl">{year}</strong><p className="leading-7 text-[#5f6f84]">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section id="leadership" className="scroll-mt-28 bg-white py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Leadership team</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">The people leading the Group.</h2></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leadership.map((person) => <article key={person.name} className="min-h-[150px] border border-[#10233f]/10 bg-[#fafbfd] p-5"><h3 className="text-lg font-semibold normal-case">{person.name}</h3><p className="mt-2 text-sm leading-6 text-[#65758a]">{person.title}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7f9fc] py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Core values</p>
            <h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">What guides us.</h2>
            <div className="mt-8 divide-y divide-[#10233f]/10 border-y border-[#10233f]/10">{coreValues.map((value) => <div key={value.title} className="py-5"><h3 className="font-semibold">{value.title}</h3><p className="mt-2 text-sm leading-6 text-[#65758a]">{value.description}</p></div>)}</div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Recognition</p>
            <h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">Awards & recognition.</h2>
            <div className="mt-8 divide-y divide-[#10233f]/10 border-y border-[#10233f]/10">{awards.map((item) => <div key={`${item.award}-${item.awardedTo}`} className="flex gap-4 py-5"><Award className="mt-1 shrink-0 text-[#315f9f]" size={19} /><div><h3 className="font-semibold">{item.award}</h3><p className="mt-1 text-sm leading-6 text-[#65758a]">{item.awardedTo} · {item.givenBy}</p></div></div>)}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 md:py-22">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#315f9f]">Group structure</p><h2 className="mt-4 text-4xl font-semibold normal-case tracking-[-.035em] md:text-5xl">11 companies across three sectors.</h2></div><Link to="/companies" className="inline-flex items-center gap-2 font-semibold">View company directory <ArrowRight size={17} /></Link></div>
        <div className="grid gap-4 lg:grid-cols-3">{groupSectors.map(({ title, icon: Icon, list }) => <div key={title} className="border border-[#10233f]/10 p-6"><div className="flex items-center gap-3"><Icon className="text-[#315f9f]" size={20} /><h3 className="text-xl font-semibold normal-case">{title}</h3></div><div className="mt-5 divide-y divide-[#10233f]/10 border-t border-[#10233f]/10">{list.map((company) => <Link key={company.id} to={`/companies/${company.id}`} className="flex items-center justify-between gap-3 py-3 text-sm text-[#5f6f84] hover:text-[#10233f]"><span>{company.shortName}</span><ArrowRight size={14} /></Link>)}</div></div>)}</div>
      </div>
    </section>
  </div>
);

export default About;
