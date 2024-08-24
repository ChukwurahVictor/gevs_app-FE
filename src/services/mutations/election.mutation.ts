import { VoteType } from "@/types/vote";
import axios from "../axios";
import urls from "../urls";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useStartElectionMutation = () => {
const queryClient = useQueryClient();
  return useMutation(
    ["startElection"],
    async (id: string) => {
      const res = await axios.patch(urls.startElectionUrl(id));
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["fetchElection"] });
      },
    }
  );
};

export const useEndElectionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ["endElection"],
    async (id: string) => {
      const res = await axios.patch(urls.endElectionUrl(id));
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["fetchElection"] });
        queryClient.invalidateQueries({
          queryKey: ["fetchConstituencyElectionResults"],
        });
        queryClient.invalidateQueries({ queryKey: ["fetchElectionResults"] });
      },
    }
  );
};
