import React, { useEffect } from "react";
// import GitHubCalendar from "github-calendar"; // Import the GitHubCalendar function
import GitHubCalendar from "react-github-calendar"; // Import the GitHubCalendar tag
import { Box, Flex, Heading } from "@chakra-ui/react";

const Github = () => {
  
  useEffect(() => {
    // GitHubCalendar(".calendar", "ProActive44", { responsive: true });  // Function
  }, []);

  return (
    <div>
      <Box
        className="max-width"
        id="github"
        data-aos="fade-down"
        borderRadius={"10px"}
      >
        <Heading
          color="orange"
          my={"20px"}
          fontFamily="Architects Daughter, cursive"
          className="title"
          data-aos="fade-up"
        >
          Github
        </Heading>
        <Flex
        // className="github-calender react-activity-calendar"
        // style={{ backgroundColor: "#575656", color: "#00d5ff" }}
        // style={{ color: "#00d5ff" }}
        >
          {/* <Box className="calendar" p="20px" bg={"#575656"} border={"none"}> */}
          <Box
            p={{ base: '5px', sm: "20px" }}
            bg={"#3f403f"}
            m={"auto"}
            borderRadius={{ base: null, sm: "20px" }}
            cursor={"pointer"}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-10px)",
            }}
          >
            {/* Loading stuff */}
            <GitHubCalendar
              username="ProActive44"
              colorScheme="light"
              // style={{ border: "1px solid red" }}
            />
            {/* Loading the data just for you. */}
          </Box>
        </Flex>

        {/* git stack */}
        <Flex id="github-stack" wrap={"wrap"}>
          <Box
            className="max-width"
            data-aos="fade-up"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px"
            }}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-10px)",
            }}
          >
            <img
              align="center"
              alt="ProActive44"
              src="https://github-readme-streak-stats.herokuapp.com/?user=ProActive44"
              id="github-streak-stats"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            className="max-width"
            id="github-streak-status"
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-10px)",
            }}
          >
            <img
              target="_blank"
              align="center"
              alt="ProActive44"
              src="https://github-readme-stats.vercel.app/api?username=ProActive44&show_icons=true&amp;locale=en"
              id="github-stats-card"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            className="max-width"
            id="github-streak-status"
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "translateY(-10px)",
            }}
          >
            <img
              target="_blank"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ProActive44&show_icons=true&locale=en&layout=compact"
              id="github-top-langs"
              align="left"
              alt="ProActive44"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Github;
