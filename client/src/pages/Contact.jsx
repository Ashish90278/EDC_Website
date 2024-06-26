import { NavLink } from "react-router-dom";
import react from "react";
import { useState, useEffect } from "react";
import { Button } from "../components/Button.jsx";
import { useAuth } from "../store/Auth.jsx";
import "./Contact.css";

export const Contact = () => {

  const [contact, setContact] = useState({
    username:"",
    email:"",
    subject:"",
    message:""
  })

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();
  const { isLoggedIn } = useAuth();

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      subject: "",
      message: ""
    });

    setUserData(false);
  };

  const handleContactInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleContactSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://edc-website-server-api.onrender.com/api/auth/contact", {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if(response.ok){
        setContact({
          username: "",
          email: "",
          subject: "",
          message: ""
        });
        alert("Thank for Contacting Us");
      }

      if(response.status === 400){
        setContact({
          username: "",
          email: "",
          subject: "",
          message: ""
        });
        alert("Error in Submission");
      }
    } catch (error) {
      console.log(error);
    }

  }
  console.log(isLoggedIn)
  useEffect(() => {
    
  }, [isLoggedIn])
  
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
              <form id="myForm" onSubmit={handleContactSubmit}>
                <div className="input-line">
                  <input
                    id="name"
                    name="username"
                    type="text"
                    placeholder="Name"
                    required
                    className="input-name"
                    value={contact.username}
                    onChange={handleContactInput}
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="input-name"
                    value={contact.email}
                    onChange={handleContactInput}
                  />
                </div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="input-subject"
                  value={contact.subject}
                  onChange={handleContactInput}
                />
                <textarea
                  id="body"
                  name="message"
                  className="input-textarea"
                  required
                  placeholder="Message"
                  value={contact.message}
                  onChange={handleContactInput}
                ></textarea>
                <Button text="Submit" class="submit" />
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
                      <p>edcjssate@gmail.com</p>
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
