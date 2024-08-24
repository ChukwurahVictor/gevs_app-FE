'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import toast from "react-hot-toast";
import VoterLayout from "../../../layout";
import ConfirmationModal from "../../../components/confirmation-modal";
import AppButton from "@/components/app-button";
import { UseFetchConstituency } from "@/services/queries/constituencies";
import { Text } from "@/components/app-text";
import { useVoteMutation } from "@/services/mutations/vote.mutation";
import CustomSpinner from "@/components/custom-spinner";

const Vote = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [candidateId, setCandidateId] = useState("");
  
  const pathname = usePathname();
  const idWithVote = pathname.replace("/voter/dashboard/", "");
  const electionId = idWithVote.replace("/vote", "");

  const { mutateAsync: vote } = useVoteMutation();

  const user = JSON.parse(sessionStorage.getItem("userData")!);

  const { data, isLoading, isSuccess } =
    UseFetchConstituency(
      user?.user?.constituencyId as string
    );
  
  const handleVote = async (data: string) => {
    const result = await vote({
      constituencyId: user?.user?.constituencyId as string,
      candidateId: data,
      electionId,
    });
    try {
      if (!result) {
        return;
      }
      if (result) {
        toast.success(result.result.message || "Vote Successful!");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
      throw new Error(error);
    }
  }
  
  return (
    <>
      <Text variant="heading3">
        Your Vote is Safe and Secure, Your Vote Counts
      </Text>
      <Text variant="heading5">
        You can only vote once and for one candidate.{" "}
      </Text>
      {isLoading && <CustomSpinner />}
      {isSuccess && (
        <Box p={"2.5rem"} mt="3rem" mb={"3rem"} bg="brand.white">
          <Flex justify={"center"}>
            <Text variant="heading6" fontWeight="bold" mb={"2.5rem"}>
              {data?.name}
            </Text>
          </Flex>
          <Flex my="3rem" flexDir={"column"} gap={8}>
            {data?.candidates.map((item: any) => {
              return (
                <Flex
                  justify={"space-between"}
                  alignItems={"center"}
                  key={item.id}
                  mx={{ base: "3rem", md: "10rem" }}
                  flexDir={{ base: 'column', md: "row" }}
                >
                  <Avatar size={"lg"} />
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    minWidth={"20rem"}
                  >
                    <Text variant="heading3">{item?.name}</Text>
                    <Text>{item?.party.name}</Text>
                  </Flex>
                  <AppButton
                    variant="primary"
                    style={{ borderRadius: "4rem" }}
                    onClick={() => {
                      setCandidateId(item.id), setOpenConfirmModal(true);
                    }}
                  >
                    Vote
                  </AppButton>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      )}

      <ConfirmationModal
        body={"Do you want to vote for this candidate?"}
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={() => {
          handleVote(candidateId);
          setOpenConfirmModal(false);
        }}
      />
    </>
  );
};

Vote.getLayout = (page: any) => <VoterLayout>{page}</VoterLayout>;
Vote.requireAuth = true;
export default Vote;
