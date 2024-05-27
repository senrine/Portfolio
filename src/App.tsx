import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import UpAndDown from "./components/UpAndDown";

function App() {
  return (
    <div className="w-full h-full px-10 py-8 md:px-16 md:py-10 lg:px-24 lg:py-16">
      <Navbar />
      <HeroSection />
      <UpAndDown hrefDown="#AboutMe" hrefUp="#HeroSection" />
      <AboutMe />
      <UpAndDown hrefDown="#MyWork" hrefUp="#AboutMe" />
      <MyWork />
    </div>
  );
}

export default App;
