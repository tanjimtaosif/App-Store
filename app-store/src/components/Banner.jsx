import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/hero.png";
import googlePlayIcon from "../../assets/google-play-icon.png";
import appStoreIcon from "../../assets/app-store-icon.webp";

const Banner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-12 md:pt-20 text-center">
      <h1 className="text-[#001931] text-5xl md:text-7xl font-extrabold leading-tight">
        We Build
        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>
        Apps
      </h1>

      <p className="mt-5 text-[#627382] text-lg md:text-xl max-w-3xl mx-auto">
        At HERO.IO, we create innovative apps designed to simplify and enhance
        everyday life. Our goal is to transform your ideas into seamless digital
        experiences that make a real difference.
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
        <Link to="https://play.google.com/">
          <button className="flex items-center justify-center gap-2 outline outline-gray-300 text-[#001931] font-semibold text-lg px-6 py-3 rounded w-[200px] md:w-auto hover:bg-gray-100 transition">
            <img src={googlePlayIcon} alt="Google Play" className="w-6 h-6" />
            Google Play
          </button>
        </Link>
        <Link to="https://www.apple.com/app-store/">
          <button className="flex items-center justify-center gap-2 outline outline-gray-300 text-[#001931] font-semibold text-lg px-6 py-3 rounded w-[200px] md:w-auto hover:bg-gray-100 transition">
            <img src={appStoreIcon} alt="App Store" className="w-6 h-6" />
            App Store
          </button>
        </Link>
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src={bannerImg}
          alt="App showcase"
          className="w-full max-w-3xl md:max-w-5xl"
        />
      </div>
    </section>
  );
};

export default Banner;
