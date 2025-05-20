import { FaArrowRightLong } from "react-icons/fa6";
import driveImage from "../../assets/images/newLogo.png";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";

const UltradriveStoreSection = () => {
  return (
    <section className="bg-[#202020]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Left */}
          <div className="w-full lg:w-[56%] sm:px-6 md:px-8 pt-10 md:py-16 xl:py-[128px]">
            <p className="title--sm" data-aos="fade-up">
              UltraDriver Store
            </p>
            <h3
              className="title--xxl !text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Sign up, Save & Drive{" "}
              <span className="text-theme-orange">Smarter</span>
            </h3>
            <p
              className="text-white mt-4 md:mt-6 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join ParkClear today and unlock 15% off all orders at
              UltraDriver.co.uk – your go-to store for innovative car gadgets.
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <PrimaryButton
                text="Go to UltraDriver"
                icon={<FaArrowRightLong />}
                className="text-white bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit mt-6 md:mt-8 2xl:mt-12"
              />
            </div>
          </div>
          {/* Right */}
          <div
            className="w-full lg:w-[50%] px-4 lg:px-0"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <figure className="w-full h-auto max-w-[820px] mx-auto lg:mx-0">
              <img
                className="w-full h-full object-contain sm:object-cover"
                src={driveImage}
                alt="UltraDriver promo"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UltradriveStoreSection;
