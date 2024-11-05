import React from "react";
import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppAppBar";
import AppTheme from "./theme/AppTheme";
import Content from "./components/AppContent";
import { usePageState } from "./hooks/usePageState";

const Squizy = () => {
  const { page, setPage } = usePageState();
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar setPage={setPage} />
      <Content page={page} />
    </AppTheme>
  );
};

export default Squizy;
