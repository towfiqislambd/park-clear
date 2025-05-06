import profile from "../../assets/images/profile.png";

const DashboardHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-4 3xl:px-5 py-2.5 3xl:py-4 rounded-lg xl:rounded-xl bg-white dark:bg-black border border-default-border dark:border-gray-700">
      <h2 className="text-dashboard-common-heading dark:text-white font-bold text-lg xl:text-[22px] 3xl:text-2xl">
        {title}
      </h2>

      <div className="flex gap-2 items-center">
        <figure className="size-[40px] xl:w-[50px] xl:h-[50px] rounded-full">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </figure>

        <div>
          <h5 className="font-medium">Musfiq</h5>
          <p className="font-inter text-sm xl:text-[15px] dark:text-gray-300 text-gray-desc">
            user@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
