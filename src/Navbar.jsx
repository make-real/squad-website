import React from "react";
import user from "../src/assets/mahbub.png";
import squadLogo from "../src/assets/squad.png";
import twitter from "../src/assets/twitter.png";

const Navbar = () => {
  return (
    // <div className="container w-full max-w-[1200px] mx-auto pt-[40px]">
    <div className="max-w-5xl px-10 pt-10 pb-4 mx-auto md:py-10 md:px-32">
      <div className="flex items-center justify-between py-[6px] px-[10px] rounded-lg bg-pink-400 bg-opacity-[.15] shadow-lg">
        <div className="flex items-center justify-center gap-[5px]">
          <img src={squadLogo} alt="Squad logo" className="h-[17px] w-[17px]" />
          <p className="font-lexend text-base font-semibold text-[#0D1282]">
            Squad AI
          </p>
        </div>
        <a
          href="https://twitter.com/MakeRealApp"
          target="_blank"
          className="flex items-center justify-center gap-[5px]"
        >
          <img
            src={user}
            alt="Mahbub"
            className="h-[18px] w-[18px] border-2 border-white border-opacity-50 rounded-full"
          />
          <p>Follow me on</p>
          <img
            src={twitter}
            alt="Twitter"
            className="h-[16px] w-[16px] text-black text-center font-inter text-xs font-semibold"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
