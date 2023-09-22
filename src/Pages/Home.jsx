import { Box, Image, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import TypeWriter from "../Components/TypeScript";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <Box> 
          <Flex wrap={"wrap"}>
            <Box
              w={{ base: "100%", lg: "50%" }}
              p={{ base: "10px", md: "20px" }}
              m={"auto"}
              minW={"300px"}
            >
              <Stack>
                <Heading>
                  <Text fontFamily={"Courgette, cursive"} color="red">
                    I'm Prasad Mhaske!
                  </Text>
                </Heading>
                <TypeWriter />
                <Text my={"20px"} color={"yellow"}>
                  "Passionate Full Stack Web Developer with a specialization in
                  the MERN Stack. Skilled, collaborative, and attentive
                  developer with a drive to develop the most relevant products.
                  Always looking forward to learning something new to strengthen
                  the skills acquired."
                </Text>
              </Stack>
            </Box>
            <Box
              w={{ base: "100%", lg: "50%" }}
              p={{ base: "10px", md: "20px" }}
              m="auto"
            >
              <Image
                w={"90%"}
                src="https://cdn3d.iconscout.com/3d/premium/thumb/developer-doing-website-development-8350552-6648977.png"
              />
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  );
};

export default Home;
