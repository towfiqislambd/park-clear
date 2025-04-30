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
      <div className="w-[544px] mx-auto mt-24">
        <div className="flex justify-end mb-16">
          <button
            onClick={() => setEditProfile(false)}
            className="flex gap-2 cursor-pointer items-center"
          >
            <LeftSvg />
            <span className="text-theme-orange font-medium">Go Back</span>
          </button>
        </div>
        <h3 className="text-3xl font-bold mb-2">Edit Profile </h3>
        <p className="text-text-gray mb-7">
          Please fill your information below
        </p>

        <div className="space-y-5">
          {/* {/ Name /} */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black "
            />
            <p className="absolute left-3 top-4">
              <UserSvg />
            </p>
          </div>
          {/* {/ Phone Number /} */}
          <div className="relative">
            <input
              type="text"
              placeholder="Phone Number"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-4">
              <PhoneSvg />
            </p>
          </div>
          {/* {/ Email /} */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="block w-full pl-12 pr-12 py-4 rounded-lg border dark:border-border-gray dark:outline-none outline-theme-orange bg-white dark:bg-black"
            />
            <p className="absolute left-3 top-4">
              <EmailSvg />
            </p>
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

export default EditProfile;
