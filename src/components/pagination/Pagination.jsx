import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "مظلات وسواتر جدة",
    description:
      "مظلات جدة شركتنا من الشركات المتخصصه والرائده والتي تمتلك سجل حافل بالإنجازات بمجال مظلات وسواتر جدة والتي تحرص على الإستعانه...",
    image: "/tent8.jpeg",
    category: "السواتر",
  },
  {
    id: 2,
    title: "كلادينج جدة",
    description:
      "تركيب كلادينج جدة يعلو الطلب على تركيب كلادينج جدة في كل مكان بفضل ما يتمتع به من خصائص مميزة وإضافات...",
    image: "/tent9.jpeg",
    category: "حدادة",
  },
  {
    id: 3,
    title: "برجولات جدة",
    description:
      "نقدم أفضل أنواع البرجولات في جدة بتصاميم حديثة وجودة عالية تناسب جميع الأماكن والمنازل والحدائق.",
    image: "/tent10.jpeg",
    category: "البرجولات",
  },
  {
    id: 4,
    title: "مظلات سيارات جدة",
    description:
      "نوفر مظلات سيارات بجودة عالية وتصاميم مختلفة لحماية السيارات من الشمس والعوامل الجوية.",
    image: "/tent11.jpeg",
    category: "مظلات",
  },
  {
    id: 5,
    title: "بيوت شعر جدة",
    description:
      "تصميم وتنفيذ بيوت شعر مميزة بجودة عالية وخامات مناسبة للاستخدام الخارجي والمناسبات.",
    image: "/tent12.jpeg",
    category: "بيوت شعر",
  },
  {
    id: 6,
    title: "سواتر جدة",
    description:
      "تركيب سواتر جدة بأفضل الخامات والتصاميم الحديثة مع تنفيذ احترافي يناسب احتياجات العملاء.",
    image: "/tent13.jpeg",
    category: "السواتر",
  },
  {
    id: 7,
    title: "هناجر جدة",
    description:
      "تنفيذ وتصميم الهناجر بمختلف الأحجام والمقاسات باستخدام خامات عالية الجودة.",
    image: "/tent14.jpeg",
    category: "هناجر",
  },
  {
    id: 8,
    title: "تركيب شبوك جدة",
    description:
      "تركيب الشبوك بجميع أنواعها واستخداماتها المختلفة مع توفير جودة عالية في التنفيذ.",
    image: "/tent15.jpeg",
    category: "شبوك",
  },
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================
  // 4 CARDS ON EACH PAGE
  // ==========================================

  const cardsPerPage = 4;

  const totalPages = Math.ceil(
    services.length / cardsPerPage
  );

  const startIndex =
    (currentPage - 1) * cardsPerPage;

  const currentCards = services.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  // ==========================================
  // CHANGE PAGE
  // ==========================================

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full  py-5"
      dir="rtl"
    >
      {/* ==========================================
          CONTAINER
      ========================================== */}

      <div className="mx-auto w-full px-3">

        {/* ==========================================
            CARDS
        ========================================== */}
        

        <div className="grid grid-cols-1 gap-4 rounded-[2rem] border border-gray-200 p-2 md:grid-cols-2">
          

          {currentCards.map((service) => (
            <div
              key={service.id}
              className="h-full w-full"
            >
              {/* ================================
                  CARD
              ================================= */}

              <div className="h-full w-full bg-white text-right">

                {/* ================================
                    IMAGE
                ================================= */}

                <div className="relative h-[230px] w-full overflow-hidden rounded-[25px] md:h-[270px]">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="block h-full w-full object-cover"
                  />

                  {/* Category Badge */}
                  <span className="absolute bottom-[15px] left-[15px] rounded-[25px] bg-[#3aaa21] px-[18px] py-2 text-xs font-medium text-white">
                    {service.category}
                  </span>

                </div>

                {/* ================================
                    CARD CONTENT
                ================================= */}

                <div className="px-[10px] py-5">

                  {/* Title */}

                  <h3 className="mb-[18px] text-[22px] font-bold text-[#292929] md:text-[22px]">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mb-[18px] line-clamp-3 overflow-hidden text-xs font-bold leading-[1.9] text-[#777]">
                    {service.description}
                  </p>

                  {/* Read More */}

                  <button
                    type="button"
                    className="rounded-[30px] border-0 bg-[#3aaa21] px-[25px] py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f9019]"
                  >
                    أكمل القراءة «
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ==========================================
            PAGINATION
        ========================================== */}

        <div className="mt-5 flex justify-center">

          <div className="flex flex-wrap items-center justify-center gap-[5px] md:gap-[10px]">

            {/* ======================================
                LAST
            ====================================== */}

            <button
              type="button"
              onClick={() =>
                changePage(totalPages)
              }
              className="!h-[30px] cursor-pointer rounded-[30px] border border-[#e2e2e2] bg-white !px-[12px] text-sm text-[#333] transition-all duration-300 hover:border-[#3aaa21] hover:text-[#3aaa21] md:h-[58px] md:px-[25px] md:text-[17px]"
            >
              الأخيرة
            </button>

            {/* ======================================
                DOTS
            ====================================== */}

            <button
              type="button"
              onClick={() =>
                changePage(
                  Math.min(
                    currentPage + 2,
                    totalPages
                  )
                )
              }
              className="flex !h-[30px] !w-[30px] cursor-pointer items-center justify-center rounded-full border border-[#e2e2e2] bg-white text-[15px] text-[#333] transition-all duration-300 hover:border-[#3aaa21] hover:text-[#3aaa21] md:h-[58px] md:w-[58px] md:text-[18px]"
            >
              ...
            </button>

            {/* ======================================
                PREVIOUS
            ====================================== */}

            <button
              type="button"
              onClick={() =>
                changePage(currentPage - 1)
              }
              disabled={currentPage === 1}
              className="flex !h-[30px] !w-[30px] cursor-pointer items-center justify-center rounded-full border border-[#e2e2e2] bg-white text-[15px] text-[#333] transition-all duration-300 hover:border-[#3aaa21] hover:text-[#3aaa21] disabled:cursor-not-allowed disabled:opacity-50 md:h-[58px] md:w-[58px] md:text-[18px]"
            >
              «
            </button>

            {/* ======================================
                PAGE NUMBERS
            ====================================== */}

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            )
              .reverse()
              .map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() =>
                    changePage(page)
                  }
                  className={`flex !h-[30px] !w-[30px] cursor-pointer items-center justify-center rounded-full border !text-[13px] transition-all duration-300 md:h-[58px] md:w-[58px] md:text-[18px] ${
                    currentPage === page
                      ? "border-[#3aaa21] bg-[#3aaa21] text-white"
                      : "border-[#e2e2e2] bg-white text-[#333] hover:border-[#3aaa21] hover:text-[#3aaa21]"
                  }`}
                >
                  {page}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pagination;