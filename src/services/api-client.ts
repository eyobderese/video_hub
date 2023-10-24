import axios from "axios";

export interface FatchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d72bf6b2debd4bcca3e7d2b9135a31a8",
  },
});
