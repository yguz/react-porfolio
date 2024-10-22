import Greeting from './Greeting';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Greeting />
      <AboutMe />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
