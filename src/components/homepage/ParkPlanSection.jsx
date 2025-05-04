import React from "react";
import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import PlanCard from "./parkPlanSection/PlanCard";
const cardsdata = [
  {
    id: 1,
    price: "6.99",
    packageName: "ParkClear Polished Driver",
    discount: "50% off of the 1st month",
    status: "active",
    packageType: "polished",
    features: [
      "Full Ticket Tracker dashboard",
      "Leave Right Planner",
      "Basic Parking Ticket Support Service",
      "Cheapest Petrol stations near you",
      "TripSaver",
    ],
  },
  {
    id: 2,
    price: "11.99",
    packageName: "ParkClear Premier Driver",
    discount: "50% off of the 1st month",
    packageType: "premier",
    features: [
      "Full Ticket Tracker dashboard",
      "Leave Right Planner",
      "Full Parking Ticket Support Service",
      "TripSaver+",
      "TripSaver",
      "Roadside and Home Breakdown Cover",
      "Monthly mistrybox",
    ],
  },
  {
    id: 3,
    price: "16.99",
    packageName: "ParkClear Premier Driver ",
    discount: "50% off of the 1st month",
    packageType: "pro",
    features: [
      "Full Ticket Tracker dashboard",
      "Cost saver Route Planner",
      "Full Parking Ticket Support Service",
      "Cheapest Petrol stations near you",
      "Free Parking Near Me",
      "Roadside and Home Breakdown Cover",
      "New Car Support Service",
      "25% off our ParkClear UltraDriver Store",
      "Discounted Carwashing",
    ],
  },
];

const ParkPlanSection = () => {
  return (
    <section className="py-[100px] 3xl:py-[128px]">
      <Container>
        {/* title  */}
        <TitleCommon
          subTitle="Three powerful plans. Zero parking stress. Pick your perfect match."
          paragraph="Smarter Driving Starts Here Today – Join the ParkClear club of drivers toda"
        >
          <h3 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
            Drive Smart. <span className="text-theme-orange">Park</span>{" "}
            Smarter.
          </h3>
        </TitleCommon>
        <div className="grid grid-cols-3 gap-5 mt-12">
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
