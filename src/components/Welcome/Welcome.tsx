import { ReactElement } from "react";
import styles from "./Welcome.module.css";

/**
 *  * Welcome Function
 * @param props contains firstName key
 * @returns Welcome Component (top section of main tag)
 */
const Welcome = (props: { firstName: string }): ReactElement => {
  const { firstName } = props;

  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>
        Bonjour{" "}
        <span className={styles.name}>
          {firstName ? firstName : "Visiteur"}
        </span>
      </h1>
      <div className={styles.info}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </section>
  );
};

export default Welcome;
