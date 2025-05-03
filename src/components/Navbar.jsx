import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Sandeep Bodapati</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="about" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">About</Link>
            <Link to="experience" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Experience</Link>
            <Link to="skills" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Skills</Link>
            <Link to="projects" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Projects</Link>
            <Link to="education" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Education</Link>
            <Link to="resume" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Resume</Link>
            <Link to="contact" smooth={true} className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;