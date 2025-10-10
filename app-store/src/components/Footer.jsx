import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-10">
        {/* Brand Section */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-white"
          >
            <img src={logo} alt="HERO.IO Logo" className="h-10 w-10" />
            <span>HERO.IO</span>
          </Link>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            Building powerful and creative digital solutions. We craft apps that
            make life easier, smarter, and more connected.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-[#9F62F2] transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-apps"
                className="hover:text-[#9F62F2] transition duration-200"
              >
                All Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installed-apps"
                className="hover:text-[#9F62F2] transition duration-200"
              >
                Installation
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/devgantabya"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#9F62F2] transition duration-200"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white text-black rounded-full hover:bg-[#9F62F2] hover:text-white transition duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white text-black rounded-full hover:bg-[#9F62F2] hover:text-white transition duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white text-black rounded-full hover:bg-[#9F62F2] hover:text-white transition duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} HERO.IO — Designed & Developed with ❤️ by
          Dev Gantabya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
