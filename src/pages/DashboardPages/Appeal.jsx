import { useState } from "react";
import DefaultAppeal from "../../components/dashboard-pages/dashboard-appeal/DefaultAppeal";
import ProceedWithParkClear from "../../components/dashboard-pages/dashboard-appeal/ProceedWithParkClear";
import GenerateLetter from "../../components/dashboard-pages/dashboard-appeal/GenerateLetter";

const Appeal = () => {
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
                        <DefaultAppeal setProceed={setProceed} setAppeal={setAppeal} />

            }
        </div>
    );
};

export default Appeal;