import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isScrollable, setIsScrollable] = useState(false);
  const [showFloatingMessage, setShowFloatingMessage] = useState(false); // State to manage floating message visibility

  const sendMessage = () => {
    if (userInput.trim()) {
      const newMessage = { text: userInput, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setUserInput('');

      if (userInput.toLowerCase().includes('cat')) {
        fetchCatFact();
      } else {
        // Fallback response for non-cat related messages
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "I can tell you fun facts about cats! Just ask me.", sender: 'bot' },
          ]);
        }, 1000);
      }
    }
  };

  const fetchCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => {
        const fact = data.fact;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: fact, sender: 'bot' },
        ]);
      })
      .catch((error) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Sorry, I couldn\'t fetch a cat fact right now. Please try again later.', sender: 'bot' },
        ]);
      });
  };

  // Effect to check if messages overflow the height of the messages container
  useEffect(() => {
    const chatContainer = document.querySelector('.messages');
    if (chatContainer) {
      setIsScrollable(chatContainer.scrollHeight > chatContainer.clientHeight);
      if (chatContainer.scrollHeight > chatContainer.clientHeight) {
        setShowFloatingMessage(true);
        // Set a timeout to hide the floating message after 3 seconds
        const timer = setTimeout(() => {
          setShowFloatingMessage(false);
        }, 3000);
        return () => clearTimeout(timer); // Cleanup the timer on unmount
      }
    }
  }, [messages]); // Run the effect whenever messages change

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-custom-purple p-4 mt-4">
      <div className="header mt-6">
        <div className="description text-center">
          Type something with "cat" in it, and I'll share a fun cat fact with you!
        </div>
      </div>
      <div className="chat-container flex flex-col w-full relative">
        <div className="messages overflow-y-auto h-48 p-2 mb-2 rounded-lg bg-white shadow-md">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'text-right' : 'text-left'}>
              <span className={`inline-block p-2 rounded-lg my-1 shadow-md ${message.sender === 'user' ? 'bg-blue-300 ml-auto' : 'bg-gray-300 mr-auto'} max-w-xs`}>
                {message.text}
              </span>
            </div>
          ))}
          {/* Floating message when scrolling is available */}
          {isScrollable && showFloatingMessage && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-9 bg-gray-200 text-gray-800 p-2 rounded-lg shadow-md z-10 opacity-75">
              New messages available, scroll to see!
            </div>
          )}
        </div>
        <div className="flex mt-2">
          <input
            type="text"
            id="userInput"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border p-2 rounded-l-lg flex-grow"
          />
          <button onClick={sendMessage} className="bg-custom-purple-darker text-white p-2 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
