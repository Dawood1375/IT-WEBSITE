import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className="grid bg-[black] grid-cols-1 md:grid-cols-3 gap-10 p-10">
      {/* Logo and Description */}
      <div className="mb-8 md:mb-0">
        <h1 className="text-6xl text-white font-bold mb-4">LOGO</h1>
        <p className="text-sm text-[#b2b2b2] leading-loose">
          Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.Lorem
          ipsum dolor sit amet consectetur. Laoreet cras egestas.Lorem ipsum
          dolor sit amet consectetur. Laoreet cras egestas.Lorem ipsum dolor sit
          amet consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet
          consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet
          consectetur. Laoreet cras egestas.
        </p>
      </div>

      {/* Services List */}
      <div className="mb-8 md:mb-0">
        <h2 className="text-lg text-white font-semibold mb-4">Services</h2>
        <ul className="text-sm text-[#b2b2b2] space-y-2">
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
          <li>Business Planning</li>
        </ul>
      </div>

      {/* Useful Links and Follow Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg text-white font-semibold mb-4">
            Useful Links
          </h2>
          <ul className="text-sm text-[#b2b2b2] space-y-2">
            <li>
              <Link to="/lorem" className="hover:underline">
                Lorem
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/lorem-ipsum" className="hover:underline">
                Lorem ipsum
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg text-white  font-semibold mb-4">Follow Us</h2>
          {/* Updated flex layout for responsiveness */}
          <div className="flex flex-wrap space-x-4">
            <Link to="#" className="text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#" className="text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="#" className="text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <br />
            <Link to="#" className="text-red-500">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link to="#" className="text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="#" className="text-gray-700">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
