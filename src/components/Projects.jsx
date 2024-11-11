import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description: "A responsive and interactive portfolio website showcasing my skills, projects, and contact information. Built with HTML, CSS, JavaScript, and deployed using GitHub Pages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/portfolio",
      thumbnail: "/project1.jpg" // Path to the thumbnail image
    },
    {
      name: "E-commerce Web App",
      description: "An e-commerce platform where users can browse products, add them to the cart, and proceed to checkout. The backend is built with Node.js and MongoDB, while the frontend is designed with React.",
      technologies: ["Node.js", "React", "MongoDB", "Express"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/username/ecommerce-app",
      thumbnail: "/project2.jpg" // Path to the thumbnail image
    },
    {
      name: "Task Management App",
      description: "A simple task management app that allows users to create, update, and delete tasks. Built with React for the frontend and Firebase for real-time database management.",
      technologies: ["React", "Firebase", "CSS"],
      liveLink: "https://example-taskmanager.com",
      githubLink: "https://github.com/username/task-manager",
      thumbnail: "/project3.jpg" // Path to the thumbnail image
    },
    {
      name: "Blog Application",
      description: "A full-stack blog application where users can create, read, update, and delete blog posts. The application is built using the MERN stack (MongoDB, Express, React, Node.js).",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "https://example-blog.com",
      githubLink: "https://github.com/username/blog-app",
      thumbnail: "/project1.jpg" // Path to the thumbnail image
    },
    {
      name: "Weather App",
      description: "A weather forecasting application that provides real-time weather updates based on the user's location. It uses the OpenWeather API to fetch data and is built with JavaScript and HTML.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      liveLink: "https://example-weatherapp.com",
      githubLink: "https://github.com/username/weather-app",
      thumbnail: "/project2.jpg" // Path to the thumbnail image
    }
  ];

  return (
    <div className="Project-container">
      <div className="Project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
