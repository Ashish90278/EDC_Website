import { NavLink } from "react-router-dom";
import "./Navbar1.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

export const Navbar = () => {

  const showMenu = () => {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").classList.remove("menu");
    document.getElementById("menubtn").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    const root = document.getElementById("root").children;
    for (var i = 1; i <= root.length; i++) {
      root[i].style.display = "none";
    }
  };
  const closeMenu = () => {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").classList.add("menu");
    document.getElementById("menubtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
    const root = document.getElementById("root").children;
    for (var i = 1; i <= root.length; i++) {
      root[i].style.display = "block";
    }
  };

  // const navActive = ({ isActive }) => {
  //   return { color: isActive ? "rgb(0, 195, 255" : "white" };
  // };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <section>
              <div className="logo">
                <NavLink to="/">
                  <img src="../imgs/EDC_logo.png" alt="Edc_Logo" />
                </NavLink>
              </div>
              <div className="menu layer" id="myNav">
                {/* <div
                  id="closebtn"
                  style={{
                    width: "70px",
                    height: "fit-content",
                    color: "white",
                    fontSize: "50px",
                    position: "absolute",
                    top: "2rem",
                    right: "2rem",
                  }}
                  onClick={closeMenu}
                >
                  <IoClose />
                </div> */}

                <ul className="layer-content">
                  <li>
                    <NavLink style={navActive} onClick={closeMenu} to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={navActive} onClick={closeMenu} to="/events">
                      EVENTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={navActive} onClick={closeMenu} to="/team">
                      TEAM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={navActive} onClick={closeMenu} to="/blog">
                      BLOGS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={navActive}
                      onClick={closeMenu}
                      to="/aboutus"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={navActive}
                      onClick={closeMenu}
                      to="/contact"
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://chat.whatsapp.com/Io5MxXmunWaCpUnoW3S0Gs"
                      target="_blank"
                    >
                      <button>JOIN COMMUNITY</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </section>
            <div className="menubutton">
              <IconContext.Provider
                value={{ color: "white", className: "hamburgericon" }}
              >
                <div
                  id="menubtn"
                  style={{ width: "100%", height: "100%" }}
                  onClick={showMenu}
                >
                  <GiHamburgerMenu />
                </div>
              </IconContext.Provider>
            </div>
            {/* <div className="menubutton">
              <i className="fa-solid fa-bars"></i>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};
