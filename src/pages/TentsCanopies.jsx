import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ServiceSearch from "../components/ServiceSearch";

const images = [
  "/tent1.jpeg",
  "/tent2.jpeg",
  "/tent3.jpeg",
  "/tent4.jpeg",
  "/tent5.jpeg",
  "/tent6.jpeg",
  "/tent7.jpeg",
  "/tent8.jpeg",
  "/tent9.jpeg",
  "/tent10.jpeg",
  "/tent11.jpeg",
  "/tent12.jpeg",
  "/tent13.jpeg",
  "/tent14.jpeg",
  "/tent15.jpeg",
  "/tent16.jpeg",
  "/tent17.jpeg",
  "/tent18.jpeg",
  "/tent19.jpeg",
  "/tent20.jpeg",
  "/tent21.jpeg",
  "/tent22.jpeg",
  "/tent23.jpeg",
  "/tent24.jpeg",
  "/tent25.jpeg",
];

const TentsCanopies = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:px-5 lg:py-5">

        {/* =========================
            SERVICE SEARCH - 4 COLUMNS
        ========================== */}
        <div className="mt-4 lg:col-span-4">
          <ServiceSearch />
        </div>

        {/* =========================
            IMAGE GALLERY - 8 COLUMNS
        ========================== */}
        <div className="lg:col-span-8">

          <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:m-5">

            {images.map((img, index) => (
              <div
                key={index}
                className="w-full overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Tent ${index + 1}`}
                  className="h-64 w-full cursor-zoom-in object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    setIndex(index);
                    setOpen(true);
                  }}
                />
              </div>
            ))}

          </div>

          {/* =========================
              LIGHTBOX
          ========================== */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((img) => ({
              src: img,
            }))}
          />

        </div>
      </div>
    </div>
  );
};

export default TentsCanopies;