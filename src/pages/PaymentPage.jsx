import React from "react";
import NewsLatterSection from "../components/homepage/NewsLatterSection";
import SmartSolutionSection from "../components/homepage/SmartSolutionSection";
import UltradriveStoreSection from "../components/homepage/UltradriveStoreSection";
import PaymentHero from "../components/paymentPage/PaymentHero";

const PaymentPage = () => {
  return (
    <>
      <PaymentHero />
      <UltradriveStoreSection />
      <SmartSolutionSection />
      <NewsLatterSection />
    </>
  );
};

export default PaymentPage;
