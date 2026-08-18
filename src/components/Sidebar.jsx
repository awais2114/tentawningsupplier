import React, { useState } from "react";
import bussinessLogo from '/bussinessLogo.png'
import { FaSearch, FaLinkedinIn, FaBars, FaUserCircle, FaInstagram, FaFacebookF, FaTwitter, FaFacebook, FaWhatsapp, FaYoutube, FaPhone, FaCampground, FaUsers, FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeNewTab, setActiveNewTab] = useState("home");

  return (
    <>
      {/* new navbar */}

      <div className="flex h-1 w-full">
        <div className="flex-1 bg-pink-500"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-purple-500"></div>
        <div className="flex-1 bg-red-400"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-green-700"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-purple-400"></div>
        <div className="flex-1 bg-green-400"></div>
        <div className="flex-1 bg-red-400"></div>
        <div className="flex-1 bg-purple-400"></div>
      </div>

      <header className="bg-[#3FA313] text-white">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-3 text-sm cursor-pointer">
            <FaSearch className="hover:text-black transition-colors duration-300" />
            <FaBars className="hover:text-black transition-colors duration-300" />
            <FaUserCircle className="hover:text-black transition-colors duration-300" />
            <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
            <FaLinkedinIn className="hover:text-blue-700 transition-colors duration-300" />
            <FaXTwitter className="hover:text-black transition-colors duration-300" />
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300" />
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center gap-0 text-sm cursor-pointer"
            dir="rtl"
          >
            <span className="font-semibold">
              الخميس، يوليو 30 2026
            </span>

            <a className="text-xs font-bold text-white  hover:text-black p-3.5" href="#">معلومات عنا</a>
            <a className="text-xs font-bold text-white  hover:text-black p-3.5" href="#">تفصيل خيام والمظلات</a>
            <a className="text-xs font-bold text-white  hover:text-black p-3.5" href="#">إتصل بنا</a>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden flex justify-between items-center w-full">

            {/* Logo or Date */}
            <span className="text-sm font-semibold">
              الخميس، يوليو 30 2026
            </span>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-xl">

              <FaSearch />

              <FaWhatsapp />

              {/* Sidebar Button */}
              <button onClick={() => setIsOpen(true)}>
                <FaBars />
              </button>

            </div>

          </div>

        </div>
      </header>

      <div className="flex justify-end">
        <img className="w-45 mr-6 mt-3 mb-3" src={bussinessLogo} alt="bussinesslogo" />
      </div>

      {/* tab list for pages  */}
      {/* Tab List */}
      {/* Tab List */}
      {/* Tab List */}
      <nav className="w-full h-14 bg-[#f4a201] block">
        <div className="mr-3 h-full">
          <ul
            dir="rtl"
            className="flex items-center h-full m-0 p-0 list-none"
          >

            {/* Home */}
            <li className="h-full">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `h-full flex items-center justify-center px-5 text-sm font-bold ${isActive
                    ? "bg-black text-white"
                    : "bg-transparent text-white hover:bg-black"
                  }`
                }
              >
                <FaHome className="text-lg" />
              </NavLink>
            </li>

            {/* Tent & Canopies */}
            <li className="h-full">
              <NavLink
                to="/tent&canopies"
                className={({ isActive }) =>
                  `h-full flex items-center justify-center px-5 text-sm font-bold ${isActive
                    ? "bg-black text-white"
                    : "bg-transparent text-white hover:bg-black"
                  }`
                }
              >
                تفصيل خيام والمظلات
              </NavLink>
            </li>

            {/* About */}
            <li className="h-full">
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `h-full flex items-center justify-center px-5 text-sm font-bold ${isActive
                    ? "bg-black text-white"
                    : "bg-transparent text-white hover:bg-black"
                  }`
                }
              >
                معلومات عنا
              </NavLink>
            </li>

            {/* Contact */}
            <li className="h-full">
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  `h-full flex items-center justify-center px-5 text-sm font-bold ${isActive
                    ? "bg-black text-white"
                    : "bg-transparent text-white hover:bg-black"
                  }`
                }
              >
                إتصل بنا
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/*mobile  Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1f2024] shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-5">

          <div className="flex justify-center">
            <button
              className="text-xl text-white  mb-8 hover:text-red-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul
            className="space-y-5 text-right text-lg"
            dir="rtl"
          >
            <li className="border-b border-[#2a2b2f] pb-4 text-white">
              <a className="flex items-center gap-3 " href="#">
                <FaHome />
                سياسة الخصوصية</a>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white">
              <a className="flex items-center gap-3" href="#">
                <FaUsers />
                معلومات عنا</a>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white">
              <a className="flex items-center gap-3" href="#">
                <FaPhone />
                إتصل بنا</a>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white flex  ">
              <a className="flex items-center gap-3" href="#">
                <FaCampground />
                تفصيل خيام والمظلات</a>
            </li>
          </ul>

        </div>
      </div>


    </>

  );
};

export default Sidebar;