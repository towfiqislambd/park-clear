import { ChooseFileSvg } from "../../svg-container/SvgContainer";

const UploadYourTicket = () => {
    return (
        <div>
            {/* Title */}
            <h3 className="mb-5 text-dashboard-common-heading text-xl font-semibold">Scan or Upload Your Ticket</h3>

            <div className="flex gap-5">
                {/* Upload your ticket */}
                <div className="w-full flex-1">
                    <label htmlFor="uploadTicket" className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2">
                        <ChooseFileSvg />
                        <p className="text-black text-lg">Take Picture</p>
                    </label>
                    <input type="file" className="hidden" id="uploadTicket" />
                    <p className="text-upload-box mt-3">Supported Format:</p>
                    <p className="text-upload-box">PNG,JPEG,PDF</p>
                </div>
                {/*  Choose File */}
                <div className="w-full flex-1">
                    <label htmlFor="chooseFile" className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2">
                        <ChooseFileSvg />
                        <p className="text-black text-lg">Choose File</p>
                    </label>
                    <input type="file" className="hidden" id="chooseFile" />
                    <p className="text-upload-box mt-3 text-right">Maximum Size 25 mb</p>
                </div>
            </div>

            {/* Btns */}
            <div className="flex gap-4 items-center mt-5">
                <button className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-theme-orange hover:text-white transition-all duration-500 cursor-pointer">Upload Manually</button>
                <button className="flex-1 py-[10px] rounded-lg border text-white border-theme-orange font-medium bg-theme-orange hover:bg-transparent hover:text-theme-orange transition-all duration-500 cursor-pointer">Submit</button>
            </div>
        </div>
    );
};

export default UploadYourTicket;