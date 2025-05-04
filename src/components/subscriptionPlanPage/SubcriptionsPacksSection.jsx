import React from "react";
import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import PricingPlans from "./PricingPlans";

const SubcriptionsPacksSection = () => {
  return (
    <section className="py-10 2xl:py-20 3xl:py-[128px]">
      <Container>
        <TitleCommon
          subTitle="Three powerful plans. Zero parking stress. Pick your perfect match."
          paragraph="No more parking guesswork—just smarter driving. Whether you're an everyday commuter or a weekend wanderer, we've got a plan that fits your ride."
        >
          <h1 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
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
