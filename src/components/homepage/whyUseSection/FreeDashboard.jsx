import Logo from "../../../assets/logo/logo-footer.svg";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const FreeDashboard = () => {
  return (
    <div className="p-5 md:p-[30px] 3xl:p-[40px] border border-default-border rounded-[16px] mt-3 md:mt-6 bg-white" data-aos="fade-in" data-aos-delay="100">
      <img className="w-[70px] md:w-[100px] xl:w-[118px] h-[50px] md:h-[80px] xl:h-[90px] mb-3 sm:mb-5 3xl:mb-12" src={Logo} alt="Logo" />
      <h3 className="text-lg sm:text-xl md:text-[22px] 2xl:text-2xl 3xl:text-[32px] font-semibold mb-4 sm:mb-6">Don't Wait! Start Using Your <span className="text-theme-sky-blue">Free Dashboard</span> Today!</h3>
      <PrimaryButton text="Start Now" pathname="/" className="bg-theme-orange border-theme-orange text-white w-fit hover:bg-transparent hover:text-theme-orange" icon={<FaArrowRightLong />} />
    </div>
  );
};

export default FreeDashboard;