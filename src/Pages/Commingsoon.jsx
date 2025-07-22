import React from 'react';
import '../Css/Comingsoon.css';
import logo from '../images/logo-1.png'; 

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="overlay">
        <img src={logo} alt="Vaan Vayal Logo" className="logo" />
        <p className="subtitle">SITE UNDER RECONSTRUCTION</p>
        <h1 className="main-title">COMING SOON</h1>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '62%' }}></div>
        </div>
        <p className="progress-text">62%</p>
      </div>
    </div>
  );
};

export default ComingSoon;
