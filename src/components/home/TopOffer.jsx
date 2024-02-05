import React from "react";

const store = [
    {
        id: 0,
        item: 'Apple iPhone 12 Pro Max 128GB - Unlocked',
        reviews: 68, //[{...}]
        price: '140',
        stock: '82',
        sale: '20',
        status: 'used',
        img: 'prd0.jpg'
    },
    {
        id: 1,
        item: 'Apple Watch Aluminum Case Pride Edition',
        reviews: 68, //[{...}]
        price: '1028',
        stock: '2',
        sale: '0',
        status: 'used',
        img: 'prd1.jpg'
    },
    {
        id: 2,
        item: 'Apple iPhone 12 Pro Max 128GB - Unlocked',
        reviews: 68, //[{...}]
        price: '140',
        stock: '82',
        sale: '0',
        status: 'used',
        img: 'prd2.jpg'
    },
    {
        id: 3,
        item: 'Apple Watch Aluminum Case Pride Edition',
        reviews: 68, //[{...}]
        price: '1028',
        stock: '2',
        sale: '0',
        status: 'new',
        img: 'prd3.jpg'
    },
    {
        id: 4,
        item: 'Apple Watch Aluminum Case Pride Apple iPhone 12 Pro Max 128GB - Unlocked',
        reviews: 68, //[{...}]
        price: '289',
        stock: '82',
        sale: '0',
        status: 'used',
        img: 'prd4.jpg'
    },
    {
        id: 5,
        item: 'Apple Watch Aluminum Case Pride Edition',
        reviews: 68, //[{...}]
        price: '140',
        stock: '2',
        sale: '20',
        status: 'used',
        img: 'prd5.jpg'
    },
    {
        id: 6,
        item: 'Apple Watch Apple iPhone 12 Pro Max 128GB - Unlocked Case Pride Edition',
        reviews: 68, //[{...}]
        price: '140',
        stock: '82',
        sale: '20',
        status: 'used',
        img: 'prd6.jpg'
    },
    {
        id: 7,
        item: 'Apple Watch Apple Watch Aluminum Case Pride Edition',
        reviews: 68, //[{...}]
        price: '1028',
        stock: '2',
        sale: '0',
        status: 'used',
        img: 'prd7.jpg'
    },
]
const TopOffer = () => {
    const middleIndex = Math.ceil(store.length / 2)
    const firstHalf = store.slice(0, middleIndex)
    const secondHalf = store.slice(middleIndex)

    return (
        <div className="container px-4 w-full mx-auto">
            <div className="grid grid-cols-3 gap-4 py-12 ">
                <div className="grid grid-cols-2 gap-1">
                    {firstHalf.map((e, index) => (
                        <button key={index}
                            className="relative w-full bg-white rounded-[5px] px-[13px] py-6">
                            <img src={`./public/images/${e?.img}`} />
                            <p className="text-[14px] font-semibold text-[#212529] text-left">{e?.item}</p>
                            <div className="flex items-center gap-1">
                                <img src="./public/images/StarIcon.svg"
                                    className="w-[63px] h-[12px]" />
                                <p className="text-[#8D979E] text-[12px] font-medium">({e?.reviews})</p>
                            </div>
                            {e?.sale > 0 ? (
                                <>
                                    <span className=" text-left mr-1.5 text-[18px] font-semibold text-[#DC323C]">
                                        {` $${e?.price - e?.price * (e?.sale / 100)}`}.00
                                    </span>
                                    <del className="text-[#8D979E] text-[14px] font-regular ">{`$${e?.price * (e?.sale / 100)}`}</del>
                                </>
                            ) : (
                                <p className="text-[18px] font-semibold text-[#2B38D1] text-left">${e?.price}.00</p>
                            )}
                            <div className="absolute top-[5%] left-[24%] -translate-x-1/2">
                                {e?.sale > 0 && <div className="bg-[#DC323C] rounded-[2px] px-3 py-1">
                                    <p className="text-white text-[12px] font-semibold">-{e?.sale}%</p>
                                </div>}
                                {e?.status === 'new' && <div className="bg-[#008A00] rounded-[2px] px-3 py-1">
                                    <p className="text-white text-[12px] font-semibold uppercase">{e?.status}</p>
                                </div>}
                            </div>
                            {e?.stock > 2 ? (
                                <div className="flex items-center gap-1">
                                    <img src='./public/images/GreenCheckIcon.svg'
                                        className="w-[14px] h-[20px]" />
                                    <div className="text-[12px]">
                                        <span className="text-[#008A00] font-medium">In stock </span>
                                        <span className="text-[#212529] font-semibold">{e?.stock}</span>
                                        <span className="text-[#515D66] font-medium"> products</span>
                                    </div>
                                </div>) : (
                                <div className="flex items-center gap-1">
                                    <img src='./public/images/RedCheckIcon.svg'
                                        className="w-[14px] h-[20px]" />
                                    <p className="text-left text-[12px] text-[#EF262C] font-medium"> Only {e?.stock} left in stock </p>
                                </div>)}
                        </button>
                    ))}
                </div>

                <div className="today-offer relative bg-white rounded-[5px] px-[13px] py-6 border-2 border-[#DC323C]">
                    <p className="text-[#212529] font-bold uppercase text-[16px] py-2"> Today’s Offer</p>
                    <div className="bg-[#E5E8EC] w-full h-[1px]" />
                    <button className="relative">
                        <img src='./public/images/prdtodayoffer.jpg'
                            className="w-full" />
                        <p className="text-[14px] font-semibold text-[#212529] text-left">Apple iPhone 13 Pro Max 128GB Gold Fully Unlocked</p>
                        <div className="flex items-center gap-1 mt-4">
                            <img src="./public/images/StarIcon.svg"
                                className="w-[63px] h-[12px]" />
                            <p className="text-[#8D979E] text-[12px] font-medium">29 reviews</p>
                        </div>
                        <p className="text-left">
                            <span className="mr-1.5 text-[18px] font-semibold text-[#DC323C]">
                            $128.00
                        </span>
                            <del className="text-[#8D979E] text-[14px] font-regular ">$12.00</del> </p>
                        <p className="text-left text-[#515D66] text-[14px] font-medium mt-4" >Hurry up! Offer ends in:</p>
                        <div className="absolute top-0 left-0 translate-y-[1rem]">
                            <div className="bg-[#DC323C] rounded-[2px] px-3 py-1">
                                <p className="text-white text-[12px] font-semibold">-20%</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-2 mb-4">
                            <div className="w-[45px] h-[50px] rounded-[3px] bg-[#DC323C] flex justify-center items-center">
                                <p className="text-white text-[14px] font-bold text-center">826</p>
                            </div>
                            <div className="px-2"> <p className="text-[#212529] text-[20px] font-semibold text-center">:</p> </div>
                            <div className="w-[45px] h-[50px] rounded-[3px] bg-[#DC323C] flex justify-center items-center">
                                <p className="text-white text-[14px] font-bold text-center">29</p>
                            </div>
                            <div className="px-2"> <p className="text-[#212529] text-[20px] font-semibold text-center">:</p> </div>
                            <div className="w-[45px] h-[50px] rounded-[3px] bg-[#DC323C] flex justify-center items-center">
                                <p className="text-white text-[14px] font-bold text-center">20</p>
                            </div>
                            <div className="px-2"> <p className="text-[#212529] text-[20px] font-semibold text-center">:</p> </div>
                            <div className="w-[45px] h-[50px] rounded-[3px] bg-[#DC323C] flex justify-center items-center">
                                <p className="text-white text-[14px] font-bold text-center">08</p>
                            </div>
                        </div>
                        <div className="relative bg-[#F3F4F6] w-full h-[5px] rounded-[9px]">
                            <div className="absolute top-0 left-0 translate-0 bg-[#EF262C] w-[270px] h-[5px] rounded-[9px]" />
                        </div>
                        <p className="text-left text-[12px] text-[#text-[#515D66] mt-1">Sold: <span className="text-[#212529] font-semibold"> 620/896</span> products</p>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-1 ">
                    {secondHalf.map((e, index) => (
                        <button key={index}
                            className="relative w-full bg-white rounded-[5px] px-[13px] py-6">
                            <img src={`./public/images/${e?.img}`} />
                            <p className="text-[14px] font-semibold text-[#212529] text-left">{e?.item}</p>
                            <div className="flex items-center gap-1">
                                <img src="./public/images/StarIcon.svg"
                                    className="w-[63px] h-[12px]" />
                                <p className="text-[#8D979E] text-[12px] font-medium">({e?.reviews})</p>
                            </div>
                            <p className="text-left">
                                {e?.sale > 0 ? (
                                    <>
                                        <span className="mr-1.5 text-[18px] font-semibold text-[#DC323C]">
                                            {` $${e?.price - e?.price * (e?.sale / 100)}`}.00
                                        </span>
                                        <del className="text-[#8D979E] text-[14px] font-regular ">{`$${e?.price * (e?.sale / 100)}`}</del>
                                    </>
                                ) : (
                                    <p className="text-[18px] font-semibold text-[#2B38D1] text-left">${e?.price}.00</p>
                                )}
                            </p>
                            <div className="absolute top-[5%] left-[24%] -translate-x-1/2">
                                {e?.sale > 0 && <div className="bg-[#DC323C] rounded-[2px] px-3 py-1">
                                    <p className="text-white text-[12px] font-semibold">-{e?.sale}%</p>
                                </div>}
                                {e?.status === 'new' && <div className="bg-[#008A00] rounded-[2px] px-3 py-1">
                                    <p className="text-white text-[12px] font-semibold uppercase">{e?.status}</p>
                                </div>}
                            </div>
                            {e?.stock > 2 ? (
                                <div className="flex items-center gap-1">
                                    <img src='./public/images/GreenCheckIcon.svg'
                                        className="w-[14px] h-[20px]" />
                                    <div className="text-[12px]">
                                        <span className="text-[#008A00] font-medium">In stock </span>
                                        <span className="text-[#212529] font-semibold">{e?.stock}</span>
                                        <span className="text-[#515D66] font-medium"> products</span>
                                    </div>                                  </div>) : (
                                <div className="flex items-center gap-1">
                                    <img src='./public/images/RedCheckIcon.svg'
                                        className="w-[14px] h-[20px]" />
                                    <p className="text-left text-[12px] text-[#EF262C] font-medium"> Only {e?.stock} left in stock </p>
                                </div>)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopOffer