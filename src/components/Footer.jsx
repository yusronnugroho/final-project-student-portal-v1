import { Box, Text, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box className="footer">
      <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.300"
        borderColor="gray.400"
        borderTop="1px solid"
      >
        <Text className="studentName" mr={2}>
          Yusron Nugroho Aji
        </Text>
        <Text className="studentId">FE4666470</Text>
      </Flex>
    </Box>
  );
};

export default Footer;

// const studentName = "Yusron Nugroho Aji";
// const studentId = "FE4666470";
