import React from 'react'
import { useNavigate } from 'react-router-dom';
import './StartPage.css';
import startButtonImage from './assets/Start Button.png';
import startbackground from './assets/StartBackground.png';

function StartPage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/main');
  };

  return (
    <div className="start-page">
      <div className="start-content">
        <img src={startbackground} alt="additionalbackground" className="start-background" />
        <img src={startButtonImage} alt="Start" className="start-button" onClick={handleStartClick} />
      </div>
    </div>
  );
}

export default StartPage
