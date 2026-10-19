import { Building2 } from 'lucide-react';
import { getCompanyLogo } from '@/data/companyLogos';
import camyRedLogo from '@/assets/camy-logo-red-transparent.png';

type Placement = 'home' | 'listing' | 'detail';
interface CompanyLogoProps {
  companyId: string;
  companyName: string;
  placement?: Placement;
  className?: string;
  imageClassName?: string;
}

// Visible artwork bounds within each original file. This removes empty margins
// at render time, without changing any of the company's logo artwork.
const artwork: Record<
  string,
  { width: number; height: number; x: number; y: number; canvasWidth: number }
> = {
  'supun-super-center': { width: 650, height: 225, x: 215, y: 427, canvasWidth: 1080 },
  'supun-arcade-residency': { width: 500, height: 190, x: 98, y: 178, canvasWidth: 721 },
  'camy-global': { width: 550, height: 190, x: 248, y: 437, canvasWidth: 1080 },
  'aerostar-home-appliances': { width: 350, height: 280, x: 365, y: 400, canvasWidth: 1080 },
  'camy-smart': { width: 240, height: 155, x: 238, y: 210, canvasWidth: 717 },
  rodsons: { width: 340, height: 220, x: 362, y: 402, canvasWidth: 1080 },
};

// Independent art direction for every company in each page context.
const sizes: Record<Placement, Record<string, [number, number]>> = {
  home: {
    'supun-traders': [190, 150],
    'supun-traders-distributors': [190, 150],
    'supun-super-center': [245, 105],
    'supun-arcade-residency': [270, 120],
    'area-56': [235, 100],
    'supun-aerosoft': [245, 125],
    'aerostar-home-appliances': [185, 150],
    'camy-smart': [215, 145],
    rodsons: [225, 145],
    'new-camy-smart': [245, 130],
    'fuji-industries': [245, 130],
    'camy-global': [260, 110],
  },
  listing: {
    'supun-traders': [115, 88],
    'supun-traders-distributors': [115, 88],
    'supun-super-center': [205, 78],
    'supun-arcade-residency': [210, 83],
    'area-56': [195, 78],
    'supun-aerosoft': [175, 85],
    'aerostar-home-appliances': [105, 86],
    'camy-smart': [135, 85],
    rodsons: [135, 85],
    'new-camy-smart': [185, 82],
    'fuji-industries': [175, 86],
    'camy-global': [210, 80],
  },
  detail: {
    'supun-traders': [155, 125],
    'supun-traders-distributors': [155, 125],
    'supun-super-center': [270, 105],
    'supun-arcade-residency': [280, 115],
    'area-56': [260, 105],
    'supun-aerosoft': [245, 120],
    'aerostar-home-appliances': [150, 125],
    'camy-smart': [185, 120],
    rodsons: [185, 120],
    'new-camy-smart': [255, 115],
    'fuji-industries': [245, 125],
    'camy-global': [280, 110],
  },
};

export const CompanyLogo = ({
  companyId,
  companyName,
  placement = 'listing',
  className = '',
  imageClassName = '',
}: CompanyLogoProps) => {
  const sourceId = companyId === 'supun-traders-distributors' ? 'supun-traders' : companyId;
  const logo = sourceId === 'new-camy-smart' ? camyRedLogo : getCompanyLogo(sourceId);
  const bounds = artwork[sourceId];
  const [maxWidth, maxHeight] = sizes[placement][companyId] || [180, 90];
  const ratio = bounds ? bounds.width / bounds.height : undefined;
  const width = ratio ? Math.min(maxWidth, maxHeight * ratio) : maxWidth;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-white ${className}`}
    >
      {logo ? (
        bounds ? (
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ width, maxWidth: '100%', aspectRatio: `${bounds.width} / ${bounds.height}` }}
          >
            <img
              src={logo}
              alt={`${companyName} logo`}
              loading="lazy"
              className="absolute block !max-w-none"
              style={{
                width: `${(bounds.canvasWidth / bounds.width) * 100}%`,
                height: 'auto',
                left: `${(-bounds.x / bounds.width) * 100}%`,
                top: `${(-bounds.y / bounds.height) * 100}%`,
              }}
            />
          </div>
        ) : (
          <img
            src={logo}
            alt={`${companyName} logo`}
            loading="lazy"
            className={`block object-contain ${imageClassName}`}
            style={{ width: maxWidth, maxWidth: '100%', maxHeight, height: 'auto' }}
          />
        )
      ) : (
        <Building2 className="text-primary/45" size={28} aria-hidden="true" />
      )}
    </div>
  );
};
