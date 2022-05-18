import { Box, Heading, Flex } from "@chakra-ui/react";
import { OPEN_SOURCE_CONTRIBUTIONS_DATA } from "../../constants/projects.data";
import Card from "../card";

const OpenSourceContributionSection = () => {
  return (
    <Box width="100%" paddingX="60px" marginBottom={20}>
      <Heading textAlign="center" fontSize="30px" mb={15}>
        OPEN SOURCE CONTRIBUTION
      </Heading>
      <Box>
        <Flex justifyContent="space-between" mb={10}>
          {OPEN_SOURCE_CONTRIBUTIONS_DATA.map((data) => {
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

export default OpenSourceContributionSection;
