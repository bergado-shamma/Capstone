import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import "../../css/LogIn.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    console.log("Logging in with:", { email, password });
    alert("Login successful! Redirecting...");
    window.location.href = "/dashboard"; // Change this if using Inertia
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <div className="content">
          <img src="illustration.png" alt="Illustration" className="illustration" />
          <h2>Welcome to <span>PFRS</span></h2>
          <p>Property and Facilities Reservation System</p>
        </div>
      </div>
      <div className="right-side">
        <div className="login-box">
          <img src="university-logo.png" alt="University Logo" className="logo" />
          <h2>Login to your Account</h2>
          <p>Reserve Smarter, Not Harder.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">User</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mail@abc.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="remember-forgot">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </form>
          <p className="register">
            <Link href="/RegisterPage">Create an Account →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
