import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import HTML from "../Images/HTML.png";
import CSS from "../Images/CSS.png";
import JavaScript from "../Images/JavaScript.png";
import react from "../Images/React.png";
import Node from "../Images/Node.png";
import Express from "../Images/ExpressJs.png";
import JAVA from "../Images/JAVA.png";
import Postman from "../Images/Postman.png";
// import Netlify from "../Images/Netlify.png";
import git from "../Images/git.png";
import Github from "../Images/Github.png";
import Vscode from "../Images/Vscode.png";
import Tailwind from "../Images/Tailwind.png";
import mongoDB from "../Images/mongoDB.png";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <Heading
        color="orange"
        my={"30px"}
        fontFamily="Architects Daughter, cursive"
      >
        My Skills
      </Heading>

      <Flex justify="space-around" w="90%" m="auto" wrap={"wrap"}>
        <Box className="skills-box">
          <Heading size={"lg"} color={"red.500"} my={"20px"}>
            Frontend
          </Heading>
          <Flex className="flex">
            <Box className="skills-card">
              <Image className="skills-card-img" src={HTML} />
              <Text className="skills-card-name">HTML</Text>
            </Box>
            <Box className="skills-card">
              <Image className="skills-card-img" src={CSS} />
              <Text className="skills-card-name">CSS</Text>
            </Box>
            <Box className="skills-card">
              <Image className="skills-card-img" src={JavaScript} />
              <Text className="skills-card-name">JavaScript</Text>
            </Box>
            <Box className="skills-card">
              <Image className="skills-card-img" src={react} />
              <Text className="skills-card-name">React</Text>
            </Box>
          </Flex>
        </Box>
        <Box className="skills-box">
          <Heading size={"lg"} color={"red.500"} my={"20px"}>
            Backend
          </Heading>
          <Flex className="flex">
            <Box className="skills-card">
              <Image className="skills-card-img" src={Node} />
              <Text className="skills-card-name">Node JS</Text>
            </Box>
            <Box className="skills-card">
              <Image
                className="skills-card-img"
                src={mongoDB}
              />
              <Text className="skills-card-name">Mongo DB</Text>
            </Box>
            <Box className="skills-card">
              <Image className="skills-card-img" src={Express} />
              <Text className="skills-card-name">Express</Text>
            </Box>
          </Flex>
        </Box>
        <Box className="skills-box">
          <Heading size={"lg"} color={"red.500"} my={"20px"}>
            Tools & Others
          </Heading>
          <Flex className="flex">
            <Box className="skills-card">
              <Image className="skills-card-img" src={JAVA} />
              <Text className="skills-card-name">JAVA</Text>
            </Box>

            <Box className="skills-card">
              <Image className="skills-card-img" src={git} />
              <Text className="skills-card-name">git</Text>
            </Box>

            <Box className="skills-card">
              <Image className="skills-card-img" src={Github} />
              <Text className="skills-card-name">Github</Text>
            </Box>

            <Box className="skills-card">
              <Image className="skills-card-img" src={Postman} />
              <Text className="skills-card-name">Postman</Text>
            </Box>

            <Box className="skills-card">
              <Image className="skills-card-img" src={Vscode} />
              <Text className="skills-card-name">VS code</Text>
            </Box>

            <Box className="skills-card">
              <Image className="skills-card-img" src={Tailwind} />
              <Text className="skills-card-name">Tailwind</Text>
            </Box>
            <Box className="skills-card">
              <Image
                className="skills-card-img"
                src="https://chakra-ui.com/favicon.png"
              />
              <Text className="skills-card-name">Chakra UI</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default Skills;
