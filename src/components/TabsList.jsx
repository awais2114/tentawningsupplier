import React, { useState } from "react";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import TentsCanopies from "../pages/TentsCanopies";

const TabList = ({setActiveTab,activeTab}) => {
    // const [activeTab, setActiveTab] = useState("ContactUs");

    const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

    return (
        <>
            <div className="md:flex hidden  justify-center items-center gap-12 mt-10  sticky top-0 bg-white  py-3">
                <button className={` text-sm cursor-pointer font-nunito pb-2 border-b-2 transition-all duration-500 
                ${activeTab === 'ContactUs' ? "border-gray-300" : "border-transparent hover:border-gray-300"
                    }`}
                    onClick={() => handleTabChange("ContactUs")}>
                    اتصل بنا – 00966551945089
                </button>
                <button 
                 className={`text-sm cursor-pointer font-nunito pb-2 border-b-2 transition-all duration-500 
                ${activeTab === 'AboutUs' ? "border-gray-300" : "border-transparent hover:border-gray-300"
                    }`}
                onClick={() => handleTabChange("AboutUs")}>
                    معلومات عنا
                </button>
                <button 
                 className={`text-sm cursor-pointer pb-2 font-nunito    border-b-2 transition-all duration-500 
                ${activeTab === 'TentsCanopies' ? "border-gray-300" : "border-transparent hover:border-gray-300"
                    }`}
                onClick={() => handleTabChange("TentsCanopies")}>
                    تفصيل خيام والمظلات
                </button>

            </div>

            <div className="mt-5">
                {activeTab === "ContactUs" && <ContactUs />}
                {activeTab === "AboutUs" && <AboutUs />}
                {activeTab === "TentsCanopies" && <TentsCanopies />}

            </div>

        </>
    )
}

export default TabList;