import React from 'react';
import video1 from "../assets/Videos/video1.mp4";
import video2 from "../assets/Videos/video2.mp4";
import video3 from "../assets/Videos/video3.mp4";
import video4 from "../assets/Videos/video4.mp4";
import video5 from "../assets/Videos/video5.mov";
import video6 from "../assets/Videos/video6.mp4";

function AnimatedVideo() {
  return (
    <div className="relative rounded-2xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-auto max-w-6xl">
        {[video1, video3, video2, video4, video5, video6].map((video, index) => (
          <div key={index} className="flex justify-center w-full overflow-hidden rounded-xl md:h-[200px] sm:h-[180px] h-[150px]">
            <video
              src={video}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
            />
          </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="bg-black text-white w-[180px] sm:w-[220px] h-[50px] rounded-xl flex justify-center items-center absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        ANIMATION VIDEO HERE
      </div>
    </div>
  );
}

export default AnimatedVideo;
