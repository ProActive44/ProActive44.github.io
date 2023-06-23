import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../Images/Profile.jpg";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const downloadResume = () => {
    const previewUrl =
      "https://drive.google.com/file/d/1nxEcOMkg9l17Delnv811tk54dv1tkc_k/view?usp=sharing";
    const downloadUrl =
      "https://www.dropbox.com/s/wugaticm4yhrmvw/Prasad%20Mhaske%20CV%20Resume.pdf?dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;
  };

  return (
    <section id="about" className="about section">
      <Heading
        color="orange"
        my={"20px"}
        fontFamily="Architects Daughter, cursive"
      >
        About Me
      </Heading>
      <Flex wrap={"wrap"}>
        <Box w={{ base: "80%", md: "40%" }} p="20px" m={"auto"} minW={"300px"}>
          <Image
            w="60%"
            borderRadius={"60%"}
            src={Profile}
            m="auto"
            transition="width 0.3s ease-in-out"
            _hover={{ width: "65%", cursor: "pointer" }}
            className="home-img"
          />
          {/* <Image w={"80%"} src='https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif'/> */}
        </Box>

        <Box
          w={{ base: "90%", md: "60%" }}
          p="20px"
          textAlign={"left"}
          m={"auto"}
        >
          <Stack>
            <Text>
              Hi, my name is
              <Text
                as="p"
                color={"blue.500"}
                fontFamily={"Courgette, cursive"}
                id="user-detail-name"
                fontSize={"xl"}
              >
                Prasad Babasaheb Mhaske.
              </Text>
              <Text>
                I am from Ahmednagar, Maharashtra. I have completed my Bachelor
                of Science (BSc) from K.J.S. College, Kopergaon. Recently, I
                have completed a Full Stack Web Development course from{" "}
                <Text as={"span"} color={"blue.500"}>
                  Masai School.
                </Text>
              </Text>
            </Text>
            <Text>
              I'm a passionate coder and an enthusiastic Web Developer capable
              of applying programming skills to solve complex problems. I am
              seeking a challenging role in the field of software development
              that will offer an opportunity for further development of my
              abilities, skills, and knowledge within an organization.
            </Text>
            <Text id="user-detail-intro">
              Some of the technologies I am proficient in include HTML, CSS,
              JavaScript, React, Java, Node.js, Express, and MongoDB. I have
              hands-on experience in building web applications and working with
              these technologies to create robust and scalable solutions.
            </Text>
          </Stack>
          <Button
            colorScheme="red"
            onClick={downloadResume}
            id="resume-button-2"
            variant={"outline"}
            mt={"10px"}
          >
            {/* <a href="../Images/PrasadResume.pdf" target="_blank" download="PrasadResume.pdf" id="resume-link-2">Resume</a> */}
            Resume
            <Box as="span" mx="5px">
              <FaDownload />
            </Box>
          </Button>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
