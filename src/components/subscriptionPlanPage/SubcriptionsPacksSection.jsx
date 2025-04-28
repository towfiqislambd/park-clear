import React from "react";
import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import PricingPlans from "./PricingPlans";

const SubcriptionsPacksSection = () => {
    const features = [
        "Basic Route Planner",
        "Basic Parking Ticket Support Service",
        "Cheapest Petrol stations near you",
        "Free Parking Near Me",
        "Cost saver Route Planner",
        "Full Parking Ticket Support Service",
        "Roadside and Home Breakdown Cover",
        "New Car Support Service",
        "15% off our ParkClear Ultrathiver Store",
        "Discounted Canvustling"
      ];
      const plans = [
        { name: "Free", price: "£0", included: Array(features.length).fill(false) },
        { name: "Active New", price: "£11.99", included: [true, false, false, false, false, false, false, false, false, false] },
        // Add other plans with their feature inclusions
      ];
  return (
    <section className="py-[128px]">
      <Container>
        <TitleCommon
          subTitle="Three powerful plans. Zero parking stress. Pick your perfect match."
          paragraph="No more parking guesswork—just smarter driving. Whether you're an everyday commuter or a weekend wanderer, we've got a plan that fits your ride."
        >
          <h1 className="title--xxl">
            Drive Smart. <span className="text-theme-orange">Park</span>{" "}
            Smarter.
          </h1>
        </TitleCommon>
        <PricingPlans />
      </Container>
    </section>
  );
};

export default SubcriptionsPacksSection;
