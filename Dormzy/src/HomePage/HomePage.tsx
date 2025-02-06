// import "./Header/Header.css";
// import Header from "./Header/Header.tsx";

import { useEffect, useState } from "react";

function HomePage() {
  const words = ["Simplified", "Easy-Peasy", "Fun", "Comfortable"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const index = Math.min(Math.floor(scrollPos / 100), words.length - 1);
      setCurrentWord(words[index]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <body>
      <div className="container">
        <div className="bubbles">
          <span style={{ ["--i" as any]: 13 }}></span>
          <span style={{ ["--i" as any]: 22 }}></span>
          <span style={{ ["--i" as any]: 17 }}></span>
          <span style={{ ["--i" as any]: 19 }}></span>
          <span style={{ ["--i" as any]: 14 }}></span>
          <span style={{ ["--i" as any]: 25 }}></span>
          <span style={{ ["--i" as any]: 11 }}></span>
          <span style={{ ["--i" as any]: 20 }}></span>
          <span style={{ ["--i" as any]: 16 }}></span>
          <span style={{ ["--i" as any]: 23 }}></span>
          <span style={{ ["--i" as any]: 10 }}></span>
          <span style={{ ["--i" as any]: 12 }}></span>
          <span style={{ ["--i" as any]: 15 }}></span>
          <span style={{ ["--i" as any]: 18 }}></span>
          <span style={{ ["--i" as any]: 21 }}></span>
          <span style={{ ["--i" as any]: 24 }}></span>
        </div>
        <div className="animated-container">
          <h1>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
              rel="stylesheet"
            ></link>
            Student <br />
            Housing <br />
            <span className="changing-word">{currentWord}</span>
          </h1>
        </div>
      </div>
      <div className="HomePage">
        <h1>Dormzy</h1>
        <div className="subtitle">Simplifying Student Housing</div>
        <div className="cta">
          Experience it on the Go - Download the Mobile App!
        </div>
        <div className="stores">
          <a href="#" className="store-button">
            AppStore
          </a>
          <a href="#" className="store-button">
            GooglePlay
          </a>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
