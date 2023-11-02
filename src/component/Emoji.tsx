import bull from "../assets/bulls-eye.webp";
import tamb from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
import { Game } from "../Entity/Game";

interface Props {
  game: Game;
}

const Emoji = ({ game }: Props) => {
  const EmojiMap: { [keys: number]: ImageProps } = {
    3: { src: tamb, alt: "tumbs up" },
    4: { src: bull, alt: "tumbs up" },
    5: { src: meh, alt: "tumbs up" },
  };
  if (game.rating_top < 3) return null;

  return (
    <Image {...EmojiMap[game.rating_top]} boxSize={"25px"} marginTop={1} />
  );
};

export default Emoji;
