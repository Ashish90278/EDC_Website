import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Register.css";


export const Form = () => {



  const [user, setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : ""
  });
  
  const handleInput = (e) => {
    console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name] : value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hii")
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h3>${isSignInPage? Register as Admin : Admin Login}</h3>
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
                type="number"
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
            <button type="submit">Register</button>
            <div className="btnSection">
              <p>If Account already exists</p>
              <NavLink to="/login">Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
