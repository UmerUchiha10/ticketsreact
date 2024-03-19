import React from 'react'


import img1 from "../Image/img1.png";
import img2 from "../Image/img5.png";
import img3 from "../Image/img6.png";


function Content2() {
return (
<div className="bg-white p-6 md:p-12">
    <h1 className="text-2xl md:text-4xl mb-4 font-normal font-lex">Featured Events On Sale Today</h1>
    <div className="flex flex-wrap items-center mb-4">
        <div className='flex justify-between'>
            <div>
                <label htmlFor="filter" className="mr-2 font-normal font-lex">Filter By:</label>
                <button
                    className="text-blue rounded-full px-4 py-2 mr-2 font-normal font-lex underline underline-offset-1">ALL</button>
                <button
                    className="text-blue rounded-full px-4 py-2 mr-2 font-normal font-lex underline underline-offset-1">Sports</button>
                <button
                    className="text-blue rounded-full px-4 py-2 mr-2 font-normal font-lex underline underline-offset-1">Concerts</button>
                <button
                    className="text-blue rounded-full px-4 py-2 mr-2 font-normal font-lex underline underline-offset-1">Festivals</button>
                <button
                    className="text-blue rounded-full px-4 py-2 mr-2 font-normal font-lex underline underline-offset-1">Theaters</button>
                <select id="filter"
                    className="ml-auto border border-black text-black w-50 px-4 py-2 font-normal font-lex">
                    <option>ALL EVENTS</option>
                </select>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>

            <div className="card rounded">
                <img className="w-full" src={img1} alt="Billy Joel & Stevie Nicks" />
                <div className="px-6 py-4 text-center">
                    <div className="font-normal font-lex text-xl mb-2">Billy Joel & Stevie Nicks</div>
                    <p className="text-gray-700 text-base font-normal font-lex">New York, United States</p>
                    <p className="text-gray-700 text-base text-blue font-normal font-lex">from $80</p>
                </div>
            </div>
            {/* Add more event cards here */}
        </div>
    </div>
</div>

)
}

export default Content2
