import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/img/assets";

const ReviewCard = ({ color }) => (
  <>
    <div className="bg-white shadow-lg mb-20 rounded-lg overflow-hidden">
      {/* Header Section */}
      <div
        className={`flex items-center justify-between p-4 ${color} rounded-t-lg`}
      >
        <div className="text-white">
          <FontAwesomeIcon icon={faStar} className="text-xl" />
        </div>
        <div className="text-white font-bold text-sm sm:text-base">REVIEW</div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-center mb-4">
          {/* Profile Image */}
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={assets.Rectangle55}
            alt="Profile picture of John Smith"
          />
          {/* Profile Info */}
          <div>
            <div className="font-bold text-sm sm:text-base">JOHN SMITH</div>
            <div className="text-gray-500 text-xs sm:text-sm">
              CUSTOMER AGENT
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-gray-700 text-xs sm:text-sm md:text-base">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
      </div>
    </div>
  </>
);

const ReviewSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Review Cards */}
        <ReviewCard color="bg-red-600" />
        <ReviewCard color="bg-green-500" />
        <ReviewCard color="bg-red-600" />
      </div>
    </div>
  );
};

export default ReviewSection;
