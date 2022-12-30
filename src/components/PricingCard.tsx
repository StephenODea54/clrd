export type PricingInfo = {
  team: string;
  price: number;
  startingGrade: "K" | "3rd" | "5th";
  endingGrade: "2nd" | "4th" | "6th";
};

interface PricingCardProps {
  pricingInfo: PricingInfo;
  equipment: string[];
}

const PricingCard = ({ pricingInfo, equipment }: PricingCardProps) => {
  return (
    <div className="w-full h-full bg-[radial-gradient(145.05%_100%_at_50%_0%,#292424_0%,#120c0c_57.38%,#2a2828_88.16%)] p-6 ring-1 ring-white/[0.15] sm:mx-0 sm:rounded-2xl sm:p-8 lg:p-10">
      <h3 className="text-lg font-semibold text-white">
        {pricingInfo.team}
      </h3>
      <div className="mt-5 flex items-center">
        <div className="text-5xl font-semibold tracking-tighter text-white">
          ${pricingInfo.price}
          </div>
        <div className="ml-4 text-slate-400">
          <div className="text-lg font-medium leading-6">
            USD
          </div>
          <div className="text-sm">
            {pricingInfo.startingGrade} - {pricingInfo.endingGrade}
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <ul className="mt-10 space-y-4 text-lg leading-8 text-slate-300">
        {equipment.map(el => (
          <li className="flex">
            <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 flex-none">
            <circle cx="16" cy="16" r="12" fill="#DC2626"></circle>
            <path
              d="M11.375 16.626a1 1 0 0 0-1.414 1.414l1.414-1.414Zm9.844-3.876a1 1 0 1 0-1.324-1.5l1.324 1.5Zm-6.754 8.38-.707.707a1 1 0 0 0 1.654-.385l-.947-.322Zm.947.322a20.359 20.359 0 0 1 5.807-8.702l-1.324-1.5a22.359 22.359 0 0 0-6.377 9.558l1.894.644ZM9.96 18.04l3.797 3.797 1.414-1.414-3.797-3.797-1.414 1.414Z"
              fill="#FFFFFF"
            />
          </svg>
          <span className="ml-4 font-medium text-white">
            {el}
          </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
