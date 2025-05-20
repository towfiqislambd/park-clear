import PrimaryButton from "../common/PrimaryButton";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { CheckSvg, CrossSvg, TooltipSvg } from "../svg-container/SvgContainer";

const plans = [
  {
    name: "Free",
    price: "Free",
    period: "/lifetime",
    features: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
    button: "Activate Now",
  },
  {
    name: "£4.99",
    price: "£4.99",
    period: "/month",
    features: [
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
    button: "Choose This Plan",
  },
  {
    name: "£9.99",
    price: "£9.99",
    period: "/month",
    features: [
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
    ],
    button: "Choose This Plan",
  },
  {
    name: "£13.99",
    price: "£13.99",
    period: "/month",
    features: [
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    button: "Choose This Plan",
  },
];

const features = [
  {
    name: "Full Ticket Tracker dashboard",
    tooltip:
      "Automatically log and track your parking and driving fines in one place. We will remind when to pay. We don’t want to see your fines increase. ",
  },
  {
    name: "Fine Support Service",
    tooltip:
      "Get help understanding and resolving PCNs with clear, step-by-step guidance.",
  },
  {
    name: "MyCarHealth",
    tooltip:
      "Track your MOT, servicing, and vehicle maintenance. Use this log when you sell your vehicle. — all in one dashboard.",
  },
  {
    name: "TripSaver+",
    tooltip:
      "Plan smarter journeys. Find free parking, avoid toll surprises, locate the cheapest fuel near your start point, and estimate your trip cost to split with passengers",
  },
  {
    name: "UltraDriver.co.uk Discount",
    tooltip:
      "Exclusive access to performance gear and parts at discounted rates.",
  },
  {
    name: "Car Insurance Reminders",
    tooltip: "Never miss a renewal — we’ll alert you when your cover is due.",
  },
  {
    name: "New Car Service",
    tooltip:
      "Buying or switching cars? We’ll help you log and manage your new vehicle instantly.",
  },
  {
    name: "Road & Home BreakDown Cover",
    tooltip:
      "Nationwide cover from RAC — stay protected at home and on the road.",
  },
  {
    name: "Garage Smart Assist",
    tooltip:
      "Find trusted garages, compare services, and book with confidence.",
  },
  {
    name: "ParkClear PitStop Pack",
    tooltip:
      "A monthly mystery box with handy driver essentials — free for members.",
  },
  {
    name: "25% Off CarWash Partners",
    tooltip:
      "Save at hand-picked car wash chains near you — just flash your ParkClear deal.",
  },
];

const PricingPlans = () => {
  return (
    <div className="min-w-full border rounded-xl overflow-x-auto mt-10">
      <table className="w-full table-auto text-left text-sm border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="text-gray-800 align-top border-b border-gray-200">
            <th className="p-3 md:p-4 text-left align-top w-[260px] border-r border-gray-200 break-words">
              <h3 className="text-dark-blue text-lg xl:text-xl font-semibold leading-snug">
                Compare plans
              </h3>
              <p className="text-text-gray text-sm leading-snug !font-medium mt-1 xl:mt-2">
                Choose your workspace plan according to your organizational plan
              </p>
            </th>
            {plans.map((plan, idx) => (
              <th
                key={idx}
                className="2xl:px-5 text-center align-top border-l border-gray-200 first:border-l-0 text-nowrap capitalize"
              >
                <div className="plan-header">
                  <h3 className="text-xl md:text-2xl 3xl:text-[40px] font-bold text-center capitalize">
                    {plan.price}{" "}
                    <span className="text-sm text-text-gray font-normal">
                      {plan.price === "Free" ? "/Lifetime" : "/month"}
                    </span>
                  </h3>
                  {plan.button && (
                    <PrimaryButton
                      text={
                        plan.price === "Free"
                          ? "Active Now"
                          : "Choose This Plan"
                      }
                      className={`!text-xs 3xl:text-sm justify-center mt-3 2xl:mt-5 3xl:mt-7 ${
                        plan.price === "Free"
                          ? "border-[#6AD167] bg-transparent text-[#6AD167]"
                          : "bg-theme-orange text-white hover:bg-transparent border-theme-orange hover:text-theme-orange"
                      }`}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {features.map((feature, featureIdx) => {
            const tooltipId = `tooltip-${featureIdx}`;
            return (
              <tr
                key={featureIdx}
                className="border-t border-gray-200 text-nowrap"
              >
                <td className="p-3.5 md:p-5 font-medium text-gray-700 flex items-center gap-3 border-r border-gray-200 justify-between">
                  {feature.name}
                  {feature.tooltip && (
                    <>
                      <p
                        data-tooltip-id={tooltipId}
                        data-tooltip-content={feature.tooltip}
                        className="cursor-pointer"
                      >
                        <TooltipSvg />
                      </p>
                      <Tooltip
                        id={tooltipId}
                        place="top"
                        className="!max-w-[280px] !bg-white !text-gray-800 border !rounded-md shadow-xl whitespace-normal text-sm !z-[9999] !opacity-100"
                      />
                    </>
                  )}
                </td>

                {plans.map((plan, planIdx) => (
                  <td
                    key={planIdx}
                    className="p-3.5 md:p-5 text-center border-l border-gray-200 first:border-l-0"
                  >
                    {plan.features[featureIdx] ? (
                      <p className="grid place-items-center">
                        <CheckSvg />
                      </p>
                    ) : (
                      <p className="grid place-items-center">
                        <CrossSvg />
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PricingPlans;
