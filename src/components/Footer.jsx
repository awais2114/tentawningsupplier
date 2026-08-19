import React from "react";
import {
  FaWhatsapp,
  FaSnapchatGhost,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#f9a800] py-6" dir="rtl">

      {/* Copyright */}
      <div className="flex flex-col  items-center justify-center">

        <div className="flex items-center gap-4 text-center text-[16px] font-bold text-white sm:text-[18px]">
          <span className="!text-xs md:text-sm">
            جميع الحقوق محفوظة © حقوق النشر 2026
          </span>

          <span className="hidden sm:block">
            |
          </span>

          <span className="!text-xs md:text-sm">
          اویس الحسن
          </span>
        </div>

        {/* Social Icons */}
        <div className="mt-3 flex items-center justify-center gap-3 ">

          {/* WhatsApp */}
          <a
          target="_blank"
            href="https://wa.me/message/X2F5FAISV3J2I1"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaWhatsapp size={14} />
          </a>

          {/* LinkedIn */}
          <a
          target="_blank"
            href="https://www.snapchat.com/add/s_gondal5?share_id=I6Qpzx5DfzE&locale=en-US"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaSnapchatGhost size={14} />
          </a>

          {/* X */}
          <a
          target="_blank"
            href="https://www.tiktok.com/@tafseel_khiyam?_r=1&_t=ZS-98iDRlD7BSe"
            className="transition duration-300 hover:scale-110 !text-white"
          >
            <FaTiktok size={14} />
          </a>

          {/* Facebook */}
          <a
          target="_blank"
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