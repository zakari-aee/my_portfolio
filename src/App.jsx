// App.jsx
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <div className="relative z-10"> {/* Add this wrapper */}
        <Footer />
      </div>
    </div>
  );
}

export default App;