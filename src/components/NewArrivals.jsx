import React from 'react';

const NewArrivals = () => {
  const arrivals = [
    { title: 'Jacket Tops', imgSrc: 'https://storage.googleapis.com/a1aa/image/57dYlPKSO04pKdf8m0RZBPEC3TlsgfeftooGpgTFhF91RElOB.jpg' },
    { title: 'Sweatshirts', imgSrc: 'https://storage.googleapis.com/a1aa/image/1w6l1PBeAGy1TK5IQGdjqXQ38sp4fDMmEhaUv9DAtK7nERpTA.jpg' },
    { title: 'Shirts', imgSrc: 'https://storage.googleapis.com/a1aa/image/A2hTW1PIeXW2GKtXSXj7PueXWC0hRbczAuqTrBFZ8QvYERpTA.jpg' },
    { title: 'Sweaters', imgSrc: 'https://storage.googleapis.com/a1aa/image/8X8RY1qkfYSSLSF8tGFSOdLiXoAiH9yb6P5nYRAzsSJNio0JA.jpg' },
    { title: 'Pants', imgSrc: 'https://storage.googleapis.com/a1aa/image/1uWC53iRcjK6FRqVBL6JmzQLKPhP4QDn2phXHT6zGUyGRU6E.jpg' },
    { title: 'Complete Sets', imgSrc: 'https://storage.googleapis.com/a1aa/image/1uWC53iRcjK6FRqVBL6JmzQLKPhP4QDn2phXHT6zGUyGRU6E.jpg' },
    { title: 'Hats and Accessories', imgSrc: 'https://storage.googleapis.com/a1aa/image/j7gIwZz9K7rBANuLA799sCeGJyFyJWTzdfy8KmAwHYxhERpTA.jpg' },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl header-text mb-12">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((arrival, index) => (
            <div key={index} className="relative expand-on-hover hover:transform hover:scale-110 transition duration-300">
              <img src={arrival.imgSrc} alt={arrival.title} className="w-full h-64 object-cover" />
              <div className="mt-4">{arrival.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
