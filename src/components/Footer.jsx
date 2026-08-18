import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#f9a800] py-6" dir="rtl">

      {/* Copyright */}
      <div className="flex flex-col  items-center justify-center">

        <div className="flex items-center gap-4 text-center text-[16px] font-bold text-white sm:text-[18px]">
          <span className="!text-sm">
            جميع الحقوق محفوظة © حقوق النشر 2026
          </span>

          <span className="hidden sm:block">
            |
          </span>

          <span className="!text-sm">
          اویس الحسن
          </span>
        </div>

        {/* Social Icons */}
        <div className="mt-3 flex items-center justify-center gap-3 ">

          {/* WhatsApp */}
          <a
            href="#"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaWhatsapp size={14} />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaLinkedinIn size={14} />
          </a>

          {/* X */}
          <a
            href="#"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaXTwitter size={14} />
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaFacebookF size={14} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;