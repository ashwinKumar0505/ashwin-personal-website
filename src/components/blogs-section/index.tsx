import { Box, Heading, Flex } from "@chakra-ui/react";
import { BLOGS_DATA } from "../../constants/projects.data";
import { useNav } from "../../customHooks/useNav";
import Card from "../card";

const BlogsSection = () => {
  const blogRef = useNav("Blogs");
  return (
    <Box
      width="100%"
      paddingX="60px"
      marginTop="-70px"
      paddingTop="70px"
      id="blogs-section"
      ref={blogRef}
    >
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
