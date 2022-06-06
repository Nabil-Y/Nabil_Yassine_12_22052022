import { ReactElement } from "react";
import styles from "./MainChart.module.css";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { userActivity } from "../../../customInterfaces";

/**
 * MainChart
 * @returns Main Chart component
 */
const MainChart = (props: { data: userActivity }): ReactElement => {
  const { data } = props;

  const formattedData = data.sessions?.map((item, index) => {
    return {
      ...item,
      day: index + 1,
    };
  });

  return (
    <div className={styles["main-chart"]}>
      <section className={styles["main-chart-top"]}>
        <h2>Activité quotidienne</h2>
        <div className={styles.legend}>
          <span className={styles.poids}>{"Poids(kg)"}</span>
          <span className={styles.calories}>{"Calories brûlées (kCal)"}</span>
        </div>
      </section>
      <ResponsiveContainer width="100%">
        <BarChart
          data={formattedData}
          barGap={10}
          barCategoryGap="35%"
          margin={{ top: 30, left: 20, right: 10, bottom: 75 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <Bar
            yAxisId={"kg"}
            name="kg"
            dataKey="kilogram"
            fill="#333"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
          <Bar
            yAxisId={"kCal"}
            name="kCal"
            dataKey="calories"
            fill="#FF0101"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
          <XAxis tickLine={false} dataKey="day" />
          <YAxis
            yAxisId={"kg"}
            axisLine={false}
            tickLine={false}
            orientation="right"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
          />
          <YAxis
            yAxisId={"kCal"}
            tickLine={false}
            hide={true}
            dataKey="calories"
            domain={[0, "dataMax"]}
          />
          <Tooltip
            formatter={(value: number, name: string) => [`${value} ${name}`]}
            cursor={{
              fill: "#000",
              fillOpacity: 0.1,
            }}
            labelStyle={{
              display: "none",
            }}
            contentStyle={{
              background: "#FF0101",
            }}
            itemStyle={{
              color: "#FFF",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainChart;
