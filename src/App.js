import './App.css';
import React, { useState, useEffect } from 'react';

const links = [
  { name: 'Google maps', url: 'https://www.google.com/maps' },
  { name: 'Wordreference', url: 'http://www.wordreference.com/' },
  { name: 'ESPN Deportes', url: 'http://espndeportes.espn.go.com/futbol/' },
  { name: 'Thesaurus', url: 'http://www.thesaurus.com/' },
  { name: 'Toronto Public Libraries', url: 'http://www.tpl.ca/' },
  { name: 'Real Academia Española', url: 'http://www.rae.es/' },
  { name: 'Github', url: 'https://github.com/login' },
  { name: 'Link 8', url: 'https://www.example.com' },
  { name: 'Link 9', url: 'https://www.example.com' },
  { name: 'Link 10', url: 'https://www.example.com' }
];

function App() {
  const [activeLink, setActiveLink] = useState(null);
  const [components, setComponents] = useState([]);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    // Add components to the component section here
    setComponents([
      <iframe title="XE Currency Chart" src="https://www.xe.com/currencycharts/?from=CAD&amp;to=MXN" width="100%" height="500px" />,
      <div>La Liga scores</div>,
      <div>Premier League scores</div>,
      <div>Today's weather for Toronto</div>,
      <div>Contents of a local page</div>,
      <div>DuckDuckGo search field</div>
    ]);
  }, []);

  useEffect(() => {
    // Rotate components every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [components, currentComponentIndex]);

  function handleLinkClick(link) {
    setActiveLink(link);
  }

  function handlePrevComponentClick() {
    setCurrentComponentIndex((currentComponentIndex - 1 + components.length) % components.length);
  }

  function handleNextComponentClick() {
    setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
  }

  return (
    <div className="App">
      <div className="links-section">
        <div className="links-grid">
          {links.map((link, index) => (
            <div
              key={index}
              className={`links-grid-item ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="components-section">
        <div className="component-viewport">
          {components[currentComponentIndex]}
        </div>
        <div className="component-navigation">
          <button className="prev-button" onClick={handlePrevComponentClick}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNextComponentClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
