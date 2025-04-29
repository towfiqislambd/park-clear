import { useState, useRef } from "react";
import { CameraSvg, ChooseFileSvg } from "../../svg-container/SvgContainer";

const UploadYourTicket = () => {
    const [ticketSection, setTicketSection] = useState(true);
    const [expandField, setExpandField] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [cameraError, setCameraError] = useState("");
    const cameraInputRef = useRef(null);
    const fileInputRef = useRef(null);

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

    const handleTakePictureClick = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(track => track.stop());
            cameraInputRef.current.click();
        } catch {
            setCameraError("No camera detected on your device.");
        }
    };

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPreviewUrl(null);
            }
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setCameraError("");
        cameraInputRef.current.value = "";
        fileInputRef.current.value = "";
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return `${bytes} bytes`;
        else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        else return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <form>
            {/* Title */}
            <h3 className="mb-5 text-dashboard-common-heading text-xl font-semibold">
                Upload Your Ticket
            </h3>

            {ticketSection ? (
                // Upload Automatically
                <div className="flex gap-5">
                    {/* Take Picture */}
                    <div className="w-full flex-1">
                        <div
                            onClick={handleTakePictureClick}
                            className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2"
                        >
                            <CameraSvg />
                            <p className="text-black text-lg">Take Picture</p>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            className="hidden"
                            id="cameraInput"
                            ref={cameraInputRef}
                            onChange={handleFileChange}
                        />
                        <p className="text-upload-box mt-3">Supported Format:</p>
                        <p className="text-upload-box">PNG, JPEG</p>
                    </div>

                    {/* Choose File */}
                    <div className="w-full flex-1">
                        <div
                            onClick={handleFileInputClick}
                            className="block border border-dashed w-full h-[220px] flex justify-center flex-col items-center gap-4 border-default-border rounded-xl cursor-pointer border-2"
                        >
                            <ChooseFileSvg />
                            <p className="text-black text-lg">Choose File</p>
                        </div>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                            id="fileInput"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <p className="text-upload-box mt-3 text-right">
                            Maximum Size 25 mb
                        </p>
                    </div>
                </div>
            ) : (
                // Upload Manually
                <div className="space-y-5">
                    {!expandField ? (
                        <>
                            <input
                                type="text"
                                placeholder="PCN Number"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                            <input
                                type="text"
                                placeholder="Issue Date"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                            <input
                                type="text"
                                placeholder="End Date"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                            <input
                                type="text"
                                placeholder="Vehicle Registration"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                        </>
                    ) : (
                        <>
                            <select
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            >
                                <option>Ticket Type</option>
                                <option className="Penalty charge notice">Penalty charge notice</option>
                                <option className="Parking charge">Parking charge</option>
                                <option className="Fixed penalt notice">Fixed penalt notice</option>
                                <option className="Not sure">Not sure</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Location"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                            <input
                                type="text"
                                placeholder="End Date"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                            <input
                                type="text"
                                placeholder="Authorities"
                                className="block w-full px-5 py-4 rounded-lg border border-default-border outline-theme-orange bg-white"
                            />
                        </>
                    )}
                </div>
            )}

            {/* Error Message */}
            {cameraError && (
                <p className="mt-4 text-red-500 font-medium">{cameraError}</p>
            )}

            {/* File Preview */}
            {selectedFile && (
                <div className="mt-4 bg-white shadow rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-10 h-10 object-cover rounded"
                            />
                        ) : (
                            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded text-xs font-semibold text-blue-600">
                                {selectedFile.name.split(".").pop().toUpperCase()}
                            </div>
                        )}
                        <div>
                            <p className="font-medium">{selectedFile.name}</p>
                            <p className="text-sm text-gray-500">
                                {formatFileSize(selectedFile.size)}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 text-2xl font-medium cursor-pointer"
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 items-center mt-5">
                {!expandField ? (
                    <button
                        onClick={handleUpload}
                        className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-theme-orange hover:text-white transition-all duration-500 cursor-pointer"
                    >
                        {ticketSection ? "Upload Manually" : "Upload Automatic"}
                    </button>
                ) : (
                    <button
                        onClick={handleBack}
                        className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-theme-orange hover:text-white transition-all duration-500 cursor-pointer"
                    >
                        Back
                    </button>
                )}
                {!expandField ? (
                    <button
                        onClick={handleExpand}
                        className="flex-1 py-[10px] rounded-lg border text-white border-theme-orange font-medium bg-theme-orange hover:bg-transparent hover:text-theme-orange transition-all duration-500 cursor-pointer"
                    >
                        {ticketSection ? "Submit" : "Next"}
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="flex-1 py-[10px] rounded-lg border text-theme-orange border-theme-orange font-medium hover:bg-transparent bg-theme-orange hover:text-theme-orange text-white transition-all duration-500 cursor-pointer"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
};

export default UploadYourTicket;
