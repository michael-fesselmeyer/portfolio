// Landing.jsx
import React from 'react';
import ChatBox from '../components/ChatBox'
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="profile-image-container">
        <img src="/path/to/your/image.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="chatbox-container">
        <h2>Use this chatbox to ask Mike's personalized AI any questions</h2>
        <ChatBox />
      </div>
    </div>
  );
}
