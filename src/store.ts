import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreID: number) => void;
  setPlatformId: (platformId: number) => void;
  serSortOrder: (sortOrder: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreID: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformId: (platformID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),
  serSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQuery;
