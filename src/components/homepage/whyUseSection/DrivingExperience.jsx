import bg from "../../../assets/images/driving-experience.png";

const DrivingExperience = () => {
  return (
    <div
      className="text-center bg-cover bg-center bg-no-repeat rounded-[16px] py-[80px] xl:py-[240px] driving-experience-card relative z-[1] overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(0,0,0,0.65)",
        backgroundBlendMode: "overlay",
      }}
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <h3 className="max-w-[680px] mx-auto text-lg sm:text-xl md:text-2xl 2xl:text-[40px] 3xl:text-[48px] font-bold text-white">
        Simplify Your Driving Experience with{" "}
        <span className="text-[#FFE14B]">ParkClear</span> Planner
      </h3>
    </div>
  );
};

export default DrivingExperience;
