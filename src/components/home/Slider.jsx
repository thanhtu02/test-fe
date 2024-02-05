import React, { useState } from "react";
import Banner1 from "../slider/Banner1";

const arrayImages = [
    {
        id: 0,
        cpn: <Banner1 />
    },
    {
        id: 1,
        cpn: 'Slider2.jpg'
    },
    {
        id: 2,
        cpn: 'Slider3.jpg'
    },
    {
        id: 3,
        cpn: 'Slider4.jpg'
    },
]

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const handleSliderChange = (e) => {
        setCurrentImage(parseInt(e.target.value, 10));
    };
    return (
        <div className="relative w-full rounded-[5px] flex flex-col gap-1">
            {arrayImages.map((e, index) => {
                return (
                    <div
                        key={index}
                        className={` rounded-[9px] w-full ${index === currentImage ? 'block' : 'hidden'}`}>
                        {e?.cpn}
                    </div>
                )
            })}
            <div className="absolute flex items-center mt-2 bottom-[3%] left-[50%] -translate-y-1/2">
                {arrayImages.map((i) => (
                    <button
                        key={i?.id}
                        onClick={() => setCurrentImage(i.id)}
                        className={` w-[6px] h-[6px] rounded-full mx-1 focus:outline-none ${i.id === currentImage ? ' bg-white ' : ' bg-[#5c5463] '
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider