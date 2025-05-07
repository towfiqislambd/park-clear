import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../../assets/logo/hero-logo.svg";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";

const HeroSection = () => {
  return (
    <section className="py-14 md:py-20 md:py-[154px] bg-white">
      <Container>
        <div className="text-center">
          {/* sub title  */}
          <p
            className="flex items-center flex-wrap gap-5 justify-center"
            data-aos="fade-up"
          >
            <span className="title--sm">
              Innovative all-in-one driver assistance platform
            </span>{" "}
            <img
              className="w-[40px] lg:w-[67px] 3xl:h-20"
              src={Logo}
              alt="Logo"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </p>
          <h1 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
            Introducing <span className="text-theme-orange">ParkClear</span>{" "}
            Planner
          </h1>
          <p
            className="text-black max-w-[670px] mx-auto mt-6 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Take the stress out of driving with ParkClear Planner, your
            all-in-one subscription for managing life on the road. We’ve bundled
            everything you need to stay organized, prepared, and worry-free—all
            in one convenient place.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <PrimaryButton
              pathname={"/dashboard/overview"}
              text="try Our TickeTracker Dashboard"
              icon={<FaArrowRightLong />}
              className="p-5 bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit text-white capitalize mx-auto mt-6"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
