import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FatchGameResponse {
  count: number;
  result: Game[];
}

function GameGrid() {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<FatchGameResponse>("/games")
      .then((res) => setGame(res.data.result))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
