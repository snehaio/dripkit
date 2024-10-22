import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold mb-4">Dripkit</div>
        <div className="flex justify-center space-x-4 mb-4">
          <a className="hover:text-gray-400" href="#">Forum</a>
          <a className="hover:text-gray-400" href="#">Contact Us</a>
          <a className="hover:text-gray-400" href="#">FAQ</a>
        </div>
        <div>&copy; 2024 Dripkit. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
