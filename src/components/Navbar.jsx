import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Style variables
  const baseStyle = 'px-1.5 sm:px-2.5 py-1 rounded-full transition-colors duration-300 font-medium focus:outline-none text-sm sm:text-base';
  const activeStyle = 'bg-white text-black';
  const hoverStyle = 'bg-transparent text-black hover:text-white';

  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex rounded-full overflow-hidden shadow-lg gap-1 sm:gap-2 md:gap-3 bg-[#939393] p-1 sm:p-2">
        
        {/* Home Button */}
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `${baseStyle} ${isActive ? activeStyle : hoverStyle}`
          }
        >
          Home
        </NavLink>

        {/* Experience Button */}
        <NavLink 
          to="/experience" 
          className={({ isActive }) => 
            `${baseStyle} ${isActive ? activeStyle : hoverStyle}`
          }
        >
          Experience
        </NavLink>

        {/* Projects Button */}
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `${baseStyle} ${isActive ? activeStyle : hoverStyle}`
          }
        >
          Projects
        </NavLink>

        
        <NavLink 
          to="/contactUs" 
          className={({ isActive }) => 
            `${baseStyle} ${isActive ? activeStyle : hoverStyle}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
