import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img
        src={logo}
        alt="Loading..."
        className="h-16 w-16 animate-spin-slow"
      />
      <style>
        {`
          @keyframes spin360 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin360 1.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
