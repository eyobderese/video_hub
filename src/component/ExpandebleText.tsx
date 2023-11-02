import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  mytext: string | undefined;
}

const ExpandableText = ({ mytext }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!mytext) return null;

  if (mytext.length <= limit) return <Text>{mytext}</Text>;

  const summary = expanded ? mytext : mytext.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
