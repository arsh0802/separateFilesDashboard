import React, { useState } from 'react';
import './Feedback.css';

// Background video URL
const backgroundVideoUrl = '/back video.mp4'; // Adjust the path if needed

const Feedback = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, subject, feedback });
  };

  return (
    <div className="page-container">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="feedback-container">
        <div className="feedback-header">
          <h1>Feedback</h1>
          <p>Your feedback matters to us</p>
        </div>
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="feedback"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
