export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const urls = {
  registerUrl: `${baseUrl}/gevs/auth/signup`,
  loginUrl: `${baseUrl}/gevs/auth/login`,
  fetchCandidateUrl: `${baseUrl}/candidates`,
  fetchConstituenciesUrl: `${baseUrl}/constituencies`,
  fetchConstituencyUrl: (id: string) => `${baseUrl}/constituencies/${id}`,
  fetchUsersUrl: `${baseUrl}/users`,
  voteUrl: `${baseUrl}/users/vote`,
  resultsUrl: `${baseUrl}/elections/results`,
  electionSummaryUrl: `${baseUrl}/elections/summary`,
  electionUrl: `${baseUrl}/elections`,
  electionResultsUrl: `${baseUrl}/gevs/results`,
  startElectionUrl: (id: string) => `${baseUrl}/elections/${id}/start`,
  endElectionUrl: (id: string) => `${baseUrl}/elections/${id}/end`,
  constituencyElectionResults: `${baseUrl}/constituencies/results`,
};

export default urls;
