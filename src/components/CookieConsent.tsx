import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings2, ShieldCheck, X } from 'lucide-react';

const COOKIE_NAME = 'supun_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const readConsent = (): CookiePreferences | null => {
  if (typeof document === 'undefined') return null;
  const raw = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`))
    ?.split('=')
    .slice(1)
    .join('=');

  if (!raw) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
};

const writeConsent = (preferences: CookiePreferences) => {
  const value = encodeURIComponent(
    JSON.stringify({
      version: 1,
      ...preferences,
      updatedAt: new Date().toISOString(),
    }),
  );
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent('supun:cookie-consent-changed', { detail: preferences }));
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = readConsent();
    if (saved) setPreferences(saved);
    else setVisible(true);

    const openSettings = () => {
      setPreferences(readConsent() || defaultPreferences);
      setShowPreferences(true);
      setVisible(true);
    };

    window.addEventListener('supun:open-cookie-settings', openSettings);
    return () => window.removeEventListener('supun:open-cookie-settings', openSettings);
  }, []);

  const save = (next: CookiePreferences) => {
    writeConsent(next);
    setPreferences(next);
    setShowPreferences(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,35,63,.22)]">
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf4e8] text-[#5c9c30] sm:flex">
            <Cookie size={23} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#5c9c30]">
                  Your privacy
                </p>
                <h2 className="mt-1 text-xl font-bold normal-case text-[#10233f] sm:text-2xl">
                  Cookie preferences
                </h2>
              </div>
              {readConsent() && (
                <button
                  type="button"
                  onClick={() => setVisible(false)}
                  className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
                  aria-label="Close cookie settings"
                >
                  <X size={19} />
                </button>
              )}
            </div>

            {!showPreferences ? (
              <>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                  We use a necessary cookie to remember your privacy choice. Optional analytics or
                  marketing cookies will only be used if you allow them. You can change your choice
                  at any time.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => save({ necessary: true, analytics: true, marketing: true })}
                    className="rounded-full bg-[#10233f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173f72]"
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={() => save(defaultPreferences)}
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#10233f] transition hover:border-[#10233f]"
                  >
                    Reject optional
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#10233f] transition hover:border-[#78be43]"
                  >
                    <Settings2 size={16} /> Manage preferences
                  </button>
                  <Link
                    to="/cookie-policy"
                    className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-[#315f9f] hover:underline"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </>
            ) : (
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 shrink-0 text-[#5c9c30]" size={20} />
                    <div>
                      <p className="font-bold text-[#10233f]">Necessary cookies</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">
                        Required to remember your cookie choice and keep core site functions
                        working.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#edf4e8] px-3 py-1 text-xs font-bold text-[#5c9c30]">
                    Always on
                  </span>
                </div>
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-bold text-[#10233f]">Analytics cookies</p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Allow anonymous usage measurement when analytics is connected.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                    }
                    className="h-5 w-5 accent-[#78be43]"
                  />
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-bold text-[#10233f]">Marketing cookies</p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      Allow advertising or campaign measurement if those services are added later.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                    }
                    className="h-5 w-5 accent-[#78be43]"
                  />
                </label>
                <div className="flex flex-col gap-2.5 pt-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => save(preferences)}
                    className="rounded-full bg-[#10233f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173f72]"
                  >
                    Save preferences
                  </button>
                  <button
                    type="button"
                    onClick={() => save(defaultPreferences)}
                    className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#10233f]"
                  >
                    Reject optional
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-3 text-sm font-semibold text-slate-600"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
