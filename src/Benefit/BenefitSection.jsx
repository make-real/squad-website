import React from "react";
import money from "../assets/money.svg";
import box from "../assets/box.svg";
import heart from "../assets/heart.svg";
import globe from "../assets/globe.svg";
import benefitImag from "../assets/benefitImg.svg";

function BenefitSection() {
  const benefitSectionData = [
    {
      image: money,
      title: "Post Project",
      description: "Build a shortlist of agencies to evaluate or contact.",
    },
    {
      image: box,
      title: "Find & hire",
      description:
        "Share your project with agencies using this simple briefing template.",
    },
    {
      image: heart,
      title: "Award & pay",
      description: "Examples of what real briefs and budgets look like.",
    },
    {
      image: globe,
      title: "Work & approves",
      description:
        "Get recommendations from people who have worked with agencies.",
    },
  ];
  return (
    <section className="benefit__section relative overflow-hidden">
      <div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-y-10 md:gap-y-10 lg:py-14 px-10">
        <div className="hidden lg:flex absolute top-10 -right-10 overflow-hidden">
          <img src={benefitImag} alt="" />
        </div>
        {benefitSectionData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-5 items-start justify-between"
          >
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="flex max-w-xs mx-0 flex-col gap-y-2 items-start justify-start">
              <h2 className="font-bold text-xl text-black">{item.title}</h2>
              <p className="font-medium text-sm text-slate-400/80">
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
