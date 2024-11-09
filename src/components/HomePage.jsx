import React, { useState } from 'react';
import Card from './Card';

function Home() {
    const [resumeOpen, setResumeOpen] = useState(false);

    return (
        <div className="text-white w-full md:w-[50%] m-auto p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold">
                I'm <span className="italic">NISHANT</span>
            </h1>
            <h2 className="text-4xl md:text-5xl text-teal-400 font-semibold mt-2">
                Frontend Developer
            </h2>
            <p className="mt-4 text-sm md:text-base">
                Nishant Sevak specializes in building responsive, accessible interfaces that deliver seamless user experiences across devices. Proficient in frameworks like React and Vue, with a keen eye for design and a deep understanding of web development best practices.
            </p>
            <div className="mt-6 space-x-4">
                <button className="bg-teal-500 text-white px-4 py-2 rounded">
                    <a href="https://www.linkedin.com/in/nishantsevak">LinkedIn</a>
                </button>
                <button 
                    onClick={() => { setResumeOpen(!resumeOpen) }} 
                    className="bg-gray-600 text-white px-4 py-2 rounded"
                >
                    Resume
                </button>
                <div className="mt-5 w-full md:w-[50%]">
                    {resumeOpen && <Card />}
                </div>
            </div>
        </div>
    );
}

export default Home;
