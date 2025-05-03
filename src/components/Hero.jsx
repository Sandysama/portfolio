import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm Sandeep Bodapati
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Software Developer | Tech Enthusiast
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Hero;