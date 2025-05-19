import dashboardImage from "../../../assets/images/ss.png";

const DashboardImage = () => {
  return (
    <div
      className="overflow-hidden h-[756px] mt-6 rounded-[16px] border"
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
