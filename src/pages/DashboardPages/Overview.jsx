import DashboardHeader from "../../components/common/DashboardHeader";
import OverviewCards from "../../components/dashboard-pages/dashboard-overview/OverviewCards";
import UploadYourTicket from "../../components/dashboard-pages/dashboard-overview/UploadYourTicket";
import PenaltyChargeNotice from './../../components/dashboard-pages/dashboard-overview/PenaltyChargeNotice';
import AppealDataTable from './../../components/dashboard-pages/dashboard-overview/AppealDataTable';
import ParkingTicketTable from './../../components/dashboard-pages/dashboard-overview/ParkingTicketTable';

const Overview = () => {
    return (
        <div className="mb-14 xl:mb-5">
            <DashboardHeader title='TickeTracker Dashboard' />
            <OverviewCards />
            <div className="grid xl:grid-cols-12 gap-5 md:gap-10 xl:gap-5 3xl:gap-10 mt-5 md:mt-10">
                <div className="xl:col-span-4"><UploadYourTicket /></div>
                <div className="xl:col-span-8"><PenaltyChargeNotice /></div>
            </div>
            <ParkingTicketTable />
            <AppealDataTable />
        </div>
    );
};

export default Overview;