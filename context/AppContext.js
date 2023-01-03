import { createContext, useState, useEffect } from "react";
import { getCookie, setCookie } from 'cookies-next';

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
      setCookie('liked', []);
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