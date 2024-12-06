import React, { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react"; // ArrowLeft for back icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex text-sm items-center justify-between pt-10 px-6 py-4 lg:px-12">
      <Link to="/">
        <div className="text-xl font-bold">YOUR LOGO</div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 md:hidden"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 top-0 h-screen bg-black p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 z-50" : "-translate-y-full"
        }`}
      >
        {/* Close/Back Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center text-white space-x-2"
        >
          <ArrowLeft size={24} />
          <span>Back</span>
        </button>

        <div className="mt-8 flex flex-col space-y-4">
          {[
            { name: "SERVICES", path: "/services" },
            { name: "ABOUT", path: "/about" },
            { name: "RESOURCES", path: "#" }, // Placeholder path
            { name: "COMPANY", path: "/WebdevDetails" }, // Placeholder path
            { name: "PRICING", path: "#" }, // Placeholder path
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white text-lg hover:underline"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="#"
            className="text-white text-lg border border-white p-2 hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-8 md:flex">
        {[
          { name: "SERVICES", path: "/services" },
          { name: "ABOUT", path: "/about" },
          { name: "RESOURCES", path: "#" }, // Placeholder path
          { name: "COMPANY", path: "/WebdevDetails" }, // Placeholder path
          { name: "PRICING", path: "#" }, // Placeholder path
        ].map((item, index) => (
          <Link key={index} to={item.path} className="text-white">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hidden items-center space-x-4 md:flex">
        <Link to="#" className="text-white">
          LOGIN
        </Link>
        <Link to="#" className="text-white px-4 py-2">
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
