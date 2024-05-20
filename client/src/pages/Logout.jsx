import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth.jsx";

export const Logout = () => {
  const { userLogout } = useAuth();

  useEffect(() => {
    userLogout();
  }, [userLogout]);

  return <Navigate to="/" />;
};
