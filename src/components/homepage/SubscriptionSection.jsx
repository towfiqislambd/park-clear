import React from "react";
import { GoQuestion } from "react-icons/go";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";
const SubscriptionSection = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="100">
      <Container>
        <div className="p-12 border border-default-border bg-[#FAFBFC] rounded-[8px] text-center">
          <p
            className="h-[64px] w-[64px] flex items-center justify-center bg-theme-orange rounded-full text-[30px] text-white mx-auto"
            data-aos="zoom-out"
          >
            <GoQuestion />
          </p>
          <div className="w-[350px] mx-auto">
            <h4
              className="title--sm !text-menu-color mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Subscribe Today
            </h4>
            <p
              className="text-sm mt-4 text-text-gray"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              If you subscribe today you will get a free 5L of car screen wash{" "}
            </p>
            <p
              className="title--sm !text-theme-sky-blue font-bold mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Offer ends 26.05.2025
            </p>
            <div data-aos="zoom-out" data-aos-delay="100">
              <PrimaryButton
                text="Subscribe Now"
                className="bg-theme-orange text-white mt-8 hover:bg-transparent hover:text-theme-orange w-fit mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionSection;
