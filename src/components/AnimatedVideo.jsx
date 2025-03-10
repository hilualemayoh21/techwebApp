import React from 'react'
import video1 from "../assets/Videos/video1.mp4"
import video2 from "../assets/Videos/video2.mp4"
import video3 from "../assets/Videos/video3.mp4"
import video4 from "../assets/Videos/video4.mp4"
import video5 from "../assets/Videos/video5.mov"
import video6 from "../assets/Videos/video6.mp4"
function AnimatedVideo() {
  return (
<div className="rounded-2xl  relative">
  <div className='grid md:grid-cols-3 grid-cols-2 gap-0 md:mx-5 mx-[2%]'>
    <div className="flex justify-center md:w-auto md:h-[180px] w-[11em] h-[150px] overflow-hidden">
    <video
      src={video1}
      className="rounded-tl-2xl w-full h-full object-cover block"
      muted
      loop
      autoPlay
    />
  </div>
  <div className="flex justify-center md:w-auto md:h-[180px] w-[10em] h-[150px] overflow-hidden ">
    <video
      src={video3}
      className="w-full h-full object-cover block md:ml-2  md:rounded-tr-none  rounded-tr-2xl  md:rounded-tr-0"
      muted
      loop
      autoPlay
    />
  </div>
  <div className="flex justify-center md:w-auto md:h-[180px] w-[11em]  h-[150px] overflow-hidden  translat-x-4 md:translate-x-0    ">
    <video
      src={video2}
      className="md:rounded-tr-2xl rounded-tr-0  w-full h-full object-cover block md:ml-0"
      muted
      loop
      autoPlay
    />
  </div>


 

   <div className="flex justify-center md:w-auto md:h-[200px] w-[10em] h-[150px] overflow-hidden   md:ml-0 ">
    <video
      src={video4}
      className="w-full h-full object-cover block  rounded-bl-none md:rounded-bl-2xl "
      muted
      loop
      autoPlay
    />
  </div>
  <div className="flex justify-center md:w-auto md:h-[200px] w-[11em] h-[150px] overflow-hidden   md:ml-0 ">
    <video
      src={video5}
      className="w-full h-full object-cover block  rounded-bl-2xl md:rounded-bl-none "
      muted
      loop
      autoPlay
    />
  </div>

  <div className="flex justify-center md:w-auto md:h-[200px] w-[10em] h-[150px] overflow-hidden rounded-br-2xl md:translate-x-0 ">
    <video
      src={video6}
      className="w-full h-full object-cover block rounded-br-2xl"
      muted
      loop
      autoPlay
    />
  </div>
  </div>
  
  <div className="bg-black  w-[208px] h-[49px] rounded-xl text-white flex justify-center items-center absolute md:top-[10em] lg:left-[33em] md:left-[19em] top-[12em] left-[21%]">
    ANIMATION VIDEO HERE
  </div>
</div>






  )
}

export default AnimatedVideo