import { FaArrowRightLong } from "react-icons/fa6";
import driveImage from "../../assets/images/ultradrive.png";
import PrimaryButton from "../common/PrimaryButton";

const UltradriveStoreSection = () => {
  return (
    <section className="bg-dark-blue">
      <div className="flex items-stretch flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-[56%] py-[50px] md:py-[70px] xl:py-[128px] px-[30px] xl:px-[120px]">
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
              text="Go to UltraDrive"
              icon={<FaArrowRightLong />}
              className="text-white bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit mt-8 2xl:mt-12"
            />
          </div>
        </div>
        {/* Right */}
        <div className="lg:w-[44%] hidden lg:block" data-aos="fade-in" data-aos-delay="100">
          <figure className="w-full h-full">
            <img className="w-full h-full object-cover" src={driveImage} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default UltradriveStoreSection;
