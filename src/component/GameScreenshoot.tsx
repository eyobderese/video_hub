import { Img, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot({ gameId });

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} padding={5}>
      {data?.results.map((im) => (
        <Img key={im.id} src={im.image} padding={3} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
