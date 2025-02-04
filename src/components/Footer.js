import React from "react";
import { Megaphone, Palette, BarChart, Speaker } from "lucide-react";
import logo from "../images/logo.png";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo and Description */}
      <aside className="space-y-4">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <img src={logo} alt="DecidiShop Logo" className="h-12" />
        </div>
        <p className="text-gray-400 text-sm">
          Feito por jovens para jovens <br />
          DecidiShop
        </p>
      </aside>

      {/* Services Section */}
      <nav className="space-y-4">
        <h6 className="text-lg font-semibold uppercase">Services</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a
              href="#"
              className="hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
            >
              <Megaphone size={18} />
              Advertising
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
            >
              <Palette size={18} />
              Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
            >
              <BarChart size={18} />
              Marketing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 flex items-center gap-2 transition-colors duration-200"
            >
              <Speaker size={18} />
              Branding
            </a>
          </li>
        </ul>
      </nav>

      {/* Company Section */}
      <nav className="space-y-4">
        <h6 className="text-lg font-semibold uppercase">Company</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Press kit
            </a>
          </li>
        </ul>
      </nav>

      {/* Legal Section */}
      <nav className="space-y-4">
        <h6 className="text-lg font-semibold uppercase">Legal</h6>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of use
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Cookie policy
            </a>
          </li>
        </ul>
      </nav>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} DecidiShop. All rights reserved.
    </div>
  </footer>
);

export default Footer;
