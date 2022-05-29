import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import MockApi from "../../../utils/mock-api";
import { userPerf, userPerfData } from "../../../customTypes";

/**
 * SpiderChart Function
 * @returns Spider Chart component
 */
const SpiderChart = () => {
  const userPerf: userPerf = MockApi.getUserPerformanceById(12)!;
  const formattedData: userPerfData[] = [];

  userPerf?.data.map((item) => {
    formattedData.push({
      activity: userPerf.kind[item.kind],
      value: item.value,
    } as userPerfData);
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={formattedData.reverse()}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis
          dy={2}
          dataKey="activity"
          stroke="#FFFFFF"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SpiderChart;
