import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import { FaRegUser } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";

export const AdminSidebar = () => {
  const navActive = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgb(0, 195, 255" : "transparent",
      borderRadius: "0.5rem",
      color: isActive ? "#011627" : "white",
    };
  };

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
              <NavLink style={navActive} to="/admin/users">
                <li>
                  <FaRegUser />
                  Users
                </li>
              </NavLink>
              <NavLink style={navActive} to="/admin/students-register">
                <li>
                  <PiStudent />
                  Students Register
                </li>
              </NavLink>
              <NavLink style={navActive} to="/admin/members">
                <li>
                  <FiUsers />
                  Members
                </li>
              </NavLink>
              <NavLink style={navActive} to="/admin/events">
                <li>
                  <CiCalendarDate />
                  Events
                </li>
              </NavLink>
              <NavLink style={navActive} to="/admin/contacts">
                <li>
                  <RiPhoneLine />
                  Contacts
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
