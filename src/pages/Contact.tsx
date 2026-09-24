import { FormEvent, type CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CompanyLogo } from '@/components/CompanyLogo';
import Seo, { SITE_NAME, SITE_URL } from '@/components/Seo';
import { companies } from '@/data/companies';
import heroImage from '@/assets/contact-hero-v2.png';

const methods = [
  {
    label: 'Email us',
    value: 'info@supungroup.lk',
    note: 'General and corporate enquiries',
    href: 'mailto:info@supungroup.lk',
    icon: Mail,
  },
  {
    label: 'Call us',
    value: '+94 112 055 026',
    note: 'Monday–Friday, 9 AM–6 PM',
    href: 'tel:+94112055026',
    icon: Phone,
  },
  {
    label: 'Visit us',
    value: 'Colombo, Sri Lanka',
    note: 'Supun Group head office',
    href: 'https://maps.google.com/?q=Colombo,Sri+Lanka',
    icon: MapPin,
  },
];

const brandColours: Record<string, string> = {
  'supun-traders': '#e5222a',
  'supun-super-center': '#d9aa00',
  'supun-arcade-residency': '#00a6d6',
  'area-56': '#17253b',
  'supun-aerosoft': '#e32b37',
  'aerostar-home-appliances': '#1e6b8d',
  'camy-smart': '#ef2029',
  rodsons: '#315f9f',
  'new-camy-smart': '#ef2029',
  'fuji-industries': '#315f9f',
  'camy-global': '#ef2029',
};

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${String(data.get('fullName') || 'Visitor')}`;
    const body = [
      `Name: ${data.get('fullName') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Company: ${data.get('companyName') || ''}`,
      '',
      String(data.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:info@supungroup.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#f4efe5] text-[#10233f]">
      <Seo
        title="Contact Supun Group of Companies | Colombo, Sri Lanka"
        description="Contact Supun Group of Companies in Colombo, Sri Lanka."
        keywords="Contact Supun Group, Supun Group Colombo, info@supungroup.lk"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          email: 'info@supungroup.lk',
          telephone: '+94 112 055 026',
        }}
      />

      <section className="relative isolate overflow-hidden pb-28 pt-40 text-white md:pb-36 md:pt-48">
        <img
          src={heroImage}
          alt="Supun Group corporate offices"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031326]/92 via-[#071d37]/55 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#efbd55]">
              Contact Supun Group
            </p>
            <h1 className="mt-5 text-5xl font-semibold normal-case leading-[.98] tracking-[-.05em] sm:text-6xl md:text-7xl">
              Let’s start a conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Whether it is a business proposal, company enquiry or general question, we will
              connect you with the right team.
            </p>
            <a
              href="#send-enquiry"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#efbd55] px-7 py-4 font-bold text-[#071d37] transition hover:bg-white"
            >
              Send an enquiry <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-4">
        <div className="container mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {methods.map(({ label, value, note, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Visit us' ? '_blank' : undefined}
              rel={label === 'Visit us' ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-[#cdbd9e] bg-[#fffaf0] p-5 shadow-[0_16px_38px_rgba(76,55,25,.15)] ring-1 ring-white/80 transition hover:-translate-y-1 hover:border-[#b9944e] hover:bg-white"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#dfcca3] bg-[#f5e7c8] text-[#8a651d]">
                <Icon size={21} />
              </span>
              <span className="min-w-0">
                <small className="text-[10px] font-bold uppercase tracking-[.15em] text-[#806f55]">
                  {label}
                </small>
                <strong className="mt-1 block truncate text-sm text-[#10233f]">{value}</strong>
                <span className="mt-1 block text-xs text-[#766d60]">{note}</span>
              </span>
              <ArrowUpRight
                className="ml-auto shrink-0 text-[#8a651d]/55 transition group-hover:text-[#5c9c30]"
                size={18}
              />
            </a>
          ))}
        </div>
      </section>

      <section id="send-enquiry" className="scroll-mt-28 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#cdbd9e] bg-[#fffaf0] shadow-[0_26px_70px_rgba(76,55,25,.14)] ring-1 ring-white">
          <div className="grid lg:grid-cols-5">
            <div className="relative overflow-hidden bg-[#0b2747] p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
              <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[45px] border-white/[.04]" />
              <p className="relative text-xs font-bold uppercase tracking-[.2em] text-[#9bd36d]">
                One message. The right team.
              </p>
              <h2 className="relative mt-4 text-4xl font-semibold normal-case leading-tight tracking-[-.04em]">
                Tell us what you need.
              </h2>
              <p className="relative mt-5 max-w-md leading-7 text-white/65">
                Complete the form once and we will direct your enquiry to the relevant company or
                department.
              </p>
              <div className="relative mt-10 space-y-4 border-t border-white/15 pt-7">
                <div className="flex gap-3">
                  <ShieldCheck className="shrink-0 text-[#efbd55]" size={19} />
                  <p className="text-sm leading-6 text-white/70">
                    <strong className="block text-white">Your details stay private</strong>Used only
                    to respond to this enquiry.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="shrink-0 text-[#efbd55]" size={19} />
                  <p className="text-sm leading-6 text-white/70">
                    <strong className="block text-white">Prompt response</strong>Usually answered
                    the next business day.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#fffaf0] p-7 sm:p-10 lg:col-span-3 lg:p-12">
              <div className="mb-8 flex items-center justify-between border-b border-[#bcae95]/40 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#5c9c30]">
                    Your enquiry
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold normal-case">How can we help?</h2>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cfb879] bg-[#f5e7c8] text-[#8a651d]">
                  <Send size={20} />
                </span>
              </div>
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-xs font-bold uppercase tracking-wider text-[#627187]"
                  >
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-2 h-12 rounded-xl bg-[#f7f9fb]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-[#627187]"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 h-12 rounded-xl bg-[#f7f9fb]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-[#627187]"
                  >
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    className="mt-2 h-12 rounded-xl bg-[#f7f9fb]"
                    placeholder="+94"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="companyName"
                    className="text-xs font-bold uppercase tracking-wider text-[#627187]"
                  >
                    Company
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    className="mt-2 h-12 rounded-xl bg-[#f7f9fb]"
                    placeholder="Optional"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-[#627187]"
                  >
                    Your message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 resize-none rounded-xl bg-[#f7f9fb]"
                    placeholder="Tell us briefly about your enquiry..."
                  />
                </div>
                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-xs text-[#718095]">
                    <ShieldCheck size={15} className="text-[#5c9c30]" />
                    Used only to answer this enquiry.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#10233f] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#5c9c30]"
                  >
                    Prepare email <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#cdbd9e]/60 bg-[#eee5d5] px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 border-b border-[#9e8b68]/30 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#5c9c30]">
                Company directory
              </p>
              <h2 className="mt-3 text-4xl font-semibold normal-case tracking-[-.04em] md:text-5xl">
                Contact a business directly.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#5c6470]">
              Already know who you need? Connect directly with a Supun Group company.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {companies.map((company) => {
              const destination =
                company.website ||
                (company.email
                  ? `mailto:${company.email}`
                  : company.phone
                    ? `tel:${company.phone.replace(/[^+\d]/g, '')}`
                    : 'mailto:info@supungroup.lk');
              return (
                <article
                  key={company.id}
                  className="relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-[#c8b99d] bg-[#fffaf0] shadow-[0_12px_30px_rgba(76,55,25,.11)] ring-1 ring-white/80 transition hover:-translate-y-1 hover:border-[#ad956d] hover:shadow-[0_20px_44px_rgba(76,55,25,.17)]"
                  style={{ '--brand': brandColours[company.id] || '#315f9f' } as CSSProperties}
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[var(--brand)]" />
                  <CompanyLogo
                    companyId={company.id}
                    companyName={company.shortName}
                    className="h-36 w-full border-b border-[#c8b99d]/55 bg-[#fffdf8] p-5"
                    imageClassName="h-full w-full object-contain"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-[#d8c9ad] bg-[#f4ead8] px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#315f9f]">
                        {company.industry}
                      </span>
                      {company.established && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#786e5d]">
                          Since {company.established}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-xl font-bold normal-case">{company.shortName}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#5e6672]">
                      {company.tagline}
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#aa9878]/30 pt-4">
                      <Building2 size={16} className="shrink-0 text-[var(--brand)]" />
                      <span className="min-w-0 flex-1 truncate text-xs font-semibold text-[#48596b]">
                        {company.phone || company.email || 'Group office'}
                      </span>
                      <a
                        href={destination}
                        target={company.website ? '_blank' : undefined}
                        rel={company.website ? 'noopener noreferrer' : undefined}
                        className="inline-flex h-10 items-center gap-2 rounded-full bg-[#10233f] px-4 text-xs font-bold text-white transition hover:bg-[#5c9c30]"
                      >
                        {company.website ? (
                          <Globe2 size={15} />
                        ) : company.email ? (
                          <Mail size={15} />
                        ) : (
                          <Phone size={15} />
                        )}
                        {company.website ? 'Website' : company.email ? 'Email' : 'Call'}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
