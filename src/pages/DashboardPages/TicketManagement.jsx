import { useState } from "react";
import ProceedWithParkClear from "../../components/dashboard-pages/dashboard-appeal/ProceedWithParkClear";
import GenerateLetter from "../../components/dashboard-pages/dashboard-appeal/GenerateLetter";
import DefaultTicketManagement from "@/components/dashboard-pages/dashbaord-ticketManagement/DefaultTicketManagement";

const TicketManagement = () => {
    const [proceed, setProceed] = useState(false)
    const [appeal, setAppeal] = useState(false)

    return (
        <div>
            {
                proceed ?
                    <ProceedWithParkClear />
                    :
                    appeal ?
                        <GenerateLetter />
                        :
                        <DefaultTicketManagement setProceed={setProceed} setAppeal={setAppeal} />

            }
        </div>
    );
};

export default TicketManagement;