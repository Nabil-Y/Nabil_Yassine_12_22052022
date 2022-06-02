import { ReactElement, useContext } from "react";
import DataContext from "../../../store/data-context";
import API from "../../../utils/API";
import NutritionCard from "./NutritionCard";
import icons from "../../../assets/nutrition-icons/NutritionIcons";
import styles from "./NutritionInfo.module.css";

/**
 * NutritionInfo Function
 * @returns Nutrition Info Component
 */
const NutritionInfo = (): ReactElement => {
  const ctx = useContext(DataContext);
  const userId = ctx.id;
  const userKeyData: Record<string, number> | undefined =
    API.getUserMainDataById(userId)?.keyData;

  const formattedData: Record<string, string>[] = [];
  const iconLabels: string[] = [
    "Calories kCal",
    "Proteines g",
    "Glucides g",
    "Lipides g",
  ];

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
    <div className={styles["nutrition__info"]}>
      {formattedData.map((item) => (
        <NutritionCard data={item} key={item.value + item.label} />
      ))}
    </div>
  );
};

export default NutritionInfo;
