import { FC, ReactNode } from "react";
import logo from "../../assets/logo.svg";
import styles from "./HorizontalNavbar.module.css";

const HorizontalNavbar: FC = (): JSX.Element => {
  const navListItems: string[] = ["Accueil", "Profil", "Réglage", "Communauté"];
  return (
    <header className={styles.header}>
      <img src={logo} alt="SportSee Logo" />
      <nav>
        <ul>
          {navListItems.map<ReactNode>((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HorizontalNavbar;
