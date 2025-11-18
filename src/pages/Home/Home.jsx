import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";


const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("USER!!!!", user)
  return (
    <div className="home-container">
      <div className="home-card">
          <h1 className="home-title">
            Welcome{user ? `, ${user.name}` : ""}! 🎉
          </h1>
        <p className="home-text">Your account was created successfully.</p>

        <button
          className="home-btn"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Home;
