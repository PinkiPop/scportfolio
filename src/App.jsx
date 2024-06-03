import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import MainContent from './MainContent';

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route exact path="/" element={<StartPage/>} />
        <Route path="/main/*" element={<MainContent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;