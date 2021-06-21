import { LineChart, Line } from "recharts";

const Graph = ({ data }) => {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default Graph;
