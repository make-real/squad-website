import axios from "axios";
import { logEvent } from "firebase/analytics";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../Navbar";
import ellipse1 from "../assets/ellipse/Ellipse-1.png";
import ellipse2 from "../assets/ellipse/Ellipse-2.png";
import ellipse3 from "../assets/ellipse/Ellipse-3.png";
import ellipse4 from "../assets/ellipse/Ellipse-4.png";
import heroImage1 from "../assets/shots/shot-1.png";
import heroImage2 from "../assets/shots/shot-2.png";
import heroImage3 from "../assets/shots/shot-3.png";
import heroImage4 from "../assets/shots/shot-4.png";
import { analytics } from "../main";

function HeroSection() {
  const [email, setEmail] = useState("");

  const handleButtonClick = async () => {
    logEvent(analytics, "click");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }
    try {
      const response = await axios.post(
        "https://squad-gguk.onrender.com/api/public/email-newsletters",
        { email }
      );
      // console.log('status:', response.data);

      if (response?.data?.message) {
        window.location.href = "https://app.trysquad.today/";
      }
    } catch (error) {
      // console.error('error:', error.response.data.issue.email);
      if (error?.response?.data?.issue?.email) {
        window.location.href = "https://app.trysquad.today/";
      }
    }
  };

  return (
    <div className="hero">
      <Navbar />
      <div className="flex flex-col items-center justify-center max-w-5xl px-10 mx-auto mb-10 main-hero-section gap-y-2 py-4 md:px-10 xl:px-0">
        <div className="flex flex-col hero-content lg:px-5 gap-y-5">
          <p className="mx-auto mt-8 text-sm font-semibold text-center text-white tag">
            ✨Your AI Task Manager✨
          </p>
          <h1 className="text-black text-center heroTitleFont leading-[1.133] text-4xl lg:text-4lg xl:text-6xl">
            Squad AI <span className="text-[#FB397F]"> Automate </span> your
            team's task Management.
          </h1>
          <p className="text-m lg:text-lg mx-auto md:max-w-m md:mx-auto lg:max-w-xl text-[#000] text-center">
            {/* From now on you just input the list of task, AI creates a Title, Description,
            posible solutions, estimate time, assign task to teams and do more. */}
            - "Be honest, do you really have the time to manage all the task for
            your team. 🤔 If not then Squad AI is the perfect solution for you.
            👍 Give it a try - you will thank me later. 🙏"
          </p>
          <div className="flex items-center justify-center w-full max-w-lg mx-auto flex-col gap-y-2 md:flex-row input-form lg:justify-start gap-x-1 lg:gap-x-5 mt-2">
            <div className="w-full">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none bg-[#F7F7F7] font-dm-sans ring-2 ring-[#FB397F]"
              />
            </div>
            <button
              onClick={handleButtonClick}
              className="bg-[#FB397F] text-white w-1/3 hover:shadow-lg min-w-fit border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3"
            >
              Try Now
            </button>
          </div>
          <h4 className="text-[14px] text-center text-black font-dm-sans">
            *No Credit Card Required.
          </h4>
          {/* user  */}
          <div className="relative flex flex-col items-center justify-center gap-2 mx-auto mt-2 mb-10 md:items-start md:flex-row md:gap-2">
            <div className="flex items-start -space-x-3 mt-13">
              <img
                src={ellipse2}
                alt=""
                className="relative z-10 w-10 h-10 border-2 border-white rounded-full bg-[#4DA8CC] bg-cover bg-center bg-no-repeat"
              />
              <img
                src={ellipse1}
                alt=""
                className="relative z-10 w-10 h-10 border-2 border-white rounded-full bg-[#F9CF7F] bg-cover bg-center bg-no-repeat"
              />
              <img
                src={ellipse3}
                alt=""
                className="relative z-10 w-10 h-10 border-2 border-white rounded-full bg-[#F09B83] bg-cover bg-center bg-no-repeat"
              />
              <img
                src={ellipse4}
                alt=""
                className="relative z-10 w-10 h-10 border-2 border-white rounded-full bg-[#E6BF9F] bg-cover bg-center bg-no-repeat"
              />
              <div className="relative z-10 w-10 h-10 rounded-full border-2 border-white bg-[#E7EAFF] flex items-center justify-center">
                <p className="text-[9px] font-bold text-center text-blue-500 font-inter">
                  157+
                </p>
              </div>
            </div>
            <p className="text-[13px] text-center md:text-start md:text-[14px] font-medium font-dm-sans">
              <span className="text-black">More than 157+</span>{" "}
              <span className="text-black text-opacity-75">
                users are enjoying the
              </span>{" "}
              <span className="text-[#FB397F]">Squad AI</span>
              <span className="text-black text-opacity-75">, </span>
              <span className="inline text-black text-opacity-75 md:block">
                and they're in love! 💕
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto overflow-x-clip">
        <div className="absolute w-[96%] h-full bg-white bg-opacity-80 -z-10 -top-[15px] left-[50%] -translate-x-1/2 rounded-2xl"></div>
        <div className="absolute w-[92%] h-full bg-white bg-opacity-50 -z-10 -top-[30px] left-[50%] -translate-x-1/2 rounded-2xl"></div>
        <div className="absolute w-[88%] h-full bg-white bg-opacity-20 -z-10 -top-[45px] left-[50%] -translate-x-1/2 rounded-2xl"></div>
        <div className="p-10 mx-auto rounded-none bg-gradient-to-r from-blue-300 to-red-300 lg:rounded-2xl">
          <div className="flex gap-10">
            <img src={heroImage1} alt="" className="h-[192px] rounded-xl" />
            <img src={heroImage2} alt="" className="h-[192px] rounded-xl" />
            <img src={heroImage3} alt="" className="h-[192px] rounded-xl" />
            <img src={heroImage2} alt="" className="h-[192px] rounded-xl" />
            <img src={heroImage4} alt="" className="h-[192px] rounded-xl" />
          </div>
        </div>
        <div className="absolute -top-10 -z-20 left-[50%] -translate-x-1/2 h-72 w-72 bg-[#AE92FE] filter blur-[90px] rounded-full"></div>
      </div>
    </div>
  );
}

export default HeroSection;
