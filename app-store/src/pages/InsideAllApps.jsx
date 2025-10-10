import React from "react";
import { Link } from "react-router-dom";
import { Download, Star } from "lucide-react";


const InsideAllApps = ({ insideApps }) => {
    const { id, title, image, downloads, ratingAvg } = insideApps;

    return (
        <Link
            to={`/appDetails/${id}`}
            className="block group transition-all duration-300"
        >
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 border border-gray-100 group-hover:border-[#9F62F2]">
                {/* App Image */}
                <figure className="h-44 w-full bg-gray-100 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </figure>

                {/* App Info */}
                <div className="p-5 space-y-4">
                    <h2 className="text-xl font-semibold text-[#001931] text-center md:text-left group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-[#632EE3] group-hover:to-[#9F62F2] transition-all duration-300">
                        {title}
                    </h2>

                    <div className="flex justify-between items-center text-sm font-medium">
                        {/* Downloads */}
                        <div className="flex items-center gap-2 text-[#00D390] bg-[#F1F5E8] px-3 py-1 rounded-md">
                            <Download className="w-4 h-4" />
                            <span>{downloads}</span>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 text-[#FF8811] bg-[#FFF0E1] px-3 py-1 rounded-md">
                            <Star className="w-4 h-4 fill-[#FF8811]" />
                            <span>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InsideAllApps;
