import React from "react";
import TrustPilotLogo from "../../assets/logo/trustpilot.svg";
import Container from "../container/Container";
import PrimaryButton from "../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import TrustPilotReviewSlider from "./trustPilotReviewSection/TrustPilotReviewSlider";

const TrustPilotReviewSection = () => {
  return (
    <section className="py-6 md:py-10 xl:py-20 2xl:py-[128px] bg-light-mastard">
      <Container>
        <div className="flex items-center flex-col lg:flex-row gap-6 sm:gap-10">
          {/* Left */}
          <div className="lg:w-[35%] 3xl:w-[41%]">
            <img
              className="w-[130px] lg:w-[200px] h-[50px] 2xl:w-[260px] 2xl:h-[69px]"
              src={TrustPilotLogo}
              alt="TrustPilotLogo"
              data-aos="zoom-out"
            />
            <h3 className="title--xxl sm:mt-3 lg:mt-5 2xl:mt-10" data-aos="fade-up" data-aos-delay="100">
              Why Our Users <span className="text-theme-orange">Trust</span> Us
            </h3>
            <p className="mt-3 text-sm sm:text-base sm:mt-5" data-aos="fade-up" data-aos-delay="200">
              Take the stress out of driving with ParkClear Planner, your
              all-in-one subscription for managing life on the road. We’ve
              bundled everything you need to stay organized, prepared, and
              worry-free—all in one convenient place.
            </p>
            {/* <PrimaryButton text="See Our community" icon={<FaArrowRightLong />} className="mt-12 bg-theme-orange text-white hover:bg-transparent hover:text-theme-orange w-fit" /> */}
          </div>
          {/* Right */}
          <div className="w-full lg:w-[65%] 3xl:w-[59%] lg:pl-[30px] xl:pl-[50px] 2xl:pl-[166px]">
            <TrustPilotReviewSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustPilotReviewSection;
