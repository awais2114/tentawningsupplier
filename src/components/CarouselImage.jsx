import { useEffect, useState } from "react";

const items = [
  {
    image: "/tent9.jpeg",
    title: "شراء سكراب الطائف",
    description:
      "شراء سكراب الطائف من أبرز الخدمات التي نقدمها لعملائنا الراغبين في بيع مختلف أنواع المعادن والخامات.",
  },
  {
    image: "/tent10.jpeg",
    title: "شركة عزل خزانات بالمدينة المنورة",
    description:
      "أفضل خدمات عزل الخزانات بأحدث الطرق والمواد المناسبة.",
  },
  {
    image: "/tent11.jpeg",
    title: "نجار ابها",
    description:
      "أفضل خدمات النجارة والتركيب والصيانة.",
  },
  {
    image: "/tent12.jpeg",
    title: "شراء اثاث مستعمل حي السلي",
    description:
      "نشتري جميع أنواع الأثاث المستعمل بأسعار مناسبة.",
  },
  {
    image: "/tent5.jpeg",
    title: "شراء خيام مستعملة",
    description:
      "شراء جميع أنواع الخيام والمظلات المستعملة.",
  },
  {
    image: "/tent6.jpeg",
    title: "شراء مظلات مستعملة",
    description:
      "نشتري جميع أنواع المظلات والخيام المستعملة.",
  },
  {
    image: "/tent7.jpeg",
    title: "خدمات تنظيف الخزانات",
    description:
      "خدمات تنظيف وعزل الخزانات بأفضل الطرق.",
  },
  {
    image: "/tent8.jpeg",
    title: "شراء اثاث مستعمل",
    description:
      "أفضل الأسعار لشراء الأثاث المستعمل.",
  },
];

function CarouselImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pause automatic carousel when mouse is inside
  const [isHovered, setIsHovered] = useState(false);

  // Which card is currently hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // 4 cards per slide
  const itemsPerSlide = 4;

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  // =========================
  // NEXT SLIDE
  // =========================
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );

    // Remove hover when slide changes
    setHoveredCard(null);
  };

  // =========================
  // PREVIOUS SLIDE
  // =========================
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );

    // Remove hover when slide changes
    setHoveredCard(null);
  };

  // =========================
  // AUTOMATIC SLIDER
  // =========================
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  return (
    <div
      className="relative w-full max-w-full  overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCard(null);
      }}
    >
      {/* =========================
          CAROUSEL SLIDES
      ========================== */}

      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {Array.from({ length: totalSlides }).map(
          (_, slideIndex) => (
            <div
              key={slideIndex}
              className="
                min-w-full
  max-w-full
  flex-shrink-0
  grid
  grid-cols-2
  gap-2
  sm:gap-3
              "
            >
              {items
                .slice(
                  slideIndex * itemsPerSlide,
                  slideIndex * itemsPerSlide + itemsPerSlide
                )
                .map((item, index) => {
                  // Unique ID for every card
                  const cardId =
                    slideIndex * itemsPerSlide + index;

                  const isCardHovered =
                    hoveredCard === cardId;

                  return (
                    /* =========================
                       SINGLE CARD
                    ========================== */
                    <div
                      key={cardId}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setHoveredCard(cardId);
                      }}
                      onMouseLeave={() => {
                        setHoveredCard(null);
                      }}
                      className="
                        relative
  overflow-hidden
  bg-white
  rounded-xl
  h-[170px]
  xs:h-[180px]
  sm:h-[220px]
  md:h-[250px]
  lg:h-[220px]
                      "
                    >
                      {/* =========================
                          ORANGE BACKGROUND
                      ========================== */}

                      <div
                        className="
                          absolute
                          top-0
                          right-0
                          w-[58%]
                          h-[82%]
                          bg-[#f4a201]
                          rounded-tr-2xl
                          rounded-bl-[140px]
                        "
                      />

                      {/* =========================
                          WHITE CURVED AREA
                      ========================== */}

                      <div
                        className="
                          absolute
                          top-0
                          left-0
                          w-[68%]
                          h-[50%]
                          bg-white
                          rounded-br-[130px]
                          z-10
                        "
                      />

                      {/* =========================
                          TITLE
                      ========================== */}

                      <h2
                        dir="rtl"
                        className="
                          absolute
  top-2
  left-2
  right-2
  z-30
  text-center
  text-[11px]
  sm:text-sm
  md:text-xl
  lg:text-2xl
  font-semibold
  leading-tight
                        "
                        style={{ color: "#3FA313" }}
                      >
                        {item.title}
                      </h2>

                      {/* =========================
                          CIRCULAR IMAGE
                      ========================== */}

                      <div
                        className="
                         absolute
  z-20
  left-1/2
  -translate-x-1/2
  top-[25%]
  w-[78%]
  sm:w-[90%]
  md:w-[85%]
  lg:w-[90%]
  aspect-square
  rounded-full
  overflow-hidden
                        "
                      >
                        {/* =========================
                            IMAGE
                        ========================== */}

                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                          "
                          style={{
                            transform: isCardHovered
                              ? "scale(1.05)"
                              : "scale(1)",
                          }}
                        />

                        {/* =========================
                            DARK OVERLAY
                        ========================== */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/90
                            via-black/30
                            to-transparent
                            z-10
                            transition-opacity
                            duration-500
                          "
                          style={{
                            opacity: isCardHovered ? 1 : 0,
                          }}
                        />

                        {/* =========================
                            DESCRIPTION CONTENT
                        ========================== */}

                        <div
                          dir="rtl"
                          className="
                            absolute
                            z-50
                            bottom-90
                            left-0
                            right-17
                            p-4
                            sm:p-5
                            text-white
                            transition-transform
                            duration-500
                            ease-out
                          "
                          style={{
                            transform: isCardHovered
                              ? "translateY(0)"
                              : "translateY(100%)",
                          }}
                        >
                          <h3
                            className="
                              text-sm
                             
                              md:text-sm
                              font-bold
                              mb-1
                              sm:hidden
                              md:block
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                            hidden
                            lg:block
                              text-xs
                             
                              md:text-base
                              leading-5
                              
                              md:leading-7
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )
        )}
      </div>

      {/* =========================
          PREVIOUS BUTTON
      ========================== */}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-1
          sm:left-2
          top-1/2
          -translate-y-1/2
          z-40
          w-8
          h-8
          sm:w-10
          sm:h-10
          flex
          items-center
          justify-center
          rounded-full
          bg-white/80
          hover:bg-white
          shadow-md
          transition
        "
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>

      {/* =========================
          NEXT BUTTON
      ========================== */}

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-1
          sm:right-2
          top-1/2
          -translate-y-1/2
          z-40
          w-8
          h-8
          sm:w-10
          sm:h-10
          flex
          items-center
          justify-center
          rounded-full
          bg-white/80
          hover:bg-white
          shadow-md
          transition
        "
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default CarouselImage;