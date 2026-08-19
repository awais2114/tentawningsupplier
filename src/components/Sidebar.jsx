import React, { useState } from "react";
import bussinessLogo from '/bussinessLogo.png'
import { FaSearch, FaLinkedinIn, FaBars, FaUserCircle, FaFacebookF, FaFacebook, FaWhatsapp, FaPhone, FaCampground, FaUsers, FaHome, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

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

      <header className="bg-[#3FA313] hidden lg:block text-white">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-3 text-sm cursor-pointer">
            <FaSearch className="hover:text-black transition-colors duration-300" />
            <FaBars className="hover:text-black transition-colors duration-300" />
            <FaUserCircle className="hover:text-black transition-colors duration-300" />
           <a
           target="blank"
           href="https://wa.me/message/X2F5FAISV3J2I1">
             <FaWhatsapp className="hover:text-green-500 transition-colors duration-300" />
           </a>
            <a
            target="blank"
            href="https://www.snapchat.com/add/s_gondal5?share_id=I6Qpzx5DfzE&locale=en-US">
               <FaSnapchatGhost className="hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a
            target="blank"
             href="https://www.tiktok.com/@tafseel_khiyam?_r=1&_t=ZS-98iDRlD7BSe">
              
                <FaTiktok className="hover:text-black transition-colors duration-300" />
            </a>
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

            <a className="text-xs font-bold text-white dark:text-black hover:text-black p-3.5" href="#">معلومات عنا</a>
            <a className="text-xs font-bold text-white  hover:text-black p-3.5" href="#">تفصيل خيام والمظلات</a>
            <a className="text-xs font-bold text-white  hover:text-black p-3.5" href="#">إتصل بنا</a>
          </div>

          {/* Mobile Navbar */}
          <div className="hidden flex justify-between items-center w-full">

            {/* Logo or Date */}
            <span className="text-sm font-semibold">
              الخميس، يوليو 30 2026
            </span>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-xl">

              <FaSearch />

              <FaWhatsapp />

              {/* Sidebar Button */}
              <button className="" onClick={() => setIsOpen(true)}>
                <FaBars />
              </button>

            </div>

          </div>

        </div>
      </header>

      <div className="flex justify-end">
        <img className=" hidden lg:block w-45 mr-6 mt-3 mb-3" src={bussinessLogo} alt="bussinesslogo" />
      </div>
      {/* mobile navbar and image */}
      <div className="flex lg:hidden justify-between shadow-[0_4px_8px_rgba(0,0,0,0.12)] p-3">
        <button onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
        <img className="w-20" src={bussinessLogo} alt="bussinesslogo" />
      </div>

      {/* tab list for pages  */}
      {/* Tab List */}
      {/* Tab List */}
      {/* Tab List */}
      <nav className="hidden lg:block w-full h-14 bg-[#f4a201]">
        {/* <ThemeToggle /> */}

        <div className="mr-3 h-full">
          <ul
            dir="rtl"
            className="flex items-center h-full m-0 p-0 list-none gap-1"
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
              <NavLink 
               onClick={() => setIsOpen(false)}
              to="/" className="flex items-center gap-3">
                <FaHome />
                سياسة الخصوصية
              </NavLink>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white">
              <NavLink
               onClick={() => setIsOpen(false)}
              to="/aboutUs" className="flex items-center gap-3">
                <FaUsers />
                معلومات عنا
              </NavLink>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white">
              <NavLink
               onClick={() => setIsOpen(false)}
              to="/contactUs" className="flex items-center gap-3">
                <FaPhone />
                إتصل بنا
              </NavLink>
            </li>

            <li className="border-b border-[#2a2b2f] pb-4 text-white flex">
              <NavLink
               onClick={() => setIsOpen(false)}
              to="/tent&canopies" className="flex items-center gap-3">
                <FaCampground />
                تفصيل خيام والمظلات
              </NavLink>
            </li>
          </ul>

        </div>
      </div>


    </>

  );
};

export default Sidebar;