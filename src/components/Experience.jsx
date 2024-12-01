import React from 'react';
import './Experience.css'

function Experience() {


   const experiences = [
      {
         year: "2024",
         role: "Frontend Developer",
         company: "",
         desc: ` Built a web app for personalized color palette generation using React.js, CSS, and Tailwind CSS.
          Developed a responsive design compatible with desktop and mobile devices.
           Technologies used: React.js, CSS, Tailwind CSS, Context API, Mirage.js`
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
