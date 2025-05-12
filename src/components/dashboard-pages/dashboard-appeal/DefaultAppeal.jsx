import { useState, useEffect } from "react";
import { ChooseFileSvg } from "@/components/svg-container/SvgContainer";
import DashboardHeader from "../../common/DashboardHeader";

// Helper function to format file size
const formatFileSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  else return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const DefaultAppeal = ({ setProceed, setAppeal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div>
      <DashboardHeader title="Appeal Management" />
      <div className="grid xl:grid-cols-12 mt-5 md:mt-10 gap-3 xl:gap-0">
        {/* Left Side */}
        <div className="xl:col-span-6">
          {/* Appeal For */}
          <div className="mb-5 md:mb-7 xl:mb-10">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 xl:mb-4 font-semibold text-dashboard-common-heading dark:text-white">
              Appeal For
            </h3>
            <select className="block w-full px-3 3xl:px-5 py-2 dark:text-white md:py-2.5 3xl:py-4 rounded-lg border border-default-border  outline-none bg-white dark:bg-black dark:border-border-gray ">
              <option value="">Select PNC</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Upload Attachment */}
          <div className="mb-7 md:mb-10">
            <h3 className="text-lg md:text-xl mb-4 font-semibold text-dashboard-common-heading dark:text-white">
              Submit Supporting Documents (Optional)
            </h3>
            <label htmlFor="uploadAttachment" className="w-full block">
              <div className="block border border-dashed w-full h-[160px] md:h-[180px] 3xl:h-[220px] flex justify-center flex-col items-center gap-2.5 md:gap-4 border-default-border rounded-xl cursor-pointer border-2">
                <ChooseFileSvg />
                <p className="text-black md:text-lg dark:text-white">Upload attachment</p>
              </div>
              <input
                type="file"
                id="uploadAttachment"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* Preview Section */}
            {selectedFile && (
              <div className="mt-4 bg-white dark:bg-black shadow rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {previewUrl && selectedFile.type.startsWith("image/") ? (
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
                    <p className="font-medium dark:text-gray-200">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
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
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg md:text-xl mb-3 md:mb-4 font-semibold text-dashboard-common-heading dark:text-white ">
              Tell Us Why You Want To Appeal
            </h3>
            <textarea
              placeholder="Your Opinion"
              className="block w-full dark:text-white h-[180px] md:h-[230px] 3xl:h-[300px] 4xl:h-[350px] px-5 py-4 rounded-lg border border-default-border  dark:border-gray-700 outline-none bg-white dark:bg-black"
            ></textarea>
          </div>
        </div>
        <div className="xl:col-span-1"></div>
        {/* Right Side */}
        <div className="xl:col-span-5">
          <div className="p-5 3xl:p-10 rounded-lg border border-default-border  dark:border-gray-700 bg-white dark:bg-black grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-10 mb-5">
            <div>
              <h3 className="text-dashboard-common-heading dark:text-white md:text-lg font-semibold mb-1">Issue Date:</h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">Data</p>
            </div>
            <div>
              <h3 className="text-dashboard-common-heading dark:text-white md:text-lg font-semibold mb-1">PCN No:</h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">Data</p>
            </div>
            <div>
              <h3 className="text-dashboard-common-heading dark:text-white md:text-lg font-semibold mb-1">Location:</h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">Data</p>
            </div>
            <div>
              <h3 className="text-dashboard-common-heading dark:text-white md:text-lg font-semibold mb-1">Last Date:</h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">Data</p>
            </div>
            <div>
              <h3 className="text-dashboard-common-heading dark:text-white md:text-lg font-semibold mb-1">Car Model:</h3>
              <p className="text-dashboard-common-heading dark:text-white text-sm">Data</p>
            </div>
          </div>

          <div className="p-3 md:p-5 3xl:p-10 mb-5 xl:mb-10 rounded-lg border border-default-border dark:border-gray-700 bg-white dark:bg-black">
            <h3 className="text-lg md:text-[22px] mb-1 md:mb-2 font-semibold text-dashboard-common-heading dark:text-white">
              If You proceed with us
            </h3>
            <h2 className="font-bold text-sidebar-card-headingOne text-2xl md:text-3xl 3xl:text-4xl">$3.99</h2>
          </div>

          {/* Btns */}
          <div className="space-y-3 md:space-y-5">
            <button
              onClick={() => setProceed(true)}
              className="h-13 4xl:h-16 font-medium md:text-lg w-full block bg-sidebar-card-headingOne border border-sidebar-card-headingOne rounded-lg text-white cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-sidebar-card-headingOne"
            >
              Proceed With ParkClear
            </button>
            <button
              onClick={() => setAppeal(true)}
              className="h-13 4xl:h-16 border border-sidebar-card-headingOne font-medium md:text-lg w-full block text-sidebar-card-headingOne rounded-lg cursor-pointer transition-all duration-500 hover:bg-sidebar-card-headingOne hover:text-white"
            >
              Generate Appeal letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultAppeal;
