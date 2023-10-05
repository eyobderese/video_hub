import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenera = () => {
  const { Data, error, isLoding } = useData<Genre>("/genres");
  return { Data, error, isLoding };
};

export default useGenera;
