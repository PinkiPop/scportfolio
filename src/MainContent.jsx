import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/projects" elements={<Projects />} />
      </Routes>
    </div>
  );
}

export default MainContent;