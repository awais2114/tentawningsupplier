import React from "react";
import CarouselImage from '../components/CarouselImage'
import { useEffect, useState } from "react";
import { FaCampground, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pagination from '../components/pagination/Pagination'
import ServiceSearch from "../components/ServiceSearch";

const services = [
  "شراء اثاث منزلي فاخر",
  "تنظيف وصيانة المنازل",
  "نقل الاثاث والمكاتب",
  "تصميم الديكورات الداخلية",
  "خدمات الصيانة العامة",
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const previousService = () => {
    setActiveIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };
  return (
    <>
      <div className="w-full px-8 pt-4">

        {/* Main Services Bar */}
        <div className="flex h-[40px] w-full overflow-hidden rounded-full bg-[#292b2f]">

          {/* Left Arrow Section */}
          <div className="flex w-[100px] shrink-0 items-center justify-center gap-7 bg-[#25272b]">

            <button
              onClick={previousService}
              className="flex items-center justify-center bg-transparent text-[#d9d9d9] transition duration-200 hover:scale-110 hover:text-white"
            >
              <FaChevronLeft size={10} />
            </button>

            <button
              onClick={nextService}
              className="flex items-center justify-center bg-transparent text-[#d9d9d9] transition duration-200 hover:scale-110 hover:text-white"
            >
              <FaChevronRight size={10} />
            </button>

          </div>

          {/* Service Text */}
          <div
            className="flex flex-1 items-center overflow-hidden mr-3"
            dir="rtl"
          >
            <div
              key={activeIndex}
              className="whitespace-nowrap text-[12px] font-medium text-white animate-service-slide"
            >
              {services[activeIndex]}
            </div>
          </div>

          {/* Red Right Section */}
          <div
            className="flex min-w-[120px] items-center justify-center bg-[#f05255] px-7 text-[12px] font-semibold text-white"
            dir="rtl"
          >
            أحدث الخدمات
          </div>
        </div>
      </div>
      <div className="px-8 pt-4">
        <CarouselImage />
      </div>
      <div className="w-full px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          <div className="lg:col-span-4 mt-4">
            <ServiceSearch />
          </div>
          <div className="lg:col-span-8">
            <Pagination />
            {/* full width card 1 */}
            <div
              className="relative w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white p-5 sm:p-7"
              dir="rtl"
            >
              {/* ================= TOP HEADER ================= */}

              <div className="mb-7 flex items-center justify-between">

                {/* Green Heading */}
                <div
                  dir="rtl"
                  className="relative flex h-[35px] items-center bg-[#3aaa1d] px-3 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                  }}
                >
                  <span className="ml-2 !text-[22px]">
                    <FaCampground />
                  </span>
                  <span className="!text-[16px] !font-bold sm:text-[25px]">
                    خدمات البرجولات
                  </span>

                  {/* Small icon */}

                </div>

                {/* More */}
                <button
                  type="button"
                  className="!text-[12px] text-gray-700 transition hover:text-[#3aaa1d]"
                >
                  المزيد
                </button>

              </div>


              {/* ================= IMAGE ================= */}

              <div className="relative flex">

                {/* Orange Shape Behind Image */}
                <div
                  className="absolute right-0 top-0 h-[150px] w-[110px]"
                  style={{
                    borderTopLeftRadius: "35px",
                    borderBottomLeftRadius: "35px",
                  }}
                />

                {/* Main Image */}
                <img
                  src="/tent16.jpeg"
                  alt="برجولات الرياض"
                  className="relative z-10 h-[220px]  w-[40%] object-cover"
                  style={{
                    borderTopLeftRadius: "120px",
                    borderBottomLeftRadius: "120px",
                    borderTopRightRadius: "120px",
                    borderBottomRightRadius: "120px",
                  }}
                />

                {/* Category Badge */}
                <span className="absolute bottom-3 right-[30%] z-20 rounded-full bg-[#3aaa1d] px-3 py-1 !text-[12px] font-bold text-white">
                  خدماتنا الأخرى
                </span>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="mt-3 text-right">

                {/* Title */}
                <h2 className="!text-[18px] !font-bold leading-9 text-[#333] sm:text-[28px]">
                  برجولات الرياض خصم 40%
                </h2>

                {/* Description */}
                <p className="mt-3 !text-[12px] w-[30%] leading-8 text-gray-400 !font-bold sm:text-[18px]">
                  برجولات الرياض ذات المادة الخام قوية التحمل والمظهر
                  الحديث الذي يزيد من جمال المكان نقدمها لكم شركتنا
                  بأرخص الأسعار وعلى...
                </p>

                {/* Read More */}
                <div className="mt-3 flex justify-start">
                  <button
                    type="button"
                    className="!rounded-full bg-[#3aaa1d] px-3 py-2 !text-[14px] !font-bold text-white transition duration-300 hover:bg-[#319b18]"
                  >
                    أكمل القراءة «
                  </button>
                </div>

              </div>

            </div>
            {/* full width card 2  */}
            <div
              className="relative mt-5 mb-20 w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white p-5 sm:p-7"
              dir="rtl"
            >
              {/* ================= TOP HEADER ================= */}

              <div className="mb-7 flex items-center justify-between">

                {/* Green Heading */}
                <div
                  dir="rtl"
                  className="relative flex h-[35px] items-center bg-[#3aaa1d] px-3 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                  }}
                >
                  <span className="ml-2 !text-[22px]">
                    <FaCampground />
                  </span>
                  <span className="!text-[16px] !font-bold sm:text-[25px]">
                    خدمات الهناجر
                  </span>

                  {/* Small icon */}

                </div>

                {/* More */}
                <button
                  type="button"
                  className="!text-[12px] text-gray-700 transition hover:text-[#3aaa1d]"
                >
                  المزيد
                </button>

              </div>


              {/* ================= IMAGE ================= */}

              <div className="relative flex">

                {/* Orange Shape Behind Image */}
                <div
                  className="absolute right-0 top-0 h-[150px] w-[110px]"
                  style={{
                    borderTopLeftRadius: "35px",
                    borderBottomLeftRadius: "35px",
                  }}
                />

                {/* Main Image */}
                <img
                  src="/tent14.jpeg"
                  alt="برجولات الرياض"
                  className="relative z-10 h-[220px]  w-[40%] object-cover"
                  style={{
                    borderTopLeftRadius: "120px",
                    borderBottomLeftRadius: "120px",
                    borderTopRightRadius: "120px",
                    borderBottomRightRadius: "120px",
                  }}
                />

                {/* Category Badge */}
                <span className="absolute bottom-3 right-[30%] z-20 rounded-full bg-[#3aaa1d] px-3 py-1 !text-[12px] font-bold text-white">
                  هناجر
                </span>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="mt-3 text-right">

                {/* Title */}
                <h2 className="!text-[18px] !font-bold leading-9 text-[#333] sm:text-[28px]">
                  هناجر الرياض خصم 40%
                </h2>

                {/* Description */}
                <p className="mt-3 !text-[12px] w-[30%] leading-8 text-gray-400 !font-bold sm:text-[18px]">
                  هناجر بالرياض هناجر الرياض المميزة والقوية ذات القدرة على استيعاب أكبر كمية من الأدوات والموادتجدها بأفضل تصميم متوفرة في......
                </p>

                {/* Read More */}
                <div className="mt-3 flex justify-start">
                  <button
                    type="button"
                    className="!rounded-full bg-[#3aaa1d] px-3 py-2 !text-[14px] !font-bold text-white transition duration-300 hover:bg-[#319b18]"
                  >
                    أكمل القراءة «
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;