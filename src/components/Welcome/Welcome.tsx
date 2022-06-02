import { ReactElement, useContext } from "react";
import API from "../../utils/API";
import DataContext from "../../store/data-context";
import styles from "./Welcome.module.css";

/**
 * Welcome Function
 * @returns Welcome Component (top section of main tag)
 */
const Welcome = (): ReactElement => {
  const ctx = useContext(DataContext);
  const response = API.getUserMainDataById(ctx.id);
  const firstName = response.getFirstName();

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
