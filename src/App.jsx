// App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;