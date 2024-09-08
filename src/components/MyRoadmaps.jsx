import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyRoadmaps.css';

// Background video URL
const backgroundVideoUrl = '/back video.mp4'; // Adjust the path if needed

const MyRoadmaps = () => {
  const [language, setLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [Hours, setHours] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { language, duration, Hours } });
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`page-container ${isMobile ? 'mobile' : ''}`}>
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`container-box ${isMobile ? 'mobile' : ''}`}>
        <h2 className={`title ${isMobile ? 'mobile' : ''}`}>Generate Learning Roadmap</h2>
        <form className="styled-form" onSubmit={handleSubmit}>
          <label className={`label ${isMobile ? 'mobile' : ''}`} htmlFor="language">Language:</label>
          <input
            className={`input ${isMobile ? 'mobile' : ''}`}
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
          <label className={`label ${isMobile ? 'mobile' : ''}`} htmlFor="duration">Duration (in days):</label>
          <input
            className={`input ${isMobile ? 'mobile' : ''}`}
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <label className={`label ${isMobile ? 'mobile' : ''}`} htmlFor="Hours">Duration (in Hours):</label>
          <input
            className={`input ${isMobile ? 'mobile' : ''}`}
            type="number"
            id="Hours"
            value={Hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
          <button className={`button ${isMobile ? 'mobile' : ''}`} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyRoadmaps;
