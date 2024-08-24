"use client";

import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Flex, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "src/assets/icons/logo.svg";
import AppButton from "../app-button";
import { Text } from "../app-text";

const NavBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("merchant");
    router.push("/auth/login");
    toast.success("Logout Successful!");
  };

  const userObj =
    typeof window !== "undefined" &&
    JSON.parse(window.sessionStorage.getItem("userData") as string);

  return (
    <Flex
      px={4}
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      height="7.2rem"
      alignItems="center"
      bg={"white"}
      justifyContent={"space-between"}
    >
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          width={70}
          height={30}
          style={{ width: "auto" }}
        />
      </Link>
      {userObj ? (
        <Flex gap={2} alignItems="center">
          <Avatar
            size={"md"}
            name={userObj?.user?.firstName + "" + userObj?.user?.lastName}
          />
          <Text>
            {userObj?.user?.firstName + " " + userObj?.user?.lastName}
          </Text>
        </Flex>
      ) : (
        <Flex alignItems="center" gap={4}>
          <AppButton
            variant="outline"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </AppButton>
          <AppButton
            style={{ borderRadius: "4rem" }}
            onClick={() => router.push("/auth/register")}
          >
            Register
          </AppButton>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
