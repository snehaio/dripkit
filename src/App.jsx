import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeOffer from './components/WhatWeOffer';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[url('https://storage.googleapis.com/a1aa/image/QeZ0sYfBWtoMeJdTRM65ggJylfyg026xeBnGALHhi7DxjIKdC.jpg')]">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default App;
