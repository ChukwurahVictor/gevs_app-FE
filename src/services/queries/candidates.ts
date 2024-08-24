import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";

export const UseFetchCandidates = () => {
  return useQuery(["fetchCandidates"], async () => {
    const { data } = await axios.get(urls.fetchCandidateUrl);
    return data.result;
  });
};
