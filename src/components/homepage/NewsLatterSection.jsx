import React from "react";
import Container from "../container/Container";

const NewsLatterSection = () => {
  return (
    <section className="py-10 md:py-20 3xl:py-[164px] bg-light-mastard mt-[55px]">
      <Container>
        <div className="flex items-center 2xl:justify-between flex-wrap gap-3 md:gap-8">
          {/* Left */}
          <div
            className="text-xl md:text-2xl 2xl:text-[40px] 3xl:text-[64px] font-semibold max-w-[346px]"
            data-aos="fade-up" data-aos-delay="100"
          >
            Join Our <span className="text-theme-orange">Newsletter</span>
          </div>
          
          {/* Center */}
          <p className="max-w-[361px] text-sm md:text-base" data-aos="fade-up" data-aos-delay="100">
            We’ll drop the occasional update, exclusive tools and services, and
            offers straight to your inbox – only the good stuff. Stay in the
            loop – you’ll thank us later
          </p>
          {/* Right */}
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="email"
              placeholder="youremail12@gmail.com"
              className="py-2 md:py-3 3xl:py-6 px-3 md:px-5 3xl:px-7 w-full max-w-[430px] bg-white lg:font-bold font-medium text-sm md:text-base focus:outline-none rounded-tl-[10px] rounded-bl-[10px] 3xl:rounded-tl-[16px] 3xl:rounded-bl-[16px]"
            />
            <button
              type="button"
              className="py-2 md:py-3 3xl:py-[19px] cursor-pointer px-3 md:px-5 3xl:px-[83px] text-white bg-theme-orange md:text-[18px] text-sm md:text-base font-medium md:font-bold rounded-tr-[10px] 3xl:rounded-tr-[16px] rounded-br-[10px] 3xl:rounded-br-[16px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLatterSection;
