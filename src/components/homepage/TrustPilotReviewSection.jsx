import React from "react";
import TrustPilotLogo from "../../assets/logo/trustpilot.svg";
import Container from "../container/Container";
import PrimaryButton from "../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import TrustPilotReviewSlider from "./trustPilotReviewSection/TrustPilotReviewSlider";

const TrustPilotReviewSection = () => {
  return (
    <section className="py-[128px] bg-light-mastard">
      <Container>
        <div className="flex items-center flex-wrap">
          <div className="w-[41%]">
            <img
              className="w-[260px] h-[69px]"
              src={TrustPilotLogo}
              alt="TrustPilotLogo"
            />
            <h3 className="title--xxl mt-10">
              Why Our Users <span className="text-theme-orange">Trust</span> Us
            </h3>
            <p className="mt-5">
              Take the stress out of driving with ParkClear Planner, your
              all-in-one subscription for managing life on the road. We’ve
              bundled everything you need to stay organized, prepared, and
              worry-free—all in one convenient place.
            </p>
            <PrimaryButton text="See Our community" icon={<FaArrowRightLong />} className="mt-12 bg-theme-orange text-white hover:bg-transparent hover:text-theme-orange w-fit" />
          </div>
          {/* reviews  */}
          <div className="w-[59%] pl-[166px]">
            <TrustPilotReviewSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustPilotReviewSection;
