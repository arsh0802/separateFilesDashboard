import React from 'react';
import './EditProfile.css';

function EditProfile() {
  return (
    <div className="page-container">
      <video autoPlay loop muted className="video-background">
        <source src="/back video.mp4" type="video/mp4" />
      </video>

      <div className="content-container">
        <div className="section">
          <div className="profile-picture">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="Profile"
            />
            <button className="button">Choose Profile Picture</button>
          </div>
        </div>

        <div className="account-details">
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Account Details</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your last name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your gender" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your location" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Enter your birthdate" />
            </div>
            <button type="submit" className="save-button">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
