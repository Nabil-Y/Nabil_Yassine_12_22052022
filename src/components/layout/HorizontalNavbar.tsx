import { ReactElement } from "react";
import logo from "../../assets/logo.svg";
import styles from "./HorizontalNavbar.module.css";

/**
 * HorizontalNavbar Function
 * @returns Horizontal Navbar component
 */
const HorizontalNavbar = (): ReactElement => {
  const navListItems: string[] = ["Accueil", "Profil", "Réglage", "Communauté"];
  return (
    <header className={styles.header}>
      <img src={logo} alt="SportSee Logo" />
      <nav>
        <ul>
          {navListItems.map<ReactElement>((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HorizontalNavbar;
