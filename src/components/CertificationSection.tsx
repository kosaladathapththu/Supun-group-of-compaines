import { Link } from 'react-router-dom';
import { Expand } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import camySmartCertificate from '@/assets/certificates/camy-smart-made-in-sri-lanka.jpg';
import newCamySmartCertificate from '@/assets/certificates/new-camy-smart-made-in-sri-lanka.jpg';
import aerostarCertificate from '@/assets/certificates/aerostar-made-in-sri-lanka.jpg';

const certificates = [
  { name: 'Camy Smart', id: 'camy-smart', image: camySmartCertificate },
  { name: 'New Camy Smart', id: 'new-camy-smart', image: newCamySmartCertificate },
  {
    name: 'Aerostar Home Appliances',
    id: 'aerostar-home-appliances',
    image: aerostarCertificate,
  },
];

const CertificatePaper = ({ certificate }: { certificate: (typeof certificates)[number] }) => (
  <div className="relative mx-auto flex h-[var(--paper-height,350px)] max-w-full items-center justify-center bg-white">
    <img
      src={certificate.image}
      alt={`${certificate.name} Made in Sri Lanka certificate`}
      loading="lazy"
      className="block max-h-full w-auto max-w-full object-contain"
    />
  </div>
);

export const CertificationSection = () => (
  <section
    aria-labelledby="certification-heading"
    className="border-y border-border bg-white py-12 text-foreground md:py-16"
  >
    <div className="container mx-auto max-w-5xl px-5 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">
          Local manufacturing
        </p>
        <h2
          id="certification-heading"
          className="mt-3 text-3xl font-semibold normal-case leading-tight tracking-[-.025em] text-foreground md:text-4xl"
        >
          Made in Sri Lanka certification
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          Three of our manufacturing companies have received Made in Sri Lanka certification from
          the Ministry of Industries and NEDA.
        </p>
      </div>
      <div className="mt-9 grid min-w-0 grid-cols-3 items-start gap-3 border-t border-border pt-8 sm:gap-8">
        {certificates.map((certificate) => (
          <article key={certificate.id} className="min-w-0 text-center">
            <div className="flex h-[160px] items-start justify-center [--paper-height:160px] sm:h-[320px] sm:[--paper-height:320px]">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative block max-w-full bg-white p-1 shadow-[0_10px_24px_rgba(0,0,0,.18)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efbd55] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                    aria-label={`Enlarge ${certificate.name} certificate`}
                  >
                    <CertificatePaper certificate={certificate} />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[92vh] max-w-lg overflow-y-auto">
                  <DialogTitle>{certificate.name}</DialogTitle>
                  <DialogDescription>Made in Sri Lanka certificate preview.</DialogDescription>
                  <div className="[--paper-height:420px]">
                    <CertificatePaper certificate={certificate} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-5 space-y-2 text-xs sm:text-base">
              <Link
                to={`/companies/${certificate.id}`}
                className="font-medium leading-5 text-primary underline-offset-4 hover:underline"
              >
                {certificate.name}
              </Link>
              <span className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
                <Expand size={13} aria-hidden="true" />
                Enlarge
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
