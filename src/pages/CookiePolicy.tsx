import Seo from '@/components/Seo';

const CookiePolicy = () => (
  <main className="min-h-screen bg-[#f5f6f4] text-[#10233f]">
    <Seo
      title="Cookie Policy | Supun Group of Companies"
      description="Learn how Supun Group of Companies uses necessary and optional cookies and how you can manage your preferences."
      path="/cookie-policy"
    />
    <section className="border-b border-[#10233f]/10 bg-white px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">
          Privacy & transparency
        </p>
        <h1 className="mt-5 text-5xl font-bold normal-case tracking-[-.045em] md:text-7xl">
          Cookie Policy
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          This page explains how cookies are used on supuncompanies.com and how visitors can control
          optional cookies.
        </p>
      </div>
    </section>
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-[#10233f]/10 bg-white p-6 shadow-sm sm:p-10">
        <div>
          <h2 className="text-2xl font-bold normal-case">What is a cookie?</h2>
          <p className="mt-3 leading-7 text-slate-600">
            A cookie is a small text value stored by your browser. It can remember a preference or
            support website features between page visits.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold normal-case">Necessary cookie</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The site stores <strong>supun_cookie_consent</strong> to remember whether you accepted
            or rejected optional cookies. It is kept for up to 180 days and is required for the
            cookie preference feature.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold normal-case">Optional cookies</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Analytics and marketing categories are consent-controlled. The current website does not
            activate optional tracking merely because this preference screen exists; any future
            analytics or marketing service should be loaded only after the relevant consent has been
            granted.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold normal-case">Change your choice</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Use the <strong>Cookie Settings</strong> link in the website footer at any time to
            reopen the preference panel and update your choice.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold normal-case">Questions</h2>
          <p className="mt-3 leading-7 text-slate-600">
            For questions about this policy, contact Supun Group of Companies at{' '}
            <a
              className="font-semibold text-[#315f9f] hover:underline"
              href="mailto:info@supungroup.lk"
            >
              info@supungroup.lk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default CookiePolicy;
