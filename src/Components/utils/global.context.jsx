import { createContext,useContext,useState,useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();
const lsCart = JSON.parse(localStorage.getItem("cart")) || [];

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  /*const [cart , setCart]= useState(lsCart)*/
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const initialState = {
  dentists: [],
  theme: 'light',
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const docContext= () => useContext (ContextGlobal)


