import { Box, Heading, Flex } from "@chakra-ui/react";
import { BLOGS_DATA } from "../../constants/projects.data";
import Card from "../card";

const BlogsSection = () => {
  return (
    <Box width="100%" paddingX="60px" marginBottom={20}>
      <Heading textAlign="center" fontSize="30px" mb={15}>
        PERSONAL BLOGS
      </Heading>
      <Box>
        <Flex justifyContent="space-between" mb={10}>
          {BLOGS_DATA.map((data) => {
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

export default BlogsSection;
