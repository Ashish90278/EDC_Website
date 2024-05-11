import React from 'react'
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    useEffect(() => {
      userLogout();
    }, [userLogout]);
    
  return <Navigate to="/"></Navigate>
}
