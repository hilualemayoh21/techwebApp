import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center md:px-8 lg:px-[6em] px-4 py-6 gap-6'>
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h3 className='text-2xl md:text-3xl font-bold text-[#3a3645] mb-4'>Let's Talk</h3>
        <div className='flex flex-col md:flex-row md:items-center gap-4 justify-center items-center md:justify-start'>
  <button className="bg-orange-600 text-white px-2 py-1 rounded-md text-[10px] sm:text-[12px] md:text-[14px] sm:px-3 sm:py-2 w-[100px] sm:w-[130px] md:w-auto">
    Start your project
  </button>
  <span className='text-[#5d5968] text-sm md:text-base break-all text-center md:text-left'>
    senayamdework@icloud.com
  </span>
</div>
        <div className='flex gap-3 items-center mt-6 justify-center md:justify-start'>
          <span className='text-[#5d5968]'>Find us:</span>
          {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, index) => (
            <a
              key={index}
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#aaa9ae] hover:text-[#5d5968] transition duration-300 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#e5e3e8] hover:bg-[#f5f5f5]'
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h3 className='text-lg text-[#aba8b3] font-bold mb-4'>Location</h3>
        <div className='bg-[#f6f6f8] hover:bg-[#e5e3e8] transition p-4 rounded-lg mb-4 w-full max-w-sm mx-auto md:mx-0'>
          <h5 className='font-semibold'>Addis Ababa, Ethiopia</h5>
          <p className='text-[#5d5968] text-sm'>Gabon Street, Rizq Building, 3rd Floor, Office 303, Bole, Addis Ababa, Ethiopia</p>
        </div>
        <div className='bg-[#f6f6f8] hover:bg-[#e5e3e8] transition p-4 rounded-lg w-full max-w-sm mx-auto md:mx-0'>
          <h5 className='font-semibold'>Phone</h5>
          <p className='text-[#5d5968] text-sm'>+251 91 018 3505</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
