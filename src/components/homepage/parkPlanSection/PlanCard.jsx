import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PrimaryButton from "../../common/PrimaryButton";

const PlanCard = ({ item }) => {
  return (
    <div className="h-full px-4 py-4 2xl:p-8 bg-plan-card rounded-[16px] border border-default-border relative 3xl:min-h-[500px] flex flex-col">
      <div className="flex flex-col grow-1">
        <div className="text-xl 3xl:text-[24px] text-black flex items-center font-bold mb-6">
          <span>£</span>
          <p className="text-[25px] 2xl:text-[30px] 3xl:text-[48px]">
            {item?.price}
          </p>
          <span>/mo</span>
        </div>
        <h4 className="text-lg md:text-xl 2xl:text-[24px] font-semibold text-black">
          {item?.packageName}
        </h4>
        <p className="text-base md:text-[18px] text-theme-orange font-semibold mt-1.5 2xl:mt-4 capitalize">
          {item?.discount}
        </p>
        {/* features  */}
        <ul className="mt-3 md:mt-5 3xl:mt-8 list-disc list-outside pl-5">
          {item?.features?.map((feature, idx) => (
            <li key={idx} className="text-sm md:text-base mt-1">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <PrimaryButton
          pathname="/payment"
          text="Select This Plan"
          icon={<FaArrowRightLong />}
          className={`justify-center bg-transparent ${
            item?.packageType === "polished"
              ? "text-theme-sky-blue border-theme-sky-blue hover:bg-theme-sky-blue hover:text-white"
              : item?.packageType === "premier"
              ? "text-dark-blue border-dark-blue hover:bg-dark-blue hover:text-white"
              : item?.packageType === "pro"
              ? "text-theme-orange border-theme-orange hover:bg-theme-orange hover:text-white"
              : ""
          }`}
        />
      </div>
      {/* package type  */}
      <p
        className={`absolute w-[110px] 2xl:w-[120px] 3xl:w-[210px] py-1.5 2xl:py-3 3xl:py-5 px-4 2xl:px-5 3xl:px-8 text-lg 3xl:text-[24px] top-5 2xl:top-8 right-0 text-white capitalize rounded-tl-[7px] 2xl:rounded-tl-[16px] rounded-bl-[7px] 2xl:rounded-bl-[16px] ${
          item?.packageType === "polished"
            ? "bg-theme-sky-blue"
            : item?.packageType === "premier"
            ? "bg-dark-blue"
            : item?.packageType === "pro"
            ? "bg-theme-orange"
            : ""
        }`}
      >
        {item?.packageType}
      </p>
    </div>
  );
};

export default PlanCard;
