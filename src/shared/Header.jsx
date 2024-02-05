import React from "react";
import Toplink from "./header/Toplink";
import Navbar from "./header/Navbar";
import Menu from "./header/Menu";


const Header = () => {
    return (
        <div className="w-full">
            <Toplink />
            <Navbar />
            <Menu/>
        </div>
    )
}

export default Header