import { ReactElement } from "react";
import styles from "./Welcome.module.css";

/**
 * Welcome Function
 * @returns Welcome Component (top section of main tag)
 */
const Welcome = (): ReactElement => {
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
