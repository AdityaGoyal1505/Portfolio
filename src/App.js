import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import SkillsMarquee from './Components/SkillsMarquee';
import Footer from './Components/Footer';
import Achievements from './Components/Achievements';
import About from './Components/About';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <Achievements />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
