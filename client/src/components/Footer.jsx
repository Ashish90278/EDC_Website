import { NavLink } from "react-router-dom";
import "./Footer.css";

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
                    <NavLink to="#">
                      <img src="../imgs/footer_youtube.png" alt="" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="#">
                      <img src="../imgs/footer_facebook.png" alt="" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="#">
                      <img src="../imgs/footer_instagram.png" alt="" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="#">
                      <img src="../imgs/footer_linkedin.png" alt="" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="#">
                      <img src="../imgs/footer_twitter.png" alt="" />
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
                  <li>Team Members</li>
                  <li>JSSATE Noida</li>
                  <li>Upcoming Event</li>
                  <li>Contact</li>
                  <li>Events</li>
                  <li>Collaborate</li>
                  <li>Gallery</li>
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
          <hr style={{border:"1px solid grey" }}/>
          </div>
          <div id="policy">
            <h4>Created By :&nbsp;</h4>
            <p>&copy; Ashish Gupta</p>
          </div>
        </div>
      </footer>
    </>
  );
};
