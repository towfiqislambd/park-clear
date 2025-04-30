import DashboardHeader from "@/components/common/DashboardHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
const offers = [
  {
    price: "£26.99",
    duration: "6 Month",
    charge: "5% Charge",
    description: "Pay your debit with ParkClear",
  },
  {
    price: "£19.99",
    duration: "3 Month",
    charge: "2% Charge",
    description: "Pay via credit installment",
  },
];

const DefaultTicketManagement = ({ setAppeal }) => {
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(null);
  return (
    <div>
      <DashboardHeader title=" Parking Ticket Payment" />
      <div className="grid grid-cols-12 mt-10">
        {/* Left Side */}
        <div className="col-span-6">
          <div className="mb-32">
            <h3 className="text-[22px] mb-3 font-semibold text-dashboard-common-heading dark:text-white">
              Payment For
            </h3>
            <select className="block w-full px-5 py-4 rounded-lg border border-default-border  outline-none bg-white dark:bg-black dark:border-border-gray ">
              <option value="">Select PNC</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-[22px] mb-3 font-semibold text-dashboard-common-heading dark:text-white">
                Payment Offer
              </h3>
              <button className="text-theme-orange cursor-pointer text-lg font-semibold">
                Remove Selection
              </button>
            </div>

            <div className="space-y-5">
              {offers.map((offer, index) => {
                const isSelected = selectedOfferIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedOfferIndex(index)}
                    className={`border p-7 rounded-lg relative cursor-pointer transition-all duration-300 border-2 
                                             ${
                                               isSelected
                                                 ? "border-theme-sky-blue"
                                                 : "border-default-border bg-white dark:bg-black dark:border-border-gray"
                                             }`}
                  >
                    <div className="flex gap-3 items-end mb-3">
                      <h3 className="font-bold text-4xl">
                        {offer.price}
                        <span className="text-sm">/mo</span>
                      </h3>
                      <p className="text-theme-orange font-medium text-[15px]">
                        {offer.charge}
                      </p>
                    </div>
                    <p className="text-lg font-semibold">{offer.description}</p>
                    <p className="bg-theme-orange text-white py-3 ps-5 rounded-l-lg pr-12 absolute top-5 right-0">
                      {offer.duration}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>

        {/* Right Side */}
        <div className="col-span-5">
          <div className="p-10 rounded-lg border border-default-border dark:border-border-gray dark:bg-black bg-white grid grid-cols-3 gap-x-5 gap-y-10 mb-5">
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white text-lg font-semibold mb-1">
                Issue Date:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white  text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white  text-lg font-semibold mb-1">
                PCN No:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white  text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white  text-lg font-semibold mb-1">
                Location:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white  text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white  text-lg font-semibold mb-1">
                Last Date:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white  text-sm">
                Data
              </p>
            </div>
            <div className="">
              <h3 className="text-dashboard-common-heading dark:text-white  text-lg font-semibold mb-1">
                Car Model:
              </h3>
              <p className="text-dashboard-common-heading dark:text-white  text-sm">
                Data
              </p>
            </div>
          </div>

          <div className="p-10 mb-10 rounded-lg border border-default-border dark:border-border-gray bg-white dark:bg-black">
            <h3 className="text-[22px] mb-2 font-semibold text-dashboard-common-heading dark:text-white">
              Charge:
            </h3>
            <h2 className="font-bold text-theme-orange text-4xl">$3.99</h2>
          </div>

          {/* Btns */}
          <div className="space-y-5">
            {/* Pay btn */}
            <button
              onClick={() => setAppeal(true)}
              className="h-16 font-medium text-lg w-full block bg-theme-orange border border-theme-orange rounded-lg text-white cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-theme-orange"
            >
              Pay
            </button>
            {/* Appeal btn */}
            <Link to="/dashboard/appeal">
              <button className="h-16 font-medium text-lg w-full block bg-sidebar-card-headingOne border border-sidebar-card-headingOne rounded-lg text-white cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-sidebar-card-headingOne">
                Appeal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTicketManagement;
