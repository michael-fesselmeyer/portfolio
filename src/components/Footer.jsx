import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact">
          <a href="mailto:michael.fesselmeyer@gmail.com">michael.fesselmeyer@gmail.com</a>
          <p>(631) 682-2407</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Michael Fesselmeyer. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
