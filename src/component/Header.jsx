import React from 'react'
import phone from "../Image/phone.png";

function Header() {
return (
<div>
<header className="text-gray-600 body-font bg-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="flex flex-col">
                <span className="ml-3 text-3xl text-white font-metal-mania font-normal">LAST CHANCE TICKET</span>
                <p className="text-blue text-xs text-center ">Y O U R T R U S T E D T I C K E T S E L L E R</p>
            </div>
        </a>
        <div className="p-4">
            <p className="font-bold text-white">100+Social Media Followers</p>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center p-2">
            <a className="mr-5 hover:text-blue text-white cursor-pointer">Request Event</a>
            <a className="mr-5 hover:text-blue text-white cursor-pointer">Contact Us</a>
        </nav>
        <div className="flex items-center gap-2">
            <img src={phone} alt="Phone Icon" style={{ width: '15px', height: '15px' }} />
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Sell tickets
            </button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Login
            </button>
        </div>
    </div>
</header>


    <hr></hr>
</div>
)
}

export default Header
