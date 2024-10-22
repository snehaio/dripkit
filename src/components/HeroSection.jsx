import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl hero-title italic font-mono hover:transform hover:scale-110 transition duration-300">
          DRIPKIT
        </h1>
        <p className="mt-4 text-lg hero-subtitle hover:transform hover:scale-110 transition duration-300">
          Vintage finds, handmade treasures, and preloved items from around the world
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded shop-now-btn transform hover:scale-110 hover:bg-black hover:text-white transition-all duration-300">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
