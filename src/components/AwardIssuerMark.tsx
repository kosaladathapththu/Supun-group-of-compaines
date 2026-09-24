interface AwardIssuerMarkProps {
  issuer: string;
  certification?: boolean;
}

export const AwardIssuerMark = ({ issuer, certification = false }: AwardIssuerMarkProps) => {
  const normalized = issuer.toLowerCase();

  if (
    certification ||
    normalized.includes('ministry of industries') ||
    normalized.includes('neda')
  ) {
    return (
      <img
        src="/made-in-sri-lanka-logo.png"
        alt="Made in Sri Lanka"
        className="h-24 w-20 object-contain"
      />
    );
  }

  if (normalized.includes('tcl')) {
    return (
      <span className="inline-flex rounded-lg bg-[#e60012] px-6 py-3 text-3xl font-black tracking-[-.06em] text-white">
        TCL
      </span>
    );
  }

  if (normalized.includes('booking.com')) {
    return (
      <span className="text-2xl font-bold tracking-[-.05em] text-[#003b95]">
        Booking<span className="text-[#009fe3]">.com</span>
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col leading-none">
      <strong className="text-4xl font-black tracking-[-.07em] text-[#143f78]">IDB</strong>
      <small className="mt-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-[#67809d]">
        Sri Lanka
      </small>
    </span>
  );
};
