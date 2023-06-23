import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Specialized from "../Images/Specialized.png";
import TATA1MG from "../Images/TATA1MG.png";
import Skinstore from "../Images/Skinstore.png";
import Portfolio from "../Images/Portfolio.png";

const projectArray = [
  {
    title: "Specialized Cycle App",
    description:
      "A online cycle store, where you can find all the types of modern bikes.",
    image: Specialized,
    githubURL: "https://github.com/ProActive44/specialized-bike-app",
    liveURL: "https://specializedstore.vercel.app",
    react: true,
    backend: true,
  },
  {
    title: "TATA 1mg",
    description:
      "The exact clone of India's best online pharmacy with a wide range of Prescription and OTC medicines.",
    image: TATA1MG,
    githubURL: "https://github.com/ProActive44/TATA-1mg-clone",
    liveURL: "https://tata-1mg-store.netlify.app",
    backend: true,
  },
  {
    title: "Skinstore",
    description:
      "The clone of an American site Skinstore, It is one of the world's leading cosmetics ecommerce shopping sites.",
    image: Skinstore,
    githubURL: "https://github.com/anuragbhardwaj21/Skinstore",
    liveURL: "https://skinstoreclone44.netlify.app",
  },
  {
    title: "My Portfolio",
    description:
      "This is My portfolio, showcasing my skills, accomplishments, and creative journey. This portfolio is a testament to my passion for developement and my dedication to honing my craft.",
    image: Portfolio,
    githubURL: "https://github.com/ProActive44/ProActive44.github.io",
    liveURL: "https://proactive44.github.io",
    react: true,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <Heading
        color="orange"
        my={"30px"}
        fontFamily="Architects Daughter, cursive"
      >
        Projects
      </Heading>
      <Box>
        {projectArray.map((project, idx) => {
          return <ProjectCard project={project} />;
        })}
      </Box>
    </section>
  );
};

export default Projects;
