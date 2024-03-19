import React from 'react'
import star from "../Image/star.png";
import star2 from "../Image/star2.png";
import left from "../Image/arrowleft.png";
import right from "../Image/arrowright.png";



function Rating() {
return (
<div className='bg-lightgray md:text-xl'>

<div className='flex justify-center p-6'>
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-center font-normal font-lex'>Excellent</h1>

        <div className='flex justify-center gap-1'>
            <img src={star} alt="star Icon" style={{ width: '50px', height: '50px' }} />
            <img src={star} alt="star Icon" style={{ width: '50px', height: '50px' }} />
            <img src={star} alt="star Icon" style={{ width: '50px', height: '50px' }} />
            <img src={star} alt="star Icon" style={{ width: '50px', height: '50px' }} />
            <img src={star} alt="star Icon" style={{ width: '50px', height: '50px' }} />
        </div>

        <h1 className='text-2xl font-normal font-lex md:text-2xl'>
            Based on{' '}
            <span className='font-normal font-lex text-xl md:text-2xl underline underline-offset-1'>
                1,559 reviews
            </span>
        </h1>


        <div className='flex justify-center items-center'>
            <img src={star2} alt="star Icon" style={{ width: '50px', height: '50px' }} />
            <p className='text-center font-normal font-lex text-3xl'>Trustpilot</p>
        </div>

    </div>
</div>

<div className='flex justify-between md:flex-row items-start md:items-center overflow-x-auto md:overflow-x-visible'>

    <img src={left} alt="star Icon" style={{ width: '40px', height: '40px' }} />

    <div className="text-black p-4 rounded mr-4 md:w-80">
        <div className="flex items-center mb-2 gap-1">
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
        </div>
        <div className='flex flex-col '>
            <p className="text-xl font-normal font-lex md:w-full">Excellent service</p>
            <p className='font-normal font-lex text-xs md:w-full'>Excellent service, trusted people, </p>
            <p className='font-normal font-lex text-xs md:w-full'>Sometimes fees are too expensive but ok.</p>
            <p className="text-xs mt-2 font-normal font-lex md:w-full">William Castellanos , 3 days ago</p>
        </div>

        
    </div>

    <div className="text-black p-4 rounded mr-4 md:w-80">
        <div className="flex items-center mb-2 gap-1">
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
        </div>
        <div className='flex flex-col '>
            <p className="text-xl font-normal font-lex md:w-full">Excellent service</p>
            <p className='font-normal font-lex text-xs md:w-full'>Excellent service, trusted people, </p>
            <p className='font-normal font-lex text-xs md:w-full'>Sometimes fees are too expensive but ok.</p>
            <p className="text-xs mt-2 font-normal font-lex md:w-full">William Castellanos , 3 days ago</p>
        </div>

        
    </div>

    <div className="text-black p-4 rounded mr-4 md:w-80">
        <div className="flex items-center mb-2 gap-1">
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
        </div>
        <div className='flex flex-col '>
            <p className="text-xl font-normal font-lex md:w-full">Excellent service</p>
            <p className='font-normal font-lex text-xs md:w-full'>Excellent service, trusted people, </p>
            <p className='font-normal font-lex text-xs md:w-full'>Sometimes fees are too expensive but ok.</p>
            <p className="text-xs mt-2 font-normal font-lex md:w-full">William Castellanos , 3 days ago</p>
        </div>

        
    </div>

    <div className="text-black p-4 rounded mr-4 md:w-80">
        <div className="flex items-center mb-2 gap-1">
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
            <img src={star} alt="star Icon" style={{ width: '20px', height: '20px' }} />
        </div>
        <div className='flex flex-col '>
            <p className="text-xl font-normal font-lex md:w-full">Excellent service</p>
            <p className='font-normal font-lex text-xs md:w-full'>Excellent service, trusted people, </p>
            <p className='font-normal font-lex text-xs md:w-full'>Sometimes fees are too expensive but ok.</p>
            <p className="text-xs mt-2 font-normal font-lex md:w-full">William Castellanos , 3 days ago</p>
        </div>

        
    </div>

    {/* Add more carousel cards here */}

    <img src={right} alt="star Icon" style={{ width: '40px', height: '40px' }} />

</div>
</div>


)
}

export default Rating
