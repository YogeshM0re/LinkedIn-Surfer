/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
  const navigate = useNavigate();

  const handleInstallExtension = () => {
    navigate("/search");
  };
  

  return (
    <div>
      <Header />

      <div
        initial="hidden"
        animate="visible"
        className="flex h-screen bg-gradient-to-r from-linkedin-blue-1 to-linkedin-blue-2"
      >
        <div className="hidden md:flex md:w-1/3">
          <img
            src="/LinkedIn surfer 88003b3a-ce03-4ccf-816d-2027c07a1544.png"
            alt="Left Side Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-8 bg-blue-500  shadow-lg">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            LinkedIn Surfer
          </h2>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg"
            alt="LinkedIn Logo"
            className="w-20 h-20 mb-4"
          />
          <p className="text-center text-white">
            Supercharge your networking experience! <br />
            Surf up to 2000 companies a day for free,
            <br />
            get 10 emails a day for free,
            <br />
            and connect to 5 people daily for free.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-linkedin-blue-1 to-linkedin-blue-2 text-white py-2 px-6 mt-6 rounded-full focus:outline-none focus:ring focus:border-linkedin-blue-3 shadow-lg"
            onClick={handleInstallExtension}
          >
            Install Extension
          </motion.button>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Login;
