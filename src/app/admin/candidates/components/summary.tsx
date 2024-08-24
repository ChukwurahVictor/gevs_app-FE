import React from "react";
import DashboardStats from "@/components/dashboard-stats";
import { UseFetchElectionSummary } from "@/services/queries/election";
import { Box, Flex } from "@chakra-ui/react";
import CustomSpinner from "@/components/custom-spinner";

const CandidatesSummary = () => {
  const { data, isLoading, isSuccess } = UseFetchElectionSummary();
  return (
    <>
      {isLoading && <CustomSpinner />}
      {isSuccess && (
        <Box borderRadius={"1rem"} py="1.5rem">
          <Flex flexDir={{ base: "column", md: "row" }} gap="4">
            <DashboardStats
              label="Total number of Candidates"
              providerStat={data?.totalCandidates ?? 0}
              iconType="candidates-icon"
            />
            <DashboardStats
              label="Total number of Parties"
              providerStat={data?.totalParties ?? 0}
              iconType="party-icon"
            />
            <DashboardStats
              label="Total no. of Constituencies"
              providerStat={data?.totalConstituencies ?? 0}
              iconType="constituency-icon"
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default CandidatesSummary;
