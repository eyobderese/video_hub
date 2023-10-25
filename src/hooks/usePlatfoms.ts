import React from "react";
import usePlatform from "./usePlatform";

const usePlatfoms = (platformID: number | undefined) => {
  const { data: Data, error } = usePlatform();
  const platform = Data?.results.find((p) => p.id == platformID);

  return { platform, Data, error };
};

export default usePlatfoms;
