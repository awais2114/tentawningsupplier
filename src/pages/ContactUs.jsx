import React from "react";
import ServiceSearch from "../components/ServiceSearch";

const ContactUs = () => {
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
            CONTACT CONTENT - 8 COLUMNS
        ========================== */}
        <div className="lg:col-span-8">

          {/* Google Map */}
          <div className="mx-5 mb-6 mt-5 md:mx-10 lg:mx-12">
            <div className="w-full overflow-hidden rounded-lg">
              <iframe
                className="h-[300px] w-full sm:h-[400px] md:h-[500px]"
                src="https://maps.google.com/maps?q=Saudi%20Arabia&t=&z=6&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                title="Saudi Arabia Map"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div
            className="mx-5 mb-8 md:mx-10 lg:mx-12"
            dir="rtl"
          >
            <h2 className="mb-8 text-right font-nunito text-lg md:text-2xl">
              (تفصيل خيام مظلات الرياض)
            </h2>

            <p className="mb-6 text-right font-nunito text-xs md:text-sm">
              Tentawningsupplier@gmail.com
            </p>

            <p className="text-right font-nunito text-xs md:text-sm">
              0551945089
            </p>

            <p className="mt-5 text-right font-nunito text-xs md:text-sm">
              مدينة الرياض ، المملكة العربية السعودية
            </p>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default ContactUs;