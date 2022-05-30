import { ReactElement, useContext } from "react";
import Context from "../../store/data-context";
import styles from "./Welcome.module.css";

/**
 * Welcome Function
 * @returns Welcome Component (top section of main tag)
 */
const Welcome = (props: { onClick: () => void }): ReactElement => {
  const ctx = useContext(Context);
  const firstName: string | undefined = ctx.API.getUserMainDataById(ctx.id)
    ?.userInfos.firstName;

  // const firstName: string = ;
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>
        Bonjour{" "}
        <span className={styles.name}>
          {firstName ? firstName : "Visiteur"}
        </span>
      </h1>
      <div className={styles.info} onClick={props.onClick}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </section>
  );
};

export default Welcome;
