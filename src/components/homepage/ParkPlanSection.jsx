import React from "react";
import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import PlanCard from "./parkPlanSection/PlanCard";
const cardsdata = [
  {
    id: 1,
    price: "4.99",
    packageName: "ParkClear Polished Driver",
    discount: "1 month free trial",
    status: "active",
    packageType: "polished",
    features: [
      "Full TickeTracker Dashboard",
      "Fine Support Service",
      "MyCarHealth",
      "15% Off UltraDriver.co.uk",
      "TripSaver+",
      "Car Insurance Reminders",
    ],
  },
  {
    id: 2,
    price: "9.99",
    packageName: "ParkClear Premier Driver",
    discount: "1 month free trial",
    packageType: "premier",
    features: [
      "Full TickeTracker Dashboard",
      "Fine Support Service",
      "MyCarHealth",
      "15% Off UltraDriver.co.uk",
      "TripSaver+",
      "Car Insurance Reminders",
      "New Car Service",
      "Road and Home BreakDown Cover",
    ],
  },
  {
    id: 3,
    price: "13.99",
    packageName: "ParkClear Premier Driver ",
    discount: "1 month free trial",
    packageType: "pro",
    features: [
      "Full TickeTracker Dashboard",
      "Fine Support Service",
      "MyCarHealth",
      "Garage Smart Assist",
      "25% Off UltraDriver.co.uk",
      "TripSaver+",
      "New Car Service",
      "Road and Home BreakDown Cover",
      "ParkClear PitStop Pack",
      "25% Off at our CarWash Partners",
    ],
  },
];

const ParkPlanSection = () => {
  return (
    <section className="py-10 2xl:py-[100px] 3xl:py-[128px]">
      <Container>
        {/* title  */}
        <TitleCommon
          subTitle="Three powerful plans. Everything you need to manage your driving admin"
          paragraph="Smarter Driving Starts Here Today – Join the ParkClear club of drivers today"
        >
          <h3 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
            Drive Smart. <span className="text-theme-orange">Park</span>{" "}
            Smarter.
          </h3>
        </TitleCommon>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-7 md:mt-12">
          {cardsdata.map((card, index) => (
            <div key={card?.id} data-aos="fade-up" data-aos-delay={index * 150}>
              <PlanCard item={card} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ParkPlanSection;
