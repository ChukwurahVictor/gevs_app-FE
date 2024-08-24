import { VoteType } from "@/types/vote";
import axios from "../axios";
import urls from "../urls";
import { useMutation } from "@tanstack/react-query";

export const useVoteMutation = () =>
  useMutation(["vote"], async (vote: VoteType) => {
    const res = await axios.post(urls.voteUrl, vote);
    return res.data;
  });
