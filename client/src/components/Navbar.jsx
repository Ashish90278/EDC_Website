import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import client from "../../package.json";

import "./Navbar.css";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navActive = ({ isActive }) => {
    return { color: isActive ? "rgb(0, 195, 255" : "white" };
  };

  return (
    <>
      <header>
        <div id="Navbar" className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="../imgs/EDC_logo.png" alt="Edc_Logo" />
            </NavLink>
          </div>
          <nav ref={navRef}>
            <NavLink style={navActive} to="/" onClick={showNavbar}>
              HOME
            </NavLink>
            <NavLink style={navActive} to="/events" onClick={showNavbar}>
              EVENTS
            </NavLink>
            <NavLink style={navActive} to="/team" onClick={showNavbar}>
              TEAM
            </NavLink>
            <NavLink style={navActive} to="/blog" onClick={showNavbar}>
              BLOGS
            </NavLink>
            <NavLink style={navActive} to="/aboutus" onClick={showNavbar}>
              ABOUT
            </NavLink>
            <NavLink style={navActive} to="/contact" onClick={showNavbar}>
              CONTACT
            </NavLink>
            <button id="communityButton">
              <NavLink
                to="https://chat.whatsapp.com/Io5MxXmunWaCpUnoW3S0Gs"
                target="_blank"
              >
                JOIN COMMUNITY
              </NavLink>
            </button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <GoArrowRight />
            </button>
            <p id="version">Version {client.version}</p>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};
