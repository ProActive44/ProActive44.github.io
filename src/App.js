import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Github from "./Pages/Github";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Box className="App" maxW={"1366px"} m={"auto"}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Github />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
