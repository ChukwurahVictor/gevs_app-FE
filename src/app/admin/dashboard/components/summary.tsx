import CustomSpinner from "@/components/custom-spinner";
import DashboardStats from "@/components/dashboard-stats";
import { UseFetchElectionSummary } from "@/services/queries/election";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

const AdminSummary = () => {
  const { data, isLoading, isSuccess } = UseFetchElectionSummary();
  return (
    <Box borderRadius={"1rem"} py="1.5rem">
      {isLoading && <CustomSpinner />}
      {isSuccess && (
        <Flex
          flexDir={{ base: "column", md: "row" }}
          width="100%"
          gap={{ base: "4", md: "2" }}
        >
          <DashboardStats
            label="Total number of Candidates"
            providerStat={data?.totalCandidates ?? 0}
            iconType="candidates-icon"
          />
          <Spacer />
          <DashboardStats
            label="Total number of Voters"
            providerStat={data?.totalVoters ?? 0}
            iconType="candidates-icon"
          />
          <Spacer />
          <DashboardStats
            label="Total no. of Constituencies"
            providerStat={data?.totalConstituencies ?? 0}
            iconType="constituency-icon"
          />
          <Spacer />
          <DashboardStats
            label="Total number of Parties"
            providerStat={data?.totalParties ?? 0}
            iconType="party-icon"
          />
        </Flex>
      )}
    </Box>
  );
};

export default AdminSummary;
