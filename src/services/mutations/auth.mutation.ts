import axios from "../axios";
import urls from "../urls";
import { useMutation } from "@tanstack/react-query";

import { LoginType, RegisterType } from "@/types/auth";

export const useLoginMutation = () =>
  useMutation(["login"], async (login: LoginType) => {
    const res = await axios.post(urls.loginUrl, login);
    return res.data;
  });

export const useRegisterMutation = () =>
  useMutation(["register"], async (register: RegisterType) => {
    const res = await axios.post(urls.registerUrl, register);
    return res.data;
  });
