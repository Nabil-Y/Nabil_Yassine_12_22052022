import { ReactElement } from "react";
import Card from "../../UI/Card";
import IconCard from "../../UI/IconCard";
import styles from "./NutritionCard.module.css";

/**
 * NutritionCard Function
 * @returns Nutrition card component
 */
const NutritionCard = (props: {
  data: Record<string, string>;
}): ReactElement => {
  return (
    <Card className={styles["nutrition-card"]}>
      <IconCard className={`${styles["icon-card"]} ${props.data.label}`}>
        <img src={props.data.icon} alt={props.data.label + " icon"} />
      </IconCard>
      <div>
        <span
          className={styles.value}
        >{`${props.data.value}${props.data.unit}`}</span>{" "}
        <br />
        {props.data.label}
      </div>
    </Card>
  );
};

export default NutritionCard;
