import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import TrendingApp from "./TrendingApp.jsx";
import Loader from "../components/Loader.jsx";

const TrendingApps = ({ data }) => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 pb-20">
        {/* Header */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001931] mb-3">
            Trending Apps
          </h2>
          <p className="text-[#627382] text-lg md:text-xl">
            Discover what’s popular right now — built and loved by millions of users.
          </p>
        </div>

        {/* Apps Grid */}
        <Suspense fallback={<div className="flex justify-center py-10"><Loader /></div>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.slice(0, 8).map((app) => (
              <TrendingApp key={app.id} singleApp={app} />
            ))}
          </div>
        </Suspense>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/all-apps"
            className="inline-block bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold py-3 px-8 rounded-md shadow hover:opacity-90 transition"
          >
            Show All Apps
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
