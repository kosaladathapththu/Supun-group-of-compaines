import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";
import chairmanImage from "@/assets/Chairman.png";
import illustrator1 from "@/assets/illustrator-1.png";
import illustrator2 from "@/assets/illustrator-2.png";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="About Us | Supun Group of Companies"
        description="Learn about Supun Group of Companies - a diversified Sri Lankan conglomerate established in 1999, with 10 subsidiaries spanning manufacturing, retail, hospitality, and technology sectors."
        keywords="About Supun Group, Sri Lanka conglomerate, chairman message, our journey, core values, vision mission Sri Lanka"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCorporate})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Building Sri Lanka's Future Since 1999</p>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Chairman's Message</h2>
              <p className="text-lg text-muted-foreground">
                The Personality Behind the Success Story of Supun Group of Companies
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Chairman Image */}
                  <div className="md:col-span-1 flex justify-center items-start">
                    <div className="relative">
                      <img 
                        src={chairmanImage} 
                        alt="M.F.M. Kaleel - Chairman" 
                        className="w-full max-w-xs rounded-lg shadow-xl"
                      />
                      <div className="mt-4 text-center">
                        <p className="font-bold text-xl">M.F.M. Kaleel</p>
                        <p className="text-muted-foreground">Chairman</p>
                      </div>
                    </div>
                  </div>

                  {/* Chairman Message */}
                  <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
                    <p>
                      Since the company was established in 1999, Supun Group of Companies has cultivated its status 
                      as a pioneer in the manufacturing and the trading business. Guided by our corporate creed of 
                      "Innovation & Creativity", we have continued to challenge ourselves to provide a wide range of 
                      products and services locally and internationally through technology transfers, human commitment 
                      and professionalism.
                    </p>

                    <p>
                      The business environment has experienced radical changes due to the rapid advancement of technology 
                      and natural environmental distresses. This has helped businesses to identify new opportunities and 
                      also challenged them with greater pressures for change in their approach. As a result, businesses 
                      continually change their conventional approach to a more agile, lean and forward-thinking structure 
                      in the perpetually changing environment.
                    </p>

                    <p>
                      We too are constantly challenged by these competitive forces, be it natural or man-made, facing 
                      them positively and proactively with our dedicated team is what we always strive for.
                    </p>

                    <p>
                      At Supun, I am proud to be a part of an excellent team, that has dedicated themselves to the 
                      success story of a proud Sri Lankan entity. We continue to challenge ourselves to seize every 
                      opportunity within our reach enabling us to enrich the lives of our stakeholders in our efforts 
                      to exceed their expectations. This has been the core of our success story and we strive to continue 
                      our journey in nurturing business goals through various new products and service to the future.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl font-bold text-accent">1999</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                      <p className="text-muted-foreground">
                        Inheriting the business acumen from his parents; late Mr. M.F.M Mohomed and Mrs. Rameena Doole 
                        (founders), the current chairman, Mr. Kaleel ventured into the trading business, where he gradually 
                        developed and diversified the group's business portfolio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl font-bold text-accent">2000s</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Expansion & Diversification</h3>
                      <p className="text-muted-foreground">
                        The business interest expanded into the local manufacturing industry. The group further diversified 
                        its interest in non-related sectors such as Hospitality, Retail, and Consumer Goods.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl font-bold text-accent">Today</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">A Diversified Conglomerate</h3>
                      <p className="text-muted-foreground">
                        With strategic change in business operations to promote import substitution and local industry 
                        development, the SUPUN Group today has Ten (10) subsidiaries involved in a wide range of 
                        manufacturing and service-oriented operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative Illustrator Background */}
        <div className="absolute top-0 right-10 opacity-8 pointer-events-none">
          <img src={illustrator1} alt="" className="w-56 md:w-96 opacity-50" />
        </div>
        <div className="absolute bottom-0 left-10 opacity-8 pointer-events-none">
          <img src={illustrator2} alt="" className="w-56 md:w-96 opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-elegant">
              <CardContent className="p-8">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Award className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to delivering products and services that meet international standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-8">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Users className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">People First</h3>
                <p className="text-sm text-muted-foreground">
                  Valuing our employees, customers, and community as our greatest assets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-8">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Globe className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Reducing carbon footprint while enhancing livelihood of people
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardContent className="p-8">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Constantly challenging ourselves with creative solutions and new opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission Detail */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
                <p className="text-xl font-semibold italic mb-4">"Innovate. Unleash and Excel"</p>
                <p className="text-muted-foreground">
                  To unleash the potential within us to transform the markets through innovation and exceed the 
                  people's expectations for a better tomorrow through the goods and services which empower and 
                  enrich the lives of Sri Lankans.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-muted-foreground">
                  To harness superior thinking in the creation of products and services, which functionally enhances 
                  the livelihood of people, whilst being cautious in reducing the carbon footprint. We strive to 
                  integrate sustainable practices across all our business operations while delivering exceptional 
                  value to our stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
