import PrimaryButton from "../common/PrimaryButton";
import checkCircle from "../../assets/icons/check.svg"
import closeCircle from "../../assets/icons/close.svg"

const PlanCard = ({ item }) => {
  return (
    <div className="w-[20%] plan-card">
      {/* card header  */}
      <div className="plan-header">
        <h3 className="text-[40px] font-bold text-center capitalize">
          {item?.price}{" "}
          <span className="text-sm text-text-gray font-normal">
            {item.price === "free" ? "/Lifetime" : "/month"}
          </span>
        </h3>
        <PrimaryButton
          text={item.price === "free" ? "Active Now" : "Choose This Plan"}
          className={` !text-sm justify-center mt-7 ${
            item.price === "free"
              ? "border-[#6AD167] bg-transparent text-[#6AD167]"
              : "bg-theme-orange text-white hover:bg-transparent border-theme-orange hover:text-theme-orange"
          }`}
        />
      </div>
      {/* features status  */}
      <ul>
        {
            item?.featureStatus?.map((status, index) => (
                <li key={index} className="py-5 px-8 min-h-20 max-h-20 flex items-center justify-center border-b border-default-border first:border-t last:border-none">{status ? <img className="h-6 w-6" src={checkCircle} alt="checkCircle" /> : <img className="h-6 w-6" src={closeCircle} alt="closeCircle" />} </li>
            ))
        }
      </ul>
    </div>
  );
};

export default PlanCard;
