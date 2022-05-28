import { ReactElement } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import MockApi from "../../../utils/mock-api";

/**
 * RadialChart Function
 * @returns Radial Chart component
 */
const RadialChart = (): ReactElement => {
  const userData = MockApi.getUserMainDataById(12);
  const formattedData = [
    {
      name: "Score",
      value: userData?.score,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RadialChart;
