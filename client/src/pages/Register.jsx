import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import { EventCard } from "../components/EventCard.jsx";

export const Register = () => {
  const [userRegistrationData, setUserRegistrationData] = useState({
    username: "",
    email: "",
    branch: "",
    year: "",
    admissionNo: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserRegistrationData({
      ...userRegistrationData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://edc-website-server-api.onrender.com/api/auth/register", {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistrationData),
      });
      
      if (response.ok) {
        setUserRegistrationData({
          username: "",
          email: "",
          branch: "",
          year: "",
          admissionNo: "",
        });
        alert("Thank You for Registering");
      }
      if (response.status === 400) {
        setUserRegistrationData({
          username: "",
          email: "",
          branch: "",
          year: "",
          admissionNo: "",
        });
        alert("You Already Registered");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="container event-register">
        <div className="event-info-container">
          <EventCard
            imageLink="https://ik.imagekit.io/lbqkuzbjo/events/Virtual%20Stock.png"
            description="Virtual Stock Market"
            date="Friday, 10 Nov 2023"
            time="03:45 PM - 04:45 PM "
            venue="Multi-Purpose Hall"
            redirectLink="/events/mr.sandeepjain"
            redirectButtonName="Read More"
          ></EventCard>
        </div>
        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="input-data">
                <input
                  type="text"
                  name="username"
                  required
                  autoComplete="off"
                  value={userRegistrationData.username}
                  onChange={handleInput}
                />
                <div className="input-underline"></div>
                <label htmlFor="username">Name</label>
              </div>
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={userRegistrationData.email}
                  onChange={handleInput}
                />
                <div className="input-underline"></div>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  name="branch"
                  required
                  autoComplete="off"
                  value={userRegistrationData.branch}
                  onChange={handleInput}
                />
                <div className="input-underline"></div>
                <label htmlFor="branch">Enter Your Branch</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  name="year"
                  required
                  autoComplete="off"
                  value={userRegistrationData.year}
                  onChange={handleInput}
                />
                <div className="input-underline"></div>
                <label htmlFor="year">Enter Your Year</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  pattern="[0-9a-zA-Z0-9]+"
                  name="admissionNo"
                  required
                  autoComplete="off"
                  value={userRegistrationData.admissionNo}
                  onChange={handleInput}
                />
                <div className="input-underline"></div>
                <label htmlFor="admissionNo">Admission No.</label>
              </div>
            </div>
            <div className="register_btn">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
};
