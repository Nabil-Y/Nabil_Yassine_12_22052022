import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface props {
  className?: string;
  children: ReactNode;
}

const Card: FC<props> = ({ className, children }): JSX.Element => {
  const classes: string = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
