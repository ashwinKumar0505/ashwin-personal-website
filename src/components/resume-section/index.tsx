import {
  Flex,
  Box,
  Text,
  Heading,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/react";
import {
  EDUCATION_DETAILS,
  EXPERIENCE_DETAILS,
  EXTRA_SKILLS_DETAILS,
  MAIN_SKILLS_DETAILS,
} from "../../constants/resume-data";
import { GiRoundStruck } from "react-icons/gi";

const ResumeSection = () => {
  const headingLinks: { name: string; to: string }[] = [
    {
      name: "Experience",
      to: "experience",
    },
    {
      name: "Education",
      to: "education",
    },
    {
      name: "Skills",
      to: "skills",
    },
  ];

  return (
    <Flex>
      <Flex width="25%" justifyContent="center" paddingTop={20}>
        <Box>
          {headingLinks.map((link) => (
            <Text
              fontWeight="600"
              marginBottom={3}
              fontSize="18px"
              position="relative"
              _hover={{
                color: "#3e64ff",
                textDecoration: "underline",
              }}
              cursor="pointer"
              userSelect="none"
            >
              {link.name}
            </Text>
          ))}
        </Box>
      </Flex>
      <Box width="75%" p={10}>
        <Box mb={6} id="experience">
          <Heading
            fontSize="30px"
            fontWeight="800"
            marginBottom="30px"
            color="blue.500"
          >
            Experience
          </Heading>
          {EXPERIENCE_DETAILS.map((experience) => (
            <Flex borderBottom="1px solid rgba(0, 0, 0, 0.1)" mt={5}>
              <Box pr={5}>
                <Flex
                  width="35px"
                  height="35px"
                  borderRadius="full"
                  backgroundColor="blue.500"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={GiRoundStruck} fontSize="20px" color="white" />
                </Flex>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="blue.400">
                  {experience.year}
                </Text>
                <Heading fontSize="24px" fontWeight="700" marginBottom={3}>
                  {experience.title}
                </Heading>
                <Heading fontSize="18px" fontWeight="700" marginBottom={2}>
                  {experience.place}
                </Heading>
                <Text marginBottom={5} color="#999999">
                  {experience.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box mb={6} id="education">
          <Heading
            fontSize="30px"
            fontWeight="800"
            marginBottom="30px"
            color="blue.500"
          >
            Education
          </Heading>
          {EDUCATION_DETAILS.map((education) => (
            <Flex borderBottom="1px solid rgba(0, 0, 0, 0.1)" mt={5}>
              <Box pr={5}>
                <Flex
                  width="35px"
                  height="35px"
                  borderRadius="full"
                  backgroundColor="blue.500"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={GiRoundStruck} fontSize="20px" color="white" />
                </Flex>
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="700" color="blue.400">
                  {education.year}
                </Text>
                <Heading fontSize="24px" fontWeight="700" marginBottom={3}>
                  {education.title}
                </Heading>
                <Heading fontSize="18px" fontWeight="700" marginBottom={2}>
                  {education.place}
                </Heading>
                <Text marginBottom={5} color="#999999">
                  {education.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box mb={6} id="education">
          <Heading
            fontSize="30px"
            fontWeight="800"
            marginBottom="30px"
            color="blue.500"
          >
            Skills
          </Heading>
        </Box>
        <Flex flexWrap="wrap" mb={5} marginLeft="-15px">
          {MAIN_SKILLS_DETAILS.map((skill) => (
            <Box paddingX="15px" width={["100%", "100%", "33%"]}>
              <Flex
                mb={5}
                boxShadow="0 0.5rem 1rem rgb(0 0 0 / 15%)"
                alignItems="center"
                justifyContent="center"
                padding={5}
                flexDir="column"
                borderRadius="10px"
              >
                <Text fontSize="18px" mb={5} fontWeight="600">
                  {skill.name}
                </Text>
                <CircularProgress
                  value={parseInt(skill.percentage, 10)}
                  size="180px"
                  color="blue.500"
                  thickness="4px"
                >
                  <CircularProgressLabel fontSize="28px" fontWeight="bold">
                    {skill.percentage}%
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Box>
          ))}
        </Flex>
        <Flex flexWrap="wrap" mb={5} marginLeft="-15px">
          {EXTRA_SKILLS_DETAILS.map((skill) => (
            <Box width={["100%", "100%", "50%"]} paddingX="15px" mb={10}>
              <Flex
                justifyContent="space-between"
                paddingRight="15px"
                mb={2}
                fontWeight="500"
              >
                <Text>{skill.name}</Text>
                <Text>{skill.percentage}%</Text>
              </Flex>
              <Progress hasStripe value={parseInt(skill.percentage, 10)} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ResumeSection;
