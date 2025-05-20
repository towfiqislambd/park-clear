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
            <h3
              className="text-xl sm:text-2xl md:text-3xl 2xl:text-[40px] font-bold text-theme-sky-blue sm:mt-3 lg:mt-5 2xl:mt-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              One Dashboard. Everything a driver needs
            </h3>
            <p
              className="mt-3 text-sm sm:text-base sm:mt-5"
              data-aos-delay="200"
            >
              No more juggling apps, websites, and paperwork. ParkClear brings
              together your MOT, servicing, PCNs, and car admin into a single,
              easy-to-use dashboard — so you stay on top of everything that
              matters.
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
