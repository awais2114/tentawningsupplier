import React from "react";
import { aboutData } from "../data/aboutData";
import ServiceSearch from "../components/ServiceSearch";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:px-5 lg:py-5">
          {/* =========================
            SERVICE SEARCH - 4 COLUMNS
        ========================== */}
        <div className="lg:col-span-4">
          <ServiceSearch />
        </div>

        {/* =========================
            ABOUT CONTENT - 8 COLUMNS
        ========================== */}
        <div className="lg:col-span-8">

          <div className="mt-5 flex justify-center">
            <h3 className="mb-4 font-nunito text-xl">
              {aboutData.title}
            </h3>
          </div>

          <div className="mx-5 md:mx-10 lg:mx-12">

            {aboutData.paragraphs.slice(0, 5).map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-right font-nunito text-sm leading-7 text-gray-700"
              >
                {paragraph}
              </p>
            ))}

            <h4 className="mb-4 text-right font-nunito text-sm font-semibold">
              {aboutData.servicesTitle}
            </h4>

            <ul className="mb-8 space-y-3">
              {aboutData.services.map((service, index) => (
                <li
                  key={index}
                  className="flex flex-row-reverse items-center gap-3 text-right"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-green-600"></span>

                  <span className="font-nunito text-sm text-gray-700">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-right font-nunito text-sm leading-7 text-gray-700">
              {aboutData.paragraphs[5]}
            </p>

          </div>
        </div>


      

      </div>
    </div>
  );
};

export default AboutUs;