import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="links-section">
        <div className="links-grid">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="link-button">
              <FaGoogle size={30} />
              <span>Google</span>
            </div>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="link-button">
              <FaFacebook size={30} />
              <span>Facebook</span>
            </div>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="link-button">
              <FaTwitter size={30} />
              <span>Twitter</span>
            </div>
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
      <div className="components-section">
        {/* TODO: Add components */}
      </div>
    </div>
  );
}

export default App;
