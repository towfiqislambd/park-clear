import bg from "../../../assets/images/driving-experience.png"

const DrivingExperience = () => {
  return (
    <div className="text-center bg-cover bg-center bg-no-repeat rounded-[16px] py-[80px] md:py-[100px] md:py-[163px] driving-experience-card relative z-[1] overflow-hidden" style={{ backgroundImage: `url(${bg})` }} data-aos="fade-in" data-aos-delay="100">
      <h3 className="max-w-[680px] mx-auto text-xl md:text-2xl 2xl:text-[32px] 3xl:text-[48px] font-bold text-white">Simplify Your Driving Experience with <span className="text-[#FFE14B]">ParkClear</span> Planner</h3>
    </div>
  );
};

export default DrivingExperience;
