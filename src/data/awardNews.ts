import helmetManufacturing from '@/assets/helmet-manufacturing.jpg';
import chromeManufacturing from '@/assets/chrome-manufacturing.jpg';
import heroCorporate from '@/assets/hero-corporate.jpg';
import coolingProducts from '@/assets/products/camy-air-conditioners.png';
import hotelInterior from '@/assets/hotel-interior.jpg';

export interface AwardNewsStory {
  slug: string;
  title: string;
  summary: string;
  content: string;
  award: string;
  awardedTo: string;
  givenBy: string;
  companyPath: string;
  image: string;
}

export const awardNewsStories: AwardNewsStory[] = [
  {
    slug: 'camy-smart-made-in-sri-lanka-certification',
    title: 'Camy Smart receives Made in Sri Lanka National Certification',
    summary:
      'Camy Smart has been recognised through the national certification programme administered by the Ministry of Industries and NEDA.',
    content:
      'Camy Smart has received the Made in Sri Lanka National Certification, recognising its contribution to locally manufactured consumer products.\n\nThe certification reflects the company’s focus on building dependable products in Sri Lanka and supporting the development of local manufacturing capability. It marks an important milestone for Camy Smart and the wider Supun Group.',
    award: 'Made in Sri Lanka National Certification',
    awardedTo: 'Camy Smart',
    givenBy: 'Ministry of Industries & NEDA',
    companyPath: '/companies/camy-smart',
    image: helmetManufacturing,
  },
  {
    slug: 'aero-star-made-in-sri-lanka-certification',
    title: 'Aero Star receives Made in Sri Lanka National Certification',
    summary:
      'Aero Star has earned national recognition for its contribution to Sri Lankan home appliance manufacturing.',
    content:
      'Aero Star has received the Made in Sri Lanka National Certification from the Ministry of Industries and NEDA.\n\nThe recognition highlights the company’s role in strengthening local manufacturing and producing home appliances for Sri Lankan households. It also reflects the Supun Group’s continuing investment in local industry.',
    award: 'Made in Sri Lanka National Certification',
    awardedTo: 'Aero Star (Aerostar Home Appliances)',
    givenBy: 'Ministry of Industries & NEDA',
    companyPath: '/companies/aerostar-home-appliances',
    image: chromeManufacturing,
  },
  {
    slug: 'supun-group-eindustry-2024-silver-sponsor',
    title: 'Supun Group recognised as a Silver Sponsor at eIndustry 2024',
    summary:
      'The Group was recognised at the International Industry Expo by the Industrial Development Board of Sri Lanka.',
    content:
      'Supun Group of Companies was recognised as a Silver Sponsor at the eIndustry 2024 International Industry Expo.\n\nPresented by the Industrial Development Board of Sri Lanka, the recognition reflects the Group’s participation in the country’s industrial community and its continuing commitment to Sri Lankan enterprise.',
    award: 'Silver Sponsor, eIndustry 2024 International Industry Expo',
    awardedTo: 'Supun Group of Companies',
    givenBy: 'Industrial Development Board of Sri Lanka',
    companyPath: '/about',
    image: heroCorporate,
  },
  {
    slug: 'fuji-industries-tcl-global-partners-vip-award',
    title: 'Fuji Industries receives VIP Award at TCL Global Partners Conference',
    summary: 'Fuji Industries was recognised at the 2024 TCL AC Global Partners Conference.',
    content:
      'Fuji Industries received a VIP Award at the 2024 TCL AC Global Partners Conference.\n\nThe award recognises the company’s partnership with TCL and its work in the cooling and home appliance sector. It represents another international industry milestone for a Supun Group company.',
    award: 'VIP Award, 2024 TCL AC Global Partners Conference',
    awardedTo: 'Fuji Industries',
    givenBy: 'TCL',
    companyPath: '/companies/fuji-industries',
    image: coolingProducts,
  },
  {
    slug: 'supun-arcade-outstanding-hotel-partner-award',
    title: 'Supun Arcade Residency receives Outstanding Hotel Partner Award',
    summary: 'Booking.com has recognised Supun Arcade Residency for its hospitality partnership.',
    content:
      'Supun Arcade Residency has received the Outstanding Hotel Partner Award from Booking.com.\n\nThe recognition reflects the property’s commitment to guest service and its trusted partnership within the hospitality sector. It marks a proud achievement for the Supun Arcade team and the wider Group.',
    award: 'Outstanding Hotel Partner Award',
    awardedTo: 'Supun Arcade Residency',
    givenBy: 'Booking.com',
    companyPath: '/companies/supun-arcade-residency',
    image: hotelInterior,
  },
];

export const getAwardNewsBySlug = (slug?: string) =>
  awardNewsStories.find((story) => story.slug === slug);
