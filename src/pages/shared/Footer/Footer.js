import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 ">
      <div className=" container mx-auto px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">SERVICES</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Architectural Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Urban Planning
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sustainable Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Interior Architecture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">RESOURCES</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Project Portfolio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Case Studies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Industry Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">CONTACT</h6>
            <ul>
              <li className="mb-2">
                <a
                  href="mailto:contact@architectservice.com"
                  className="hover:underline"
                >
                  Email Us
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+123456789" className="hover:underline">
                  Call Us: +1 234 567 89
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Office Locations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="mb-4">
                Stay Updated with the Latest in Architecture.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaPinterestP />
            </a>
          </div>
          <p className="text-sm">
            ©2024 zahahadidarchitects All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
