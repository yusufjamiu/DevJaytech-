import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-2 px-4 flex justify-center z-10 mt-4 mb-5">
      <div className="bg-gray-100 py-1 px-1 rounded-full flex">
       <a href="/" className="px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300">
        Home
       </a>
       <a href="/Profile" className="px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300">
        Profile
       </a>
       <a href="/Contact" className="px-4 py-2 rounded-full hover:bg-white hover:text-gray-800 transition-colors duration-300">
        Contact
       </a>
      </div>
    </nav>
  );
};

export default Navbar;