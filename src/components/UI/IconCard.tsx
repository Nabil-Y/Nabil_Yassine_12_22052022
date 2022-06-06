import { ReactElement } from "react";
import styles from "./IconCard.module.css";
import { cardProps } from "../../customInterfaces";

/**
 * Icon Card UI Function
 * @param props Component properties
 * @returns Icon Card Component
 */
const IconCard = ({ className, children }: cardProps): ReactElement => {
  const classes: string = `${styles["icon-card"]} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default IconCard;
