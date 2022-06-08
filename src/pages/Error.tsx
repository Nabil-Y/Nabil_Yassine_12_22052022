import { ReactElement } from "react";
import { Link } from "react-router-dom";

/**
 * Error Function
 * @returns the main content of the error page
 */
const Error = (): ReactElement => {
  return (
    <main>
      <h1>Erreur</h1>
      <Link to="/">Cliquez ici pour retourner sur la page d'accueil</Link>
    </main>
  );
};

export default Error;
