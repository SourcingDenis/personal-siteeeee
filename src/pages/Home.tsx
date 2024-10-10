import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
};

export default Home;