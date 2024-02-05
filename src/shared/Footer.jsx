import React from "react";

const Footer = () => {
    return (
        <div className="bg-white flex flex-col">
            <div className="grid grid-cols-4 container px-4 w-full mx-auto py-12">
                <div>
                    <p className="font-bold text-[14px] text-[#212529]">About The Store </p>
                    <p className="font-medium text-[14px] text-[#515D66]">Got Question? Call us 24/7</p>
                    <p className="font-medium text-[30px] text-[#2B38D1]">+222-1800-2628</p>
                    <p className="font-medium text-[14px] text-[#515D66]">268 St, South New York/NY 98944, United States
                        Customersupport@example.com
                        Info@example.com</p>
                </div>
                <div>
                    <p className="font-bold text-[14px] text-[#212529]">Infomation </p>
                    <div className="flex flex-col">
                        <p className="font-medium text-[14px] text-[#515D66]"> Blog Us</p>
                        <p className="text-[#212529] text-[14px] font-medium underline underline-offset-2 ">About Us </p>
                        <p className="font-medium text-[14px] text-[#515D66]"> Delivery Information</p>
                        <p className="font-medium text-[14px] text-[#515D66]">Privacy Policy </p>
                        <p className="font-medium text-[14px] text-[#515D66]">FeedBack</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-[14px] text-[#212529]">Quick Links </p>
                    <div className="flex flex-col">
                        <p className="font-medium text-[14px] text-[#515D66]"> Store Location</p>
                        <p className="font-medium text-[14px] text-[#515D66]">Orders Tracking</p>
                        <p className="font-medium text-[14px] text-[#515D66]">FAQsn</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-[14px] text-[#212529]">Sign up to Newsletter</p>
                    <p className="font-medium text-[14px] text-[#515D66]">Join 20.000+ subscribers and get a new discount coupon on every
                        Saturday. Updates information on Sales and Offers.</p>
                    <div className="flex items-center justify-between my-4 gap-2" >
                        <button className="w-full border border-[#E5E8EC] rounded-[50px] p-4">
                            <input type="text"
                                placeholder="Your email address..."
                            className="w-full text-[13px]" /> </button>
                        <button className="w-full max-w-[120px] bg-[#2B38D1] rounded-[50px] py-4 flex items-center justify-center">
                            <p className="font-bold text-white uppercase text-[12px] text-center" >Subscribe</p></button>
                    </div>
                    <p className="font-medium text-[14px] text-[#515D66]">Subscribe for Uminex and get 20% off your first purchase.</p>
                </div>
            </div>
            <div className=" bg-[#E5E8EC] w-full h-[1px]" />
            <div className=" flex items-center justify-between container px-4 w-full mx-auto py-6">
                <div>
                    <p className="font-medium text-[14px] text-[#515D66]">Copyright © <span className="text-[#2B38D1] font-semibold">Uminex</span> all rights reserved. Powered by <span className="text-[#2B38D1] font-semibold">Blueskytechco.</span></p></div>
                <div className="flex items-center gap-2">
                    <p className="font-medium text-[14px] text-[#515D66]">Payment Method:</p>
                    <img src='./public/images/payment.jpg'
                        className="w-[396px] h-[30px]" /> 
                </div>
            </div>
        </div>
    )
}

export default Footer