import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import MyPhoto from "../../assets/image/my-photo.jpg";

const AboutMeSection = () => {
  const informationDetails: { key: string; value: string }[] = [
    {
      key: "Name",
      value: "Ashwin Kumar",
    },
    {
      key: "Date of birth",
      value: "05-05-1999",
    },
    {
      key: "Address",
      value: "30/2b Thiruvalluvar Road, Virudhunagar",
    },
    {
      key: "Zip Code",
      value: "626002",
    },
    {
      key: "Email",
      value: "ashwin.gps@gmail.com",
    },
  ];

  return (
    <Flex width="100%" paddingX="60px" marginBottom={20}>
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
          {informationDetails.map((detail) => (
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
