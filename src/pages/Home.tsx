import { ReactElement } from "react";
import { Link } from "react-router-dom";

/**
 * Home Function
 * @returns the main content of the home page
 */
const Home = (): ReactElement => {
  return (
    <main>
      <h1>Bienvenue sur Sportsee</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/user/12"}>Cliquez ici pour l'utilisateur 12</Link>
          </li>
          <li>
            <Link to={"/user/18"}>Cliquez ici pour l'utilisateur 18</Link>
          </li>
          <li>
            <a href="https://nabil-y.github.io/ny-sportsee-doc/">
              Cliquez ici pour la documentation de devéloppeur
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
