import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
import { Button } from "../components/Button.jsx";
import { useAuth } from "../store/Auth.jsx";

export const Signup = () => {

  const navigate = useNavigate();

  const {storetokenInLS} = useAuth();

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
      const response = await fetch("https://edc-website-server-api.onrender.com/api/auth/signup", {
        mode: 'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();

        storetokenInLS(res_data.token);
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
          <h3>Sign Up</h3>
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
