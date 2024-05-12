import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import client from "../../package.json";
import { MdArrowDropDown } from "react-icons/md";
import { useAuth } from "../store/Auth.jsx";

import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const navRef = useRef();
  const [navMenuValue, setNavMenuValue] = useState(false);

  const navMenuState = (navMenuValue) => {
    if (navMenuValue === true) {
      setNavMenuValue(false);
      return "none";
    } else {
      setNavMenuValue(true);
      return "block";
    }
  };
  const showNavMenu = () => {
    document.getElementById("navDropDown").style.display =
      navMenuState(navMenuValue);
  };
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
            <div className="showNavMenu">
              <button className="navMenuButton" onClick={showNavMenu}>
                <div id="navMenu">
                  OTHERS
                  <MdArrowDropDown />
                </div>
              </button>
              <div id="navDropDown">
                {isLoggedIn ? (
                  <div onClick={showNavMenu}>
                    <span>
                      <NavLink to="/logout">Log Out</NavLink>
                    </span>
                  </div>
                ) : (
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width: "100%"}}>
                    <div onClick={showNavMenu}>
                      <span>
                        <NavLink to="/login">Login</NavLink>
                      </span>
                    </div>
                    <div onClick={showNavMenu}>
                      <span>
                        <NavLink to="/signup">Sign Up</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
