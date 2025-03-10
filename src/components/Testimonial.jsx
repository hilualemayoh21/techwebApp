import React from 'react'
import restaurantpro from "../assets/Images/restaurantpro.png"
import realstatepro1 from "../assets/Images/realstatepro1.png"
import realstatepro2 from "../assets/Images/realstatepro2.png"
import { FaPlay } from 'react-icons/fa';
import programmerimage from "../assets/Images/programmerimage.jpg"

function Testimonial() {
  return (
    <div className="bg-[#e5e3e8] mt-[4em] mb-[2em] rounded-xl  md:px-[12%] lg:px-[3em]  md:py-[6em]  px-[16%] lg:py-[3em] py-[3em]">
      <h5 className="pb-2 text-orange-400 font-bold md:px-[2em]">Testimonial</h5>
      <div className="flex justify-between items-center md:px-[2em]">
        <h3 className="md:text-4xl text-[12px] leading-tight">
          Provide The Best Offer <br /> According To Your Needs
        </h3>
        <button className="md:px-3  px-4  py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 transition text-[#5d5b69] text-[6px] md:text-sm font-medium border border-[#eb954c] hover:border-[#e17724]">
          Explore Work
        </button>
      </div>
      <div className="flex md:flex-row flex-col md:gap-9 lg:gap-8 gap-8 lg:mx-[8em] md:mx-[4%]">
        {/* cart1 */}
        <div className="flex flex-col mt-8 lg:w-[280px] w-[230px] md:[210px]">
          <div className="flex gap-4 h-[130px] lg:h-[130px] md:h-[140px] bg-[#cdcbd9]  rounded-lg">
            {/* Reusable image component with a class for common styles */}
            <img src={restaurantpro} className="lg:w-[130px] md:w-[72px] w-[105px] h-full object-cover rounded-lg" />
            <img src={restaurantpro} className="lg:w-[130px] md:w-[72px] w-[105px] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-auto bg-white lg:px-4 md:px-2 px-4 py-4 rounded-lg">
            <p className="text-[11px] text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 md:gap-5 lg:gap-2 ">
                <img src={programmerimage} className="rounded-full md:w-[40px] lg:w-[48px]  md:h-[40px] lg:h-[48px] h-[48px] w-[40px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold md:text-[8px] lg:text-[14px] text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6] md:text-[8px] lg:text-[18px] text-[14px]">UI UX Designer</p>
                </div>
              </div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaPlay className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
        {/* cart2 */}
        <div className="flex flex-col mt-8 lg:w-[280px] md:[210px] w-[230px]">
          <div className="flex gap-4 h-[130px] lg:h-[130px] md:h-[140px] bg-[#cdcbd9]  rounded-lg">
            {/* Reusable image component with a class for common styles */}
            <img src={realstatepro1} className="lg:w-[130px] md:w-[72px]  w-[105px] h-full object-cover rounded-lg" />
            <img src={realstatepro1} className="lg:w-[130px] md:w-[72px]  w-[105px] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-auto bg-white lg:px-4 px-4 md:px-2 py-4 rounded-lg">
            <p className="text-[11px] text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 md:gap-5 lg:gap-2">
                <img src={programmerimage} className="rounded-full md:w-[40px] lg:w-[48px]  md:h-[40px] lg:h-[48px] w-[40px] h-[48px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold  md:text-[8px] lg:text-[14px] text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6] md:text-[8px] lg:text-[18px] text-[14px]">UI UX Designer</p>
                </div>
              </div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaPlay className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
        {/* cart 3 */}
        <div className="flex flex-col mt-8 lg:w-[280px] md:[210px] w-[230px]">
          <div className="flex gap-4 h-[130px] lg:h-[130px] md:h-[140px] bg-[#cdcbd9]  rounded-lg">
            {/* Reusable image component with a class for common styles */}
            <img src={realstatepro1} className="lg:w-[130px] md:w-[72px]  w-[105px] h-full object-cover rounded-lg" />
            <img src={realstatepro1} className="lg:w-[130px] md:w-[72px]  w-[105px] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-auto bg-white lg:px-4 px-4 md:px-2 py-4 rounded-lg">
            <p className="text-[11px] text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 justify-center md:gap-5 lg:gap-2">
                <img src={programmerimage} className="rounded-full  md:w-[40px] lg:w-[48px] w-[48px]  md:h-[40px] lg:h-[40px] h-[48px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold  md:text-[8px] lg:text-[14px] text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6]  md:text-[8px] lg:text-[18px] text-[14px]">UI UX Designer</p>
                </div>
              </div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaPlay className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Testimonial
