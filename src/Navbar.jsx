import React from "react";
import squadLogo from '../src/assets/squad.png'
import user from '../src/assets/mahbub.png'
import twitter from '../src/assets/twitter.png'

const Navbar = () => {
  return (
    // <div className="container w-full max-w-[1200px] mx-auto pt-[40px]">
    <div className="max-w-5xl px-10 pt-10 pb-4 mx-auto md:py-10 md:px-32">
      <div className="flex items-center justify-between py-[6px] px-[10px] rounded-lg bg-pink-400 bg-opacity-[.2] shadow-lg">
        <div className="flex items-center justify-center gap-[5px]">
            <img src={squadLogo} alt="Squad logo" className="h-[17px] w-[17px]"/>
            <p className="font-lexend text-base font-semibold text-[#0D1282]">Squad</p>
        </div>
        <div className="flex items-center justify-center gap-[5px]">
            <img src={user} alt="Mahbub" className="h-[17px] w-[17px] rounded-full"/>
            <p>Follow me on</p>
            <img src={twitter} alt="Twitter" className="h-[12px] w-[12px] text-black text-center font-inter text-xs font-semibold"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
