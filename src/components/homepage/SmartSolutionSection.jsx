import React from "react";
import Img from "../../assets/images/smart-solution.png";
import Container from "../container/Container";
import PrimaryButton from "../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const SmartSolutionSection = () => {
  return (
    <section className="py-[190px]">
      <Container>
        <div className="flex items-center">
          <div className="h-[700px] w-[40%] rounded-[16px] overflow-hidden">
            <img className="h-full w-full object-cover" src={Img} alt="Img" />
          </div>
          <div className="w-[60%] pl-[166px]">
            <p className="title--sm">Smart Solutions That Keep You Stress Free</p>
            <h3 className="title--xxl leading-[110px]">Dispute your <span className="text-theme-orange">PCN</span> in minutes – stress-free.</h3>
            <p className="mt-6">Got a parking ticket? Whether it’s from a private company, or an authority. ParkClear helps you appeal it the smart way – no legal speak, no guesswork. Tell us why you want to appeal and our easy to use appeal builder software will help. You’ve got nothing to lose! If you feel you have mitigating circumstances Don’t just pay it – challenge it.</p>
            <PrimaryButton text="Go to  The DashBoard" icon={<FaArrowRightLong />} className="text-white bg-theme-orange border-theme-orange hover:bg-transparent hover:text-theme-orange w-fit mt-12"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SmartSolutionSection;
