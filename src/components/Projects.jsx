import React, { useEffect, useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';


const Projects = () => {

    const projects = [
        {
            name: "Personalised Quates Sender",
            description: "Built a platform that serds personalised quotes to users based on their preferences.",
            technologies: ["Reactjs", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "GEMENI API"],
            liveLink: "https://savera-red.vercel.app/",
            githubLink: "#",
            thumbnail: "/p1.png"
        },
        {
            name: "Personal Portfolio Website",
            description: "Developed a unique personal portfolio website using React.js and Tailwind CSS. The website showcases my skills, projects, and provides information about me.",
            technologies: ["React.js", "Framer-motion", "JavaScript"],
            liveLink: "https://my-portflio-ruddy.vercel.app/",
            githubLink: "#",
            thumbnail: "/p2.png" 
        },
       
        {
            name: "Notes Web App",
            description: "A simple web application that allows users to create, read, update, and delete notes. But this is advance note app we can attch images and audio to text trasrcibe also supports",
            technologies: ["Next.js", "MONGODB", "ShadCn"],
            liveLink: "https://note-app-eta-five.vercel.app/",
            githubLink: "https://github.com/nishantsevak11/note-app",
            thumbnail: "/p3.png" // Path to the thumbnail image
        },
        {
            name: "Notes maker from url",
            description: "A simple website that takes a url and generates a note from it. It is built using Next.js and usage gemini api for note generation.",
            technologies: ["Next.js", "ShadCN", "GEMENI API"],
            liveLink: "https://notify-cpp9lej0r-nsevak61-gmailcoms-projects.vercel.app/",
            githubLink: "#",
            thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path to the thumbnail image
        },
        {
            name: "Quiz website UI",
            description: "A quiz website UI built with react.js . Modern and professional clean design that enhance user experience.",
            technologies: ["React.js", "Tailwind CSS", "JavaScript","Framer-motion"],
            liveLink: "https://quizapp-orpin-seven.vercel.app/",
            githubLink: "https://github.com/nishantsevak11/quizapp",
            thumbnail: "/p4.png" // Path to the thumbnail image
        },
      
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
