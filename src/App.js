import Greeting from './Greeting';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add Navbar here */}
      <div id="greeting">
        <Greeting />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
