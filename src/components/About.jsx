import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="profile.jpg"
              alt="Professional workspace" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate software developer with a strong foundation in computer science and a keen interest in building innovative solutions. My expertise lies in full-stack development, with a focus on creating efficient and scalable applications.
            </p>
            <p className="text-lg text-gray-600">
              I thrive in collaborative environments and enjoy tackling complex problems. My goal is to contribute to meaningful projects that make a positive impact while continuously learning and growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;