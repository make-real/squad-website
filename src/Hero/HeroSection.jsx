import React from "react";
import Navbar from "../Navbar";
import heroImage1 from "../assets/shots/shot-1.png";
import heroImage2 from "../assets/shots/shot-2.png";
import heroImage3 from "../assets/shots/shot-3.png";
import heroImage4 from "../assets/shots/shot-4.png";
import ellipse1 from "../assets/ellipse/Ellipse-1.png"
import ellipse2 from "../assets/ellipse/Ellipse-2.png"
import ellipse3 from "../assets/ellipse/Ellipse-3.png"
import ellipse4 from "../assets/ellipse/Ellipse-4.png"


function HeroSection() {
  return (
    <div className="hero">
      <Navbar />
      <div className="flex flex-col items-center justify-center max-w-5xl px-10 mx-auto main-hero-section gap-y-2 py-14 md:px-10 xl:px-0">
        <div className="flex flex-col hero-content lg:px-5 gap-y-5">
          <p className="mx-auto text-sm font-semibold text-center text-white tag">
          ✨The World's Simplest Team Management App✨
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
                className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none bg-[#F7F7F7] font-dm-sans focus:ring-2 focus:ring-[#FB397F]"
              />
            </div>
            <button className="bg-[#FB397F] text-white w-1/3 hover:shadow-lg min-w-fit border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
              Try it out
            </button>
          </div>
          {/* user  */}
          <div className="relative flex justify-center gap-12 mx-auto my-10 md:gap-2">
              <div className="flex items-start -space-x-3 mt-13">
                  <img src={ellipse1} alt="" className="relative z-10 w-7 h-7 border-2 border-white rounded-full bg-[#F9CF7F] bg-cover bg-center bg-no-repeat"/>
                  <img src={ellipse2} alt="" className="relative z-10 w-7 h-7 border-2 border-white rounded-full bg-[#4DA8CC] bg-cover bg-center bg-no-repeat"/>
                  <img src={ellipse3} alt="" className="relative z-10 w-7 h-7 border-2 border-white rounded-full bg-[#F09B83] bg-cover bg-center bg-no-repeat"/>
                  <img src={ellipse4} alt="" className="relative z-10 w-7 h-7 border-2 border-white rounded-full bg-[#E6BF9F] bg-cover bg-center bg-no-repeat"/>
                  <div class="relative z-10 w-7 h-7 rounded-full border-2 border-white bg-[#E7EAFF] flex items-center justify-center"><p className="text-[9px] font-bold text-center text-blue-500 font-inter">100+</p></div>
              </div>
              <p className="text-[10px] font-medium font-dm-sans"><span className="text-black">More than 100+</span> <span className="text-black text-opacity-50">users are enjoying the</span> <span className="text-[#FB397F]">free trial</span><span className="text-black text-opacity-50">, </span><span className="inline text-black text-opacity-50 md:block">and they're loving the benefits!</span></p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl gap-5 p-10 mx-auto overflow-hidden rounded-none bg-gradient-to-r from-blue-300 to-red-300 lg:rounded-2xl">
        <div className="flex gap-10">
        <img src={heroImage1} alt="" className="h-[192px] rounded-xl"/>
        <img src={heroImage2} alt="" className="h-[192px] rounded-xl"/>
        <img src={heroImage3} alt="" className="h-[192px] rounded-xl"/>
        <img src={heroImage2} alt="" className="h-[192px] rounded-xl"/>
        <img src={heroImage4} alt="" className="h-[192px] rounded-xl"/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
