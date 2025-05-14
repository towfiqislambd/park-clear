import { useState } from "react";
import DefaultTicketManagement from "@/components/dashboard-pages/dashbaord-ticketManagement/DefaultTicketManagement";
import ProceedWithParkClear from "@/components/dashboard-pages/dashboard-appeal/ProceedWithParkClear";

const TicketManagement = () => {
    const [appeal, setAppeal] = useState(false)

    return (
        <>
            {
                appeal
                    ?
                    <ProceedWithParkClear />
                    :
                    <DefaultTicketManagement setAppeal={setAppeal} />
            }
        </>
    );
};

export default TicketManagement;