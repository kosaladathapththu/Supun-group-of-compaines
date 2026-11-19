import { FormEvent, useState } from 'react';
import { ArrowRight, Send, BriefcaseBusiness, MapPin, Mail } from 'lucide-react';
import Seo, { SITE_NAME, SITE_URL } from '@/components/Seo';
import careersHero from '@/assets/optimized/careers-hero-team.jpg';
import './Careers.css';

const areas = [
  { name: 'Manufacturing' },
  { name: 'Retail & Distribution' },
  { name: 'Hospitality' },
  { name: 'Engineering Services' },
  { name: 'Group Services' },
];

const careerAreaNames = ['All areas', ...areas.map((area) => area.name)];

const HR_EMAIL = 'hr.supungroup@gmail.com';

const vacancies = [
  {
    id: 'cashier',
    title: 'Cashier',
    company: 'Supun Super Center',
    location: 'Bambalapitiya',
    area: 'Retail & Distribution',
    employment: 'Full-time',
    details: 'Customer service and cashier operations. G.C.E. O/L or A/L, computer literacy and a friendly approach. The poster specifies female candidates aged 18–30.',
    benefits: 'Free accommodation provided',
  },
  {
    id: 'sales-assistant',
    title: 'Sales Assistant',
    company: 'Supun Super Center',
    location: 'Bambalapitiya',
    area: 'Retail & Distribution',
    employment: 'Full-time',
    details: 'G.C.E. O/L, friendly customer service and a willingness to help shoppers. The poster specifies male candidates aged 18–30.',
    benefits: 'Accommodation, commissions and incentives in addition to salary',
  },
  {
    id: 'business-analyst-intern',
    title: 'Intern – Business Analyst (Accounts Focus)',
    company: 'Supun Group of Companies',
    location: 'Supun Arcade, Wellawatta',
    area: 'Group Services',
    employment: 'Paid internship',
    details: 'For accounting, finance, business analytics or related students and recent graduates. Basic accounting knowledge, Excel/Google Sheets, analytical skills and communication are useful.',
    benefits: 'Paid internship, lunch, industry exposure and mentorship',
  },
  {
    id: 'sales-representative',
    title: 'Sales Representative',
    company: 'Supun Aerosoft (Pvt) Ltd',
    location: 'Islandwide travel',
    area: 'Retail & Distribution',
    employment: 'Full-time',
    details: 'Develop new dealers and customers, promote products, handle orders and collections, and prepare sales reports. G.C.E. A/L or higher, good communication and a valid driving licence are required. Two years of sales/marketing experience is an advantage.',
    benefits: 'Opportunity to grow a sales network',
  },
] as const;

const applicationLink = (role: string) => {
  const body = [
    'Dear HR Team,',
    '',
    'I would like to apply for the above vacancy. Please find my CV attached.',
    '',
    'Name:',
    'Phone:',
    '',
    'Thank you.',
  ].join('\\n');
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Application for ${role}`)}&body=${encodeURIComponent(body)}`;
};

const Careers = () => {
  const [selected, setSelected] = useState('All areas');
  const visibleVacancies = vacancies.filter((job) => selected === 'All areas' || job.area === selected);

  const submitInterest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || 'Candidate');
    const subject = `Career interest — ${String(data.get('area') || 'General')} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Career area: ${data.get('area') || ''}`,
      `Profile: ${data.get('profile') || ''}`,
      '',
      String(data.get('message') || ''),
      '',
      'Please attach your CV before sending.',
    ].join('\n');
    window.location.href = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="career-page min-h-screen text-[#10233f]">
      <Seo
        title="Careers | Supun Group of Companies"
        description="Explore careers across Supun Group companies in manufacturing, retail, distribution and hospitality."
        keywords="Supun Group careers, jobs Sri Lanka, manufacturing jobs, retail jobs, hospitality jobs"
        path="/careers"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              name: `Careers at ${SITE_NAME}`,
              url: `${SITE_URL}/careers`,
              description:
                'Career opportunities across Supun Group companies in manufacturing, retail, distribution and hospitality in Sri Lanka.',
              about: { '@id': `${SITE_URL}/#organization` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Careers',
                  item: `${SITE_URL}/careers`,
                },
              ],
            },
          ],
        }}
      />
      <section className="career-hero" aria-labelledby="career-title">
        <div className="career-shell career-hero-grid">
          <div className="career-hero-copy">
            <p className="career-eyebrow">Your next chapter</p>
            <h1 id="career-title">
              Good people.
              <br />
              Great possibilities.
              <br />
              <span>Grow with Supun.</span>
            </h1>
            <p className="career-hero-description">
              Bring your skills, your ideas and your ambition. Build a meaningful career with
              businesses that touch everyday life across Sri Lanka.
            </p>
            <div className="career-hero-actions">
              <a href="#opportunities" className="career-primary">
                Explore opportunities <ArrowRight size={18} />
              </a>
              <a href="#talent" className="career-text-link">
                Introduce yourself <ArrowRight size={16} />
              </a>
            </div>
            <p className="career-hero-note">Sri Lankan roots. A shared future.</p>
          </div>
          <div className="career-hero-visual">
            <img src={careersHero} alt="Sri Lankan colleagues working together" decoding="async" />
            <div className="career-photo-caption">
              <span>People make the difference.</span>
              <strong>Be part of what comes next.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="career-benefits px-5 md:px-8" aria-label="Working at Supun">
        <div className="career-shell grid gap-5 border-b border-[#d4e2ee]/50 py-5 sm:grid-cols-3">
          {[
            ['Learn by doing', 'Build practical skills through real work.'],
            ['Grow with us', 'Explore different businesses across the Group.'],
            ['Make a difference', 'Bring your ideas to a team that values them.'],
          ].map(([title, copy], index) => (
            <div key={title} className="career-benefit">
              <span className="career-benefit-number">0{index + 1}</span>
              <h2 className="!text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-[#56677c]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#315f9f]">
            Current vacancies
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">
            Find your next role.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#56677c]">
            Choose an area or send your profile for future opportunities.
          </p>
          <div className="jobs-layout mt-6">
            <div className="job-filters" aria-label="Filter vacancies by career area">
              {careerAreaNames.map((areaName) => (
                <button
                  key={areaName}
                  type="button"
                  onClick={() => setSelected(areaName)}
                  className={`filter-button ${selected === areaName ? 'active' : ''}`}
                  aria-pressed={selected === areaName}
                >
                  <span>{areaName}</span>
                  <ArrowRight size={15} />
                </button>
              ))}
            </div>
            <div className="career-vacancies" aria-live="polite">
              {visibleVacancies.length > 0 ? (
                visibleVacancies.map((job) => (
                  <article className="career-job-card" key={job.id}>
                    <div className="career-job-topline">
                      <span className="career-job-tag">{job.area}</span>
                      <span className="career-job-employment">{job.employment}</span>
                    </div>
                    <h3>{job.title}</h3>
                    <p className="career-job-company">{job.company}</p>
                    <p className="career-job-location"><MapPin size={15} aria-hidden="true" />{job.location}</p>
                    <p className="career-job-details">{job.details}</p>
                    <p className="career-job-benefits"><strong>Benefits:</strong> {job.benefits}</p>
                    <div className="career-job-footer">
                      <a href={applicationLink(job.title)} className="career-primary">
                        Apply now <Mail size={16} aria-hidden="true" />
                      </a>
                      <span>Attach your CV in the email</span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="vacancy-panel">
                  <span className="vacancy-panel-icon"><BriefcaseBusiness size={26} /></span>
                  <div>
                    <span className="vacancy-status">{selected}</span>
                    <h3 className="mt-2 text-2xl font-bold normal-case">No vacancies listed in this area</h3>
                    <p className="mt-2 text-sm text-[#56677c]">You can still share your profile for future opportunities.</p>
                    <a href="#talent" className="career-text-link">Register your interest <ArrowRight size={16} /></a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="talent" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="career-shell talent-grid">
          <div className="talent-copy">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#a8d17c]">
              Register your interest
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em]">
              Join our talent pool.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Tell us about yourself and the work you are interested in.
            </p>
            <ol className="career-application-steps">
              <li>
                <span>01</span>Tell us about yourself
              </li>
              <li>
                <span>02</span>Review your prepared email
              </li>
              <li>
                <span>03</span>Attach your CV and send
              </li>
            </ol>
            <div className="mt-6 border-t border-white/20 pt-5">
              <strong className="text-sm">Remember your CV</strong>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Attach your CV to the prepared email before sending.
              </p>
            </div>
          </div>
          <div className="talent-form">
            <form onSubmit={submitInterest} className="form-grid">
              <div className="career-field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
              </div>
              <div className="career-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </div>
              <div className="career-field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+94" />
              </div>
              <div className="career-field">
                <label htmlFor="area">Career area</label>
                <select
                  id="area"
                  name="area"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {['All areas', ...areas.map((a) => a.name)].map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="career-field md:col-span-2">
                <label htmlFor="profile">LinkedIn or portfolio</label>
                <input id="profile" name="profile" placeholder="Optional link" />
              </div>
              <div className="career-field md:col-span-2">
                <label htmlFor="message">Brief introduction</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your experience and interests"
                />
              </div>
              <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-[#708095]">
                  Submitting opens your email app. Nothing is sent until you review and send the
                  email.
                </p>
                <button type="submit" className="career-primary">
                  Prepare email <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
