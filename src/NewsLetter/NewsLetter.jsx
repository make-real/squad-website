import axios from "axios";
import React, { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleButtonClick = async () => {
    // console.log('button clicked');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error('Enter a valid email address');
      return;
    }
    try {
      const response = await axios.post('https://api.betasquad.io/api/public/email-newsletters', { email });
      // console.log('status:', response.data);

      if (response?.data?.message) {
        window.location.href = 'https://app.betasquad.io/'; 
      }

    } catch (error) {
      // console.error('error:', error.response.data.issue.email);
      if (error?.response?.data?.issue?.email) {
        window.location.href = 'https://app.betasquad.io/'; 
      }
    }
  };

  return (
    <section className="max-w-4xl px-5 py-24 mx-auto cta__section lg:px-0">
      <div
        className="flex flex-col items-center justify-center p-10 mx-auto bg-white rounded-2xl gap-y-5"
      >
        <h3 className="max-w-4xl mx-auto text-2xl font-bold text-center text-black md:text-3xl lg:text-4xl font-dela">
          Collaborate, Manage Tasks, and Boost Productivity – All in One Solution.
        </h3>
       
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto input-form md:flex-row gap-y-2 lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
          <div className="w-full">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="py-2 px-5 lg:py-3 placeholder:text-sm rounded-lg w-full focus:outline-none bg-[#F7F7F7] font-dm-sans focus:ring-2 focus:ring-[#FB397F]"
            />
          </div>
          <button onClick={handleButtonClick} className="bg-[#FB397F] text-white min-w-fit w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-xs lg:text-base rounded-lg px-5 py-3">
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
