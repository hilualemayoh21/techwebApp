import React, { useState , useEffect } from 'react';
import logo from "../assets/Images/logo.jpg";
import HamburgerIcon from "hamburger-react";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
   // State to manage the menu toggle
  const [isFixed , setIsFixed]=useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
          if(window.scrollY > window.innerHeight){
            setIsFixed(true);
          }
          else{
            setIsFixed(false);
          }
    }
     window.addEventListener("scroll" , handleScroll);

     return ()=> window.removeEventListener("scroll" , handleScroll);
  },[])

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <div className="relative md:mt-4">
      {/* Overlay when the sidebar is open */}
      {isOpen && (
        <div
          className="absolute inset-0 z-10  "
          onClick={toggleMenu} // Close the sidebar when overlay is clicked
        />
      )}

      <div className={`flex  items-center mx-auto px-14 transition-all duration-200 ${isFixed ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 " :""}  `}>
        {/* Logo */}
        <div className='inline-flex '>
          <img src={logo} className="md:w-[6em] md:h-[6em] w-[4em] h-[4em] pt-2 object-cover" alt="Logo" />
          
        </div>

        {/* Hamburger Icon (visible only on small screens) */}
       {/* Hamburger Icon (visible only on small screens) */}
<div className="block md:hidden w-full relative">
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
    <HamburgerIcon
      toggled={isOpen}
      toggle={toggleMenu}
      size={30}
      color="#eb954c"
    />
  </div>
</div>

        

        {/* Navigation Menu (for large screens) */}
        <div className={`hidden md:flex justify-between items-center w-full md:w-auto lg:ml-auto `}>
          <ul className="flex flex-row md:gap-3 lg:gap-4 ">
            <ScrollLink to="home" smooth={true} duration={500}>
              <li className="w-20 h-8 px-2 md:bg-gray-200 flex justify-center items-center rounded-xl font-bold">
                Home
              </li>
            </ScrollLink>

            <ScrollLink to="projects" smooth={true} duration={500}>
              <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
                Projects
              </li>
            </ScrollLink>

            <ScrollLink to="services" smooth={true} duration={500}>
              <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
                Services
              </li>
            </ScrollLink>

            <ScrollLink to="clients" smooth={true} duration={500}>
              <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
                Clients
              </li>
            </ScrollLink>

            <ScrollLink to="home" smooth={true} duration={500}>
              <li className="w-20 h-8 px-4 md:bg-gray-100 flex justify-center items-center rounded-xl md:hover:bg-gray-200 md:active:bg-gray-100 text-gray-600">
                Vacancy
              </li>
            </ScrollLink>
          </ul>
        </div>

        {/* Contact Us Button (for larger screens) */}
         <ScrollLink to="contactus" smooth={true} duration={500}>
        <div className="hidden md:block relative px-4 py-2 rounded-3xl bg-gray-100 hover:bg-gray-200 transition ml-4">
          <button className="relative z-10 text-black">Contact us</button>
          <span className="absolute inset-0 rounded-3xl border-t-[1.7px] border-b-[1.7px] border-[#eb954c] transition duration-300 hover:border-[#e17724]"></span>
          <span className="absolute inset-0 rounded-3xl border-l-[1.7px] border-r-[1.7px] border-[#f0b372] opacity-50 transition duration-300 hover:border-[#e6a35c] hover:opacity-100"></span>
        </div>
        </ScrollLink>
      </div>

      {/* Sidebar (only visible on small screens) */}
      <div
        className={`absolute top-0 left-0 w-64 min-h-screen bg-black opacity-73 z-30 shadow-lg  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 md:hidden`}
      >
        {/* Sidebar Menu */}
        <ul className="flex flex-col items-center justify-center gap-6 pt-12">
          <ScrollLink to="home" smooth={true} duration={500}>
            <li className="w-full text-center  text-white   text-md font-bold">
              Home
            </li>
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500}>
            <li className="w-full  text-center   text-white  text-md font-bold hover:text-[#eb954c]">
              Projects
            </li>
          </ScrollLink>

          <ScrollLink to="services" smooth={true} duration={500}>
            <li className="w-full text-center   text-white  text-md font-bold hover:text-[#eb954c]">
              Services
            </li>
          </ScrollLink>

          <ScrollLink to="clients" smooth={true} duration={500}>
            <li className="w-full text-center  text-white  text-md font-bold hover:text-[#eb954c]">
              Clients
            </li>
          </ScrollLink>

          <ScrollLink to="home" smooth={true} duration={500}>
            <li className="w-full  text-center  text-white text-md font-bold hover:text-[#eb954c]">
              Vacancy
            </li>
          </ScrollLink>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
