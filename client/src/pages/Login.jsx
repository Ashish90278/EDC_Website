import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button.jsx";
import { useAuth } from "../store/Auth.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const {storetokenInLS} = useAuth();

  const [user, setUser] = useState({
    username: "",
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
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/auth/login",
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const res_data = await response.json();

        storetokenInLS(res_data.token);
        setUser({
          username: "",
          password: "",
        });
        navigate("/");
        toast("Login Successfully");
      }
      if (response.status === 400) {
        setUser({
          username: "",
          password: "",
        });
        toast.error("Invalid Credentials");
      }
      if (response.status === 401) {
        setUser({
          username: "",
          password: "",
        });
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                required
                autoComplete="off"
                value={user.email}
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
            <Button text="Login" class="submit button" />
            <div className="btnSection">
              <p>Sign Up as Admin</p>
              <NavLink to="/signup">SignUp</NavLink>
            </div>
          </form>
        </div>
      </div>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
