import React from 'react';

const Card = () => {
  return (
    <div className="relative border w-full sm:w-[400px] h-[500px] sm:h-[500px] border-gray-300 rounded-lg shadow-md overflow-hidden group mx-auto">
      <img
        src="/resume.png" // Image source
        alt="Card image"
        className="w-full h-full object-fill" // Ensures the image fills the parent div without clipping
      />
      
      {/* Card Content */}
      <div className="p-4">
        
        {/* Download Button (hidden by default, shown on hover) */}
        <a href="/resume.pdf" download>
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
