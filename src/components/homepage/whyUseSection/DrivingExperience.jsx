import bg from "../../../assets/images/driving-experience.png"

const DrivingExperience = () => {
  return (
    <div className="text-center bg-cover bg-center bg-no-repeat rounded-[16px] py-[163px] driving-experience-card relative z-[1] overflow-hidden" style={{ backgroundImage:`url(${bg})` }}>
      <h3 className="w-[680px] mx-auto text-[48px] font-bold text-white">Simplify Your Driving Experience with <span className="text-[#FFE14B]">ParkClear</span> Planner</h3>
    </div>
  );
};

export default DrivingExperience;
