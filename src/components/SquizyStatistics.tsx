import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const SquizyStatistics = () => {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 2 }}
    >
      <Typography variant="h4">Statistics</Typography>
      <Typography variant="body1">Coming soon...</Typography>
    </Container>
  );
};
