
import Logo from "../../../assets/logo/logo-footer.svg";
import PrimaryButton from "../../common/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const FreeDashboard = () => {
  return (
    <div className="p-[70px] border border-default-border rounded-[16px] mt-6 bg-white">
     <img className="w-[118px] h-[90px] mb-12" src={Logo} alt="Logo" />
     <h3 className="text-[32px] font-semibold mb-6">Don't Wait! Start Using Your <span className="text-theme-sky-blue">Free Dashboard</span> Today!</h3>
     <PrimaryButton text="Start Now" pathname="/" className="bg-theme-orange border-theme-orange text-white w-fit hover:bg-transparent hover:text-theme-orange" icon={<FaArrowRightLong />} />
    </div>
  );
};

export default FreeDashboard;