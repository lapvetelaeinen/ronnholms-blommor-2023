import { createContext, useState, useEffect } from "react";

const NavStateContext = createContext();

function NavStateProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);



  return (
    <NavStateContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </NavStateContext.Provider>
  );
}

export { NavStateProvider, NavStateContext };