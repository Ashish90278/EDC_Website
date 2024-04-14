import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <section className="container">
              <div className="logo">
                <img src="../imgs/EDC_logo.png" alt="Edc_Logo" />
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/events">EVENTS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">BLOGS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">TEAM</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutus">ABOUT</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                  </li>
                  <li>
                    <button>JOIN COMMUNITY</button>
                  </li>
                </ul>
              </div>
            </section>
            <div className="menubutton">
              <img src="../imgs/menubutton.png" alt="" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
