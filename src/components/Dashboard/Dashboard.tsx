import { ReactElement } from "react";
import NutritionInfo from "./NutritionInfo/NutritionInfo";
import BarChart from "./charts/BarChart";
import styles from "./Dashboard.module.css";
import Card from "../UI/Card";
import LineChart from "./charts/LineChart";
import SpiderChart from "./charts/SpiderChart";
import RadialChart from "./charts/RadialChart";

/**
 * Dashboard Function
 * @returns Dashboard Component
 */
const Dashboard = (): ReactElement => {
  const bottomCharts: [ReactElement, string][] = [
    [<LineChart />, "line-chart"],
    [<SpiderChart />, "spider-chart"],
    [<RadialChart />, "radial-chart"],
  ];
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-left"]}>
        <BarChart />
        <div className={styles["bottom-charts"]}>
          {bottomCharts.map((item) => (
            <Card
              key={item[1]}
              className={`${styles["bottom-chart"]} ${styles[item[1]]}`}
            >
              {item[0]}
            </Card>
          ))}
        </div>
      </div>
      <NutritionInfo />
    </div>
  );
};

export default Dashboard;
