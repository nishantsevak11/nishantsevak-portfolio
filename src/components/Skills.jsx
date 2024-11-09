import React from 'react';

function Skills() {
  return (
    <section id="skills" className="p-8 m-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li className="bg-gray-700 p-2 rounded">React.js</li>
        <li className="bg-gray-700 p-2 rounded">Vue.js</li>
        <li className="bg-gray-700 p-2 rounded">HTML & CSS</li>
        <li className="bg-gray-700 p-2 rounded">JavaScript</li>
        <li className="bg-gray-700 p-2 rounded">Responsive Design</li>
        <li className="bg-gray-700 p-2 rounded">Web Accessibility</li>
      </ul>
    </section>
  );
}

export default Skills;
