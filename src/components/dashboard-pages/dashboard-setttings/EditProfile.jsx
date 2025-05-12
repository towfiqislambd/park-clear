import DashboardHeader from "@/components/common/DashboardHeader";
import {
  EmailSvg,
  LeftSvg,
  PhoneSvg,
  UserSvg,
} from "@/components/svg-container/SvgContainer";

const EditProfile = ({ setEditProfile }) => {
  return (
    <section>
      <DashboardHeader title="Settings" />
      <div className="max-w-[544px] mx-auto mt-14 3xl:mt-24">
        <div className="flex justify-end mb-8 3xl:mb-16">
          <button
            onClick={() => setEditProfile(false)}
            className="flex gap-2 cursor-pointer items-center"
          >
            <LeftSvg />
            <span className="text-theme-orange font-medium">Go Back</span>
          </button>
        </div>
        <h3 className="text-2xl 2xl:text-3xl font-bold mb-1 2xl:mb-2 dark:text-white">Edit Profile </h3>
        <p className="text-text-gray mb-7">
          Please fill your information below
        </p>

        <div className="space-y-4 2xl:space-y-5 dark:text-white">
          {/* {/ Name /} */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="block w-full dark:text-white pl-11 2xl:pl-12 pr-12 py-2.5 2xl:py-4 rounded-[6px] 2xl:rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black "
            />
            <p className="absolute left-3 top-2.5 2xl:top-4">
              <UserSvg />
            </p>
          </div>
          {/* {/ Phone Number /} */}
          <div className="relative">
            <input
              type="text"
              placeholder="Phone Number"
              className="block w-full pl-11 2xl:pl-12 pr-12 py-2.5 2xl:py-4 rounded-[6px] 2xl:rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-2.5 2xl:top-4">
              <PhoneSvg />
            </p>
          </div>
          {/* {/ Email /} */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="block w-full pl-11 2xl:pl-12 pr-12 py-2.5 2xl:py-4 rounded-[6px] 2xl:rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-2.5 2xl:top-4">
              <EmailSvg />
            </p>
          </div>
          {/* {/ Submit btn /} */}
          <div className="flex justify-end">
            <button className="px-5 2xl:px-7 cursor-pointer font-medium mt-5 py-2 2xl:py-3 rounded-[6px] bg-theme-orange text-white border border-theme-orange hover:bg-transparent hover:text-theme-orange duration-300 transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
