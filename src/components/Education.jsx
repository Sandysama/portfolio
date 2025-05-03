import React from 'react';

function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      school: "University of South Dakota",
      period: "2024 - 2025",
      details: "Focused on advanced software development and computer science principles"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-blue-600 mb-2">{edu.school}</p>
              <p className="text-gray-500 mb-4">{edu.period}</p>
              <p className="text-gray-600">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;