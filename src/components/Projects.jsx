import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      link: "#"
    },
    {
      title: "Blood-Bank Management System",
      description: "Enabled donors to register and recipients to search for required blood groups",
      technologies: ["HTML", "JavaScript", "CSS", "MySQL"],
      link: "#"
    },
    {
      title: "Bus Reservation Web Page",
      description: "Developed a web page for online bus ticket reservations, storing booking details in a database and Implemented stored procedures and triggers.",
      technologies: ["Java", "CSS", "JavaScript", "MySQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;