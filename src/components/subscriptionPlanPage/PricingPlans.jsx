import React from "react";
import ComparePlansCard from "./ComparePlansCard";
import PlanCard from "./PlanCard";

const PricingPlans = () => {
  const featureDetails = {
    title: "Compare Plans",
    description:
      "Choose your workspace plan according to your organisational plan",
    features: [
      { id: 1, name: "Full Ticket Tracker dashboard" },
      { id: 2, name: "Basic Route Planner" },
      { id: 3, name: "Basic Parking Ticket Support Service" },
      { id: 4, name: "Cheapest Petrol stations near you" },
      { id: 5, name: "Free Parking Near Me" },
      { id: 6, name: "Cost saver Route Planner" },
      { id: 7, name: "Full Parking Ticket Support Service" },
      { id: 8, name: "Roadside and Home Breakdown Cover" },
      { id: 9, name: "New Car Support Service" },
      { id: 9, name: "15% off our ParkClear UltraDriver Store " },
      { id: 9, name: "Discounted Carwashing" },
    ],
  };

  const plans = [
    {
      id: 1,
      price: "free",
      featureStatus: [
        true,
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
    },
    {
      id: 2,
      price: "11.99",
      featureStatus: [
        true,
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
    },
    {
      id: 3,
      price: "18.99",
      featureStatus: [
        true,
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
    },
    {
      id: 4,
      price: "26.99",
      featureStatus: [
        true,
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
    },
  ];
  return (
    <div className="border border-default-border mt-12 rounded-[16px] overflow-hidden flex items-start">
        <ComparePlansCard data={featureDetails} />
        {
            plans?.map((card) => (
                <PlanCard key={card?.id} item={card} />
            ))
        }
    </div>
  )
};

export default PricingPlans;
