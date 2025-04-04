import React from 'react';
import './Experience.css'
import Card2 from './Card2'
function Experience() {


   const experiences = [
      {
         year: "2025",
         role: "Full Stack Developer intern",
         company: "Reetape Technologies",
         desc: ` Developed a web application using React.js, Node.js, and Express.js.
          Implemented user authentication and authorization using JSON Web Tokens (JWT).
           Integrated a MySQL database to store and retrieve user data.
            Technologies used: React.js, Node.js, Express.js, JWT, MySQL`
      }
   ];


   return (
      <div className='container'>

         <div className="skills-container grid ">
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
               <div className='skill'>
                  <img src="/express.png" alt="" />
               </div>
               <div className='skill'>
                  <img src="/nodejs.png" alt="" />
               </div>
               <div className='skill'>
                  <img src="/java.png" alt="" />
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
