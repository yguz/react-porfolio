import React from 'react';

function Greeting({ name }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Resume.pdf'; 
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="shadow rounded-xl overflow-hidden">
              <div className="pt-14 p-7 bg-white relative">
                <div className="text-lg font-semibold mb-1.5">Yorfi Guzman</div>
                <div className="text-sm text-gray-400 mb-7">Information Technology Intern</div>
                <div className="flex group">
                  <button className="download-btn" onClick={handleDownload}>
                    Download CV
                  </button>
                  <button className="download-btn-icon" onClick={handleDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-7 block-section flow-root">
              <h2 className="block-title">Skills</h2>
              <div className="-m-2 flex flex-wrap">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="p-7 block-section">
              <h2 className="block-title">Education</h2>
              <div className="mb-5 item-section">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{ backgroundImage: "url('assets/img/bu-logo.jpg')" }}>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">Master in Software Engineering</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                          </svg>
                          <span>Brunel University</span>
                        </div>
                        <div className="item-header-info">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
                      <div className="item-header-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>September 2017 – May 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>

              <div className="item-section">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{ backgroundImage: "url('assets/img/bu-logo.jpg')" }}>
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">Bachelor in Computer Science</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                          </svg>
                          <span>Brunel University</span>
                        </div>
                        <div className="item-header-info">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span>London</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
                      <div className="item-header-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>September 2014 – June 2017</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Greeting;
