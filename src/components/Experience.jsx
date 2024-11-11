import React from 'react';
import './Experience.css'
import Card2 from './card2';

function Experience() {


   const experiences = [
      {
         year: "2023",
         role: "Frontend Developer",
         company: "iNuron",
         desc: "Specializes in building responsive, accessible interfaces that deliver seamless user experiences across devices. Proficient in frameworks like React and Vue, with a keen eye for design and a deep understanding of web development best practices."
      },
      {
         year: "2022",
         role: "Backend Developer",
         company: "TechCorp",
         desc: "Developed and maintained server-side applications, optimized database interactions, and ensured robust API integrations. Skilled in Node.js and Express with experience in cloud deployments."
      },
      {
         year: "2021",
         role: "Full Stack Developer Intern",
         company: "StartupHub",
         desc: "Assisted in developing full-stack web applications, collaborated with teams to improve software efficiency, and gained exposure to both frontend and backend development using MERN stack."
      }
   ];
   

  return (
    <div className='container'>

      <div className="skills-container">
        <h1>Skills</h1>
         <div className='skills'>
         <div className='skill'>
            <img src="/python.png" alt="" />
         </div>
         <div className='skill'>
            <img src="/html.png" alt="" />
         </div>
         <div className='skill'>
            <img src="/css.png" alt="" />
         </div>
         <div className='skill'>
            <img src="/reactjs.png" alt="" />
         </div>
         <div className='skill'>
            <img src="/javascript.png" alt="" />
         </div>
         <div className='skill'>
            <img src="/mysql.png" alt="" />
         </div>
         </div>
      </div>
      <div className="experience-container">
         <h3>Experience</h3>
      {experiences.map((experience, index) => (
            <Card2
               key={index}
               year={experience.year}
               role={experience.role}
               company={experience.company}
               desc={experience.desc}
            />
         ))}
      </div>
    </div>
  );
}

export default Experience;
