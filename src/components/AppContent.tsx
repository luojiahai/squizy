import React from "react";
import Container from "@mui/material/Container";
import { Page } from "../hooks/usePageState";

interface AppContentProps {
  page: Page;
}

const AppContent = (props: AppContentProps) => {
  if (props.page === Page.Start) {
    return (
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <div>
          <h1>Start</h1>
        </div>
      </Container>
    );
  }
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <div>
        <h1>Content</h1>
      </div>
    </Container>
  );
};

export default AppContent;
