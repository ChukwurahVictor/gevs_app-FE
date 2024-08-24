"use client";

import {
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/schema";
import AppInput from "@/components/app-input";
import Link from "next/link";
import AppButton from "@/components/app-button";
import { useLoginMutation } from "@/services/mutations/auth.mutation";
import { useRouter } from "next/navigation";
import { Text } from "@/components/app-text";
import { LoginType } from "@/types/auth";
import LoginImg from "@/assets/icons/loginImg.svg"

const Login = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const router = useRouter();
  const loginMutation = useLoginMutation();
  const { mutateAsync: login, isLoading } = loginMutation;

  const formHook = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  } as { resolver: Resolver<any> });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook;

  const submit: SubmitHandler<LoginType> = async (data: LoginType) => {
    const result = await login(data);
    try {
      if (!result) {
        return;
      }
      if (result) {
        toast.success(result.result.message || "Login Successful!");
        sessionStorage.setItem("userData", JSON.stringify(result.result));
        if (result.result.user.isAdmin) {
          return router.push("/admin/dashboard");
        }
        return router.push("/voter/dashboard");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
      throw new Error(error);
    }
  };

  return (
    <>
      <Flex justify="center" mt="5rem">
        <Text fontWeight="bold" variant="heading1" color="#9C0D38">
          Welcome Back!
        </Text>
      </Flex>
      <Flex alignItems="center" mt="8.3rem">
        {isLargerThan800 && (
          <Flex
            w={{ base: "60%", md: "70%", "2xl": "70%" }}
            align={"center"}
          >
            <Image
              src={LoginImg}
              alt="LoginImg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Flex>
        )}
      </Flex>

        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width={{ base: "100%", md: "70%" }}
          m="auto"
        >
          <Box>
            <form onSubmit={handleSubmit(submit)}>
              <Flex
                width={{ base: "30rem", sm: "40rem", md: "45rem" }}
                gap="2rem"
                justifyContent={"center"}
                direction={"column"}
              >
                <AppInput
                  type="email"
                  label="Email"
                  placeholder="johndoe@email.com"
                  register={register("email")}
                  errorMessage={errors.email?.message}
                />
                <AppInput
                  type="password"
                  label="Password"
                  placeholder="********"
                  register={register("password")}
                  errorMessage={errors.password?.message}
                />
              </Flex>
              <Flex justify={"end"}>
                <Link href="/auth/request-reset-password">
                  <Text
                    variant="label"
                    color="typography.wine"
                    cursor="pointer"
                  >
                    Forgot Password?
                  </Text>
                </Link>
              </Flex>
              <AppButton
                loading={isLoading}
                type="submit"
                variant="primary"
                mt="3rem"
                w="full"
                style={{ borderRadius: "4rem" }}
              >
                Login
              </AppButton>
            </form>
            <Flex justify={"center"} alignItems={"center"} mt={"2rem"}>
              <Text mr={"1rem"}>Don’t have an account? </Text>

              <Link href="/auth/register">
                <Text
                  variant="label"
                  color="typography.wine"
                  cursor="pointer"
                >
                  Register
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
    </>
  );
};

export default Login;
