import React from "react";
import WeatherApp from '../../assets/Images/WeatherApp.png';
import Todolist from '../../assets/Images/ToDoListReact.png';
import JobPortal from '../../assets/Images/JobPortal.png';
const projects = [
  {
    title: "JobPortal",
    description: "A FullStack JobPortal Website with modern and responsive design",
    image: JobPortal,
    url: "https://jobportal-1-io1y.onrender.com/",
  },
  {
    title: "WeatherApp",
    description: "A modern, responsive WeatherApp built with React & Bootstrap.",
    image: WeatherApp,
    url: "https://weather-search-alpha.vercel.app/",
  },
  {
    title: "TodoListReact",
    description: "A modern, responsive TodolistApp built with React & Bootstrap.",
    image: Todolist,
    url: "https://darshan1839.github.io/TODOLISTREACTApp/",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-wide text-blue-400">
          My Projects 🚀
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Here are some of the projects I've worked on! Stay tuned for more exciting updates. 🔥
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition transform">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h4 className="text-xl font-bold">{project.title}</h4>
              </a>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-lg font-bold bg-gray-800 py-4 px-6 rounded-lg shadow-lg">
          More Projects Coming Soon! 🚧 Stay Tuned!
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;