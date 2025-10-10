import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import iconDownloads from "../../assets/icon-downloads.png";
import iconRatings from "../../assets/icon-ratings.png";
import iconReviews from "../../assets/icon-review.png";

const AppDetails = () => {
  const app = useLoaderData();
  const {
    id,
    image,
    companyName,
    description,
    ratingAvg,
    ratings,
    title,
    size,
    downloads,
    reviews,
  } = app;

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleInstall = (id) => {
    const numericId = Number(id);
    if (!installedApps.includes(numericId)) {
      const updated = [...installedApps, numericId];
      setInstalledApps(updated);
      localStorage.setItem("installedApps", JSON.stringify(updated));
    }
  };

  const isInstalled = installedApps.includes(id);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-10 md:py-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start border-b border-gray-200 pb-12">
          {/* Image */}
          <div className="flex justify-center md:w-1/3">
            <img
              src={image}
              alt={`${title} logo`}
              className="w-2/3 md:w-full object-contain"
            />
          </div>

          {/* App Info */}
          <div className="md:w-2/3">
            <h1 className="text-[#001931] text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
              {title}
            </h1>
            <p className="text-[#627382] text-lg mb-6 text-center md:text-left">
              Developed by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-semibold">
                {companyName}
              </span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 border-t border-gray-200 pt-6">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img src={iconDownloads} alt="Downloads icon" className="h-10 w-10" />
                <p className="text-[#001931] mt-2 text-base">Downloads</p>
                <h3 className="text-3xl font-extrabold text-[#001931]">{downloads}</h3>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img src={iconRatings} alt="Ratings icon" className="h-10 w-10" />
                <p className="text-[#001931] mt-2 text-base">Average Rating</p>
                <h3 className="text-3xl font-extrabold text-[#001931]">{ratingAvg}</h3>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img src={iconReviews} alt="Reviews icon" className="h-10 w-10" />
                <p className="text-[#001931] mt-2 text-base">Total Reviews</p>
                <h3 className="text-3xl font-extrabold text-[#001931]">{reviews}</h3>
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-8 text-center md:text-left">
              <button
                onClick={() => handleInstall(id)}
                disabled={isInstalled}
                className={`rounded px-6 py-3 text-lg font-semibold text-white transition ${
                  isInstalled
                    ? "bg-[#00D390]/60 cursor-not-allowed"
                    : "bg-[#00D390] hover:bg-[#00b77d]"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size})`}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="py-12 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-[#001931] mb-6 text-center md:text-left">
            Ratings Overview
          </h2>
          <div className="w-full h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={ratings
                  .slice()
                  .map((r) => ({ name: r.name, value: r.count }))}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ dx: -10 }}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#FF8811" barSize={28} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="py-12">
          <h2 className="text-2xl font-semibold text-[#001931] mb-4 text-center md:text-left">
            Description
          </h2>
          <p className="text-[#374151] leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
