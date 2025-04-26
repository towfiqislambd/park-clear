import PrimaryButton from "../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";
import driveImage from "../../assets/images/ultradrive.png"

const UltradriveStoreSection = () => {
  return (
    <section className="bg-dark-blue">
      <div className="flex items-stretch">
        <div className="w-[56%] py-[128px] px-[120px]">
            <p className="title--sm">UltraDriver Store</p>
            <h3 className="title--xxl !text-white">Sign up, Save & Drive <span className="text-theme-orange">Smarter</span></h3>
            <p className="text-white mt-6">Join ParkClear today and unlock 15% off all orders at UltraDriver.co.uk – your go-to store for innovative car gadgets.</p>
            <PrimaryButton text="Go to UltraDrive" icon={<FaArrowRightLong />} className="text-white bg-theme-orange hover:bg-transparent hover:text-theme-orange border-theme-orange w-fit mt-12" />
        </div>
        <div className="w-[44%]">
        <img className="w-full h-full" src={driveImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default UltradriveStoreSection;