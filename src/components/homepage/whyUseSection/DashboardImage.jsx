import dashboardImage from "../../../assets/images/dashboard.png";

const DashboardImage = () => {
  return (
    <div
      className="h-[820px] overflow-hidden mt-6 rounded-[16px]"
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <img
        className="h-full w-full"
        src={dashboardImage}
        alt="dashboardImage"
      />
    </div>
  );
};

export default DashboardImage;
