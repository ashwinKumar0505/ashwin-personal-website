import { Box, Flex, Heading } from "@chakra-ui/react";
import Typical from "react-typical";

const TitleSection = () => {
  return (
    <Flex height="100vh" width="100%" position="relative">
      <Box height="100%" width="50%" backgroundColor="#3e64ff" opacity="0.1" />
      <Box height="100%" width="50%" backgroundColor="white" />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        margin="auto"
        width="fit-content"
        height="fit-content"
        textAlign="center"
      >
        <Heading color="blue.400" fontSize="16px" fontWeight="800">
          Hey! IAM
        </Heading>
        <Heading fontSize="60px" fontWeight="800" lineHeight="1.5">
          ASHWIN KUMAR
        </Heading>
        <Heading fontSize="24px" fontWeight="800">
          I'm a{" "}
          <Box as="span" color="blue.500" textDecoration="underline">
            <Typical
              steps={[
                " Software Developer 💻",
                2000,
                " Full Stack Developer 💻",
                2500,
                " Traveller ✈️",
                2000,
                " Gamer 🎮",
                2000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </Box>
        </Heading>
      </Box>
    </Flex>
  );
};

export default TitleSection;
