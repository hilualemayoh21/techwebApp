import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='flex md:flex-row flex-col lg:gap-[10em]  md:gap-[9em] gap-[3em]  md:mx-[2em] mx-[5em] items-center '>
        <div>
       <h3 className="md:text-3xl text-2xl font-bold md:ml-0 ml-3 mb-4 text-[#3a3645]">
        Let's Talk
       </h3>
       <div className="flex md:flex-row flex-col md:gap-2 lg:gap-4 gap-4  items-center mb-3 ">
        <button className="bg-orange-600 text-white px-3  py-2 rounded-lg md:text-[9px] lg:text-[14px] text-[16px]  lg:py-2  lg:px-3   md:translate-x-0 -translate-x-8">Start your project</button>
        <span className="text-[#5d5968] ">senayamdework@icloud.com</span>
       </div>
       <div className="flex  gap-2 items-center mt-[20px]">
        Findus:
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#aaa9ae] hover:text-[#5d5968] transition duration-300 w-[25px] h-[25px] rounded-full hover:bg-[#f5f5f5] bg-white border-2 border-[#e5e3e8] flex items-center justify-center "
      ><FaFacebookF size={15} /></a>
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#aaa9ae] hover:text-[#5d5968] transition duration-300 w-[25px] h-[25px] rounded-full bg-white hover:bg-[#f5f5f5] border-2 border-[#e5e3e8] flex items-center justify-center"
      >< FaLinkedinIn size={15} /></a>
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#aaa9ae] hover:text-[#5d5968] transition duration-300 w-[25px] h-[25px] rounded-full bg-white hover:bg-[#f5f5f5] border-2 border-[#e5e3e8] flex items-center justify-center"
      >< FaTwitter size={15} /></a>
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#aaa9ae] hover:text-[#5d5968] transition duration-300 w-[25px] h-[25px] rounded-full bg-white hover:bg-[#f5f5f5] border-2 border-[#e5e3e8] flex items-center justify-center"
      >< FaInstagram size={15} /></a>
       
       </div>
        </div>
        <div className="ml-auto pr-3 md:translate-x-0 -translate-x-3">
            <h3 className="text-xl text-[#aba8b3d] font-bold mb-4">
            Location
        </h3>
      <div className="md:w-[290px] md:h-[78px] h-[50px] w-[200px] mt-2 bg-[#f6f6f8] hover:bg-[#e5e3e8] transition duration-300 px-2">
          <h5 className='mb-1 '>Addis Ababa, Ethiopia</h5>
        <p className="text-[#cbc8d3] text-[6px] md:text-[16px] md:pb-4">Gabon Street, Rizq Building, 3rd Floor, Office 303, Bole, Addis Ababa, Ethiopia</p>
      </div>
       <div className="md:w-[290px] w-[200px] md:h-[60px] h-[50px] mt-2 bg-[#f6f6f8] hover:bg-[#e5e3e8] transition duration-300 px-2">
          <h5 className='mb-1 '>Addis Ababa, Ethiopia</h5>
        <p className="text-[#cbc8d3] text-[6px] md:text-[16px] md:pb-4">Phone Number: +251 91 018 3505 </p>
      </div>
        </div>
            
        
    </div>
  )
}

export default ContactUs