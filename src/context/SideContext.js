import React, { useContext, useReducer, useEffect } from "react";
import { SideReducer } from "./SideReducer";
import axios from "axios";
const baseUrl = "https://selfintroserver.onrender.com";
const SideContext = React.createContext();

const initialState = {
  datas: [],
};
export const SideProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SideReducer, initialState);

  const fetchData = async () => {
    const apiUrl = `${baseUrl}/api/v1/sideProjects`;
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
    <SideContext.Provider value={{ ...state }}>{children}</SideContext.Provider>
  );
};
export const useSideContext = (datas) => {
  return useContext(SideContext);
};
