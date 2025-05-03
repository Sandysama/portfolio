import React from 'react';

function Skills() {
  const skills = {
    "Programming Languages": ["Python", "Java", "SQL"],
    "Web Technologies": ["HTML5", "CSS3", "Tailwind CSS"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code",],
    "Other": ["Problem Solving", "Team Collaboration", "Agile Methodology"]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;