import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import MyPhoto from "../../assets/image/my-photo.jpg";
import { ABOUT_ME_DATA } from "../../constants/about-me-data";
import { useNav } from "../../customHooks/useNav";

const AboutMeSection = () => {
  const aboutRef = useNav("About");
  return (
    <Flex
      width="100%"
      paddingX="60px"
      marginTop="-70px"
      paddingTop="70px"
      id="about-section"
      ref={aboutRef}
    >
      <Img width="50%" height="100%" src={MyPhoto} alt="my-photo" />
      <Box p="3rem" width="50%">
        <Heading marginBottom={5} fontSize="50px">
          About Me
        </Heading>
        <Text
          marginBottom={6}
          color="#999999"
          textAlign="justify"
          lineHeight="1.8"
        >
          Software Developer with over 3 years of successful experience in
          developing websites. Recognized consistently for performance
          excellence and contributions to success in the projects. Specialized
          in writing effective and reusable code. Strong in design and
          integration problem-solving skills. practiced and implemented the
          principles of the object oriented design principles and software
          design principles.
        </Text>
        <Box>
          {ABOUT_ME_DATA.map((detail) => (
            <Flex marginBottom="10px">
              <Text width="130px" color="black" fontWeight="600">
                {detail.key}:
              </Text>
              <Text color="#999999" fontWeight="500" fontSize="14px">
                {detail.value}
              </Text>
            </Flex>
          ))}
        </Box>
        <Button colorScheme="blue" borderRadius="full" mt={3}>
          Download Resume
        </Button>
      </Box>
    </Flex>
  );
};

export default AboutMeSection;
