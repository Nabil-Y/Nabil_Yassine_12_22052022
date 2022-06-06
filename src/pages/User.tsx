import { ReactElement, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/data-context";
import Welcome from "../components/Welcome/Welcome";
import Dashboard from "../components/Dashboard/Dashboard";
import CustomAPI from "../utils/API";
import Loader from "./Loader";
import { userData } from "../utils/customInterfaces";
import Error from "./Error";

/**
 * User Function
 * @returns the main content of the user page
 */
const User = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<userData>();
  const [firstName, setFirstName] = useState("");
  const [isAPI, setIsAPI] = useState(false);
  const { userId } = useParams() as { userId: string };
  const API = new CustomAPI();

  /**
   * Trigger between API and mock data
   */
  const clickHandler = (): void => {
    setIsAPI((state) => !state);
  };

  /**
   * Get User Data functions call every API request needed
   */
  const getUserData = async () => {
    await API.getUserMainDataByID(userId, isAPI).then((data) => {
      const userName = data?.userInfos?.firstName;
      userName && setFirstName(userName);
      setUserData((prevState) => {
        return { ...prevState, MainData: data };
      });
    });
    await API.getUserPerformanceByID(userId, isAPI).then((data) =>
      setUserData((prevState) => {
        return { ...prevState, Performance: data };
      })
    );
    await API.getUserSessionsByID(userId, isAPI).then((data) =>
      setUserData((prevState) => {
        return { ...prevState, Sessions: data };
      })
    );
    await API.getUserActivityByID(userId, isAPI).then((data) =>
      setUserData((prevState) => {
        return { ...prevState, Activity: data };
      })
    );
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getUserData();
  }, [isAPI]);

  if (isLoading) {
    return <Loader />;
  } else if (userData?.MainData?.userInfos?.firstName === undefined) {
    return <Error />;
  } else {
    return (
      <main>
        <Context.Provider value={{ isAPI: isAPI }}>
          <button className="context-switch" onClick={clickHandler}>
            {isAPI ? "API" : "Mock"}
          </button>
          <Welcome firstName={firstName} />
          <Dashboard userData={userData!} />
        </Context.Provider>
      </main>
    );
  }
};

export default User;
