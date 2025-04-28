import DashboardHeader from "../../components/common/DashboardHeader";
import OverviewCards from "../../components/dashboard-pages/dashboard-overview/OverviewCards";
import UploadYourTicket from "../../components/dashboard-pages/dashboard-overview/UploadYourTicket";
import PenaltyChargeNotice from './../../components/dashboard-pages/dashboard-overview/PenaltyChargeNotice';
import AppealDataTable from './../../components/dashboard-pages/dashboard-overview/AppealDataTable';
import ParkingTicketTable from './../../components/dashboard-pages/dashboard-overview/ParkingTicketTable';

const Overview = () => {
    return (
        <div>
            <DashboardHeader title='TickeTracker Dashboard' />
            <OverviewCards />
            <div className="grid grid-cols-12 gap-10 mt-10">
                <div className="col-span-4"><UploadYourTicket /></div>
                <div className="col-span-8"><PenaltyChargeNotice /></div>
            </div>
            <ParkingTicketTable />
            <AppealDataTable />
        </div>
    );
};

export default Overview;