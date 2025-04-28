import React from "react";
import NewsLatterSection from "../components/homepage/NewsLatterSection";
import SmartSolutionSection from "../components/homepage/SmartSolutionSection";
import UltradriveStoreSection from "../components/homepage/UltradriveStoreSection";
import TermsConditionHero from "../components/termsConditionPage/TermsConditionHero";

const TermConditionPage = () => {
  return (
    <>
      <TermsConditionHero />
      <UltradriveStoreSection />
      <SmartSolutionSection />
      <NewsLatterSection />
    </>
  );
};

export default TermConditionPage;
