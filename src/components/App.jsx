import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Examples from './Examples/Examples';
import Projects from './Projects/Projects';
import Writing from './Writing/Writing';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, writingData,examplesData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [examples, setExamples] = useState({});
  const [projects, setProjects] = useState([]);
  const [writing, setWriting] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExamples({ ...examplesData });
    setProjects([...projectsData]);
    setWriting([...writingData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, examples, writing, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Examples />
      <Writing />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
