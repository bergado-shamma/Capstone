import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import "../../css/Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    studentNumber: "",
    lastName: "",
    firstName: "",
    middleName: "",
    organization: "",
    course: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registering with:", formData);
    alert("Registration successful! Redirecting...");
    window.location.href = "/dashboard"; // Change if using Inertia
  };

  return (
    <div className="container">
      {/* Left Side: Background Image */}
      <div className="left-section">
        <img src="prfs-campus.jpg" alt="Campus Image" />
      </div>

      {/* Right Side: Registration Form */}
      <div className="right-section">
        <div className="logo">
          <img src="logo.png" alt="PRFS Logo" />
        </div>
        <h2>Get Started With PRFS</h2>
        <p className="subtext">Getting started is easy</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Number"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            required
          />

          <div className="name-fields">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>

          <div className="dropdown-fields">
            <select name="organization" value={formData.organization} onChange={handleChange} required>
              <option value="" disabled>Organization</option>
              <option value="org1">Organization 1</option>
              <option value="org2">Organization 2</option>
            </select>

            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="" disabled>Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
            </select>
          </div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="create-btn">Create Account</button>
        </form>

        <p className="login-text">
          Have an account? <Link href="/login" className="signin-link">Sign in!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
