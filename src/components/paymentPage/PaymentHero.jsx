import StripeIcon from "../../assets/icons/stripe.svg";
import paymentImage from "../../assets/images/payment.png";
import Container from "../container/Container";
import PlanCard from "../homepage/parkPlanSection/PlanCard";
import SubscriptionTypeCard from "./SubscriptionTypeCard";
import { Link } from "react-router-dom";

const Subscriptiondata = [
  {
    id: 1,
    price: "26.99",
    name: "ParkClear Pro Driver",
    type: "monthly",
  },
  {
    id: 2,
    price: "26.99",
    name: "ParkClear Pro Driver",
    type: "Annual",
  },
];
const cardsdata = [
  {
    id: 1,
    price: "7.99",
    packageName: "ParkClear Polished Driver",
    discount: "50% off of the 1st month",
    packageType: "pro",
    features: [
      "Full Ticket Tracker dashboard",
      "Leave Right Planner",
      "Basic Parking Ticket Support Service",
      "Cheapest Petrol stations near you",
      "TripSaver",
    ],
  },
];

const PaymentHero = () => {
  return (
    <section className="pt-12 pb-10 xl:pb-20 2xl:pb-[100px] 3xl:pb-[208px]">
      <Container>
        <div className="grid xl:grid-cols-2 gap-10 xl:gap-20 2xl:gap-[163px]">
          {/* ========== Left  Side =========== */}
          <div>
            <p className="title--sm" data-aos="fade-up">Secure and Transparent Transactions</p>
            <h1 className="title--xxl" data-aos="fade-up" data-aos-delay="100">Payment</h1>
            <p className="mt-6 text-text-gray" data-aos="fade-up" data-aos-delay="200">
              Our payment page ensures that all transactions are conducted
              securely and transparently. We provide detailed information on
              payment methods, processing times, and any associated fees to
              guarantee a smooth and trustworthy payment experience for our
              users.
            </p>
            <img
              className="w-[270px] sm:w-[300px] h-[280px] md:w-[344px] md:h-[328px] mx-auto mt-7 md:mt-[44px]"
              src={paymentImage}
              alt="paymentImage"
              data-aos="fade-up" data-aos-delay="300"
            />
            {/* Select Subscription Type */}
            <div className="mt-8 xl:mt-[55px]">
              <h3 className="text-xl md:text-2xl 2xl:text-[32px] 3xl:text-[48px] font-bold 2xl:font-black mb-4 md:mb-6 3xl:mb-12" data-aos="fade-up" data-aos-delay="400">
                Select Subscription Type
              </h3>
              <div>
                {Subscriptiondata?.map((card) => (
                  <SubscriptionTypeCard key={card?.id} item={card} />
                ))}
              </div>
            </div>
          </div>

          {/* ========== Right  Side =========== */}
          <div>
            {/* plan card  */}
            <div data-aos="fade-up" data-aos-delay="100">
              {cardsdata?.map((card) => (
                <PlanCard key={card?.id} item={card} />
              ))}
            </div>
            {/* payment method  */}
            <div className="mt-5 md:mt-10 xl:mt-[128px]">
              <h3 className="text-xl md:text-2xl 2xl:text-[32px] 3xl:text-[48px] font-bold 2xl:font-black" data-aos="fade-up">Payment Method</h3>
              <button className="flex items-center gap-2.5 2xl:gap-4 py-2.5 3xl:py-4 px-6 rounded-[8px] bg-plan-card md:text-lg 2xl:text-xl 3xl:text-[24px] font-medium w-full justify-center border border-default-border cursor-pointer mt-3 md:mt-5 2xl:mt-7 3xl:mt-12" data-aos="fade-up" data-aos-delay="100">
                <img className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 3xl:w-12 2xl:h-8 3xl:h-12" src={StripeIcon} alt="StripeIcon" />
                Continue With Stripe
              </button>
            </div>
            <p className="mt-5 md:mt-10 3xl:mt-[200px] text-sm md:text-base" data-aos="fade-up">By proceeding, you acknowledge and automatically agree to our Terms and Conditions. For more details, <Link to={'/terms-condition'} className="text-theme-orange hover:underline">please review our terms here.</Link></p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentHero;
