import DashboardHeader from "@/components/common/DashboardHeader";
import profile_img from "../../../assets/images/asian_man.png";
import {
  ChangePassSvg,
  DarkModeSvg,
  DeleteSvg,
  DesktopSvg,
  LightModeSvg,
  LogoutSvg,
  NotificationSvg,
  PrivacySvg,
  RightArrowSvg,
  TermsSvg,
} from "@/components/svg-container/SvgContainer";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import LogoutModal from "@/components/modals/LogoutModal";
import DeleteAccountModal from "@/components/modals/DeleteAccountModal";
import { Link } from "react-router-dom";

const DefaultSettings = ({ setChangePassword, setEditProfile, theme, handleThemeChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <section className="mb-14 xl:mb-5">
      <DashboardHeader title="Settings" />

      {/* Profile Overview */}
      <div className="flex gap-3 md:gap-0 flex-col md:flex-row justify-between md:items-end px-5 py-4 mt-5 mb-5 md:mb-10 rounded-xl bg-white dark:bg-black border border-default-border dark:border-border-gray">
        {/* Left */}
        <div className="flex flex-col lg:flex-row gap-5">
          <figure className="w-[170px] xl:w-[190px] h-[160px] xl:h-[180px] rounded-lg">
            <img
              src={profile_img}
              alt="profile_img"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="">
            <h3 className="font-medium text-dashboard-common-heading dark:text-white text-2xl mb-2 xl:mb-3">
              Musfiq
            </h3>
            <p className="ext-dashboard-common-heading mb-1 dark:text-gray-300">
              Mail: email@mail.com
            </p>
            <p className="text-dashboard-common-heading mb-5 xl:mb-7 dark:text-gray-300">
              Phone:+923787248724872
            </p>
            <button
              onClick={() => setEditProfile(true)}
              className="border border-theme-orange rounded-[6px] cursor-pointer hover:bg-theme-orange hover:text-white duration-300 transition-all py-2 xl:py-3 px-3 xl:px-5 text-theme-orange font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {/* Right */}
        <button className="px-5 xl:px-10 py-2 xl:py-3 rounded-[6px] text-white cursor-pointer bg-theme-orange">
          Instalment
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Appearance */}
        <div>
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading dark:text-white font-medium">
            Appearance
          </h3>
          <div className="space-y-4">
            {/* System Default */}
            <div className="flex justify-between items-center border p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center dark:text-white">
                <DesktopSvg />
                <span className="text-dashboard-common-heading dark:text-white">
                  System Default
                </span>
              </div>
              <Switch
                checked={theme === "system"}
                onCheckedChange={() => handleThemeChange("system")}
              />
            </div>

            {/* Light Mode */}
            <div className="flex justify-between items-center border p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center dark:text-white">
                <LightModeSvg />
                <span className="text-dashboard-common-heading dark:text-white">
                  Light Mode
                </span>
              </div>
              <Switch
                checked={theme === "light"}
                onCheckedChange={() => handleThemeChange("light")}
              />
            </div>

            {/* Dark Mode */}
            <div className="flex justify-between items-center border p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center dark:text-white">
                <DarkModeSvg />
                <span className="text-dashboard-common-heading dark:text-white">
                  Dark Mode
                </span>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => handleThemeChange("dark")}
              />
            </div>
          </div>
        </div>

        {/* Subscription Plan  */}
        <div>
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading dark:text-white font-medium">
            Subscription Plan{" "}
          </h3>

          <div className="border p-4 xl:p-6 4xl:p-11 rounded-lg relative cursor-pointer transition-all duration-300  border-default-border bg-white dark:bg-black dark:border-border-gray">
            <h3 className="font-bold text-2xl xl:text-3xl 3xl:text-4xl mb-1 xl:mb-3 3xl:mb-4 dark:text-white">
              £26.99<span className="text-sm">/yr</span>
            </h3>
            <p className="xl:text-lg font-semibold mb-7 xl:mb-10 4xl:mb-20 dark:text-white">ParkClear Pro Driver </p>
            <p className="bg-theme-orange text-white py-2 xl:py-3 ps-5 rounded-l-lg pr-10 xl:pr-16 absolute top-5 right-0">
              Pro
            </p>
            <div className="flex gap-5 text-sm xl:text-base xl:gap-7 items-center justify-end">
              <p className="text-sidebar-card-headingOne font-medium">
                Change Plan
              </p>
              <p className="text-theme-orange font-medium">
                Cancel The Subscription
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 gap-5 mt-5 md:mt-7">
        {/* Security  */}
        <div>
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading dark:text-white font-medium">
            Security{" "}
          </h3>
          <div
            onClick={() => setChangePassword(true)}
            className="flex justify-between items-center border cursor-pointer rounded p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black"
          >
            <div className="flex gap-3 items-center dark:text-white">
              <ChangePassSvg />
              <span className="text-dashboard-common-heading dark:text-white">
                Change Password
              </span>
            </div>
            <RightArrowSvg />
          </div>
        </div>

        {/* Notification  */}
        <div>
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading font-medium dark:text-white">
            Notification{" "}
          </h3>
          <div className="flex justify-between items-center border rounded p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
            <div className="flex gap-3 items-center dark:text-white">
              <NotificationSvg />
              <span className="text-dashboard-common-heading dark:text-white">
                Allow Aleart message
              </span>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 gap-5 mt-7">
        {/* Our Policies */}
        <div className="dark:text-white">
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading dark:text-white font-medium">
            Our Policies{" "}
          </h3>
          <div className="space-y-4">
            <Link to='/terms-condition' className="flex justify-between items-center border  p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center">
                <PrivacySvg />
                <span className="text-dashboard-common-heading dark:text-white ">
                  Privacy Policies
                </span>
              </div>
              <RightArrowSvg />
            </Link>
            <Link to='/terms-condition' className="flex justify-between items-center border p-4 xl:p-7 rounded-lg border-default-border dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center">
                <TermsSvg />
                <span className="text-dashboard-common-heading dark:text-white">
                  Terms & Conditions
                </span>
              </div>
              <RightArrowSvg />
            </Link>
          </div>
        </div>

        {/* Account   */}
        <div>
          <h3 className="text-xl xl:text-2xl mb-3 xl:mb-5 text-dashboard-common-heading dark:text-white font-medium">
            Account{" "}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border p-3 xl:p-5 rounded-lg border-default-border bg-white dark:border-border-gray dark:bg-black">
              <div className="flex gap-3 items-center">
                <LogoutSvg />
                <span className="text-red-500">Log Out</span>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-[6px] font-medium">
                Log Out
              </button>

              {/* Modal */}
              <LogoutModal open={isModalOpen} onOpenChange={setIsModalOpen} />
            </div>
            <div className="flex justify-between items-center border p-3 xl:p-5 rounded-lg border-default-border f dark:border-border-gray bg-white dark:bg-black">
              <div className="flex gap-3 items-center">
                <DeleteSvg />
                <span className="text-red-500">Delete Account</span>
              </div>
              <button onClick={() => setIsDeleteModalOpen(true)} className="px-5 py-2 cursor-pointer bg-red-500 text-white rounded-[6px] font-medium">
                Delete
              </button>

              {/* Modal */}
              <DeleteAccountModal open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultSettings;
