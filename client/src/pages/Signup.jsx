import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
import { Button } from "../components/Button.jsx";

export const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }
      if(response.status === 400){
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        alert("User Already Exist")
        navigate("/login");
      }
    } catch (error) {
      console.log("signup", error)
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h3>Sign Up as Admin</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="string"
                name="phone"
                placeholder="Enter your Phone No."
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <Button text="Sign Up" class="submit button" />
            <div className="btnSection">
              <p>If Account already exists</p>
              <NavLink to="/login">Login</NavLink>
            </div>
          </form>
        </div>
      </div>
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
