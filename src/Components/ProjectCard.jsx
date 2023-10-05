import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import HTML from "../Images/HTML.png";
import CSS from "../Images/CSS.png";
import JavaScript from "../Images/JavaScript.png";
import reactImg from "../Images/React.png";
import Node from "../Images/Node.png";
import Express from "../Images/ExpressJs.png";
import Live from "../Images/Live.png";
import Github from "../Images/Github.png";
import MongoDB from "../Images/mongoDB.png";

const ProjectCard = ({ project }) => {
  const { image, title, description, githubURL, liveURL, backend, react } =
    project;

  const [isImageHovered, setIsImageHovered] = useState(false);
  const [translateValues, setTranslateValues] = useState({
    translateX: 0,
    translateY: 0,
  });

  const handleImageHover = (e) => {
    // const { width, height, left, top } = e.target.getBoundingClientRect();

    // const offsetX = (width - e.nativeEvent.offsetX) / width;
    // const offsetY = (height - e.nativeEvent.offsetY) / height;

    // const translateX = (width / 2 - left) * (1 - offsetX);
    // const translateY = (height / 2 - top) * (1 - offsetY);

    setIsImageHovered(true);
    // setTranslateValues({ translateX, translateY });
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
    setTranslateValues({ translateX: 0, translateY: 0 });
  };

  const goToGithub = () => {
    window.open(githubURL, "_blank");
  };

  const goLive = () => {
    window.open(liveURL, "_blank");
  };

  return (
    <Flex className="project-card" w="90%" m="auto" wrap={"wrap"} mt={"50px"}>
      <Box
        w={{ base: "95%", md: "50%" }}
        // p="5px"
        borderRadius="20px"
        // overflow="hidden"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
        minW={"300px"}
        m="auto"
      >
        <Image
          src={image}
          w="100%"
          borderRadius="20px"
          transform={
            isImageHovered
              ? `scale(1.2) translate(${translateValues.translateX}px, ${translateValues.translateY}px)`
              : "scale(1)"
          }
          position={"relative"}
          zIndex={isImageHovered ? "20" : "10"}
          cursor={"pointer"}
          transition="transform 0.3s ease"
        />
      </Box>
      <Box p="15px" m="auto" w={{ base: "95%", md: "50%" }} mt="-10px">
        <Heading
          className="project-title"
          size={"lg"}
          color={"red.500"}
          align={"left"}
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "translateY(-5px) translateX(10px)",
          }}
        >
          {title}
        </Heading>

        <Text align={"left"} mt={"10px"} color="blue.500">
          Summary
        </Text>

        <Text
          className="project-description"
          mb={"10px"}
          align={"left"}
          fontSize={"sm"}
        >
          {description}
        </Text>

        <Text align={"left"} mt={"10px"} color="blue.500">
          Tech Stack used
        </Text>

        <Flex className="flex" gap={"5px"} my={"5px"} wrap={"wrap"}>
          <Box className="skills-card-Project">
            <Image className="skills-card-img" src={HTML} />
            <Text className="skills-card-name">HTML</Text>
          </Box>
          <Box className="skills-card-Project">
            <Image className="skills-card-img" src={CSS} />
            <Text className="skills-card-name">CSS</Text>
          </Box>
          <Box className="skills-card-Project">
            <Image className="skills-card-img" src={JavaScript} />
            <Text className="skills-card-name">JavaScript</Text>
          </Box>
          {react && (
            <Box className="skills-card-Project">
              <Image className="skills-card-img" src={reactImg} />
              <Text className="skills-card-name">React</Text>
            </Box>
          )}
          {backend && (
            <>
              <Box className="skills-card-Project">
                <Image className="skills-card-img" src={Node} />
                <Text className="skills-card-name">Node JS</Text>
              </Box>
              <Box className="skills-card-Project">
                <Image className="skills-card-img" src={MongoDB} />
                <Text className="skills-card-name">Mongo DB</Text>
              </Box>
              <Box className="skills-card-Project">
                <Image className="skills-card-img" src={Express} />
                <Text className="skills-card-name">Express</Text>
              </Box>
            </>
          )}
        </Flex>
        <Flex gap="20px" wrap={"wrap"} mt="10px">
          <Button
            className="project-github-link"
            onClick={goToGithub}
            size={"sm"}
          >
            <Image src={Github} w="25px" mr="3px" />
            GITHUB
          </Button>
          <Button
            className="project-deployed-link"
            onClick={goLive}
            size={"sm"}
          >
            <Image src={Live} w="25px" mr="2px" />
            LIVE
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
