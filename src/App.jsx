// App.jsx or wherever HeroSection + Footer are used
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <div backgroundColor="#0a192f">
        <Footer />
      </div>

    </div>

  );
}

export default App;
