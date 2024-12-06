import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faBolt,
  faMoneyBillWave,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import icons from Font Awesome React
import "../index.css";

const Achievement = () => {
  return (
    <div className="flex flex-wrap bg-[black]  w-full mb-20 justify-center items-center space-x-10 gap-10 py-8">
      {/* Single Achievement */}
      <div className="text-center w-40">
        <FontAwesomeIcon icon={faCogs} className="text-4xl text-white mb-2" />
        <div className="text-white font-bold text-2xl">12 Services</div>
      </div>

      <div className="text-center w-40">
        <FontAwesomeIcon icon={faBolt} className="text-4xl text-white mb-2" />
        <div className="text-white font-bold text-2xl">200+ Projects</div>
      </div>

      <div className="text-center w-40">
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          className="text-4xl text-white mb-2"
        />
        <div className="text-white font-bold text-2xl">$200k+ Revenue</div>
      </div>

      <div className="text-center w-40">
        <FontAwesomeIcon icon={faUser} className="text-4xl text-white mb-2" />
        <div className="text-white font-bold text-2xl ">300+ Happy Clients</div>
      </div>
    </div>
  );
};

export default Achievement;
