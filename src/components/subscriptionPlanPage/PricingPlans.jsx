import PrimaryButton from "../common/PrimaryButton";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { CheckSvg, CrossSvg, TooltipSvg } from "../svg-container/SvgContainer";

const plans = [
  {
    name: 'Free',
    price: 'Free',
    period: '/lifetime',
    features: [true, false, false, false, false, false, false, false, false, true, false],
    button: 'Activate Now',
  },
  {
    name: '£11.99',
    price: '£11.99',
    period: '/month',
    features: [true, true, true, true, true, false, false, false, false, true, false],
    button: 'Choose This Plan',
  },
  {
    name: '£18.99',
    price: '£18.99',
    period: '/month',
    features: [true, false, false, true, true, true, true, true, false, true, false],
    button: 'Choose This Plan',
  },
  {
    name: '£26.99',
    price: '£26.99',
    period: '/month',
    features: [true, true, false, true, true, true, true, true, true, true, true],
    button: 'Choose This Plan',
  },
];

const features = [
  {
    name: 'Full Ticket Tracker dashboard',
    tooltip: 'TickeTracker: Keep tabs on every ticket — effortlessly. Your central hub for tracking, managing, and appealing parking fines. See the status of each ticket at a glance, and never miss a deadline again. We’ll remind you when you need to pay to avoid your PCN increasing.'
  },
  {
    name: 'Basic Route Planner',
    tooltip: 'TripSaver+: Fuel savings made smarter - TripSaver finds you the cheapest nearby petrol or diesel and helps you track your actual fuel spend over time. Just upload your fuel receipts and tell us your mileage — we’ll do the rest.'
  },
  {
    name: "Basic Parking Ticket Support Service",
    tooltip: "Parking Ticket Support Service: We handle the stress, so you don’t have to. Got a pile of PCNs? We can help consolidate, manage the appeals process, and track down lost PCNs from start to finish — on your behalf."
  },
  {
    name: 'Cheapest Petrol stations near you',
    tooltip: ''
  },
  {
    name: 'Free Parking Near Me',
    tooltip: ''
  },
  {
    name: 'Cost saver Route Planner',
    tooltip: ''
  },
  {
    name: 'Full Parking Ticket Support Service',
    tooltip: ''
  },
  {
    name: 'Roadside and Home Breakdown Cover',
    tooltip: 'Roadside & Home Breakdown Cover: We’ve got you covered – wherever you are. Whether your car won’t start in the driveway or breaks down miles from home, our partners Breakdown Cover gets you moving again. Fast response, no fuss.'
  },
  {
    name: 'New Car Support Service',
    tooltip: 'New Car Support Service: Buying a car? We’ll help you check it’s the right one. Before you commit, enter the vehicle registration. We’ll give you essential information such as MOT history, specifications and outstanding finance in real-time — we help you buy smarter, not just faster.'
  },
  {
    name: '15% off our ParkClear UltraDriver Store',
    tooltip: ''
  },
  {
    name: 'Discounted Carwash',
    tooltip: 'Car Wash Discounts: Keep it clean – for less. As a ParkClear Pro member, you get exclusive discounts from our trusted car washing partners across the UK. Whether you prefer a quick rinse or a full valet, we’ve got you covered.'
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
              <h3 className="text-dark-blue text-lg xl:text-xl font-semibold leading-snug">Compare plans</h3>
              <p className="text-text-gray text-sm leading-snug !font-medium mt-1 xl:mt-2">
                Choose your workspace plan according to your organizational plan
              </p>
            </th>
            {plans.map((plan, idx) => (
              <th
                key={idx}
                className="2xl:px-5 text-center align-top border-l border-gray-200 first:border-l-0 text-nowrap"
              >
                <div className="plan-header">
                  <h3 className="text-xl md:text-2xl 3xl:text-[40px] font-bold text-center capitalize">
                    {plan.price}{' '}
                    <span className="text-sm text-text-gray font-normal">
                      {plan.price === 'Free' ? '/Lifetime' : '/month'}
                    </span>
                  </h3>
                  {plan.button && (
                    <PrimaryButton
                      text={plan.price === 'Free' ? 'Active Now' : 'Choose This Plan'}
                      className={`!text-xs 3xl:text-sm justify-center mt-3 2xl:mt-5 3xl:mt-7 ${plan.price === 'Free'
                        ? 'border-[#6AD167] bg-transparent text-[#6AD167]'
                        : 'bg-theme-orange text-white hover:bg-transparent border-theme-orange hover:text-theme-orange'
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
              <tr key={featureIdx} className="border-t border-gray-200 text-nowrap">
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
                      <p className="grid place-items-center"><CheckSvg /></p>
                    ) : (
                      <p className="grid place-items-center"><CrossSvg /></p>
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
