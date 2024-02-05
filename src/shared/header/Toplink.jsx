import React from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const Toplink = () => {
    return (
        <div className="w-full bg-white border border-b-[#e4e8eb]">

            <div className="flex justify-center items-center container px-4 w-full mx-auto py-2">
                <div className="mr-auto ">
                    <p className="text-[#525d67] text-[9px]"> You are a student and students get 20% discount.
                        <span className="underline underline-offset-1 ml-1 text-[#393d40] font-semibold">Learn More</span></p>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-[#393d40] text-[9px]">Store Locator</p>
                    <p className="text-[#393d40] text-[9px]">Order Tracking</p>
                    <p className="text-[#393d40] text-[9px]">FAQs</p>
                    <div className="w-[1px] h-[12px] bg-[#e4e8eb] " />
                    <button className="flex justify-center items-center gap-0.5">
                        <div>
                            <p className="text-[#393d40] text-[9px]" >English</p></div>
                        <div>
                            <ChevronDownIcon
                                className="w-2 h-2"
                            />
                        </div>
                    </button>

                    <button className="flex justify-center items-center gap-0.5">
                        <div>
                            <p className="text-[#393d40] text-[9px]" >
                                USD
                            </p>
                        </div>
                        <div>
                            <ChevronDownIcon
                                className="w-2 h-2"
                            />
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Toplink 