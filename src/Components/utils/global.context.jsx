import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
export const initialState = {
  theme: "light",
  dents: [],
  favs: lsFavs
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DENTS", payload: res.data });
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
export const useDentStates = () => useContext(ContextGlobal);
