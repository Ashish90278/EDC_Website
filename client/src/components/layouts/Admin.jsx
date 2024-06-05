import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth.jsx";
import { AdminSidebar } from "./AdminSidebar.jsx";

export const Admin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {user.isAdmin ? (
        <>
          <section className="admin-users-section">
            <AdminSidebar />
            <Outlet />
          </section>
          <hr style={{ border: "1px solid grey" }} />
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};
