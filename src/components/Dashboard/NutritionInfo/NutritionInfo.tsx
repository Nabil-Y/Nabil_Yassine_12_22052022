import { ReactElement } from "react";
import styles from "./NutritionInfo.module.css";

/**
 * NutritionInfo Function
 * @returns Nutrition Info Component
 */
const NutritionInfo = (): ReactElement => {
  return <div className={styles["nutrition__info"]}>NutritionInfo</div>;
};

export default NutritionInfo;
