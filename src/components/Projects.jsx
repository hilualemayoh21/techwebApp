import React, { useState } from 'react';
import realstatepro3 from "../assets/Images/realstatepro3.png";
import meklite from "../assets/Images/meklite.png";
import maed from "../assets/Images/maed.png";
import owlevent from "../assets/Images/owlevent.png";

function Projects() {
  const [isShaking, setIsShaking] = useState([false, false, false, false]);

  const handleCartClick = (index) => {
    const newShaking = [...isShaking];
    newShaking[index] = true;
    setIsShaking(newShaking);

    setTimeout(() => {
      newShaking[index] = false;
      setIsShaking([...newShaking]); // Ensure re-render
    }, 500);
  };

  return (
    <div className="md:mx-[6em] mx-[10%] my-12">
      <div className="flex items-center justify-center mb-6">
        <h3 className="md:text-4xl text-[14px]">Explore Our Latest Projects</h3>
        <div className="relative inline-block ml-auto">
          <button className="md:px-4 md:py-2 px-[4em] py-[4px] rounded-xl md:rounded-2xl bg-gray-100 hover:bg-gray-200 transition text-black text-[6px] md:text-sm font-medium border border-[#eb954c] hover:border-[#e17724]">
            View all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-[2em] justify-center">
        {[ 
          { src: maed, title: "Maed Farm", desc: "Sustainable Agriculture", link: "https://maed.farm/auth/login", heightClass: "lg:h-[300px]" },
          { src: meklite, title: "Meklit Life", desc: "Empowering Growth", link: "https://meklit.life/", heightClass: "lg:h-[200px]" },
          { src: owlevent, title: "Owl Events", desc: "Fashion Events", link: "https://owlevents.app/events/?category_id=22&name=Fashion", heightClass: "lg:h-[300px]" },
          { src: realstatepro3, title: "ACE Finder", desc: "Real estate agent website", heightClass: "lg:h-[200px]" },
        ].map((project, index) => (
          <div
            key={index}
            className={`w-full max-w-[220px] md:max-w-[280px] ${project.heightClass} h-[220px] md:h-[220px] ${isShaking[index] ? "animate-shake-both" : ""} cursor-pointer mx-auto`}
            onClick={() => handleCartClick(index)}
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.src} className="w-full h-full rounded-xl object-cover" alt={project.title} />
              </a>
            ) : (
              <img src={project.src} className="w-full h-full rounded-xl object-cover" alt={project.title} />
            )}
            <h3 className="md:text-lg text-md font-bold text-[#3a3645]">{project.title}</h3>
            <p className="text-[#666668] ">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
