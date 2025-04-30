import DashboardHeader from "@/components/common/DashboardHeader";
import { LeftSvg, LockSvg } from "@/components/svg-container/SvgContainer";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword = ({ setChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <section>
      <DashboardHeader title="Settings" />
      <div className="w-[544px] mx-auto mt-24">
        <div className="flex justify-end mb-16">
          <button
            onClick={() => setChangePassword(false)}
            className="flex gap-2 cursor-pointer items-center"
          >
            <LeftSvg />
            <span className="text-theme-orange font-medium">Go Back</span>
          </button>
        </div>
        <h3 className="text-3xl font-bold mb-2">Change Password</h3>
        <p className="text-text-gray mb-7">
          Please fill your information below
        </p>

        <div className="space-y-5">
          {/* {/ Current Password /} */}
          <div className="relative">
            <input
              type={currentPassword ? "text" : "password"}
              placeholder="Current Password"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border border-default-border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-4">
              <LockSvg />
            </p>
            <button
              onClick={() => setCurrentPassword(!currentPassword)}
              className="absolute top-5 right-5 cursor-pointer"
            >
              {currentPassword ? (
                <FiEye className="text-xl" />
              ) : (
                <FiEyeOff className="text-xl" />
              )}
            </button>
          </div>
          {/* {/ New Password /} */}
          <div className="relative">
            <input
              type={newPassword ? "text" : "password"}
              placeholder="New Password"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border border-default-border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-4">
              <LockSvg />
            </p>
            <button
              onClick={() => setNewPassword(!newPassword)}
              className="absolute top-5 right-5 cursor-pointer"
            >
              {newPassword ? (
                <FiEye className="text-xl" />
              ) : (
                <FiEyeOff className="text-xl" />
              )}
            </button>
          </div>
          {/* {/ Confirm Password /} */}
          <div className="relative">
            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border border-default-border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-4">
              <LockSvg />
            </p>
            <button
              onClick={() => setConfirmPassword(!confirmPassword)}
              className="absolute top-5 right-5 cursor-pointer"
            >
              {confirmPassword ? (
                <FiEye className="text-xl" />
              ) : (
                <FiEyeOff className="text-xl" />
              )}
            </button>
          </div>
          {/* {/ Submit btn /} */}
          <div className="flex justify-end">
            <button className="px-7 cursor-pointer font-medium mt-5 py-3 rounded-[6px] bg-theme-orange text-white border border-theme-orange hover:bg-transparent hover:text-theme-orange duration-300 transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
