import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDjango } from "react-icons/si";
import WeatherApp from '../../assets/Images/WeatherApp.png';
import Todolist from '../../assets/Images/ToDoListReact.png';
import JobPortal from '../../assets/Images/JobPortal.png';


const About = () => {
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
    { title: "JobPortal", description: "A FullStack JobPortal Website with modern and responsive design", image: JobPortal, url: "https://jobportal-1-io1y.onrender.com/" },
    { title: "WeatherApp", description: "A modern, responsive WeatherApp built with React & Bootstrap.", image: WeatherApp, url: "https://weather-search-alpha.vercel.app/" },
    { title: "TodoListReact", description: "A modern, responsive TodolistApp built with React & Bootstrap.", image: Todolist, url: "https://darshan1839.github.io/TODOLISTREACTApp/" },

  ];
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8 md:px-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* About Section */}
        <h2 className="text-5xl font-extrabold mb-6 tracking-wide text-blue-400">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Hi, I'm <span className="text-blue-400 font-bold">Darshan</span>, a **full-stack developer** with expertise in modern web technologies. I love crafting beautiful, high-performance applications! 🚀
        </p>

        {/* My Toolkit Section with Logos */}
        <h3 className="text-3xl font-bold mb-6">My Toolkit 🛠</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-5xl justify-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center text-center transition transform hover:scale-110">
              {skill.icon}
              <span className="mt-2 text-sm text-white">{skill.label}</span>
            </div>
          ))}
        </div>


        {/* CTA Button */}
        <button className="px-6 py-3 mt-8 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 shadow-lg transition hover:scale-105">
          <a href="#projects" target="_blank">Explore My Work 🔥</a>
        </button>

        {/* 🚀 Project Gallery */}
        <h3 className="text-3xl font-bold mt-12 mb-6" id="projects">Featured Projects 🎨</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition transform">
              <a href={project.url} target="_blank"><img src={project.image} alt={project.title} className="rounded-lg mb-4" /></a>
              <a href={project.url} target="_blank"><h4 className="text-xl font-bold">{project.title}</h4></a>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 mt-8 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 shadow-lg transition hover:scale-105">
          <a href="/projects" target="_blank">See All Projects 🔥</a>
        </button>

      </div>


    </section>
  );
};

export default About;   
