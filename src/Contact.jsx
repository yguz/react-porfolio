import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:yorifg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-custom-purple-darker w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Let's Talk!</h1>
            <p className="pt-2 text-indigo-100 text-sm">
              If there is an opportunity that arises, I am here to apply. Do not hesitate to contact me!
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a5b4fc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>yorifg@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a5b4fc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>New Jersey, USA</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/yguz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.44c.5.09.68-.22.68-.49v-1.71c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 5.8c.85.004 1.7.115 2.48.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.68-4.56 4.93.36.31.68.93.68 1.88v2.79c0 .27.18.59.69.49A10 10 0 0 0 12 2z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yorfi-guzman-a7458525a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-custom-purple rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-custom-purple rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form className="flex flex-col space-y-4" onSubmit={handleSendEmail}>
              <div>
                <label htmlFor="name" className="text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="ring-1 ring-gray-300 mt-2 p-2 rounded-md w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="ring-1 ring-gray-300 mt-2 p-2 rounded-md w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="ring-1 ring-gray-300 mt-2 p-2 rounded-md w-full h-32"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-custom-purple-darker text-white p-2 rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
