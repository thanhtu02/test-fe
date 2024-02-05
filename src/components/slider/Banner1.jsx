import React from "react";

const Banner1 = () => {
    const handleNext = () => {

    }
    const handlePrevious = () => {

    }
    
    return (
        <div className="relative bg-[url('./public/images/Banner.jpg')] bg-cover bg-center bg-no-repeat w-full px-[128px] py-[50px] container mx-auto
       flex justify-between items-center rounded-[5px]">
            <div className="">
                <p className="text-[#FDE50B] text-[12px] font-bold uppercase mb-3">Gamepad Console</p>
                <p className="text-white text-[36px] font-semibold ">Today's Offer
                    <br /> Skin
                    <span className="text-[#17F084]"> Gamepad </span> 2022</p>
                <button className="w-full max-w-[152px] bg-white py-[14px] rounded-[30px] mt-5">
                    <p className="text-[#212529] text-[12px] uppercase font-bold text-center">Shop Now</p>
                </button>
            </div>
            <div className="absolute top-[50%] left-[3%] -translate-y-1/2"> 
                <button className="bg-[#58505f] rounded-full w-[50px] h-[50px] flex justify-center items-center"
                onClick={handlePrevious}> 
                    <img src="./public/images/ChervonLeftIcon.svg"
                    className="w-[18px] h-[18px]" />
                </button>
            </div>
            <div className="absolute top-[50%] right-[3%] -translate-y-1/2">
                <button className="bg-[#ffffff] rounded-full w-[50px] h-[50px] flex justify-center items-center"
                    onClick={handleNext}>
                    <img src="./public/images/ChervonRightIconBlack.svg"
                        className="w-[18px] h-[18px]" />
                </button>
            </div>
        </div>
    )
}

export default Banner1