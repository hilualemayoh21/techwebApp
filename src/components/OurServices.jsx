import React from 'react';

function OurServices() {
  return (
    <div className="md:mx-[4rem] mx-4">
      <h5 className="text-orange-500 md:mb-6 mb-3 text-center">Our Services</h5>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
        Provide The Best Offer <br /> According To Your Needs
      </h3>
      
      <div className="mt-8">
        {/* Service Blocks */}
        {[
          { title: "Software Product Development", desc: "Software product development is the process of designing, building, testing, and maintaining software to meet user needs and business goals." },
          { title: "ERP Systems", desc: "ERP systems integrate and automate core business processes like finance, HR, and supply chain on a centralized platform." },
          { title: "Intelligent Infrastructure Solution", desc: "An Intelligent Infrastructure Solution uses AI, IoT, and cloud computing to enhance infrastructure efficiency, security, and scalability." },
          { title: "In-House Products", desc: "In-house products are software or solutions developed and maintained internally to meet a company's needs or strategic goals." },
          { title: "Technology Consultancy", desc: "Technology consultancy provides expert guidance to optimize processes, improve efficiency, and drive innovation." },
          { title: "Support and Troubleshooting", desc: "Support and troubleshooting focus on diagnosing and resolving technical issues to ensure system functionality and user satisfaction." },
        ].map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row border-b md:p-6 p-4 items-start md:items-center hover:bg-[#f5f4f8] hover:rounded-xl border-b-[#ccc9d2] gap-4 md:gap-8 transition-all duration-300 ease-in-out"
          >
            <p className="text-[#5d5968] text-[14px] md:text-base lg:text-lg text-center md:text-left w-full md:w-[60%] lg:w-[50%]">
              {service.desc}
            </p>
            <h4 className="ml-auto text-[#3a3645] font-bold text-[16px] md:text-xl lg:text-2xl text-center md:text-left w-full md:w-[40%] lg:w-[50%]">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
