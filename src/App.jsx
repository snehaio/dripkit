import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeOffer from './components/WhatWeOffer';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default App;
