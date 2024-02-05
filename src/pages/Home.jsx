import React from "react";
import GamePad from "../components/home/GamePad";
import TopOffer from "../components/home/TopOffer";


const Home = () => {
    return (
        <div className="bg-[#f1f5f6] pt-7">
            <div className="container px-4 w-full mx-auto">
                <GamePad />
                <TopOffer/>
            </div>
        </div>
    )
}

export default Home