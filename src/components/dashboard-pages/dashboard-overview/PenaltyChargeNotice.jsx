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
  { name: "Jan", uv: 0, pv: 4000, amt: 2400 },
  { name: "Feb", uv: 6000, pv: 10000, amt: 2210 },
  { name: "Mar", uv: 6000, pv: 10000, amt: 2290 },
  { name: "Apr", uv: 5500, pv: 9500, amt: 2000 },
  { name: "May", uv: 5550, pv: 6000, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 10000, pv: 6000, amt: 2400 },
  { name: "Sep", uv: 4000, pv: 8000, amt: 2400 },
  { name: "Oct", uv: 2500, pv: 1000, amt: 2400 },
  { name: "Nov", uv: 6600, pv: 10000, amt: 2400 },
  { name: "Dec", uv: 7000, pv: 5000, amt: 2400 },
];

const PenaltyChargeNotice = () => {
  return (
    <div>
      {/* Title */}
      <h3 className="mb-5 text-dashboard-common-heading dark:text-white text-xl font-semibold">
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
            dataKey="uv"
            stroke="#77B5FE"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
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
