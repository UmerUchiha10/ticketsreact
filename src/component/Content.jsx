import React from 'react'
import concert from "../Image/concert.png";
import theater from "../Image/theater.png";
import hockey from "../Image/hockey.png";



function Content() {
return (
<div class="bg-black text-white p-6 md:p-12">

    <div class="text-center">

        <p class="text-sm md:text-base font-normal font-lex">Hurray! You are in the right place * 100K+ social media followers * We value
            every customer</p>
        <h1 class="text-blue text-2xl md:text-4xl mt-4 font-normal font-lex">Purchase Tickets<span class="text-white p-2 font-normal font-lex">For A </span></h1>
        <h1 class="text-white text-2xl md:text-4xl mt-4 font-normal font-lex">Semi Final 1 - T20 Cricket World Cup</h1>


        <p class="text-lg md:text-2xl mt-2 font-normal font-lex">15 MAR, 2024</p>
        <p class="text-base md:text-lg mt-4 font-normal font-lex">Your next best-night-ever is waiting. And we have the tickets.</p>


    </div>

    <div class="flex items-center justify-center mt-10">
        <div class="relative w-full p-4 border bg-gray rounded-full">
            <input type="text" class="w-full h-10 p-4 rounded-full z-0 focus:shadow focus:outline-none text-black font-normal font-lex" 
                placeholder="Search For An Event Here" />
        </div>
    </div>

    <div className="p-6 md:p-12">
        <h1 className="text-2xl md:text-4xl mb-4 font-normal font-lex">Top Event Lists</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <img src={concert} alt="Concert" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
                <img src={theater} alt="Theater" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
                <img src={hockey} alt="Hockey" className="w-full h-64 object-cover rounded-lg" />
            </div>
        </div>
    </div>




</div>

)
}

export default Content
