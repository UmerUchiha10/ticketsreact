import React from 'react'
import visa from "../Image/VISA.jpeg";
import mastercard from "../Image/MasterCard.png";
import applepay from "../Image/Applepay.png";
import googlepay from "../Image/googlepay.png";
import paypal from "../Image/Paypal.png";
import stripe from "../Image/stripe.png";
import gurantee from "../Image/guranteed.png";
import facebook from "../Image/facebook.png";
import twitter from "../Image/twitter.png";
import instagram from "../Image/instagram.png";
import pinterest from "../Image/pinterest.png";
import youtube from "../Image/youtube.png";
import partner1 from "../Image/partners1.png";
import partner2 from "../Image/partners2.png";



function Footer() {
  return (
    <div class="md:flex md:justify-between p-6 bg-black text-white">
        <div class="mb-6 md:mb-0">
      <h2 class=" mb-2 font-normal text-2xl font-lex">PAYMENT</h2>
      {/* <!-- Add your payment logos here --> */}
      <div class="flex space-x-2 ">
        <img src={visa} alt="star Icon" style={{ width: '60px', height: '40px' }} />
        <img src={mastercard} alt="star Icon" style={{ width: '60px', height: '40px' }} />
        <div className='bg-lightgray'>
        <img src={applepay} alt="star Icon" style={{ width: '50px', height: '40px' }} />

        </div>

        <div className='bg-lightgray'>
        <img src={googlepay} alt="star Icon" style={{ width: '60px', height: '40px' }} />

        </div>

        <div className='bg-lightgray'>
        <img src={paypal} alt="star Icon" style={{ width: '60px', height: '40px' }} />

        </div>

        <div className='bg-lightgray'>
        <img src={stripe} alt="star Icon" style={{ width: '60px', height: '40px' }} />

        </div>
       
        {/* <!-- Add more as needed --> */}
      </div>


        <div className='flex items-center p-4'>

                <div className='mt-4' >
                <img src={gurantee} alt="Emblem" style={{ width: '100px', height: '100px' }}/>

                </div>

                <div>
                <h2 class=" mb-2 font-normal text-2xl font-lex">OUR WARRANTY</h2>
            <p className=' font-lex'>If you are not 100% satisfied </p>
            <p className='font-lex'>we will refund you 100% of your order.</p>
                </div>
            
            {/* <!-- Add more details as needed --> */}


        </div>

        <div className='p-4'>

             <div className='flex gap-4 '>

                <p className='font-lex '>ArtsDot.com</p>
                <p className='font-lex text-gray'>Copyright 2007-2024</p>


                </div>

                <div className='flex gap-4'>

                <p className='font-lex text-gray'>Privacy Policies</p>
                <p className='font-lex text-gray'>Return policies</p>

                </div>

                <div className='flex gap-4'>
                <p className='font-lex text-gray'>Terms of service</p>
                <p className='font-lex text-gray'>F.A.Q 1/2 F.A.Q 2/2</p>
                </div>


                <div>
                <p className='font-lex text-gray'>Contact@ArtsDot.com</p>
                </div>
        </div>
           

     
    </div>
    <div>
      <h2 class="text-2xl mb-2 font-mako">SOCIAL MEDIA</h2>
      {/* <!-- Add your social media icons here --> */}
      <div class="flex space-x-2">
        <img src={facebook} alt="star Icon" style={{ width: '45px', height: '45px' }} />
        <img src={twitter} alt="star Icon" style={{ width: '45px', height: '45px' }} />
        <img src={pinterest} alt="star Icon" style={{ width: '45px', height: '45px' }} />
        <img src={youtube} alt="star Icon" style={{ width: '45px', height: '45px' }} />
        <img src={instagram} alt="star Icon" style={{ width: '45px', height: '45px' }} />




        {/* <!-- Add more as needed --> */}
      </div>
      <h2 class="text-2xl mt-6 mb-2 font-mako">PARTNER</h2>
      {/* <!-- Add your partners logos or links here --> */}
      <div class="flex flex-col space-x-2 gap-2">
        <img src={partner1} alt="star Icon" style={{ width: '200px', height: '60px' }} />
        <img src={partner2} alt="star Icon" style={{ width: '200px', height: '70px' }} />
        {/* <!-- Add more as needed --> */}
      </div>
    </div>
  </div>
  
  )
}

export default Footer
