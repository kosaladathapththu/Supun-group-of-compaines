import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Send,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react';
import Seo from '@/components/Seo';
import careersHero from '@/assets/careers-hero-team.png';
import learningImage from '@/assets/careers-learn-through-work.png';
import growthImage from '@/assets/careers-grow-across-group.png';
import changeImage from '@/assets/careers-make-change.png';
import './Careers.css';

const reasons = [
  {
    title: 'Learn through real work',
    reveal: 'Build practical, career-ready experience.',
    icon: GraduationCap,
    image: learningImage,
  },
  {
    title: 'Grow across a Group',
    reveal: 'Connect your potential to eleven businesses.',
    icon: Users,
    image: growthImage,
  },
  {
    title: 'Make useful change',
    reveal: 'Turn good ideas into visible improvements.',
    icon: Sparkles,
    image: changeImage,
  },
];

const areas = [
  {
    name: 'Manufacturing',
    text: 'Build practical experience in production, engineering, quality, maintenance and supply chain.',
    icon: Factory,
  },
  {
    name: 'Retail & Distribution',
    text: 'Help serve customers through sales, store operations, logistics, merchandising and e-commerce.',
    icon: ShoppingBag,
  },
  {
    name: 'Hospitality',
    text: 'Create memorable guest experiences across front office, operations, food and beverage and service.',
    icon: Hotel,
  },
  {
    name: 'Group Services',
    text: 'Support every business through finance, people, marketing, administration and technology.',
    icon: Building2,
  },
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
      />
      <section className="career-hero px-5 pt-0 md:px-8">
        <img
          className="career-hero-image"
          src={careersHero}
          alt="A diverse team of Sri Lankan professionals in a modern workplace"
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
              Join teams that manufacture, serve, distribute and create experiences across Sri
              Lanka. Bring your skills, learn from real work and grow with a diverse group of
              businesses.
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
          <div className="career-stats">
            <div className="career-stat">
              <Users className="text-[#efc66f]" />
              <strong className="mt-8 block text-4xl">300+</strong>
              <span className="mt-2 block text-sm text-white/55">People across the Group</span>
            </div>
            <div className="career-stat">
              <Building2 className="text-[#efc66f]" />
              <strong className="mt-8 block text-4xl">11</strong>
              <span className="mt-2 block text-sm text-white/55">Connected companies</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">
            Find your place
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-bold leading-none tracking-[-.04em] md:text-6xl">
              One Group. Many ways to contribute.
            </h2>
            <p className="max-w-xl leading-7 text-[#526277] md:justify-self-end">
              Choose an area that matches your experience or interests. Roles may be available
              across different Supun Group companies and locations.
            </p>
          </div>
          <div className="area-grid mt-12">
            {areas.map(({ name, text, icon: Icon }) => (
              <a
                key={name}
                href="#opportunities"
                onClick={() => setSelected(name)}
                className="area-card group"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f8f0df] text-[#9a6b16]">
                  <Icon />
                </span>
                <span className="mt-auto">
                  <small className="font-bold uppercase tracking-[.15em] text-[#315f9f]">
                    Career area
                  </small>
                  <h3 className="mt-3 text-2xl font-bold">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#56677c]">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                    Explore <ArrowRight size={15} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#cdbd9e]/50 bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">Why Supun</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-.04em] md:text-5xl">
              A place to learn, contribute and progress.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#56677c]">
              We value practical thinking, teamwork and people who take pride in improving how work
              gets done.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map(({ title, reveal, icon: Icon, image }) => (
              <article key={title} className="why-card" tabIndex={0}>
                <img className="why-photo" src={image} alt="" loading="lazy" />
                <span className="why-shade" aria-hidden="true" />
                <div className="why-content">
                  <span className="why-icon">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-white">{title}</h3>
                  <div className="why-reveal">
                    <span className="why-reveal-label">What you&rsquo;ll gain</span>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{reveal}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-5 py-20 md:px-8 md:py-28">
        <div className="career-shell">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#9a6b16]">
            Current vacancies
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">
            Explore available roles.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#56677c]">
            Select a career area to check current openings. If no suitable role is listed, you can
            still send us your profile for future consideration.
          </p>
          <div className="jobs-layout mt-10">
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
              Tell us where you could make a difference.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Complete the form and we will prepare an email containing your details. You can review
              it before sending it to our team.
            </p>
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5">
              <strong className="text-sm">Remember your CV</strong>
              <p className="mt-2 text-sm leading-6 text-white/65">
                The form cannot attach files automatically. Add your latest CV to the prepared email
                before you press send.
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
