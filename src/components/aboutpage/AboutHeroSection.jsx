import React from "react";
import Container from "../container/Container";

const AboutHeroSection = () => {
  return (
    <section className="py-10 2xl:py-20 3xl:py-[130px]">
      <Container>
        <div>
          <p className="title--sm" data-aos="fade-up">
            Learn more about who we are and what we do.
          </p>
          <h1
            className="title--xxl m-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <span className="text-theme-orange">Us</span>
          </h1>
          <p
            className="max-w-[544px] text-text-gray text-2xl mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Driving Simplicity Into Car Ownership
          </p>
          <div>
            <p
              className="mt-5 sm:mt-7 mb-10 2xl:mt-12 text-sm md:text-xl font-medium"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              At ParkClear, we're on a mission to make managing your car easier,
              faster, and less stressful. From handling penalty charge notices
              (PCNs) to tracking your MOT and servicing schedule, ParkClear
              gives you the tools to stay in control of your vehicle — all in
              one place.
              <br />
              <br />
              We’re building a smarter platform for UK drivers who are tired of
              wasting time, money, and energy dealing with everyday car admin.
            </p>
            <hr className="py-3" />
            <h2 className="font-semibold mb-2 text-3xl">What We Do</h2>
            <p className="font-medium mb-3 text-xl">ParkClear helps drivers:</p>
            <ul className="list-disc list-inside font-medium space-y-5 text-xl">
              <li>Stay on top of PCNs with clear guidance and next steps</li>
              <li>Track MOT, servicing, and general maintenance</li>
              <li>
                Access useful links to council payment portals, DVLA tools, and
                driver legal resources
              </li>
              <li>
                Discover exclusive partner offers on car care and services
              </li>
              <li>
                Manage their vehicle through a clean, easy-to-use online
                dashboard
              </li>
            </ul>

            <p className="font-medium mt-5 mb-10 text-xl">
              Whether you're a daily commuter, a new driver, or managing
              multiple vehicles, ParkClear is designed to simplify every aspect
              of ownership.
            </p>

            <h2 className="font-semibold text-2xl mb-5">Built for Drivers</h2>
            <p className="font-medium text-xl">
              ParkClear is built around real driving pain points — the forgotten
              service date, the surprise PCN, the scramble to find a reliable
              mechanic. Our goal is to centralise your vehicle admin and connect
              you with trusted resources and offers, without the noise.
              <br />
              <br />
              We believe in delivering value through tech-first tools, clear
              information, and partnerships that improve the day-to-day driving
              experience.
            </p>

            <h2 className="font-semibold text-2xl mb-5 mt-10">
              Join the Platform
            </h2>
            <p className="font-medium text-xl">
              If you own a car in the UK, ParkClear is here to help you run it
              better.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;
