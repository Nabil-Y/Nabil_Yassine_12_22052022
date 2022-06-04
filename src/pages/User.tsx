import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/data-context";
import Welcome from "../components/Welcome/Welcome";
import Dashboard from "../components/Dashboard/Dashboard";

/**
 * User Function
 * @returns the main content of the user page
 */
const User = (): ReactElement => {
  const { userId } = useParams() as { userId: string };
  const [id, setId] = useState(+userId);
  const [isAPI, setIsAPI] = useState(false);

  /**
   * Trigger between API and mock data
   */
  const clickHandler = (): void => {
    setIsAPI((state) => !state);
  };

  return (
    <main>
      <Context.Provider value={{ id: id, isAPI: isAPI }}>
        <button className="context-switch" onClick={clickHandler}>
          {isAPI ? "API" : "Mock"}
        </button>
        <Welcome />
        <Dashboard />
      </Context.Provider>
    </main>
  );
};

export default User;
