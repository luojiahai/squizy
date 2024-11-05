import React from "react";
import { CssBaseline } from "@mui/material";
import { SquizyAppBar } from "./components/SquizyAppBar";
import { AppTheme } from "./theme/AppTheme";
import { SquizyContent } from "./components/SquizyContent";
import { usePageState } from "./hooks/usePageState";

export const App = () => {
  const { page, setPage } = usePageState();
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <SquizyAppBar setPage={setPage} />
      <SquizyContent page={page} />
    </AppTheme>
  );
};
