import Greeting from './Greeting';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Navbar from './Navbar';
import './App.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="greeting">
        <Greeting />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
