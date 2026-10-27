import combinedCertificates from '@/assets/certificates/certificates-showcase.jpg';

export const CertificationSection = () => (
  <section aria-label="Made in Sri Lanka certifications" className="bg-[#f4efe5] py-3">
    <div className="container mx-auto max-w-7xl px-3 sm:px-5">
      <figure className="overflow-hidden rounded-2xl border border-[#d6c6a6] bg-white p-2 shadow-[0_8px_28px_rgba(76,55,25,.08)] sm:p-4">
        <a
          href={combinedCertificates}
          target="_blank"
          rel="noreferrer"
          aria-label="View the combined Made in Sri Lanka certificates at full size"
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <img
            src={combinedCertificates}
            alt="Made in Sri Lanka certifications for Aerostar Home Appliances, Camy Smart and New Camy Smart"
            width={2400}
            height={1358}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full object-contain"
          />
        </a>
        <figcaption className="mt-2 border-t border-[#e9dfcc] pt-3 text-center text-xs text-[#6d6557]">
          <a
            href={combinedCertificates}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm px-2 py-1 font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View full-size certificates
          </a>
        </figcaption>
      </figure>
    </div>
  </section>
);
