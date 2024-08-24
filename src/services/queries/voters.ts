import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";

export const UseFetchVoters = () => {
  return useQuery(["fetchVoters"], async () => {
    const { data } = await axios.get(urls.fetchUsersUrl);
    return data.result;
  });
};
