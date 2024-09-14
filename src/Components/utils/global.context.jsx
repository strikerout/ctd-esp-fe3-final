import { createContext, useReducer, useMemo, useEffect } from "react";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};


export const ContextGlobal = createContext({
  theme: initialState.theme,
  data: initialState.data,
  dispatch: () => {},
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const contextValue = useMemo(() => ({
    theme: state.theme,
    data: state.data,
    dispatch,
  }), [state.theme, state.data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
