import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2>Contact Information</h2>
        <p>Phone Number: 631-682-2407</p>
        <p>Email: <a href="mailto:michael.fesselmeyer@gmail.com">michael.fesselmeyer@gmail.com</a></p>
        <p>Postal Address: 1342 Gates Avenue, Bushwick, 11221</p>
      </div>
    </div>
  );
}
