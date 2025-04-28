import React from "react";
import AboutHeroSection from "../components/aboutpage/AboutHeroSection";
import NewsLatterSection from "../components/homepage/NewsLatterSection";
import SmartSolutionSection from "../components/homepage/SmartSolutionSection";
import UltradriveStoreSection from "../components/homepage/UltradriveStoreSection";

const AboutUsPage = () => {
  return (
    <>
      <AboutHeroSection />
      <UltradriveStoreSection />
      <SmartSolutionSection />
      <NewsLatterSection />
    </>
  );
};

export default AboutUsPage;
