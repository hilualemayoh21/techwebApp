import React from 'react';
import restaurantpro from "../assets/Images/restaurantpro.png";
import realstatepro1 from "../assets/Images/realstatepro1.png";
import realstatepro2 from "../assets/Images/realstatepro2.png";
import { FaPlay } from 'react-icons/fa';
import programmerimage from "../assets/Images/programmerimage.jpg";

function Testimonial() {
  return (
    <div className="bg-[#e5e3e8] mt-[4em] mb-[2em] rounded-xl px-[4%] lg:px-[3em] py-[3em]">
      <h5 className="pb-2 text-orange-400 font-bold text-center md:px-[2em]">Testimonial</h5>
      <div className="flex flex-col md:flex-row justify-between items-center md:px-[2em]">
        <h3 className="text-2xl md:text-4xl text-center md:text-left leading-tight mb-4 md:mb-0">
          Provide The Best Offer <br /> According To Your Needs
        </h3>
        <button className="md:px-3 px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 transition text-[#5d5b69] text-sm font-medium border border-[#eb954c] hover:border-[#e17724]">
          Explore Work
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-8 md:mx-[5%]">
        {/* cart1 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] mt-8">
          <div className="flex gap-4 h-[200px] bg-[#cdcbd9] rounded-lg">
            <img src={restaurantpro} className="w-[48%] h-full object-cover rounded-lg" />
            <img src={restaurantpro} className="w-[48%] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-[200px] bg-white lg:px-4 md:px-2 px-4 py-4 rounded-lg flex flex-col justify-between">
            <p className="text-xs text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 md:gap-5 lg:gap-2">
                <img src={programmerimage} className="rounded-full w-[40px] h-[40px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6] text-[12px]">UI UX Designer</p>
                </div>
              </div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaPlay className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* cart2 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] mt-8">
          <div className="flex gap-4 h-[200px] bg-[#cdcbd9] rounded-lg">
            <img src={realstatepro1} className="w-[48%] h-full object-cover rounded-lg" />
            <img src={realstatepro1} className="w-[48%] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-[200px] bg-white lg:px-4 md:px-2 px-4 py-4 rounded-lg flex flex-col justify-between">
            <p className="text-xs text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 md:gap-5 lg:gap-2">
                <img src={programmerimage} className="rounded-full w-[40px] h-[40px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6] text-[12px]">UI UX Designer</p>
                </div>
              </div>
              <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaPlay className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* cart3 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] mt-8">
          <div className="flex gap-4 h-[200px] bg-[#cdcbd9] rounded-lg">
            <img src={realstatepro2} className="w-[48%] h-full object-cover rounded-lg" />
            <img src={realstatepro2} className="w-[48%] h-full object-cover rounded-lg" />
          </div>

          <div className="w-full h-[200px] bg-white lg:px-4 md:px-2 px-4 py-4 rounded-lg flex flex-col justify-between">
            <p className="text-xs text-[#5d5968] leading-tight max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quos delectus ipsa magnam. maiores molestias, distinctio, illum possimus id facere.
            </p>
            <hr className="my-2" />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 md:gap-5 lg:gap-2">
                <img src={programmerimage} className="rounded-full w-[40px] h-[40px]" />
                <div className="text-sm">
                  <h3 className='text-[#5d5b69] font-bold text-[14px]'>Dipu Paul</h3>
                  <p className="text-[#e5e3e6] text-[12px]">UI UX Designer</p>
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
  );
}

export default Testimonial;
