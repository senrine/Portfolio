import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import UpAndDown from "./components/UpAndDown";
import github from "./assets/Github.svg";
import mail from "./assets/Mail.svg";
import linkedin from "./assets/Linkedin.svg";
import { useState } from "react";

function App() {
  const [fr, setFr] = useState(true);
  const [en, setEn] = useState(false);

  function changeLanguage() {
    if (fr) {
      setEn(true);
      setFr(false);
    } else {
      if (en) {
        setFr(true);
        setEn(false);
      }
    }
  }

  return (
    <div className="w-full h-full px-10 py-8 md:px-16 md:py-10 lg:px-24 lg:py-16">
      <Navbar en={en} fr={fr} changeLanguage={changeLanguage} />
      <HeroSection en={en} fr={fr} />
      <UpAndDown hrefDown="#AboutMe" hrefUp="#HeroSection" />
      <AboutMe en={en} fr={fr} />
      <UpAndDown hrefDown="#MyWork" hrefUp="#AboutMe" />
      <MyWork en={en} fr={fr} />
      <UpAndDown hrefDown="#Contact" hrefUp="#MyWork" />
      <Contact en={en} fr={fr} />
      <div className="mt-48 flex flex-row justify-center items-center mx-auto">
        <a href="https://github.com/senrine" target="_blank" className="mr-6">
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/nesrine-saadi-7a00aa304/"
          target="_blank"
          className="mr-6"
        >
          <img src={linkedin} />
        </a>
        <a href="mailto:saadinesrine16@gmail.com" target="_blank">
          <img src={mail} />
        </a>
      </div>
    </div>
  );
}

export default App;
