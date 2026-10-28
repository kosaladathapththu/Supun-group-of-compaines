import { FormEvent, useState } from 'react';
import { ArrowRight, Send, Sparkles } from 'lucide-react';
import Seo, { SITE_NAME, SITE_URL } from '@/components/Seo';
import careersHero from '@/assets/optimized/careers-hero-team.jpg';
import './Careers.css';

const areas = [
  { name: 'Manufacturing' },
  { name: 'Retail & Distribution' },
  { name: 'Hospitality' },
  { name: 'Group Services' },
];

const careerAreaNames = ['All areas', ...areas.map((area) => area.name)];

const Careers = () => {
  const [selected, setSelected] = useState('All areas');

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
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      <section className="career-hero px-5 pt-0 md:px-8">
        <img
          className="career-hero-image"
          src={careersHero}
          alt="A diverse team of Sri Lankan professionals in a modern workplace"
          decoding="async"
        />
        <div className="career-shell career-hero-grid relative z-10">
          <div className="pb-16 pr-6 md:pb-24 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#efc66f]">
              <span className="h-px w-11 bg-[#dca43a]" /> Careers at Supun
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl lg:text-[5.4rem]">
              Build your future with Supun Group.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Build your skills across manufacturing, retail, distribution and hospitality in Sri
              Lanka.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-3 rounded-full bg-[#dca43a] px-7 py-4 text-sm font-bold text-[#10233f] transition hover:bg-[#78be43]"
              >
                View opportunities <ArrowRight size={17} />
              </a>
              <a
                href="#talent"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition hover:bg-white/10"
              >
                Send your profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="career-benefits px-5 md:px-8" aria-label="Working at Supun">
        <div className="career-shell grid gap-5 border-b border-[#cdbd9e]/50 py-5 sm:grid-cols-3">
          {[
            ['Learn by doing', 'Build practical skills through real work.'],
            ['Grow with us', 'Explore opportunities across 13 companies.'],
            ['Make a difference', 'Bring your ideas to a team that values them.'],
          ].map(([title, copy]) => (
            <div key={title}>
              <h2 className="!text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-[#56677c]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">
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
            <div className="vacancy-panel" role="status">
              <span className="vacancy-panel-icon">
                <Sparkles size={22} />
              </span>
              <div>
                <span className="vacancy-status">{selected}</span>
                <h3 className="mt-2 text-2xl font-bold normal-case tracking-[-.025em] text-[#071b2d]">
                  No vacancies are listed in this area right now.
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#56677c]">
                  Please check again later. You can also register your interest using the form in
                  the next section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talent" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="career-shell talent-grid">
          <div className="talent-copy">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#efc66f]">
              Register your interest
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em]">
              Join our talent pool.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Tell us about yourself and the work you?re interested in.
            </p>
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
                <input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="career-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="career-field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" placeholder="+94" />
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
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#10233f] px-7 py-4 text-sm font-bold text-white"
                >
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
