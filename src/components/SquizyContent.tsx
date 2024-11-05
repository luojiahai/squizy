import React from "react";
import Container from "@mui/material/Container";
import { Page } from "../hooks/usePageState";
import { Button } from "@mui/material";

interface SquizyContentProps {
  page: Page;
}

export const SquizyContent = (props: SquizyContentProps) => {
  if (props.page === Page.Start) {
    return (
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <div>
          <h1>Start</h1>
          <Button variant="contained" color="primary">
            Click
          </Button>
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
