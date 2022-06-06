import { ReactElement } from "react";
import NutritionInfo from "./NutritionInfo/NutritionInfo";
import MainChart from "./charts/MainChart";
import styles from "./Dashboard.module.css";
import Card from "../UI/Card";
import SessionsChart from "./charts/SessionsChart";
import SpiderChart from "./charts/SpiderChart";
import RadialChart from "./charts/RadialChart";
import { userData } from "../../customInterfaces";

/**
 * /**
 * Dashboard Function
 * @param props contains all user data
 * @returns Dashboard Component
 */
const Dashboard = (props: { userData: userData }): ReactElement => {
  const { MainData, Performance, Activity, Sessions } = props.userData;
  const bottomCharts: [ReactElement, string][] = [
    [<SessionsChart data={Sessions!} />, "sessions-chart"],
    [<SpiderChart data={Performance!} />, "spider-chart"],
    [<RadialChart data={MainData!} />, "radial-chart"],
  ];
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-left"]}>
        <MainChart data={Activity!} />
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
      <NutritionInfo data={MainData!} />
    </div>
  );
};

export default Dashboard;
