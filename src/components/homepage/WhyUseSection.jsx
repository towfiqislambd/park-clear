import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import DashboardImage from "./whyUseSection/DashboardImage";
import DrivingExperience from "./whyUseSection/DrivingExperience";
import FreeDashboard from "./whyUseSection/FreeDashboard";
import ParkClearPlanner from "./whyUseSection/ParkClearPlanner";

const WhyUseSection = () => {
  return (
    <section className="py-10 md:py-[80px] 3xl:py-[128px] bg-light-mastard">
      <Container>
        {/* title  */}
        <TitleCommon
          subTitle="Everything a driver needs in one place!"
          paragraph="We know how stressful it can be when PCNs increase. Stay on top of parking tickets and appeals, we’ll remind you when your deadlines are to pay in our smart new dashboard."
        >
          <h2 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
            Why use <span className="text-theme-orange">ParkClear</span>{" "}
            Planner?
          </h2>
        </TitleCommon>
        <div className="mt-10 flex gap-5 items-start flex-col xl:flex-row">
          {/* Left */}
          <div className="xl:w-[40%] 2xl:w-[30%]">
            <ParkClearPlanner />
            <FreeDashboard />
          </div>
          {/* Right */}
          <div className="xl:w-[60%] 2xl:w-[70%] xl:pl-5">
            <DrivingExperience />
            <DashboardImage />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUseSection;
