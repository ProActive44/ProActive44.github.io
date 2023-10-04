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

  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const div = document.querySelector(".floating-div");

    if (div) {
      const { left, top } = div.getBoundingClientRect();
      const offsetX = e.clientX - left; // Adjust for element position
      const offsetY = e.clientY - top; // Adjust for element position

      // Apply damping to cursor movement
      const dampingFactor = 0.1; // Adjust this value as needed for smoother movement
      const dampedX = offsetX - (offsetX - floatingPosition.x) * dampingFactor;
      const dampedY = offsetY - (offsetY - floatingPosition.y) * dampingFactor;

      setFloatingPosition({ x: dampedX, y: dampedY });
    }
  };

  const resetPosition = () => {
    setFloatingPosition({ x: 0, y: 0 });
  };

  return (
    <Box
      className="App"
      maxW={"1366px"}
      m={"auto"}
      position={"relative"}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
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
            transform: `translate(${floatingPosition.x}px, ${floatingPosition.y}px)`,
            transition: "transform 0.1s ease-in-out",
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
