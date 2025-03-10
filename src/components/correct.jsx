import React, { useState } from "react";
import { HamburgerIcon } from "hamburger-react"; // Import the hamburger icon
import './App.css'; // Import your custom styles if necessary

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl">My App</h1>
         {/* Hamburger Icon */}
          <HamburgerIcon
            toggled={isOpen}
            toggle={toggleMenu}
            size={30}
            color="orange"
            className="md:hidden block"
          />
        </div>
        
        {/* Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-x-4 mt-4 md:mt-0`}
        >
          <a href="#" className="text-white py-2 px-4">Home</a>
          <a href="#" className="text-white py-2 px-4">About</a>
          <a href="#" className="text-white py-2 px-4">Services</a>
          <a href="#" className="text-white py-2 px-4">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default App;
