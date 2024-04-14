import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import { FaRegUser } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";

export const AdminSidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="innerSidebar">
          <div className="aside-heading">
            <h6>
              <MdAdminPanelSettings />
              Admin Dashboard
            </h6>
            <hr />
          </div>
          <div className="aside-components">
            <ul>
              <NavLink to="/admin/users">
                <li>
                  <FaRegUser />
                  Users
                </li>
              </NavLink>
              <NavLink to="/admin/students-register">
                <li>
                  <PiStudent />
                  Students Register
                </li>
              </NavLink>
              <NavLink to="/admin/members">
                <li>
                  <FiUsers />
                  Members
                </li>
              </NavLink>
              <NavLink to="/admin/events">
                <li>
                  <CiCalendarDate />
                  Events
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
