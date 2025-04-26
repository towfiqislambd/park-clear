import React from "react";
import Logo from "../../assets/logo/hero-logo.svg";
import Container from "../container/Container";
import PrimaryButton from "../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="pt-[154px] pb-[178px] bg-white">
      <Container>
        <div className="text-center">
          {/* sub title  */}
          <p className="flex items-center gap-5 justify-center">
            <span className="title--sm">
              Innovative all-in-one driver assistance platform
            </span>{" "}
            <img className="w-[67px] h-20" src={Logo} alt="Logo" />
          </p>
          <h1 className="title--xxl">
            Introducing <span className="text-theme-orange">ParkClear</span>{" "}
            Planner
          </h1>
          <p className="text-black w-[670px] mx-auto mt-6">
            Take the stress out of driving with ParkClear Planner, your
            all-in-one subscription for managing life on the road. We’ve bundled
            everything you need to stay organized, prepared, and worry-free—all
            in one convenient place.
          </p>
          <PrimaryButton text="try Our TickeTracker Dashboard" icon={<FaArrowRightLong />} className="p-5 bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit text-white capitalize mx-auto mt-6"/>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
