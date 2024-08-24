"use client";

import { UseFetchConstituencyResults } from "@/services/queries/constituencies";
import React from "react";
import AdminSummary from "./components/summary";
import Chart from "@/components/chart";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@/components/app-text";
import CustomSpinner from "@/components/custom-spinner";

const Dashboard = () => {
  const { data, isLoading, isSuccess } = UseFetchConstituencyResults();

  return (
    <Box>
      <AdminSummary />
      {isLoading && <CustomSpinner />}
      {isSuccess &&
        <Box width={"100%"} mt="1.5rem">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {data?.map((item: any) => {
              return (
                <Box
                  bg={"brand.white"}
                  mt="1rem"
                  p={{ base: "1rem", md: "2rem" }}
                  height={{ base: "42rem", md: "38rem" }}
                  borderRadius="1rem"
                  key={item.id}
                >
                  <Text variant="heading6" fontWeight="bold">{item.name} Constituency</Text>
                  <Chart
                    candidate={item.candidates.map((candidate: any) => {
                      return candidate;
                    })}
                  />
                </Box>
              );
            })}
            </SimpleGrid>
        </Box>
      }
    </Box>
  );
};

export default Dashboard;
