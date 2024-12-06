import React from "react";
import "../index.css";
import assets from "../assets/img/assets";
const HomeSection3 = ({ image1, image2, image3 }) => {
  return (
    <>
      <div className="p-4">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={image1}
            alt="A person holding a digital shield with a network of connections"
            className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              The Fastest Hiring And Payments
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              We specialize in delivering cutting-edge IT services tailored to
              meet the unique needs of businesses across industries. Our expert
              team is dedicated to providing comprehensive solutions that drive
              efficiency, enhance security, and foster innovation.
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Managed IT Services</li>
              <li>Cloud Solution</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
            </ul>
            <a href="#" className="text-gray-950 underline decoration-black	  ">
              Pay your external workforce in one click.
            </a>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              The Fastest Hiring And Payments
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              We specialize in delivering cutting-edge IT services tailored to
              meet the unique needs of businesses across industries. Our expert
              team is dedicated to providing comprehensive solutions that drive
              efficiency, enhance security, and foster innovation.
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Managed IT Services</li>
              <li>Cloud Solution</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
            </ul>
            <a href="#" className="text-gray-950 decoration-black	  underline">
              Pay your external workforce in one click.
            </a>
          </div>
          <img
            src={image2}
            alt="A digital cloud with various technology icons"
            className="w-full md:w-1/2"
          />
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={image3}
            alt="A person holding a digital shield with a network of connections"
            className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"
          />
          <div className="w-full md:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              The Fastest Hiring And Payments
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              We specialize in delivering cutting-edge IT services tailored to
              meet the unique needs of businesses across industries. Our expert
              team is dedicated to providing comprehensive solutions that drive
              efficiency, enhance security, and foster innovation.
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Managed IT Services</li>
              <li>Cloud Solution</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
            </ul>
            <a href="#" className="text-gray-950 underline decoration-black	  ">
              Pay your external workforce in one click.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
