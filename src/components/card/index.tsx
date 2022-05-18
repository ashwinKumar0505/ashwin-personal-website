import { Heading, Divider, Text, Link } from "@chakra-ui/react";

const Card = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="20px"
      width="30%"
      margin="10px"
      boxShadow="0 0 1px 1px rgba(0,0,0,0.1)"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="5px"
      _hover={{
        boxShadow: "0 0 3px 3px rgba(0,0,0,0.2)",
      }}
      target="_blank"
    >
      <Heading fontSize="20px" mb={5} color="blue.600" textAlign="center">
        {title}
      </Heading>
      <Divider
        orientation="horizontal"
        variant="dashed"
        mb={5}
        colorScheme="blue"
      />
      <Text fontStyle="italic" color="gray.700">
        {description}
      </Text>
    </Link>
  );
};

export default Card;
