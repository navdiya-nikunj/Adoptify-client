"use client";
import HeroSection from './HeroSection';
import Timeline from './HowItWorksSection';
import SuccessStoriesSection from './SuccessStoriesSection';
import WhyChooseAdoptify from './WhyChooseAdoptify';

const LandingPage = () => {
  
  return (
    <div >
      {/* Enhanced Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <WhyChooseAdoptify/>

      {/*How it works section*/}
      <Timeline/>

      {/*Sucess Stories*/}
      <SuccessStoriesSection/>
    </div>
  );
};



export default LandingPage;