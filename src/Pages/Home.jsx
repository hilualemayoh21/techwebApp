import React from 'react';
import Navigation from '../components/Navigation';
import realstateImage from "../assets/Images/realstateImage.jpg";
import chiefimage from "../assets/Images/chiefimage.jpg";
import programmerimage from "../assets/Images/programmerimage.jpg";
import honeybeeshape from "../assets/Images/honeybeeshape.jpg"; 
import logotext from "../assets/Images/logotext.jpg";
import Projects from '../components/Projects';
import AnimatedVideo from '../components/AnimatedVideo';
import OurServices from '../components/OurServices';
import Testimonial from '../components/Testimonial';
import MovableCart from '../components/MovableCart';
import ContactUs from '../components/ContactUs';
import Footer from "../components/Footer";

function Home() {
  return (
    <div className='relative w-full min-h-screen'>
      <section id="home">
        <div className="">
          {/* Left Vertical Line */}
          <div className="absolute top-0 left-0 w-[0.7px] h-full bg-gray-300 ml-3"></div>
          {/* Right Vertical Line */}
          <div className="absolute top-0 right-0 w-[1px] h-full bg-gray-300 mr-3"></div>

          <Navigation />
          <hr className="w-[calc(100vw-12px)] mb-2 border-t-[1.3px] border-gray-300 mx-[12px]" />

          {/* Home Section */}
          <div className="flex justify-between mx-[12px] relative">
            <div className="lg:translate-y-8 -rotate-8 lg:translate-x-32 translate-x-4 translate-y-2 md:translate-x-12 md:translate-y-4">
              <img src={chiefimage} className="lg:w-[200px] w-[100px] h-[140px] lg:h-[200px] md:w-[180px] md:h-[180px] hue-rotate-4 brightness-100 border-2 border-white shadow-lg shadow-red-900/12 shadow-b-2 shadow-r-[1px] -shadow-spread-1" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <div className="mt-[4em] md:mt-[1em] lg:mt-16 md:w-[250px] ml-18 md:ml-0 w-[130px] h-[30px] bg-[#f4794f] lg:mb-0 md:mb-6 mb-2 rounded-xl pl-1 flex justify-center items-center">
                <p className="w-full h-full rounded-xl bg-[#e0dceb] py-1 md:text-[14px] text-[8px] text-[#9e95b4]">🔥100% TRUSTED PLATFORM</p>
              </div>
              <div className='bg-white opacity-[0.2] w-12'></div>
              <h1 className="lg:text-7xl font-bold mx-[3em] pr-[1em] leading-relaxed lg:leading-tight md:text-4xl text-[15px] text-[#3a3645] md:px-2">
                Transforming Ideas into
                <span className="md:px-1 md:text-5xl text-xl text-white font-bold rounded-xl bg-gradient-to-r from-[#f69c7a] to-[#ef581f] md:w-[170px] w-[80px] pb-1 md:pb-3 pt-0 md:pt-1 inline-flex items-center justify-center -rotate-6 md:-rotate-6 mr-2 md:mr-6">
                  Digital
                </span>
                Excellence
              </h1>
            </div>
            <div className='lg:translate-y-49 rotate-6 w-[120px] lg:w-[300px] md:w-[200px] md:-translate-x-14 lg:-translate-x-12 md:translate-y-37 -translate-x-7 translate-y-30'>
              <img src={realstateImage} className="brightness-100" />
            </div>
          </div>
          <div className="absolute lg:top-75 lg:left-29 md:left-10 md:top-66 top-56 left-12 w-[0.7px] md:h-39 h-23 bg-gray-300 ml-3"></div>
          <div className="relative lg:translate-x-[98px] lg:translate-y-0 translate-y-18 md:translate-x-[2em] md:translate-y-6 translate-x-[38px] w-14 h-14 rounded-full p-[3px] bg-gradient-to-r from-[#f89b7a] to-[#f0581f]">
            <img src={programmerimage} className="h-full w-full rounded-full border-1 border-[#f59c7a]" />
          </div>
          <p className="px-[2em] text-[#9c9b9e] mt-[79px] md:mt-[3em] lg:mt-[12px]">Little Programmer -<span className="text-sm text-[#cbc8d3]">The perfect place <br />to bring your idea to life</span></p>
          <div className="relative w-[calc(100vw-12px)] h-[180px] md:h-[300px] lg:h-[380px] my-[3em] md:my-[7em] rounded-2xl mx-[12px] hidden md:flex">
            <img src={honeybeeshape} className="w-full h-full rounded-2xl object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black rounded-lg"></div>

            <div className="absolute lg:top-[3em] top-5 md:left-[2em]">
              <div className="flex gap-2">
                <div className="lg:-translate-x-12 md:-translate-x-8 w-[800px]">
                  <svg className="w-1/6 md:w-1/2 lg:w-full xl:w-full" viewBox="0 0 250 250" height="200">
                    <path id="curve" d="M 125, 45 A 75,75 0 1,1 124.9,45" />
                    <text className="text">
                      <textPath href="#curve">
                        KNOW MORE ABOUT US • KNOW MORE ABOUT US •
                      </textPath>
                    </text>
                    <image href={logotext} x="70" y="70" width="98" height="98" className="rounded-full" />
                    <defs>
                      <clipPath id="clipCircle">
                        <circle cx="125" cy="125" r="50" />
                      </clipPath>
                    </defs>
                  </svg>

                  <button className="md:px-3 py-[6px] md:text-[12px] lg:text-[14px] lg:translate-y-2 md:translate-y-0 md:-translate-x-2 lg:translate-x-4 bg-orange-500 rounded-xl text-white md:mx-8 hover:bg-orange-400 active:bg-orange-300">
                    Have a project idea
                  </button>
                </div>
                <h3 className="text-[6px] md:text-[18px] lg:text-[24px] md:mt-3 text-white md:pr-10 break-words lg:translate-0 md:-translate-x-[8em] md:translate-y-6">
                  Delivering innovative solutions with creativity that goes beyond boundaries. We strive to provide the best service with ideas that are out of the box, ensuring high-quality results that stand out. Each project is crafted with precision, user-centric design, and cutting-edge technology to create impactful and efficient solutions.
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      <div className="mt-[8em]">
        <AnimatedVideo />
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="mt-[4em]">
          <OurServices />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients">
        <Testimonial />
      </section>

      {/* Contact Us and Footer */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
