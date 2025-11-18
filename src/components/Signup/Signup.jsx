import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import {
  signupStart,
  signupSuccess,
  signupFailure,
} from "../../features/auth/authSlice";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  console.log("CURRENT AUTH STATE:", auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim() || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // Redux actions
    if (Object.keys(newErrors).length === 0) {
      dispatch(signupStart());

      // simulate API call
      setTimeout(() => {
        dispatch(signupSuccess(form));
        console.log("skfjhkljhkksjghkdjfghkdjf")
        // window.location.href = "/home";
        navigate("/home");

      }, 800);
    } else {
      dispatch(signupFailure("Please fill all fields correctly"));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
