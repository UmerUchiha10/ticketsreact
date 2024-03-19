import React from 'react'
import concert2 from "../Image/concert2.jpeg";

function Newsletter() {
  return (
    <div className='bg-white mt-6'>
    <div className="flex flex-wrap md:flex-nowrap bg-darkgray p-6">
        <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl mb-2 font-lex font-bold">Join The Newsletter To Learn About Future Events</h2>
            <p className="mb-4 font-normal font-lex">Join The Newsletter To And Get 10% Discount On Your First </p>
            <p className='mb-4 font-normal font-lex'>Ticket Purchase</p>
            <form className="items-center gap-4">
                <input className="rounded-l-md p-2 w-full border border-black rounded-e-lg" type="email" placeholder="Your email address" />
                <div className='mt-2'>
                    <button className="bg-neworange text-white rounded-lg p-2 px-4 font-normal font-lex">Subscribe</button>
                </div>
            </form>
        </div>
        <div className="w-full md:w-1/2">
            <img src={concert2} alt="Live event image" style={{ width: '592px', height: '452px' }} className="rounded-2xl md:w-30 md:h-48" />
        </div>
    </div>
</div>
    
  
  )
}

export default Newsletter
