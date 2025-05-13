import dashboardImage from "../../../assets/images/dashboard.png";

const DashboardImage = () => {
  return (
    <div
      className="h-[300px] sm:h-[350px] md:h-[500px] xl:h-[870px] overflow-hidden mt-6 rounded-[16px] border"
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <img
        className="h-full w-full rounded-[16px]"
        src={dashboardImage}
        alt="dashboardImage"
      />
    </div>
  );
};

export default DashboardImage;
