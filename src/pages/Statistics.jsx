import { Cell, Legend, Pie, PieChart } from "recharts";
import { getLSIds } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const allData = useLoaderData()
  const allDataLength = allData.length
  const donatedIds = getLSIds();
  const donationLength = donatedIds.length;

  const data = [
    { name: "Total Donation", value: allDataLength-donationLength },
    { name: "Your Donation", value: donationLength },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="text-center">
      <PieChart className="inline-block" width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
