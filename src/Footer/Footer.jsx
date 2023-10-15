import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import websiteWhiteLogo from "../assets/website-logo-black.svg";

const icons = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <AiOutlineInstagram />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

function Footer() {
  return (
    <section className="footer__section px-5 lg:px-10">
      <div className="max-w-5xl mx-auto pb-5">
        <div className="flex items-center justify-between gap-x-5">
          <div className="header-logo flex items-center gap-x-2">
            <img src={websiteWhiteLogo} alt="" />
            <h2 className="text-black font-bold text-base">
              Dark<span className="font-[400]">mode</span>
            </h2>
          </div>
          <div className="flex items-center justify-end w-full pl-10">
            <div>
              <ul className="flex items-center justify-center gap-x-10 text-black">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
