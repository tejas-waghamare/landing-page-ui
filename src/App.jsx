import React from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ExtraSection from "./components/ExtraSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth font-sans">
      <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
       
        <HeroSection />
        <Features />
        <HowItWorks />
        <ExtraSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default App;