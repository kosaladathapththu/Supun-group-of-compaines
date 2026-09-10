import { Award, Factory, Hotel, ShoppingBag, Truck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Seo from "@/components/Seo";
import chairmanImage from "@/assets/Chairman.png";
import heroCorporate from "@/assets/hero-corporate.jpg";
import { awards, coreValues, journey, leadership } from "@/data/siteContent";
import { companies } from "@/data/companies";

const About = () => (
  <div className="min-h-screen">
    <Seo
      title="About Supun Group of Companies | Our Story Since 1978"
      description="Discover the story, leadership, vision, journey and values of Supun Group of Companies, a Sri Lankan family-run group with roots dating to 1978."
      keywords="Supun Group history, Mohamed Fareed, M.F.M. Kaleel, Sri Lanka manufacturing group, Supun Group leadership"
    />

    <section className="relative min-h-[430px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroCorporate})` }} />
      <div className="absolute inset-0 bg-primary-dark/85" />
      <div className="container mx-auto px-4 relative z-10 text-white py-20">
        <p className="text-accent font-semibold uppercase tracking-[0.2em] mb-4">About Supun Group</p>
        <h1 className="text-5xl md:text-6xl normal-case mb-5">A family-run Sri Lankan business since 1978</h1>
        <p className="text-xl max-w-3xl text-white/85">
          From a Colombo trading business to a group spanning manufacturing, retail, distribution and hospitality.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <p className="text-accent font-semibold uppercase tracking-wider mb-3">Our Story</p>
          <h2 className="text-4xl normal-case mb-6">From trading goods to manufacturing them</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>A family run business since 1978, Supun Group of Companies began when Mr. Mohamed Fareed founded Supun Traders in Colombo, trading household goods for Sri Lankan homes. In 1999, his son, current Chairman Mr. M.F.M. Kaleel, took over the business and formalized it as the Supun Group of Companies, setting the Group on a new course: from trading goods to manufacturing them.</p>
            <p>Through structured growth, the Group is now involved in manufacturing, retail, distribution, and hospitality, each held to the same standard of quality and Sri Lankan craftsmanship. Under the Camy name, Supun manufactures SLS-certified motorcycle helmets, non-stick cookware, air conditioners, and fans in its own factories, reaching homes across the island through Supun Super Center and a network of 250+ distributors.</p>
            <p>Supun Arcade Residency extends the Group into hospitality with luxury serviced apartments in central Colombo, alongside Area 56, its rooftop dining venue. The Group credits its growth to two generations of family leadership and a shared commitment to quality, innovation, and Sri Lankan pride.</p>
          </div>
        </div>

        <Card className="shadow-elegant overflow-hidden"><CardContent className="p-0"><div className="grid grid-cols-2">
          <div className="p-7 bg-primary text-white"><div className="text-4xl font-bold text-accent">1978</div><p className="mt-2 text-white/80">The year Supun Traders began</p></div>
          <div className="p-7 bg-muted"><div className="text-4xl font-bold text-primary">11</div><p className="mt-2 text-muted-foreground">Companies across the Group</p></div>
          <div className="p-7 bg-muted"><div className="text-4xl font-bold text-primary">300+</div><p className="mt-2 text-muted-foreground">Employees</p></div>
          <div className="p-7 bg-primary text-white"><div className="text-4xl font-bold text-accent">250+</div><p className="mt-2 text-white/80">Island-wide distributors</p></div>
        </div></CardContent></Card>
      </div>
    </section>

    <section className="py-20 bg-muted/50"><div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
      <div className="text-center mb-10"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Chairman's Message</p><h2 className="text-4xl normal-case">The Personality Behind the Success Story of Supun Group of Companies</h2></div>
      <Card className="shadow-elegant"><CardContent className="p-8 md:p-10"><div className="grid md:grid-cols-[260px_1fr] gap-8">
        <div><img src={chairmanImage} alt="M.F.M. Kaleel, Chairman of Supun Group of Companies" className="rounded-xl shadow-lg w-full" /><div className="mt-4"><div className="font-bold text-xl">M.F.M. Kaleel</div><div className="text-muted-foreground">Chairman</div></div></div>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>Since the company was established in 1999, Supun Group of Companies has cultivated its status as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of "Innovation & Creativity", we have continued to challenge ourselves to provide a wide range of products and services locally and internationally through technology transfers, human commitment and professionalism.</p>
          <p>The business environment has experienced radical changes due to the rapid advancement of technology and natural environmental distresses. This has helped businesses to identify new opportunities and also challenged them with greater pressures for change in their approach. As a result, businesses continually change their conventional approach to a more agile, lean and forward-thinking structure in the perpetually changing environment.</p>
          <p>We too are constantly challenged by these competitive forces, be it natural or man-made, facing them positively and proactively with our dedicated team is what we always strive for.</p>
          <p>At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts to exceed their expectations. This has been the core of our success story and we strive to continue our journey in nurturing business goals through various new products and services in the future.</p>
        </div>
      </div></CardContent></Card>
    </div></div></section>

    <section className="py-20"><div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Leadership Team</p><h2 className="text-4xl normal-case">Leadership across the Group</h2></div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{leadership.map((person) => <Card key={person.name} className="h-full"><CardContent className="p-6"><div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"><Users size={21} /></div><h3 className="text-xl normal-case">{person.name}</h3><p className="text-accent font-semibold mt-1">{person.title}</p>{person.description && <p className="text-muted-foreground mt-3 leading-relaxed">{person.description}</p>}</CardContent></Card>)}</div>
    </div></section>

    <section className="py-20 bg-primary text-white"><div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
      <div className="p-8 border border-white/15 rounded-xl"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Our Vision</p><h2 className="text-3xl normal-case mb-5">Innovate. Unleash and Excel.</h2><p className="text-white/80 leading-relaxed">To unleash the potential within us to transform the markets through innovation and exceed people's expectations for a better tomorrow, through the goods and services which empower and enrich the lives of Sri Lankans.</p></div>
      <div className="p-8 border border-white/15 rounded-xl"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Our Mission</p><h2 className="text-3xl normal-case mb-5">Superior thinking. Sustainable value.</h2><p className="text-white/80 leading-relaxed">To harness superior thinking in the creation of products and services that functionally enhance the livelihood of people, while remaining cautious in reducing our carbon footprint. We integrate sustainable practices across our operations while delivering exceptional value to our stakeholders.</p></div>
    </div></section>

    <section className="py-20"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><p className="text-accent font-semibold uppercase tracking-wider mb-3 text-center">Our Journey</p><h2 className="text-4xl normal-case mb-12 text-center">Milestones since 1978</h2><div className="relative border-l-2 border-primary/20 ml-5 md:ml-24">
      {journey.map(([year, text]) => <div key={year} className="relative pl-8 md:pl-12 pb-10 last:pb-0"><div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-background" /><div className="md:flex md:gap-8"><div className="text-2xl font-bold text-primary md:w-24 shrink-0">{year}</div><p className="text-muted-foreground leading-relaxed mt-1 md:mt-0">{text}</p></div></div>)}
    </div></div></div></section>

    <section className="py-20 bg-muted/50"><div className="container mx-auto px-4"><div className="text-center mb-12"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Core Values</p><h2 className="text-4xl normal-case">What guides the Group</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{coreValues.map((value) => <Card key={value.title} className="h-full"><CardContent className="p-6"><h3 className="text-xl normal-case text-primary">{value.title}</h3><p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p></CardContent></Card>)}</div></div></section>

    <section className="py-20"><div className="container mx-auto px-4"><div className="text-center mb-12"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Group Structure</p><h2 className="text-4xl normal-case">One group, connected businesses</h2></div><div className="max-w-6xl mx-auto"><div className="bg-primary text-white rounded-xl p-6 text-center font-bold text-xl mb-8">Supun Group of Companies</div><div className="grid md:grid-cols-3 gap-6">
      {[{ title: "Manufacturing", icon: Factory, list: companies.filter((c) => c.industry === "Manufacturing") },{ title: "Retail & Distribution", icon: ShoppingBag, list: companies.filter((c) => c.industry === "Retail & Distribution") },{ title: "Hospitality", icon: Hotel, list: companies.filter((c) => c.industry === "Hospitality") }].map(({ title, icon: Icon, list }) => <Card key={title} className="h-full"><CardContent className="p-6"><div className="flex items-center gap-3 mb-5"><Icon className="text-primary" /><h3 className="text-xl normal-case">{title}</h3></div><ul className="space-y-3 text-muted-foreground">{list.map((company) => <li key={company.id}>{company.shortName}</li>)}</ul></CardContent></Card>)}
    </div><div className="mt-6 p-6 rounded-xl border border-accent/30 bg-accent/5 flex items-start gap-4"><Truck className="text-accent shrink-0 mt-1" /><div><h3 className="text-xl normal-case">The Camy Brand</h3><p className="text-muted-foreground mt-2">Camy products connect the Group's manufacturing companies with island-wide distribution and retail.</p></div></div></div></div></section>

    <section className="py-20 bg-muted/50"><div className="container mx-auto px-4"><div className="text-center mb-12"><p className="text-accent font-semibold uppercase tracking-wider mb-3">Awards & Recognition</p><h2 className="text-4xl normal-case">Recognition across the Group</h2></div><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">{awards.map((item) => <Card key={`${item.award}-${item.awardedTo}`}><CardContent className="p-6 flex gap-4"><Award className="text-accent shrink-0 mt-1" /><div><h3 className="text-lg normal-case">{item.award}</h3><p className="text-primary font-semibold mt-2">{item.awardedTo}</p><p className="text-sm text-muted-foreground mt-1">{item.givenBy}</p></div></CardContent></Card>)}</div></div></section>
  </div>
);

export default About;
