import React from "react";
import bgImg from "../../assets/images/fleetRental.png";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";

const FleetRentalBusiness = () => {
  return (
    <section>
      <Container>
        <div
          className="fleetRental-card relative z-[1] bg-cover bg-no-repeat bg-center rounded-[16px] overflow-hidden py-[256px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="w-[1140px] mx-auto text-center">
            <h3 className="title--xxl !text-white">
              <span className="text-theme-orange">Fleet or Rental</span>{" "}
              Business? We’ve Got You{" "}
              <span className="text-theme-orange">Covered</span>.
            </h3>
            <p className="text-white mt-6 w-[680px] mx-auto">
              Manage parking tickets at scale with our secure dashboard, built
              for companies with multiple vehicles. Save time, reduce admin
              costs, and stay on top of PCNs across your entire fleet.
            </p>
            <PrimaryButton
              text="Schedule a Demo"
              className="text-white border-theme-orange w-fit mx-auto bg-theme-orange hover:bg-transparent hover:text-theme-orange mt-[96px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FleetRentalBusiness;
