import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AppealDataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    { id: 1, status: "Appeal Rejected", charge: "$766" },
    { id: 2, status: "Appeal Accepted", charge: "$766" },
    { id: 3, status: "Appeal Rejected", charge: "$766" },
    { id: 4, status: "Appeal Accepted", charge: "$766" },
  ];

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-7">
        <h3 className="text-dashboard-common-heading dark:text-white text-xl font-semibold">
          Appeal Data
        </h3>
        <button className="bg-theme-orange text-white px-5 py-2 rounded-[6px] cursor-pointer">
          Filter By Vehicle Number
        </button>
      </div>

      <table className="w-full text-center text-dashboard-common-heading dark:text-white">
        <thead className="bg-white dark:bg-black rounded-lg dark:text-white text-dashboard-common-heading font-semibold">
          <tr>
            <th className="px-5 py-5">Select</th>
            <th className="px-3 py-5">Sl No</th>
            <th className="px-3 py-5">PCN No</th>
            <th className="px-3 py-5">
              <div className="flex items-center justify-center gap-1">
                <span>Issue Date</span>
                <span>⇅</span>
              </div>
            </th>
            <th className="px-3 py-5">
              <div className="flex items-center justify-center gap-1">
                <span>Last Date</span>
                <span>⇅</span>
              </div>
            </th>
            <th className="px-3 py-5">Authorities</th>
            <th className="px-3 py-5">
              <div className="flex items-center justify-center gap-1">
                <span>Charge</span>
                <span>⇅</span>
              </div>
            </th>
            <th className="px-3 py-5">V.Reg</th>
            <th className="px-3 py-5">
              <div className="flex items-center justify-center gap-1">
                <span>Status</span>
                <span>⇅</span>
              </div>
            </th>
            <th className="px-5 py-5">Action</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {data.map((row) => (
            <tr key={row.id} className="border-b border-default-border">
              <td className="px-3 py-5">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                  className="w-4 h-4"
                />
              </td>
              <td className="px-3 py-5">{row.id}</td>
              <td className="px-3 py-5">Data</td>
              <td className="px-3 py-5">Data</td>
              <td className="px-3 py-5">Data</td>
              <td className="px-3 py-5">Data</td>
              <td className="px-3 py-5 font-medium">{row.charge}</td>
              <td className="px-3 py-5">Data</td>
              <td className="px-3 py-5">
                <span
                  className={`text-sm ${row.status !== "Appeal Rejected"
                    ? "text-dashboard-status"
                    : "text-theme-orange"
                    }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-3 py-5">
                {row.status === "Appeal Accepted" ? (
                  <p>No Action Needed</p>
                ) : (
                  <button className="bg-theme-orange text-white px-5 py-2 rounded-[6px] cursor-pointer">
                    Pay Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditional Footer Section */}
      {selectedRows.length >= 2 && (
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <button className="bg-theme-orange text-white px-10 py-2 rounded-[6px] cursor-pointer">
              Bulk Action
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

export default AppealDataTable;
