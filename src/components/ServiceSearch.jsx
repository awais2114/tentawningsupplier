import React from "react";

import {
  FaSearch,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaEye,
  FaFileAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function ServiceSearch() {
  const services = [
    {
      id: 1,
      title: "شركة تسليك مجاري بمكة",
      image: "/tent8.jpeg",
    },
    {
      id: 2,
      title: "شركة تمديد غاز مركزي بجدة",
      image: "/tent9.jpeg",
    },
    {
      id: 3,
      title: "تنظيف بيارات بجدة",
      image: "/tent10.jpeg",
    },
    {
      id: 4,
      title: "كمبروسور شفط مجاري جدة",
      image: "/tent11.jpeg",
    },
  ];

  return (
    <div className="w-full">

      {/* ================================================= */}
      {/* SEARCH BOX */}
      {/* ================================================= */}

      <div className="rounded-[24px] border border-gray-200 bg-white px-6 py-10">

        {/* Black Heading */}
        <div
          dir="rtl"
          className="flex justify-start"
        >
          <div
            className="flex h-[30px] w-[70%] items-center justify-start gap-2 bg-[#151515] px-3 text-white"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 8% 100%)",
            }}
          >
            <FaSearch
              className="shrink-0"
              size={15}
            />

            <span className="whitespace-nowrap text-[14px] font-bold">
              تفصيل خيام والمظلات
            </span>
          </div>
        </div>

        {/* Search Input + Button */}
        <div className="mt-11 flex items-center gap-3">

          {/* Search Button */}
          <button
            type="button"
            className="flex h-[35px] shrink-0 items-center justify-center rounded-[40px] bg-[#3aaa1d] px-2 text-[15px] font-bold text-white transition duration-300 hover:bg-[#319b18]"
          >
            research
          </button>

          {/* Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="... research"
              className="h-[35px] w-full rounded-lg border border-gray-200 bg-white px-4 text-right text-[15px] text-gray-600 outline-none transition focus:border-[#3aaa1d]"
            />
          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* SOCIAL MEDIA */}
      {/* ================================================= */}

      <div className="mt-5 flex items-center justify-center gap-1">

        {/* WhatsApp */}
        <a
          href="#"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#3bd653] text-white transition duration-300 hover:scale-110"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#168acb] text-white transition duration-300 hover:scale-110"
        >
          <FaLinkedinIn size={20} />
        </a>

        {/* X */}
        <a
          href="#"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black text-white transition duration-300 hover:scale-110"
        >
          <FaXTwitter size={20} />
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#4285f4] text-white transition duration-300 hover:scale-110"
        >
          <FaFacebookF size={20} />
        </a>

      </div>


      {/* ================================================= */}
      {/* SERVICES LIST */}
      {/* ================================================= */}

      <div className="mt-8 overflow-hidden rounded-[24px] border border-gray-200 bg-white">

        {/* ================= TOP ICONS ================= */}

        <div className="grid grid-cols-2 border-b border-gray-200">

          {/* Eye */}
          <button
            type="button"
            className="flex h-[70px] items-center justify-center border-l border-gray-200 text-[#333] transition hover:bg-gray-50"
          >
            <FaEye size={25} />
          </button>

          {/* Document */}
          <button
            type="button"
            className="flex h-[70px] items-center justify-center text-[#39a91b] transition hover:bg-gray-50"
          >
            <FaFileAlt size={27} />
          </button>

        </div>


        {/* ================= SERVICE ITEMS ================= */}

        <div className="px-4 py-5">

          {services.map((service) => (
            <div
              key={service.id}
              className="mb-5 flex min-h-[90px] items-center gap-1 last:mb-0"
              dir="rtl"
            >

              {/* IMAGE */}
              <div className="relative flex h-[85px] w-[150px] shrink-0 items-center justify-center">

                {/* Orange Background Shape */}
                <div
                  className="absolute right-0 h-[80px] w-[140px] rounded-[22px] bg-[#f5a800]"
                  style={{
                    borderTopLeftRadius: "35px",
                    borderBottomLeftRadius: "35px",
                  }}
                />

                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative z-10 h-[75px] w-[120px] rounded-[35px] object-cover"
                />

              </div>


              {/* SERVICE TITLE */}
              <div className="flex-1 text-right">

                <h3 className="!text-sm !font-extrbold leading-7 text-[#3b3b3b] !sm:text-[18px]">
                  {service.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ServiceSearch;