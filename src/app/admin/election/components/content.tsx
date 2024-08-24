import { Text } from "@/components/app-text";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

const Content = ({ title, name, party }: any) => {
  return (
    <Box bg="brand.white" p="1rem">
      <Flex justify="center">
        <Text variant="label" fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <Flex align="center" justify={"space-between"} p={{base: "1rem", md: "4rem" }}>
        <Avatar name={name} size={{ base: "lg", md: "2xl" }} />
        <Box>
          <Flex align="center" flexDir={"column"}>
            <Text
              variant="heading3"
              fontWeight="bold"
              mb={"-1rem"}
              color={"gray"}
            >
              {name}
            </Text>
            <Text>{party}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Content;
