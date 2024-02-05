import React from "react";

const routes = [{
    id: 0,
    name: 'Home'
}, {
    id: 1,
    name: 'Shop'
}, {
    id: 2,
    name: 'Product'
}, {
    id: 3,
    name: 'Page'
}, {
    id: 4,
    name: 'Blog'
}];

const Menu = () => {
    return (
        <div className="w-full bg-white border border-b-[#e4e8eb] mb-7">
            <div className="container px-4 w-full mx-auto flex items-center justify-center my-2 gap-[320px]">
                <div className="flex items-center gap-[14px]">
                    <img src="./public/images/MenuIcon.svg"
                        className="w-[20px] h-[20px]"
                    />
                    <p className="text-[11px] text-[#212529] font-medium mr-5"> Browse All Categories</p>
                    <div className="bg-[#e4e8eb] w-[0.5px] h-[14px]" />
                    {routes.map((e, index) => {
                        return (
                            <button key={index}
                                className="flex items-center gap-1">
                                <p className="text-[11px] text-[#212529] font-medium">{e?.name}</p>
                                <img src="./public/images/ChervonDownIcon.svg"
                                    className="w-[9px] h-[9px]" />
                            </button>
                        )
                    })}
                    <div className="">
                        <p className="text-[11px] text-[#212529] font-medium">Contact us</p>
                    </div>
                    <div className="">
                        <p className="text-[11px] text-[#dc323c] font-medium">Buy Uminex!</p>
                    </div>
                   
                </div>
                <div className="flex items-center gap-2">
                    <img src="./public/images/SaleIcon.svg"
                        className="w-[23px] h-[23px]" />
                    <p className="text-[11px] " > Sale $20 Off Your First Order.</p>
                </div>
            </div>
        </div>
    )
}

export default Menu