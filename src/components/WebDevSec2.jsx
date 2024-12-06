import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/img/assets";

export default function DevelopmentServices() {
  return (
    <div className="flex flex-col flex-wrap justify-center mb-20 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex flex-col  space-y-5">
        <div className="text-center text-2xl font-medium">
          Front-End Development
        </div>
        <hr className="border-gray-400  w-full" />
        <div className="text-center text-2xl font-medium">
          Back-End Development
        </div>
        <hr className="border-gray-400  w-full" />
        <div className="text-center text-2xl font-medium">
          Content Management System (CMS) Integration
        </div>
        <hr className="border-gray-400  w-full" />
        <div className="text-center text-2xl font-medium">
          Word-Press Development
        </div>
        <hr className="border-gray-400  w-full" />
        <div className="text-center text-2xl font-medium">
          Shopify Development
        </div>
        <hr className="border-gray-400  w-full" />
      </div>
      <div className="relative">
        <img
          src={assets.Rectangle84}
          alt="Silhouettes of people in a meeting room with a cityscape background"
          className="w-[40vw] h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-3xl font-bold">Web</div>
          <div className="mt-4">
            <i className="fas fa-globe text-6xl"></i>
          </div>
          <button className="mt-4 px-4 py-2 border border-white text-white">
            ENTER
          </button>
          <div className="mt-2 text-sm">click here for more information!</div>
        </div>
      </div>
    </div>
  );
}
