import useGenera from "./useGenres";

const useGenre = (genreID: number | undefined) => {
  const { data: Data } = useGenera();
  const genre = Data?.results.find((p) => p.id == genreID);

  return { genre, Data };
};

export default useGenre;
