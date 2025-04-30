import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../common/PrimaryButton";

const PlanCard = ({ item }) => {
  return (
    <div className="h-full p-8 bg-plan-card rounded-[16px] border border-default-border relative min-h-[619px] flex flex-col">
      <div className="flex flex-col grow-1">
        <div className="text-[24px] text-black flex items-center font-bold mb-6">
          <span>£</span>
          <p className="text-[48px]">{item?.price}</p>
          <span>/mo</span>
        </div>
        <h4 className="text-[24px] font-semibold text-black">
          {item?.packageName}
        </h4>
        <p className="text-[18px] text-theme-orange font-semibold mt-4">
          {item?.discount}
        </p>
        {item?.status && (
          <p className="text-[#6AD167] mt-4 capitalize">{item?.status}</p>
        )}
        {/* features  */}
        <ul className="mt-8">
          {item?.features?.map((feature) => (
            <li key={feature?.id} className="list-disc list-inside text-base">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <PrimaryButton pathname ="/payment" text="Select This Plan" icon={<FaArrowRightLong />} className={`justify-center bg-transparent ${item?.packageType === 'polished' ? 'text-theme-sky-blue border-theme-sky-blue hover:bg-theme-sky-blue hover:text-white' : item?.packageType === 'premier' ? 'text-dark-blue border-dark-blue hover:bg-dark-blue hover:text-white' : item?.packageType === 'pro' ? 'text-theme-orange border-theme-orange hover:bg-theme-orange hover:text-white' : ''}`} />
      </div>
      {/* package type  */}
      <p className={`absolute w-[210px] py-5 px-8 text-[24px] top-8 right-0 text-white capitalize rounded-tl-[16px] rounded-bl-[16px] ${item?.packageType === 'polished' ? 'bg-theme-sky-blue' : item?.packageType === 'premier' ? 'bg-dark-blue' : item?.packageType === 'pro' ? 'bg-theme-orange' : ''}`}>{item?.packageType}</p>
    </div>
  );
};

export default PlanCard;
