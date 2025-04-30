import profile from "../../assets/images/profile.png";

const DashboardHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 rounded-xl bg-white dark:bg-black border border-default-border dark:border-gray-700">
      <h2 className="text-dashboard-common-heading dark:text-white font-bold text-2xl">
        {title}
      </h2>

      <div className="flex gap-2 items-center">
        <figure className="w-[50px] h-[50px] rounded-full">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </figure>

        <div>
          <h5 className="font-medium">Musfiq</h5>
          <p className="font-inter text-[15px] dark:text-gray-300 text-gray-desc">
            user@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
