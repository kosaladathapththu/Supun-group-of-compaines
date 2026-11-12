import { useQuery } from '@tanstack/react-query';
import { companies as builtInCompanies, type Company } from '@/data/companies';
import { companiesAPI, getFileUrl } from '@/services/api';

export type PublicCompany = Company & {
  logoUrl?: string;
  catalogPdf?: string;
  googleMapsLink?: string;
};

export function usePublicCompanies() {
  const query = useQuery({
    queryKey: ['public-companies'],
    queryFn: async (): Promise<PublicCompany[]> => {
      const rows = await companiesAPI.getAll();
      return rows.map((company) => {
        if (
          !company ||
          typeof company.id !== 'string' ||
          typeof company.name !== 'string' ||
          typeof company.shortName !== 'string' ||
          typeof company.description !== 'string' ||
          typeof company.fullDescription !== 'string' ||
          typeof company.industry !== 'string'
        ) {
          throw new Error('Invalid company profile');
        }
        const original = builtInCompanies.find((item) => item.id === company.id);
        return {
          ...original,
          ...company,
          tagline: company.tagline || company.description,
          industry: company.industry as Company['industry'],
          established: company.established == null ? undefined : String(company.established),
          features: Array.isArray(company.features)
            ? company.features.filter((item): item is string => typeof item === 'string')
            : [],
          awards: Array.isArray(company.awards)
            ? company.awards.filter((item): item is string => typeof item === 'string')
            : [],
          logoUrl: company.imageUrl?.includes('/frontend-company-')
            ? undefined
            : getFileUrl(company.imageUrl) || undefined,
        };
      });
    },
    retry: false,
    staleTime: 30_000,
  });
  return { ...query, companies: query.data ?? (builtInCompanies as PublicCompany[]) };
}
