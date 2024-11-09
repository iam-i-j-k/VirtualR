import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
            VirtualR build tools
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {" "}
                for Developers
            </span>
        </h1>
        
        <p className='mt-8 sm:mt-10 text-base sm:text-lg text-center text-neutral-500 max-w-xl sm:max-w-3xl lg:max-w-4xl'>
            Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center my-8 sm:my-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-6 rounded-md text-white text-center'>
                Start for Free
            </a>
            <a href="#" className="py-3 px-6 rounded-md border text-center">
                Documentation
            </a>
        </div>
        
        <div className="flex flex-col md:flex-row mt-8 md:mt-10 justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
            <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-lg'>
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            
            <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-lg'>
                <source src={video2} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};

export default HeroSection;
