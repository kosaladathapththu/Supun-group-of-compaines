// This file is refreshed from the current supuncompanies.com site by
// scripts/import-current-site-logos.mjs.
export const companyLogos: Record<string, string> = {};

export const getCompanyLogo = (companyId: string): string | undefined => companyLogos[companyId];
