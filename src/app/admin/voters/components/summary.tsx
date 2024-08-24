import React from "react";
import CustomSpinner from "@/components/custom-spinner";
import DashboardStats from "@/components/dashboard-stats";
import { UseFetchElectionSummary } from "@/services/queries/election";
import { Box, Flex } from "@chakra-ui/react";

const VotersSummary = () => {
  const { data, isLoading, isSuccess } = UseFetchElectionSummary();
  return (
    <Box borderRadius={"1rem"} py="1.5rem">
      <Flex flexDir={{ base: "column", md: "row" }} gap="4">
        {isLoading && <CustomSpinner />}
        {isSuccess && (
          <DashboardStats
            label="Total number of Voters"
            providerStat={data?.totalVoters ?? 0}
            iconType="candidates-icon"
          />
        )}
      </Flex>
    </Box>
  );
};

export default VotersSummary;
