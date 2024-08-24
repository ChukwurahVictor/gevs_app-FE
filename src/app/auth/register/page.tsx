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
import { RegisterSchema } from "@/schema";
import AppInput from "@/components/app-input";
import Link from "next/link";
import AppButton from "@/components/app-button";
import { useRegisterMutation } from "@/services/mutations/auth.mutation";
import { useRouter } from "next/navigation";
import { UseFetchConstituencies } from "@/services/queries/constituencies";
import { Text } from "@/components/app-text";
import { RegisterType } from "@/types/auth";
import RegisterImg from "@/assets/icons/registerImg.svg";
import CustomSelect from "@/components/custom-select";

const Register = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const router = useRouter();

  const registerMutation = useRegisterMutation();
  const { mutateAsync: registerFn, isLoading } = registerMutation;

  const { data: constituencyOptions } = UseFetchConstituencies();
  const reformedData = constituencyOptions?.map((item: any) => ({ value: item.id, label: item.name }));

  const formHook = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      constituencyId: "",
      uvcCode: "",
    },
  } as { resolver: Resolver<any> });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = formHook;

  const submit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    const result = await registerFn(data);
    try {
      if (!result) {
        return;
      }
      if (result) {
        toast.success(result.result.message || "Registration Successful!");
        sessionStorage.setItem("userData", JSON.stringify(result.result));
        if (result.result.isAdmin) {
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
      <Flex alignItems="center">
        {isLargerThan800 && (
          <Flex
            w={{ base: "60%", md: "70%", "2xl": "70%" }}
            h={{ base: "100% " }}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Flex flexDir={"column"} justify={"center"} alignItems={"center"}>
              <Text
                fontWeight="bold"
                variant={"heading2"}
                color="typography.wine"
              >
                Create an
              </Text>
              <Text
                fontWeight="bold"
                variant={"heading1"}
                color="typography.wine"
              >
                Account
              </Text>
            </Flex>
            <Image
              src={RegisterImg}
              alt="LoginImg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Flex>
        )}

        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width={{ base: "100%", md: "70%" }}
          m="auto"
          my="5rem"
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
                  placeholder="johndoe@mail.com"
                  register={register("email")}
                  errorMessage={errors.email?.message}
                />
                <AppInput
                  label="First Name"
                  placeholder="john"
                  register={register("firstName")}
                  errorMessage={errors.firstName?.message}
                />
                <AppInput
                  label="Last Name"
                  placeholder="doe"
                  register={register("lastName")}
                  errorMessage={errors.lastName?.message}
                />
                <AppInput
                  type="password"
                  label="Password"
                  placeholder="********"
                  register={register("password")}
                  errorMessage={errors.password?.message}
                />
                <AppInput
                  type="password"
                  label="Confirm Password"
                  placeholder="********"
                  register={register("confirmPassword")}
                  errorMessage={errors.confirmPassword?.message}
                />
                <AppInput
                  isDate
                  maxDate={new Date().toISOString().split("T")[0]}
                  label="Date of Birth"
                  placeholder="DD/MM/YYYY"
                  register={register("dateOfBirth")}
                  errorMessage={errors.dateOfBirth?.message}
                />
                <AppInput
                  type="qr-code"
                  label="UVC Code"
                  placeholder="Enter UVC Code"
                  register={register("uvcCode")}
                  errorMessage={errors.uvcCode?.message}
                />
                <CustomSelect
                  label="Constituency"
                  placeholder="--Select Constituency--"
                  options={reformedData}
                  register={register("constituencyId")}
                  error={errors.constituencyId?.message}
                  selectorStyles={{
                    borderRadius: "4rem",
                    border: "1px solid #9C0D38",
                  }}
                  onChange={(e: any) => {
                    setValue("constituencyId", e.value);
                  }}
                />
              </Flex>
              <AppButton
                loading={isLoading}
                type="submit"
                variant="primary"
                mt="3rem"
                w="full"
                style={{ borderRadius: "4rem" }}
              >
                Register
              </AppButton>
            </form>
            <Flex justify={"center"} alignItems={"center"} mt={"2rem"}>
              <Text mr={"1rem"}>Already have an account? </Text>

              <Link href="/auth/login">
                <Text variant="label" color="typography.wine" cursor="pointer">
                  Login
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
