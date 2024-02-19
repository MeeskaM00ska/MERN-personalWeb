import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { LuCode2 } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-yellow-50 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to="/listing">
        <img
          src={listing.imageUrls[0]}
          alt="cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-slate-700 text-2xl font-bold truncate">
            {listing.name}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <div className="flex flex-row flex-wrap items-center gap-1">
            <SlCalender />
            <span className="text-sm text-gray-600 line-clamp-2">
              {listing.startDate}
            </span>
            <FaLongArrowAltRight className="text-gray-600" />
            <span className="text-sm text-gray-600 line-clamp-2">
              {listing.endDate}
            </span>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <LuCode2 />
            <p className="text-sm text-gray-600 line-clamp-2">
              {listing.tools}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
