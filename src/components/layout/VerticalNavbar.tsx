import { ReactElement } from "react";
import IconCard from "../UI/IconCard";
import icons from "../../assets/navbar-icons/NavbarIcons";
import styles from "./VerticalNavbar.module.css";

/**
 * VerticalNavbar Function
 * @returns vertical navbar component
 */
const VerticalNavbar = (): ReactElement => {
  return (
    <section className={styles["side-navbar"]}>
      <nav className={styles["icon-cards-container"]}>
        {icons.map<ReactElement>((svg) => (
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
