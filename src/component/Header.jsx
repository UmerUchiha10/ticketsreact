import React from 'react'
import phone from "../Image/phone.png";

function Header() {
return (
<div>
<header class="text-gray-600 body-font bg-black">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div class="flex flex-col">
                <span class="ml-3 text-3xl text-white font-metal-mania font-normal">LAST CHANCE TICKET</span>
                <p class="text-blue text-xs text-center ">Y O U R T R U S T E D T I C K E T S E L L E R</p>
            </div>
        </a>
        <div class="p-4">
            <p class="font-bold text-white">100+Social Media Followers</p>
        </div>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center p-2">
            <a class="mr-5 hover:text-blue text-white cursor-pointer">Request Event</a>
            <a class="mr-5 hover:text-blue text-white cursor-pointer">Contact Us</a>
        </nav>
        <div class="flex items-center gap-2">
            <img src={phone} alt="Phone Icon" style={{ width: '15px', height: '15px' }} />
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Sell tickets
                </button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
