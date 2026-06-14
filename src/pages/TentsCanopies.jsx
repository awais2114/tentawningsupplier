import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import VerticalLine from "../components/VerticalLine";

const images = [
    "/tentImage.webp",
    "/tentImage.webp",
    "/tentImage.webp",
    "/tentImage.webp",
];

const TentsCanopies = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <>
            <VerticalLine />
            <div className=" flex mt-4 justify-center">

                <h2 className="text-xl font-nunito">تفصيل خيام والمظلات</h2>
            </div>
            <div className="grid m-3 grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className="w-full h-64 object-cover rounded-lg cursor-zoom-in"
                        onClick={() => {
                            setIndex(index);
                            setOpen(true);
                        }}
                    />
                ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((img) => ({ src: img }))}
            />
        </>
    )
}

export default TentsCanopies;