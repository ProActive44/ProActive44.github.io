import { Box, Flex, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaDownload, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openMenu = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const downloadResume = () => {
    const previewUrl =
      "https://drive.google.com/file/d/1vxcfhWu8juQjYwB5zQZwohfOfxgZ_DBt/view?usp=sharing";
    const downloadUrl =
      "https://www.dropbox.com/s/9bk363guzbvkzmw/Prasad-Mhaske-Resume.pdf?dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close the navbar menu on section click
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box
        id="nav-menu"
        maxW={"100%"}
        bg={"rgb(28,28,28)"}
        h={{ base: "55px", md: "65px" }}
        position={"sticky"}
        top={0}
        zIndex={"1000"}
      >
        <IconButton
          aria-label="Toggle menu"
          icon={<FaBars />}
          display={{ base: "block", md: "none" }}
          onClick={openMenu}
          bg="rgb(38, 38, 38)"
          colorScheme="blackAlpha"
          top={2}
          left={2}
          p=""
        />

        <Flex
          color={"white"}
          align={"center"}
          justify="right"
          mx={"20px"}
          gap={"30px"}
          h="100%"
          display={{ base: "none", md: "flex" }}
          //   border={"1px solid red"}
        >
          <Link
            sx={{ "&:hover": { color: "red" }, fontSize: "lg" }}
            className="nav-link home"
            onClick={ScrollToTop}
          >
            Home
          </Link>
          <Link
            _hover={{ color: "red" }}
            className="nav-link about"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            className="nav-link skills"
            onClick={() => scrollToSection("skills")}
          >
            My Skills
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            className="nav-link projects"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            className="nav-link contact"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
          <Button
            colorScheme="blue"
            onClick={downloadResume}
            variant={"outline"}
            className="nav-link resume"
            id="resume-button-1"
          >
            Resume
            <Box as="span" mx="5px">
              <FaDownload />
            </Box>
          </Button>
        </Flex>

        {/* Responsive Menu */}
        {isOpen && (
          <Box
            bg="rgb(38,38,38)"
            py="2"
            px="4"
            position="absolute"
            top="55px"
            left="0"
            right="0"
            zIndex="999"
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={4}
              color="white"
            >
              <Link
                sx={{ "&:hover": { color: "red" }, fontSize: "lg" }}
                className="nav-link home"
                onClick={() => {
                  ScrollToTop();
                  onClose();
                }}
              >
                Home
              </Link>
              <Link
                _hover={{ color: "red" }}
                className="nav-link about"
                onClick={() => {
                  scrollToSection("about");
                  onClose();
                }}
              >
                About
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                className="nav-link skills"
                onClick={() => {
                  scrollToSection("skills");
                  onClose();
                }}
              >
                My Skills
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                className="nav-link projects"
                onClick={() => {
                  scrollToSection("projects");
                  onClose();
                }}
              >
                Projects
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                className="nav-link contact"
                onClick={() => {
                  scrollToSection("contact");
                  onClose();
                }}
              >
                Contact
              </Link>
              <Button
                colorScheme="blue"
                onClick={() => {
                  downloadResume();
                  onClose();
                }}
                variant={"outline"}
                className="nav-link resume"
                id="resume-button-2"
                w="100%"
              >
                Resume
                <Box as="span" mx="5px">
                  <FaDownload />
                </Box>
              </Button>
            </Flex>
          </Box>
        )}
      </Box>

      {/* Scroll to top button */}
      <button id="btnScrollToTop" onClick={ScrollToTop}>
        <i className="material-icons">arrow_upward</i>
      </button>
    </>
  );
};

export default Navbar;
