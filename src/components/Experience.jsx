import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Sql Intern",
      company: "Timing Technology",
      period: "2023 - 2023",
      description: [
        "Trained in database administration activities, including SQL and NoSQL databases",
"Experience with writing and optimizing SQL queries",
"Used SQL Workbench as a developer tool with SQL Server and Oracle databases",
"Performed ETL tasks and routine database maintenance",
"Worked with large data sets and utilized MongoDB for NoSQL storage",
"Gained experience with AWS Cloud9 and used Jira for sprint planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;