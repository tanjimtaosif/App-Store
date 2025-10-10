import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { FaStar, FaCaretDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const InstalledApps = () => {
  const allApps = useLoaderData();
  const [installed, setInstalled] = useState([]);
  const [sortType, setSortType] = useState("");
  const dropdownRef = useRef(null);

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalled(stored);
  }, []);

  // Remove app
  const handleUninstall = (id) => {
    const updated = installed.filter((appId) => appId !== id);
    setInstalled(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));

    const app = allApps.find((a) => a.id === id);
    toast.info(`${app?.title || "App"} has been uninstalled`, {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: false,
      theme: "colored",
    });
  };

  // Sort by downloads
  const handleSort = (order) => {
    setSortType(order);
    if (dropdownRef.current) dropdownRef.current.removeAttribute("open");
  };

  const parseDownloads = (value) => {
    if (!value) return 0;
    const num = parseFloat(value.replace(/[^\d.]/g, ""));
    if (value.includes("M")) return num * 1_000_000;
    if (value.includes("K")) return num * 1_000;
    return num;
  };

  const installedApps = allApps
    .filter((app) => installed.includes(app.id))
    .sort((a, b) => {
      if (sortType === "High-Low") return parseDownloads(b.downloads) - parseDownloads(a.downloads);
      if (sortType === "Low-High") return parseDownloads(a.downloads) - parseDownloads(b.downloads);
      return 0;
    });

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 pb-20">
        {/* Header */}
        <div className="text-center pt-10 md:pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-3">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-lg md:text-xl">
            Manage and organize the apps you’ve installed from our marketplace.
          </p>
        </div>

        {/* Filter / Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 mb-8 gap-5">
          <h3 className="text-[#001931] text-2xl font-semibold">
            ({installedApps.length}) Apps Found
          </h3>

          <details ref={dropdownRef} className="dropdown">
            <summary className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold flex items-center gap-2">
              {sortType
                ? `Sort: ${sortType === "High-Low" ? "High → Low" : "Low → High"}`
                : "Sort by downloads"}{" "}
              <FaCaretDown />
            </summary>
            <ul className="menu dropdown-content bg-white border rounded-md shadow-lg w-52 p-2 text-gray-700 z-10">
              <li>
                <button onClick={() => handleSort("High-Low")}>High → Low</button>
              </li>
              <li>
                <button onClick={() => handleSort("Low-High")}>Low → High</button>
              </li>
            </ul>
          </details>
        </div>

        {/* Installed Apps List */}
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 py-20 text-xl">
            You haven’t installed any apps yet.
          </p>
        ) : (
          <div className="space-y-5">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col md:flex-row justify-between items-center bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
              >
                {/* App Info */}
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <img
                    src={app.image}
                    alt={`${app.title} logo`}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-[#001931]">
                      {app.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-sm md:text-base">
                      <div className="text-[#00D390] flex items-center gap-1 font-medium">
                        <FiDownload />
                        {app.downloads}
                      </div>
                      <div className="text-[#FF8811] flex items-center gap-1 font-medium">
                        <FaStar />
                        {app.ratingAvg}
                      </div>
                      <span className="text-[#627382]">{app.size}</span>
                    </div>
                  </div>
                </div>

                {/* Uninstall Button */}
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-[#00D390] text-white font-semibold rounded-md px-5 py-2 mt-4 md:mt-0 w-full md:w-auto hover:bg-[#00b77d] transition"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}

        <ToastContainer />
      </div>
    </section>
  );
};

export default InstalledApps;
