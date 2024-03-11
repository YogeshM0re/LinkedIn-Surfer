import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
  const navigate = useNavigate();

  const handleInstallExtension = () => {
    // Redirect to the search page
    navigate("/search");
  };
  return (
    <div>
      <Header />

      <div className="login-container">
        <div className="left-side">
          <img
            src="/LinkedIn surfer 88003b3a-ce03-4ccf-816d-2027c07a1544.png"
            alt="Left Side Image"
            className="left-side-image"
          />
        </div>

        <div className="right-side">
          <h2 className="login-heading">LinkedIn surfer</h2>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg"
            alt="LinkedIn Logo"
            className="linkedin-logo"
          />
          <p className="login-description">
            Surf up to 2000 companies a day for free! <br />
            Get 10 emails a day for free
            <br />
            Connect to 5 people a day for free
          </p>
          <button type="submit" className="login-button"
                      onClick={handleInstallExtension}
                      >
            Install Extension
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
