import React, { useState } from 'react';
import Card from './Card';
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    return (
        <div className="mainContainer text-white">
            <div className='box'>
                <div className='text-box'>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        I'm <span className="italic">NISHANT</span>
                    </h1>
                    <h2 className="text-4xl md:text-5xl text-teal-400 font-semibold mt-2">
                        Full Stack Developer
                    </h2>
                    <p className="mt-4 text-sm md:text-base">
                    I am driven by a deep passion for creating innovative solutions that solve 
complex problems. With a strong interest in emerging technologies and a 
curiosity for exploring new possibilities, I am constantly seeking to expand my 
knowledge and skills in the ever-evolving field of software development.With a 
solid foundation in programming languages, frameworks, and development 
methodologies.
                    </p>
                

                </div>
                <div className='image-box'>
                    <img src="/profile-image.png" alt="" />
                </div>
            </div>
            <div className='socialLink'>
                <div className='line'>

                </div>
                <a href="https://www.linkedin.com/in/nishantsevak" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://www.linkedin.com/in/nishantsevak";
                }}>
                    <img className='social-icon' src="/linkedin.png" alt="LinkedIn" />
                </a>
                {/* <a href="https://wa.me/your-number" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://wa.me/your-number";
                }}>
                    <img className='social-icon' src="/whatsapp.png" alt="WhatsApp" />
                </a>
                <a href="https://facebook.com/your-profile" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://facebook.com/your-profile";
                }}>
                    <img className='social-icon' src="/facebook.png" alt="Facebook" />
                </a> */}
            </div>
        </div>
    );
}

export default Home;
