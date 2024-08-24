"use client";

import NavBar from "@/components/navbar";
import SideMenu from "@/components/side-menu";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { AdminNavItems } from "./components/nav-items";
import { useRouter } from "next/navigation";

export type Children = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Children) => {
  const router = useRouter();
  const userObj =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("userData") as string);

  if (!userObj?.user?.isAdmin) {
    router.push("/voter/dashboard");
  }

  return (
    <>
      <Flex
        bg={useColorModeValue("#F1F9F8", "grey.100")}
        pr={{ base: "unset" }}
      >
        <NavBar />
        <SideMenu navItems={AdminNavItems} items={children} />
      </Flex>
    </>
  );
};

export default AdminLayout;
