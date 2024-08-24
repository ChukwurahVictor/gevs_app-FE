'use client';

import { Text } from "@/components/app-text";
import CustomSpinner from "@/components/custom-spinner";
import { UseFetchElectionResults } from "@/services/queries/election";
import { Box, Flex, GridItem } from "@chakra-ui/react";
import React from "react";

const ElectionSummary = () => {
  const { data, isLoading, isSuccess } = UseFetchElectionResults();
  return (
    <Box borderRadius={"1rem"} py="1.5rem">
      <Flex flexDir={{ base: "column", md: "row" }} gap="4">
        {isLoading && <CustomSpinner />}
        {isSuccess &&
          data?.seats?.map((item: any, index: number) => {
            return (
              <GridItem
                bg={"brand.white"}
                borderRadius={"1rem"}
                p={"2rem"}
                w={{ base: "100%", md: "24%" }}
                key={index}
              >
                <Flex
                  alignItems="center"
                  h="12.5rem"
                  flexDir={"column"}
                  justify={"center"}
                >
                  <Text variant="heading6" fontWeight="medium" color="#9C0D38">
                    {item?.party}
                  </Text>
                  <Text
                    variant="heading1"
                    fontWeight="bold"
                    mb={"-1rem"}
                    color={"#474747"}
                  >
                    {item?.seat}
                  </Text>
                  <Text variant="heading6" fontWeight="medium">
                    Seat(s)
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
      </Flex>
    </Box>
  );
};

export default ElectionSummary;
