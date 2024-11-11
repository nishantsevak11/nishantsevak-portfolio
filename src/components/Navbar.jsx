import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Style variables
  const baseStyle = 'px-2.5 py-1 rounded-full transition-colors duration-300 font-medium focus:outline-none';
  const activeStyle = 'bg-white text-black';
  const hoverStyle = 'bg-transparent text-black hover:text-white';

  return (
    <div className="flex justify-center p-10">
      <div className="flex rounded-full overflow-hidden shadow-lg gap-3 bg-[#939393] p-2">
        
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
