import { Building2 } from "lucide-react";
import { getCompanyLogo } from "@/data/companyLogos";

interface CompanyLogoProps {
  companyId: string;
  companyName: string;
  className?: string;
  imageClassName?: string;
}

export const CompanyLogo = ({ companyId, companyName, className = "", imageClassName = "" }: CompanyLogoProps) => {
  const logo = getCompanyLogo(companyId);

  return (
    <div className={`flex items-center justify-center overflow-hidden bg-white ${className}`}>
      {logo ? (
        <img
          src={logo}
          alt={`${companyName} logo`}
          className={`max-h-full max-w-full object-contain ${imageClassName}`}
          loading="lazy"
        />
      ) : (
        <Building2 className="text-primary/45" size={28} aria-hidden="true" />
      )}
    </div>
  );
};
