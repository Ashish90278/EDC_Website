import { NavLink } from "react-router-dom";
import react from "react";
import "./Contact.css";
import { Button } from "../components/Button.jsx";

export const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          {/* Contact Heading Start */}

          <div className="contact-header">
            <div>
              CONTACT <div className="color"> US</div>
            </div>
            <div className="contact-header-caption">
              <div className="color"> Get</div> In Touch
            </div>
          </div>

          {/* Contact Heading End */}

          <div className="contact-content">
            <div className="contact-form">
              <div className="form-header">Message</div>
              <form id="myForm" action="#">
                <div className="input-line">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required=""
                    className="input-name"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required=""
                    className="input-name"
                  />
                </div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required=""
                  className="input-subject"
                />
                <textarea
                  id="body"
                  className="input-textarea"
                  required=""
                  placeholder="Message"
                ></textarea>
                <Button text="Submit" class="submit" />
                {/* <button type="submit" id="submit">
                <div id="submitLoader"></div>
                <span id="submitText"> Submit </span>
                <div id="submitLoaderSpace"></div>
              </button> */}
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-header">Contact Info</div>
              <div className="contact-info-content">
                <div className="contect-info-content-line">
                  <img
                    src="../imgs/contact-form-logo1.png"
                    className="icon"
                    alt="name-icon"
                  />
                  <div className="contact-info-icon-text">
                    <h6>Email Us</h6>
                    <a href="mailto:edciitd.team@gmail.com">
                      <p>ecelljss@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className="contect-info-content-line">
                  <img
                    src="../imgs/contact-form-logo2.png"
                    className="icon"
                    alt="location-icon"
                  />
                  <div className="contact-info-icon-text">
                    <h6>Our Address</h6>
                    <p>
                      JSS Academy of Technical Educaiton, Noida C-20/1,
                      Sector-62, NOIDA, DISTT. U.P., INDIA-201301
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
