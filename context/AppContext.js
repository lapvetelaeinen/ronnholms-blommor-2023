import { createContext, useState, useEffect } from "react";

const NavStateContext = createContext();

function NavStateProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    isNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    isNavOpen ? document.body.style.position = "fixed" : document.body.style.position = "static";
    isNavOpen ? document.body.style.width = "100%" : null;
  })

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