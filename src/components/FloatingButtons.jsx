import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
    return (
        <>
            <a
                href="https://wa.me/0551945089"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-3 left-1 z-50"
            >
                <div className="relative">
                    {/* Animated Glow */}
                    <span className="pulse-ring"></span>

                    {/* Button */}
                    <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300">
                        <FaWhatsapp size={32} />
                    </div>
                </div>
            </a>

            <a
                href="tel:+966XXXXXXXXX"
                className="fixed bottom-3 right-1 z-50"
            >
                <div className="relative">
                    <span className="pulse-ring"></span>
                    <div className="realtive bg-white border-1 border-gray-200 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300">
                        <FaPhoneAlt size={32} color="#c377e4" />
                    </div>
                </div>

            </a>
        </>

    )
}

export default FloatingButtons;