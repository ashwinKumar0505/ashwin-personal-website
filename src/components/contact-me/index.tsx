import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Image,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { BiDirections } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { CONTACT_DATA } from "../../constants/contact-data";
import gokuImage from "../../assets/image/goku.png";
import { useNav } from "../../customHooks/useNav";

const ContactMe = () => {
  const contactRef = useNav("Contact");
  const getIcon = (name: string) => {
    switch (name) {
      case "Address":
        return BiDirections;
      case "Contact Number":
        return IoMdCall;
      case "Email Address":
        return MdEmail;
      default:
        return BiWorld;
    }
  };
  return (
    <Box
      width="100%"
      paddingX="60px"
      marginTop="-70px"
      paddingTop="70px"
      marginBottom={5}
      id="contact-section"
      ref={contactRef}
    >
      <Heading textAlign="center" fontSize="30px" mb={15}>
        CONTACT ME
      </Heading>
      <Box mb={10}>
        <Flex justifyContent="space-between" mb={10}>
          {CONTACT_DATA.map((data) => (
            <Flex
              p={5}
              boxShadow="0 0.5rem 1rem rgb(0 0 0 / 15%)"
              flexDirection="column"
              alignItems="center"
              m={5}
              width="33%"
              height="250px"
              justifyContent="center"
              borderRadius="10px"
            >
              <Flex
                height={20}
                width={20}
                p={5}
                backgroundColor="blue.500"
                mb={8}
                borderRadius="100"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={getIcon(data.name)} color="white" w={10} h={10} />
              </Flex>
              <Text fontSize="18px" mb={2} fontWeight="600">
                {data.name}
              </Text>
              <Text color="blue.800" fontSize="14px" fontWeight="500">
                {data.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex borderRadius="10px">
        <Box width="40%" borderLeftRadius="10px">
          <Image
            src={gokuImage}
            alt="goku-image"
            w="100%"
            height="500px"
            borderLeftRadius="10px"
          />
        </Box>
        <Flex
          width="60%"
          backgroundColor="#f8f9fa"
          p={10}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRightRadius="10px"
        >
          <Input
            w="100%"
            height="50px"
            placeholder="Enter Your Name"
            mb={4}
            backgroundColor="white"
          />
          <Input
            w="100%"
            height="50px"
            placeholder="Enter Your Email"
            mb={4}
            backgroundColor="white"
          />
          <Input
            w="100%"
            height="50px"
            placeholder="Subject"
            mb={4}
            backgroundColor="white"
          />
          <Textarea
            w="100%"
            height="150px"
            placeholder="Message"
            mb={4}
            backgroundColor="white"
          />
          <Button colorScheme="blue" width="100%">
            Send Message
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactMe;
