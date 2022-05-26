import { ReactElement } from "react";
import NutritionInfo from "./NutritionInfo/NutritionInfo";
import BarChart from "./Charts/BarChart";
import BottomCharts from "./BottomCharts";
import styles from "./Dashboard.module.css";

/**
 * Dashboard Function
 * @returns Dashboard Component
 */
const Dashboard = (): ReactElement => {
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-left"]}>
        <BarChart />
        <BottomCharts />
      </div>
      <NutritionInfo />
    </div>
  );
};

export default Dashboard;
