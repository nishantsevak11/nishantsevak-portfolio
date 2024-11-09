import React from 'react';

function Projects() {
  return (
    <section id="projects" className="p-8 w-[50%] m-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Description of project 1 goes here. It showcases skills in React.js and responsive design.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Description of project 2 goes here. It involves working with Vue.js and developing modern UI/UX.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
