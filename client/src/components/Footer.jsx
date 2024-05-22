import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      {/* <!-- Code for Footer section --> */}
      <footer className="footer">
        <div className="container">
          <div className="footer_container">
            <div className="footer_container_left">
              <div className="footer_logo">
                <img src="../imgs/EDC_logo.png" alt="" />
              </div>

              <div className="footer_img">
                <img src="../imgs/Herosection.png" alt="" />
              </div>

              <div className="icon">
                <p>Stay Updated!</p>
                <p>Follow us on Social Media.</p>
                <div className="footer_icons">
                  <div>
                    <NavLink
                      to="https://www.linkedin.com/company/edc-jssate/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="https://www.youtube.com/@edcjss9486"
                      target="_blank"
                    >
                      <AiOutlineYoutube />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="https://www.instagram.com/ecelljss/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="https://twitter.com/cell_edc" target="_blank">
                      <RiTwitterXFill />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="tabletBottom">
              <div className="footer_container_middle">
                <ul>
                  <h4>Quick Links</h4>
                  <li><NavLink to="/team">Team Members</NavLink></li>
                  <li><NavLink to="https://jssaten.ac.in/" target="_blank">JSSATE Noida</NavLink></li>
                  <li><a href="#our_events">Upcoming Event</a></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink>Collaborate</NavLink></li>
                  <li><NavLink to="/aboutus">Gallery</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                </ul>
              </div>

              <div className="footer_container_right">
                <form className="enquiry">
                  <label htmlFor="email">Join Newsletter</label>
                  <div className="enquiry_email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    <button>&rarr;</button>
                  </div>
                  <label htmlFor="">Love to hear you...</label>
                  <div>
                    <button type="button">edc@gmail.com</button>
                  </div>
                </form>
                <div>
                  <p>
                    JSS Academy of Technical Education, Noida. C-20/1,
                    Sector-62, U.P. INDIA-201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divsion">
            <hr style={{ border: "1px solid grey" }} />
          </div>
          <div id="policy">
            <h4>Copyright&nbsp;</h4>
            <p>&copy; 2024 EDC JSS</p>
          </div>
        </div>
      </footer>
    </>
  );
};
