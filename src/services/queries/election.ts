import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";

export const UseFetchElectionSummary = () => {
  return useQuery(["fetchElectionSummary"], async () => {
    const { data } = await axios.get(urls.electionSummaryUrl);
    return data.result;
  });
};

export const UseFetchElection = () => {
  return useQuery(["fetchElection"], async () => {
    const { data } = await axios.get(urls.electionUrl);
    return data.result;
  });
};

export const UseFetchElectionResults = () => {
  return useQuery(["fetchElectionResults"], async () => {
    const { data } = await axios.get(urls.electionResultsUrl);
    return data.result;
  });
};
