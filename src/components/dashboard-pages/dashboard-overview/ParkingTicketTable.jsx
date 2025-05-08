import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ParkingTicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    { id: 1, status: "Unpaid", charge: "$766" },
    { id: 2, status: "Paid", charge: "$766" },
    { id: 3, status: "Paid", charge: "$766" },
    { id: 4, status: "Unpaid", charge: "$766" },
  ];

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mb-7">
        <h3 className="text-dashboard-common-heading dark:text-white text-lg md:text-xl font-semibold">
          Parking Ticket Dashboard
        </h3>
        <button className="bg-theme-orange text-white px-3 xl:px-5 py-1.5 md:py-2 rounded-[6px] cursor-pointer">
          Filter By Vehicle Number
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center text-dashboard-common-heading dark:text-white">
          <thead className="bg-white dark:bg-black dark:text-white rounded-lg text-dashboard-common-heading">
            <tr className="text-nowrap">
              <th className="px-2 md:px-3 py-4 md:py-5">Select</th>
              <th className="px-2 md:px-3 py-4 md:py-5">Sl No</th>
              <th className="px-2 md:px-3 py-4 md:py-5">PCN No</th>
              <th className="px-2 md:px-3 py-4 md:py-5">
                <div className="flex items-center justify-center gap-1">
                  <span>Issue Date</span>
                  <span>⇅</span>
                </div>
              </th>
              <th className="px-2 md:px-3 py-4 md:py-5">
                <div className="flex items-center justify-center gap-1">
                  <span>Last Date</span>
                  <span>⇅</span>
                </div>
              </th>
              <th className="px-2 md:px-3 py-4 md:py-5">Authorities</th>
              <th className="px-2 md:px-3 py-4 md:py-5">
                <div className="flex items-center justify-center gap-1">
                  <span>Charge</span>
                  <span>⇅</span>
                </div>
              </th>
              <th className="px-2 md:px-3 py-4 md:py-5">V.Reg</th>
              <th className="px-2 md:px-3 py-4 md:py-5">
                <div className="flex items-center justify-center gap-1">
                  <span>Status</span>
                  <span>⇅</span>
                </div>
              </th>
              <th className="px-2 md:px-3 py-4 md:py-5">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-default-border dark:border-border-gray text-nowrap"
              >
                <td className="px-2 md:px-3 py-4 md:py-5">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className="w-4 h-4"
                  />
                </td>
                <td className="px-2 md:px-3 py-4 md:py-5">{row.id}</td>
                <td className="px-2 md:px-3 py-4 md:py-5">Data</td>
                <td className="px-2 md:px-3 py-4 md:py-5">Data</td>
                <td className="px-2 md:px-3 py-4 md:py-5">Data</td>
                <td className="px-2 md:px-3 py-4 md:py-5">Data</td>
                <td className="px-2 md:px-3 py-4 md:py-5 font-medium">{row.charge}</td>
                <td className="px-2 md:px-3 py-4 md:py-5">Data</td>
                <td className="px-2 md:px-3 py-4 md:py-5">
                  <select className={`px-3 border-none outline-none`}>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                  </select>
                </td>
                <td className="px-2 md:px-3 py-4 md:py-5">
                  {row.status === "Paid" ? (
                    <p>No Action Need</p>
                  ) : (
                    <button className="bg-theme-orange text-white px-5 py-2 rounded-[6px] cursor-pointer">
                      <Popover>
                        <PopoverTrigger className='cursor-pointer'>Pay Now</PopoverTrigger>
                        <PopoverContent>
                          <div className="">

                          </div>
                        </PopoverContent>
                      </Popover>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditional Footer Section */}
      {selectedRows.length >= 2 && (
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <button className="bg-theme-orange text-white px-10 py-2 rounded-[6px] cursor-pointer">
              Pay All
            </button>
            <span className="text-theme-orange font-semibold">
              {selectedRows.length} Selected
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <span className="text-gray-desc dark:text-white">Rows per page:</span>
            <select className="border text-gray-500 dark:text-white border-default-border dark:border-border-gray outline-none px-2 py-1 rounded">
              <option>05</option>
              <option>10</option>
              <option>15</option>
            </select>
            <span className="text-gray-desc dark:text-white">1-4 of 4</span>
            <div className="flex gap-1">
              <button className="border px-2 py-1 border-default-border dark:border-border-gray text-gray-400 dark:text-white rounded">
                &lt;
              </button>
              <button className="border px-2 py-1 border-default-border dark:border-border-gray text-gray-400 dark:text-white rounded">
                1
              </button>
              <button className="border px-2 py-1 border-default-border dark:border-border-gray text-gray-400 dark:text-white rounded">
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingTicketTable;
