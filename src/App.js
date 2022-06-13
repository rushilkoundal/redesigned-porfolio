import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Navbar from './component/Navbar'
import Toggle from './component/Toggle';
import WorkList from './component/WorkList';
import { useRef } from 'react';

function App() {
  const work = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app">
      <Toggle />
      <Navbar scrollToSection={scrollToSection} work={work} about={about} Contact={contact} />
      <Hero scrollToSection={scrollToSection} work={work}/>
      <WorkList work={work} />
      <About about={about} />
      <Contact Contact={contact} />
    </div>
  );
}

export default App;
