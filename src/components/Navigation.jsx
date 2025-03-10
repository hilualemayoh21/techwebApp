import React, { useState } from 'react';
import logo from "../assets/Images/logo.jpg";
import HamburgerIcon from "hamburger-react";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons
import {Link} from "react-router-dom"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <div className="relative">
      {/* Overlay when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu} // Close the sidebar when overlay is clicked
        />
      )}

      <div className="flex justify-between items-center mx-auto px-14">
        {/* Logo */}
        <div>
          <img src={logo} className="md:w-[8em] md:h-[8em] w-[4em] h-[4em]" alt="Logo" />
        </div>

        {/* Hamburger Icon (visible only on small screens) */}
        <div className="block md:hidden">
          <HamburgerIcon
            toggled={isOpen}
            toggle={toggleMenu}
            size={30}
            color="#eb954c"
          />
        </div>

        {/* Navigation Menu (for large screens) */}
        <div className="hidden md:flex justify-between items-center w-full md:w-auto">
          <ul className="flex flex-row gap-4">
          <Link to="#home">
           <li className="w-20 h-8 px-2 md:bg-gray-200 flex justify-center items-center rounded-xl font-bold">
             Home
            </li></Link> 
            <Link to="#projects">
            <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
              Projects
            </li>
            </Link>
           <Link to="#services">
           <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
              Services
            </li>
           </Link> 
           <Link to="#clients">
           <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
             Clients
            </li></Link>
            
           <Link to="#home">
            <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
             Vacancy
            </li></Link>
          </ul>
        </div>

        {/* Contact Us Button (for larger screens) */}
        <div className="hidden md:block relative px-4 py-2 rounded-3xl bg-gray-100 hover:bg-gray-200 transition">
          <button className="relative z-10 text-black">Contact us</button>
          <span className="absolute inset-0 rounded-3xl border-t-[1.7px] border-b-[1.7px] border-[#eb954c] transition duration-300 hover:border-[#e17724]"></span>
          <span className="absolute inset-0 rounded-3xl border-l-[1.7px] border-r-[1.7px] border-[#f0b372] opacity-50 transition duration-300 hover:border-[#e6a35c] hover:opacity-100"></span>
        </div>
      </div>

      {/* Sidebar (only visible on small screens) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 md:hidden`}
      >
       

        {/* Sidebar Menu */}
        <ul className="flex flex-col items-center justify-center gap-6 pt-20">
       <Link to="#home">
        <li className="w-full py-2 text-center text-md font-bold ">
           Home
          </li>
       </Link>  
          <Link to="#projects">
          <li className="w-full py-2 text-center text-md font-bold  hover:bg-gray-200">
           Projects
          </li></Link>
         <Link to="#services">
          <li className="w-full py-2 text-center text-md font-bold  hover:bg-gray-200">
            Services
          </li>
         </Link>
         <Link to="#clients">
          <li className="w-full py-2 text-center text-md font-bold hover:bg-gray-200">
           Clients
          </li></Link>
         
         <Link to="#home">
          <li className="w-full py-2 text-center text-md font-bold  hover:bg-gray-200">
            Vacancy
          </li>
         </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
