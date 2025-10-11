import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import { CiStar } from "react-icons/ci";


const InstalledApps = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        // Assuming installed apps are marked or filtered separately
        const installed = data.slice(0, 3); // Example filter
        setApps(installed);
      })
      .catch((err) => console.error("Failed to load apps:", err));
  }, []);

  // Sort installed apps by downloads
  const sortedApps = [...apps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-extrabold text-[#001931]">
          Your Installed Apps
        </h1>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Sort by downloads:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-gray-700 font-medium focus:ring-2 focus:ring-[#632EE3] focus:outline-none"
          >
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>

      {/* Apps List */}
      <div className="space-y-6">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="h-16 w-16 rounded-md object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#001931]">
                  {app.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="flex items-center gap-1 text-[#00D390]">
                    <FaCloudDownloadAlt /> {app.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-[#FF8811]">
                    <CiStar /> {app.ratingAvg}
                  </span>
                  <span className="text-gray-500 text-sm">{app.size} MB</span>
                </div>
              </div>
            </div>
            <button className="bg-[#00D390] hover:bg-[#00b97d] text-white font-semibold px-4 py-2 rounded-md transition">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
