import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    const root = document.getElementById("root").children;
    if (navRef.current.classList.contains("responsive_nav")) {
      for (var i = 1; i <= root.length; i++) {
        root[i].style.display = "none";
      }
    } else {
      for (var i = 1; i <= root.length; i++) {
        root[i].style.display = "block";
      }
    }
    const navActive = ({ isActive }) => {
      return { color: isActive ? "rgb(0, 195, 255" : "white" };
    };
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="../imgs/EDC_logo.png" alt="Edc_Logo" />
            </NavLink>
          </div>
          <nav ref={navRef}>
            <NavLink to="/" onClick={showNavbar} >HOME</NavLink>
            <NavLink to="/events" onClick={showNavbar} >EVENTS</NavLink>
            <NavLink to="/team" onClick={showNavbar} >TEAM</NavLink>
            <NavLink to="/blog" onClick={showNavbar} >BLOGS</NavLink>
            <NavLink to="/aboutus" onClick={showNavbar} >ABOUT</NavLink>
            <NavLink to="/contact" onClick={showNavbar} >CONTACT</NavLink>
            <NavLink
              to="https://chat.whatsapp.com/Io5MxXmunWaCpUnoW3S0Gs"
              target="_blank"
            >
              <button id="communityButton">JOIN COMMUNITY</button>
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};
