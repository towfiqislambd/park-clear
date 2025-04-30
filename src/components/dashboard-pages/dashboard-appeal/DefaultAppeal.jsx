import { ChooseFileSvg } from "@/components/svg-container/SvgContainer";
import DashboardHeader from "../../common/DashboardHeader";

const DefaultAppeal = ({ setProceed, setAppeal }) => {
  return (
    <div>
      <DashboardHeader title="Appeal Management" />
      <div className="grid grid-cols-12 mt-10">
        {/* Left Side */}
        <div className="col-span-6">
          {/* Appeal For */}
          <div className="mb-10">
            <h3 className="text-[22px] mb-3 font-semibold text-dashboard-common-heading dark:text-white">
              Appeal For
            </h3>
            <select className="block w-full px-5 py-4 rounded-lg border border-default-border  outline-none bg-white dark:bg-black dark:border-border-gray ">
              <option value="">Select PNC</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* Upload Attachment */}
          <label htmlFor="uploadAttachment" className="w-full block mb-10">
            <div
              className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2"
            >
              <ChooseFileSvg />
              <p className="text-black text-lg dark:text-white">Upload attachment</p>
            </div>
            <input
              type="file"
              className="hidden"
              id="uploadAttachment"
            />
          </label>
          {/* Description */}
          <div>
            <h3 className="text-[22px] mb-3 font-semibold text-dashboard-common-heading dark:text-white ">
              Tell Us Why You Want To Appeal
            </h3>
            <textarea
              rows={13}
              placeholder="Your Opinion"
              className="block w-full px-5 py-4 rounded-lg border border-default-border  dark:border-gray-700 outline-none bg-white dark:bg-black"
            ></textarea>
          </div>
        </div>
        <div className="col-span-1"></div>

        {/* Right Side */}
        <div className="col-span-5">
          <div className="p-10 rounded-lg border border-default-border  dark:border-gray-700 bg-white dark:bg-black grid grid-cols-3 gap-x-5 gap-y-10 mb-5">
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white text-lg font-semibold mb-1">
                Issue Date:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white text-lg font-semibold mb-1">
                PCN No:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white text-lg font-semibold mb-1">
                Location:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white text-lg font-semibold mb-1">
                Last Date:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white  text-lg font-semibold mb-1">
                Car Model:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">
                Data
              </p>
            </div>
          </div>

          <div className="p-10 mb-10 rounded-lg border border-default-border dark:border-gray-700 bg-white dark:bg-black">
            <h3 className="text-[22px] mb-2 font-semibold text-dashboard-common-heading dark:text-white">
              If You proceed with us
            </h3>
            <h2 className="font-bold text-sidebar-card-headingOne text-4xl">
              $3.99
            </h2>
          </div>

          {/* Btns */}
          <div className="space-y-5">
            <button
              onClick={() => setProceed(true)}
              className="h-16 font-medium text-lg w-full block bg-sidebar-card-headingOne border border-sidebar-card-headingOne rounded-lg text-white cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-sidebar-card-headingOne"
            >
              Proceed With ParkClear
            </button>
            <button
              onClick={() => setAppeal(true)}
              className="h-16 border border-sidebar-card-headingOne font-medium text-lg w-full block text-sidebar-card-headingOne rounded-lg cursor-pointer transition-all duration-500 hover:bg-sidebar-card-headingOne hover:text-white"
            >
              Generate Appeal letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultAppeal;
