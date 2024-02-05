import { ChevronDownIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { RiUserLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="w-full bg-white py-3">
            <div className="container px-4 w-full mx-auto flex justify-around items-center">
                <div className="">
                    <img
                        src="../images/Logo.jpg"
                        className="w-[141px] h-[43px]" /> </div>

                <div className="w-full max-w-[600px] flex justify-center items-center bg-white ">
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full flex justify-center items-center gap-4 border-[2px] border-[#e4e8eb] rounded-l-[4px] py-[7px]">
                            <div className="flex items-center gap-4 pl-4" >
                                <p className="text-[#212529] text-[11px] w-full font-semibold whitespace-nowrap"> All Categories</p>
                                <ChevronDownIcon className="w-2 h-2" />
                            </div>
                            <div className="bg-[#e4e8eb] w-[0.5px] h-[11px]" />
                            <input
                                type="text"
                                className="text-[10px] w-full"
                                placeholder="Search in 200+ products..."
                            />
                        </div>
                        <div>
                            <button className="bg-[#2b37d1] py-[9px] px-[24px] rounded-r-[4px] ml-[-2px]">
                                <p className="text-white text-[11px]"> Search </p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5">
                    <div className=" flex items-center gap-2">
                        <img src="./public/images/UserIcon.svg"
                            className="w-[23px] h-[23px]" />
                        <div className="flex flex-col">
                            <p className="text-[8px] font-light text-[#515d66]">Login</p>
                            <p className="text-[9px] font-semibold">Account</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="./public/images/HeartIcon.svg"
                            className="w-[28px] h-[24px]" />
                        <div className="absolute flex items-center justify-center bg-[#dd3742] rounded-full w-[18px] h-[18px] top-[-15%] right-0 translate-x-1/2">
                            <p className="text-white text-[11px]">2</p></div>
                    </div>
                    <div className="relative">
                        <img src="./public/images/CartIcon.svg"
                            className="w-[28px] h-[24px]" />
                        <div className="absolute flex items-center justify-center bg-[#dd3742] rounded-full w-[18px] h-[18px] top-[-15%] right-0 translate-x-1/2">
                            <p className="text-white text-[11px]">2</p></div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[9px] text-[#515d66] font-light"> Your Cart</p>
                        <p className="text-[11px]"> $280.00</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar 