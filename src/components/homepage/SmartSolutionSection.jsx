import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Img from "../../assets/images/asian_man.png";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";

const SmartSolutionSection = () => {
  return (
    <section className="pt-10 md:py-10 lg:py-20 2xl:py-[100px] 3xl:py-[190px]">
      <Container>
        <div className="flex items-center gap-5 flex-col lg:flex-row">
          {/* Left */}
          <div
            className="w-full lg:w-[40%] h-[300px] lg:h-[450px] xl:h-[550px] 3xl:h-[700px] rounded-[16px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img className="h-full w-full object-cover" src={Img} alt="Img" />
          </div>
          {/* Right */}
          <div className="lg:w-[60%] lg:pl-7 xl:pl-10 2xl:pl-[80px] 3xl:pl-[166px]">
            <p className="title--sm" data-aos="fade-up">
              Smart Solutions That Keep You Stress Free
            </p>
            <h3
              className="title--xxl 3xl:leading-[110px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Dispute your <span className="text-theme-orange">PCN</span> in
              minutes – stress-free.
            </h3>
            <p className="mt-3 md:mt-6 text-sm xl:text-base" data-aos="fade-up" data-aos-delay="200">
              Got a parking ticket? Whether it’s from a private company, or an
              authority. ParkClear helps you appeal it the smart way – no legal
              speak, no guesswork. Tell us why you want to appeal and our easy
              to use appeal builder software will help. You’ve got nothing to
              lose! If you feel you have mitigating circumstances Don’t just pay
              it – challenge it.
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <PrimaryButton
                text="Go to  The DashBoard"
                icon={<FaArrowRightLong />}
                className="text-white bg-theme-orange border-theme-orange hover:bg-transparent hover:text-theme-orange w-fit mt-7 2xl:mt-12"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SmartSolutionSection;
