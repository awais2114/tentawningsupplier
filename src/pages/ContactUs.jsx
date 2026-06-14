import React from "react";
import VerticalLine from "../components/VerticalLine";

const ContactUs = () => {

    return (
        <>
            <VerticalLine />
            <div className="flex justify-center mt-5 mb-5">
                <h2 className="font-nunito text-xl">
                    اتصل بنا – 00966551945089
                </h2>
            </div>
            <div className="mx-5 md:mx-20 mb-5">
                <div className="w-full overflow-hidden rounded-lg">
                    <iframe
                        className="w-full h-[400px] md:h-[500px]"
                        src="https://maps.google.com/maps?q=Saudi%20Arabia&t=&z=6&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        title="Saudi Arabia Map"
                    />
                </div>
            </div>
            <div
                className="mx-5 md:mx-20 mb-8 font-nunito"
                dir="rtl"
            >
                <h2 className="text-lg md:text-xl text-right mb-8">
                    مؤسسة محمد سعيد محمد الهاجري للخيام ( المعروفة باسم مؤسسة الهاجري – تفصيل خيام والمظلات )
                </h2>

                <p className="text-xs md:text-sm text-right mb-6">
                    طريق الامير سعد بن عبدالرحمن الاول الفرعي , حي السعادة
                </p>

                <p className="text-xs md:text-sm text-right">
                    مدينة الرياض ، المملكة العربية السعودية
                </p>
            </div>
        </>
    )
}

export default ContactUs;