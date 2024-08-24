"use client";

import React from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Text } from "../app-text";

type PropType = {
  candidate?: any;
}

const Chart = ({ candidate }: PropType) => {
  return (
    <Box h="70vh" mt="4rem">
      {candidate?.map((item: any, index: number) => (
        <Flex key={index} alignItems={"center"} mt="2rem">
          <Flex flexDir={"column"} w="30%">
            <Avatar name={item.name} size="md" />
            <Text variant="small">{item.name}</Text>
          </Flex>
          <Flex
            key={index}
            color="white"
            px={{ base: ".5rem", sm: "1rem" }}
            py=".5rem"
            borderRadius={"8px"}
            bg="#9C0D38"
            align="center"
            justify="center"
            w={{
              base: `${item.vote.length * 2}rem`,
              sm: `${item.vote.length * 3}rem`,
            }}
          >
            <Text color="white">{item.vote.length}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default Chart;
