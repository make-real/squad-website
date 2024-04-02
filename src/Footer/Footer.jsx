import React from "react";
import mRealLogo from "../assets/make-real.png";
import squadLogo from "../assets/squad.png";

function Footer() {
  return (
    <section className="px-5 footer__section lg:px-10">
      <div className="max-w-3xl pb-5 mx-auto">
        {/* <div className="flex items-center justify-between gap-x-5">
          <div className="flex items-center header-logo gap-x-2">
            <img src={websiteWhiteLogo} alt="" />
            <h2 className="text-base font-bold text-black">
              Dark<span className="font-[400]">mode</span>
            </h2>
          </div>
          <div className="flex items-center justify-end w-full pl-10">
            <div>
              <ul className="flex items-center justify-center text-black gap-x-10">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-between py-[6px] px-[10px] ">
          <a href="https://trysquad.today/">
            <div className="flex items-center justify-center gap-[5px]">
              <img
                src={squadLogo}
                alt="Squad logo"
                className="h-[17px] w-[17px]"
              />
              <p className="font-lexend text-base font-semibold text-[#0D1282]">
                Squad AI
              </p>
            </div>
          </a>
          <a
            href="https://makereal.io/"
            target="_blank"
            className="flex items-center justify-center gap-[5px]"
          >
            <img
              src={mRealLogo}
              alt="Mahbub"
              className="h-[17px] w-[17px] rounded-full"
            />
            <p className="text-[#3D5059] font-inter text-base font-semibold">
              makereal.io
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
