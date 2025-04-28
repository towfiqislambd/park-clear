import React from "react";
import Container from "../container/Container";

const NewsLatterSection = () => {
  return (
    <section className="py-[164px] bg-light-mastard mt-[55px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-[64px] font-semibold w-[346px]">
            Join Our <span className="text-theme-orange">Newsletter</span>
          </div>
          <p className="w-[361px]">
            We’ll drop the occasional update, exclusive tools and services, and
            offers straight to your inbox – only the good stuff. Stay in the
            loop – you’ll thank us later
          </p>
          <div className="flex items-center">
            <input type="email" placeholder="youremail123@gmail.com" className="py-6 px-7 w-[430px] bg-white font-bold focus:outline-none rounded-tl-[16px] rounded-bl-[16px]" />
            <button type="button" className="py-[19px] curso-pointer px-[83px] text-white bg-theme-orange text-[18px] font-bold rounded-tr-[16px] rounded-br-[16px]">Subscribe</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLatterSection;
