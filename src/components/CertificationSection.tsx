import { Link } from 'react-router-dom';
import { Expand } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import camySmartCertificate from '@/assets/certificates/camy-smart-certificate-full.png';
import newCamySmartCertificate from '@/assets/certificates/new-camy-smart-certificate-full.png';
import aerostarCertificate from '@/assets/certificates/aerostar-certificate-full.png';

const certificates = [
  { name: 'Camy Smart', id: 'camy-smart', image: camySmartCertificate },
  { name: 'New Camy Smart', id: 'new-camy-smart', image: newCamySmartCertificate },
  {
    name: 'Aerostar Home Appliances',
    id: 'aerostar-home-appliances',
    image: aerostarCertificate,
  },
];

const CertificatePaper = ({
  certificate,
  enhanced = false,
}: {
  certificate: (typeof certificates)[number];
  enhanced?: boolean;
}) => (
  <div className="relative mx-auto flex h-[var(--paper-height,350px)] max-w-full items-center justify-center bg-white">
    <img
      src={certificate.image}
      alt={`${certificate.name} Made in Sri Lanka certificate`}
      loading="lazy"
      decoding="async"
      style={enhanced ? { filter: 'brightness(1.09) contrast(1.12) saturate(.94)' } : undefined}
      className="block max-h-full w-auto max-w-full object-contain"
    />
  </div>
);

export const CertificationSection = () => (
  <section
    aria-labelledby="certification-heading"
    className="border-y border-border bg-white py-12 text-foreground md:py-16"
  >
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-primary before:h-px before:w-8 before:bg-[#c3a567] after:h-px after:w-8 after:bg-[#c3a567]">
          Local manufacturing
        </p>
        <h2
          id="certification-heading"
          className="mt-4 text-3xl font-semibold normal-case leading-tight tracking-[-.03em] text-[#102746] md:text-5xl"
        >
          Made in Sri Lanka.
          <span className="mt-1 block text-2xl font-normal tracking-[-.01em] text-[#657184] md:text-3xl">
            Certified local manufacturing.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
          Three of our manufacturing companies have received Made in Sri Lanka certification from
          the Ministry of Industries and NEDA.
        </p>
      </div>
      <div className="mt-10 grid min-w-0 grid-cols-3 items-start gap-3 sm:gap-8">
        {certificates.map((certificate) => (
          <article
            key={certificate.id}
            className="min-w-0 border-t-2 border-[#b69a60] pt-4 text-center sm:pt-6"
          >
            <div className="flex h-[170px] items-center justify-center border border-[#e9e7e2] bg-[#f7f7f5] p-2 [--paper-height:150px] sm:h-[390px] sm:p-5 sm:[--paper-height:350px]">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative block max-w-full bg-white shadow-[0_3px_10px_rgba(30,39,46,.12)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                    aria-label={`Enlarge ${certificate.name} certificate`}
                  >
                    <CertificatePaper certificate={certificate} enhanced />
                    <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white/95 text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                      <Expand size={13} aria-hidden="true" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[92vh] max-w-lg overflow-y-auto">
                  <DialogTitle>{certificate.name}</DialogTitle>
                  <DialogDescription>
                    Original Made in Sri Lanka certificate photograph.
                  </DialogDescription>
                  <div className="[--paper-height:420px]">
                    <CertificatePaper certificate={certificate} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mx-auto mt-4 max-w-[260px] text-xs sm:text-base">
              <Link
                to={`/companies/${certificate.id}`}
                className="font-semibold leading-5 text-[#102746] underline-offset-4 hover:underline"
              >
                {certificate.name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
