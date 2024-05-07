// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./LogIn.css";
import Header from "../Header/Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", "authenticated");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage ? <Header /> : ""}
      <div className="login-page">
        <h1 className="signin">SignIn</h1>
        <div className="form">
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-design"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-design"
            />
            <button className="btn-design" type="submit">
              login
            </button>
            <p className="message">
              Not registered?{" "}
              <a href="#" onClick={() => navigate("/signup")}>
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
