import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import MockApi from "../../utils/mock-api";

const userPerf = MockApi.getUserPerformanceById(12);
console.log(userPerf?.kind[1]);
const formattedData: any[] = [];

userPerf?.data.map((item) => {
  formattedData.push({
    activity: "cardio", //activities[index],
    value: item.value,
  });
});

const Test = () => {
  return (
    <RadarChart outerRadius={150} width={500} height={500} data={formattedData}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="activity" />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Test;
