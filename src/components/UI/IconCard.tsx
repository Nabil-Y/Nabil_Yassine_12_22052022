import { FC, ReactNode } from "react";
import styles from "./IconCard.module.css";

interface props {
  className?: string;
  children: ReactNode;
}

const IconCard: FC<props> = ({ className, children }): JSX.Element => {
  const classes: string = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default IconCard;
