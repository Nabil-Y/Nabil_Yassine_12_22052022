import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
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

  return (
    <main>
      <Context.Provider value={{ id: id, isAPI: isAPI }}>
        <Welcome />
        <Dashboard />
      </Context.Provider>
    </main>
  );
};

export default User;
