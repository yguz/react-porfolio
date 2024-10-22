import React from 'react';

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8">
      <div className="md:w-2/3 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Me
        </h1>
        <div className="relative">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQG4ZKefRi9hgQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676480699705?e=1735171200&v=beta&t=13EXoobkdfxUYgpfo8Dcp2C4x7qetb1uDMbaWOnM-Ks" 
            alt="Profile" 
            className="float-right w-32 h-32 rounded-full ml-4 mb-4"
          />
          <p className="text-lg text-gray-600">
            I'm currently a junior at Kean University, majoring in Information Technology. 
            I have a passion for software development and love working on projects that allow me 
            to explore new technologies. My goal is to become a QA Testing Engineer after graduation, 
            ensuring the quality and reliability of software systems. Outside of coding, you might find 
            me enjoying an iced coffee while thinking of the next big idea!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
