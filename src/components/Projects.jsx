import React ,{useState}from 'react'
import realstatepro3 from "../assets/Images/realstatepro3.png"
import meklite from "../assets/Images/meklite.png"
import maed from "../assets/Images/maed.png"
import owlevent from "../assets/Images/owlevent.png"
function Projects() {
  const [isShaking , setIsShaking]=useState([false,false,false,false]);
  const handleCartClick = (index) => {
    const newShaking =[...isShaking];
          newShaking[index] =true;
    setIsShaking(newShaking);
    // Remove the shake class after animation ends (500ms)
    setTimeout(() => {
      newShaking[index]=false;
      setIsShaking(newShaking);
    }, 500);
  };
  return (
    <div className="md:mx-[8em]  mx-[18%] my-12">
    <div className={`flex  items-center justify-center mb-6 `} >
         <h3 className="md:text-4xl text-[14px] " >Explore Our Latest Projects</h3>
  <div className="relative inline-block ml-auto items-center ">
  <button className="md:px-4 md:py-2 px-[4px] py-[4px]  rounded-2xl bg-gray-100 hover:bg-gray-200 transition text-black text-[6px] md:text-sm font-medium border border-[#eb954c] hover:border-[#e17724] ">
    View all
  </button>
</div>
 </div>
    <div className=" flex md:flex-row lg:gap-8 flex-col gap-[3em] ">
         <div className={` lg:w-[250px] lg:h-[290px]  w-[240px] h-[170px]${ isShaking[1] ? "animate-shake-both" : ""} cursor-pointer mb-2`} onClick={()=>handleCartClick(1)}>
       <a href="https://maed.farm/auth/login" target="_blank">
         <img src={maed} className="w-full h-full rounded-xl object-cover"/>
       </a>
       
        <h3  className="md:text-lg font-bold text-[#3a3645] text-md">Maed Farm</h3>
        <p className="text-[#666668]">Sustainable Agriculture</p>
    </div>
      <div className={`lg:w-[240px] lg:h-[170px] w-[240px] h-[170px] ${ isShaking[2] ? "animate-shake-both" : ""} cursor-pointer mb-2`} onClick={()=>handleCartClick(2)}>
        <a href="https://meklit.life/" target="_blank"> 
          <img src={meklite} className="w-full h-full rounded-xl object-cover"/></a>
        <h3  className=" md:text-lg font-bold text-[#3a3645] text-md">Meklit Life</h3>
        <p className="text-[#666668]">Empowering Growth</p>
    </div>
    <div className={` lg:w-[250px] lg:h-[290px] w-[240px] h-[170px] ${ isShaking[3] ? "animate-shake-both" : ""} cursor-pointer mb-2 `} onClick={()=>handleCartClick(3)}>
      <a href="https://owlevents.app/events/?category_id=22&name=Fashion"  target="_blank"><img src={owlevent} className="w-full h-full rounded-xl object-cover "/></a>
        <h3  className="md:text-lg text-md font-bold text-[#3a3645] text-md">Owl Events</h3>
        <p className="text-[#666668]">Fashion Events</p>
    </div>
     <div className={` w-[240px] h-[170px] ${ isShaking[4] ? "animate-shake-both" : ""} cursor-pointer mb-2 `}onClick={()=>handleCartClick(4)}>
        <img src={realstatepro3} className="w-full h-full rounded-xl object-cover"/>
        <h3 className="md:text-lg text-md font-bold text-[#3a3645] ">ACE Finder</h3>
        <p className="text-[#666668]">Real estate agent website</p>
    </div>
    </div>
   
   
</div>

  )
}

export default Projects