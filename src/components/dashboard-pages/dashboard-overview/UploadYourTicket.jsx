import { useState } from "react";
import { ChooseFileSvg } from "../../svg-container/SvgContainer";

const UploadYourTicket = () => {
    const [ticketSection, setTicketSection] = useState(true);
    const [expandField, setExpandField] = useState(false);

    const handleUpload = (e) => {
        e.preventDefault();
        setTicketSection(!ticketSection);
        setExpandField(false);
    };

    const handleExpand = (e) => {
        e.preventDefault();
        if (ticketSection) {
            handleSubmit(e);
        } else {
            setExpandField(true);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        setExpandField(false); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    return (
        <form>
            {/* Title */}
            <h3 className="mb-5 text-dashboard-common-heading text-xl font-semibold">Upload Your Ticket</h3>

            {
                ticketSection ? (
                    // Upload Automatically
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

                        {/* Choose File */}
                        <div className="w-full flex-1">
                            <label htmlFor="chooseFile" className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2">
                                <ChooseFileSvg />
                                <p className="text-black text-lg">Choose File</p>
                            </label>
                            <input type="file" className="hidden" id="chooseFile" />
                            <p className="text-upload-box mt-3 text-right">Maximum Size 25 mb</p>
                        </div>
                    </div>
                ) : (
                    // Upload Manually
                    <div className="space-y-5">
                        {!expandField && (
                            <>
                                <input type="text" placeholder="PCN Number" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="Issue Date" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="End Date" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="Vehicle Registration" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                            </>
                        )}
                        {expandField && (
                            <>
                                <input type="text" placeholder="Ticket Type" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="Location" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="End Date" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                                <input type="text" placeholder="Authories" className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white" />
                            </>
                        )}
                    </div>
                )
            }

            {/* Btns */}
            <div className="flex gap-4 items-center mt-5">
                {
                    !expandField ? (
                        <button
                            onClick={handleUpload}
                            className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-theme-orange hover:text-white transition-all duration-500 cursor-pointer"
                        >
                            {ticketSection ? 'Upload Manually' : 'Upload Automatic'}
                        </button>
                    ) : (
                        <button
                            onClick={handleBack}
                            className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-theme-orange hover:text-white transition-all duration-500 cursor-pointer"
                        >
                            Back
                        </button>
                    )
                }
                {
                    !expandField ? (
                        <button
                            onClick={handleExpand}
                            className="flex-1 py-[10px] rounded-lg border text-white border-theme-orange font-medium bg-theme-orange hover:bg-transparent hover:text-theme-orange transition-all duration-500 cursor-pointer"
                        >
                            {ticketSection ? 'Submit' : 'Next'}
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-transparent bg-theme-orange hover:text-theme-orange text-white transition-all duration-500 cursor-pointer"
                        >
                            Submit
                        </button>
                    )
                }
            </div>
        </form>
    );
};

export default UploadYourTicket;
