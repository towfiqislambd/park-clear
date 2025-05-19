import { FaArrowRightLong } from "react-icons/fa6";
import driveImage from "../../assets/images/newLogo.png";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../container/Container";

const UltradriveStoreSection = () => {
  return (
    <section className="bg-[#202020]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left */}
          <div className="lg:w-[56%] py-[50px] md:py-[70px] xl:py-[128px] px-[30px]">
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
                className="text-white bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit mt-8 2xl:mt-12"
              />
            </div>
          </div>
          {/* Right */}
          <div
            className="lg:w-[50%] hidden lg:block"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <figure className="w-[820px] h-[430px]">
              <img
                className="w-full h-full object-cover"
                src={driveImage}
                alt=""
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UltradriveStoreSection;
