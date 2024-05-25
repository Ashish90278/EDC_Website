import { createContext, useContext, useState, useEffect } from "react";
import {Contact} from "../pages/Contact.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const userLogout = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/auth/user",
        {
          mode: "cors",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log(response);
      if(response.ok){
        const data = await response.json();
        console.log(data);
        setUser(data);
      }else{
        userLogout();
        console.log(user)
      }
    } catch (error) {
      console.log("Error Fetching User Data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [true]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, userLogout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
