import React, { useContext, useReducer, useEffect } from "react";
import { AboutReducer } from "./AboutReducer";
import axios from "axios";

const AboutContext = React.createContext();

const initialState = {
  datas: [],
};
export const AboutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AboutReducer, initialState);

  const fetchData = async () => {
    const api_url = `http://localhost:5000/api/v1/about`;
    // const api_url = `https://one112-server-card-demo-209100766.onrender.com/api/card2_66`;

    try {
      const results = await axios.get(api_url);
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
