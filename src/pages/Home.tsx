import { ReactElement } from "react";
import { Link } from "react-router-dom";

/**
 * Home Function
 * @returns the main content of the home page
 */
const Home = (): ReactElement => {
  return (
    <main>
      <h1>Welcome to Sportsee</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/user/12"}>Click here for user 12 data</Link>
          </li>
          <li>
            <Link to={"/user/18"}>Click here for user 18 data</Link>
          </li>
          <li>
            <a href="/docs/index.html">
              Click here for the developer documentation
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
