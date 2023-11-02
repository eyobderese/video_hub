import useTrailer from "../hooks/useTrailer";
import { Box } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer({ gameId });

  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box padding={5}>
      <video
        width={600}
        src={data?.results[0]?.data[480]}
        poster={data?.results[0]?.preview}
        controls
      />
    </Box>
  );
};

export default GameTrailer;
