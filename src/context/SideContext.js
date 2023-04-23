import React, { useContext, useReducer, useEffect } from "react";
import { SideReducer } from "./SideReducer";
import axios from "axios";
const baseUrl = "";
const SideContext = React.createContext();

const initialState = {
  datas: [],
};
export const SideProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SideReducer, initialState);

  const fetchData = async () => {
    const api_url = `http://localhost:5000/api/v1/sideProjects`;
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
    <SideContext.Provider value={{ ...state }}>{children}</SideContext.Provider>
  );
};
export const useSideContext = (datas) => {
  return useContext(SideContext);
};
