import { ReactElement } from "react";
import styles from "./Card.module.css";
import { cardProps } from "../../utils/customInterfaces";
/**
 * Card UI Function
 * @param props Component properties
 * @returns Card Component
 */
const Card = ({ className, children }: cardProps): ReactElement => {
  const classes: string = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
