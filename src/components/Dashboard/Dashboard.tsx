import { ReactElement } from "react";
import NutritionInfo from "./NutritionInfo/NutritionInfo";
import MainChart from "./charts/MainChart";
import styles from "./Dashboard.module.css";
import Card from "../UI/Card";
import SessionsChart from "./charts/SessionsChart";
import SpiderChart from "./charts/SpiderChart";
import RadialChart from "./charts/RadialChart";

/**
 * Dashboard Function
 * @returns Dashboard Component
 */
const Dashboard = (): ReactElement => {
  const bottomCharts: [ReactElement, string][] = [
    [<SessionsChart />, "sessions-chart"],
    [<SpiderChart />, "spider-chart"],
    [<RadialChart />, "radial-chart"],
  ];
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-left"]}>
        <MainChart />
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
