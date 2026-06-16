import React from "react";
import VerticalLine from "../components/VerticalLine";
import { aboutData } from "../data/aboutData";

const AboutUs = () => {
  return (
    <>
      <VerticalLine />

      <div className="flex justify-center mt-5">
        <h3 className="text-xl font-nunito mb-4">
          {aboutData.title}
        </h3>
      </div>

      <div className="lg:mx-70 xl:mx-88 md:mx-40 mx-5">

        {aboutData.paragraphs.slice(0, 5).map((paragraph, index) => (
          <p
            key={index}
            className="font-nunito text-sm text-right text-gray-700 mb-4"
          >
            {paragraph}
          </p>
        ))}

        <h4 className="font-nunito text-sm text-right font-semibold mb-4">
          {aboutData.servicesTitle}
        </h4>

        <ul className="space-y-3 mb-8">
          {aboutData.services.map((service, index) => (
            <li
              key={index}
              className="flex flex-row-reverse items-center gap-3 text-right"
            >
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="font-nunito text-sm text-gray-700">
                {service}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-nunito text-sm text-right text-gray-700">
          {aboutData.paragraphs[5]}
        </p>

      </div>
    </>
  );
};

export default AboutUs;