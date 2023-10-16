import React from "react";
import Navbar from "../Navbar";
import heroImage1 from "../assets/heroImage-1.svg";
import heroImage2 from "../assets/heroImage-2.svg";
import heroImage3 from "../assets/heroImage-3.svg";

function HeroSection() {
  return (
    <div className="hero">
      <Navbar />
      <div className="flex flex-col items-center justify-center max-w-5xl px-10 mx-auto main-hero-section gap-y-2 py-14 md:px-10 xl:px-0">
        <div className="flex flex-col hero-content lg:px-5 gap-y-5">
          <p className="mx-auto text-sm font-semibold text-white tag">
            FEATURE FLAG GOES HERE
          </p>
          <h1 className="text-black text-center font-dela text-2xl md:text-6xl font-normal leading-[1.133]">
            The only <span className="text-[#FB397F]"> Budget-friendly</span>{" "}
            platform for your team
          </h1>
          <p className="text-sm lg:text-lg max-w-[16rem] mx-auto md:max-w-xl md:mx-auto lg:max-w-2xl text-[#828282] text-center">
            Collaborate, Manage Tasks, and Boost Productivity – All in One
            Solution.
          </p>
          <div className="flex items-center justify-center w-full max-w-xl mx-auto input-form lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none  focus:ring-2 focus:ring-[#FB397F]"
              />
            </div>
            <button className="bg-[#FB397F] text-white w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
              Try it out
            </button>
          </div>
          {/* user  */}
          <div>
            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-6xl gap-5 p-10 mx-auto overflow-hidden rounded-none bg-gradient-to-r from-blue-600 to-red-300 lg:rounded-2xl">
        <img src={heroImage1} alt="" />
        <img src={heroImage2} alt="" />
        <img src={heroImage3} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
