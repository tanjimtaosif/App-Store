import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import InsideAllApps from "../InsideAllApps/InsideAllApps";
import Loader from "../../Components/Loader/Loader";

const AllApps = () => {
  const apps = useLoaderData();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(apps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const results = apps.filter((app) =>
        app.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
      setLoading(false);
    }, 350);
    return () => clearTimeout(timeout);
  }, [query, apps]);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 pb-20">
        {/* Header */}
        <div className="text-center pt-10 md:pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-3">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-lg md:text-xl">
            Explore all the apps we’ve built — designed for performance,
            reliability, and millions of users.
          </p>
        </div>

        {/* Search + Count */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 mb-8">
          <h3 className="text-[#001931] text-2xl font-semibold">
            ({filtered.length}) Apps Found
          </h3>

          <div className="relative w-full md:w-72">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
            <input
              type="text"
              placeholder="Search apps..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader />
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <InsideAllApps key={item.id} insideApps={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-xl mt-10">
            No apps found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default AllApps;
