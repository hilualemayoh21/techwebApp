import React from 'react';
import logo from "../assets/Images/logo.jpg";
import { Link as ScrollLink } from "react-scroll"; 

function Footer() {
  return (
    <div className="md:mt-[3em] mt-[2em]">
      <div className="bg-[#e5e3e8] md:px-[2em] px-4 md:py-8 pt-4 pb-10 rounded-lg flex flex-col lg:flex-row gap-6 justify-between items-start">
        
        {/* Left Side - Services Section */}
        <div className="flex flex-col lg:w-1/2 w-full gap-6 md:gap-4 mt-[2em] md:mt-[0px]">
          <div className="flex flex-row sm:flex-col gap-6 sm:gap-4 items-start sm:items-start">
            <div className="flex flex-col    ">
              <h3 className="text-[#cbc8d3] md:text-xl text-sm font-bold">Services</h3>
              <div className="flex flex-wrap gap-3 justify-start">
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Design</h5>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Development</h5>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Digital marketing</h5>
              </div>
            </div>
            {/* Image */}
            
            <img src={logo} className="md:w-[80px] md:h-[80px] w-[40px] h-[40px] mt-4 rounded-full object-cover sm:ml-4 lg:mt-0" />
          </div>
        </div>

        {/* Right Side - Industries and Company Sections */}
        <div className="flex flex-col lg:w-1/2 w-full gap-8">
          
          {/* Industries Section */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <h3 className="text-[#cbc8d3] md:text-xl text-sm font-bold">Industries</h3>
            <div className="flex flex-wrap gap-2 justify-start">
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">E-Learning</h5>
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Healthcare</h5>
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Web3</h5>
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Social Platforms</h5>
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">SaaS</h5>
              <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Fintech</h5>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <h3 className="text-[#cbc8d3] md:text-xl text-sm font-bold">Company</h3>
            <div className="flex flex-wrap gap-2 justify-start">
              <ScrollLink to="home" smooth={true} duration={500}>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Home</h5>
              </ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Projects</h5>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500}>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Services</h5>
              </ScrollLink>
              <ScrollLink to="clients" smooth={true} duration={500}>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Clients</h5>
              </ScrollLink>
              <ScrollLink to="vacancy" smooth={true} duration={500}>
                <h5 className="rounded-full bg-white px-4 py-2 text-xs md:text-sm">Vacancy</h5>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
