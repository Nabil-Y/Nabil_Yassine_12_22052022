import React, { FC } from "react";
import styles from "./Welcome.module.css";

/**
 * Welcome component
 * @returns Top section of main page content
 */
const Welcome: FC = (): JSX.Element => {
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.name}>Thomas</span>
      </h1>
      <div className={styles.info}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </section>
  );
};

export default Welcome;
