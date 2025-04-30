import TitleCommon from "../common/TitleCommon";
import Container from "../container/Container";
import DashboardImage from "./whyUseSection/DashboardImage";
import DrivingExperience from "./whyUseSection/DrivingExperience";
import FreeDashboard from "./whyUseSection/FreeDashboard";
import ParkClearPlanner from "./whyUseSection/ParkClearPlanner";

const WhyUseSection = () => {
  return (
    <section className="py-[128px] bg-light-mastard">
      <Container>
        {/* title  */}
        <TitleCommon
          subTitle="Why use ParkClear Planner?"
          paragraph="We know how stressful it can be when PCNs increase. Stay on top of
parking tickets and appeals, we’ll remind you when your deadlines are to pay in
our smart new dashboard."
        >
          <h2 className="title--xxl" data-aos="fade-up" data-aos-delay="100">
            Why use <span className="text-theme-orange">ParkClear</span>{" "}
            Planner?
          </h2>
        </TitleCommon>
        <div className="mt-10 flex items-start">
          <div className="w-[30%]">
            <ParkClearPlanner />
            <FreeDashboard />
          </div>
          <div className="w-[70%] pl-5">
            <DrivingExperience />
            <DashboardImage />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUseSection;
