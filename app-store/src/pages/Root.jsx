import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/Loader.jsx";


const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  // Handle navigation loading state
  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => setShowLoader(false), 300);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Full-width Navbar */}
      <header className="w-full bg-white shadow-sm z-50">
        <Navbar />
      </header>

      {/* Main content with conditional loader */}
      <main className="flex-grow w-full">
        {showLoader ? (
          <div className="flex justify-center items-center h-[70vh]">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
