import React from 'react'
import logotext from "../assets/Images/logotext.jpg"
import { Link as ScrollLink } from "react-scroll"; 
function Footer() {
  return (
    <div className="md:mt-[3em] mt-[2em]">
        <div className="bg-[#e5e3e8] md:px-[2em] md:py-8 pt-4 pb-10 rounded-lg flex items-center gap-1  flex-col lg:flex-row  md:flex-col lg:gap-[8em]  ">
            <div className='-translate-x-6 flex  gap-2 ml-6 mt-[2em] md:mt-[0px] '>
                 <h3 className=' text-[#cbc8d3] md:text-xl font-bold text-sm'>Services</h3>
                <div className=" flex lg:flex-col flex-row  lg:-translate-y-2 lg:items-start gap-3 md:flex-row">
                <div className='flex items-center  justify-center gap-2 md:mt-2 md:-translate-x-20 lg:translate-x-0 lg:ml-3'>
                    <h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center md:text-lg text-[6px]">Design</h5>
                    <h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center md:text-lg text-[6px]">Development</h5>
                    <h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center md:text-lg text-[6px]">Digital marketing</h5>
                </div>
                <img src={logotext} className="md:w-[80px] md:h-[80px] w-[2em] h-[2em] md:mt-[3em] -translate-x-2 md:-translate-y-2 rounded-full object-cover"/>
                </div>
                
            </div>
        <div className=" md:ml-[3em] flex flex-col gap-4 lg:gap-8">
     <h3 className=" text-[#cbc8d3] md:text-xl font-bold translate-y-4 text-sm">Industries</h3>
            <div className="flex items-center gap-2 ">
                <h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center md:text-lg text-[6px]">E-Learning</h5>
                <h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center md:text-lg text-[6px]">Healthcare</h5>
                <h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center md:text-lg text-[6px]">Web3</h5>
                <h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center md:text-lg text-[6px]">Social Platforms</h5>
                <h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center md:text-lg text-[6px]">SaaS</h5>
                <h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center md:text-lg text-[6px]">Fintech</h5>
            </div>
             <h3 className=" text-[#cbc8d3] md:text-xl text-sm font-bold translate-y-4">Company</h3>
             <div className="flex items-center gap-2 ">
                <ScrollLink to="home" smooth={true} duration={500}><h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center text-[6px] md:text-lg">Home</h5></ScrollLink> 
                <ScrollLink to="home" smooth={true} duration={500}><h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center text-[6px] md:text-lg ">Projects</h5></ScrollLink> 
                <ScrollLink to="home" smooth={true} duration={500}><h5 className="rounded-full bg-white px-2 py-1 flex items-center justify-center text-[6px] md:text-lg ">Services</h5></ScrollLink>
                <ScrollLink to="home" smooth={true} duration={500}><h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center text-[6px] md:text-lg">Clients</h5></ScrollLink>
                <ScrollLink to="home" smooth={true} duration={500}><h5 className="rounded-full bg-white px-1 py-1 flex items-center justify-center text-[6px] md:text-lg">Vacancy</h5></ScrollLink>
                
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer