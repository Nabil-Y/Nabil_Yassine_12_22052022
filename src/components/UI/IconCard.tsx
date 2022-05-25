import { FC, ReactNode } from "react";
import styles from "./IconCard.module.css";

export type IconCardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Icon Card UI Component
 * @param props Props
 * @returns Icon Card
 */
const IconCard: FC<IconCardProps> = ({ className, children }): JSX.Element => {
  const classes: string = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default IconCard;
