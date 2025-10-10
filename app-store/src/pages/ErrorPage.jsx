import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import errorPageImg from "../assets/error-404.png";



const ErrorPage = () => {
    return (
        <section className="w-full bg-white min-h-screen flex flex-col">
            {/* Navbar */}
            <div className="w-full">
                <Navbar />
            </div>

            {/* Error Content */}
            <div className="flex-grow flex items-center justify-center bg-[#f5f5f5] py-12 md:py-20 px-5">
                <div className="max-w-[1440px] mx-auto text-center">
                    <img
                        src={errorPageImg}
                        alt="404 - Page not found"
                        className="w-full max-w-md mx-auto"
                    />
                    <h1 className="text-[#001931] font-bold text-4xl md:text-5xl mt-8">
                        Oops! Page not found
                    </h1>
                    <p className="text-[#627382] text-lg md:text-xl mt-4 mb-6">
                        The page you’re looking for might have been removed or never existed.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold py-3 px-6 rounded-md shadow hover:opacity-90 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};

export default ErrorPage;
