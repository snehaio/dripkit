import React from 'react';

const WhatWeOffer = () => {
  const offers = [
    { title: 'THRIFT TREASURES', imgSrc: 'thrift-img-url' },
    { title: 'VINTAGE CLOTHING', imgSrc: 'vintage-img-url' },
    { title: 'HANDMADE PICKS', imgSrc: 'handmade-img-url' },
    { title: 'PANTS', imgSrc: 'pants-img-url' },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl header-text mb-12">WHAT WE OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="relative expand-on-hover hover:transform hover:scale-110 transition duration-300">
              <img src={offer.imgSrc} alt={offer.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center offer-overlay">
                <h3 className="text-white text-xl">{offer.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
