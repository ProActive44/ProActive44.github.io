import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar"; // Import the GitHubCalendar function
import { Box, Flex, Heading } from "@chakra-ui/react";

const Github = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "ProActive44", { responsive: true });
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
        <div
          className="github-calender react-activity-calendar"
          style={{ backgroundColor: "#575656", color: "#00d5ff" }}
        >
          <Box className="calendar" p="10px">
            {/* Loading stuff */}
            Loading the data just for you.
          </Box>
        </div>

        {/* git stack */}
        <Flex id="github-stack" wrap={"wrap"}>
          <div
            className="max-width"
            data-aos="fade-up"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              align="center"
              alt="ProActive44"
              src="https://github-readme-streak-stats.herokuapp.com/?user=ProActive44"
              id="github-streak-stats"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div
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
          >
            <img
              target="_blank"
              align="center"
              alt="ProActive44"
              src="https://github-readme-stats.vercel.app/api?username=ProActive44&show_icons=true&amp;locale=en"
              id="github-stats-card"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div
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
          >
            <img
              target="_blank"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ProActive44&show_icons=true&locale=en&layout=compact"
              id="github-top-langs"
              align="left"
              alt="ProActive44"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Github;
