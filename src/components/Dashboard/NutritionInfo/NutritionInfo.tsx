import { ReactElement } from "react";
import { MainDataResponse } from "../../../utils/Classes";
import NutritionCard from "./NutritionCard";
import icons from "../../../assets/nutrition-icons/NutritionIcons";
import styles from "./NutritionInfo.module.css";

/**
 * NutritionInfo Function
 * @param props contains User MainData
 * @returns Nutrition Info Component
 */
const NutritionInfo = (props: { data: MainDataResponse }): ReactElement => {
  const { data } = props;
  const userKeyData = data.keyData;

  const iconLabels: string[] = [
    "Calories kCal",
    "Proteines g",
    "Glucides g",
    "Lipides g",
  ];

  const formattedData: Record<string, string>[] = [];

  userKeyData &&
    iconLabels.map((item, index) => {
      return formattedData.push({
        label: iconLabels[index].split(" ")[0],
        unit: iconLabels[index].split(" ")[1],
        value: Object.values(userKeyData)[index].toLocaleString("en-US"),
        icon: icons[index],
      });
    });

  return (
    <aside className={styles["nutrition__info"]}>
      {formattedData.map((item) => (
        <NutritionCard data={item} key={item.value + item.label} />
      ))}
    </aside>
  );
};

export default NutritionInfo;
