import { createContext, useState, useEffect } from "react";
import { getCookie } from 'cookies-next';

const NavStateContext = createContext();

function NavStateProvider({ children }) {
  const [cookieFlowers, setCookieFlowers] = useState([]);



  useEffect(() => {

    const cookie = getCookie('liked');

    if(cookie){
      const oldCookie = JSON.parse(cookie);
  
      if(oldCookie.length < 1){
        setCookieFlowers([]);
      } else {
        setCookieFlowers(oldCookie);
      }
    } else {
      setCookieFlowers([]);
    }
  }, [])





  return (
    <NavStateContext.Provider
      value={{
        cookieFlowers,
        setCookieFlowers,
      }}
    >
      {children}
    </NavStateContext.Provider>
  );
}

export { NavStateProvider, NavStateContext };