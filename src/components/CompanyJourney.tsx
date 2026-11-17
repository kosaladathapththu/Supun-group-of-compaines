import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CompanyLogo } from '@/components/CompanyLogo';
import { journey } from '@/data/siteContent';
import type { Company } from '@/data/companies';
import './CompanyJourney.css';
// Keep the timeline tied to the same logo assets used across the company pages.
const journeyCompanyLogos: Record<string, { id: string; name: string }[]> = {
  '1978': [{ id: 'supun-traders', name: 'Supun Traders' }],
  '1999': [{ id: 'group', name: 'Supun Group of Companies' }],
  '2003': [{ id: 'supun-super-center', name: 'Supun Super Center' }],
  '2010': [
    { id: 'supun-arcade-residency', name: 'Supun Arcade Residency' },
    { id: 'area-56', name: 'Area 56' },
  ],
  '2011': [{ id: 'supun-aerosoft', name: 'Supun Aerosoft' }],
  '2016': [{ id: 'aerostar-home-appliances', name: 'Aero Star' }],
  '2017': [
    { id: 'camy-smart', name: 'Camy Smart' },
    { id: 'rodsons', name: 'Rodsons' },
  ],
  '2018': [{ id: 'new-camy-smart', name: 'New Camy Smart' }],
  '2023': [{ id: 'fuji-industries', name: 'Air Condition and Fans manufacturing' }],
  Today: [
    { id: 'united-electricals-engineering', name: 'United Electricals Engineering' },
    { id: 'ecotemp', name: 'Ecotemp' },
  ],
};

const journeyTitles: Record<string, string> = {
  '1978': 'Where our story began',
  '1999': 'A new generation of leadership',
  '2003': 'A new retail destination',
  '2010': 'Welcoming Sri Lanka and the world',
  '2011': 'Stepping into manufacturing',
  '2016': 'Building more in-house',
  '2017': 'Safety, made in Sri Lanka',
  '2018': 'Everyday essentials, locally made',
  '2023': 'More comfort for Sri Lankan homes',
  Today: 'Our next chapter',
};

export function CompanyJourney({ companies }: { companies: Company[] }) {
  return (
    <section id="journey" className="company-journey" aria-labelledby="company-journey-title">
      <div className="company-journey-inner">
        <header className="company-journey-header">
          <div>
            <p className="company-journey-label">Our journey &middot; Since 1978</p>
            <h2 id="company-journey-title">
              One beginning.
              <br />
              <span>A world of possibilities.</span>
            </h2>
          </div>
          <div className="company-journey-intro">
            <p>
              From our first store in Colombo to the businesses shaping everyday life. Explore the
              chapters that made us who we are.
            </p>
            <a href="#company-journey-timeline">
              Explore our companies <ArrowDown size={17} />
            </a>
          </div>
        </header>
        <ol id="company-journey-timeline" className="company-journey-timeline">
          {journey.map(([year, description], index) => (
            <li key={year} className={year === 'Today' ? 'is-current' : ''}>
              <div className="company-journey-date">
                <span>{year === 'Today' ? '2026' : year}</span>
                <small>
                  {year === 'Today'
                    ? 'Today & beyond'
                    : 'Chapter ' + String(index + 1).padStart(2, '0')}
                </small>
              </div>
              <article className="company-journey-chapter">
                <div className="company-journey-copy">
                  <h3>{journeyTitles[year]}</h3>
                  <p>
                    {year === 'Today'
                      ? 'United Electricals Engineering and Ecotemp are part of our next chapter. Together, ' +
                        companies.length +
                        ' companies and 300+ people carry our story forward.'
                      : description + '.'}
                  </p>
                </div>
                <div className="company-journey-businesses">
                  {(journeyCompanyLogos[year] ?? []).map(({ id, name }) => {
                    const company = companies.find((c) => c.id === id);
                    return (
                      <Link
                        key={id}
                        to={id === 'group' ? '/about' : '/companies/' + id}
                        className="company-journey-business"
                        aria-label={'Explore ' + name}
                      >
                        <div className="company-journey-logo">
                          {id === 'group' ? (
                            <img
                              src="/supun-group-of-companies-logo.png"
                              alt={name}
                              loading="lazy"
                            />
                          ) : (
                            <CompanyLogo
                              companyId={id}
                              companyName={name}
                              placement="home"
                              className="h-full w-full"
                            />
                          )}
                        </div>
                        <div>
                          <strong>{company?.shortName ?? name}</strong>
                          <span>
                            {id === 'group'
                              ? 'Discover our story'
                              : (company?.industry ?? 'Explore company')}
                          </span>
                        </div>
                        <ArrowUpRight size={20} />
                      </Link>
                    );
                  })}
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="company-journey-associated">
          <div className="company-journey-copy">
            <h3>Connecting our businesses to everyday life.</h3>
            <p>Explore our retail and distribution companies across Sri Lanka.</p>
          </div>
          <div className="company-journey-businesses">
            {companies
              .filter(
                (company) =>
                  !Object.values(journeyCompanyLogos)
                    .flat()
                    .some((logo) => logo.id === company.id),
              )
              .map(({ id, shortName: name }) => {
                const company = companies.find((c) => c.id === id);
                return (
                  <Link
                    key={id}
                    to={id === 'group' ? '/about' : '/companies/' + id}
                    className="company-journey-business"
                    aria-label={'Explore ' + name}
                  >
                    <div className="company-journey-logo">
                      {id === 'group' ? (
                        <img src="/supun-group-of-companies-logo.png" alt={name} loading="lazy" />
                      ) : (
                        <CompanyLogo
                          companyId={id}
                          companyName={name}
                          placement="home"
                          className="h-full w-full"
                        />
                      )}
                    </div>
                    <div>
                      <strong>{company?.shortName ?? name}</strong>
                      <span>
                        {id === 'group'
                          ? 'Discover our story'
                          : (company?.industry ?? 'Explore company')}
                      </span>
                    </div>
                    <ArrowUpRight size={20} />
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="company-journey-end">
          <span />
          The story continues.
        </div>
      </div>
    </section>
  );
}
