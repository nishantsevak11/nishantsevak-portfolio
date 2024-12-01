import React, { useEffect, useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';


const Projects = () => {

    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "Developed a platform where users can explore multiple free games across categories, view game overviews, screenshots,and be redirected to play",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            liveLink: "https://nishantsevak11.github.io/Games-Project/",
            githubLink: "https://github.com/nishantsevak11/Games-Project",
            thumbnail: "/project1.png" // Path to the thumbnail image
        },
        {
            name: "Personalised Color Palette website",
            description: "Built a web app for personalized color palette generation using React.js, CSS, and Tailwind CSS",
            technologies: ["React", "Talwind", "CSS", "Mirage API"],
            liveLink: "https://attyre-nishant-sevaks-projects.vercel.app/",
            githubLink: "https://github.com/nishantsevak11/Games-Project",
            thumbnail: "https://media.licdn.com/dms/image/D4D12AQEcrYJ5eJBgSQ/article-cover_image-shrink_720_1280/0/1680629329325?e=2147483647&v=beta&t=U-9tANxIZibZ5gDqQMIAlCy7GrgzGj-5EvayUXOpUrA" // Path to the thumbnail image
        },
        {
            name: "Spotify Clone",
            description: "A simple Spotify like app built with html , css and javascript play local musics with json data",
            technologies: ["HTML", "CSS", "Javascript"],
            liveLink: "https://example-taskmanager.com",
            githubLink: "https://github.com/username/task-manager",
            thumbnail: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Spotify_Logo_RGB_White-1.png" // Path to the thumbnail image
        },
        {
            name: "Rating Project",
            description: "A React project that allows users to rate and comment on different products. It uses React Router for navigation and React Context for state management.",
            technologies: ["React", "React Router", "React Context"],
            liveLink: "https://rating-project-gamma.vercel.app/",
            githubLink: "https://rating-project-gamma.vercel.app",
            thumbnail: "https://askcaddle.com/wp-content/uploads/2024/03/Why-Ratings-and-Reviews-are-Important-for-Your-Business-featured-image.jpg" // Path to the thumbnail image
        },
        // {
        //   name: "Weather App",
        //   description: "A weather forecasting application that provides real-time weather updates based on the user's location. It uses the OpenWeather API to fetch data and is built with JavaScript and HTML.",
        //   technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
        //   liveLink: "https://example-weatherapp.com",
        //   githubLink: "https://github.com/username/weather-app",
        //   thumbnail: "/project2.jpg" // Path to the thumbnail image
        // }
    ];


    return (
        <div className="min-h-screen bg-black text-white py-16 px-8" >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16" >
                    <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
            
                            className="transform transition-all duration-300"
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Animation Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
};

export default Projects;
