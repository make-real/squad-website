import React from "react";

function Newsletter() {
  return (
    <section className="cta__section max-w-4xl mx-auto py-24 px-5 lg:px-0">
      <div
        className=" bg-white p-10 rounded-2xl
       mx-auto flex flex-col gap-y-5 justify-center items-center"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-xl mx-auto text-black text-center">
          Be the first to know about new features, special offers, and more.
        </h3>
        <p className="text-slate-500/70 font-[400] max-w-sm text-base mx-auto text-center">
          We will get back to you when we are ready to explore your new world
        </p>
        <div className="input-form max-w-2xl mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center justify-center lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-5 lg:py-3 bg-[#fcfcfc] placeholder:text-sm placeholder:font-semibold placeholder:text-black rounded-lg w-full focus:outline-none ring-1 ring-[#0A071B] focus:ring-2 focus:ring-[#0A071B]"
            />
          </div>
          <button className="bg-[#304EE6] text-white w-full md:w-1/2 hover:shadow-lg hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-sm md:text-base lg:text-base rounded-lg py-2 px-5 lg:py-3">
            Send an Email
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
