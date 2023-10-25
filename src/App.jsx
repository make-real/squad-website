import React from "react";
import { Toaster } from 'react-hot-toast';
import BenefitSection from "./Benefit/BenefitSection";
import Footer from "./Footer/Footer";
import HeroSection from "./Hero/HeroSection";
import Newsletter from "./Newletter/Newsletter";

function App() {
  return (
    <div className="idk__30 bg-[#F5F5F5]">
      <Toaster/>
      <HeroSection />
      <BenefitSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
