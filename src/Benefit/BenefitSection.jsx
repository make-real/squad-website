import React from "react";
import money from "../assets/feature-icon/icon-1.png";
import box from "../assets/feature-icon/icon-2.png";
import heart from "../assets/feature-icon/icon-3.png";
import globe from "../assets/feature-icon/icon-4.png";
import benefitImag from "../assets/shots/feature.png";

function BenefitSection() {
  const benefitSectionData = [
    {
      image: money,
      title: "Simplify Task Management",
      description: "Achieve Team Goals Faster with Our User-Friendly Task Manager.",
    },
    {
      image: box,
      title: "Streamlined File Management",
      description:
        "Effortlessly Share and Access Documents Across Your Squad",
    },
    {
      image: heart,
      title: "Effortless Communication",
      description: "Seamless Project Chat, Task Chat, and One-on-One Messaging and Meetings.",
    },
    {
      image: globe,
      title: "Simple Meeting Management",
      description:
        "Effortlessly Schedule and Manage Meetings with Anyone",
    },
  ];
  return (
    <section className="overflow-hidden benefit__section">
      <div className="text-black text-left max-w-4xl pt-16 pb-5 px-5 mx-auto font-dela text-2xl font-normal leading-[113.3%]">Features</div>

      <div className="relative grid max-w-4xl px-5 py-10 mx-auto md:grid-cols-2 gap-y-10 md:gap-y-10 lg:py-14">
        <div className="absolute top-0 hidden overflow-hidden lg:block -right-24">
          <div className="flex items-center justify-center gap-3 py-[14px] px-[28px] bg-[#FDFDFD] rounded-md shadow-md">
              <div className="">
                <p className="text-[#FB397F] text-lg font-monrope font-bold">Try for free</p>
                <p className="text-[#242424] font-monrope font-semibold">*No credit card required</p>
              </div>
              <a href="https://app.betasquad.io/" onClick={()=> {logEvent(analytics, 'button_click', { action: 'Try for free' });}} className="flex w-[58px] h-[58px] justify-center items-center rounded-full bg-[#FB397F]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                <path d="M0.926392 6.57024H14.1615L11.0125 9.67222L12.3488 11L17.9264 5.50572L12.3488 0L11.0125 1.32778L14.1499 4.40687H0.926392V6.57024Z" fill="white"/>
                </svg>
              </a>
          </div>
        </div>
        <img src={benefitImag} alt="" className="absolute top-40 -right-72 h-[192px] rounded-xl hidden overflow-hidden lg:block"/>

        {benefitSectionData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between gap-y-5 font-dm-sans"
          >
            <div>
              <img src={item.image} alt="" className="h-[51px]"/>
            </div>
            <div className="flex flex-col items-start justify-start max-w-xs mx-0 gap-y-2">
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-sm font-medium text-slate-400/80">
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
