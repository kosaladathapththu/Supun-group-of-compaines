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
    <div className={`relative flex items-center justify-center overflow-hidden bg-white ${className}`}>
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
      {companyId === "supun-arcade-residency" && (
        <span className="pointer-events-none absolute bottom-[12%] left-0 h-[43%] w-[7%] bg-white" aria-hidden="true" />
      )}
    </div>
  );
};
