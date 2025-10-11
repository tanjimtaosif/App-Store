import React, { useState, useEffect } from "react";
import InsideAllApps from "./InsideAllApps";
import { FiSearch } from "react-icons/fi";

const AllApps = () => {
    const [apps, setApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("high-low");
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch data from /public/appsData.json
    useEffect(() => {
        fetch("/appsData.json")
            .then((res) => res.json())
            .then((data) => setApps(data))
            .catch((err) => console.error("Failed to fetch apps:", err));
    }, []);

    // Sort apps by downloads
    const sortedApps = [...apps].sort((a, b) => {
        if (sortOrder === "high-low") return b.downloads - a.downloads;
        if (sortOrder === "low-high") return a.downloads - b.downloads;
        return 0;
    });

    // Filter apps by search term
    const filteredApps = sortedApps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 md:px-20 py-10">
            {/* Header Section */}
            <div className="text-center mb-12 space-y-3">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#001931]">
                    Our All Applications
                </h1>
                <p className="text-[#627382] text-lg md:text-xl">
                    Explore all the apps we’ve built — designed for performance,
                    reliability, and millions of users.
                </p>
            </div>

            {/* Controls (Count, Search, Sort) */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-[#001931]">
                    ({filteredApps.length}) Apps Found
                </h2>

                <div className="flex items-center gap-4">
                    {/* Search Input */}
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
                        <input
                            type="text"
                            placeholder="Search apps..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-[#632EE3] focus:outline-none"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 text-gray-700 font-medium focus:ring-2 focus:ring-[#632EE3] focus:outline-none"
                    >
                        <option value="high-low">Downloads: High → Low</option>
                        <option value="low-high">Downloads: Low → High</option>
                    </select>
                </div>
            </div>

            {/* Apps Grid */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredApps.map((app) => (
                        <InsideAllApps key={app.id} insideApps={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600 py-10">
                    No apps found matching your search.
                </div>
            )}
        </div>
    );
};

export default AllApps;
