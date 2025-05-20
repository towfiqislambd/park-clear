import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", "PCN Value": 0, "Appeal Value": 4000, amt: 2400 },
  { name: "Feb", "PCN Value": 6000, "Appeal Value": 10000, amt: 2210 },
  { name: "Mar", "PCN Value": 6000, "Appeal Value": 10000, amt: 2290 },
  { name: "Apr", "PCN Value": 5500, "Appeal Value": 9500, amt: 2000 },
  { name: "May", "PCN Value": 5550, "Appeal Value": 6000, amt: 2181 },
  { name: "Jun", "PCN Value": 2390, "Appeal Value": 3800, amt: 2500 },
  { name: "Jul", "PCN Value": 3490, "Appeal Value": 4300, amt: 2100 },
  { name: "Aug", "PCN Value": 10000, "Appeal Value": 6000, amt: 2400 },
  { name: "Sep", "PCN Value": 4000, "Appeal Value": 8000, amt: 2400 },
  { name: "Oct", "PCN Value": 2500, "Appeal Value": 1000, amt: 2400 },
  { name: "Nov", "PCN Value": 6600, "Appeal Value": 10000, amt: 2400 },
  { name: "Dec", "PCN Value": 7000, "Appeal Value": 5000, amt: 2400 },
];

const PenaltyChargeNotice = () => {
  return (
    <div>
      {/* Title */}
      <h3 className="mb-3 md:mb-5 text-dashboard-common-heading dark:text-white text-lg md:text-xl font-semibold">
        Penalty Charge Notice
      </h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={370}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Legend verticalAlign="top" height={36} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="PCN Value"
            stroke="#77B5FE"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Appeal Value"
            stroke="#ffb1c1"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PenaltyChargeNotice;
