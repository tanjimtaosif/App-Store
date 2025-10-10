import React from "react";
import { Link } from "react-router-dom";
import errorAppImg from "../assets/App-Error.png";

const NotFoundAppPage = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-5 md:px-20 py-16 md:py-24 bg-[#f5f5f5] text-center rounded-md">
        <img
          src={errorAppImg}
          alt="App not found"
          className="w-full max-w-lg mx-auto"
        />
        <h1 className="text-[#001931] font-bold text-3xl md:text-5xl mt-8 uppercase">
          Oops! App Not Found
        </h1>
        <p className="text-[#627382] text-lg md:text-xl mt-4 mb-6">
          The app you’re looking for isn’t available in our system.
          <br /> Please check again or explore other apps.
        </p>
        <Link
          to="/all-apps"
          className="inline-block bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold py-3 px-6 rounded-md shadow hover:opacity-90 transition"
        >
          Back to All Apps
        </Link>
      </div>
    </section>
  );
};

export default NotFoundAppPage;
