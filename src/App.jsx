import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto pt-20 px-4 sm:px-8 lg:px-20 xl:px-40">
        <HeroSection />
        <FeatureSection />
        <Work />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
