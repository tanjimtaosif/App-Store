import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


const TrendingApp = ({ singleApp }) => {
    const { id, title, image, downloads, ratingAvg } = singleApp;

    return (
        <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <Link to={`/appDetails/${id}`}>
                <figure className="h-40 bg-gray-100 rounded-t-lg w-full overflow-hidden">
                    <img
                        src={image}
                        alt={`${title} logo`}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="p-5 space-y-4">
                    <h3 className="text-xl font-semibold text-[#001931] truncate">{title}</h3>
                    <div className="flex justify-between items-center">
                        <div className="text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded flex items-center gap-1 text-sm font-medium">
                            <FiDownload /> {downloads}
                        </div>
                        <div className="text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded flex items-center gap-1 text-sm font-medium">
                            <FaStar /> {ratingAvg}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TrendingApp;
