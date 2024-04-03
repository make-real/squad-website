import { logEvent } from "firebase/analytics";
import React from "react";
import growth from "../assets/feature-icon/icons8-growth-100.png";
import teams from "../assets/feature-icon/icons8-teams-100.png";
import performance from "../assets/feature-icon/icons8-performance-100.png";
import ai from "../assets/feature-icon/icons8-ai-96.png";

import benefitImag from "../assets/shots/feature.png";
import { analytics } from "../main";

function BenefitSection() {
  const benefitSectionData = [
    {
      image: teams,
      title: "Small Teams & Indie Hackers' Savior ✨",
      description:
        "If you run a design/development/VA agencies then Squad AI is the game changer for you.",
    },
    {
      image: growth,
      title: "Unlock Your Team's Full Potential 🌟",
      description:
        "Squad AI's goal is to maximize team productivity by adding extra level of clarity to the task",
    },
    {
      image: performance,
      title: "Visibility for Your Entire 🗓️",
      description:
        "Squad AI shows you the real matrics. You know who is doing the work and who just wasting your time",
    },
    {
      image: ai,
      title: "Supercharge Your Team with GPT-4 💪",
      description:
        "Does your team asks for gpt-4. Now everyone on your team can use GPT-4 with Squad AI.",
    },
  ];
  return (
    <section className="overflow-hidden benefit__section">
      <div className="text-black text-center max-w-4xl pt-24 pb-10 px-5 mx-auto heroTitleFont text-4xl leading-[113.3%]">
        🏆 The Ultimate Tool Your Team Has Been Searching For
      </div>

      <div className="relative grid max-w-4xl px-5 py-10 mx-auto md:grid-cols-2 gap-y-14 md:gap-y-10 lg:py-14 gap-x-10">
        {/* <div className="absolute -top-12 hidden overflow-hidden lg:block -right-24">
          <div className="flex items-center justify-center gap-3 py-[14px] px-[28px] bg-[#FDFDFD] rounded-md shadow-md">
            <div className="">
              <p className="text-[#FB397F] text-lg font-monrope font-bold">
                Try for free
              </p>
              <p className="text-[#242424] font-monrope font-semibold">
                *Increase team productivity{" "}
                <span className="text-[#FB397F]">for real</span>
              </p>
            </div>
            <a
              href="https://app.trysquad.today/"
              onClick={() => {
                logEvent(analytics, "click");
              }}
              className="flex w-[58px] h-[58px] justify-center items-center rounded-full bg-[#FB397F]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path
                  d="M0.926392 6.57024H14.1615L11.0125 9.67222L12.3488 11L17.9264 5.50572L12.3488 0L11.0125 1.32778L14.1499 4.40687H0.926392V6.57024Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div> */}
        {/* <img
          src={benefitImag}
          alt=""
          className="absolute top-40 -right-72 h-[192px] rounded-xl hidden overflow-hidden lg:block"
        /> */}

        {benefitSectionData.map((item, index) => (
          <div
            key={index}
            className="flex-col items-start justify-between gap-y-5 gap-x font-dm-sans"
          >
            <div>
              <img src={item.image} alt="" className="h-[64px]" />
            </div>
            <div className="flex flex-col items-start justify-start max-w-s mx-0 gap-y-2 mt-4 ">
              <h2 className="text-xl text-[#000] font-bold">{item.title}</h2>
              <p className="text-m font-normal text-[#414141]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitSection;
