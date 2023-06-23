import { Box, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import Github from "../Images/Github.png";
import LinkedIn from "../Images/LinkedIn.png";
import Phone from "../Images/Phone.png";
import Email from "../Images/Email.png";
import Location from "../Images/Location.png";

const Contact = () => {
  const handleGithub = () => {
    window.open("https://github.com/ProActive44", "_blank");
  };
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/prasad-mhaske-88a177247",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:7020162627";
  };

  const handleEmail = () => {
    window.location.href = "mailto:prasadmhaske2001@gmail.com";
  };

  return (
    <Box id="contact" my={"200px"}>
      <Heading
        color="orange"
        my={"40px"}
        fontFamily="Architects Daughter, cursive"
      >
        Contact Me
      </Heading>

      <Flex wrap={"wrap"} justify={"center"} align={"center"} gap={"20px"}>
        <Tooltip label="Click to open Github" placement="top">
          <Box id="contact-github" onClick={handleGithub}>
            <Image src={Github} />
            <Heading>Github</Heading>
            <Text color={"blue.500"}>ProActive44</Text>
          </Box>
        </Tooltip>
        <Tooltip label="Click to open LinkedIn" placement="top">
          <Box id="contact-linkedin" onClick={handleLinkedIn}>
            <Image src={LinkedIn} />
            <Heading>LinkedIn</Heading>
            <Text color={"blue.500"}>Prasad Mhaske</Text>
          </Box>
        </Tooltip>
        <Tooltip label="Click to call" placement="top">
          <Box id="contact-phone" onClick={handleCall}>
            <Image src={Phone} />
            <Heading>Phone</Heading>
            <Text color={"blue.500"}>+91 9764584028</Text>
          </Box>
        </Tooltip>
        <Tooltip label="Click to send email" placement="top">
          <Box id="contact-email" onClick={handleEmail}>
            <Image src={Email} />
            <Heading size={"lg"}>Email</Heading>
            <Text color={"blue.500"}>prasadmhaske2001@gmail.com</Text>
          </Box>
        </Tooltip>
        {/* <Box id="contact-location">
          <Image src={Location} />
          <Heading>Location</Heading>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Contact;
