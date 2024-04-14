import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

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
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistrationData),
      });

      console.log(response);
      if (response.ok) {
        setUserRegistrationData({
          username: "",
          email: "",
          branch: "",
          year: "",
          admissionNo: "",
        });
      }
      if(response.status === 400){
        setUserRegistrationData({
          username: "",
          email: "",
          branch: "",
          year: "",
          admissionNo: "",
        });
        alert("You Already Registered")
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="container event-register">
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
                  type="number"
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

        <div className="event-info-container">
          {/* <!-- cards start --> */}
          <div className="card">
            <div className="card-body">
              <img src="../imgs/EDC_GFG.png" alt="" />
              <h4>
                Speaker session with Mr. Sandeep Jain ( Founder of Geeks for
                Geeks )
              </h4>
              <div className="card-info">
                <ul>
                  <li>
                    <div>
                      <img src="../imgs/calender.png" alt="" />
                      <p>Friday, 10 Nov 2023</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="../imgs/clock.png" alt="" />
                      <p>03:45 PM - 04:45 PM</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="../imgs/location.png" alt="" />
                      <p>Multi-Purpose Hall</p>
                    </div>
                    {/* <button id="event_register">Register</button> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- card end --> */}
        </div>
      </div>
    </>
  );
};
