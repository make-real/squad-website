import React from "react";

function Newsletter() {
  return (
    <section className="max-w-4xl px-5 py-24 mx-auto cta__section lg:px-0">
      <div
        className="flex flex-col items-center justify-center p-10 mx-auto bg-white rounded-2xl gap-y-5"
      >
        <h3 className="max-w-3xl mx-auto text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl font-dela">
          Be the first to know about new features, special offers, and more.
        </h3>
       
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto input-form md:flex-row gap-y-2 lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none bg-[#F7F7F7] font-dm-sans focus:ring-2 focus:ring-[#FB397F]"
            />
          </div>
          <button className="bg-[#FB397F] text-white min-w-fit w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
            Send an Email
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
