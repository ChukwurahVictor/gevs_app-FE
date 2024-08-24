import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import urls from "../urls";

export const UseFetchConstituencies = () => {
  return useQuery(["fetchConstituencies"], async () => {
    const { data } = await axios.get(urls.fetchConstituenciesUrl);
    return data.result;
  });
};

export const UseFetchConstituency = (id: string) => {
  return useQuery(["fetchConstituency", id], async () => {
    const { data } = await axios.get(urls.fetchConstituencyUrl(id));
    return data.result;
  },{
    enabled: !!id,
  });
};

export const UseFetchConstituencyResults = () => {
  return useQuery(["fetchConstituencyResults"], async () => {
    const { data } = await axios.get(urls.resultsUrl);
    return data.result;
  });
};

export const UseFetchConstituencyElectionResults = () => {
  return useQuery(["fetchConstituencyElectionResults"], async () => {
    const { data } = await axios.get(urls.constituencyElectionResults);
    return data.result;
  });
};
