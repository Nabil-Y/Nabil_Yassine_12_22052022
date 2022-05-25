import { FC, ReactNode } from "react";
import IconCard from "../UI/IconCard";
import icons from "../../assets/navbar-icons/NavbarIcons";
import styles from "./VerticalNavbar.module.css";

const VerticalNavbar: FC = (): JSX.Element => {
  return (
    <section className={styles["side-navbar"]}>
      <nav className={styles["icon-cards-container"]}>
        {icons.map<ReactNode>((svg) => (
          <IconCard key={svg} className={styles["side-icon-card"]}>
            <img src={svg} alt={svg.slice(svg.lastIndexOf("/") + 1)} />
          </IconCard>
        ))}
      </nav>
      <div className={styles.copyright}>
        Copyright, SportSee {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default VerticalNavbar;
