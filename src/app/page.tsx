'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import styles from "./page.module.css";
import NavBar from "@/components/navbar";
import BannerImg from "@/assets/icons/bannerImg.svg";
import AppButton from "@/components/app-button";
import ResultsIcon from "@/assets/icons/resultsIcon";
import SecureIcon from "@/assets/icons/secureIcon";
import WebappIcon from "@/assets/icons/webappIcon";
import CastVoteIcon from "@/assets/icons/castVoteIcon";
import RegVotersImg from "@/assets/icons/regVotersImg.svg";
import WorksImg from "@/assets/icons/worksImg.svg";

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <NavBar />
      <section className={styles.banner}>
        <Flex
          mt="67px"
          pt="5rem"
          px={{ base: "2rem", md: "5rem" }}
          justify={"space-between"}
          alignItems={"center"}
          flexDir={{ base: "column", sm: "row" }}
          gap={8}
        >
          <Flex flexDir={"column"} py="5rem">
            <Flex flexDir={"column"}>
              <Text
                fontSize={{ base: "32px", md: "48px" }}
                fontWeight={700}
                color={"#474747"}
              >
                Fast and Secured
              </Text>
              <Text
                fontSize={{ base: "32px", md: "48px" }}
                fontWeight={700}
                color={"#474747"}
              >
                Voting System
              </Text>
            </Flex>
            <Flex w={{ base: "100%", md: "75%" }}>
              <Text fontSize={{ base: "12px", md: "16px" }} fontWeight={400}>
                Enjoy voting from the comfort of your home. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna{" "}
              </Text>
            </Flex>
            <AppButton
              mt={"2rem"}
              w="fit-content"
              style={{ borderRadius: "24px" }}
              onClick={() => router.push("/auth/register")}
            >
              Register as a Voter
            </AppButton>
          </Flex>
          <Flex style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={BannerImg}
              alt={"online-vote-transformed"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
          </Flex>
        </Flex>
      </section>
      <section className={styles.features}>
        <Flex justify={"center"} pt="100px">
          <Text fontSize="40px">Our Features</Text>
        </Flex>
        <Flex
          justify={"space-around"}
          flexDir={{ base: "column", md: "row" }}
          mt="24px"
          gap={8}
          px={{ base: "2rem", md: "5rem" }}
        >
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            w={{ base: "100%", md: "30%" }}
          >
            <ResultsIcon />
            <Text>Realtime Results</Text>
            <Text align={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            w={{ base: "100%", md: "30%" }}
          >
            <SecureIcon />
            <Text>Fast and secured Platform</Text>
            <Text align={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Text>
          </Flex>
        </Flex>
        <Flex
          justify={"space-around"}
          flexDir={{ base: "column", md: "row" }}
          mt="32px"
          pb="152px"
          gap={8}
          px={{ base: "2rem", md: "5rem" }}
        >
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            w={{ base: "100%", md: "30%" }}
          >
            <WebappIcon />
            <Text>Web App Based Voting Platform</Text>
            <Text align={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            justify={"center"}
            alignItems={"center"}
            w={{ base: "100%", md: "30%" }}
          >
            <CastVoteIcon />
            <Text>A Pleasant way to cast Votes</Text>
            <Text align={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Text>
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex justify={"center"}>
          <Text fontSize="40px  ">Monitor the voting process</Text>
        </Flex>
        <Flex>
          <Flex justify={"space-around"} mt="5rem" w="100%">
            <Image src={RegVotersImg} alt={"registered-voters"} />
            <Image src={RegVotersImg} alt={"registered-voters"} />
            <Image src={RegVotersImg} alt={"registered-voters"} />
          </Flex>
        </Flex>
      </section>
      <section className={styles.steps}>
        <Flex justify={"center"} pt="47px">
          <Text fontSize="40px  ">How it works</Text>
        </Flex>
        <Flex justify="space-between" alignItems={"center"} ml="3rem">
          <Flex flexDir={"column"} mt="8rem">
            <Flex gap={2}>
              <Avatar bg="#9C0D38" name="1" size="lg" mt=".8rem" />
              <Flex flexDir={"column"} gap={8}>
                <Text fontSize={{ base: "24px", md: "32px" }} color="#474747">
                  Register as a Voter
                </Text>
                <Text>Create an account on the platform.</Text>
              </Flex>
            </Flex>
            <Flex mt="8rem" gap={2}>
              <Avatar bg="#9C0D38" name="2" size="lg" mt=".8rem" />
              <Flex flexDir={"column"} gap={8}>
                <Text fontSize={{ base: "24px", md: "32px" }} color="#474747">
                  Vote
                </Text>
                <Text>select and Vote your preferred candidate.</Text>
              </Flex>
            </Flex>
            <Flex mt="8rem" gap={2}>
              <Avatar bg="#9C0D38" name="3" size="lg" mt=".8rem" />
              <Flex flexDir={"column"} gap={8}>
                <Text fontSize={{ base: "24px", md: "32px" }} color="#474747">
                  View Election Results
                </Text>
                <Text>View Election Results of the various Candidates.</Text>
              </Flex>
            </Flex>
          </Flex>
          <Image src={WorksImg} alt={"alslmdls"} />
        </Flex>
      </section>
    </main>
  );
}
