import { useState } from "react";

export enum Page {
  Start = "start",
  Library = "library",
  Statistics = "statistics",
}

export const usePageState = () => {
  const [page, setPage] = useState<Page>(Page.Start);
  return { page, setPage };
};
