import axios, { AxiosRequestConfig } from "axios";

export interface FatchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d72bf6b2debd4bcca3e7d2b9135a31a8",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return AxiosInstance.get<FatchResponse<T>>(this.endPoint, config).then(
      (res) => res.data
    );
  };

  get = (id: string | number) =>
    AxiosInstance.get<T>(this.endPoint + "/" + id).then((res) => res.data);
}

export default APIClient;
