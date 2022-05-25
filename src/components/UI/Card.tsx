import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Card UI Component
 * @param props Props
 * @returns Card
 */
const Card: FC<CardProps> = ({ className, children }): JSX.Element => {
  const classes: string = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
