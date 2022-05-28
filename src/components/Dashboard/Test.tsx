import { ResponsiveContainer, PieChart, Pie } from "recharts";
import MockApi from "../../utils/mock-api";

const Test = () => {
  const userData = MockApi.getUserMainDataById(12);
  const formattedData = [
    {
      name: "Score",
      value: userData?.score,
    },
  ];
  return "";
  // <PieChart width={263} height={258}>
  //   <Pie data={formattedData} dataKey="value" nameKey="name" fill="#8884d8" />
  // </PieChart>
};

export default Test;
