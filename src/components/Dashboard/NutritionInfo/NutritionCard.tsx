import { ReactElement } from "react";
import Card from "../../UI/Card";
import IconCard from "../../UI/IconCard";
import styles from "./NutritionCard.module.css";

/**
 * NutritionCard Function
 * @param props contains user key data and food labels/icons
 * @returns Nutrition card component
 */
const NutritionCard = (props: {
  data: Record<string, string>;
}): ReactElement => {
  const { data } = props;
  return (
    <Card className={styles["nutrition-card"]}>
      <IconCard className={`${styles["icon-card"]} ${data.label}`}>
        <img src={data.icon} alt={data.label + " icon"} />
      </IconCard>
      <div>
        <span className={styles.value}>{`${data.value}${data.unit}`}</span>
        <br />
        {data.label}
      </div>
    </Card>
  );
};

export default NutritionCard;
