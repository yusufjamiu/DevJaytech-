import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-grey-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold mb-2">Let's work together</h2>
          <p className="text-gray-400 text-2xl">Get in touch</p>
        </div>
        <div className="flex justify-center mb-4 mt-40">
          <a href="x.com/bin__yussuff" className="mx-2 hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="instagram.com/bin_yussuff" className="mx-2 hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="bin_yussuff@outlook.com" className="mx-2 hover:text-gray-400">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="text-center">
          <p>&copy; Jaytech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;