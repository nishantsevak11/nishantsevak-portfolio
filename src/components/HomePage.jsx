import React, { useState } from 'react';
import Card from './Card';
import './HomePage.css'

function Home() {
    return (
        <div className="mainContainer text-white">
            <div className='box'>
                <div className='text-box'>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        I'm <span className="italic">NISHANT</span>
                    </h1>
                    <h2 className="text-4xl md:text-5xl text-teal-400 font-semibold mt-2">
                        Frontend Developer
                    </h2>
                    <p className="mt-4 text-sm md:text-base">
                        Nishant Sevak specializes in building responsive, accessible interfaces that deliver seamless user experiences across devices. Proficient in frameworks like React and Vue, with a keen eye for design and a deep understanding of web development best practices.
                    </p>
                

                </div>
                <div className='image-box'>
                    <img src="/profile-image.png" alt="" />
                </div>
            </div>
            <div className='socialLink'>
                <div className='line'>

                </div>
                <img className='social-icon' src="/linkedin.png"  alt="" />
                <img className='social-icon' src="/whatsapp.png" alt="" />
                <img className='social-icon' src="/facebook.png" alt="" />
            </div>
        </div>
    );
}

export default Home;
