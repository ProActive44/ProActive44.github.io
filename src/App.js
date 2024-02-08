import React, { useEffect, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Github from "./Pages/Github";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Navbar from "./Components/Navbar";
import minion from "./Images/minion.png";

function App() {
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const [showMinion, setShowMinion] = useState(true);
  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setShowFixedDiv(true);
    }, 5000);
  }, []);

  const toggleFixedDiv = () => {
    setShowFixedDiv(!showFixedDiv);
  };

  const toggleMinion = () => {
    setShowMinion(!showMinion);
  };

  const handleMouseMove = (e) => {
    const offsetX = e.clientX; // Get cursor X position
    const offsetY = e.clientY; // Get cursor Y position

    setFloatingPosition({ x: offsetX, y: offsetY });
  };

  return (
    <Box
      className="App"
      maxW={"1366px"}
      m={"auto"}
      position={"relative"}
      onMouseMove={handleMouseMove}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Github />
      <Projects />
      <Contact />
      {showMinion && (
        <Box
          position={"fixed"}
          top={0}
          zIndex={1000}
          w={10}
          className="floating-div"
          style={{
            left: `${floatingPosition.x}px`, // Set left position
            top: `${floatingPosition.y}px`, // Set top position
            transition: "left 5s, top 0.1s", // Apply transition
          }}
          backfaceVisibility="hidden"
        >
          <Image
            src={minion}
            transform="translate3d(0, 0, 0)"
            onClick={() => {
              alert(
                "Hands off the minion! 😡 Only the bravest souls may approach this cuddly creature."
              );
              setShowFixedDiv(true);
            }}
          />
        </Box>
      )}
      {showFixedDiv && showMinion && (
        <div className="fixed-div">
          <Button onClick={toggleMinion}>Go Away Minion</Button>
          <div className="close-button" onClick={toggleFixedDiv}>
            &times;
          </div>
        </div>
      )}
    </Box>
  );
}

export default App;
