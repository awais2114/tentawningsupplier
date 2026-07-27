import React, { useState } from "react";
import bussinessLogo from '/bussinessLogo.png'
import { FaInstagram, FaFacebookF, FaTwitter, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ContactUs from "../pages/ContactUs";

const Sidebar = ({setActiveTab}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <nav>

                <div className="container mx-auto px-4">
                    {/* Desktop Menu */}

                    <div className="hidden md:flex space-x-4 sticky z-40 justify-end mt-8 mr-5">
                        <a href="#" className="hover:text-gray-200 text-xs"><FaInstagram size={15} color="#a79a9abc" /></a>
                        <a href="#" className="hover:text-gray-200 text-xs"><FaFacebook size={15} color="#a79a9abc" /></a>
                        <a 
                        href="https://wa.me/message/X2F5FAISV3J2I1"
                        target="blank"
                        rel="noopener noreferrer"
                         className="hover:text-gray-200 text-xs">
                            
                            <FaWhatsapp size={15} color="#a79a9abc" /></a>
                        <a href="#" className="hover:text-gray-200 text-xs"><FaTwitter size={15} color="#a79a9abc" /></a>
                        <a href="#" className="hover:text-gray-200 text-xs"><FaYoutube size={15} color="#a79a9abc" /></a>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div>
                            <img
                                src={bussinessLogo}
                                className="h-10 w-[50px] md:h-30 md:w-[130px] rounded-xl mt-3 md:mt-0"
                                alt="Logo"
                            />
                        </div>


                        {/* Mobile Toggle Button */}
                        <button
                            className="cursor-pointer md:hidden  absolute right-0 top-4"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                           <span className="text-md text-gray-400">☰</span>
                        </button>
                    </div>


                    {/* Mobile Menu */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-full w-full bg-white text-black  z-60 overflow-y-auto transform transition-transform duration-900 ${isOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="p-8">
                            <button
                                className="text-xs cursor-pointer font-extrabold text-gray-300 mb-6"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>

                            <div className="flex justify-end mb-2">
                                <span className="border-b border-gray-300 pb-2">MENU</span>
                            </div>

                            <button
                                onClick={() => {
                                    setActiveTab("ContactUs");
                                    setIsOpen(false);
                                }}
                                className="flex cursor-pointer font-nunito justify-end text-xs py-3 border-b border-gray-300 w-full"
                            >
                                اتصل بنا – 00966551945089
                            </button>

                            <button
                                onClick={() => {
                                    setActiveTab("AboutUs");
                                    setIsOpen(false);
                                }}
                                className="flex cursor-pointer font-nunito justify-end text-xs py-3 border-b border-gray-300 w-full"
                            >
                                معلومات عنا
                            </button>

                            <button
                                onClick={() => {
                                    setActiveTab("TentsCanopies");
                                    setIsOpen(false);
                                }}
                                className="flex cursor-pointer font-nunito justify-end text-xs py-3 border-b border-gray-300 w-full"
                            >
                                تفصيل خيام والمظلات
                            </button>

                            <div className="flex  justify-end mb-5 mt-3">
                                <p className="font-nunito"> FOLLOW <span className="border-b border-gray-300 pb-2">ME</span> </p>
                            </div>
                            <div className="flex space-x-6 justify-end mb-5">
                                <a href="#" className="hover:text-gray-200 text-xs"><FaInstagram size={12} color="#a79a9abc" /></a>
                                <a href="#" className="hover:text-gray-200 text-xs"><FaFacebook size={12} color="#a79a9abc" /></a>
                                <a href="#" className="hover:text-gray-200 text-xs"><FaWhatsapp size={12} color="#a79a9abc" /></a>
                                <a href="#" className="hover:text-gray-200 text-xs"><FaTwitter size={12} color="#a79a9abc" /></a>
                                <a href="#" className="hover:text-gray-200 text-xs"><FaYoutube size={12} color="#a79a9abc" /></a>
                            </div>
                            <div className="flex justify-end mb-5">
                                <p className="font-nunito">بيوت شعرFLI<span className="border-b border-gray-300 pb-2">CKR</span></p>
                            </div>

                            <p className="text-xs text-center font-nunito">
                                Instagram has returned empty data. Please authorize your Instagram account in the
                            </p>


                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Sidebar;