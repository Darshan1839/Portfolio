import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango } from "react-icons/si";
import WeatherApp from '../../assets/Images/WeatherApp.png';
import Todolist from "../../assets/Images/ToDoListReact.png";
import JobPortal from "../../assets/Images/JobPortal.png";
import profileImg from "../../assets/Images/5312.jpg"; // Replace with your image

const Home = () => {
  const skills = [
    { icon: <FaHtml5 className="text-red-500" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
    { icon: <FaJs className="text-yellow-500" />, label: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-teal-500" />, label: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-500" />, label: "Bootstrap" },
    { icon: <SiMysql className="text-blue-800" />, label: "MySQL" },
    { icon: <FaPython className="text-yellow-400" />, label: "Python" },
    { icon: <SiDjango className="text-green-500" />, label: "Django" },
  ];

  const projects = [
    {
      title: "JobPortal",
      description: "A FullStack JobPortal Website with modern and responsive design.",
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

  return (
    <main className="bg-gray-100 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row   items-center justify-between px-8 md:px-20 py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-600">Darshan</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl text-white">
            A full-stack web developer passionate about crafting high-performance, scalable, and responsive applications.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={profileImg}
            alt="Darshan"
            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-8 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-400">About Me</h2>
          <p className="text-lg mb-8 leading-relaxed">
            I'm <span className="text-blue-400 font-bold">Darshan</span>, a <strong>full-stack developer</strong> with hands-on experience in both frontend and backend. I specialize in React, Tailwind CSS, Python, and Django. I enjoy building creative, scalable solutions and intuitive UIs. 🚀
          </p>

          <h3 className="text-3xl font-bold mb-6">My Toolkit 🛠</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-5xl justify-items-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center text-center transition transform hover:scale-110">
                {skill.icon}
                <span className="mt-2 text-sm text-white">{skill.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#projects"
            className="inline-block px-6 py-3 mt-10 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 shadow-lg transition hover:scale-105"
          >
            Explore My Work 🔥
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 md:px-20 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects 🎨</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-white p-6 rounded-xl shadow-lg border hover:shadow-xl hover:scale-105 transition"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h4 className="text-xl font-bold text-blue-700">{project.title}</h4>
              </a>
              <p className="text-white-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 shadow-lg transition hover:scale-105"
          >
            See All Projects 🔥
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
