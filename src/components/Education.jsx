import React from 'react';

function Education() {
  return (
    <div className=" text-white p-10 w-[50%] m-auto">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="mt-4 space-y-4 w-[100%] m-auto flex flex-col items-center justify-center">
        <div>
          <h3 className="text-teal-400">Higher Education</h3>
          <p>Government Senior Secondary School</p>
          <p>Score: 85%</p>
        </div>
        <div>
           <img src="/down-arrow.png"  alt="Arrow down" />
        </div>
        <div>
          <h3 className="text-teal-400">Graduate</h3>
          <p>Mohanlal Sukhadia University, Udaipur</p>
          <p>Score: 8 CGPA</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
