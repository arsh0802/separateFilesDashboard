import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MyProfile.css'; // Import CSS file

const MyProfile = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleUpdateProfile = () => {
        navigate('/EditProfile'); // Navigate to the EditProfile page
    };

    return (
        <div className="page-container">
            <video
                autoPlay
                loop
                muted
                className="background-video"
            >
                <source src="/back video.mp4" type="video/mp4" />
            </video>
            <div className="profile-card">
                {/* Profile Section */}
                <div className="profile-section">
                    <img
                        src="/avatar.png" // Updated path to the profile image
                        alt="Profile Avatar"
                    />
                    <h2>Student</h2>
                    <p>GLA University</p>
                </div>

                {/* Details Section */}
                <div className="details-section">
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>Name</span>
                            <span>Student</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>Email</span>
                            <span>demostudent@gmail.com</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>Phone</span>
                            <span>+91 8273619318</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>LinkedIn</span>
                            <span>
                                <a
                                    href="https://www.linkedin.com/in/divyanshu-khandelwal-dkoder/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#0073b1' }}
                                >
                                    LinkedIn Profile
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>GitHub</span>
                            <span>
                                <a
                                    href="https://github.com/Abhi-dr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#000' }}
                                >
                                    GitHub Profile
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 'bold' }}>Website</span>
                            <span>
                                <a
                                    href="https://divyanshukhandelwal.tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#1e88e5' }}
                                >
                                    Personal Website
                                </a>
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleUpdateProfile} // Add click handler
                        className="update-button"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
