import DashboardHeader from "../../components/common/DashboardHeader";
import OverviewCards from "../../components/dashboard-pages/dashboard-overview/OverviewCards";

const Overview = () => {
    return (
        <div>
            <DashboardHeader title='TickeTracker Dashboard' />
            <OverviewCards />
        </div>
    );
};

export default Overview;