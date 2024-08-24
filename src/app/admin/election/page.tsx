"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import AppButton from "@/components/app-button";
import ElectionSummary from "./components/summary";
import { Text } from "@/components/app-text";
import Content from "./components/content";
import { UseFetchElection } from "@/services/queries/election";
import {
  useEndElectionMutation,
  useStartElectionMutation,
} from "@/services/mutations/election.mutation";
import PartyIcon from "@/assets/icons/partyIcon";
import { UseFetchConstituencyElectionResults } from "@/services/queries/constituencies";
import CustomSpinner from "@/components/custom-spinner";
import ConfirmationModal from "@/app/voter/components/confirmation-modal";

const Election = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const { data: election, isLoading, isSuccess } = UseFetchElection();
  const {
    data: constituencyWinners,
    isLoading: loading,
    isSuccess: success,
  } = UseFetchConstituencyElectionResults();
  const { mutateAsync: startElection } = useStartElectionMutation();
  const { mutateAsync: endElection } = useEndElectionMutation();

  const handleStartElection = async () => {
    const result = await startElection(election?.id as string);
    try {
      if (!result) {
        return;
      }
      if (result) {
        return toast.success(result.message || "Election started successfully!");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
      throw new Error(error);
    }
  };

  const handleEndElection = async () => {
    const result = await endElection(election?.id as string);
    try {
      if (!result) {
        return;
      }
      if (result) {
        return toast.success(result.message || "Election ended successfully!");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
      throw new Error(error);
    }
  };

  return (
    <>
      <Flex justify="end">
        {election?.status == "NotStarted" || election?.status == "Completed" ? (
          <AppButton
            variant="primary"
            disabled={election?.status == "Completed"}
            onClick={() => setOpenConfirmModal(true)}
          >
            Start Election
          </AppButton>
        ) : (
          <AppButton variant="primary" onClick={() => setOpenConfirmModal(true)}>
            End Election
          </AppButton>
        )}
      </Flex>
      <ElectionSummary />
      <Box>
        <Text variant="heading6" fontWeight="bold">
          Winner
        </Text>
        <Flex
          justify={"center"}
          bg={"brand.white"}
          borderRadius="1rem"
          py="4rem"
          gap={2}
          alignItems={"center"}
        >
          {isLoading && <CustomSpinner />}
          {isSuccess && (
            <>
              {election.status === "Completed" ? (
                <>
                  <Text variant="heading1" fontWeight="bold">
                    {election?.winner}
                  </Text>
                  <PartyIcon />
                </>
              ) : (
                <Text variant="heading1" fontWeight="bold">
                  N/A
                </Text>
              )}
            </>
          )}
        </Flex>
      </Box>
      <Box my="3rem">
        <Text fontWeight="bold">MPs in Constituencies</Text>
        <Box width={"100%"} mt="1.5rem">
          {loading && <CustomSpinner />}
          {success && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {constituencyWinners?.results.map((winners: any) => {
                return (
                  <Content
                    key={winners?.constituency}
                    title={winners?.constituency ?? "N/A"}
                    name={winners?.winner?.name ?? "N/A"}
                    party={winners?.winner?.party ?? "N/A"}
                  />
                );
              })}
            </SimpleGrid>
          )}
        </Box>
      </Box>
      <ConfirmationModal
        body={
          election?.status == "Pending"
            ? "Do you want to end this election?"
            : "Do you want to start this election"
        }
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={() => {
          election?.status == "Pending"
            ? handleEndElection()
            : handleStartElection();
          setOpenConfirmModal(false);
        }}
      />
    </>
  );
};

export default Election;
