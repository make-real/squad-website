import React from "react";
import Navbar from "../Navbar";
import heroImage1 from "../assets/heroImage-1.svg";
import heroImage2 from "../assets/heroImage-2.svg";
import heroImage3 from "../assets/heroImage-3.svg";

function HeroSection() {
  return (
    <div className="hero">
      <Navbar />
      <div className="main-hero-section max-w-5xl flex flex-col gap-y-2 items-center justify-center mx-auto py-14 px-10 md:px-10 xl:px-0">
        <div className="hero-content lg:px-5 flex flex-col gap-y-5">
          <p className="tag mx-auto text-white font-semibold text-sm">
            FEATURE FLAG GOES HERE
          </p>
          <h1 className="text-4xl text-black md:text-5xl xl:text-[60px] leading-[1.2] md:max-w-xl mx-auto text-center lg:max-w-3xl font-semibold">
            Best way to sell your digital product
          </h1>
          <p className="text-sm lg:text-lg max-w-[16rem] mx-auto md:max-w-xl md:mx-auto lg:max-w-2xl text-[#828282] text-center">
            Millions of smart entrepreneurs are choosing the right way
          </p>
          <div className="input-form max-w-xl mx-auto w-full flex items-center justify-center lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none ring-1 ring-[#0A071B] focus:ring-2 focus:ring-[#0A071B]"
              />
            </div>
            <button className="bg-[#304EE6] text-white w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
              Browser
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-red-300 flex items-center justify-center gap-5 p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <img src={heroImage1} alt="" />
        <img src={heroImage2} alt="" />
        <img src={heroImage3} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
