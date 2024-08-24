"use client";

import React from "react";
import VoterLayout from "../layout";
import { Text } from "@/components/app-text";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import RedDot from "@/assets/icons/redDot.svg";
import GreenDot from "@/assets/icons/greenDot.svg";
import VoteImg from "@/assets/icons/voteImg.svg";
import AppButton from "@/components/app-button";
import { useRouter } from "next/navigation";
import { UseFetchElection } from "@/services/queries/election";
import moment from "moment";

const Dashboard = () => {
  const router = useRouter();
  const userObj =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("userData") as string);

  const { data: election, isLoading, isSuccess } = UseFetchElection();
  return (
    <>
      <Flex gap={2}>
        <Text variant="heading2" fontWeight="bold">
          Hello,
        </Text>
        <Text variant="heading2" fontWeight="bold" color={"typography.wine"}>
          {userObj?.user?.firstName}
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="2rem">
        <Box p={"2.5rem"} bg="brand.white" borderRadius={"1rem"}>
          <Flex flexDir={"column"}>
            <Text variant="heading3">Active Election</Text>
            {election?.status == "Pending" ? (
              <Text>{election?.title}</Text>
            ) : (
              <Text>No active Election</Text>
            )}
          </Flex>
          <Flex flexDir={"column"} alignItems={"center"} mt="1.5rem">
            <Image src={VoteImg} alt={"vote-img"} />
            <AppButton
              onClick={() =>
                router.push(`/voter/dashboard/${election?.id}/vote`)
              }
              style={{ borderRadius: "3rem", padding: "0 3rem" }}
              isDisabled={election?.status !== "Pending"}
            >
              VOTE
            </AppButton>
          </Flex>
        </Box>
        <Box p={"2.5rem"} bg="brand.white" borderRadius={"1rem"}>
          <Flex flexDir={"column"}>
            <Text variant="heading3">Activity</Text>
            <Flex gap={8}>
              <Flex gap={2}>
                <Image src={GreenDot} alt={"green-dot"} />
                <Text>Active</Text>
              </Flex>
              <Flex gap={2}>
                <Image src={RedDot} alt={"red-dot"} />
                <Text>Concluded</Text>
              </Flex>
            </Flex>
            <Flex gap={8} mt="4rem" flexDir={{ base: "column", md: "row" }}>
              <Text fontWeight="semiBold">{election?.title}</Text>
              <Image
                src={election?.status == "Pending" ? GreenDot : RedDot}
                alt={"red-dot"}
              />
              <Text>{moment(election?.createdAt).format("DD-MM-YYYY")}</Text>
            </Flex>
            <Flex gap={8} mt="4rem" flexDir={{ base: "column", md: "row" }}>
              <Text fontWeight="semiBold">Shangri-la-Town Constituency </Text>
              <Image src={RedDot} alt={"green-dot"} />
              <Text>15th Jan 2022</Text>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};

Dashboard.getLayout = (page: any) => <VoterLayout>{page}</VoterLayout>;
Dashboard.requireAuth = true;
export default Dashboard;
