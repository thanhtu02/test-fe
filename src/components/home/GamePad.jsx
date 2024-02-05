import React from "react";
import Slider from "./Slider";

const categories = [{
    id: 0,
    title: 'Computer & Desktop'
},
{
    id: 1,
    title: 'Laptop & Ipad'
},
{
    id: 2,
    title: 'Cameras & Photos'
},
{
    id: 3,
    title: 'Smart Phones & Tablets'
},
{
    id: 4,
    title: 'Home & Kitchen'
},
{
    id: 5,
    title: 'TV & Audios'
},
{
    id: 6,
    title: 'Health & Beauty'
},
{
    id: 7,
    title: 'Watches & Eyewear'
},
{
    id: 8,
    title: 'Top Deals'
},
{
    id: 9,
    title: 'Top Selling Products'
},
{
    id: 10,
    title: 'Top Featured Products'
},
];

const GamePad = () => {

    return (
        <div className="container px-4 w-full mx-auto flex justify-center items-stretch gap-4">
            <div className="flex flex-col w-full max-w-[270px] bg-white p-4 rounded-[5px]">
                {categories.map((e, index) => (
                    <button
                        key={index}
                        className="relative flex items-center w-full py-2 flex-1">
                        <p className="text-[11px]">{e?.title}</p>
                        <img
                            src="./public/images/ChervonRightIcon.svg"
                            className="w-4 h-4 p-1 ml-auto"
                        />
                        <div className="absolute w-full h-[1px] bg-[#e4e8eb] bottom-0 left-0 -translate-y-1/2" />
                    </button>
                ))}
            </div>
            <div className="flex-col flex gap-1.5">
                <div className="w-full rounded-[5px]">
                    <Slider />
                </div>
                <div className="flex justify-center items-center w-full mx-auto gap-1.5">
                    <div className=" rounded-[5px]">
                        <img
                            src="./public/images/Slider2.jpg"
                            className="rounded-[5px] " />
                    </div>
                    <div>
                        <img
                            src="./public/images/Slider3.jpg"
                            className="rounded-[5px]" />
                    </div>
                    <div>
                        <img
                            src="./public/images/Slider4.jpg"
                            className="rounded-[5px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePad