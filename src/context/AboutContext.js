import React, { useContext, useReducer, useEffect } from "react";
import { AboutReducer } from "./AboutReducer";
import axios from "axios";
const baseUrl = "https://selfintroserver.onrender.com";
const AboutContext = React.createContext();

const initialState = {
  datas: [],
};
export const AboutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AboutReducer, initialState);

  const fetchData = async () => {
    const apiUrl = `${baseUrl}/api/v1/about`;

    try {
      const results = await axios.get(apiUrl);
      dispatch({ type: "SUCCESS", payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AboutContext.Provider value={{ ...state }}>
      {children}
    </AboutContext.Provider>
  );
};
export const useAboutContext = (datas) => {
  return useContext(AboutContext);
};
