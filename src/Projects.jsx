import React from 'react';

function Projects({ }) {

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Projects <span className="text-2xl font-bold text-gray-800 mb-4"> I have worked on</span>
        </h1>
        <div className="flex mx-4 p-4"> {/* Added mx-4 for side margins */}
      {/* Column for Cards */}
      <div className="flex flex-col space-y-4 w-1/3">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-lg font-bold mb-2">Project One</h2>
          <p className="text-gray-700 mb-4">
            A brief description of your first project goes here. This could include its features and technologies used.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-lg font-bold mb-2">Project Two</h2>
          <p className="text-gray-700 mb-4">
            A brief description of your second project goes here. Include important details or links if necessary.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Chatbot Area */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 h-full w-full">
          <h2 className="text-xl font-bold mb-2 text-center">Chatbot App</h2>
          <p className="text-gray-700 text-center">
            This area showcases your chatbot application. You can integrate the chatbot here or provide additional info.
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Projects;
