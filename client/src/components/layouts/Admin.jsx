import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth.jsx";
import { AdminSidebar } from "./AdminSidebar.jsx";

export const Admin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isAdmin } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isAdmin ? (
        <>
          <AdminSidebar />
          <Outlet />
        </>
      ) : (
        // navigate("/login")
        <>
          <AdminSidebar />
          <Outlet />
        </>
      )}
    </>
  );
};
