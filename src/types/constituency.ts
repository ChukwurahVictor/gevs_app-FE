export interface ConstituencyQueryResponse {
  name: string;
  candidates: {
    id: string;
    name: string;
    party: {
      name: string;
    };
  };
}
