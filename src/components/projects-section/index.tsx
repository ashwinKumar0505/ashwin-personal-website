import { Box, Heading, Flex } from "@chakra-ui/react";
import {
  COMPANY_PROJECTS_DATA,
  PERSONAL_PROJECTS_DATA,
} from "../../constants/projects.data";
import { useNav } from "../../customHooks/useNav";
import Card from "../card";

const ProjectSection = () => {
  const projectRef = useNav("Projects");
  return (
    <Box
      width="100%"
      paddingX="60px"
      marginTop="-70px"
      paddingTop="70px"
      marginBottom={16}
      id="projects-section"
      ref={projectRef}
    >
      <Heading textAlign="center" fontSize="30px" mb={15}>
        PROJECTS
      </Heading>
      <Box>
        <Heading fontSize="24px" mb={5} textAlign="center" color="gray.600">
          COMPANY PROJECTS
        </Heading>
        <Flex justifyContent="space-between" mb={10}>
          {COMPANY_PROJECTS_DATA.map((data) => {
            return (
              <Card
                title={data.name}
                description={data.description}
                link={data.link}
              />
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Heading fontSize="24px" mb={5} textAlign="center" color="gray.600">
          PERSONAL PROJECTS
        </Heading>
        <Flex justifyContent="space-between">
          {PERSONAL_PROJECTS_DATA.map((data) => {
            return (
              <Card
                title={data.name}
                description={data.description}
                link={data.link}
              />
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectSection;
