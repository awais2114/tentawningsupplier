import React from "react";
import VerticalLine from "./VerticalLine";

const Footer = ({setActiveTab}) => {
    
    
    const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
    return(
        <>
      
             <div className="mt-10">
                  <VerticalLine />
                  
             </div>
       
        <div className="flex mt-3  mb-5 justify-center">
           
        <div>
            <p className="text-xs font-nunito">
                <span onClick={() => handleTabChange("TentsCanopies")} className="border-b cursor-pointer border-gray-300">بيت-شعر</span> Powered by Awais ul Hassan · Created by
            </p>
            <p className="text-xs font-nunito text-center">Copyright 2026 · All rights reserved</p>
        </div>
        </div>
      
        
        </>
    )
}

export default Footer;