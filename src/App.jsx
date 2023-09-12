import React, { useEffect } from 'react';
import './App.css';
import particlesConfig from 'C:/Users/rdevbyte/Documents/Projects/resumesite/particlesjs-config.json';

function App() {
  useEffect(() => {
    // Initialize particles.js with your configuration
    window.particlesJS('particles-js', particlesConfig);
  }, []);

  return (
    <div className="App">
      {/* Your other React components and content */}
    </div>
  );
}

export default App;
