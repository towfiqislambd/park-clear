import PrimaryButton from "../common/PrimaryButton";

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
    tooltip:
      'Keep tabs on every ticket — effortlessly. Your central hub for tracking, managing, and appealing parking fines. See the status of each ticket at a glance.',
  },
  { name: 'Basic Route Planner' },
  { name: 'Basic Parking Ticket Support Service' },
  { name: 'Cheapest Petrol stations near you' },
  { name: 'Free Parking Near Me' },
  { name: 'Cost saver Route Planner' },
  { name: 'Full Parking Ticket Support Service' },
  { name: 'Roadside and Home Breakdown Cover' },
  { name: 'New Car Support Service' },
  { name: '15% off our ParkClear UltraDriver Store' },
  { name: 'Discounted Carwashing' },
];

const PricingPlans = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="overflow-x-auto xs:overflow-x-scroll lg:overflow-x-visible">
        <div className="min-w-[900px] lg:min-w-full border rounded-xl overflow-hidden">
          <table className="w-full table-auto text-left text-sm border-collapse">
            <thead>
              <tr className="text-gray-800 align-top border-b border-gray-200">
                <th className="p-4 text-left align-top w-[260px] max-w-[280px] border-r border-gray-200 break-words">
                  <h3 className="text-dark-blue text-lg font-semibold leading-snug">Compare plans</h3>
                  <p className="text-text-gray text-sm leading-snug">
                    Choose your workspace plan according to your organisational plan
                  </p>
                </th>
                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="p-4 text-center align-top border-l border-gray-200 first:border-l-0 text-nowrap"
                  >
                    <div className="plan-header">
                      <h3 className="text-2xl 3xl:text-[40px] font-bold text-center capitalize">
                        {plan.price}{' '}
                        <span className="text-sm text-text-gray font-normal">
                          {plan.price === 'Free' ? '/Lifetime' : '/month'}
                        </span>
                      </h3>
                      {plan.button && (
                        <PrimaryButton
                          text={plan.price === 'Free' ? 'Active Now' : 'Choose This Plan'}
                          className={`!text-xs 3xl:text-sm justify-center mt-5 3xl:mt-7 ${plan.price === 'Free'
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

            <tbody>
              {features.map((feature, featureIdx) => (
                <tr key={featureIdx} className="border-t border-gray-200 text-nowrap">
                  <td className="p-4 font-medium text-gray-700 flex items-center gap-1 border-r border-gray-200">
                    {feature.name}
                    {feature.tooltip && (
                      <span
                        className="text-gray-400 cursor-help text-xs"
                        title={feature.tooltip}
                      >
                        ⓘ
                      </span>
                    )}
                  </td>
                  {plans.map((plan, planIdx) => (
                    <td
                      key={planIdx}
                      className="p-4 text-center border-l border-gray-200 first:border-l-0"
                    >
                      {plan.features[featureIdx] ? (
                        <span className="text-green-500 text-lg">✔️</span>
                      ) : (
                        <span className="text-red-500 text-lg">❌</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
