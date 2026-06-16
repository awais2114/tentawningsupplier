import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import VerticalLine from "../components/VerticalLine";

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