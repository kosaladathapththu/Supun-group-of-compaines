import { Link } from 'react-router-dom';
import { ArrowRight, Expand } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
  <div className="relative mx-auto flex h-[var(--paper-height,350px)] max-w-full items-center justify-center overflow-hidden bg-white">
    <img
      src={certificate.image}
      alt={`${certificate.name} Made in Sri Lanka certificate`}
      loading="lazy"
      className="h-full w-auto max-w-full object-contain"
    />
  </div>
);

export const CertificationSection = () => (
  <section
    aria-labelledby="certification-heading"
    className="border-y border-border bg-white py-12 md:py-20"
  >
    <Tabs
      defaultValue="camy-smart"
      className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center md:gap-16"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary">
          Local manufacturing
        </p>
        <h2
          id="certification-heading"
          className="mt-4 max-w-md text-3xl font-semibold normal-case leading-tight tracking-[-.025em] text-foreground md:text-4xl"
        >
          Made in Sri Lanka.
          <br />
          Recognised in our work.
        </h2>
        <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
          Three of our manufacturing companies have received Made in Sri Lanka certification from
          the Ministry of Industries and NEDA.
        </p>
        <TabsList
          aria-label="Choose a company certificate"
          className="mt-8 flex h-auto w-full max-w-md flex-col items-stretch justify-start gap-0 rounded-none border-y border-border bg-transparent p-0"
        >
          {certificates.map((certificate) => (
            <TabsTrigger
              key={certificate.id}
              value={certificate.id}
              className="group flex justify-between gap-4 whitespace-normal rounded-none border-b border-border px-0 py-4 text-left text-base font-medium text-muted-foreground shadow-none last:border-b-0 hover:text-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              {certificate.name}
              <ArrowRight
                size={18}
                className="shrink-0 opacity-0 transition-opacity group-data-[state=active]:opacity-100"
                aria-hidden="true"
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div className="min-w-0 border-l-0 border-border md:border-l md:pl-12">
        {certificates.map((certificate) => (
          <TabsContent
            key={certificate.id}
            value={certificate.id}
            className="mt-0 focus-visible:ring-offset-4"
          >
            <div className="flex min-h-[405px] flex-col items-center justify-center bg-[#f7f7f4] px-6 py-7">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group block border border-black/10 shadow-[0_6px_20px_rgba(16,35,63,.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
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
            <div className="mt-4 flex items-center justify-between gap-4 text-sm">
              <Link
                to={`/companies/${certificate.id}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {certificate.name}
              </Link>
              <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                <Expand size={13} aria-hidden="true" />
                Click to enlarge
              </span>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  </section>
);
