"use client";

import type { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { VotersNavItems } from "./components/nav-items";
import NavBar from "@/components/navbar";
import SideMenu from "@/components/side-menu";

export type Children = {
  children: ReactNode;
};

const VoterLayout = ({ children }: Children) => {
  return (
    <Flex bg={useColorModeValue("#F1F9F8", "grey.100")} pr={{ base: "unset" }}>
      <NavBar />
      <SideMenu navItems={VotersNavItems} items={children} />
    </Flex>
  );
};

export default VoterLayout;
