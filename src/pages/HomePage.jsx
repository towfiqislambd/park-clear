import React from "react";
import FleetRentalBusiness from "../components/homepage/FleetRentalBusiness";
import HeroSection from "../components/homepage/HeroSection";
import NewsLatterSection from "../components/homepage/NewsLatterSection";
import ParkPlanSection from "../components/homepage/ParkPlanSection";
import SmartSolutionSection from "../components/homepage/SmartSolutionSection";
import SubscriptionSection from "../components/homepage/SubscriptionSection";
import TrustPilotReviewSection from "../components/homepage/TrustPilotReviewSection";
import UltradriveStoreSection from "../components/homepage/UltradriveStoreSection";
import WhyUseSection from "../components/homepage/WhyUseSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyUseSection />{/* 
      <div className="py-[64px]">
        <SubscriptionSection />
      </div>
      <ParkPlanSection />
      <TrustPilotReviewSection />
      <UltradriveStoreSection />
      <SmartSolutionSection />
      <FleetRentalBusiness />
      <NewsLatterSection /> */}
    </>
  );
};

export default HomePage;
