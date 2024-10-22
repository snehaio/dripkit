import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold">Dripkit</div>
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 underline-on-hover"
                href="#"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900 underline-on-hover" href="#">
                Logo
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="#">
                Forum
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded sign-in-btn hover:bg-purple-600 hover:text-white">
              Sign In
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded create-account-btn hover:bg-white hover:text-black transform hover:scale-110">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
